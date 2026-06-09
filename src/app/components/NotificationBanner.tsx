import { useState } from "react";
import { DatePicker } from "./DatePicker";
import { Edit2, Trash2, ChevronLeft, X, Plus } from "lucide-react";

interface Announcement {
  id: string;
  english: string;
  french: string;
  postingDate: string;
  expirationDate: string;
}

const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "1",
    english: "New system updates scheduled. Immediate action may be required; contact IT for info.",
    french: "Mises à jour système prévues. Action immédiate peut être requise; contactez le TI.",
    postingDate: "2025-02-12",
    expirationDate: "2025-03-12",
  },
  {
    id: "2",
    english: "Office will be closed on March 15 for maintenance. Please plan accordingly.",
    french: "Le bureau sera fermé le 15 mars pour maintenance. Veuillez planifier en conséquence.",
    postingDate: "2025-02-12",
    expirationDate: "2025-03-12",
  },
];

const EMPTY_FORM = { english: "", french: "", postingDate: "", expirationDate: "" };

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${m}/${d}/${y}`;
}

interface NotificationBannerProps {
  inline?: boolean;
}

export function NotificationBanner({ inline = false }: NotificationBannerProps) {
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);
  const [showList, setShowList] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [hovered, setHovered] = useState(false);

  const marqueeText = announcements.map((a) => a.english).join("   •   ");

  const openList = () => { setShowList(true); setEditingId(null); };
  const closeAll = () => { setShowList(false); setEditingId(null); setErrors({}); };
  const openEditor = (ann: Announcement) => {
    setForm({ english: ann.english, french: ann.french, postingDate: ann.postingDate, expirationDate: ann.expirationDate });
    setErrors({});
    setEditingId(ann.id);
  };
  const openNewEditor = () => { setForm(EMPTY_FORM); setErrors({}); setEditingId("new"); };
  const backToList = () => { setEditingId(null); setErrors({}); };

  const handleSave = () => {
    const newErrors: Record<string, boolean> = {};
    if (!form.english.trim()) newErrors.english = true;
    if (!form.french.trim()) newErrors.french = true;
    if (!form.postingDate) newErrors.postingDate = true;
    if (!form.expirationDate) newErrors.expirationDate = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    if (editingId === "new") {
      setAnnouncements((prev) => [...prev, { id: Date.now().toString(), ...form }]);
    } else {
      setAnnouncements((prev) => prev.map((a) => (a.id === editingId ? { ...a, ...form } : a)));
    }
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  // Inline mode: full-height marquee strip for TopBar center
  if (inline) {
    return (
      <>
        <div
          className="flex-1 min-w-0 relative overflow-hidden flex items-center"
          style={{ height: "44px", background: "var(--wb-announce-bg)", borderRadius: 0 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex-1 overflow-hidden relative">
            <div
              className="flex whitespace-nowrap animate-marquee"
              style={{ animationPlayState: hovered ? "paused" : "running" }}
            >
              <span className="font-medium text-[12px] pr-[120px]" style={{ color: "var(--wb-announce-ink)", fontFamily: "Poppins, sans-serif" }}>
                {marqueeText}
              </span>
              <span className="font-medium text-[12px] pr-[120px]" style={{ color: "var(--wb-announce-ink)", fontFamily: "Poppins, sans-serif" }}>
                {marqueeText}
              </span>
            </div>
          </div>
          {hovered && (
            <div className="absolute right-3 z-10">
              <button
                onClick={openList}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] shadow-sm cursor-pointer text-[11px] font-semibold transition-opacity"
                style={{ background: "rgba(255,255,255,0.92)", color: "var(--wb-announce-ink)" }}
              >
                <Edit2 size={11} />
                Edit
              </button>
            </div>
          )}
        </div>

        {showList && (
          <AnnouncementModal
            announcements={announcements} editingId={editingId}
            form={form} errors={errors} setForm={setForm} setErrors={setErrors}
            onClose={closeAll} onOpenEditor={openEditor} onOpenNew={openNewEditor}
            onBack={backToList} onSave={handleSave} onDelete={handleDelete}
          />
        )}
      </>
    );
  }

  // Standalone mode: full-width yellow band
  return (
    <>
      <div className="marquee-banner group flex-none relative overflow-hidden" style={{ background: "var(--wb-announce-bg)", height: "42px" }}>
        <div className="flex items-center size-full">
          <div className="flex-1 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
              <span className="font-medium text-[14px] pr-[200px]" style={{ color: "var(--wb-announce-ink)" }}>
                {marqueeText}
              </span>
              <span className="font-medium text-[14px] pr-[200px]" style={{ color: "var(--wb-announce-ink)" }}>
                {marqueeText}
              </span>
            </div>
          </div>
          <div className="absolute right-[20px] top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={openList}
              className="bg-white flex items-center justify-center rounded-[16px] shadow-sm cursor-pointer px-[12px] py-[4px]"
            >
              <span className="font-medium text-[14px]" style={{ color: "var(--wb-announce-ink)" }}>Edit</span>
            </button>
          </div>
        </div>
      </div>

      {showList && (
        <AnnouncementModal
          announcements={announcements} editingId={editingId}
          form={form} errors={errors} setForm={setForm} setErrors={setErrors}
          onClose={closeAll} onOpenEditor={openEditor} onOpenNew={openNewEditor}
          onBack={backToList} onSave={handleSave} onDelete={handleDelete}
        />
      )}
    </>
  );
}

function AnnouncementModal({
  announcements, editingId, form, errors,
  setForm, setErrors,
  onClose, onOpenEditor, onOpenNew, onBack, onSave, onDelete,
}: {
  announcements: Announcement[];
  editingId: string | null;
  form: typeof EMPTY_FORM;
  errors: Record<string, boolean>;
  setForm: React.Dispatch<React.SetStateAction<typeof EMPTY_FORM>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  onClose: () => void;
  onOpenEditor: (a: Announcement) => void;
  onOpenNew: () => void;
  onBack: () => void;
  onSave: () => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={onClose}>
      <div className="bg-white rounded-[4px] w-[620px] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {editingId === null ? (
          <>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-[16px] text-gray-900">Announcements</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"><X size={18} /></button>
            </div>
            <div className="px-6 pt-5 pb-4 flex flex-col gap-2.5">
              <button onClick={onOpenNew} className="flex gap-1.5 items-center cursor-pointer mb-1 text-[12px] font-medium" style={{ color: "#1D7AFC" }}>
                <Plus size={18} style={{ color: "#1D7AFC" }} />
                Create New
              </button>
              {announcements.map((ann, idx) => (
                <div key={ann.id} className="flex flex-col gap-[5px] pb-[10px] border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-[#0c111d] text-[16px]">Announcement {idx + 1}</h3>
                    <div className="flex items-center gap-4 ml-auto">
                      <button onClick={() => onOpenEditor(ann)} className="hover:opacity-70 transition-opacity cursor-pointer" title="Edit">
                        <Edit2 size={18} style={{ color: "#1D7AFC" }} />
                      </button>
                      {announcements.length > 1 && (
                        <button onClick={() => onDelete(ann.id)} className="hover:opacity-70 transition-opacity cursor-pointer" title="Delete">
                          <Trash2 size={18} style={{ color: "#E71616" }} />
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-[14px] text-[#475467] leading-normal">{ann.english}</p>
                  <p className="font-medium text-[13px] text-black">
                    Posting period: {formatDate(ann.postingDate)} - {formatDate(ann.expirationDate)}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <button onClick={onBack} className="hover:opacity-70 transition-opacity cursor-pointer">
                  <ChevronLeft size={24} style={{ color: "#1C1B1F" }} />
                </button>
                <h2 className="font-semibold text-[16px] text-gray-900">
                  {editingId === "new" ? "New Announcement" : "Edit Announcement"}
                </h2>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"><X size={18} /></button>
            </div>
            <div className="px-6 py-5 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-gray-700 text-[14px]">English Announcement <span className="text-red-500">*</span></label>
                  <span className={`text-[11px] ${form.english.length >= 100 ? "text-red-500" : "text-gray-400"}`}>{form.english.length}/100</span>
                </div>
                <textarea
                  value={form.english}
                  onChange={(e) => { if (e.target.value.length <= 100) { setForm((f) => ({ ...f, english: e.target.value })); setErrors((er) => ({ ...er, english: false })); } }}
                  maxLength={100} rows={3}
                  className={`w-full rounded-[4px] border ${errors.english ? "border-red-400" : "border-gray-300"} px-3 py-2 text-[13px] text-gray-800 resize-y focus:outline-none focus:border-gray-400 transition-colors`}
                  placeholder="Enter English announcement..."
                />
                {errors.english && <span className="text-[11px] text-red-500">This field is required</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-gray-700 text-[14px]">French Announcement <span className="text-red-500">*</span></label>
                  <span className={`text-[11px] ${form.french.length >= 100 ? "text-red-500" : "text-gray-400"}`}>{form.french.length}/100</span>
                </div>
                <textarea
                  value={form.french}
                  onChange={(e) => { if (e.target.value.length <= 100) { setForm((f) => ({ ...f, french: e.target.value })); setErrors((er) => ({ ...er, french: false })); } }}
                  maxLength={100} rows={3}
                  className={`w-full rounded-[4px] border ${errors.french ? "border-red-400" : "border-gray-300"} px-3 py-2 text-[13px] text-gray-800 resize-y focus:outline-none focus:border-gray-400 transition-colors`}
                  placeholder="Entrez l'annonce en français..."
                />
                {errors.french && <span className="text-[11px] text-red-500">This field is required</span>}
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-gray-700 text-[14px]">Posting Date <span className="text-red-500">*</span></label>
                  <DatePicker value={form.postingDate} onChange={(val) => { setForm((f) => ({ ...f, postingDate: val })); setErrors((er) => ({ ...er, postingDate: false })); }} placeholder="Select posting date" hasError={!!errors.postingDate} />
                  {errors.postingDate && <span className="text-[11px] text-red-500">This field is required</span>}
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-gray-700 text-[14px]">Expiration Date <span className="text-red-500">*</span></label>
                  <DatePicker value={form.expirationDate} onChange={(val) => { setForm((f) => ({ ...f, expirationDate: val })); setErrors((er) => ({ ...er, expirationDate: false })); }} placeholder="Select expiration date" hasError={!!errors.expirationDate} />
                  {errors.expirationDate && <span className="text-[11px] text-red-500">This field is required</span>}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
              <button onClick={onBack} className="px-4 py-2 rounded-[4px] text-[13px] font-medium text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer">Cancel</button>
              <button
                onClick={onSave}
                disabled={!form.english.trim() || !form.french.trim() || !form.postingDate || !form.expirationDate}
                className={`px-4 py-2 rounded-[4px] text-white text-[13px] font-medium transition-colors ${
                  form.english.trim() && form.french.trim() && form.postingDate && form.expirationDate
                    ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                }`}
                style={{ background: "#1D7AFC" }}
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
