import { useState, useRef, useEffect } from "react";
import {
  MdSearch, MdClose, MdFilterList, MdMailOutline, MdDrafts, MdDeleteOutline, MdCheck, MdKeyboardArrowDown, MdKeyboardArrowUp,
  MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight,
  MdVisibilityOff, MdErrorOutline, MdCheckCircle, MdUpload, MdInfoOutline, MdEditNote, MdAdd,
} from "react-icons/md";
import { DatePicker } from "./DatePicker";
import type { CommsController } from "./useCommsController";
import { PP_DEFAULT_FILTER, ppExpiryStatus, PP_TODAY } from "./useCommsController";
import type { Post } from "./CommunicationsPage";
import type { FilterState } from "./useCommsController";

export const CATEGORIES = [
  "Features & Promotions",
  "Marketing",
  "New Product Listings",
  "Policies & Documents",
  "Support",
  "Product Availability",
  "Buy & Sell",
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function ExpiryPill({ date }: { date: string }) {
  const status = ppExpiryStatus(date);
  if (status === "active") return null;
  const cfg = status === "expired"
    ? { bg: "var(--wb-red-bg)", ink: "var(--wb-red)", label: "Expired" }
    : { bg: "var(--wb-amber-bg)", ink: "var(--wb-amber-ink)", label: "Expiring soon" };
  return (
    <span className="inline-flex items-center rounded-full px-1.5 py-px text-[10px] font-semibold leading-none whitespace-nowrap"
      style={{ background: cfg.bg, color: cfg.ink }}>{cfg.label}</span>
  );
}

export function StatusFlags({ post, size = 13, className = "" }: { post: Post; size?: number; className?: string }) {
  if (!post.isUrgent && !post.isConfidential) return null;
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {post.isConfidential && <MdVisibilityOff size={size} className="text-amber-500" title="Confidential" />}
      {post.isUrgent && <MdError size={size} className="text-red-500" title="Urgent" />}
    </span>
  );
}

// ─── Filter Panel ─────────────────────────────────────────────────────────────

interface FilterPanelProps {
  filterState: FilterState;
  onApply: (f: FilterState) => void;
  onClear: () => void;
  onClose: () => void;
  counts?: { all: number; unread: number; read: number };
  resultCount?: number;
}

