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

interface NavHorizontalTabsProps {
  posts: Post[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export function NavHorizontalTabs({ posts, activeCategory, onCategoryChange }: NavHorizontalTabsProps) {
  const getUnread = (cat: string) =>
    cat === "All"
      ? posts.filter((p) => !p.isRead).length
      : posts.filter((p) => !p.isRead && p.category === cat).length;

  return (
    <div className="flex-none border-b border-gray-200 bg-white overflow-x-auto overflow-y-hidden scrollbar-none p-[0px]">
      <div className="flex items-end gap-0 min-w-max">
        {ALL_CATS.map((cat) => {
          const unread = getUnread(cat);
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`relative flex items-center gap-1.5 px-4 py-3 whitespace-nowrap transition-all border-b-2 -mb-px ${
                isActive
                  ? "bg-[#EBF4FF] border-b-2 font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300 font-normal"
              }`}
              style={{
                fontSize: "12px",
                ...(isActive ? { borderColor: "#1D7AFC", color: "#1D7AFC" } : {}),
              }}
            >
              {cat}
              {unread > 0 && (
                <span className="text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none bg-red-100 text-red-700">
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