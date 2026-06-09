import { useState, useCallback } from "react";
import { ColorBar } from "./components/ColorBar";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { HeroCarousel } from "./components/HeroCarousel";
import { BackgroundDecor } from "./components/BackgroundDecor";
import {
  PromotionalMessageOverlay,
  initialMessages,
} from "./components/PromotionalMessageOverlay";
import type { MessageData } from "./components/PromotionalMessageOverlay";
import { ImportantMessageOverlay } from "./components/ImportantMessageOverlay";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [promoOverlayOpen, setPromoOverlayOpen] = useState(false);
  const [importantMsgOpen, setImportantMsgOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);
  const [promoMessages, setPromoMessages] = useState<MessageData[]>(initialMessages);

  // Map promotional messages to carousel slides
  const carouselSlides = promoMessages.map((msg, idx) => ({
    id: idx + 1,
    title: msg.title,
    description: msg.description,
    image: msg.image,
    effectiveDate: "02/12/2025 - 03/12/2025",
  }));

  const handlePromoMessagesChange = useCallback((msgs: MessageData[]) => {
    setPromoMessages(msgs);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#E7F8FF] overflow-x-hidden">
      {/* Top color bar */}
      <ColorBar height="5px" />

      {/* Header / Nav */}
      <Header
        onMenuClick={() => setSidebarOpen((prev) => !prev)}
        onCarouselClick={() => setPromoOverlayOpen(true)}
        onImportantMessageClick={() => setImportantMsgOpen(true)}
        unreadCount={unreadCount}
      />

      {/* Sidebar menu */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area - centered carousel with promo */}
      <main className="relative z-10 flex items-center justify-center px-0 py-8 sm:py-12 min-h-[calc(100vh-60px)]">
        <HeroCarousel slides={carouselSlides} />
      </main>

      {/* Promotional Message Overlay */}
      <PromotionalMessageOverlay
        isOpen={promoOverlayOpen}
        onClose={() => setPromoOverlayOpen(false)}
        messages={promoMessages}
        onMessagesChange={handlePromoMessagesChange}
      />

      {/* Important Message Overlay */}
      <ImportantMessageOverlay
        isOpen={importantMsgOpen}
        onClose={() => setImportantMsgOpen(false)}
        onUnreadCountChange={setUnreadCount}
      />

      {/* Bottom color bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <ColorBar height="5px" />
      </div>
    </div>
  );
}