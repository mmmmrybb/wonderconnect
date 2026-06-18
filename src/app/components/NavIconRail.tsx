import { useState } from "react";
import {
  Layers,
  Megaphone,
  TrendingUp,
  Users,
  Bell,
  Tag,
  LifeBuoy,
  ArrowLeftRight,
  ChevronRight,
} from "lucide-react";
import { Post } from "../App";

const NAV_ITEMS: {
  label: string;
  icon: React.ReactNode;
  color: string;
  activeBg: string;
  activeText: string;
}[] = [
  { label: "All",                  icon: <Layers size={16} />,         color: "text-white/60",       activeBg: "bg-white/20",      activeText: "text-white" },
  { label: "Marketing Material",   icon: <TrendingUp size={16} />,     color: "text-violet-300/70",  activeBg: "bg-violet-500/30", activeText: "text-violet-200" },
  { label: "Buy & Sell",           icon: <ArrowLeftRight size={16} />, color: "text-indigo-300/70",  activeBg: "bg-indigo-500/30", activeText: "text-indigo-200" },
  { label: "Customers Updates",    icon: <Users size={16} />,          color: "text-teal-300/70",    activeBg: "bg-teal-500/30",   activeText: "text-teal-200" },
  { label: "General Updates",      icon: <Bell size={16} />,           color: "text-blue-300/70",    activeBg: "bg-blue-500/30",   activeText: "text-blue-200" },
  { label: "Promotions",           icon: <Megaphone size={16} />,      color: "text-amber-300/70",   activeBg: "bg-amber-500/30",  activeText: "text-amber-200" },
  { label: "Support",              icon: <LifeBuoy size={16} />,       color: "text-emerald-300/70", activeBg: "bg-emerald-500/30",activeText: "text-emerald-200" },
];

interface NavIconRailProps {
  posts: Post[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export function NavIconRail({ posts, activeCategory, onCategoryChange }: NavIconRailProps) {
  const [expanded, setExpanded] = useState(false);

  const getUnread = (cat: string) =>
    cat === "All"
      ? posts.filter((p) => !p.isRead).length
      : posts.filter((p) => !p.isRead && p.category === cat).length;

  return (
    <div
      className={`flex-none bg-[#0D1B3E] flex flex-col h-full border-r border-white/10 transition-all duration-200 ${
        expanded ? "w-44" : "w-12"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Expand hint */}
      <div className={`flex items-center justify-end px-2 pt-2 pb-1 transition-opacity ${expanded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <ChevronRight size={12} className="text-white/30" />
      </div>

      <div className="flex flex-col gap-0.5 px-1.5 pt-1 flex-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeCategory === item.label;
          const unread = getUnread(item.label);

          return (
            <button
              key={item.label}
              onClick={() => onCategoryChange(item.label)}
              title={!expanded ? item.label : undefined}
              className={`relative flex items-center gap-2.5 px-2 py-2.5 rounded-lg transition-all ${
                isActive
                  ? `${item.activeBg} ${item.activeText}`
                  : `${item.color} hover:bg-white/8 hover:text-white/90`
              }`}
            >
              {/* Icon */}
              <span className="flex-none">{item.icon}</span>

              {/* Label — only visible when expanded */}
              {expanded && (
                <span className="text-xs font-medium truncate flex-1 text-left whitespace-nowrap">
                  {item.label}
                </span>
              )}

              {/* Unread badge */}
              {unread > 0 && (
                expanded ? (
                  <span className={`flex-none text-[10px] font-bold rounded-full px-1.5 min-w-[18px] text-center leading-[18px] ${
                    isActive ? "bg-white/25 text-white" : "bg-red-500/80 text-white"
                  }`}>
                    {unread}
                  </span>
                ) : (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                    {unread > 9 ? "9+" : unread}
                  </span>
                )
              )}
            </button>
          );
        })}
      </div>

      {/* Section label at bottom */}
      {expanded && (
        <div className="px-3 py-2 border-t border-white/10">
          <p className="text-white/25 text-[10px] font-semibold uppercase tracking-widest">Communications</p>
        </div>
      )}
    </div>
  );
}
