import { Outlet, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { TopBar } from "./TopBar";
import { AppNavSidebar } from "./AppNavSidebar";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHub = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (appName: string) => {
    if (appName === "Communications") navigate("/communications");
    else if (appName === "WonderConnect") navigate("/");
  };

  return (
    <div className={isHub ? "h-screen flex flex-col" : "h-screen flex flex-col overflow-hidden"}>
      <TopBar menuOpen={menuOpen} onToggleNav={() => setMenuOpen((v) => !v)} />
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