import { Outlet, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { TopBar } from "./TopBar";
import { AppNavSidebar } from "./AppNavSidebar";
import { NotificationBanner } from "./NotificationBanner";

const BANNER_ROUTES = ["/communications", "/statements"];

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHub = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (appName: string) => {
    if (appName === "Communications") navigate("/communications");
    else if (appName === "WonderConnect") navigate("/");
  };

  const showBanner = BANNER_ROUTES.some((r) => location.pathname.startsWith(r));

  return (
    <div className={isHub ? "h-screen flex flex-col" : "h-screen flex flex-col overflow-hidden"}>
      <TopBar
        menuOpen={menuOpen}
        onToggleNav={() => setMenuOpen((v) => !v)}
        centerContent={showBanner ? <NotificationBanner inline /> : undefined}
      />
      <AppNavSidebar
        open={menuOpen}
        currentApp={location.pathname.startsWith("/communications") ? "Communications" : "WonderConnect"}
        onNavigate={handleNavigate}
        onClose={() => setMenuOpen(false)}
      />
      <Outlet />
    </div>
  );
}