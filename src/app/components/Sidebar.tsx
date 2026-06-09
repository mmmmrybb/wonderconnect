import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Post } from "../App";

const NAV_ITEMS = [
  "All",
  "Features & Promotions",
  "Marketing",
  "New Product Listings",
  "Policies & Documents",
  "Support",
  "Product Availability",
  "Buy & Sell",
];

interface SidebarProps {
  posts: Post[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Sidebar({ posts, activeCategory, onCategoryChange }: SidebarProps) {
  const [commExpanded, setCommExpanded] = useState(true);

  const totalUnread = posts.filter((p) => !p.isRead).length;

  const getUnreadCount = (category: string) => {
    if (category === "All") return totalUnread;
    return posts.filter((p) => !p.isRead && p.category === category).length;
  };

  return (
    <div className="w-56 flex-none bg-[#0D1B3E] flex flex-col h-full overflow-y-auto">
      {/* User Profile */}
      <div className="flex flex-col items-center py-6 px-4 border-b border-white/10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center mb-2.5 ring-2 ring-white/20 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face"
            alt="Jenny Smith"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-white text-sm font-semibold text-center leading-tight">Jenny Smith</p>
        <p className="text-blue-300 text-xs text-center mt-0.5 opacity-80">jenny.smith@wonderbrand.com</p>
      </div>

      {/* Communications Section */}
      <div className="px-3 pt-4 pb-2 flex-1">
        <button
          className="w-full flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white/5 transition-colors mb-1"
          onClick={() => setCommExpanded((v) => !v)}
        >
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-semibold">Communications</span>
            {totalUnread > 0 && (
              <span className="bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none">
                {totalUnread}
              </span>
            )}
          </div>
          {commExpanded ? (
            <ChevronUp size={14} className="text-white/60" />
          ) : (
            <ChevronDown size={14} className="text-white/60" />
          )}
        </button>

        {commExpanded && (
          <div className="space-y-0.5 ml-1">
            {NAV_ITEMS.map((item) => {
              const unread = getUnreadCount(item);
              const isActive = activeCategory === item;
              return (
                <button
                  key={item}
                  onClick={() => onCategoryChange(item)}
                  className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left transition-all text-sm ${
                    isActive
                      ? "bg-white/15 text-white font-semibold"
                      : "text-blue-100/80 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <span className="truncate">{item}</span>
                  {unread > 0 && (
                    <span
                      className={`ml-1 flex-none text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none ${
                        isActive ? "bg-white/30 text-white" : "bg-red-500/80 text-white"
                      }`}
                    >
                      {unread}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10">
        <p className="text-white/30 text-xs text-center">WonderConnect v2.4</p>
      </div>
    </div>
  );
}
