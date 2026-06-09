import { useState, useRef, useEffect } from "react";
import {
  PanelLeftClose, PanelLeftOpen, ArrowUpDown, Edit, Check,
  Mail, MailOpen, Trash2, ChevronRight, EyeOff,
} from "lucide-react";
import type { CommsController } from "./useCommsController";
import { PP_TODAY, ppFormatDate, ppExpiryStatus } from "./useCommsController";
import { CommsToolbar, CommsPagination, CommsEmpty, ExpiryPill } from "./commsShared";
import { PreviewPane } from "./PreviewSurface";
import type { Post } from "./CommunicationsPage";

const L3_RAIL_CATS = [
  "All", "Features & Promotions", "Marketing", "New Product Listings",
  "Policies & Documents", "Support", "Product Availability", "Buy & Sell",
];

const L3_BUCKETS = [
  { key: "today", label: "Today" },
  { key: "yesterday", label: "Yesterday" },
  { key: "thisWeek", label: "This week" },
  { key: "lastWeek", label: "Last week" },
  { key: "lastMonth", label: "Last month" },
  { key: "thisYear", label: "This year" },
  { key: "older", label: "Older" },
];

function l3Bounds() {
  const today = new Date(PP_TODAY.getUTCFullYear(), PP_TODAY.getUTCMonth(), PP_TODAY.getUTCDate());
  const day = 86400000;
  const d0 = today.getTime();
  return {
    d0,
    yesterday: d0 - day,
    startOfWeek: d0 - today.getDay() * day,
    startOfLastWeek: d0 - (today.getDay() + 7) * day,
    startOfLastMonth: new Date(today.getFullYear(), today.getMonth() - 1, 1).getTime(),
    endOfLastMonth: new Date(today.getFullYear(), today.getMonth(), 1).getTime() - day,
    startOfThisYear: new Date(today.getFullYear(), 0, 1).getTime(),
  };
}

function l3BucketOf(dateStr: string, B: ReturnType<typeof l3Bounds>) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const t = new Date(y, m - 1, d).getTime();
  if (t === B.d0) return "today";
  if (t === B.yesterday) return "yesterday";
  if (t >= B.startOfWeek && t < B.d0) return "thisWeek";
  if (t >= B.startOfLastWeek && t < B.startOfWeek) return "lastWeek";
  if (t >= B.startOfLastMonth && t <= B.endOfLastMonth) return "lastMonth";
  if (t >= B.startOfThisYear) return "thisYear";
  return "older";
}

function l3GroupByBucket(posts: Post[]) {
  const B = l3Bounds();
  const map: Record<string, Post[]> = {};
  for (const p of posts) { const k = l3BucketOf(p.postDate, B); (map[k] || (map[k] = [])).push(p); }
  return L3_BUCKETS.filter((b) => map[b.key]?.length).map((b) => ({ ...b, items: map[b.key] }));
}

// ── Left: Categories rail ─────────────────────────────────────────────────────

