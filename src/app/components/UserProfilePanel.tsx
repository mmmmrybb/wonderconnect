import { LayoutGrid, Columns, List, PanelLeft, ChevronRight } from "lucide-react";

export type NavStyle = "tabs" | "pills" | "rail" | "cards";

const NAV_OPTIONS: { id: NavStyle; label: string; icon: React.ReactNode; desc: string }[] = [
  {
    id: "tabs",
    label: "Tab Bar",
    icon: <List size={13} />,
    desc: "Underlined tabs",
  },
  {
    id: "pills",
    label: "Pill Chips",
    icon: <LayoutGrid size={13} />,
    desc: "Coloured pills",
  },
  {
    id: "rail",
    label: "Icon Rail",
    icon: <Columns size={13} />,
    desc: "Icon sidebar",
  },
  {
    id: "cards",
    label: "Category Cards",
    icon: <PanelLeft size={13} />,
    desc: "Card grid",
  },
];

interface UserProfilePanelProps {
  navStyle: NavStyle;
  onNavStyleChange: (s: NavStyle) => void;
}

export function UserProfilePanel({ navStyle, onNavStyleChange }: UserProfilePanelProps) {
  return (
    <div className="w-48 flex-none bg-[#0D1B3E] flex flex-col h-full">
      {/* User Profile */}
      <div className="flex flex-col items-center py-6 px-4 border-b border-white/10">
        <div className="w-14 h-14 rounded-full ring-2 ring-white/20 overflow-hidden mb-2.5">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face"
            alt="Jenny Smith"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-white text-sm font-semibold text-center leading-tight">Jenny Smith</p>
        <p className="text-blue-300 text-[11px] text-center mt-0.5 opacity-75 leading-tight">jenny.smith@</p>
        <p className="text-blue-300 text-[11px] text-center opacity-75 leading-tight">wonderbrand.com</p>
      </div>

      {/* Nav style picker */}
      <div className="px-3 pt-4 pb-3 flex-1">
        <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-2 px-1">
          Nav Style
        </p>
        <div className="space-y-1">
          {NAV_OPTIONS.map((opt) => {
            const isActive = navStyle === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onNavStyleChange(opt.id)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all group ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/50 hover:bg-white/8 hover:text-white/80"
                }`}
              >
                <span className={`flex-none ${isActive ? "text-yellow-400" : "text-white/40 group-hover:text-white/60"}`}>
                  {opt.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium leading-none">{opt.label}</p>
                  <p className={`text-[10px] mt-0.5 ${isActive ? "text-white/60" : "text-white/30"}`}>{opt.desc}</p>
                </div>
                {isActive && <ChevronRight size={11} className="text-yellow-400 flex-none" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10">
        <p className="text-white/20 text-[10px] text-center">WonderConnect v2.4</p>
      </div>
    </div>
  );
}
