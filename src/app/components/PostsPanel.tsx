import {
  useState,
  useMemo,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import {
  Search,
  Filter,
  FolderOpen,
  Plus,
  MailOpen,
  Mail,
  ChevronUp,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Upload,
  Info,
  AlertCircle,
  EyeOff,
  CheckCircle2,
  Trash2,
} from "lucide-react";
import { Post, CATEGORIES } from "../App";
import editSvgPaths from "../../imports/svg-jkt3f57y5j";
import deleteSvgPaths from "../../imports/svg-e8mckgskin";

// ─── Category styling ────────────────────────────────────────────────────────
const CATEGORY_STYLES: Record<string, string> = {
  Marketing: "bg-gray-100 text-gray-700",
  "Features & Promotions": "bg-gray-100 text-gray-700",
  "New Product Listings": "bg-gray-100 text-gray-700",
  "Policies & Documents": "bg-gray-100 text-gray-700",
  Support: "bg-gray-100 text-gray-700",
  "Product Availability": "bg-gray-100 text-gray-700",
  "Buy & Sell": "bg-gray-100 text-gray-700",
};

// ─── Expiry helpers ──────────────────────────────────────���────────────────────
const TODAY = new Date("2026-03-03");

function expiryStatus(dateStr: string): "expired" | "soon" | "active" {
  const d = new Date(dateStr);
  const diff = (d.getTime() - TODAY.getTime()) / 86_400_000;
  if (diff < 0) return "expired";
  if (diff <= 30) return "soon";
  return "active";
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${m}/${d}/${y}`;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

// ─── Audience options mock data ─────────────────────────────────────────────
const AUDIENCE_OPTIONS: Record<string, string[]> = {
  Region: ["Western Canada", "Quebec", "Ontario", "Atlantic Canada"],
  Location: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110"],
  Route: ["Route A", "Route B", "Route C", "Route D", "Route E", "Route F", "Route G", "Route H"],
  Depot: ["Depot 1", "Depot 2", "Depot 3", "Depot 4", "Depot 5", "Depot 6", "Depot 7", "Depot 8"],
  Banner: ["Banner 1", "Banner 2", "Banner 3", "Banner 4", "Banner 5", "Banner 6"],
};

// ─── Searchable Multi-Select Dropdown ───────────────────────────────────────
function AudienceMultiSelect({
  label,
  options,
  selected,
  onChange,
  disabled,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (vals: string[]) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const filtered = options.filter((o) =>
    o.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (val: string) => {
    onChange(
      selected.includes(val)
        ? selected.filter((v) => v !== val)
        : [...selected, val]
    );
    setSearch("");
  };

  const removeTag = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selected.filter((v) => v !== val));
  };

  return (
    <div ref={ref} className="relative">
      <label className={`block text-[12px] font-medium mb-1 ${disabled ? "text-gray-400" : "text-[#1C1B1F]"}`}>{label}</label>
      <div
        onClick={() => { if (!disabled) setOpen(true); }}
        className={`w-full min-h-[34px] px-3 py-1.5 border rounded-[4px] flex items-center flex-wrap gap-1 transition-all ${
          disabled
            ? "bg-gray-50 border-gray-100 cursor-not-allowed opacity-60"
            : open
            ? "border-blue-400 cursor-text"
            : "border-gray-200 hover:border-gray-300 cursor-text"
        }`}
      >
        {selected.map((val) => (
          <span
            key={val}
            className="flex items-center gap-1 text-[11px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5"
          >
            {val}
            <button
              onClick={(e) => removeTag(val, e)}
              className="hover:text-red-500 transition-colors"
            >
              <X size={10} />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); if (!open) setOpen(true); }}
          onFocus={() => { if (!disabled) setOpen(true); }}
          placeholder={selected.length === 0 ? `Select ${label.toLowerCase()}...` : ""}
          className="flex-1 min-w-[60px] outline-none text-[12px] text-[#1C1B1F] placeholder:text-gray-400 bg-transparent"
          onClick={(e) => e.stopPropagation()}
          disabled={disabled}
        />
        <ChevronDown size={14} className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>

      {open && !disabled && (
        <div className="absolute z-[9999] left-0 right-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg max-h-48 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-[12px] text-gray-400 text-center">No results found</div>
          ) : (
            filtered.map((option) => {
              const isChecked = selected.includes(option);
              return (
                <div
                  key={option}
                  onClick={(e) => { e.stopPropagation(); toggle(option); }}
                  className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer transition-colors hover:bg-gray-50 ${
                    isChecked ? "bg-blue-50/50" : ""
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
                      isChecked
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {isChecked && <Check size={9} className="text-white" />}
                  </div>
                  <span className="text-[12px] text-[#1C1B1F]">{option}</span>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

// ─── Category Dropdown ──────────────────────────────────────────────────────
function CategoryDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => setOpen((v) => !v)}
        className={`w-full px-3 py-2 border rounded-[4px] flex items-center justify-between cursor-pointer transition-all bg-white ${
          open
            ? "border-blue-400"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <span className="text-[12px] text-[#1C1B1F]">{value}</span>
        <ChevronDown
          size={14}
          className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="absolute z-[9999] left-0 right-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg max-h-48 overflow-y-auto">
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              onClick={() => {
                onChange(cat);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer transition-colors hover:bg-gray-50 ${
                value === cat ? "bg-blue-50/50" : ""
              }`}
            >
              {value === cat && <Check size={12} className="text-blue-600" />}
              <span
                className={`text-[12px] ${
                  value === cat ? "text-blue-600 font-medium" : "text-[#1C1B1F]"
                }`}
              >
                {cat}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Post Dialog ────────────────────────────────────────────────────────────
interface PostDialogProps {
  isOpen: boolean;
  onClose: () => void;
  editingPost: Post | null;
  onSave: (data: {
    fileName: string;
    category: string;
    postDate: string;
    expiryDate: string;
    isUrgent: boolean;
    isConfidential: boolean;
  }) => void;
}

function PostDialog({ isOpen, onClose, editingPost, onSave }: PostDialogProps) {
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [postDate, setPostDate] = useState("2026-03-03");
  const [expiryDate, setExpiryDate] = useState("2026-12-31");
  const [dragOver, setDragOver] = useState(false);
  const [attached, setAttached] = useState<string | null>(null);
  const [isUrgent, setIsUrgent] = useState(false);
  const [isConfidential, setIsConfidential] = useState(false);
  const [audience, setAudience] = useState<Record<string, string[]>>({
    Region: [],
    Location: [],
    Route: [],
    Depot: [],
    Banner: [],
  });

  useEffect(() => {
    if (editingPost) {
      setFileName(editingPost.fileName);
      setCategory(editingPost.category);
      setPostDate(editingPost.postDate);
      setExpiryDate(editingPost.expiryDate);
      setAttached("document.pdf");
      setIsUrgent(editingPost.isUrgent);
      setIsConfidential(editingPost.isConfidential);
      setAudience({ Region: [], Location: [], Route: [], Depot: [], Banner: [] });
    } else {
      setFileName("");
      setCategory(CATEGORIES[0]);
      setPostDate("2026-03-03");
      setExpiryDate("2026-12-31");
      setAttached(null);
      setIsUrgent(false);
      setIsConfidential(false);
      setAudience({ Region: [], Location: [], Route: [], Depot: [], Banner: [] });
    }
  }, [editingPost, isOpen]);

  if (!isOpen) return null;

  const hasChanges = editingPost
    ? fileName !== editingPost.fileName ||
      category !== editingPost.category ||
      postDate !== editingPost.postDate ||
      expiryDate !== editingPost.expiryDate ||
      isUrgent !== editingPost.isUrgent ||
      isConfidential !== editingPost.isConfidential ||
      Object.values(audience).some((arr) => arr.length > 0)
    : fileName.trim() !== "" ||
      attached !== null ||
      isUrgent !== false ||
      isConfidential !== false ||
      category !== CATEGORIES[0] ||
      Object.values(audience).some((arr) => arr.length > 0);

  const handleSave = () => {
    if (!fileName.trim()) return;
    onSave({ fileName: fileName.trim(), category, postDate, expiryDate, isUrgent, isConfidential });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative bg-white rounded-[4px] shadow-2xl w-[700px] max-w-[calc(100vw-2rem)] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-[20px] py-[12px]">
          <div className="flex items-center gap-2">
            
            <h2 className="text-[16px] font-medium text-gray-800">
              {editingPost ? "Edit Post" : "New Post"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 max-h-[70vh] overflow-y-auto px-[20px] py-[8px]">
          {/* 1. Attach PDF */}
          <div>
            <label className="block font-medium text-[#1C1B1F] mb-1.5 text-[14px]">Attach PDF<span className="text-red-500">*</span></label>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                const file = e.dataTransfer.files[0];
                if (file) setAttached(file.name);
              }}
              onClick={() => {
                const el = document.createElement("input");
                el.type = "file";
                el.accept = ".pdf";
                el.onchange = (e) => {
                  const f = (e.target as HTMLInputElement).files?.[0];
                  if (f) setAttached(f.name);
                };
                el.click();
              }}
              className={`relative border-2 border-dashed rounded-[4px] px-4 py-4 flex flex-col items-center gap-1.5 cursor-pointer transition-all ${
                dragOver
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
            >
              {attached ? (
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 size={16} />
                  <span className="text-xs font-medium truncate max-w-[200px]">{attached}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); setAttached(null); }}
                    className="ml-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-1.5">
                    <Upload size={20} className="text-gray-400" />
                    <p className="text-xs text-gray-500">
                      <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 2. Title */}
          <div>
            <label className="block font-medium text-[#1C1B1F] mb-1.5 text-[14px]">Title<span className="text-red-500">*</span></label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter file name..."
              className="w-full px-3 py-2 text-[12px] text-[#1C1B1F] border border-gray-200 rounded-[4px] focus:outline-none focus:border-blue-400 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* 3. Category */}
          <div>
            <label className="block font-medium text-[#1C1B1F] mb-1.5 text-[14px]">Category<span className="text-red-500">*</span></label>
            <CategoryDropdown value={category} onChange={setCategory} />
          </div>

          {/* 4. Posting Date / Expiration Date */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-[#1C1B1F] mb-1.5 text-[14px]">Posting Date</label>
              <input
                type="date"
                value={postDate}
                onChange={(e) => setPostDate(e.target.value)}
                className="w-full px-3 py-2 text-[12px] text-[#1C1B1F] border border-gray-200 rounded-[4px] focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>
            <div>
              <label className="block font-medium text-[#1C1B1F] mb-1.5 text-[14px]">Expiration Date</label>
              <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-3 py-2 text-[12px] text-[#1C1B1F] border border-gray-200 rounded-[4px] focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>
          </div>

          {/* 5. Priority & 6. File Type */}
          <div className="grid grid-cols-2 gap-3">
            {/* Priority */}
            <div>
              <label className="block font-medium text-[#1C1B1F] mb-1.5 text-[14px]">Priority<span className="text-red-500">*</span></label>
              <div className="flex rounded-[4px] border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsUrgent(false)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] font-medium transition-all ${
                    !isUrgent
                      ? "bg-gray-100 text-gray-700"
                      : "bg-white text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  Non-Urgent
                </button>
                <button
                  type="button"
                  onClick={() => setIsUrgent(true)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] font-medium transition-all border-l border-gray-200 ${
                    isUrgent
                      ? "bg-red-50 text-red-600"
                      : "bg-white text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  <AlertCircle size={12} className={isUrgent ? "text-red-500" : "text-gray-400"} />
                  Urgent
                </button>
              </div>
              {isUrgent && (
                <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={9} />
                  This post will be highlighted in red
                </p>
              )}
            </div>

            {/* File Type */}
            <div>
              <label className="block font-medium text-[#1C1B1F] mb-1.5 text-[14px]">File Type<span className="text-red-500">*</span></label>
              <div className="flex rounded-[4px] border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsConfidential(false)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] font-medium transition-all ${
                    !isConfidential
                      ? "bg-gray-100 text-gray-700"
                      : "bg-white text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  General
                </button>
                <button
                  type="button"
                  onClick={() => setIsConfidential(true)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] font-medium transition-all border-l border-gray-200 ${
                    isConfidential
                      ? "bg-amber-50 text-amber-700"
                      : "bg-white text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  <EyeOff size={12} className={isConfidential ? "text-amber-600" : "text-gray-400"} />
                  Confidential
                </button>
              </div>
              {isConfidential && (
                <p className="text-[10px] text-amber-600 mt-1 flex items-center gap-1">
                  <EyeOff size={9} />
                  Only ID owner has access to confidential files
                </p>
              )}
            </div>
          </div>

          {/* Preview badge strip */}
          {(isUrgent || isConfidential) && (
            null
          )}

          {/* Divider */}
          

          {/* Select Audience */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-medium text-[#1C1B1F] text-[14px]">Select Audience<span className="text-red-500">*</span></h3>
              <p className="text-[10px] text-red-500 flex items-center gap-1">
                <Info size={9} className="text-red-400" />
                You may select one option from Regions, Locations, Routes, or Depot, with or without banners
              </p>
            </div>
            <div className="space-y-3">
              {(["Region", "Location", "Route", "Depot", "Banner"] as const).map((field) => {
                const EXCLUSIVE_FIELDS = ["Region", "Location", "Route", "Depot"];
                const activeExclusiveField = EXCLUSIVE_FIELDS.find(
                  (f) => f !== field && audience[f].length > 0
                );
                const isDisabled =
                  field !== "Banner" && !!activeExclusiveField;

                return (
                  <AudienceMultiSelect
                    key={field}
                    label={field}
                    options={AUDIENCE_OPTIONS[field]}
                    selected={audience[field]}
                    onChange={(vals) =>
                      setAudience((prev) => ({ ...prev, [field]: vals }))
                    }
                    disabled={isDisabled}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-5 py-3 bg-gray-50 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-[4px] transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!hasChanges}
            className={`px-4 py-2 text-sm text-white rounded-[4px] transition-colors font-medium ${
              hasChanges
                ? "bg-[#1D7AFC] hover:bg-[#1668d9] cursor-pointer"
                : "bg-[#C3C3C3] cursor-not-allowed"
            }`}
          >
            {editingPost ? "Save Changes" : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Delete Confirm Dialog ────────────────────────────────────────────────────
function DeleteDialog({
  isOpen,
  fileName,
  onCancel,
  onConfirm,
  bulk,
}: {
  isOpen: boolean;
  fileName: string;
  onCancel: () => void;
  onConfirm: () => void;
  bulk?: boolean;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onCancel} />
      <div className="relative bg-white rounded-[4px] shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="p-5">
          <div className="flex items-start gap-3 mb-4">
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {bulk ? "Delete Selected Posts?" : "Delete Post?"}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {bulk
                  ? `You are about to permanently delete ${fileName}. This action cannot be undone.`
                  : (
                    <>
                      You are about to permanently delete{" "}
                      <span className="font-medium text-gray-700">"{fileName}"</span>.
                      This action cannot be undone.
                    </>
                  )}
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={onCancel}
              className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-[4px] transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-3 py-1.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-[4px] transition-colors font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Filter Panel ─────────────────────────────────────────────────────────────
interface FilterState {
  status: "all" | "read" | "unread";
  timeFilter: "all" | "today" | "thisWeek" | "custom";
  fromDate: string;
  toDate: string;
  hideExpired: boolean;
}

function FilterPanel({
  filterState,
  onApply,
  onClear,
  onClose,
}: {
  filterState: FilterState;
  onApply: (f: FilterState) => void;
  onClear: () => void;
  onClose: () => void;
}) {
  const [local, setLocal] = useState<FilterState>(filterState);

  return (
    <div className="absolute top-full left-0 mt-1 z-[9999] bg-white border border-gray-200 rounded-[4px] shadow-xl w-72 p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Filters</h4>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={14} />
        </button>
      </div>

      {/* Read Status */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-600 mb-2">Read Status</p>
        <div className="flex gap-2">
          {(["all", "unread", "read"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setLocal((prev) => ({ ...prev, status: s }))}
              className={`flex-1 py-1 text-xs rounded-[4px] font-medium transition-all capitalize ${
                local.status === s
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Time */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-600 mb-2">Time</p>
        <div className="grid grid-cols-2 gap-1.5">
          {([
            { key: "all", label: "All" },
            { key: "today", label: "Today" },
            { key: "thisWeek", label: "This Week" },
            { key: "custom", label: "Custom Date Range" },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() =>
                setLocal((prev) => ({
                  ...prev,
                  timeFilter: key,
                  ...(key !== "custom" ? { fromDate: "", toDate: "" } : {}),
                }))
              }
              className={`py-1 text-xs rounded-[4px] font-medium transition-all ${
                local.timeFilter === key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              } ${key === "custom" ? "col-span-2" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
        {local.timeFilter === "custom" && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] text-gray-500 mb-1">From Date</label>
              <div className="flex items-center gap-1">
                <input
                  type="date"
                  value={local.fromDate}
                  onChange={(e) => setLocal((prev) => ({ ...prev, fromDate: e.target.value }))}
                  className="flex-1 min-w-0 px-2 py-1 text-xs border border-gray-200 rounded-[4px] focus:outline-none focus:border-blue-400 transition-all"
                />
                {local.fromDate && (
                  <button
                    onClick={() => setLocal((prev) => ({ ...prev, fromDate: "" }))}
                    className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block text-[11px] text-gray-500 mb-1">To Date</label>
              <div className="flex items-center gap-1">
                <input
                  type="date"
                  value={local.toDate}
                  onChange={(e) => setLocal((prev) => ({ ...prev, toDate: e.target.value }))}
                  className="flex-1 min-w-0 px-2 py-1 text-xs border border-gray-200 rounded-[4px] focus:outline-none focus:border-blue-400 transition-all"
                />
                {local.toDate && (
                  <button
                    onClick={() => setLocal((prev) => ({ ...prev, toDate: "" }))}
                    className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hide Expired */}
      <div className="mb-4">
        <label
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setLocal((prev) => ({ ...prev, hideExpired: !prev.hideExpired }))}
        >
          <div
            className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
              local.hideExpired
                ? "bg-blue-600 border-blue-600"
                : "border-gray-300 group-hover:border-blue-400"
            }`}
          >
            {local.hideExpired && <Check size={10} className="text-white" />}
          </div>
          <span className="text-xs text-gray-700 group-hover:text-gray-900">Do not show expired communications</span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2 border-t border-gray-100">
        <button
          onClick={() => { onClear(); onClose(); }}
          className="flex-1 py-1.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-[4px] transition-colors font-medium"
        >
          Clear All
        </button>
        <button
          onClick={() => { onApply(local); onClose(); }}
          className="flex-1 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-[4px] transition-colors font-medium"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
interface PostsPanelProps {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
  activeCategory: string;
  selectedPost: Post | null;
  onSelectPost: (post: Post | null) => void;
}

type SortKey = "fileName" | "category" | "postDate" | "expiryDate";
type SortDir = "asc" | "desc";

const DEFAULT_FILTER: FilterState = {
  status: "all",
  timeFilter: "all",
  fromDate: "",
  toDate: "",
  hideExpired: false,
};

export function PostsPanel({ posts, setPosts, activeCategory, selectedPost, onSelectPost }: PostsPanelProps) {
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<SortKey>("postDate");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [filterState, setFilterState] = useState<FilterState>(DEFAULT_FILTER);
  const [showFilter, setShowFilter] = useState(false);
  const [showPostDialog, setShowPostDialog] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [showBulkDelete, setShowBulkDelete] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close filter on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setShowFilter(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Reset page when filters change
  useEffect(() => { setCurrentPage(1); }, [search, filterState, activeCategory]);

  // ─── Filtered + sorted posts ─────────────────────────────────────────────
  const filtered = useMemo(() => {
    let result = [...posts];

    // Category filter (sidebar)
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) => p.fileName.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }

    // Filter panel
    if (filterState.status !== "all") {
      result = result.filter((p) =>
        filterState.status === "unread" ? !p.isRead : p.isRead
      );
    }
    if (filterState.timeFilter !== "all") {
      const today = new Date(TODAY);
      today.setHours(0, 0, 0, 0);
      if (filterState.timeFilter === "today") {
        const todayStr = today.toISOString().split("T")[0];
        result = result.filter((p) => p.postDate === todayStr);
      } else if (filterState.timeFilter === "thisWeek") {
        const dayOfWeek = today.getDay();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - dayOfWeek);
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        result = result.filter((p) => {
          const d = new Date(p.postDate);
          return d >= weekStart && d <= weekEnd;
        });
      } else if (filterState.timeFilter === "custom") {
        if (filterState.fromDate) {
          result = result.filter((p) => p.postDate >= filterState.fromDate);
        }
        if (filterState.toDate) {
          result = result.filter((p) => p.postDate <= filterState.toDate);
        }
      }
    }

    // Hide expired
    if (filterState.hideExpired) {
      result = result.filter((p) => expiryStatus(p.expiryDate) !== "expired");
    }

    // Sort
    result.sort((a, b) => {
      let va = a[sortKey] as string;
      let vb = b[sortKey] as string;
      const cmp = va < vb ? -1 : va > vb ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });

    return result;
  }, [posts, activeCategory, search, filterState, sortKey, sortDir]);

  // ─── Pagination ───────────────────────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  // ─── Select all (current page) ────────────────────────────────────────────
  const pageIds = paginated.map((p) => p.id);
  const allSelected = pageIds.length > 0 && pageIds.every((id) => selectedIds.has(id));
  const someSelected = pageIds.some((id) => selectedIds.has(id));

  function toggleSelectAll() {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allSelected) {
        pageIds.forEach((id) => next.delete(id));
      } else {
        pageIds.forEach((id) => next.add(id));
      }
      return next;
    });
  }

  function toggleSelect(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  // ─── CRUD actions ────────────────────────────────────────────────────────
  function handleSavePost(data: {
    fileName: string;
    category: string;
    postDate: string;
    expiryDate: string;
    isUrgent: boolean;
    isConfidential: boolean;
  }) {
    if (editingPost) {
      setPosts((prev) =>
        prev.map((p) => p.id === editingPost.id ? { ...p, ...data } : p)
      );
      if (selectedPost?.id === editingPost.id) {
        onSelectPost({ ...editingPost, ...data });
      }
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        ...data,
        isRead: false,
      };
      setPosts((prev) => [newPost, ...prev]);
    }
    setEditingPost(null);
  }

  function handleDelete(id: string) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    if (selectedPost?.id === id) onSelectPost(null);
    setDeleteTarget(null);
  }

  function handleBulkDelete() {
    setPosts((prev) => prev.filter((p) => !selectedIds.has(p.id)));
    if (selectedPost && selectedIds.has(selectedPost.id)) onSelectPost(null);
    setSelectedIds(new Set());
    setShowBulkDelete(false);
  }

  function toggleRead(id: string) {
    setPosts((prev) =>
      prev.map((p) => p.id === id ? { ...p, isRead: !p.isRead } : p)
    );
  }

  function markSelectedRead(isRead: boolean) {
    setPosts((prev) =>
      prev.map((p) => selectedIds.has(p.id) ? { ...p, isRead } : p)
    );
  }

  // ─── Sort toggle ──────────────────────────────────────────────────────────
  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <ChevronDown size={12} className="text-gray-300" />;
    return sortDir === "asc"
      ? <ChevronUp size={12} className="text-blue-500" />
      : <ChevronDown size={12} className="text-blue-500" />;
  }

  const activeFilterCount =
    (filterState.status !== "all" ? 1 : 0) +
    (filterState.timeFilter !== "all" ? 1 : 0) +
    (filterState.hideExpired ? 1 : 0);

  const deletePost = posts.find((p) => p.id === deleteTarget);

  // Always derive the selected post from the live posts array to avoid stale references
  const currentSelectedPost = selectedPost
    ? posts.find((p) => p.id === selectedPost.id) ?? null
    : null;

  return (
    <div className="w-full h-full flex flex-col bg-white border-r border-gray-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ── Header ── */}
      <div className="border-b border-gray-100 flex-none pl-[28px] pr-[16px] py-[12px]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <h2 className="text-gray-800 font-semibold" style={{ fontSize: "0.95rem" }}>Posts</h2>
            
          </div>

          {/* Filter button */}
          <div ref={filterRef} className="relative">
            <button
              onClick={() => setShowFilter((v) => !v)}
              className={`flex items-center gap-1.5 h-7 px-2.5 rounded-[4px] text-xs font-medium transition-colors border ${
                showFilter || activeFilterCount > 0
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              <Filter size={16} />
              {activeFilterCount > 0 && (
                <span className="bg-blue-600 text-white text-[10px] rounded-full px-1.5 py-0.5 font-semibold min-w-[16px] text-center leading-none">
                  {activeFilterCount}
                </span>
              )}
            </button>
            {showFilter && (
              <FilterPanel
                filterState={filterState}
                onApply={(f) => setFilterState(f)}
                onClear={() => setFilterState(DEFAULT_FILTER)}
                onClose={() => setShowFilter(false)}
              />
            )}
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-7 pl-7 pr-3 py-1.5 text-xs border border-gray-200 rounded-full w-40 focus:outline-none focus:border-blue-400 focus:w-52 transition-all bg-gray-50 placeholder:text-gray-400"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={11} />
              </button>
            )}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Read/Unread icon — works on checkbox-selected items or the preview-selected post */}
          <button
            onClick={() => {
              if (selectedIds.size > 0) {
                // Check if all selected are read → mark unread, otherwise mark read
                const allRead = [...selectedIds].every((id) => posts.find((p) => p.id === id)?.isRead);
                markSelectedRead(!allRead);
              } else if (currentSelectedPost) {
                toggleRead(currentSelectedPost.id);
              }
            }}
            title={
              selectedIds.size > 0
                ? [...selectedIds].every((id) => posts.find((p) => p.id === id)?.isRead)
                  ? "Mark selected as Unread"
                  : "Mark selected as Read"
                : currentSelectedPost?.isRead
                ? "Mark as Unread"
                : "Mark as Read"
            }
            className={`w-7 h-7 flex items-center justify-center rounded-[4px] transition-colors ${
              selectedIds.size > 0 || currentSelectedPost
                ? "text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                : "text-gray-300 cursor-default"
            }`}
          >
            {selectedIds.size > 0
              ? [...selectedIds].every((id) => posts.find((p) => p.id === id)?.isRead)
                ? <Mail size={16} />
                : <MailOpen size={16} />
              : currentSelectedPost?.isRead
              ? <Mail size={18} />
              : <MailOpen size={18} />}
          </button>

          {/* Delete icon — works on checkbox-selected items or the preview-selected post */}
          <button
            onClick={() => {
              if (selectedIds.size > 0) {
                setShowBulkDelete(true);
              } else if (currentSelectedPost) {
                setDeleteTarget(currentSelectedPost.id);
              }
            }}
            title={selectedIds.size > 0 ? `Delete ${selectedIds.size} selected` : "Delete"}
            className={`w-7 h-7 flex items-center justify-center rounded-[4px] transition-colors ${
              selectedIds.size > 0 || currentSelectedPost
                ? "text-gray-500 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                : "text-gray-300 cursor-default"
            }`}
          >
            <Trash2 size={18} />
          </button>

          {/* Post New */}
          <button
            onClick={() => { setEditingPost(null); setShowPostDialog(true); }}
            className="flex items-center gap-1.5 h-7 px-3 bg-[#1D7AFC] hover:bg-[#1668d9] text-white font-medium rounded-[4px] transition-colors shadow-sm font-[Poppins] text-[12px]"
          >
            <Plus size={13} />
            Post New
          </button>
        </div>




      </div>

      {/* ── Table ── */}
      <div className="flex-1 overflow-auto" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
        <table className="w-full border-collapse table-fixed">
{/* eslint-disable react/jsx-newline */}
          <colgroup><col style={{ width: 56 }} /><col style={{ width: 56 }} /><col />{activeCategory === "All" && <col style={{ width: 144 }} />}<col style={{ width: 96 }} /><col style={{ width: 112 }} /><col style={{ width: 64 }} /></colgroup>
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="pl-7 pr-3 py-4">
                <div
                  onClick={toggleSelectAll}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer transition-all ${
                    allSelected
                      ? "bg-blue-600 border-blue-600"
                      : someSelected
                      ? "bg-blue-200 border-blue-400"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                >
                  {allSelected && <Check size={10} className="text-white" />}
                  {someSelected && !allSelected && <div className="w-2 h-0.5 bg-blue-600" />}
                </div>
              </th>
              <th className="text-left px-2 py-4 whitespace-nowrap w-14">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-gray-600">Status</span>
                </div>
              </th>
              <th
                className="text-left px-2 py-4 cursor-pointer select-none group"
                onClick={() => handleSort("fileName")}
              >
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-800">File Name</span>
                  <SortIcon col="fileName" />
                </div>
              </th>
              {activeCategory === "All" && (
                <th
                  className="text-left px-2 py-4 cursor-pointer select-none group w-36"
                  onClick={() => handleSort("category")}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-800">Category</span>
                    <SortIcon col="category" />
                  </div>
                </th>
              )}
              <th
                className="text-left px-2 py-4 cursor-pointer select-none group w-24"
                onClick={() => handleSort("postDate")}
              >
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-800">Post Date</span>
                  <SortIcon col="postDate" />
                </div>
              </th>
              <th
                className="text-left px-2 py-4 cursor-pointer select-none group w-28"
                onClick={() => handleSort("expiryDate")}
              >
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-800">Expiry Date</span>
                  <SortIcon col="expiryDate" />
                </div>
              </th>
              <th className="pl-4 pr-8 py-4 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-gray-600">Edit</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={activeCategory === "All" ? 7 : 6} className="py-16 text-center">
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <Search size={32} strokeWidth={1} />
                    <p className="text-sm font-medium">No posts found</p>
                    <p className="text-xs">Try adjusting your search or filters</p>
                    {(search || activeFilterCount > 0) && (
                      <button
                        onClick={() => { setSearch(""); setFilterState(DEFAULT_FILTER); }}
                        className="mt-1 text-xs text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Clear all filters
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              paginated.map((post) => {
                const isSelected = selectedIds.has(post.id);
                const isActive = selectedPost?.id === post.id;
                const isHovered = hoveredRow === post.id;
                const catStyle = CATEGORY_STYLES[post.category] ?? "bg-gray-100 text-gray-600";

                return (
                  <tr
                    key={post.id}
                    onClick={() => {
                      onSelectPost(post);
                      if (!post.isRead) toggleRead(post.id);
                    }}
                    onMouseEnter={() => setHoveredRow(post.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`border-b border-gray-100 cursor-pointer transition-all group ${
                      isActive
                        ? "bg-blue-50 border-blue-200"
                        : isSelected
                        ? "bg-blue-50/60"
                        : isHovered
                        ? "bg-gray-50"
                        : "bg-white"
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="pl-7 pr-3 py-4" onClick={(e) => e.stopPropagation()}>
                      <div
                        onClick={() => toggleSelect(post.id)}
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer transition-all ${
                          isSelected
                            ? "bg-blue-600 border-blue-600"
                            : "border-gray-300 hover:border-blue-400"
                        }`}
                      >
                        {isSelected && <Check size={10} className="text-white" />}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-2 py-4 whitespace-nowrap w-14">
                      <div className="flex items-center w-full">
                        {/* Confidential slot */}
                        <span className="flex-1 flex items-center justify-center">
                          {post.isConfidential && (
                            <EyeOff size={12} className="text-amber-500" title="Confidential" />
                          )}
                        </span>
                        {/* Urgent slot */}
                        <span className="flex-1 flex items-center justify-center">
                          {post.isUrgent && (
                            <AlertCircle size={12} className="text-red-500" title="Urgent" />
                          )}
                        </span>
                      </div>
                    </td>

                    {/* File Name */}
                    <td className="px-2 py-4 overflow-hidden">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span
                          className={`text-xs leading-snug truncate transition-colors ${
                            post.isUrgent
                              ? !post.isRead
                                ? "font-bold text-red-600"
                                : "text-red-400"
                               : !post.isRead
                               ? "font-bold text-gray-900"
                               : isActive
                               ? "text-blue-700"
                               : "text-gray-400"
                          }`}
                        >
                          {post.fileName}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    {activeCategory === "All" && (
                      <td className="px-2 py-4 w-36">
                        <span className={`text-xs transition-colors ${
                          !post.isRead ? "font-semibold text-gray-700" : "text-gray-400"
                        }`}>
                          {post.category}
                        </span>
                      </td>
                    )}

                    {/* Post Date */}
                    <td className="px-2 py-4 w-24">
                      <span className={`text-xs transition-colors ${
                        !post.isRead ? "font-semibold text-gray-700" : "text-gray-400"
                      }`}>{formatDate(post.postDate)}</span>
                    </td>

                    {/* Expiry Date */}
                    <td className="px-2 py-4 w-28">
                      <span className={`text-xs transition-colors ${
                        !post.isRead ? "font-semibold text-gray-700" : "text-gray-400"
                      }`}>{formatDate(post.expiryDate)}</span>
                    </td>

                    {/* Actions */}
                    <td className="pl-4 pr-8 py-4 whitespace-nowrap align-middle" onClick={(e) => e.stopPropagation()}>
                      <div className={`flex items-center justify-center gap-0.5 transition-opacity ${
                        isHovered || isActive ? "opacity-100" : "opacity-0"
                      }`}>
                        <button
                          onClick={() => { setEditingPost(post); setShowPostDialog(true); }}
                          title="Edit"
                          className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d={editSvgPaths.p337a2200} fill="#1D7AFC" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ── */}
      <div className="flex-none px-4 py-2.5 border-t border-gray-200 bg-white flex items-center gap-2">
        <span className="text-xs text-gray-500">
          {filtered.length === 0
            ? "0 posts"
            : `${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, filtered.length)} of ${filtered.length}`}
        </span>

        <div className="flex-1 flex items-center justify-center gap-1">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={page === 1}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-gray-500"
          >
            <ChevronsLeft size={14} />
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-gray-500"
          >
            <ChevronLeft size={14} />
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
            .reduce<(number | "…")[]>((acc, p, i, arr) => {
              if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("…");
              acc.push(p);
              return acc;
            }, [])
            .map((item, i) =>
              item === "…" ? (
                <span key={`ellipsis-${i}`} className="text-xs text-gray-400 px-1">…</span>
              ) : (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item as number)}
                  className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                    page === item
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              )
            )}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-gray-500"
          >
            <ChevronRight size={14} />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={page === totalPages}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-gray-500"
          >
            <ChevronsRight size={14} />
          </button>
        </div>

        {/* Page size */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-400">Rows:</span>
          <select
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
            className="text-xs border border-gray-200 rounded-[4px] px-1.5 py-0.5 bg-white focus:outline-none focus:border-blue-400 text-gray-600"
          >
            {[5, 8, 10, 16, 20].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Dialogs ── */}
      <PostDialog
        isOpen={showPostDialog}
        onClose={() => { setShowPostDialog(false); setEditingPost(null); }}
        editingPost={editingPost}
        onSave={handleSavePost}
      />
      <DeleteDialog
        isOpen={!!deleteTarget}
        fileName={deletePost?.fileName ?? ""}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={() => deleteTarget && handleDelete(deleteTarget)}
      />
      <DeleteDialog
        isOpen={showBulkDelete}
        fileName={`${selectedIds.size} post${selectedIds.size > 1 ? "s" : ""}`}
        bulk
        onCancel={() => setShowBulkDelete(false)}
        onConfirm={handleBulkDelete}
      />
    </div>
  );
}