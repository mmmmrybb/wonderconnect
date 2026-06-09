import { useState, useMemo, useRef, useEffect } from "react";
import type { Post } from "./CommunicationsPage";

export type FilterState = {
  status: "all" | "unread" | "read";
  timeFilter: "all" | "today" | "thisWeek" | "custom";
  fromDate: string;
  toDate: string;
  hideExpired: boolean;
};

export const PP_DEFAULT_FILTER: FilterState = {
  status: "all",
  timeFilter: "all",
  fromDate: "",
  toDate: "",
  hideExpired: false,
};

export const PP_TODAY = new Date("2026-03-03");

export function ppExpiryStatus(s: string) {
  const diff = (new Date(s).getTime() - PP_TODAY.getTime()) / 86400000;
  if (diff < 0) return "expired";
  if (diff <= 30) return "soon";
  return "active";
}

export function ppFormatDate(s: string) {
  const [y, m, d] = s.split("-");
  return `${m}/${d}/${y}`;
}

interface UseCommsControllerArgs {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  activeCategory: string;
  selectedPost: Post | null;
  onSelectPost: (post: Post | null) => void;
}

export function useCommsController({
  posts, setPosts, activeCategory, selectedPost, onSelectPost,
}: UseCommsControllerArgs) {
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState(new Set<string>());
  const [selectMode, setSelectMode] = useState(false);
  const [sortKey, setSortKey] = useState<keyof Post>("postDate");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [filterState, setFilterState] = useState<FilterState>(PP_DEFAULT_FILTER);
  const [showFilter, setShowFilter] = useState(false);
  const [showPostDialog, setShowPostDialog] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [showBulkDelete, setShowBulkDelete] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function h(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) setShowFilter(false);
    }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  useEffect(() => { setCurrentPage(1); }, [search, filterState, activeCategory]);

  const filtered = useMemo(() => {
    let result = [...posts];
    if (activeCategory !== "All") result = result.filter(p => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p => p.fileName.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (filterState.status !== "all") result = result.filter(p => filterState.status === "unread" ? !p.isRead : p.isRead);
    if (filterState.timeFilter !== "all") {
      const today = new Date(PP_TODAY); today.setHours(0, 0, 0, 0);
      if (filterState.timeFilter === "today") {
        const ts = today.toISOString().split("T")[0];
        result = result.filter(p => p.postDate === ts);
      } else if (filterState.timeFilter === "thisWeek") {
        const dow = today.getDay();
        const ws = new Date(today); ws.setDate(today.getDate() - dow);
        const we = new Date(ws); we.setDate(ws.getDate() + 6);
        result = result.filter(p => { const d = new Date(p.postDate); return d >= ws && d <= we; });
      } else if (filterState.timeFilter === "custom") {
        if (filterState.fromDate) result = result.filter(p => p.postDate >= filterState.fromDate);
        if (filterState.toDate) result = result.filter(p => p.postDate <= filterState.toDate);
      }
    }
    if (filterState.hideExpired) result = result.filter(p => ppExpiryStatus(p.expiryDate) !== "expired");
    result.sort((a, b) => {
      const va = a[sortKey] as string, vb = b[sortKey] as string;
      const c = va < vb ? -1 : va > vb ? 1 : 0;
      return sortDir === "asc" ? c : -c;
    });
    return result;
  }, [posts, activeCategory, search, filterState, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const pageIds = paginated.map(p => p.id);
  const allSelected = pageIds.length > 0 && pageIds.every(id => selectedIds.has(id));
  const someSelected = pageIds.some(id => selectedIds.has(id));

  function toggleSelectAll() {
    setSelectedIds(prev => {
      const n = new Set(prev);
      if (allSelected) pageIds.forEach(id => n.delete(id));
      else pageIds.forEach(id => n.add(id));
      return n;
    });
  }
  function toggleSelect(id: string) {
    setSelectedIds(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }
  function clearSelection() { setSelectedIds(new Set()); }
  function enterSelectMode() { setSelectMode(true); }
  function exitSelectMode() { setSelectMode(false); setSelectedIds(new Set()); }

  function handleSavePost(data: Partial<Post>) {
    if (editingPost) {
      setPosts(prev => prev.map(p => p.id === editingPost.id ? { ...p, ...data } : p));
      if (selectedPost?.id === editingPost.id) onSelectPost({ ...editingPost, ...data });
    } else {
      setPosts(prev => [{ id: Date.now().toString(), ...data, isRead: false } as Post, ...prev]);
    }
    setEditingPost(null);
  }
  function handleDelete(id: string) {
    setPosts(prev => prev.filter(p => p.id !== id));
    if (selectedPost?.id === id) onSelectPost(null);
    setDeleteTarget(null);
  }
  function handleBulkDelete() {
    setPosts(prev => prev.filter(p => !selectedIds.has(p.id)));
    if (selectedPost && selectedIds.has(selectedPost.id)) onSelectPost(null);
    setSelectedIds(new Set());
    setShowBulkDelete(false);
  }
  function toggleRead(id: string) { setPosts(prev => prev.map(p => p.id === id ? { ...p, isRead: !p.isRead } : p)); }
  function markSelectedRead(isRead: boolean) { setPosts(prev => prev.map(p => selectedIds.has(p.id) ? { ...p, isRead } : p)); }
  function openPost(post: Post) { onSelectPost(post); if (!post.isRead) toggleRead(post.id); }
  function handleSort(key: keyof Post) {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  }

  const activeFilterCount =
    (filterState.status !== "all" ? 1 : 0) +
    (filterState.timeFilter !== "all" ? 1 : 0) +
    (filterState.hideExpired ? 1 : 0);
  const deletePost = posts.find(p => p.id === deleteTarget);
  const currentSelectedPost = selectedPost ? (posts.find(p => p.id === selectedPost.id) ?? null) : null;
  const allSelRead = [...selectedIds].every(id => posts.find(p => p.id === id)?.isRead);
  const filterCounts = (() => {
    const sc = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
    return { all: sc.length, unread: sc.filter(p => !p.isRead).length, read: sc.filter(p => p.isRead).length };
  })();

  return {
    search, setSearch,
    selectedIds, toggleSelect, toggleSelectAll, clearSelection, allSelected, someSelected, pageIds,
    selectMode, enterSelectMode, exitSelectMode,
    sortKey, sortDir, handleSort,
    currentPage, setCurrentPage, pageSize, setPageSize, totalPages, page,
    filterState, setFilterState, showFilter, setShowFilter, filterRef, activeFilterCount, filterCounts,
    showPostDialog, setShowPostDialog, editingPost, setEditingPost,
    deleteTarget, setDeleteTarget, deletePost, showBulkDelete, setShowBulkDelete,
    filtered, paginated,
    handleSavePost, handleDelete, handleBulkDelete, toggleRead, markSelectedRead, openPost,
    currentSelectedPost, allSelRead,
    posts, activeCategory, selectedPost, onSelectPost,
  };
}

export type CommsController = ReturnType<typeof useCommsController>;
