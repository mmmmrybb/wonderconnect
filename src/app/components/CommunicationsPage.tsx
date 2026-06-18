import { useState } from "react";
import { useCommsController } from "./useCommsController";
import { LayoutThree } from "./LayoutThree";
import { CommsDialogs } from "./commsShared";

export interface Post {
  id: string;
  fileName: string;
  category: string;
  postDate: string;
  expiryDate: string;
  isRead: boolean;
  isUrgent: boolean;
  isConfidential: boolean;
}

export const CATEGORIES = [
  "Marketing Material",
  "Buy & Sell",
  "Customers Updates",
  "General Updates",
  "Promotions",
  "Support",
] as const;

const INITIAL_POSTS: Post[] = [
  // Today · 2026-03-03
  { id: "25", fileName: "URGENT: Recall Notice – Gadoua Bread Lot #GB-2291", category: "Customers Updates", postDate: "2026-03-03", expiryDate: "2026-03-17", isRead: false, isUrgent: true, isConfidential: false },
  { id: "26", fileName: "Wonder Weekly Flyer – WK 10 Bakery Feature", category: "Marketing Material", postDate: "2026-03-03", expiryDate: "2026-04-15", isRead: false, isUrgent: false, isConfidential: false },
  { id: "27", fileName: "Confidential: Q2 Trade Spend Allocation – DC East", category: "General Updates", postDate: "2026-03-03", expiryDate: "2026-09-30", isRead: false, isUrgent: false, isConfidential: true },
  // Yesterday · 2026-03-02
  { id: "28", fileName: "D'Italiano New SKU – Brizzolio Buns Listing", category: "General Updates", postDate: "2026-03-02", expiryDate: "2026-08-01", isRead: false, isUrgent: false, isConfidential: false },
  { id: "29", fileName: "Costco Feature – Casa Mendosa Tortilla Bundle", category: "Promotions", postDate: "2026-03-02", expiryDate: "2026-04-30", isRead: true, isUrgent: false, isConfidential: false },
  // Earlier this week · 2026-03-01
  { id: "30", fileName: "Support Bulletin – POS Outage Resolution Steps", category: "Support", postDate: "2026-03-01", expiryDate: "2026-05-01", isRead: false, isUrgent: false, isConfidential: false },
  { id: "31", fileName: "Dempster's Spring Promo – Buy & Sell Terms", category: "Buy & Sell", postDate: "2026-03-01", expiryDate: "2026-06-15", isRead: true, isUrgent: false, isConfidential: true },
  // Older
  { id: "1", fileName: "Associated Grocer – WK 42", category: "Marketing Material", postDate: "2026-02-20", expiryDate: "2026-03-10", isRead: false, isUrgent: true, isConfidential: false },
  { id: "2", fileName: "Associated Grocer – WK 41", category: "Marketing Material", postDate: "2026-02-13", expiryDate: "2026-04-30", isRead: true, isUrgent: false, isConfidential: true },
  { id: "3", fileName: "Quality Foods – OCT 3–OCT 9 FEATURE", category: "Marketing Material", postDate: "2026-02-05", expiryDate: "2025-10-09", isRead: false, isUrgent: false, isConfidential: false },
  { id: "4", fileName: "WALMART: Nouveaux produits Great Value – 23", category: "Promotions", postDate: "2026-02-20", expiryDate: "2026-03-25", isRead: false, isUrgent: true, isConfidential: true },
  { id: "5", fileName: "WALMART: Nouveaux produits Great Value – 23 septembre", category: "General Updates", postDate: "2026-02-20", expiryDate: "2026-06-30", isRead: true, isUrgent: false, isConfidential: false },
  { id: "6", fileName: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam euismod nisi vel consequat cursus, nunc sapien feugiat lorem", category: "General Updates", postDate: "2026-02-18", expiryDate: "2025-12-31", isRead: true, isUrgent: false, isConfidential: true },
  { id: "7", fileName: "Q1 2026 Promotional Campaign – All Banners", category: "Promotions", postDate: "2026-01-15", expiryDate: "2026-03-31", isRead: false, isUrgent: true, isConfidential: false },
  { id: "8", fileName: "Sobeys Weekly Flyer – WK 38", category: "Marketing Material", postDate: "2026-01-10", expiryDate: "2026-05-10", isRead: true, isUrgent: false, isConfidential: false },
  { id: "9", fileName: "New Product Launch – Artisan Bread Sourdough Line", category: "General Updates", postDate: "2026-01-05", expiryDate: "2026-12-31", isRead: true, isUrgent: false, isConfidential: false },
  { id: "10", fileName: "Store Policy Update – Returns & Exchanges 2026", category: "General Updates", postDate: "2026-01-01", expiryDate: "2027-01-01", isRead: false, isUrgent: false, isConfidential: true },
  { id: "11", fileName: "Support Guide – POS Integration Manual v3.2", category: "Support", postDate: "2025-12-20", expiryDate: "2026-12-20", isRead: true, isUrgent: false, isConfidential: false },
  { id: "12", fileName: "Product Availability – Seasonal Items Q1 2026", category: "Customers Updates", postDate: "2025-12-15", expiryDate: "2026-03-28", isRead: true, isUrgent: false, isConfidential: false },
  { id: "13", fileName: "Buy & Sell Guidelines – Updated January 2026", category: "Buy & Sell", postDate: "2025-12-10", expiryDate: "2026-12-10", isRead: false, isUrgent: false, isConfidential: true },
  { id: "14", fileName: "IGA Weekly Flyer – WK 40", category: "Marketing Material", postDate: "2025-11-18", expiryDate: "2025-12-31", isRead: true, isUrgent: false, isConfidential: false },
  { id: "15", fileName: "Costco Feature – Great Value Bundle Pack Q4", category: "Promotions", postDate: "2025-11-12", expiryDate: "2026-02-28", isRead: true, isUrgent: false, isConfidential: false },
  { id: "16", fileName: "Employee Handbook Update – Section 4: Communications", category: "General Updates", postDate: "2025-10-20", expiryDate: "2026-10-20", isRead: false, isUrgent: false, isConfidential: true },
  { id: "17", fileName: "Loblaws Weekly Ad – WK 45 Feature Promotion", category: "Marketing Material", postDate: "2025-10-15", expiryDate: "2025-11-15", isRead: true, isUrgent: false, isConfidential: false },
  { id: "18", fileName: "New Supplier Onboarding & Compliance Document 2026", category: "Buy & Sell", postDate: "2025-09-28", expiryDate: "2026-09-28", isRead: true, isUrgent: false, isConfidential: false },
  { id: "19", fileName: "Seasonal Display Guidelines – Spring 2026 Collection", category: "Customers Updates", postDate: "2025-09-15", expiryDate: "2026-06-01", isRead: true, isUrgent: false, isConfidential: false },
  { id: "20", fileName: "Customer Service Protocol – Escalation Guide v2", category: "Support", postDate: "2025-09-01", expiryDate: "2026-09-01", isRead: true, isUrgent: false, isConfidential: false },
  { id: "21", fileName: "Metro Weekly – WK 35 Bakery Feature", category: "Marketing Material", postDate: "2025-08-25", expiryDate: "2025-09-30", isRead: true, isUrgent: false, isConfidential: false },
  { id: "22", fileName: "Spring 2026 New SKU Registration Form", category: "General Updates", postDate: "2025-08-10", expiryDate: "2026-04-01", isRead: false, isUrgent: false, isConfidential: false },
  { id: "23", fileName: "National Trade Spend Policy – Revised", category: "General Updates", postDate: "2025-07-20", expiryDate: "2026-07-20", isRead: true, isUrgent: false, isConfidential: true },
  { id: "24", fileName: "Vendor Agreement Renewal – Q3 2026", category: "Buy & Sell", postDate: "2025-07-05", expiryDate: "2026-07-05", isRead: true, isUrgent: false, isConfidential: false },
];

export function CommunicationsPage() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const ctl = useCommsController({ posts, setPosts, activeCategory, selectedPost, onSelectPost: setSelectedPost });

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <LayoutThree ctl={ctl} posts={posts} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <CommsDialogs ctl={ctl} />
    </div>
  );
}