function CategoryRail({ posts, activeCategory, onCategoryChange, onCollapse }: {
  posts: Post[]; activeCategory: string; onCategoryChange: (cat: string) => void; onCollapse: () => void;
}) {
  const unreadFor = (cat: string) =>
    cat === "All" ? posts.filter((p) => !p.isRead).length : posts.filter((p) => !p.isRead && p.category === cat).length;

  return (
    <div className="flex-none w-[200px] bg-white border-r flex flex-col overflow-y-auto" style={{ borderColor: "var(--wb-line-2)" }}>
      <div className="flex items-center justify-between border-b px-3" style={{ borderColor: "var(--wb-line-2)", height: 48, padding: "0 8px 0 12px" }}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.8px] text-gray-400" style={{ fontFamily: "Roboto", fontWeight: 400 }}>COMMUNICATIONS</p>
        <button onClick={onCollapse} title="Hide categories"
          className="w-6 h-6 flex-none flex items-center justify-center rounded-[4px] text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors">
          <PanelLeftClose size={17} />
        </button>
      </div>
      <div className="flex flex-col">
        {L3_RAIL_CATS.map((cat) => {
          const unread = unreadFor(cat);
          const active = activeCategory === cat;
          return (
            <button key={cat} onClick={() => onCategoryChange(cat)}
              className={`relative flex items-center justify-between gap-2 text-left text-[12.5px] transition-colors ${
                active ? "font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-normal"
              }`}
              style={{ padding: "0 8px 0 12px", height: 40, background: active ? "var(--wb-blue-50)" : undefined, color: active ? "var(--wb-blue)" : undefined }}
            >
              <span className="truncate">{cat}</span>
              {unread > 0 && (
                <span className={`flex-none text-[10px] font-semibold rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none`}
                  style={{ background: active ? "var(--wb-blue-100)" : "var(--wb-red-bg)", color: active ? "var(--wb-blue)" : "var(--wb-red)" }}>
                  {unread}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CollapsedRail({ onExpand }: { onExpand: () => void }) {
  return (
    <button onClick={onExpand} title="Show categories"
      className="flex-none w-9 flex flex-col items-center hover:bg-gray-100 transition-colors cursor-pointer"
      style={{ height: "100%", borderRight: "1px solid var(--wb-line-2)", background: "rgb(246,246,246)" }}>
      <span className="w-7 h-7 mt-3 flex-none flex items-center justify-center rounded-[4px]" style={{ color: "var(--wb-blue)" }}>
        <PanelLeftOpen size={18} />
      </span>
    </button>
  );
}

// ── Sort menu ─────────────────────────────────────────────────────────────────

const L3_SORTS = [
  { key: "postDate" as const, label: "Post date" },
  { key: "expiryDate" as const, label: "Expiry date" },
  { key: "fileName" as const, label: "File name" },
  { key: "category" as const, label: "Category" },
];

function ListSortMenu({ ctl }: { ctl: CommsController }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function h(e: MouseEvent) { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={ref} className="relative flex-none">
      <button onClick={() => setOpen((v) => !v)}
        className={`flex items-center justify-center h-7 w-7 rounded-[4px] text-xs font-medium transition-colors border ${
          open ? "text-blue-700 border-blue-200" : "text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-700"
        }`}
        style={open ? { background: "var(--wb-blue-50)" } : undefined}
        title="Sort"
      >
        <ArrowUpDown size={16} />
      </button>
      {open && (
        <div className="absolute z-[40] right-0 mt-1 w-44 bg-white border border-gray-200 rounded-[8px] shadow-lg overflow-hidden">
          {L3_SORTS.map((s) => (
            <div key={s.key} onClick={() => ctl.handleSort(s.key)}
              className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-[13px] hover:bg-gray-50 transition-colors ${ctl.sortKey === s.key ? "bg-blue-50" : ""}`}
              style={{ color: ctl.sortKey === s.key ? "var(--wb-blue)" : "var(--wb-ink-700)" }}>
              <span className="w-3.5 flex-none text-center text-[11px]">
                {ctl.sortKey === s.key ? (ctl.sortDir === "asc" ? "↑" : "↓") : ""}
              </span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Post Row ──────────────────────────────────────────────────────────────────

function PostRow({ post, ctl }: { post: Post; ctl: CommsController }) {
  const isSelected = ctl.selectedIds.has(post.id);
  const isActive = ctl.currentSelectedPost?.id === post.id;
  const showCategory = ctl.activeCategory === "All";

  return (
    <div
      onClick={() => ctl.openPost(post)}
      className={`group relative flex items-center gap-2.5 px-3 py-2.5 cursor-pointer border-b transition-colors ${isActive ? "" : "hover:bg-blue-50/40"}`}
      style={{ borderColor: "var(--wb-line)", background: isActive ? "var(--wb-blue-50)" : undefined }}
    >
      {/* Unread accent strip */}
      {!post.isRead && <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "var(--wb-blue)" }} />}

      {/* Checkbox (selection mode) */}
      {ctl.selectMode && (
        <div onClick={(e) => { e.stopPropagation(); ctl.toggleSelect(post.id); }}
          className={`w-4 h-4 flex-none rounded border-2 flex items-center justify-center cursor-pointer transition-all ${
            isSelected ? "border-blue-600" : "border-gray-300 hover:border-blue-400"
          }`}
          style={isSelected ? { background: "var(--wb-blue)" } : undefined}>
          {isSelected && <Check size={10} className="text-white" />}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <p
          className={`flex items-center gap-1.5 text-[13px] leading-snug ${
            post.isUrgent ? (!post.isRead ? "font-semibold text-red-600" : "font-medium") : (!post.isRead ? "font-semibold text-gray-900" : "font-medium")
          }`}
          style={post.isRead && !post.isUrgent ? { color: "#6a7282" } : undefined}
        >
          {post.isConfidential && <EyeOff size={13} className="flex-none text-amber-500" title="Confidential" />}
          <span className="truncate">{post.fileName}</span>
        </p>
        <div className="mt-1 flex items-center gap-1.5 flex-wrap">
          {showCategory && <span className="text-[11px] text-gray-500">{post.category}</span>}
          {showCategory && <span className="text-gray-300 text-[11px]">·</span>}
          <span className="text-[11px] text-gray-400">{ppFormatDate(post.postDate)} – {post.expiryDate ? ppFormatDate(post.expiryDate) : "No expiry"}</span>
          {ppExpiryStatus(post.expiryDate) === "expired" && <ExpiryPill date={post.expiryDate} />}
        </div>
      </div>

      <button onClick={(e) => { e.stopPropagation(); ctl.setEditingPost(post); ctl.setShowPostDialog(true); }} title="Edit"
        className="flex-none w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-all"
        style={{ color: "var(--wb-blue)" }}>
        <Edit size={16} />
      </button>
    </div>
  );
}

// ── Drag divider ──────────────────────────────────────────────────────────────

function PaneDivider({ onMouseDown }: { onMouseDown: (e: React.MouseEvent) => void }) {
  return (
    <div onMouseDown={onMouseDown} title="Drag to resize"
      className="relative flex-none w-px cursor-col-resize group z-[10]"
      style={{ background: "var(--wb-line)" }}>
      <div className="absolute inset-y-0 -left-[4px] -right-[4px] group-hover:bg-blue-200/50 transition-colors" />
    </div>
  );
}

// ── Main layout ───────────────────────────────────────────────────────────────

interface LayoutThreeProps {
  ctl: CommsController;
  posts: Post[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export function LayoutThree({ ctl, posts, activeCategory, onCategoryChange }: LayoutThreeProps) {
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  const [railCollapsed, setRailCollapsed] = useState(false);
  const toggleGroup = (key: string) => setCollapsed((prev) => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });
  const groups = l3GroupByBucket(ctl.paginated);

  const [listWidth, setListWidth] = useState(400);
  const rowRef = useRef<HTMLDivElement>(null);
  const listColRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    function move(e: MouseEvent) {
      if (!draggingRef.current || !rowRef.current || !listColRef.current) return;
      const listLeft = listColRef.current.getBoundingClientRect().left;
      const rowRight = rowRef.current.getBoundingClientRect().right;
      const maxW = rowRight - listLeft - 360;
      const w = Math.max(300, Math.min(maxW, e.clientX - listLeft));
      setListWidth(w);
    }
    function up() { if (draggingRef.current) { draggingRef.current = false; document.body.style.cursor = ""; document.body.style.userSelect = ""; } }
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
  }, []);

  const startDrag = (e: React.MouseEvent) => { e.preventDefault(); draggingRef.current = true; document.body.style.cursor = "col-resize"; document.body.style.userSelect = "none"; };

  return (
    <div ref={rowRef} className="flex flex-1 overflow-hidden">
      {railCollapsed
        ? <CollapsedRail onExpand={() => setRailCollapsed(false)} />
        : <CategoryRail posts={posts} activeCategory={activeCategory} onCategoryChange={onCategoryChange} onCollapse={() => setRailCollapsed(true)} />
      }

      {/* Middle: posts list */}
      <div ref={listColRef} className="flex flex-col bg-white" style={{ flex: `0 0 ${listWidth}px`, width: listWidth }}>
        {/* Toolbar row */}
        <div className="border-b flex-none flex items-center px-3" style={{ borderColor: "var(--wb-line-2)", height: 48 }}>
          <CommsToolbar ctl={ctl} title={null} compact showItemActions={false} beforeFilter={<ListSortMenu ctl={ctl} />} />
        </div>

        {/* Selection / title strip */}
        <div className="flex-none flex items-center gap-2 border-b px-3" style={{ borderColor: "var(--wb-line)", background: "var(--wb-zebra)", height: 40 }}>
          {ctl.selectMode ? (
            <>
              <div onClick={ctl.toggleSelectAll} className="flex items-center gap-2 cursor-pointer select-none">
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                  ctl.allSelected ? "border-blue-600" : ctl.someSelected ? "border-blue-400" : "border-gray-300 hover:border-blue-400"
                }`} style={ctl.allSelected ? { background: "var(--wb-blue)" } : ctl.someSelected ? { background: "var(--wb-blue-100)" } : undefined}>
                  {ctl.allSelected && <Check size={10} className="text-white" />}
                  {ctl.someSelected && !ctl.allSelected && <div className="w-2 h-0.5 bg-blue-600" />}
                </div>
                <span className="text-xs text-gray-500">{ctl.selectedIds.size > 0 ? `${ctl.selectedIds.size} selected` : "Select all"}</span>
              </div>
              <button onClick={ctl.exitSelectMode} className="flex-none w-5 h-5 flex items-center justify-center rounded text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors text-[15px]">✕</button>
            </>
          ) : (
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[14px] font-semibold text-gray-800 truncate">{activeCategory === "All" ? "All posts" : activeCategory}</span>
              <span className="flex-none text-[11px] font-medium text-gray-400 leading-none">{ctl.filtered.length}</span>
              <span className="flex-none text-gray-300">·</span>
              <button onClick={ctl.enterSelectMode} className="flex-none text-xs font-medium hover:underline transition-colors" style={{ color: "var(--wb-blue)" }}>Select</button>
            </div>
          )}
          <div className="flex-1" />
          {(() => {
            const bulk = ctl.selectMode && ctl.selectedIds.size > 0;
            const hasTarget = bulk || ctl.currentSelectedPost;
            const isRead = bulk ? ctl.allSelRead : ctl.currentSelectedPost?.isRead;
            return (
              <>
                <button
                  onClick={() => { if (bulk) ctl.markSelectedRead(!ctl.allSelRead); else if (ctl.currentSelectedPost) ctl.toggleRead(ctl.currentSelectedPost.id); }}
                  disabled={!hasTarget}
                  className={`w-7 h-7 flex items-center justify-center rounded-[4px] transition-colors flex-none ${hasTarget ? "text-gray-500 hover:bg-gray-200 hover:text-gray-700 cursor-pointer" : "text-gray-300 cursor-default"}`}
                >
                  {isRead ? <MailOpen size={16} /> : <Mail size={16} />}
                </button>
                <button
                  onClick={() => { if (bulk) ctl.setShowBulkDelete(true); else if (ctl.currentSelectedPost) ctl.setDeleteTarget(ctl.currentSelectedPost.id); }}
                  disabled={!hasTarget}
                  className={`w-7 h-7 flex items-center justify-center rounded-[4px] transition-colors flex-none ${hasTarget ? "text-gray-500 hover:bg-red-50 hover:text-red-700 cursor-pointer" : "text-gray-300 cursor-default"}`}
                >
                  <Trash2 size={16} />
                </button>
              </>
            );
          })()}
        </div>

        {/* Post list grouped by date */}
        <div className="flex-1 min-h-0 overflow-auto">
          {ctl.paginated.length === 0
            ? <CommsEmpty ctl={ctl} compact />
            : groups.map((g) => {
              const isCollapsed = collapsed.has(g.key);
              return (
                <section key={g.key}>
                  <button onClick={() => toggleGroup(g.key)}
                    className="sticky top-0 z-[1] w-full flex items-center gap-1.5 px-3 py-1.5 border-b text-left hover:bg-gray-100 transition-colors"
                    style={{ borderColor: "var(--wb-line)", background: "var(--wb-zebra)" }}>
                    <ChevronRight size={16} className="text-gray-400 transition-transform" style={{ transform: isCollapsed ? "none" : "rotate(90deg)" }} />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.6px] text-gray-500">{g.label}</span>
                    <span className="text-[10px] font-medium text-gray-400">{g.items.length}</span>
                  </button>
                  {!isCollapsed && g.items.map((post) => <PostRow key={post.id} post={post} ctl={ctl} />)}
                </section>
              );
            })}
        </div>

        <CommsPagination ctl={ctl} />
      </div>

      <PaneDivider onMouseDown={startDrag} />

      <PreviewPane post={ctl.currentSelectedPost} />
    </div>
  );
}
