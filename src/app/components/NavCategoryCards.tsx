import {
  Layers,
  Megaphone,
  TrendingUp,
  Users,
  Bell,
  Tag,
  LifeBuoy,
  ArrowLeftRight,
} from "lucide-react";
import { Post } from "../App";

const CAT_META: {
  label: string;
  icon: React.ReactNode;
  color: string;
  border: string;
  activeBg: string;
  activeText: string;
  iconBg: string;
}[] = [
  {
    label: "All",
    icon: <Layers size={14} />,
    color: "text-gray-600",
    border: "border-gray-200 hover:border-gray-400",
    activeBg: "bg-[#0D1B3E] border-[#0D1B3E]",
    activeText: "text-white",
    iconBg: "bg-gray-100",
  },
  {
    label: "Marketing Material",
    icon: <TrendingUp size={14} />,
    color: "text-amber-700",
    border: "border-gray-200 hover:border-amber-300",
    activeBg: "bg-amber-600 border-amber-600",
    activeText: "text-white",
    iconBg: "bg-amber-50",
  },
  {
    label: "Buy & Sell",
    icon: <ArrowLeftRight size={14} />,
    color: "text-indigo-700",
    border: "border-gray-200 hover:border-indigo-300",
    activeBg: "bg-indigo-600 border-indigo-600",
    activeText: "text-white",
    iconBg: "bg-indigo-50",
  },
  {
    label: "Customers Updates",
    icon: <Users size={14} />,
    color: "text-teal-700",
    border: "border-gray-200 hover:border-teal-300",
    activeBg: "bg-teal-700 border-teal-700",
    activeText: "text-white",
    iconBg: "bg-teal-50",
  },
  {
    label: "General Updates",
    icon: <Bell size={14} />,
    color: "text-blue-700",
    border: "border-gray-200 hover:border-blue-300",
    activeBg: "bg-blue-600 border-blue-600",
    activeText: "text-white",
    iconBg: "bg-blue-50",
  },
  {
    label: "Promotions",
    icon: <Megaphone size={14} />,
    color: "text-violet-700",
    border: "border-gray-200 hover:border-violet-300",
    activeBg: "bg-violet-600 border-violet-600",
    activeText: "text-white",
    iconBg: "bg-violet-50",
  },
  {
    label: "Support",
    icon: <LifeBuoy size={14} />,
    color: "text-emerald-700",
    border: "border-gray-200 hover:border-emerald-300",
    activeBg: "bg-emerald-700 border-emerald-700",
    activeText: "text-white",
    iconBg: "bg-emerald-50",
  },
];

interface NavCategoryCardsProps {
  posts: Post[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export function NavCategoryCards({ posts, activeCategory, onCategoryChange }: NavCategoryCardsProps) {
  const getUnread = (cat: string) =>
    cat === "All"
      ? posts.filter((p) => !p.isRead).length
      : posts.filter((p) => !p.isRead && p.category === cat).length;

  const getTotal = (cat: string) =>
    cat === "All"
      ? posts.length
      : posts.filter((p) => p.category === cat).length;

  return (
    <div className="flex-none bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-0.5">
        {CAT_META.map((meta) => {
          const isActive = activeCategory === meta.label;
          const unread = getUnread(meta.label);
          const total = getTotal(meta.label);

          return (
            <button
              key={meta.label}
              onClick={() => onCategoryChange(meta.label)}
              className={`flex-none flex flex-col items-start gap-1.5 px-3 py-2.5 rounded-xl border transition-all shadow-sm min-w-[96px] ${
                isActive
                  ? meta.activeBg
                  : `bg-white ${meta.border}`
              }`}
            >
              {/* Icon + unread badge row */}
              <div className="flex items-center justify-between w-full">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-none ${
                    isActive ? "bg-white/20" : meta.iconBg
                  }`}
                >
                  <span className={isActive ? "text-white" : meta.color}>{meta.icon}</span>
                </div>
                {unread > 0 && (
                  <span
                    className={`text-[10px] font-bold rounded-full px-1.5 min-w-[18px] text-center leading-[18px] ${
                      isActive ? "bg-white/30 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {unread}
                  </span>
                )}
              </div>

              {/* Label */}
              <div className="text-left">
                <p
                  className={`text-[10px] font-semibold leading-tight line-clamp-2 ${
                    isActive ? "text-white" : "text-gray-700"
                  }`}
                >
                  {meta.label}
                </p>
                <p
                  className={`text-[10px] mt-0.5 ${
                    isActive ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  {total} file{total !== 1 ? "s" : ""}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
