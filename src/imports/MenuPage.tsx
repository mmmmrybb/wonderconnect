import clsx from "clsx";
import svgPaths from "./svg-964ygp3jrf";
import imgWonderconnect1 from "figma:asset/626a9f8383df3b2003d799798e5cb065de374bd9.png";
import imgProfile from "figma:asset/728fd08227ec3fac525217a38e941feea1e15670.png";
import imgImage10 from "figma:asset/3e041fa6df9c36c13845c974f7ed88faac78e7bd.png";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("size-[30px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("col-2 opacity-25 relative rounded-[4px] self-stretch shrink-0 w-[253px]", additionalClassNames)}>{children}</Wrapper1>;
}
type NewMenuIcon1Props = {
  additionalClassNames?: string;
};

function NewMenuIcon1({ children, additionalClassNames = "" }: React.PropsWithChildren<NewMenuIcon1Props>) {
  return <Wrapper1 additionalClassNames={clsx("col-1 relative rounded-[4px] self-stretch shrink-0 w-[220px]", additionalClassNames)}>{children}</Wrapper1>;
}
type NewMenuIconTextProps = {
  text: string;
  additionalClassNames?: string;
};

function NewMenuIconText({ text, additionalClassNames = "" }: NewMenuIconTextProps) {
  return (
    <div className={clsx("relative rounded-[5px] row-1 self-stretch shrink-0", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[4px] relative size-full">
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[14px] uppercase whitespace-nowrap">
            <p className="leading-[20px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[5px] items-center w-[1440px]", additionalClassNames)}>
      <div className="bg-[#7abe43] flex-[1_0_0] h-full min-h-px min-w-px" />
      <div className="bg-[#3082c4] flex-[1_0_0] h-full min-h-px min-w-px" />
      <div className="bg-[#e84855] flex-[1_0_0] h-full min-h-px min-w-px" />
      <div className="bg-[#ffeb62] flex-[1_0_0] h-full min-h-px min-w-px" />
    </div>
  );
}
type NewMenuIconProps = {
  className?: string;
  property1?: "Default" | "hover";
};

