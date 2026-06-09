import imgWonderconnect1 from "figma:asset/626a9f8383df3b2003d799798e5cb065de374bd9.png";
import imgProfile from "figma:asset/d0461a66ef06fca642f270708e1ad8f0e55bc126.png";
import svgPaths from "./svg-f8rftpwqwc";

import { useState } from "react";

interface HeaderProps {
  onMenuClick: () => void;
  onCarouselClick: () => void;
  onImportantMessageClick: () => void;
  unreadCount: number;
}

export function Header({ onMenuClick, onCarouselClick, onImportantMessageClick, unreadCount }: HeaderProps) {
  const [lang, setLang] = useState<"EN" | "FR">("EN");

  return (
    <header className="relative z-30 bg-white/75 backdrop-blur-sm px-6 py-[5px] flex items-center justify-between">
      {/* Left - Hamburger + Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="relative shrink-0 size-[30px] hover:opacity-70 transition-opacity cursor-pointer"
        >
          <svg className="block size-full" fill="none" viewBox="0 0 30 30">
            <mask height="30" id="mask_dehaze" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
              <rect fill="#D9D9D9" height="30" width="30" />
            </mask>
            <g mask="url(#mask_dehaze)">
              <path d={svgPaths.p4c77400} fill="#1C1B1F" />
            </g>
          </svg>
        </button>
        <img
          src={imgWonderconnect1}
          alt="WonderConnect"
          className="h-[30px] w-[191px] object-cover"
        />
      </div>

      {/* Right - Icons + Lang + Profile */}
      <div className="flex items-center gap-5">
        {/* Carousel icon */}
        <button onClick={onCarouselClick} className="relative shrink-0 size-[30px] hover:opacity-70 transition-opacity cursor-pointer">
          <svg className="block size-full" fill="none" viewBox="0 0 30 30">
            <mask height="30" id="mask_carousel" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
              <rect fill="#D9D9D9" height="30" width="30" />
            </mask>
            <g mask="url(#mask_carousel)">
              <path d={svgPaths.p3f9cf600} fill="#133356" />
            </g>
          </svg>
        </button>

        {/* Feedback icon with badge */}
        <button
          className="relative shrink-0 size-[40px] hover:opacity-70 transition-opacity cursor-pointer"
          onClick={onImportantMessageClick}
        >
          <svg className="absolute left-[8px] top-[6px] size-[30px]" fill="none" viewBox="0 0 30 30">
            <mask height="30" id="mask_feedback" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
              <rect fill="#D9D9D9" height="30" width="30" />
            </mask>
            <g mask="url(#mask_feedback)">
              <path d={svgPaths.p358233f0} fill="#133356" />
            </g>
          </svg>
          {unreadCount > 0 && (
            <div className="absolute left-[27px] top-px bg-[#fc0a18] rounded-full size-[16px] flex items-center justify-center">
              <span className="font-['Poppins',sans-serif] text-[10px] text-white" style={{ fontWeight: 500 }}>{unreadCount}</span>
            </div>
          )}
        </button>

        {/* Language toggle */}
        <div className="font-['Poppins',sans-serif] text-[#133356] text-[20px] flex items-center cursor-pointer select-none">
          <span
            className={lang === "EN" ? "underline" : ""}
            style={{ fontWeight: lang === "EN" ? 600 : 400 }}
            onClick={() => setLang("EN")}
          >EN</span>
          <span className="mx-1" style={{ fontWeight: 500 }}>|</span>
          <span
            className={lang === "FR" ? "underline" : ""}
            style={{ fontWeight: lang === "FR" ? 600 : 400 }}
            onClick={() => setLang("FR")}
          >FR</span>
        </div>

        {/* Profile avatar */}
        <button className="shrink-0 size-[40px] rounded-full overflow-hidden hover:ring-2 hover:ring-[#3082c4]/30 transition-all cursor-pointer">
          <img src={imgProfile} alt="Profile" className="size-full object-cover" />
        </button>
      </div>
    </header>
  );
}