import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import svgPathsList from "./svg-fwrsf0rckc";
import svgPathsDetail from "./svg-stbm756vmj";
import svgPathsForm from "./svg-38m7gkx29n";

interface ImportantMessageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onUnreadCountChange?: (count: number) => void;
}

interface ImportantMessage {
  id: number;
  title: string;
  dateRange: string;
  body: string;
  read: boolean;
  englishTitle?: string;
  englishAnnouncement?: string;
  frenchTitle?: string;
  frenchAnnouncement?: string;
  effectiveDate?: string;
  expirationDate?: string;
  region?: string;
}

const initialMessages: ImportantMessage[] = [
  {
    id: 1,
    title: "Regarding recent recalls",
    dateRange: "02/12/2025 - 03/12/2025",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    read: false,
  },
  {
    id: 2,
    title: "New Promotions",
    dateRange: "02/12/2025 - 03/12/2025",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    read: false,
  },
  {
    id: 3,
    title: "New cleaning procedures!!!",
    dateRange: "02/12/2025 - 03/12/2025",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    read: false,
  },
  {
    id: 4,
    title: "Updated safety guidelines",
    dateRange: "02/15/2025 - 03/15/2025",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    read: false,
  },
  {
    id: 5,
    title: "Holiday schedule changes",
    dateRange: "02/20/2025 - 03/20/2025",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    read: false,
  },
];

/* ─── SVG Icon Components ─── */

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_imp_close" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_imp_close)">
          <path d={svgPathsList.p1a580680} fill="#1C1B1F" />
        </g>
      </svg>
    </div>
  );
}

function AddIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_imp_add" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_imp_add)">
          <path d={svgPathsList.p2a6e0600} fill="#1D7AFC" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRightIcon({ color = "#1C1B1F" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_imp_chevron_r" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_imp_chevron_r)">
          <path d={svgPathsList.pa1eb970} fill={color} />
        </g>
      </svg>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_imp_chevron_l" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_imp_chevron_l)">
          <path d={svgPathsDetail.pc87b500} fill="#1C1B1F" />
        </g>
      </svg>
    </div>
  );
}

function EditIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_imp_edit" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_imp_edit)">
          <path d={svgPathsDetail.p337a2200} fill="#1D7AFC" />
        </g>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_imp_delete" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_imp_delete)">
          <path d={svgPathsDetail.p68dfd00} fill="#E71616" />
        </g>
      </svg>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_imp_cal" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_imp_cal)">
          <path d={svgPathsForm.pc010100} fill="#7A7A7A" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_imp_chevdown" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_imp_chevdown)">
          <path d={svgPathsForm.p33a42b80} fill="#7A7A7A" />
        </g>
      </svg>
    </div>
  );
}

/* ─── Confirmation Dialogs ─── */

