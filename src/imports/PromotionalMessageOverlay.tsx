import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import svgPaths from "./svg-sv38dq8a9a";
import svgPathsDetail from "./svg-ifdvnsn6qg";
import svgPathsCreate from "./svg-ts66x08ktd";
const imgRectangle = "https://images.unsplash.com/photo-1769138886135-93d1dd8ac06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwY29mZmVlJTIwcGFzdHJ5JTIwYmFrZXJ5fGVufDF8fHx8MTc3MzE1MzEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRectangle1 = "https://images.unsplash.com/photo-1603936405783-2d15c117c065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJhZ2VsJTIwYmFrZXJ5JTIwZGlzcGxheXxlbnwxfHx8fDE3NzMxNTMxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRectangle2 = "https://images.unsplash.com/photo-1765980161513-8dc16b396634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBsb2F2ZXMlMjBiYWtlcnl8ZW58MXx8fHwxNzczMTUzMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRectangle3 = "https://images.unsplash.com/photo-1759459981049-1a658da71c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjb3VudGVyJTIwcGFzdHJpZXMlMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzczMTUzMTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface PromotionalMessageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  messages?: MessageData[];
  onMessagesChange?: (messages: MessageData[]) => void;
}

function CloseSmall({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      className="flex items-center justify-center cursor-pointer relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
      data-name="close_small"
    >
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g id="close_small_overlay">
          <mask height="24" id="mask_close_overlay" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" width="24" />
          </mask>
          <g mask="url(#mask_close_overlay)">
            <path d={svgPaths.p1a580680} fill="#1C1B1F" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function MessageCard({
  image,
  title,
  description,
  isSelected,
  onClick,
}: {
  image: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${isSelected ? "bg-[#edf5ff]" : "bg-white"} h-[88px] relative rounded-[8px] shrink-0 w-full cursor-pointer`}
      onClick={onClick}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[8px] relative size-full">
          <div className="relative rounded-[8px] shrink-0 size-[50px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={image} />
          </div>
          <div className="capitalize content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px not-italic relative text-[#1c1b1f] text-ellipsis">
            <p className="font-['Poppins',sans-serif] text-[12px] leading-[normal] overflow-hidden relative shrink-0 w-full whitespace-nowrap" style={{ fontWeight: 600 }}>{title}</p>
            <p className="font-['Poppins',sans-serif] text-[12px] h-[54px] leading-[normal] overflow-hidden relative shrink-0 w-full whitespace-pre-wrap" style={{ fontWeight: 400 }}>
              {description}
            </p>
          </div>
        </div>
      </div>
      {isSelected && (
        <div aria-hidden="true" className="absolute border-[#0a8ef0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      )}
    </div>
  );
}

function AddIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add_overlay">
          <mask height="24" id="mask_add_overlay" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" width="24" />
          </mask>
          <g mask="url(#mask_add_overlay)">
            <path d={svgPaths.p2a6e0600} fill="#1D7AFC" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_delete_overlay" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_delete_overlay)">
          <path d={svgPathsDetail.p68dfd00} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <mask height="20" id="mask_calendar_overlay" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
          <rect fill="#D9D9D9" height="20" width="20" />
        </mask>
        <g mask="url(#mask_calendar_overlay)">
          <path d={svgPathsDetail.p30ce9e00} fill="#7A7A7A" />
        </g>
      </svg>
    </div>
  );
}

function ArrowDownIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_arrow_overlay" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_arrow_overlay)">
          <path d={svgPathsDetail.p33a42b80} fill="#7A7A7A" />
        </g>
      </svg>
    </div>
  );
}

function ExpandTextBox() {
  return (
    <div className="absolute right-[8px] bottom-[8px] size-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00004 8.00001">
        <path d={svgPathsDetail.pa9e6a80} fill="#1C1B1F" />
        <path d={svgPathsDetail.p255aa8c0} fill="#1C1B1F" />
        <path d={svgPathsDetail.p2af1a900} fill="#1C1B1F" />
      </svg>
    </div>
  );
}

function FormLabelWithMax({ label, maxChars }: { label: string; maxChars?: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" style={{ lineHeight: "normal" }}>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#1c1b1f] text-[12px]" style={{ fontWeight: 500 }}>
        <p>
          <span>{label}</span>
          <span className="text-[#e71616]">* </span>
        </p>
      </div>
      {maxChars && (
        <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#e71616] text-[11px]" style={{ fontWeight: 500, lineHeight: "normal" }}>
          <p>{maxChars}</p>
        </div>
      )}
    </div>
  );
}

function AddPhotoIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask_add_photo" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask_add_photo)">
          <path d={svgPathsCreate.pb8a1f80} fill="#1C1B1F" />
        </g>
      </svg>
    </div>
  );
}

function TextInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-[#fbf9f9] h-[32px] relative rounded-[4px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute capitalize font-['Poppins',sans-serif] left-[9px] top-[7.5px] w-[calc(100%-18px)] bg-transparent outline-none text-[#1c1b1f] text-[12px] text-ellipsis whitespace-nowrap overflow-hidden"
          style={{ fontWeight: 400, lineHeight: "normal" }}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextArea({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-[#fbf9f9] relative rounded-[4px] shrink-0 w-full border border-[#e8e8e8] border-solid min-h-[73px]">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="capitalize font-['Poppins',sans-serif] w-full min-h-[73px] bg-transparent outline-none text-[#1c1b1f] text-[12px] whitespace-pre-wrap overflow-hidden resize-y p-[9px] block"
        style={{ fontWeight: 400, lineHeight: "normal" }}
      />
    </div>
  );
}

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function CalendarOverlay({
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
      className="fixed z-[9999] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-[12px] w-[260px] font-['Poppins',sans-serif]"
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

function DateInput({ value, onChange }: { value: Date | null; onChange: (date: Date) => void }) {
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
    <div ref={inputRef} className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
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
        <CalendarOverlay
          selectedDate={value}
          onSelect={onChange}
          onClose={() => setIsOpen(false)}
          anchorRect={anchorRect}
        />
      )}
    </div>
  );
}

const REGION_OPTIONS = ["Western Canada", "Ontario", "Quebec", "Atlantic Canada"];

function DropdownInput({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
      <div
        className="flex flex-row items-center overflow-clip rounded-[inherit] size-full cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="content-stretch flex items-center justify-between px-[8px] py-[6px] relative size-full">
          {value && (
            <span
              className="font-['Poppins',sans-serif] text-[12px] text-[#1c1b1f] truncate"
              style={{ fontWeight: 400, lineHeight: "normal" }}
            >
              {value}
            </span>
          )}
          <div className="flex items-center justify-center relative shrink-0 size-[24px] ml-auto">
            <div className={`flex-none transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}>
              <ArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      {isOpen && (
        <div className="absolute left-0 right-0 top-[34px] z-50 bg-white rounded-[4px] border border-[#e8e8e8] border-solid shadow-sm overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt}
              className={`px-[10px] py-[7px] cursor-pointer font-['Poppins',sans-serif] text-[12px] transition-colors ${
                value === opt ? "bg-[#edf5ff] text-[#1d7afc]" : "text-[#1c1b1f] hover:bg-[#f5f5f5]"
              }`}
              style={{ fontWeight: value === opt ? 500 : 400, lineHeight: "normal" }}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface MessageData {
  image: string;
  title: string;
  description: string;
}

export type { MessageData };

const DRAG_TYPE = "PROMO_MESSAGE";

function DraggableMessageCard({
  index,
  image,
  title,
  description,
  isSelected,
  onClick,
  moveCard,
}: {
  index: number;
  image: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE,
    item: () => ({ index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, drop] = useDrop<
    { index: number },
    void,
    { handlerId: string | symbol | null }
  >({
    accept: DRAG_TYPE,
    collect(monitor) {
      return { handlerId: monitor.getHandlerId() };
    },
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity: isDragging ? 0.4 : 1 }}
      className="w-full shrink-0 transition-opacity"
    >
      <MessageCard
        image={image}
        title={title}
        description={description}
        isSelected={isSelected}
        onClick={onClick}
      />
    </div>
  );
}

function ChangesNotSavedDialog({
  onCancel,
  onContinue,
}: {
  onCancel: () => void;
  onContinue: () => void;
}) {
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#000000]/50" />
      <div className="relative bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[40px] py-[32px] rounded-[8px] w-[420px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" style={{ lineHeight: "normal" }}>
          <p className="capitalize font-['Poppins',sans-serif] relative shrink-0 text-[#e71616] text-[16px] w-full" style={{ fontWeight: 500 }}>Changes Not Saved</p>
          <p className="font-['Poppins',sans-serif] relative shrink-0 text-[14px] text-black w-full" style={{ fontWeight: 400 }}>Any unsaved changes will be deleted</p>
        </div>
        <div className="bg-white content-end cursor-pointer flex flex-wrap gap-[10px_24px] items-end overflow-x-clip overflow-y-auto relative shrink-0">
          <button
            className="bg-white content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 w-[100px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onCancel}
          >
            <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#828282] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
              <p>Cancel</p>
            </div>
          </button>
          <button
            className="content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onContinue}
          >
            <div aria-hidden="true" className="absolute border border-[#e71616] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#e71616] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
              <p>Continue Without Saving</p>
            </div>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function DeleteConfirmDialog({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#000000]/50" />
      <div className="relative bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[40px] py-[32px] rounded-[8px] w-[420px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" style={{ lineHeight: "normal" }}>
          <p className="capitalize font-['Poppins',sans-serif] relative shrink-0 text-[#e71616] text-[16px]" style={{ fontWeight: 500 }}>Are You Sure You Want To Delete?</p>
          <p className="font-['Poppins',sans-serif] relative shrink-0 text-[14px] text-black min-w-full w-min whitespace-pre-wrap" style={{ fontWeight: 400 }}>You can not undo this action</p>
        </div>
        <div className="bg-white content-end flex flex-wrap gap-y-[10px] items-end justify-between overflow-x-clip overflow-y-auto relative shrink-0 w-full">
          <button
            className="bg-white content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 w-[100px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onCancel}
          >
            <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#828282] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
              <p>Cancel</p>
            </div>
          </button>
          <button
            className="content-stretch flex h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onConfirm}
          >
            <div aria-hidden="true" className="absolute border border-[#e71616] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#e71616] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
              <p>Yes, Delete</p>
            </div>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function MessageDetailPanel({ message, onDirtyChange, onDelete, onSave }: { message: MessageData; onDirtyChange?: (dirty: boolean) => void; onDelete?: () => void; onSave?: (updated: MessageData) => void }) {
  const [englishTitle, setEnglishTitle] = useState(message.title);
  const [englishAnnouncement, setEnglishAnnouncement] = useState(message.description);
  const [frenchTitle, setFrenchTitle] = useState("");
  const [frenchAnnouncement, setFrenchAnnouncement] = useState("");
  const [effectiveDate, setEffectiveDate] = useState<Date | null>(null);
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);
  const [region, setRegion] = useState("");

  // Track dirty state — compare current values against initial values
  const initialRef = useRef({
    englishTitle: message.title,
    englishAnnouncement: message.description,
    frenchTitle: "",
    frenchAnnouncement: "",
    effectiveDate: null as Date | null,
    expirationDate: null as Date | null,
    region: "",
  });

  const isDirty =
    englishTitle !== initialRef.current.englishTitle ||
    englishAnnouncement !== initialRef.current.englishAnnouncement ||
    frenchTitle !== initialRef.current.frenchTitle ||
    frenchAnnouncement !== initialRef.current.frenchAnnouncement ||
    effectiveDate !== initialRef.current.effectiveDate ||
    expirationDate !== initialRef.current.expirationDate ||
    region !== initialRef.current.region;

  useEffect(() => {
    onDirtyChange?.(isDirty);
  }, [isDirty, onDirtyChange]);

  const isFormComplete =
    englishTitle.trim() &&
    englishAnnouncement.trim() &&
    frenchTitle.trim() &&
    frenchAnnouncement.trim() &&
    effectiveDate &&
    expirationDate &&
    region;

  const handleSave = () => {
    if (!isFormComplete) return;
    onSave?.({
      ...message,
      title: englishTitle.trim(),
      description: englishAnnouncement.trim(),
    });
    // Reset dirty tracking to current values
    initialRef.current = {
      englishTitle,
      englishAnnouncement,
      frenchTitle,
      frenchAnnouncement,
      effectiveDate,
      expirationDate,
      region,
    };
    onDirtyChange?.(false);
  };

  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[20px] pl-[12px] pr-[20px] pt-[12px] relative size-full">
        {/* Scrollable form content */}
        <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto scrollbar-none relative w-full" style={{ scrollbarWidth: "none" }}>
          {/* English Title */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="English Title" maxChars="Max 50 characters" />
            <TextInput value={englishTitle} onChange={(v) => setEnglishTitle(v.slice(0, 50))} />
          </div>

          {/* English Announcement */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="English Announcement" maxChars="Max 250 characters" />
            <TextArea value={englishAnnouncement} onChange={(v) => setEnglishAnnouncement(v.slice(0, 250))} />
          </div>

          {/* French Title */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="French Title" maxChars="Max 50 characters" />
            <TextInput value={frenchTitle} onChange={(v) => setFrenchTitle(v.slice(0, 50))} />
          </div>

          {/* French Announcement */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="French Announcement" maxChars="Max 250 characters" />
            <TextArea value={frenchAnnouncement} onChange={(v) => setFrenchAnnouncement(v.slice(0, 250))} />
          </div>

          {/* Image */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="Image" />
            <div className="aspect-[438/257] relative rounded-[4px] shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle3} />
              {/* Delete image button */}
              <div className="absolute bg-[rgba(41,41,41,0.7)] content-stretch flex items-center justify-center right-[8px] top-[8px] p-[4px] rounded-[4px] cursor-pointer hover:opacity-80 transition-opacity">
                <DeleteIcon />
              </div>
            </div>
          </div>

          {/* Effective Date & Expiration Date */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
              <FormLabelWithMax label="Effective Date" />
              <DateInput value={effectiveDate} onChange={setEffectiveDate} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
              <FormLabelWithMax label="Expiration Date" />
              <DateInput value={expirationDate} onChange={setExpirationDate} />
            </div>
          </div>

          {/* Region */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="Region" />
            <DropdownInput value={region} onChange={setRegion} options={REGION_OPTIONS} />
          </div>
        </div>

        {/* Bottom action buttons */}
        <div className="bg-white content-end flex flex-wrap gap-[10px_40px] items-end justify-end overflow-x-clip overflow-y-auto relative shrink-0 w-full">
          {/* Delete button */}
          <button className="bg-white content-stretch flex h-[36px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 w-[100px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onDelete}
          >
            <div aria-hidden="true" className="absolute border border-[#e71616] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#e71616] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
              <p>Delete</p>
            </div>
          </button>
          {/* Save button */}
          <button
            className={`${isFormComplete ? 'bg-[#1d7afc]' : 'bg-[#c3c3c3]'} content-stretch cursor-pointer flex h-[36px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 w-[100px] hover:opacity-80 transition-all duration-200`}
            onClick={handleSave}
          >
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
              <p>Save</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function CreateNewPanel({ onDirtyChange, onDelete }: { onDirtyChange?: (dirty: boolean) => void; onDelete?: () => void }) {
  const [englishTitle, setEnglishTitle] = useState("");
  const [englishAnnouncement, setEnglishAnnouncement] = useState("");
  const [frenchTitle, setFrenchTitle] = useState("");
  const [frenchAnnouncement, setFrenchAnnouncement] = useState("");
  const [effectiveDate, setEffectiveDate] = useState<Date | null>(null);
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);
  const [region, setRegion] = useState("");

  const isDirty =
    englishTitle !== "" ||
    englishAnnouncement !== "" ||
    frenchTitle !== "" ||
    frenchAnnouncement !== "" ||
    effectiveDate !== null ||
    expirationDate !== null ||
    region !== "";

  useEffect(() => {
    onDirtyChange?.(isDirty);
  }, [isDirty, onDirtyChange]);

  const isFormComplete =
    englishTitle.trim() &&
    englishAnnouncement.trim() &&
    frenchTitle.trim() &&
    frenchAnnouncement.trim() &&
    effectiveDate &&
    expirationDate &&
    region;

  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[20px] pl-[12px] pr-[20px] pt-[12px] relative size-full">
        {/* Scrollable form content */}
        <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto scrollbar-none relative w-full" style={{ scrollbarWidth: "none" }}>
          {/* Create New title */}
          <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
            <p>Create New</p>
          </div>

          {/* English Title */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="English Title" maxChars="Max 50 characters" />
            <TextInput value={englishTitle} onChange={(v) => setEnglishTitle(v.slice(0, 50))} />
          </div>

          {/* English Announcement */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="English Announcement" maxChars="Max 250 characters" />
            <TextArea value={englishAnnouncement} onChange={(v) => setEnglishAnnouncement(v.slice(0, 250))} />
          </div>

          {/* French Title */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="French Title" maxChars="Max 50 characters" />
            <TextInput value={frenchTitle} onChange={(v) => setFrenchTitle(v.slice(0, 50))} />
          </div>

          {/* French Announcement */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="French Announcement" maxChars="Max 250 characters" />
            <TextArea value={frenchAnnouncement} onChange={(v) => setFrenchAnnouncement(v.slice(0, 250))} />
          </div>

          {/* Image Upload */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="Image" />
            <div className="bg-white h-[66px] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#fafafa] transition-colors">
              <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-dashed inset-0 pointer-events-none rounded-[4px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
                  <AddPhotoIcon />
                  <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#828282] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
                    <p>
                      <span className="underline decoration-solid">Click to Upload</span>
                      <span> or Drag and Drop</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Effective Date & Expiration Date */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
              <FormLabelWithMax label="Effective Date" />
              <DateInput value={effectiveDate} onChange={setEffectiveDate} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
              <FormLabelWithMax label="Expiration Date" />
              <DateInput value={expirationDate} onChange={setExpirationDate} />
            </div>
          </div>

          {/* Region */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <FormLabelWithMax label="Region" />
            <DropdownInput value={region} onChange={setRegion} options={REGION_OPTIONS} />
          </div>
        </div>

        {/* Bottom action buttons */}
        <div className="bg-white content-end flex flex-wrap gap-[10px_40px] items-end justify-end overflow-x-clip overflow-y-auto relative shrink-0 w-full">
          {/* Delete button */}
          <button className="bg-white content-stretch flex h-[36px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 w-[100px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onDelete}
          >
            <div aria-hidden="true" className="absolute border border-[#e71616] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#e71616] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
              <p>Delete</p>
            </div>
          </button>
          {/* Save button */}
          <button
            className={`${isFormComplete ? 'bg-[#1d7afc]' : 'bg-[#c3c3c3]'} content-stretch cursor-pointer flex h-[36px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 w-[100px] hover:opacity-80 transition-all duration-200`}
          >
            <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
              <p>Save</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const initialMessages: MessageData[] = [
  {
    image: imgRectangle,
    title: "Morning coffee bundle",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utisi ut aliquip ex ea c",
  },
  {
    image: imgRectangle1,
    title: "New Promotions bagel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utisi ut aliquip ex ea c",
  },
  {
    image: imgRectangle2,
    title: "New price for ace bread and special deals",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utisi ut aliquip ex ea c",
  },
];

export { initialMessages };

export function PromotionalMessageOverlay({ isOpen, onClose, messages: externalMessages, onMessagesChange }: PromotionalMessageOverlayProps) {
  const [messages, setMessages] = useState<MessageData[]>(externalMessages || initialMessages);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [pendingAction, setPendingAction] = useState<{ type: 'message'; index: number } | { type: 'create' } | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Sync internal state when external prop changes
  useEffect(() => {
    if (externalMessages) {
      setMessages(externalMessages);
    }
  }, [externalMessages]);

  const handleDirtyChange = useCallback((dirty: boolean) => {
    setIsDirty(dirty);
  }, []);

  const applyAction = useCallback((action: { type: 'message'; index: number } | { type: 'create' }) => {
    if (action.type === 'message') {
      setSelectedIndex(action.index);
      setIsCreating(false);
    } else {
      setSelectedIndex(null);
      setIsCreating(true);
    }
    setIsDirty(false);
  }, []);

  const handleSelectMessage = useCallback((idx: number) => {
    if (selectedIndex === idx) return;
    if ((selectedIndex !== null || isCreating) && isDirty) {
      setPendingAction({ type: 'message', index: idx });
    } else {
      applyAction({ type: 'message', index: idx });
    }
  }, [selectedIndex, isCreating, isDirty, applyAction]);

  const handleCreateNew = useCallback(() => {
    if (isCreating) return;
    if ((selectedIndex !== null || isCreating) && isDirty) {
      setPendingAction({ type: 'create' });
    } else {
      applyAction({ type: 'create' });
    }
  }, [selectedIndex, isCreating, isDirty, applyAction]);

  const handleConfirmSwitch = useCallback(() => {
    if (pendingAction) {
      applyAction(pendingAction);
    }
    setPendingAction(null);
  }, [pendingAction, applyAction]);

  const handleCancelSwitch = useCallback(() => {
    setPendingAction(null);
  }, []);

  const handleDeleteRequest = useCallback(() => {
    setShowDeleteConfirm(true);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    setShowDeleteConfirm(false);
    if (selectedIndex !== null) {
      setMessages((prev) => prev.filter((_, i) => i !== selectedIndex));
      onMessagesChange?.(messages.filter((_, i) => i !== selectedIndex));
    }
    setSelectedIndex(null);
    setIsCreating(false);
    setIsDirty(false);
  }, [selectedIndex, messages, onMessagesChange]);

  const handleDeleteCancel = useCallback(() => {
    setShowDeleteConfirm(false);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-[#000000]/80" />

      {/* Modal content */}
      <DndProvider backend={HTML5Backend}>
      <div
        className="relative bg-white rounded-[4px] w-[90vw] max-w-[900px] h-[80vh] max-h-[600px] flex flex-col gap-[20px] pt-[20px] overflow-clip"
      >
        {/* Header - full width, hug height, only left/right padding of 20 */}
        <div className="flex items-center justify-between px-[20px] shrink-0 w-full">
          <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#1c1b1f] text-[16px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
            <p>Promotional Message</p>
          </div>
          <CloseSmall onClose={onClose} />
        </div>

        {/* Body */}
        <div className="content-stretch flex flex-[1_0_0] items-start min-h-0 relative w-full">
          <div aria-hidden="true" className="absolute border-[#e8e8e8] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />

          {/* Left panel - message list */}
          <div className="bg-[#fbf9f9] content-stretch flex flex-col h-full items-center justify-between pl-[20px] pr-[12px] py-[12px] relative shrink-0 w-[320px]">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full overflow-y-auto">
              {messages.map((msg, idx) => (
                <DraggableMessageCard
                  key={idx}
                  index={idx}
                  image={msg.image}
                  title={msg.title}
                  description={msg.description}
                  isSelected={selectedIndex === idx}
                  onClick={() => handleSelectMessage(idx)}
                  moveCard={(dragIndex, hoverIndex) => {
                    const newMessages = [...messages];
                    const [draggedMessage] = newMessages.splice(dragIndex, 1);
                    newMessages.splice(hoverIndex, 0, draggedMessage);
                    setMessages(newMessages);
                    onMessagesChange?.(newMessages);
                    // Update selectedIndex to follow the selected item
                    if (selectedIndex === dragIndex) {
                      setSelectedIndex(hoverIndex);
                    } else if (selectedIndex !== null) {
                      if (dragIndex < selectedIndex && hoverIndex >= selectedIndex) {
                        setSelectedIndex(selectedIndex - 1);
                      } else if (dragIndex > selectedIndex && hoverIndex <= selectedIndex) {
                        setSelectedIndex(selectedIndex + 1);
                      }
                    }
                  }}
                />
              ))}
            </div>
            <button
              className="content-stretch flex gap-[8px] h-[36px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity mt-[12px]"
              onClick={handleCreateNew}
            >
              <AddIcon />
              <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#1d7afc] text-[14px] text-center whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
                <p>Create New</p>
              </div>
            </button>
          </div>

          {/* Right panel - create new, detail, or placeholder */}
          {isCreating ? (
            <CreateNewPanel key="create" onDirtyChange={handleDirtyChange} onDelete={handleDeleteRequest} />
          ) : selectedIndex !== null ? (
            <MessageDetailPanel key={selectedIndex} message={messages[selectedIndex]} onDirtyChange={handleDirtyChange} onDelete={handleDeleteRequest} onSave={(updated) => {
              const newMessages = messages.map((msg, idx) => idx === selectedIndex ? updated : msg);
              setMessages(newMessages);
              onMessagesChange?.(newMessages);
            }} />
          ) : (
            <div className="flex-1 flex items-center justify-center min-h-0 h-full">
              <p className="font-['Poppins',sans-serif] not-italic relative text-[#1d7afc] text-[16px] text-center whitespace-pre-wrap" style={{ fontWeight: 500, lineHeight: "normal" }}>
                Select a message or Create New
              </p>
            </div>
          )}
        </div>
      </div>
      </DndProvider>

      {/* Changes Not Saved confirmation dialog */}
      {pendingAction !== null && (
        <ChangesNotSavedDialog
          onCancel={handleCancelSwitch}
          onContinue={handleConfirmSwitch}
        />
      )}

      {/* Delete confirmation dialog */}
      {showDeleteConfirm && (
        <DeleteConfirmDialog
          onCancel={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}