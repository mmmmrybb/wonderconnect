import { useState } from "react";
import { NotificationBanner } from "./NotificationBanner";
import pfpImg from "../../assets/pfp.png";
import menuCloseImg from "../../assets/menu-close.svg";
import menuOpenImg from "../../assets/menu-open.svg";
import wbLogoImg from "../../assets/wb_logo.svg";

function ProfileAvatar() {
  return (
    <img
      src={pfpImg}
      alt="Profile"
      className="w-[28px] h-[28px] flex-none rounded-full object-cover"
      style={{ boxShadow: "0 0 0 1.5px rgba(255,255,255,0.3)" }}
    />
  );
}

interface TopBarProps {
  menuOpen?: boolean;
  onToggleNav?: () => void;
}

export function TopBar({ menuOpen = false, onToggleNav }: TopBarProps) {
  const [lang, setLang] = useState<"EN" | "FR">("EN");

  return (
    <div className="flex-none z-50 relative">
      <div
        className="relative flex"
        style={{
          background: "#133356",
          height: "44px",
        }}
      >
        {/* Left: hamburger + logo — fixed 240px to match sidebar width */}
        <div
          className="flex items-center flex-none relative transition-colors"
          style={{ width: 240, gap: "20px", paddingLeft: 24, paddingRight: 16, zIndex: 2 }}
        >
          <button
            onClick={() => onToggleNav?.()}
            className="w-[28px] h-[28px] flex-none flex items-center justify-center rounded-[6px] transition-colors hover:bg-white/10"
            title={menuOpen ? "Close menu" : "Open menu"}
          >
            <img src={menuOpen ? menuOpenImg : menuCloseImg} alt="Menu" style={{ width: 28, height: 28 }} />
          </button>
          <img src={wbLogoImg} alt="WonderConnect" style={{ height: 22, width: "auto" }} />
        </div>

        {/* Center: scrolling announcement marquee */}
        <NotificationBanner inline />

        {/* Right: language + profile */}
        <div className="flex items-center flex-none" style={{ gap: "20px", paddingLeft: 16, paddingRight: 24 }}>
          <div className="flex items-center gap-1.5 leading-none select-none" style={{ color: "#FFFFFF", fontSize: 13 }}>
            <button
              onClick={() => setLang("EN")}
              className={`cursor-pointer ${lang === "EN" ? "font-semibold underline" : "font-normal opacity-70 hover:opacity-100"}`}
              style={{ fontSize: 13 }}
            >EN</button>
            <span className="opacity-40" style={{ fontSize: 13 }}>|</span>
            <button
              onClick={() => setLang("FR")}
              className={`cursor-pointer ${lang === "FR" ? "font-semibold underline" : "font-normal opacity-70 hover:opacity-100"}`}
              style={{ fontSize: 13 }}
            >FR</button>
          </div>
          <ProfileAvatar />
        </div>

        {/* Dim overlay when menu is open */}
        {menuOpen && (
          <div
            className="absolute top-0 bottom-0 right-0 bg-black/30"
            style={{ left: "240px", zIndex: 1, animation: "sbFade 160ms ease-out" }}
            onClick={() => onToggleNav?.()}
          />
        )}
      </div>
    </div>
  );
}
