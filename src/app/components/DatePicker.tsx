import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDisplay(dateStr: string) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${m}/${d}/${y}`;
}

function toDateStr(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function parseDateStr(dateStr: string) {
  if (!dateStr) return null;
  const [y, m, d] = dateStr.split("-").map(Number);
  return { year: y, month: m - 1, day: d };
}

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
}

export function DatePicker({ value, onChange, placeholder = "Select date", hasError = false }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const parsed = parseDateStr(value);
  const today = new Date();
  const [viewYear, setViewYear] = useState(parsed?.year ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(parsed?.month ?? today.getMonth());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && parsed) {
      setViewYear(parsed.year);
      setViewMonth(parsed.month);
    }
  }, [open]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const selectDay = (day: number) => {
    onChange(toDateStr(viewYear, viewMonth, day));
    setOpen(false);
  };

  const isSelected = (day: number) =>
    parsed?.year === viewYear && parsed?.month === viewMonth && parsed?.day === day;

  const isToday = (day: number) =>
    today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === day;

  // Build grid cells
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full rounded-[4px] border ${hasError ? "border-red-400" : "border-gray-300"} px-3 py-2 text-[13px] font-['Poppins'] text-gray-800 focus:outline-none focus:border-gray-400 transition-colors flex items-center justify-between gap-2 cursor-pointer text-left`}
        style={{ background: "#F1F4F8" }}
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value ? formatDisplay(value) : placeholder}
        </span>
        <Calendar size={14} className="text-gray-400 shrink-0" />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 z-[60] bg-white rounded-[4px] border border-gray-200 shadow-lg p-3 w-[260px]">
          {/* Month/Year header */}
          <div className="flex items-center justify-between mb-2">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1 hover:bg-gray-100 rounded-[4px] cursor-pointer transition-colors"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
            <span className="font-['Poppins'] font-medium text-[13px] text-gray-800">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1 hover:bg-gray-100 rounded-[4px] cursor-pointer transition-colors"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAYS.map((d) => (
              <div key={d} className="text-center font-['Poppins'] text-[11px] text-gray-400 py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7">
            {cells.map((day, i) => (
              <div key={i} className="flex items-center justify-center">
                {day !== null ? (
                  <button
                    type="button"
                    onClick={() => selectDay(day)}
                    className={`size-[30px] rounded-full flex items-center justify-center text-[12px] font-['Poppins'] cursor-pointer transition-colors
                      ${isSelected(day)
                        ? "bg-[#030213] text-white"
                        : isToday(day)
                          ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {day}
                  </button>
                ) : (
                  <div className="size-[30px]" />
                )}
              </div>
            ))}
          </div>

          {/* Today shortcut */}
          <div className="mt-2 pt-2 border-t border-gray-100 flex justify-center">
            <button
              type="button"
              onClick={() => {
                onChange(toDateStr(today.getFullYear(), today.getMonth(), today.getDate()));
                setOpen(false);
              }}
              className="font-['Poppins'] text-[11px] text-[#1d7afc] hover:underline cursor-pointer"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