export function FilterPanel({ filterState, onApply, onClear, onClose, counts = { all: 0, unread: 0, read: 0 } }: FilterPanelProps) {
  const [local, setLocal] = useState(filterState);

  const STATUS = [
    { key: "all" as const, label: "All", n: counts.all },
    { key: "unread" as const, label: "Unread", n: counts.unread },
    { key: "read" as const, label: "Read", n: counts.read },
  ];
  const TIME = [
    { key: "all" as const, label: "All" },
    { key: "today" as const, label: "Today" },
    { key: "thisWeek" as const, label: "This Week" },
    { key: "custom" as const, label: "Custom range" },
  ];

  return (
    <div className="absolute top-full left-0 mt-1.5 z-[9999] bg-white border border-gray-200 rounded-[10px] shadow-xl overflow-hidden" style={{ width: 380 }}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
        <h4 className="text-[13px] font-semibold text-gray-900">Filters</h4>
        <button onClick={() => { setLocal(PP_DEFAULT_FILTER); onClear(); }} className="text-[12px] font-medium text-blue-500 hover:text-blue-600 transition-colors">Clear all</button>
      </div>

      <div className="px-4 py-2 border-b border-gray-100">
        <p className="text-[10px] font-semibold uppercase tracking-[0.8px] text-gray-400 mb-2" style={{ fontFamily: "Roboto" }}>Read Status</p>
        <div className="flex flex-wrap gap-2">
          {STATUS.map((o) => (
            <button key={o.key} onClick={() => setLocal((prev) => ({ ...prev, status: o.key }))}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium border transition-colors ${
                local.status === o.key ? "bg-blue-50 text-blue-600 border-blue-200" : "text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}>
              {o.label}<span className="text-[11px] opacity-70">({o.n})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-2 border-b border-gray-100">
        <p className="text-[10px] font-semibold uppercase tracking-[0.8px] text-gray-400 mb-2" style={{ fontFamily: "Roboto" }}>Time Posted</p>
        <div className="flex flex-wrap gap-2">
          {TIME.map((o) => (
            <button key={o.key} onClick={() => setLocal((prev) => ({ ...prev, timeFilter: o.key, ...(o.key !== "custom" ? { fromDate: "", toDate: "" } : {}) }))}
              className={`rounded-full px-2.5 py-1 text-[12px] font-medium border transition-colors ${
                local.timeFilter === o.key ? "bg-blue-50 text-blue-600 border-blue-200" : "text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}>
              {o.label}
            </button>
          ))}
        </div>
        {local.timeFilter === "custom" && (
          <div className="mt-3 flex items-end gap-3">
            <div className="flex-1 min-w-0">
              <label className="block text-[12px] text-gray-500 mb-1.5">From</label>
              <input type="date" value={local.fromDate} onChange={(e) => setLocal((prev) => ({ ...prev, fromDate: e.target.value }))}
                className="h-[34px] w-full border border-gray-200 rounded-[4px] px-2 text-[12.5px] outline-0 focus:border-blue-400" style={{ background: "var(--wb-field-bg)" }} />
            </div>
            <span className="text-[12px] text-gray-400 pb-2.5">to</span>
            <div className="flex-1 min-w-0">
              <label className="block text-[12px] text-gray-500 mb-1.5">To</label>
              <input type="date" value={local.toDate} onChange={(e) => setLocal((prev) => ({ ...prev, toDate: e.target.value }))}
                className="h-[34px] w-full border border-gray-200 rounded-[4px] px-2 text-[12.5px] outline-0 focus:border-blue-400" style={{ background: "var(--wb-field-bg)" }} />
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.8px] text-gray-400 mb-2" style={{ fontFamily: "Roboto" }}>Visibility</p>
        <button onClick={() => setLocal((prev) => ({ ...prev, hideExpired: !prev.hideExpired }))}
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium border transition-colors ${
            local.hideExpired ? "bg-blue-50 text-blue-600 border-blue-200" : "text-gray-600 border-gray-200 hover:bg-gray-50"
          }`}>
          {local.hideExpired && <MdCheck size={13} />}
          Hide expired communications
        </button>
      </div>

      <div className="flex items-center justify-end gap-2 px-4 py-2 bg-gray-50 border-t border-gray-100">
        <button onClick={onClose} className="h-[34px] px-3 border border-gray-200 rounded-[4px] text-[12px] font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors">Cancel</button>
        <button onClick={() => { onApply(local); onClose(); }} className="h-[34px] px-3 rounded-[4px] text-[12px] font-medium text-white transition-colors" style={{ background: "var(--wb-blue)" }}>Apply</button>
      </div>
    </div>
  );
}

// ─── Toolbar ─────────────────────────────────────────────────────────────────

interface CommsToolbarProps {
  ctl: CommsController;
  title?: string | null;
  compact?: boolean;
  showItemActions?: boolean;
  beforeFilter?: React.ReactNode;
}

export function CommsToolbar({ ctl, title = "Posts", compact = false, showItemActions = true, beforeFilter = null }: CommsToolbarProps) {
  const hasTarget = ctl.selectedIds.size > 0 || ctl.currentSelectedPost;
  return (
    <div className="flex items-center gap-2 w-full">
      {title && <h2 className="text-gray-800 font-semibold text-[15px] flex-none">{title}</h2>}

      <button
        onClick={() => { ctl.setEditingPost(null); ctl.setShowPostDialog(true); }}
        title="Post New"
        className={`flex items-center gap-1.5 h-7 text-white font-medium rounded-[4px] transition-colors shadow-sm text-[12px] flex-none ${compact ? "w-7 justify-center px-0" : "px-3"}`}
        style={{ background: "var(--wb-blue)" }}
      >
        {compact ? <MdEditNote size={18} /> : "Post New"}
      </button>

      {showItemActions && (
        <button
          onClick={() => {
            if (ctl.selectedIds.size > 0) ctl.markSelectedRead(!ctl.allSelRead);
            else if (ctl.currentSelectedPost) ctl.toggleRead(ctl.currentSelectedPost.id);
          }}
          className={`w-7 h-7 flex items-center justify-center rounded-[4px] transition-colors flex-none ${hasTarget ? "text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" : "text-gray-300 cursor-default"}`}
        >
          {ctl.selectedIds.size > 0
            ? ctl.allSelRead ? <MdDrafts size={18} /> : <MdMailOutline size={18} />
            : ctl.currentSelectedPost?.isRead ? <MdDrafts size={18} /> : <MdMailOutline size={18} />}
        </button>
      )}

      {showItemActions && (
        <button
          onClick={() => {
            if (ctl.selectedIds.size > 0) ctl.setShowBulkDelete(true);
            else if (ctl.currentSelectedPost) ctl.setDeleteTarget(ctl.currentSelectedPost.id);
          }}
          className={`w-7 h-7 flex items-center justify-center rounded-[4px] transition-colors flex-none ${hasTarget ? "text-gray-500 hover:bg-red-50 hover:text-red-600 cursor-pointer" : "text-gray-300 cursor-default"}`}
        >
          <MdDeleteOutline size={18} />
        </button>
      )}

      {!compact && <div className="flex-1" />}

      <div className={`relative ${compact ? "flex-1 min-w-0" : "flex-none"}`}>
        <div className={`flex items-center gap-1.5 h-[30px] border border-gray-200 rounded-[4px] px-2 ${compact ? "w-full" : "w-44"}`} style={{ background: "white" }}>
          <MdSearch size={14} className="text-gray-400 flex-none" />
          <input type="text" placeholder="Search…" value={ctl.search} onChange={(e) => ctl.setSearch(e.target.value)}
            className="flex-1 min-w-0 text-[12px] outline-none bg-transparent placeholder:text-gray-400" />
          {ctl.search && <button onClick={() => ctl.setSearch("")} className="text-gray-400 hover:text-gray-600 shrink-0"><MdClose size={13} /></button>}
        </div>
      </div>

      {beforeFilter}

      <div ref={ctl.filterRef} className="relative flex-none">
        <button
          onClick={() => ctl.setShowFilter((v) => !v)}
          className={`flex items-center justify-center gap-1 h-7 w-7 rounded-[4px] text-xs font-medium transition-colors border ${
            ctl.showFilter || ctl.activeFilterCount > 0 ? "bg-blue-50 text-blue-700 border-blue-200" : "text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          <MdFilterList size={18} />
          {ctl.activeFilterCount > 0 && (
            <span className="text-white text-[10px] rounded-full px-1.5 py-0.5 font-semibold min-w-[16px] text-center leading-none" style={{ background: "var(--wb-blue)" }}>
              {ctl.activeFilterCount}
            </span>
          )}
        </button>
        {ctl.showFilter && (
          <FilterPanel
            filterState={ctl.filterState}
            onApply={(f) => ctl.setFilterState(f)}
            onClear={() => ctl.setFilterState(PP_DEFAULT_FILTER)}
            onClose={() => ctl.setShowFilter(false)}
            counts={ctl.filterCounts}
            resultCount={ctl.filtered.length}
          />
        )}
      </div>
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────

export function CommsPagination({ ctl }: { ctl: CommsController }) {
  const { filtered, page, pageSize, totalPages } = ctl;
  return (
    <div className="flex-none px-4 border-t border-gray-200 bg-white flex items-center gap-2" style={{ height: 48 }}>
      <div className="flex-1 flex items-center gap-1">
        <button onClick={() => ctl.setCurrentPage(1)} disabled={page === 1} className="w-5 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-gray-500"><MdKeyboardDoubleArrowLeft size={14} /></button>
        <button onClick={() => ctl.setCurrentPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="w-5 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-gray-500"><MdKeyboardArrowLeft size={14} /></button>
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
          .reduce((acc: (number | string)[], p, i, arr) => { if (i > 0 && (arr[i - 1] as number) && p - (arr[i - 1] as number) > 1) acc.push("…"); acc.push(p); return acc; }, [])
          .map((item, i) =>
            item === "…"
              ? <span key={`e-${i}`} className="text-xs text-gray-400 px-1">…</span>
              : <button key={item} onClick={() => ctl.setCurrentPage(item as number)}
                  className={`w-5 h-7 rounded text-xs font-medium transition-colors ${page === item ? "text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  style={page === item ? { background: "var(--wb-blue)" } : undefined}>{item}</button>
          )}
        <button onClick={() => ctl.setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="w-5 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-gray-500"><MdKeyboardArrowRight size={14} /></button>
        <button onClick={() => ctl.setCurrentPage(totalPages)} disabled={page === totalPages} className="w-5 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-gray-500"><MdKeyboardDoubleArrowRight size={14} /></button>
        <span className="text-xs text-gray-400 ml-2">{filtered.length} results</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-gray-400">Rows:</span>
        <select value={pageSize} onChange={(e) => { ctl.setPageSize(Number(e.target.value)); ctl.setCurrentPage(1); }}
          className="text-xs border border-gray-200 rounded-[4px] px-1.5 py-0.5 bg-white focus:outline-none focus:border-blue-400 text-gray-600">
          {[6, 9, 12, 18, 24].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

export function CommsEmpty({ ctl, compact = false }: { ctl: CommsController; compact?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-400 py-16">
      <MdSearch size={compact ? 26 : 32} />
      <p className="text-sm font-medium">No posts found</p>
      <p className="text-xs">Try adjusting your search or filters</p>
      {(ctl.search || ctl.activeFilterCount > 0) && (
        <button onClick={() => { ctl.setSearch(""); ctl.setFilterState(PP_DEFAULT_FILTER); }} className="mt-1 text-xs font-medium hover:underline" style={{ color: "var(--wb-blue)" }}>
          Clear all filters
        </button>
      )}
    </div>
  );
}

// ─── Audience Multi-Select ────────────────────────────────────────────────────

const AUDIENCE_OPTIONS: Record<string, string[]> = {
  Region: ["Western Canada", "Quebec", "Ontario", "Atlantic Canada"],
  Location: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110"],
  Route: ["Route A", "Route B", "Route C", "Route D", "Route E", "Route F", "Route G", "Route H"],
  Depot: ["Depot 1", "Depot 2", "Depot 3", "Depot 4", "Depot 5", "Depot 6", "Depot 7", "Depot 8"],
  Banner: ["Banner 1", "Banner 2", "Banner 3", "Banner 4", "Banner 5", "Banner 6"],
};

function AudienceMultiSelect({ label, options, selected, onChange, disabled }: {
  label: string; options: string[]; selected: string[]; onChange: (v: string[]) => void; disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function h(e: MouseEvent) { if (ref.current && !ref.current.contains(e.target as Node)) { setOpen(false); setSearch(""); } }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); }, [open]);

  const filtered = options.filter((o) => o.toLowerCase().includes(search.toLowerCase()));
  const toggle = (val: string) => { onChange(selected.includes(val) ? selected.filter((v) => v !== val) : [...selected, val]); setSearch(""); };
  const removeTag = (val: string, e: React.MouseEvent) => { e.stopPropagation(); onChange(selected.filter((v) => v !== val)); };

  return (
    <div ref={ref} className="relative">
      <label className={`block text-[12px] font-medium mb-1 ${disabled ? "opacity-50" : ""}`} style={{ color: "var(--wb-ink-400)", fontFamily: "Roboto" }}>{label}</label>
      <div
        onClick={() => { if (!disabled) setOpen(true); }}
        className={`flex items-center flex-wrap gap-1 min-h-[34px] h-auto w-full border rounded-[4px] px-2 py-1 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-text"} ${open ? "border-blue-400 bg-white" : "border-transparent"}`}
        style={{ background: "var(--wb-field-bg)", borderBottom: open ? undefined : "1px solid var(--wb-line)", boxShadow: open ? "var(--wb-focus-ring)" : undefined }}
      >
        {selected.map((val) => (
          <span key={val} className="flex items-center gap-1 text-[11px] font-medium rounded-full px-2 py-0.5" style={{ background: "var(--wb-blue-50)", color: "var(--wb-blue)" }}>
            {val}
            <button onClick={(e) => removeTag(val, e)}><MdClose size={12} /></button>
          </span>
        ))}
        <input ref={inputRef} type="text" value={search} onChange={(e) => { setSearch(e.target.value); if (!open) setOpen(true); }}
          onFocus={() => { if (!disabled) setOpen(true); }}
          placeholder={selected.length === 0 ? `Select ${label.toLowerCase()}…` : ""}
          className="flex-1 min-w-[60px] outline-none text-[12.5px] placeholder:text-gray-400 bg-transparent"
          onClick={(e) => e.stopPropagation()} disabled={disabled} />
        <MdKeyboardArrowDown size={14} className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && !disabled && (
        <div className="absolute z-[9999] left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-[8px] shadow-lg">
          {filtered.length === 0
            ? <div className="px-2.5 py-2 text-[12.5px] text-gray-400 text-center">No results found</div>
            : filtered.map((option) => {
              const isChecked = selected.includes(option);
              return (
                <div key={option} onClick={(e) => { e.stopPropagation(); toggle(option); }}
                  className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-[13px] hover:bg-gray-50 transition-colors ${isChecked ? "bg-blue-50" : ""}`}
                  style={{ color: isChecked ? "var(--wb-blue)" : "var(--wb-ink-700)" }}>
                  <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${isChecked ? "border-blue-600" : "border-gray-300"}`} style={isChecked ? { background: "var(--wb-blue)" } : undefined}>
                    {isChecked && <MdCheck size={9} className="text-white" />}
                  </div>
                  <span>{option}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

// ─── Category Dropdown ────────────────────────────────────────────────────────

function CategoryDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function h(e: MouseEvent) { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <div onClick={() => setOpen((v) => !v)}
        className={`h-[34px] flex items-center justify-between cursor-pointer px-2 rounded-[4px] border ${open ? "border-blue-400 bg-white" : "border-transparent"}`}
        style={{ background: open ? "white" : "var(--wb-field-bg)", borderBottom: open ? undefined : "1px solid var(--wb-line)" }}>
        <span className="text-[12.5px]" style={{ color: "var(--wb-ink-700)" }}>{value}</span>
        <MdKeyboardArrowDown size={14} className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && (
        <div className="absolute z-[9999] left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-[8px] shadow-lg">
          {CATEGORIES.map((cat) => (
            <div key={cat} onClick={() => { onChange(cat); setOpen(false); }}
              className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-[13px] hover:bg-gray-50 transition-colors ${value === cat ? "bg-blue-50" : ""}`}
              style={{ color: value === cat ? "var(--wb-blue)" : "var(--wb-ink-700)" }}>
              <span className="w-3.5 flex-none flex items-center justify-center">{value === cat && <MdCheck size={14} style={{ color: "var(--wb-blue)" }} />}</span>
              <span>{cat}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Post Dialog ──────────────────────────────────────────────────────────────

interface PostDialogProps {
  isOpen: boolean;
  onClose: () => void;
  editingPost: Post | null;
  onSave: (data: Partial<Post>) => void;
}

export function PostDialog({ isOpen, onClose, editingPost, onSave }: PostDialogProps) {
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0] as string);
  const [postDate, setPostDate] = useState(PP_TODAY.toISOString().split("T")[0]);
  const [expiryDate, setExpiryDate] = useState("2026-12-31");
  const [dragOver, setDragOver] = useState(false);
  const [attached, setAttached] = useState<string | null>(null);
  const [isUrgent, setIsUrgent] = useState(false);
  const [isConfidential, setIsConfidential] = useState(false);
  const [audience, setAudience] = useState<Record<string, string[]>>({ Region: [], Location: [], Route: [], Depot: [], Banner: [] });

  useEffect(() => {
    if (editingPost) {
      setFileName(editingPost.fileName);
      setCategory(editingPost.category);
      setPostDate(editingPost.postDate);
      setExpiryDate(editingPost.expiryDate);
      setAttached("document.pdf");
      setIsUrgent(editingPost.isUrgent);
      setIsConfidential(editingPost.isConfidential);
    } else {
      setFileName(""); setCategory(CATEGORIES[0]); setPostDate(PP_TODAY.toISOString().split("T")[0]);
      setExpiryDate("2026-12-31"); setAttached(null); setIsUrgent(false); setIsConfidential(false);
    }
    setAudience({ Region: [], Location: [], Route: [], Depot: [], Banner: [] });
  }, [editingPost, isOpen]);

  if (!isOpen) return null;

  const hasChanges = editingPost
    ? fileName !== editingPost.fileName || category !== editingPost.category || postDate !== editingPost.postDate ||
      expiryDate !== editingPost.expiryDate || isUrgent !== editingPost.isUrgent || isConfidential !== editingPost.isConfidential
    : fileName.trim() !== "" || attached !== null || isUrgent || isConfidential || category !== CATEGORIES[0];

  const handleSave = () => {
    if (!fileName.trim()) return;
    onSave({ fileName: fileName.trim(), category, postDate, expiryDate, isUrgent, isConfidential });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative bg-white rounded-[10px] w-[640px] max-w-[calc(100vw-2rem)] mx-4 overflow-hidden" style={{ boxShadow: "var(--wb-shadow-xl)" }}>
        <div className="flex items-center justify-between border-b px-5 py-3" style={{ borderColor: "var(--wb-line)" }}>
          <h2 className="text-[16px] font-semibold" style={{ color: "var(--wb-ink-900)" }}>{editingPost ? "Edit post" : "New post"}</h2>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-[6px] hover:bg-gray-100 text-gray-400 transition-colors"><MdClose size={16} /></button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {/* Section header */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.8px] text-gray-400" style={{ fontFamily: "Roboto" }}>Details</span>
            <div className="flex-1 h-px" style={{ background: "var(--wb-line)" }} />
          </div>

          {/* Attach PDF */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-medium" style={{ color: "var(--wb-ink-400)", fontFamily: "Roboto" }}>Attach PDF <span style={{ color: "var(--wb-red)", fontWeight: 700 }}>*</span></label>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setAttached(f.name); }}
              onClick={() => { const el = document.createElement("input"); el.type = "file"; el.accept = ".pdf"; el.onchange = (e) => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) setAttached(f.name); }; el.click(); }}
              className={`relative border border-dashed rounded-[4px] px-4 py-5 flex flex-col items-center gap-1.5 cursor-pointer transition-all ${dragOver ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-blue-300"}`}
              style={{ background: dragOver ? undefined : "var(--wb-field-bg)" }}
            >
              {attached
                ? <div className="flex items-center gap-2 text-emerald-600">
                    <MdCheckCircle size={16} />
                    <span className="text-[12.5px] font-medium truncate max-w-[220px]">{attached}</span>
                    <button onClick={(e) => { e.stopPropagation(); setAttached(null); }} className="ml-1 text-gray-400 hover:text-red-500 transition-colors"><MdClose size={13} /></button>
                  </div>
                : <div className="flex items-center gap-1.5">
                    <MdUpload size={18} className="text-gray-400" />
                    <p className="text-[12px] text-gray-500"><span className="font-medium" style={{ color: "var(--wb-blue)" }}>Click to upload</span> or drag and drop</p>
                  </div>
              }
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-medium" style={{ color: "var(--wb-ink-400)", fontFamily: "Roboto" }}>Title <span style={{ color: "var(--wb-red)", fontWeight: 700 }}>*</span></label>
            <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="Enter title…"
              className="h-[34px] w-full border-b border-gray-200 rounded-[4px] px-2 text-[12.5px] outline-0 focus:border-blue-400 transition-colors"
              style={{ background: "var(--wb-field-bg)" }} />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-medium" style={{ color: "var(--wb-ink-400)", fontFamily: "Roboto" }}>Category <span style={{ color: "var(--wb-red)", fontWeight: 700 }}>*</span></label>
            <CategoryDropdown value={category} onChange={setCategory} />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium" style={{ color: "var(--wb-ink-400)", fontFamily: "Roboto" }}>Posting Date</label>
              <input type="date" value={postDate} onChange={(e) => setPostDate(e.target.value)}
                className="h-[34px] w-full border-b border-gray-200 rounded-[4px] px-2 text-[12.5px] outline-0 focus:border-blue-400"
                style={{ background: "var(--wb-field-bg)" }} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium" style={{ color: "var(--wb-ink-400)", fontFamily: "Roboto" }}>Expiration Date</label>
              <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}
                className="h-[34px] w-full border-b border-gray-200 rounded-[4px] px-2 text-[12.5px] outline-0 focus:border-blue-400"
                style={{ background: "var(--wb-field-bg)" }} />
            </div>
          </div>

          {/* Priority + File Type */}
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium" style={{ color: "var(--wb-ink-400)", fontFamily: "Roboto" }}>Priority <span style={{ color: "var(--wb-red)", fontWeight: 700 }}>*</span></label>
              <div className="flex items-center border border-gray-200 rounded-[6px] p-0.5 gap-0.5 bg-white" style={{ height: 40 }}>
                <button type="button" onClick={() => setIsUrgent(false)}
                  className={`flex-1 h-full flex items-center justify-center rounded-[4px] text-[12px] font-medium transition-colors ${!isUrgent ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-gray-600"}`}>
                  Non-Urgent
                </button>
                <button type="button" onClick={() => setIsUrgent(true)}
                  className={`flex-1 h-full flex items-center justify-center gap-1.5 rounded-[4px] text-[12px] font-medium transition-colors ${isUrgent ? "bg-red-50 text-red-500" : "text-gray-400 hover:text-gray-600"}`}>
                  <MdError size={14} />Urgent
                </button>
              </div>
              {isUrgent && <p className="text-[11px] flex items-center gap-1" style={{ color: "var(--wb-red)" }}><MdError size={12} />This post will be highlighted in red</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium" style={{ color: "var(--wb-ink-400)", fontFamily: "Roboto" }}>File Type <span style={{ color: "var(--wb-red)", fontWeight: 700 }}>*</span></label>
              <div className="flex items-center border border-gray-200 rounded-[6px] p-0.5 gap-0.5 bg-white" style={{ height: 40 }}>
                <button type="button" onClick={() => setIsConfidential(false)}
                  className={`flex-1 h-full flex items-center justify-center rounded-[4px] text-[12px] font-medium transition-colors ${!isConfidential ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-gray-600"}`}>
                  General
                </button>
                <button type="button" onClick={() => setIsConfidential(true)}
                  className={`flex-1 h-full flex items-center justify-center gap-1.5 rounded-[4px] text-[12px] font-medium transition-colors ${isConfidential ? "bg-amber-50 text-amber-700" : "text-gray-400 hover:text-gray-600"}`}>
                  <MdVisibilityOff size={14} />Confidential
                </button>
              </div>
              {isConfidential && <p className="text-[11px] flex items-center gap-1" style={{ color: "var(--wb-amber-ink)" }}><MdVisibilityOff size={12} />Only ID owner has access to confidential files</p>}
            </div>
          </div>

          {/* Audience */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.8px] text-gray-400" style={{ fontFamily: "Roboto" }}>Audience</span>
            <div className="flex-1 h-px" style={{ background: "var(--wb-line)" }} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[10.5px] flex items-center gap-1" style={{ color: "var(--wb-red)" }}>
              <MdInfo size={11} />You may select one option from Region, Location, Route, or Depot, with or without banners
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {["Region", "Location", "Route", "Depot", "Banner"].map((field) => {
                const EXCL = ["Region", "Location", "Route", "Depot"];
                const activeExcl = EXCL.find((f) => f !== field && audience[f].length > 0);
                const isDisabled = field !== "Banner" && !!activeExcl;
                return (
                  <AudienceMultiSelect key={field} label={field} options={AUDIENCE_OPTIONS[field]} selected={audience[field]}
                    onChange={(vals) => setAudience((prev) => ({ ...prev, [field]: vals }))} disabled={isDisabled} />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 px-5 py-3 border-t" style={{ borderColor: "var(--wb-line)" }}>
          <button onClick={onClose} className="h-[34px] px-3 border border-gray-200 rounded-[4px] text-[12px] font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors">Cancel</button>
          <button onClick={handleSave} disabled={!hasChanges} className="h-[34px] px-4 rounded-[4px] text-[12px] font-medium text-white transition-colors disabled:opacity-50"
            style={{ background: "var(--wb-blue)" }}>
            {editingPost ? "Save changes" : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Delete Dialog ────────────────────────────────────────────────────────────

export function DeleteDialog({ isOpen, fileName, onCancel, onConfirm, bulk }: {
  isOpen: boolean; fileName: string; onCancel: () => void; onConfirm: () => void; bulk?: boolean;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onCancel} />
      <div className="relative bg-white rounded-[8px] shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="p-5">
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--wb-red)" }}>{bulk ? "Delete Selected Posts?" : "Delete Post?"}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {bulk
                ? <>You are about to permanently delete {fileName}.</>
                : <>You are about to permanently delete <span className="font-medium text-gray-700">"{fileName}"</span>.</>}
            </p>
            <p className="text-xs font-semibold leading-relaxed mt-1" style={{ color: "var(--wb-red)", fontSize: 13 }}>This action cannot be undone.</p>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={onCancel} className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-[4px] transition-colors font-medium">Cancel</button>
            <button onClick={onConfirm} className="px-3.5 h-[34px] text-sm text-white rounded-[4px] transition-colors font-medium hover:opacity-90" style={{ background: "var(--wb-red)" }}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Dialogs Compound ─────────────────────────────────────────────────────────

export function CommsDialogs({ ctl }: { ctl: CommsController }) {
  return (
    <>
      <PostDialog isOpen={ctl.showPostDialog} onClose={() => { ctl.setShowPostDialog(false); ctl.setEditingPost(null); }} editingPost={ctl.editingPost} onSave={ctl.handleSavePost} />
      <DeleteDialog isOpen={!!ctl.deleteTarget} fileName={ctl.deletePost?.fileName ?? ""} onCancel={() => ctl.setDeleteTarget(null)} onConfirm={() => ctl.deleteTarget && ctl.handleDelete(ctl.deleteTarget)} />
      <DeleteDialog isOpen={ctl.showBulkDelete} fileName={`${ctl.selectedIds.size} post${ctl.selectedIds.size > 1 ? "s" : ""}`} bulk onCancel={() => ctl.setShowBulkDelete(false)} onConfirm={ctl.handleBulkDelete} />
    </>
  );
}
