import { Post } from "../App";

const ALL_CATS = [
  "All",
  "Marketing Material",
  "Buy & Sell",
  "Customers Updates",
  "General Updates",
  "Promotions",
  "Support",
];

const CAT_COLORS: Record<string, { active: string; inactive: string; dot: string }> = {
  All:                   { active: "bg-[#0D1B3E] text-white border-[#0D1B3E]",       inactive: "bg-white text-gray-600 border-gray-200 hover:border-gray-400",    dot: "bg-[#0D1B3E]" },
  "Marketing Material":  { active: "bg-violet-600 text-white border-violet-600",      inactive: "bg-white text-gray-600 border-gray-200 hover:border-violet-300",  dot: "bg-violet-500" },
  "Buy & Sell":          { active: "bg-indigo-600 text-white border-indigo-600",      inactive: "bg-white text-gray-600 border-gray-200 hover:border-indigo-300",  dot: "bg-indigo-500" },
  "Customers Updates":   { active: "bg-teal-700 text-white border-teal-700",          inactive: "bg-white text-gray-600 border-gray-200 hover:border-teal-300",    dot: "bg-teal-600" },
  "General Updates":     { active: "bg-blue-600 text-white border-blue-600",          inactive: "bg-white text-gray-600 border-gray-200 hover:border-blue-300",    dot: "bg-blue-500" },
  Promotions:            { active: "bg-amber-600 text-white border-amber-600",        inactive: "bg-white text-gray-600 border-gray-200 hover:border-amber-300",   dot: "bg-amber-500" },
  Support:               { active: "bg-emerald-700 text-white border-emerald-700",    inactive: "bg-white text-gray-600 border-gray-200 hover:border-emerald-300", dot: "bg-emerald-600" },
};

interface NavPillChipsProps {
  posts: Post[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export function NavPillChips({ posts, activeCategory, onCategoryChange }: NavPillChipsProps) {
  const getUnread = (cat: string) =>
    cat === "All"
      ? posts.filter((p) => !p.isRead).length
      : posts.filter((p) => !p.isRead && p.category === cat).length;

  return (
    <div className="flex-none bg-gray-50 border-b border-gray-200 px-4 py-2.5">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
        {ALL_CATS.map((cat) => {
          const unread = getUnread(cat);
          const isActive = activeCategory === cat;
          const colors = CAT_COLORS[cat];

          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium whitespace-nowrap flex-none transition-all shadow-sm ${
                isActive ? colors.active : colors.inactive
              }`}
            >
              {/* Colour dot on inactive */}
              {!isActive && (
                <span className={`w-2 h-2 rounded-full flex-none ${colors.dot}`} />
              )}
              {cat}
              {unread > 0 && (
                <span
                  className={`text-[10px] font-bold rounded-full px-1.5 min-w-[18px] text-center leading-[18px] ${
                    isActive ? "bg-white/25 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {unread}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