function ChangesNotSavedDialog({
  onCancel,
  onContinue,
}: {
  onCancel: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#000000]/80" onClick={onCancel} />
      <div className="relative bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[40px] py-[32px] rounded-[8px] w-[400px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
          <p className="capitalize font-['Poppins',sans-serif] relative shrink-0 text-[#e71616] text-[16px] w-full" style={{ fontWeight: 500 }}>Changes Not Saved</p>
          <p className="font-['Poppins',sans-serif] relative shrink-0 text-[14px] text-black w-full" style={{ fontWeight: 400 }}>Any unsaved changes will be deleted</p>
        </div>
        <div className="bg-white content-end flex flex-wrap gap-[10px_24px] items-end overflow-x-clip relative shrink-0">
          <button
            className="bg-white content-stretch cursor-pointer flex h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 w-[100px] hover:bg-[#f5f5f5] transition-colors"
            onClick={onCancel}
          >
            <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#828282] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
              <p className="leading-[normal]">Cancel</p>
            </div>
          </button>
          <button
            className="content-stretch cursor-pointer flex h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 hover:bg-[#fef2f2] transition-colors"
            onClick={onContinue}
          >
            <div aria-hidden="true" className="absolute border border-[#e71616] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e71616] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
              <p className="leading-[normal]">Continue Without Saving</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteConfirmDialog({
  onCancel,
  onDelete,
}: {
  onCancel: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#000000]/80" onClick={onCancel} />
      <div className="relative bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[40px] py-[32px] rounded-[8px] w-[400px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0">
          <p className="capitalize font-['Poppins',sans-serif] relative shrink-0 text-[#e71616] text-[16px]" style={{ fontWeight: 500 }}>Are You Sure You Want To Delete?</p>
          <p className="font-['Poppins',sans-serif] min-w-full relative shrink-0 text-[14px] text-black w-[min-content] whitespace-pre-wrap" style={{ fontWeight: 400 }}>You can not undo this action</p>
        </div>
        <div className="bg-white content-end flex flex-wrap gap-y-[10px] items-end justify-between overflow-x-clip relative shrink-0 w-full">
          <button
            className="bg-white content-stretch cursor-pointer flex h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 w-[100px] hover:bg-[#f5f5f5] transition-colors"
            onClick={onCancel}
          >
            <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#828282] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
              <p className="leading-[normal]">Cancel</p>
            </div>
          </button>
          <button
            className="content-stretch cursor-pointer flex h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 hover:bg-[#fef2f2] transition-colors"
            onClick={onDelete}
          >
            <div aria-hidden="true" className="absolute border border-[#e71616] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e71616] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
              <p className="leading-[normal]">Yes, Delete</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Form Field Label ─── */

function FieldLabel({ text }: { text: string }) {
  return (
    <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[0px] w-full" style={{ fontWeight: 600 }}>
      <p className="font-['Poppins',sans-serif] text-[14px] whitespace-pre-wrap" style={{ fontWeight: 500 }}>
        <span className="leading-[normal]">{text}</span>
        <span className="leading-[normal] text-[#e71616]">* </span>
      </p>
    </div>
  );
}

/* ─── Calendar Popup ─── */

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function CalendarPopup({
  selectedDate,
  onSelect,
  onClose,
  anchorRect,
}: {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  onClose: () => void;
  anchorRect: DOMRect;
}) {
  const [viewDate, setViewDate] = useState(() => selectedDate || new Date());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const monthName = viewDate.toLocaleString("en-US", { month: "long", year: "numeric" });

  const cells: { day: number; inMonth: boolean; date: Date }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    cells.push({ day: d, inMonth: false, date: new Date(year, month - 1, d) });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inMonth: true, date: new Date(year, month, d) });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, inMonth: false, date: new Date(year, month + 1, d) });
  }

  const isSelected = (date: Date) =>
    selectedDate &&
    date.getFullYear() === selectedDate.getFullYear() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getDate() === selectedDate.getDate();

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  return createPortal(
    <div
      ref={ref}
      className="fixed z-[10000] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-[12px] w-[260px] font-['Poppins',sans-serif]"
      style={{
        fontWeight: 400,
        lineHeight: "normal",
        top: anchorRect.bottom + 4,
        left: anchorRect.left,
      }}
    >
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-[8px]">
        <button
          className="cursor-pointer p-[4px] rounded hover:bg-[#f5f5f5] transition-colors text-[14px] text-[#7a7a7a]"
          onClick={() => setViewDate(new Date(year, month - 1, 1))}
        >
          ‹
        </button>
        <span className="text-[12px] text-[#1c1b1f]" style={{ fontWeight: 500 }}>
          {monthName}
        </span>
        <button
          className="cursor-pointer p-[4px] rounded hover:bg-[#f5f5f5] transition-colors text-[14px] text-[#7a7a7a]"
          onClick={() => setViewDate(new Date(year, month + 1, 1))}
        >
          ›
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-[2px] mb-[4px]">
        {DAYS_OF_WEEK.map((d) => (
          <div
            key={d}
            className="flex items-center justify-center text-[10px] text-[#7a7a7a] h-[28px]"
            style={{ fontWeight: 500 }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-[2px]">
        {cells.map((cell, idx) => (
          <button
            key={idx}
            className={`flex items-center justify-center h-[28px] rounded-[4px] text-[11px] cursor-pointer transition-colors
              ${!cell.inMonth ? "text-[#c3c3c3]" : "text-[#1c1b1f]"}
              ${isSelected(cell.date) ? "bg-[#1d7afc] !text-white" : ""}
              ${isToday(cell.date) && !isSelected(cell.date) ? "border border-[#1d7afc] border-solid" : ""}
              ${cell.inMonth && !isSelected(cell.date) ? "hover:bg-[#edf5ff]" : ""}
            `}
            onClick={() => {
              onSelect(cell.date);
              onClose();
            }}
          >
            {cell.day}
          </button>
        ))}
      </div>
    </div>,
    document.body
  );
}

function DatePickerInput({ value, onChange }: { value: Date | null; onChange: (date: Date) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const formatted = value
    ? value.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })
    : "";

  const handleClick = () => {
    if (inputRef.current) {
      setAnchorRect(inputRef.current.getBoundingClientRect());
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={inputRef} className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full">
      <div
        className="flex flex-row items-center overflow-clip rounded-[inherit] size-full cursor-pointer"
        onClick={handleClick}
      >
        <div className="content-stretch flex items-center gap-[6px] px-[8px] relative size-full">
          <CalendarIcon />
          {formatted && (
            <span
              className="font-['Poppins',sans-serif] text-[12px] text-[#1c1b1f]"
              style={{ fontWeight: 400, lineHeight: "normal" }}
            >
              {formatted}
            </span>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      {isOpen && anchorRect && (
        <CalendarPopup
          selectedDate={value}
          onSelect={onChange}
          onClose={() => setIsOpen(false)}
          anchorRect={anchorRect}
        />
      )}
    </div>
  );
}

/* ─── Form View (Create / Edit) ─── */

interface FormData {
  englishTitle: string;
  englishAnnouncement: string;
  frenchTitle: string;
  frenchAnnouncement: string;
  effectiveDate: Date | null;
  expirationDate: Date | null;
  region: string;
}

const emptyFormData: FormData = {
  englishTitle: "",
  englishAnnouncement: "",
  frenchTitle: "",
  frenchAnnouncement: "",
  effectiveDate: null,
  expirationDate: null,
  region: "",
};

function FormView({
  mode,
  initialData,
  onBack,
  onSubmit,
}: {
  mode: "create" | "edit";
  initialData: FormData;
  onBack: () => void;
  onSubmit: (data: FormData) => void;
}) {
  const [form, setForm] = useState<FormData>(initialData);
  const [regionOpen, setRegionOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);

  const regions = ["Western Canada", "Ontario", "Quebec", "Atlantic Canada"];

  // Check if form has been modified from initial data
  const isDirty = () => {
    if (form.englishTitle !== initialData.englishTitle) return true;
    if (form.englishAnnouncement !== initialData.englishAnnouncement) return true;
    if (form.frenchTitle !== initialData.frenchTitle) return true;
    if (form.frenchAnnouncement !== initialData.frenchAnnouncement) return true;
    if (form.region !== initialData.region) return true;
    const formEffStr = form.effectiveDate?.getTime() ?? null;
    const initEffStr = initialData.effectiveDate?.getTime() ?? null;
    if (formEffStr !== initEffStr) return true;
    const formExpStr = form.expirationDate?.getTime() ?? null;
    const initExpStr = initialData.expirationDate?.getTime() ?? null;
    if (formExpStr !== initExpStr) return true;
    return false;
  };

  const handleBackClick = () => {
    if (isDirty()) {
      setShowUnsavedDialog(true);
    } else {
      onBack();
    }
  };

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (regionRef.current && !regionRef.current.contains(e.target as Node)) {
        setRegionOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const allRequiredFilled =
    form.englishTitle.trim() !== "" &&
    form.englishAnnouncement.trim() !== "" &&
    form.frenchTitle.trim() !== "" &&
    form.frenchAnnouncement.trim() !== "" &&
    form.effectiveDate !== null &&
    form.expirationDate !== null &&
    form.region.trim() !== "";

  const title = mode === "create" ? "Create New Important Message" : "Edit Important Message";
  const buttonLabel = mode === "create" ? "Post" : "Save";

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-y-auto overflow-x-hidden p-[20px] relative rounded-[inherit] size-full max-h-[80vh]" style={{ scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <button
            className="block cursor-pointer relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
            onClick={handleBackClick}
          >
            <ChevronLeftIcon />
          </button>
          <div
            className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d12b5d] text-[16px] whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            <p className="leading-[normal]">{title}</p>
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {/* English Title */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <FieldLabel text="English Title" />
          <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full">
            <input
              className="absolute inset-0 px-[8px] font-['Poppins',sans-serif] text-[12px] text-[#1c1b1f] outline-none bg-transparent rounded-[4px] capitalize"
              style={{ fontWeight: 500 }}
              value={form.englishTitle}
              onChange={(e) => handleChange("englishTitle", e.target.value)}
            />
            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>

        {/* English Announcement */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <FieldLabel text="English Announcement" />
          <div className="bg-white relative rounded-[4px] shrink-0 w-full">
            <textarea
              className="w-full px-[8px] py-[8px] font-['Poppins',sans-serif] text-[12px] text-[#1c1b1f] outline-none bg-transparent rounded-[4px] resize-y min-h-[36px]"
              style={{ fontWeight: 500 }}
              rows={2}
              value={form.englishAnnouncement}
              onChange={(e) => handleChange("englishAnnouncement", e.target.value)}
            />
            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>

        {/* French Title */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <FieldLabel text="French Title" />
          <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full">
            <input
              className="absolute inset-0 px-[8px] font-['Poppins',sans-serif] text-[12px] text-[#1c1b1f] outline-none bg-transparent rounded-[4px]"
              style={{ fontWeight: 500 }}
              value={form.frenchTitle}
              onChange={(e) => handleChange("frenchTitle", e.target.value)}
            />
            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>

        {/* French Announcement */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <FieldLabel text="French Announcement" />
          <div className="bg-white relative rounded-[4px] shrink-0 w-full">
            <textarea
              className="w-full px-[8px] py-[8px] font-['Poppins',sans-serif] text-[12px] text-[#1c1b1f] outline-none bg-transparent rounded-[4px] resize-y min-h-[36px]"
              style={{ fontWeight: 500 }}
              rows={2}
              value={form.frenchAnnouncement}
              onChange={(e) => handleChange("frenchAnnouncement", e.target.value)}
            />
            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>

        {/* Dates row */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          {/* Effective Date */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
            <FieldLabel text="Effective Date" />
            <DatePickerInput
              value={form.effectiveDate}
              onChange={(date) => setForm((prev) => ({ ...prev, effectiveDate: date }))}
            />
          </div>

          {/* Expiration Date */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
            <FieldLabel text="Expiration Date" />
            <DatePickerInput
              value={form.expirationDate}
              onChange={(date) => setForm((prev) => ({ ...prev, expirationDate: date }))}
            />
          </div>
        </div>

        {/* Region */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" ref={regionRef}>
          <FieldLabel text="Region" />
          <div className="bg-white relative rounded-[4px] shrink-0 w-full">
            <button
              className="flex flex-row items-center justify-between overflow-clip rounded-[inherit] size-full w-full px-[8px] py-[6px] cursor-pointer bg-transparent"
              onClick={() => setRegionOpen((p) => !p)}
              type="button"
            >
              <span className="font-['Poppins',sans-serif] text-[12px] text-[#1c1b1f]" style={{ fontWeight: 500 }}>
                {form.region || ""}
              </span>
              <div className="flex items-center justify-center relative shrink-0 size-[24px]">
                <div className="-rotate-90 flex-none">
                  <ChevronDownIcon />
                </div>
              </div>
            </button>
            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
            {regionOpen && (
              <div className="absolute top-full left-0 right-0 mt-[2px] bg-white rounded-[4px] border border-[#e8e8e8] z-10 shadow-sm">
                {regions.map((r) => (
                  <button
                    key={r}
                    className="w-full text-left px-[8px] py-[6px] font-['Poppins',sans-serif] text-[12px] text-[#1c1b1f] hover:bg-[#f0f0f0] cursor-pointer bg-transparent"
                    style={{ fontWeight: 500 }}
                    onClick={() => {
                      handleChange("region", r);
                      setRegionOpen(false);
                    }}
                    type="button"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action button */}
      <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-end overflow-x-clip overflow-y-auto relative shrink-0 w-full">
        <button
          className="content-stretch flex h-[36px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 w-[100px] cursor-pointer transition-colors"
          style={{ backgroundColor: allRequiredFilled ? "#1d7afc" : "#a3a3a3" }}
          disabled={!allRequiredFilled}
          onClick={() => { if (allRequiredFilled) onSubmit(form); }}
          type="button"
        >
          <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[normal]">{buttonLabel}</p>
          </div>
        </button>
      </div>

      {/* Changes not saved dialog */}
      {showUnsavedDialog && (
        <ChangesNotSavedDialog
          onCancel={() => setShowUnsavedDialog(false)}
          onContinue={() => {
            setShowUnsavedDialog(false);
            onBack();
          }}
        />
      )}
    </div>
  );
}

/* ─── Message Row ─── */

function MessageRow({
  message,
  onClick,
}: {
  message: ImportantMessage;
  onClick: () => void;
}) {
  const textColor = message.read ? "#a3a3a3" : "#1c1b1f";
  const subColor = message.read ? "#a3a3a3" : "#6f6f6f";
  const chevronColor = message.read ? "#A3A3A3" : "#1C1B1F";

  return (
    <button
      className="bg-white cursor-pointer relative rounded-[4px] shrink-0 w-full"
      onClick={onClick}
    >
      <div className="flex flex-row items-center size-full overflow-clip rounded-[inherit]">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative w-full">
          <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left">
            <p
              className="capitalize font-['Poppins',sans-serif] leading-[normal] relative shrink-0 text-[14px]"
              style={{ fontWeight: 500, color: textColor }}
            >
              {message.title}
            </p>
            <div
              className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] relative shrink-0 text-[11px] whitespace-nowrap"
              style={{ fontWeight: 400, color: subColor }}
            >
              <p className="leading-[normal]">{message.dateRange}</p>
            </div>
          </div>
          <ChevronRightIcon color={chevronColor} />
        </div>
      </div>
    </button>
  );
}

/* ─── List View (ImportantMessage1 / ImportantMessage3) ─── */

function ListView({
  messages,
  onClose,
  onSelectMessage,
  onCreateNew,
  markAllChecked,
  onMarkAllChange,
}: {
  messages: ImportantMessage[];
  onClose: () => void;
  onSelectMessage: (id: number) => void;
  onCreateNew: () => void;
  markAllChecked: boolean;
  onMarkAllChange: (checked: boolean) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full min-h-[395px]">
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0">
          <div
            className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d12b5d] text-[16px] whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            <p className="leading-[normal]">Important Message</p>
          </div>
        </div>
        <button
          className="block cursor-pointer relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>

      {/* Create New - pinned */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <button
          className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent"
          onClick={onCreateNew}
          type="button"
        >
          <AddIcon />
          <div
            className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d7afc] text-[12px] text-center whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            <p className="leading-[normal]">Create New</p>
          </div>
        </button>
      </div>

      {/* Scrollable messages area — shows ~4.5 rows to hint at scroll */}
      <div
        className="content-stretch flex flex-col flex-1 gap-[8px] items-start relative shrink-0 w-full overflow-y-auto"
        style={{ maxHeight: "210px", minHeight: "210px", scrollbarWidth: "none" }}
      >
        {messages.length > 0 ? (
          messages.map((msg) => (
            <MessageRow
              key={msg.id}
              message={msg}
              onClick={() => onSelectMessage(msg.id)}
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full" style={{ minHeight: "210px" }}>
            <p
              className="font-['Poppins',sans-serif] text-[13px] text-[#a3a3a3] text-center"
              style={{ fontWeight: 400, lineHeight: "normal" }}
            >
              No important message at the moment, please check back later.
            </p>
          </div>
        )}
      </div>

      {/* Mark all as read checkbox - pinned */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full mt-auto">
        <div
          className="bg-white relative rounded-[4px] shrink-0 size-[17px] cursor-pointer"
          onClick={() => onMarkAllChange(!markAllChecked)}
        >
          {markAllChecked ? (
            <div className="absolute inset-0 bg-[#1d7afc] rounded-[4px] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="absolute border-2 border-[#1d7afc] border-solid inset-0 pointer-events-none rounded-[4px]"
            />
          )}
        </div>
        <p
          className="font-['Poppins',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d12b5d] text-[12px] whitespace-pre-wrap"
          style={{ fontWeight: 500 }}
        >
          Mark all as read and do not show this pop-up again
        </p>
      </div>
    </div>
  );
}

/* ─── Detail View (ImportantMessage2) ─── */

function DetailView({
  message,
  onBack,
  onEdit,
  onDelete,
}: {
  message: ImportantMessage;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
      {/* Header */}
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <button
            className="block cursor-pointer relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
            onClick={onBack}
          >
            <ChevronLeftIcon />
          </button>
          <div
            className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d12b5d] text-[16px] whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            <p className="leading-[normal]">Important Message</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <button className="cursor-pointer hover:opacity-70 transition-opacity" onClick={onEdit}>
            <EditIcon />
          </button>
          <button className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => setShowDeleteDialog(true)}>
            <DeleteIcon />
          </button>
        </div>
      </div>

      {/* Message content */}
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0">
            <p
              className="capitalize font-['Poppins',sans-serif] leading-[normal] relative shrink-0 text-[#1c1b1f] text-[14px]"
              style={{ fontWeight: 500 }}
            >
              {message.title}
            </p>
            <div
              className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6f6f6f] text-[11px] whitespace-nowrap"
              style={{ fontWeight: 400 }}
            >
              <p className="leading-[normal]">{message.dateRange}</p>
            </div>
          </div>
        </div>
        <p
          className="font-['Poppins',sans-serif] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#1c1b1f] text-[12px] text-ellipsis w-full whitespace-pre-wrap"
          style={{ fontWeight: 500 }}
        >
          {message.body}
        </p>
      </div>

      {/* Delete confirmation dialog */}
      {showDeleteDialog && (
        <DeleteConfirmDialog
          onCancel={() => setShowDeleteDialog(false)}
          onDelete={() => {
            setShowDeleteDialog(false);
            onDelete();
          }}
        />
      )}
    </div>
  );
}

/* ─── Main Overlay ─── */

type OverlayView = "list" | "detail" | "create" | "edit";

export function ImportantMessageOverlay({
  isOpen,
  onClose,
  onUnreadCountChange,
}: ImportantMessageOverlayProps) {
  const [messages, setMessages] = useState<ImportantMessage[]>(initialMessages);
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);
  const [markAllChecked, setMarkAllChecked] = useState(false);
  const [savedReadStates, setSavedReadStates] = useState<Record<number, boolean> | null>(null);
  const [view, setView] = useState<OverlayView>("list");

  // Notify parent of unread count changes via useEffect to avoid setState-during-render
  useEffect(() => {
    const unread = messages.filter((m) => !m.read).length;
    onUnreadCountChange?.(unread);
  }, [messages, onUnreadCountChange]);

  const handleSelectMessage = useCallback(
    (id: number) => {
      setSelectedMessageId(id);
      setView("detail");
      // Mark this message as read and also update saved states so individual reads persist through uncheck
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, read: true } : m))
      );
      setSavedReadStates((prev) =>
        prev ? { ...prev, [id]: true } : null
      );
    },
    []
  );

  const handleBack = useCallback(() => {
    if (view === "edit") {
      // Go back to detail view when leaving edit
      setView("detail");
    } else {
      // Go back to list for detail and create
      setSelectedMessageId(null);
      setView("list");
    }
  }, [view]);

  const handleClose = useCallback(() => {
    setSelectedMessageId(null);
    setView("list");
    onClose();
  }, [onClose]);

  const handleMarkAllChange = useCallback(
    (checked: boolean) => {
      setMarkAllChecked(checked);
      if (checked) {
        setMessages((prev) => {
          const snapshot = Object.fromEntries(prev.map((m) => [m.id, m.read]));
          setSavedReadStates(snapshot);
          return prev.map((m) => ({ ...m, read: true }));
        });
      } else if (savedReadStates) {
        const toRestore = savedReadStates;
        setMessages((prev) =>
          prev.map((m) => ({
            ...m,
            read: toRestore[m.id] ?? m.read,
          }))
        );
        setSavedReadStates(null);
      }
    },
    [savedReadStates]
  );

  const handleCreateNew = useCallback(() => {
    setView("create");
  }, []);

  const handleEdit = useCallback(() => {
    setView("edit");
  }, []);

  const nextId = useRef(
    Math.max(...initialMessages.map((m) => m.id)) + 1
  );

  // Helper to format date from yyyy-mm-dd to mm/dd/yyyy
  const formatDate = (d: string) => {
    if (!d) return "";
    const [y, m, day] = d.split("-");
    return `${m}/${day}/${y}`;
  };

  const handleCreateSubmit = useCallback(
    (data: FormData) => {
      const newMsg: ImportantMessage = {
        id: nextId.current++,
        title: data.englishTitle,
        dateRange: `${formatDate(data.effectiveDate ? data.effectiveDate.toISOString().split("T")[0] : "")} - ${formatDate(data.expirationDate ? data.expirationDate.toISOString().split("T")[0] : "")}`,
        body: data.englishAnnouncement,
        read: false,
        englishTitle: data.englishTitle,
        englishAnnouncement: data.englishAnnouncement,
        frenchTitle: data.frenchTitle,
        frenchAnnouncement: data.frenchAnnouncement,
        effectiveDate: data.effectiveDate ? data.effectiveDate.toISOString().split("T")[0] : "",
        expirationDate: data.expirationDate ? data.expirationDate.toISOString().split("T")[0] : "",
        region: data.region,
      };
      setMessages((prev) => [newMsg, ...prev]);
      setView("list");
    },
    []
  );

  const handleEditSubmit = useCallback(
    (data: FormData) => {
      if (selectedMessageId == null) return;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === selectedMessageId
            ? {
                ...m,
                title: data.englishTitle,
                dateRange: `${formatDate(data.effectiveDate ? data.effectiveDate.toISOString().split("T")[0] : "")} - ${formatDate(data.expirationDate ? data.expirationDate.toISOString().split("T")[0] : "")}`,
                body: data.englishAnnouncement,
                englishTitle: data.englishTitle,
                englishAnnouncement: data.englishAnnouncement,
                frenchTitle: data.frenchTitle,
                frenchAnnouncement: data.frenchAnnouncement,
                effectiveDate: data.effectiveDate ? data.effectiveDate.toISOString().split("T")[0] : "",
                expirationDate: data.expirationDate ? data.expirationDate.toISOString().split("T")[0] : "",
                region: data.region,
              }
            : m
        )
      );
      setView("detail");
    },
    [selectedMessageId]
  );

  const selectedMessage = messages.find((m) => m.id === selectedMessageId) || null;

  // Build edit form initial data from selected message
  const editInitialData: FormData | null = selectedMessage
    ? {
        englishTitle: selectedMessage.englishTitle || selectedMessage.title || "",
        englishAnnouncement: selectedMessage.englishAnnouncement || selectedMessage.body || "",
        frenchTitle: selectedMessage.frenchTitle || "",
        frenchAnnouncement: selectedMessage.frenchAnnouncement || "",
        effectiveDate: selectedMessage.effectiveDate ? new Date(selectedMessage.effectiveDate) : null,
        expirationDate: selectedMessage.expirationDate ? new Date(selectedMessage.expirationDate) : null,
        region: selectedMessage.region || "",
      }
    : null;

  if (!isOpen) return null;

  const renderView = () => {
    switch (view) {
      case "create":
        return (
          <FormView
            key="create"
            mode="create"
            initialData={emptyFormData}
            onBack={handleBack}
            onSubmit={handleCreateSubmit}
          />
        );
      case "edit":
        return editInitialData ? (
          <FormView
            key={`edit-${selectedMessageId}`}
            mode="edit"
            initialData={editInitialData}
            onBack={handleBack}
            onSubmit={handleEditSubmit}
          />
        ) : null;
      case "detail":
        return selectedMessage ? (
          <DetailView
            message={selectedMessage}
            onBack={handleBack}
            onEdit={handleEdit}
            onDelete={() => {
              setMessages((prev) => prev.filter((m) => m.id !== selectedMessageId));
              setView("list");
            }}
          />
        ) : null;
      default:
        return (
          <ListView
            messages={messages}
            onClose={handleClose}
            onSelectMessage={handleSelectMessage}
            onCreateNew={handleCreateNew}
            markAllChecked={markAllChecked}
            onMarkAllChange={handleMarkAllChange}
          />
        );
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9998] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#000000]/80" />

      {/* Modal card */}
      <div className="relative bg-[#f5f5f5] rounded-[4px] w-[725px] min-h-[395px] overflow-hidden">
        {renderView()}
        {/* Border */}
        <div
          aria-hidden="true"
          className="absolute border-2 border-[#d12b5d] border-solid inset-[-2px] pointer-events-none rounded-[6px]"
        />
      </div>
    </div>,
    document.body
  );
}