import { useState } from "react";
import { useLocation } from "react-router";
import svgPaths from "./svg-0e44jv05pp";
import homeIconPaths from "./svg-juwigytwac";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (appName: string) => void;
}

interface MenuItem {
  name: string;
  svgPath: string;
  subItems?: string[];
  isHome?: boolean;
  iconViewBox?: string;
}

const featuredApps: MenuItem[] = [
  { name: "WonderConnect", svgPath: homeIconPaths.p244b6f80, isHome: true, iconViewBox: "0 0 40 40" },
  { name: "Smart Order", svgPath: svgPaths.p881c100 },
  { name: "Features", svgPath: svgPaths.pda93870 },
  { name: "Statements", svgPath: svgPaths.p2b3001f0 },
  { name: "Communications", svgPath: svgPaths.p143e6f00 },
  { name: "User Admin", svgPath: svgPaths.p395e34c0 },
  { name: "Business Dashboard", svgPath: svgPaths.p1e760670, subItems: ["Business Dashboard", "Service Dashboard", "Market Quality Escalation"] },
  { name: "Franchisee Admin", svgPath: svgPaths.p29384140 },
  { name: "Email", svgPath: svgPaths.p1f7ca600 },
];

const comingSoonApps: MenuItem[] = [
  { name: "Proof Of Delivery", svgPath: svgPaths.p233f400 },
  { name: "Tools", svgPath: svgPaths.p1213ae00 },
  { name: "Training & Product Knowledge", svgPath: svgPaths.p177e6cc0 },
  { name: "Support", svgPath: svgPaths.p427d180 },
];

function MenuIcon({ svgPath, id, viewBox }: { svgPath: string; id: string; viewBox?: string }) {
  const vb = viewBox || "0 0 28 28";
  const vbSize = vb.split(" ")[2] || "28";
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" viewBox={vb}>
        <mask
          height={vbSize}
          id={`mask_${id}`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
          width={vbSize}
          x="0"
          y="0"
        >
          <rect fill="#D9D9D9" height={vbSize} width={vbSize} />
        </mask>
        <g mask={`url(#mask_${id})`}>
          <path d={svgPath} fill="#1C1B1F" />
        </g>
      </svg>
    </div>
  );
}

export function Sidebar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const location = useLocation();

  // Determine currently active app based on route
  const currentAppName = location.pathname.startsWith("/communications")
    ? "Communications"
    : location.pathname === "/"
    ? "WonderConnect"
    : "";
  const currentAppIndex = featuredApps.findIndex((a) => a.name === currentAppName);

  if (!isOpen) return null;

  // Use hovered app if hovering, otherwise fall back to selected (clicked) app
  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
  const activeApp = activeIndex !== null ? featuredApps[activeIndex] : null;
  const showSubItems = activeApp?.subItems && activeApp.subItems.length > 0;

  return (
    <>
      {/* Invisible overlay to close the dropdown */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Dropdown panel */}
      <div
        className="fixed left-[24px] top-[50px] z-50 backdrop-blur-[35px] bg-[rgba(255,255,255,0.75)] rounded-bl-[12px] rounded-br-[12px] p-[20px] inline-grid gap-x-[12px] gap-y-[8px]"
        style={{
          gridTemplateColumns: showSubItems ? "220px 220px" : "220px fit-content(100%)",
          gridTemplateRows: "repeat(10, 36px)",
        }}
      >
        {/* Row 1: Headers */}
        <div className="col-start-1 row-start-1 self-stretch justify-self-stretch rounded-[5px]">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="flex items-start p-[4px] size-full">
              <p className="font-['Poppins',sans-serif] text-[#6e6e6e] text-[14px] uppercase whitespace-nowrap" style={{ fontWeight: 400, lineHeight: "20px" }}>
                Featured Apps
              </p>
            </div>
          </div>
        </div>

        <div className="col-start-2 row-start-1 self-stretch justify-self-stretch rounded-[5px]">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="flex items-start p-[4px] size-full">
              <p className="font-['Poppins',sans-serif] text-[#6e6e6e] text-[14px] uppercase whitespace-nowrap" style={{ fontWeight: 400, lineHeight: "20px" }}>
                {showSubItems ? activeApp!.name : "Coming Soon"}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Apps - Column 1, Rows 2-9 */}
        {featuredApps.map((app, index) => {
          const isCurrent = index === currentAppIndex;
          const isActive = activeIndex === index;
          const isSelected = selectedIndex === index;
          const isHighlighted = isCurrent || isActive || isSelected;
          return (
            <button
              key={app.name}
              className={`col-start-1 self-stretch justify-self-stretch relative transition-colors cursor-pointer ${
                isHighlighted ? "bg-[#e4edf9]" : ""
              }`}
              style={{ gridRowStart: index + 2 }}
              onMouseEnter={() => {
                setHoveredIndex(index);
                if (selectedIndex !== null && selectedIndex !== index) {
                  setSelectedIndex(null);
                }
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (app.subItems && app.subItems.length > 0) {
                  setSelectedIndex(selectedIndex === index ? null : index);
                } else if (onNavigate) {
                  onNavigate(app.name);
                  onClose();
                }
              }}
            >
              <div className="flex flex-row items-center overflow-clip size-full">
                <div className="flex gap-[4px] items-center p-[4px] size-full">
                  <MenuIcon svgPath={app.svgPath} id={`featured_${index}`} viewBox={app.iconViewBox} />
                  <p className="font-['Poppins',sans-serif] text-[#1c1b1f] text-[14px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "20px" }}>
                    {app.name}
                  </p>
                </div>
              </div>
              {/* Blue left border stroke on hover/selected/current */}
              {isHighlighted && (
                <div
                  aria-hidden="true"
                  className="absolute border-[#0b8ef0] border-l-2 border-solid inset-[0_0_0_-2px] pointer-events-none"
                />
              )}
            </button>
          );
        })}

        {/* Right column content */}
        {showSubItems
          ? /* Sub-items for active app */
            activeApp!.subItems!.map((subItem, index) => (
              <button
                key={subItem}
                className="col-start-2 self-stretch justify-self-stretch rounded-[4px] hover:bg-black/5 transition-colors cursor-pointer"
                style={{ gridRowStart: index + 2 }}
              >
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="flex items-center p-[4px] size-full">
                    <p className="font-['Poppins',sans-serif] text-[#1c1b1f] text-[14px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "20px" }}>
                      {subItem}
                    </p>
                  </div>
                </div>
              </button>
            ))
          : /* Coming Soon Apps - default state */
            comingSoonApps.map((app, index) => (
              <div
                key={app.name}
                className="col-start-2 self-stretch justify-self-stretch rounded-[4px] opacity-25"
                style={{ gridRowStart: index + 2 }}
              >
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="flex gap-[4px] items-center p-[4px] size-full">
                    <MenuIcon svgPath={app.svgPath} id={`coming_${index}`} />
                    <p className="font-['Poppins',sans-serif] text-[#1c1b1f] text-[14px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "20px" }}>
                      {app.name}
                    </p>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </>
  );
}