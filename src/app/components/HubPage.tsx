import { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { ColorBar } from "../../imports/ColorBar";
import { Header } from "../../imports/Header";
import { BackgroundDecor } from "../../imports/BackgroundDecor";
import { HeroCarousel } from "../../imports/HeroCarousel";
import { Sidebar } from "../../imports/Sidebar";
import {
  PromotionalMessageOverlay,
  initialMessages,
} from "../../imports/PromotionalMessageOverlay";
import type { MessageData } from "../../imports/PromotionalMessageOverlay";
import { ImportantMessageOverlay } from "../../imports/ImportantMessageOverlay";

export function HubPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);
  const [importantOpen, setImportantOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);
  const [promoMessages, setPromoMessages] =
    useState<MessageData[]>(initialMessages);

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

  const handleNavigate = useCallback(
    (appName: string) => {
      if (appName === "WonderConnect") {
        navigate("/");
      } else if (appName === "Communications") {
        navigate("/communications");
      }
      // other app navigations can be added here
    },
    [navigate]
  );

  return (
    <div className="relative min-h-screen bg-[#E7F8FF] overflow-x-hidden">
      {/* Background decoration */}
      <BackgroundDecor />

      {/* Top color bar */}
      <ColorBar height="5px" />

      {/* Header / Nav */}
      <div className="relative z-30">
        <Header
          onMenuClick={() => setSidebarOpen((v) => !v)}
          onCarouselClick={() => setPromoOpen(true)}
          onImportantMessageClick={() => setImportantOpen(true)}
          unreadCount={unreadCount}
        />

        {/* Sidebar dropdown */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Main content area - centered carousel */}
      <main className="relative z-10 flex items-center justify-center px-0 py-8 sm:py-12 min-h-[calc(100vh-60px)]">
        <HeroCarousel slides={carouselSlides} />
      </main>

      {/* Promotional Message Overlay */}
      <PromotionalMessageOverlay
        isOpen={promoOpen}
        onClose={() => setPromoOpen(false)}
        messages={promoMessages}
        onMessagesChange={handlePromoMessagesChange}
      />

      {/* Important Message Overlay */}
      <ImportantMessageOverlay
        isOpen={importantOpen}
        onClose={() => setImportantOpen(false)}
        onUnreadCountChange={setUnreadCount}
      />

      {/* Bottom color bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <ColorBar height="5px" />
      </div>
    </div>
  );
}