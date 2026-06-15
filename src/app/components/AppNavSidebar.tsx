import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const sym = (name: string) => (
  <span className="material-symbols-sharp leading-none" style={{ fontSize: 20, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>{name}</span>
);

interface AppItem {
  name: string;
  icon?: React.ReactNode;
  isHome?: boolean;
  subItems?: string[];
  isSvg?: boolean;
}

const WonderConnectHomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_home)">
      <mask id="mask0_home" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
        <path d="M22 0H0V22H22V0Z" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_home)">
        <path d="M5.58981 18.7917C4.9283 18.7917 4.366 18.5601 3.90293 18.0971C3.43987 17.634 3.20833 17.0717 3.20833 16.4102V11C3.20833 10.6834 3.26792 10.38 3.38708 10.0897C3.50609 9.79944 3.67629 9.54171 3.89767 9.31654L9.32294 3.90636C9.55531 3.67093 9.81805 3.49576 10.111 3.38088C10.4041 3.26584 10.7004 3.20831 11 3.20831C11.2994 3.20831 11.5953 3.26538 11.8875 3.3795C12.18 3.49347 12.4453 3.66909 12.6834 3.90636L18.0936 9.31654C18.3141 9.54067 18.4855 9.79801 18.6079 10.0886C18.7304 10.3791 18.7917 10.683 18.7917 11V16.4102C18.7917 17.0717 18.5602 17.634 18.0973 18.0971C17.6342 18.5601 17.072 18.7917 16.4106 18.7917H5.58981ZM5.58981 17.6399H16.4106C16.7589 17.6399 17.0509 17.5216 17.2865 17.2849C17.5221 17.0481 17.6399 16.7565 17.6399 16.4102V11C17.6399 10.8303 17.611 10.6712 17.5532 10.5229C17.4955 10.3744 17.4038 10.2411 17.278 10.1232L13.5907 6.4313L11.8115 8.2117L15.1867 11.5816V15.1807H6.81934V11.5816L12.7657 5.62626L11.8576 4.71967C11.6971 4.56445 11.5395 4.46567 11.3848 4.42336C11.2302 4.38119 11.1023 4.36011 11.0012 4.36011C10.9002 4.36011 10.7678 4.38134 10.604 4.42381C10.4402 4.46628 10.2802 4.56567 10.1239 4.72196L4.72267 10.1232C4.60273 10.2445 4.51229 10.3789 4.45133 10.5263C4.39053 10.6737 4.36012 10.8316 4.36012 11V16.4102C4.36012 16.7565 4.47845 17.0481 4.7151 17.2849C4.95191 17.5216 5.24348 17.6399 5.58981 17.6399ZM7.97087 14.0291H14.0351V12.0658L11 9.0367L7.97087 12.0658V14.0291Z" fill="white"/>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_home">
        <rect width="22" height="22" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const FEATURED_APPS: AppItem[] = [
  { name: "WonderConnect", isHome: true },
  { name: "Smart Order", icon: sym("shopping_cart") },
  { name: "Features", icon: sym("local_offer") },
  { name: "Statements", icon: sym("description") },
  { name: "Communications", icon: sym("chat_bubble") },
  { name: "User Admin", icon: sym("verified") },
  { name: "Business Dashboard", icon: sym("trending_up"), subItems: ["Sales Overview", "Inventory", "Analytics", "Reports"] },
  { name: "Franchisee Admin", icon: sym("share") },
  { name: "Email", icon: sym("mail") },
];

const COMING_SOON = [
  "Proof Of Delivery",
  "Tools",
  "Training & Product Knowledge",
  "Support",
];

interface AppNavSidebarProps {
  open: boolean;
  currentApp?: string;
  onNavigate?: (name: string) => void;
  onClose: () => void;
}

function SidebarHeader({ label }: { label: string }) {
  return (
    <p
      className="text-[11px] font-['Roboto'] uppercase tracking-[0.8px] whitespace-nowrap px-4 pt-4 pb-2"
      style={{ color: "rgba(255,255,255,0.65)" }}
    >
      {label}
    </p>
  );
}

function SidebarItem({
  app, active, onNavigate,
}: { app: AppItem; active: boolean; onNavigate?: (name: string) => void }) {
  const [open, setOpen] = useState(false);
  const hasSub = !!(app.subItems && app.subItems.length);

  return (
    <div>
      <button
        title={app.name}
        onClick={() => {
          if (hasSub) setOpen((v) => !v);
          else onNavigate?.(app.name);
        }}
        className="group w-full relative flex items-center h-[40px] gap-2 transition-colors cursor-pointer px-5 hover:bg-white/10"
        style={active ? {
          background: "linear-gradient(90deg, transparent 0%, transparent 65%, rgba(29,122,252,0.30) 100%)"
        } : undefined}
      >
        <span className="flex-none w-[22px] h-[22px] flex items-center justify-center">
          {app.isHome ? (
            <WonderConnectHomeIcon />
          ) : (
            <span style={{ color: active ? "#5499FE" : "rgba(255,255,255,0.85)" }}>
              {app.icon}
            </span>
          )}
        </span>
        <span
          className={`text-[14px] flex-1 text-left leading-tight ${active ? "font-semibold" : "font-medium"}`}
          style={{ color: active ? "#5499FE" : "rgba(255,255,255,0.92)" }}
        >
          {app.name}
        </span>
        {hasSub && (
          <MdKeyboardArrowDown
            size={16}
            style={{
              color: "rgba(255,255,255,0.5)",
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform 150ms",
            }}
          />
        )}
        {active && (
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-[2px]"
            style={{ background: "#0A8EF0" }}
          />
        )}
      </button>

      {hasSub && open && (
        <div className="flex flex-col">
          {app.subItems!.map((sub) => (
            <button
              key={sub}
              onClick={() => onNavigate?.(sub)}
              className="w-full text-left pl-[56px] pr-4 h-[34px] flex items-center text-[13px] hover:bg-white/10 transition-colors cursor-pointer"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {sub}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function AppNavSidebar({ open, currentApp = "Communications", onNavigate, onClose }: AppNavSidebarProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const navigate = (name: string) => {
    onNavigate?.(name);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40" style={{ top: "44px" }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30"
        style={{ animation: "sbFade 160ms ease-out" }}
        onClick={onClose}
      />
      {/* Panel */}
      <aside
        className="absolute left-0 top-0 bottom-0 flex flex-col overflow-y-auto overflow-x-hidden"
        style={{
          width: 240,
          background: "#133356",
          borderRight: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 18px 44px rgba(10,20,40,.18)",
          animation: "sbSlide 200ms cubic-bezier(0.2,0,0,1)",
        }}
      >
        <SidebarHeader label="Featured Apps" />
        {FEATURED_APPS.map((app) => (
          <SidebarItem
            key={app.name}
            app={app}
            active={app.name === currentApp}
            onNavigate={navigate}
          />
        ))}

        <div className="h-px mx-3 my-3" style={{ background: "rgba(255,255,255,0.12)" }} />
        <p
          className="text-[11px] font-['Roboto'] uppercase tracking-[0.8px] whitespace-nowrap px-4 pb-2"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Coming Soon
        </p>
        {COMING_SOON.map((name) => (
          <div
            key={name}
            className="w-full flex items-center min-h-[40px] py-1.5 opacity-40 select-none px-5"
          >
            <span className="text-[14px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.92)" }}>
              {name}
            </span>
          </div>
        ))}
        <div className="h-3 flex-none" />
      </aside>
    </div>
  );
}