function NewMenuIcon({ className, property1 = "Default" }: NewMenuIconProps) {
  const isHover = property1 === "hover";
  return (
    <div className={className || `h-[36px] relative w-[214px] ${isHover ? "bg-[#e4edf9] rounded-br-[4px] rounded-tr-[4px]" : "rounded-[4px]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative size-full">
          <Wrapper2>
            <g id="shopping_cart">
              <mask height="28" id="mask0_89_417" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_417)">
                <path d={svgPaths.p881c100} fill="var(--fill-0, #1C1B1F)" id="shopping_cart_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Smart Order</p>
          </div>
        </div>
      </div>
      {isHover && <div aria-hidden="true" className="absolute border-[#0b8ef0] border-l-2 border-solid inset-[0_0_0_-2px] pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />}
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="bg-white relative size-full" data-name="menu page">
      <Helper additionalClassNames="left-0 top-0" />
      <div className="absolute content-stretch flex h-[10px] items-center left-0 top-[1016px] w-[2009px]">
        <div className="bg-[#7abe43] h-[10px] shrink-0 w-[501.5px]" />
        <div className="bg-[#3082c4] h-[10px] shrink-0 w-[501.5px]" />
        <div className="bg-[#e84855] h-[10px] shrink-0 w-[501.5px]" />
        <div className="bg-[#ffeb62] h-[10px] shrink-0 w-[501.5px]" />
      </div>
      <div className="-translate-x-1/2 absolute blur-[2px] h-[845px] left-[calc(50%-264px)] top-[102px] w-[1118px]" data-name="Component 2">
        <div className="absolute inset-[27.05%_4.73%_0_5.29%]" data-name="20">
          <div className="absolute inset-[-4.11%_-2.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1056.75 667.181">
              <g filter="url(#filter0_f_89_450)" id="20" opacity="0.25">
                <path d={svgPaths.p2c433f00} fill="var(--fill-0, #133356)" />
                <path d={svgPaths.p2c433f00} stroke="var(--stroke-0, #121333)" strokeOpacity="0.337255" strokeWidth="0.723246" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="667.181" id="filter0_f_89_450" width="1056.75" x="3.27826e-07" y="-2.38419e-07">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_89_450" stdDeviation="12.5" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[3.14%_19.88%_69.89%_51.19%]" data-name="colorful circles 4">
          <div className="absolute inset-[-1.19%_-1.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.3172 31.2347">
              <g id="colorful circles 4">
                <path d={svgPaths.p350eff80} fill="var(--fill-0, #0A8EF0)" id="4" stroke="var(--stroke-0, #0A8EF0)" strokeWidth="0.723246" />
                <path d={svgPaths.p2e7cdf00} fill="var(--fill-0, #1D7FF6)" id="21" stroke="var(--stroke-0, #1D7FF6)" strokeWidth="0.723246" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.61%_0_44.98%_76.71%]" data-name="colorful circles 3">
          <div className="absolute inset-[-1.49%_-1.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3494 24.9444">
              <g id="colorful circles 3">
                <path d={svgPaths.p1eac0a80} fill="var(--fill-0, #74D02A)" id="5" stroke="var(--stroke-0, #74D02A)" strokeWidth="0.723246" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[6.12%_81.94%_77.04%_0]" data-name="colorful circles 2">
          <div className="absolute inset-[-1.9%_-1.89%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8232 19.7704">
              <g id="colorful circles 2">
                <path d={svgPaths.p126fd700} fill="var(--fill-0, #FF1752)" id="1" stroke="var(--stroke-0, #FF1752)" strokeWidth="0.723246" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_59.31%_88.51%_28.53%]" data-name="colorful circles 1">
          <div className="absolute inset-[-2.78%_-2.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5759 13.7171">
              <g id="colorful circles 1">
                <path d={svgPaths.p30782380} fill="var(--fill-0, #FEE431)" id="3" stroke="var(--stroke-0, #FEE431)" strokeWidth="0.723246" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[33.5%_28.4%_29%_50.76%]">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 350">
            <g filter="url(#filter0_f_89_456)" id="Ellipse 10" opacity="0.25">
              <circle cx="175" cy="175" fill="var(--fill-0, #74D02A)" r="150" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="350" id="filter0_f_89_456" width="350" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_89_456" stdDeviation="12.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[-13.25%_45.69%_61.5%_25.56%]">
        <div className="absolute inset-[-6.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 464 464">
            <g filter="url(#filter0_f_89_421)" id="Ellipse 10" opacity="0.25">
              <circle cx="232" cy="232" fill="var(--fill-0, #0B8EF0)" r="207" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="464" id="filter0_f_89_421" width="464" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_89_421" stdDeviation="12.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[-5.63%_79.31%_81.13%_7.15%]">
        <div className="absolute inset-[-12.76%_-12.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 246">
            <g filter="url(#filter0_f_89_460)" id="Ellipse 10" opacity="0.25">
              <ellipse cx="122.5" cy="123" fill="var(--fill-0, #FEE431)" rx="97.5" ry="98" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="246" id="filter0_f_89_460" width="245" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_89_460" stdDeviation="12.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10%_93.13%_59.38%_-10.14%]">
        <div className="absolute inset-[-10.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 295">
            <g filter="url(#filter0_f_89_458)" id="Ellipse 10" opacity="0.25">
              <circle cx="147.5" cy="147.5" fill="var(--fill-0, #FF1752)" r="122.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="295" id="filter0_f_89_458" width="295" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_89_458" stdDeviation="12.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Helper additionalClassNames="-translate-x-1/2 bottom-0 left-1/2" />
      <div className="absolute bg-[rgba(255,255,255,0.75)] content-stretch flex items-center justify-between left-0 px-[24px] py-[5px] top-[5px] w-[1440px]">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <Wrapper3 additionalClassNames="relative shrink-0">
            <g id="dehaze">
              <mask height="30" id="mask0_27_42" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="30" id="Bounding box" width="30" />
              </mask>
              <g mask="url(#mask0_27_42)">
                <path d={svgPaths.p4c77400} fill="var(--fill-0, #1C1B1F)" id="dehaze_2" />
              </g>
            </g>
          </Wrapper3>
          <div className="h-[30px] relative shrink-0 w-[191px]" data-name="Wonderconnect 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWonderconnect1} />
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            <Wrapper3 additionalClassNames="relative shrink-0">
              <g id="view_carousel">
                <mask height="30" id="mask0_27_50" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                  <rect fill="var(--fill-0, #D9D9D9)" height="30" id="Bounding box" width="30" />
                </mask>
                <g mask="url(#mask0_27_50)">
                  <path d={svgPaths.p3f9cf600} fill="var(--fill-0, #133356)" id="view_carousel_2" />
                </g>
              </g>
            </Wrapper3>
            <div className="relative shrink-0 size-[40px]">
              <Wrapper3 additionalClassNames="absolute left-[8px] top-[6px]">
                <g id="feedback">
                  <mask height="30" id="mask0_89_427" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="30" id="Bounding box" width="30" />
                  </mask>
                  <g mask="url(#mask0_89_427)">
                    <path d={svgPaths.p139572f0} fill="var(--fill-0, #133356)" id="feedback_2" />
                  </g>
                </g>
              </Wrapper3>
              <div className="absolute bg-[#fc0a18] content-stretch flex flex-col items-center justify-center left-[27px] overflow-clip rounded-[15px] size-[16px] top-px" data-name="Indicator">
                <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
                  <p className="leading-[normal]">2</p>
                </div>
              </div>
            </div>
            <div className="h-[31px] relative shrink-0 w-[80px]" data-name="EN | FR">
              <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#133356] text-[0px] text-center">
                <p className="text-[20px]">
                  <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[normal] text-[#133356] underline">EN</span>
                  <span className="font-['Poppins:Medium',sans-serif] leading-[normal]">{` `}</span>
                  <span className="font-['Poppins:Medium',sans-serif] leading-[normal] text-[#133356]">|</span>
                  <span className="font-['Poppins:Medium',sans-serif] leading-[normal]">{` `}</span>
                  <span className="font-['Poppins:Regular',sans-serif] leading-[normal]">FR</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[40px]" data-name="profile">
            <img alt="" className="absolute block max-w-none size-full" height="40" src={imgProfile} width="40" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[10px] bg-[rgba(249,249,249,0.7)] content-stretch flex flex-col gap-[8px] items-end left-1/2 overflow-clip px-[50px] py-[20px] top-[calc(50%+25px)] w-[1440px]">
        <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#243140] w-full">
          <div className="capitalize flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
            <p className="leading-[normal]">Promo Tittle: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[14px] w-full">
            <p className="leading-[normal]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="h-[510px] relative shrink-0 w-full" data-name="image 10">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
        <div className="content-stretch flex h-[17px] items-center relative shrink-0">
          <div className="flex flex-row items-center self-stretch">
            <div className="backdrop-blur-[2px] content-stretch flex h-full items-center justify-center px-[5px] relative rounded-[3px] shrink-0">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
                <p className="leading-[normal]">Effective date: 02/12/2025 - 03/12/2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute h-[8px] left-1/2 top-[634px] w-[56px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 8">
            <g id="Frame 741">
              <circle cx="4" cy="4" fill="var(--fill-0, #1D7FF6)" id="Ellipse 13" r="4" />
              <circle cx="28" cy="4" fill="var(--fill-0, white)" id="Ellipse 14" r="4" />
              <circle cx="52" cy="4" fill="var(--fill-0, white)" id="Ellipse 15" r="4" />
            </g>
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute right-[14px] size-[24px] top-[calc(50%+0.5px)]" data-name="chevron_right">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="chevron_right">
              <mask height="24" id="mask0_89_444" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
              </mask>
              <g mask="url(#mask0_89_444)">
                <path d={svgPaths.pa1eb970} fill="var(--fill-0, #1C1B1F)" id="chevron_right_2" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute backdrop-blur-[35px] bg-[rgba(255,255,255,0.75)] gap-x-[12px] gap-y-[8px] grid-cols-[__220px_fit-content(100%)] grid-rows-[_________36px_36px_36px_36px_36px_36px_36px_36px_36px] h-[428px] inline-grid left-[24px] p-[20px] rounded-bl-[12px] rounded-br-[12px] top-[55px]">
        <NewMenuIconText text="Coming Soon" additionalClassNames="col-2 w-[253px]" />
        <Wrapper additionalClassNames="row-2">
          <Wrapper2>
            <g id="hand_package">
              <mask height="28" id="mask0_89_409" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_409)">
                <path d={svgPaths.p233f400} fill="var(--fill-0, #1C1B1F)" id="hand_package_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Proof Of Delivery</p>
          </div>
        </Wrapper>
        <Wrapper additionalClassNames="row-3">
          <Wrapper2>
            <g id="service_toolbox">
              <mask height="28" id="mask0_89_462" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_462)">
                <path d={svgPaths.p1213ae00} fill="var(--fill-0, #1C1B1F)" id="service_toolbox_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Tools</p>
          </div>
        </Wrapper>
        <Wrapper additionalClassNames="row-4">
          <Wrapper2>
            <g id="book_4">
              <mask height="28" id="mask0_89_440" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_440)">
                <path d={svgPaths.p177e6cc0} fill="var(--fill-0, #1C1B1F)" id="book_4_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[18px]">{`Training & Product Knowledge`}</p>
          </div>
        </Wrapper>
        <Wrapper additionalClassNames="row-5">
          <Wrapper2>
            <g id="error">
              <mask height="28" id="mask0_89_423" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_423)">
                <path d={svgPaths.p427d180} fill="var(--fill-0, #1C1B1F)" id="error_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Support</p>
          </div>
        </Wrapper>
        <NewMenuIcon className="col-1 relative rounded-[4px] row-2 self-stretch shrink-0 w-[220px]" />
        <NewMenuIcon1 additionalClassNames="row-3">
          <Wrapper2>
            <g id="shoppingmode">
              <mask height="28" id="mask0_89_405" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_405)">
                <path d={svgPaths.pda93870} fill="var(--fill-0, #1C1B1F)" id="shoppingmode_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Features</p>
          </div>
        </NewMenuIcon1>
        <NewMenuIcon1 additionalClassNames="row-4">
          <Wrapper2>
            <g id="file_copy">
              <mask height="28" id="mask0_89_401" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_401)">
                <path d={svgPaths.p2b3001f0} fill="var(--fill-0, #1C1B1F)" id="file_copy_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Statements</p>
          </div>
        </NewMenuIcon1>
        <NewMenuIcon1 additionalClassNames="row-5">
          <Wrapper2>
            <g id="forum">
              <mask height="28" id="mask0_89_397" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_397)">
                <path d={svgPaths.p143e6f00} fill="var(--fill-0, #1C1B1F)" id="forum_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Communications</p>
          </div>
        </NewMenuIcon1>
        <NewMenuIcon1 additionalClassNames="row-6">
          <Wrapper2>
            <g id="folder_supervised">
              <mask height="28" id="mask0_89_393" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_393)">
                <path d={svgPaths.p395e34c0} fill="var(--fill-0, #1C1B1F)" id="folder_supervised_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[18px]">User Admin</p>
          </div>
        </NewMenuIcon1>
        <NewMenuIcon1 additionalClassNames="row-7">
          <Wrapper2>
            <g id="bar_chart_4_bars">
              <mask height="28" id="mask0_89_389" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_389)">
                <path d={svgPaths.p1e760670} fill="var(--fill-0, #1C1B1F)" id="bar_chart_4_bars_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[18px]">Business Dashboard</p>
          </div>
        </NewMenuIcon1>
        <NewMenuIcon1 additionalClassNames="row-8">
          <Wrapper2>
            <g id="tenancy">
              <mask height="28" id="mask0_89_436" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_436)">
                <path d={svgPaths.p29384140} fill="var(--fill-0, #1C1B1F)" id="tenancy_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[18px]">Franchisee Admin</p>
          </div>
        </NewMenuIcon1>
        <NewMenuIcon1 additionalClassNames="row-9">
          <Wrapper2>
            <g id="mail">
              <mask height="28" id="mask0_89_413" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
              </mask>
              <g mask="url(#mask0_89_413)">
                <path d={svgPaths.p1f7ca600} fill="var(--fill-0, #1C1B1F)" id="mail_2" />
              </g>
            </g>
          </Wrapper2>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1f] text-[14px] whitespace-nowrap">
            <p className="leading-[18px]">Email</p>
          </div>
        </NewMenuIcon1>
        <NewMenuIconText text="Featured Apps" additionalClassNames="col-1 w-[220px]" />
      </div>
    </div>
  );
}