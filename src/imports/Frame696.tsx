import clsx from "clsx";
import svgPaths from "./svg-qzli6w4tdj";
type BackgroundImage4Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImage4({ children, text, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center px-[14px] py-[8px] relative w-full">
        <div style={{ fontFeatureSettings: "'ss01', 'cv10', 'calt' 0, 'liga' 0" }} className={clsx("flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap", additionalClassNames)}>
          <p className="leading-[20px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
  text: string;
  additionalClassNames1?: string;
};

function BackgroundImage3({ children, additionalClassNames = "", text, additionalClassNames1 = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div role="button" tabIndex="0" className={clsx("bg-white h-[31px] relative rounded-[25px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[25px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={clsx("content-stretch flex items-center justify-center px-[20px] py-[5px] relative", additionalClassNames)}>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperbuttonBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-10.71%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 8.5">
          {children}
        </svg>
      </div>
    </div>
  );
}

function HelperbuttonRightBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[6px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[rgba(228,230,231,0.6)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_5px_0px_rgba(17,12,34,0.1)]" />
      <div className="relative shrink-0 size-[18px]" data-name="Iconly">
        <div className="absolute flex inset-[20.83%_35.42%] items-center justify-center">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center ml-0 mt-0 not-italic relative row-1 text-[20px] text-black", additionalClassNames)}>
      <p>
        <span className="leading-[normal] text-[#0c111d]">{text}</span>
        <span className="leading-[normal] text-[#f24e1e]">{` * `}</span>
      </p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center ml-0 mt-0 not-italic relative row-1 text-[20px] text-black w-[175px]", additionalClassNames)}>
      <p>
        <span className="leading-[normal] text-[#0c111d]">{text}</span>
        <span className="leading-[normal] text-[#f24e1e]">{` `}</span>
      </p>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={clsx("col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 place-items-start relative row-1", additionalClassNames)}>
      <div className="bg-white border border-[#d0d5dd] border-solid col-1 h-[57px] ml-0 mt-0 rounded-[4px] row-1 w-[525px]" />
      <CalendarDate className="block col-1 cursor-pointer ml-[486px] mt-[18px] relative row-1 size-[24px]" />
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="h-0 relative shrink-0 w-[1090px] z-[1]">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1090 1">
          <line id="Line 10" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="1090" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type HelperbuttonEnglishDateBackgroundImageAndTextProps = {
  text: string;
};

function HelperbuttonEnglishDateBackgroundImageAndText({ text }: HelperbuttonEnglishDateBackgroundImageAndTextProps) {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic right-[-0.14px] text-[#475467] text-[14px] text-center top-1/2">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-[-5%_-5.56%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <path d={svgPaths.p36499d00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
type CheckBackgroundImageProps = {
  additionalClassNames?: string;
};

function CheckBackgroundImage({ additionalClassNames = "" }: CheckBackgroundImageProps) {
  return (
    <div className={clsx("absolute overflow-clip size-[24px]", additionalClassNames)}>
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-9.09%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
            <path d="M17 1L6 12L1 7" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type FileUploadProps = {
  className?: string;
  style?: "Filled" | "Outlined" | "Round" | "Sharp" | "Two Tone";
};

function FileUpload({ className, style = "Filled" }: FileUploadProps) {
  const isOutlined = style === "Outlined";
  const isRound = style === "Round";
  return (
    <div className={className || "relative"}>
      {["Filled", "Outlined", "Round", "Sharp"].includes(style) && (
        <div className={`absolute ${isRound ? "inset-[15.43%_20.83%]" : isOutlined ? "inset-[16.67%]" : "inset-[14.58%_20.83%]"}`} data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isRound ? "0 0 14 16.5925" : isOutlined ? "0 0 16 16" : "0 0 14 17"}>
            <path d={style === "Sharp" ? svgPaths.p2a2af080 : isRound ? svgPaths.p20706400 : isOutlined ? svgPaths.p1942b080 : svgPaths.p122cad00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      )}
      {style === "Two Tone" && (
        <div className="absolute contents inset-[12.5%_20.83%_16.67%_20.83%]" data-name="Group">
          <div className="absolute inset-[12.5%_20.83%_16.67%_20.83%]" data-name="Group">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
              <g id="Group">
                <path d={svgPaths.p10600a80} fill="var(--fill-0, black)" id="Vector" opacity="0.3" />
                <path d="M14 15H0V17H14V15Z" fill="var(--fill-0, black)" id="Vector_2" />
                <path d={svgPaths.p1951ddf0} fill="var(--fill-0, black)" id="Vector_3" />
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
type RadialButtonProps = {
  className?: string;
  property1?: "Default" | "hover" | "selected" | "Variant4";
};

function RadialButton({ className, property1 = "Default" }: RadialButtonProps) {
  if (property1 === "hover") {
    return (
      <button className={className || "bg-white block cursor-pointer overflow-clip relative rounded-[12px] size-[24px]"} data-name="Property 1=hover">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,123,255,0.6)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_4px_rgba(0,123,255,0.1)]" />
      </button>
    );
  }
  if (property1 === "selected") {
    return (
      <button className={className || "bg-white cursor-pointer relative rounded-[12px] size-[24px]"} data-name="Property 1=selected">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <CheckBackgroundImage additionalClassNames="bg-[#1d7afc] left-0 top-0" />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,123,255,0.6)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </button>
    );
  }
  if (property1 === "Variant4") {
    return (
      <div className={className || "bg-[#e4e7ec] relative rounded-[12px] size-[24px]"} data-name="Property 1=Variant4">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <CheckBackgroundImage additionalClassNames="left-0 top-0" />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    );
  }
  return (
    <div className={className || "bg-white overflow-clip relative rounded-[12px] size-[24px]"} data-name="Property 1=Default">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,123,255,0.6)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}
type CalendarDateProps = {
  className?: string;
  property1?: "Default" | "Selected";
};

function CalendarDate({ className, property1 = "Default" }: CalendarDateProps) {
  const isSelected = property1 === "Selected";
  return (
    <button className={className || "block relative size-[24px]"}>
      <div className="absolute bg-white inset-0 overflow-clip" data-name="calendar-date">
        {isSelected && (
          <div className="absolute h-[20px] left-[3px] top-[2px] w-[18px]" data-name="Icon">
            <BackgroundImage />
          </div>
        )}
        {property1 === "Default" && (
          <div className="absolute h-[20px] left-[3px] top-[2px] w-[18px]" data-name="Icon">
            <BackgroundImage />
          </div>
        )}
      </div>
      {isSelected && (
        <div className="-translate-x-1/2 absolute bg-white bottom-[-67px] h-[402px] left-[calc(50%-177px)] rounded-[12px] shadow-[0px_0px_0.5px_0px_rgba(66,71,76,0.32),0px_4px_8px_0px_rgba(66,71,76,0.05),0px_4px_40px_0px_#eee] w-[318px]" data-name="Date-Picker">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Header">
              <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
                  <HelperbuttonRightBackgroundImage>
                    <div className="flex-none h-[7px] rotate-90 w-[14px]">
                      <HelperbuttonBackgroundImage>
                        <g id="Arrow - Left 2">
                          <path d={svgPaths.p1da3ebe0} id="Stroke 1" stroke="var(--stroke-0, #200E32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </HelperbuttonBackgroundImage>
                    </div>
                  </HelperbuttonRightBackgroundImage>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#09090b] text-[16px] text-center whitespace-nowrap">August</p>
                  <HelperbuttonRightBackgroundImage>
                    <div className="-rotate-90 flex-none h-[7px] w-[14px]">
                      <HelperbuttonBackgroundImage>
                        <g id="Arrow - Right 2">
                          <path d={svgPaths.p1da3ebe0} id="Stroke 1" stroke="var(--stroke-0, #200E32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </HelperbuttonBackgroundImage>
                    </div>
                  </HelperbuttonRightBackgroundImage>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Weekdays">
              <div className="capitalize content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-start leading-[18px] not-italic px-[16px] py-[8px] relative size-full text-[#71717a] text-[13px] text-center">
                <p className="flex-[1_0_0] min-h-px min-w-px relative">mo</p>
                <p className="flex-[1_0_0] min-h-px min-w-px relative">tu</p>
                <p className="flex-[1_0_0] min-h-px min-w-px relative">we</p>
                <p className="flex-[1_0_0] min-h-px min-w-px relative">th</p>
                <p className="flex-[1_0_0] min-h-px min-w-px relative">fr</p>
                <p className="flex-[1_0_0] min-h-px min-w-px relative">sa</p>
                <p className="flex-[1_0_0] min-h-px min-w-px relative">su</p>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Days">
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row">
                  <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" data-name="English-Date" />
                  <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" data-name="English-Date" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="1" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="2" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="3" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="4" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="5" />
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row">
                  <HelperbuttonEnglishDateBackgroundImageAndText text="6" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="7" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="8" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="9" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="10" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="11" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="12" />
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row">
                  <HelperbuttonEnglishDateBackgroundImageAndText text="13" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="14" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="15" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="16" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="17" />
                  <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="English-Date">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d7afc] left-[calc(50%-0.43px)] rounded-[16px] size-[32px] top-1/2" data-name="selection" />
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic right-[-0.14px] text-[14px] text-center text-white top-1/2">
                      <p className="leading-[24px]">18</p>
                    </div>
                  </div>
                  <HelperbuttonEnglishDateBackgroundImageAndText text="19" />
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row">
                  <HelperbuttonEnglishDateBackgroundImageAndText text="20" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="21" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="22" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="23" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="24" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="25" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="26" />
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row">
                  <HelperbuttonEnglishDateBackgroundImageAndText text="27" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="28" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="29" />
                  <HelperbuttonEnglishDateBackgroundImageAndText text="30" />
                  <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" data-name="English-Date" />
                  <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" data-name="English-Date" />
                  <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" data-name="English-Date" />
                </div>
              </div>
            </div>
            <div className="relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Buttons">
              <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
              <div className="content-stretch flex gap-[32px] items-start p-[16px] relative w-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(42,59,81,0.12),0px_0px_0px_1px_rgba(18,55,105,0.08)]" data-name="Button" style={{ backgroundImage: "linear-gradient(rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
                  <BackgroundImage4 text="18 / 08 / 2023" additionalClassNames="text-[#3f3f46]" />
                </div>
                <div className="bg-[#1d7afc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="Button">
                  <BackgroundImage4 text="Set Date" additionalClassNames="text-white" />
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(37,17,79,0.4)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
type GroupProps = {
  className?: string;
  property1?: "Region" | "Region-select" | "Location" | "Route" | "Route-select" | "Depot" | "Depot-select" | "Banner" | "Banner-select" | "Location-select";
};

function Group({ className, property1 = "Region" }: GroupProps) {
  const isBanner = property1 === "Banner";
  const isBannerSelect = property1 === "Banner-select";
  const isBannerSelectOrDepotSelectOrRouteSelect = ["Banner-select", "Depot-select", "Route-select"].includes(property1);
  const isDepot = property1 === "Depot";
  const isDepotSelect = property1 === "Depot-select";
  const isLocation = property1 === "Location";
  const isLocationSelect = property1 === "Location-select";
  const isRegionSelect = property1 === "Region-select";
  const isRoute = property1 === "Route";
  const isRouteSelect = property1 === "Route-select";
  return (
    <button className={className || `relative ${isLocationSelect ? "block h-[74px] w-[591px]" : isRegionSelect ? "w-[408px]" : isRouteSelect ? "block h-[73px] w-[516px]" : isDepotSelect ? "block h-[73px] w-[654px]" : isBannerSelect ? "block h-[71px] w-[516px]" : "block h-[24px] w-[107px]"}`}>
      {["Region", "Banner", "Depot", "Route", "Region-select", "Location", "Location-select"].includes(property1) && (
        <div className={isLocationSelect ? "absolute h-[74px] left-0 top-0 w-[107px]" : isLocation ? 'absolute flex flex-col font-["Inter:Semi_Bold",sans-serif] font-semibold inset-[0_-15.89%_0_37.38%] justify-center leading-[0] not-italic text-[#0c111d] text-[20px] text-left whitespace-nowrap' : isRegionSelect ? "content-stretch flex flex-col items-start relative w-full" : isRoute ? 'absolute flex flex-col font-["Inter:Semi_Bold",sans-serif] font-semibold inset-[0_9.35%_0_37.38%] justify-center leading-[0] not-italic text-[#0c111d] text-[20px] text-left whitespace-nowrap' : isDepot ? 'absolute flex flex-col font-["Inter:Semi_Bold",sans-serif] font-semibold inset-[0_7.48%_0_37.38%] justify-center leading-[0] not-italic text-[#0c111d] text-[20px] text-left whitespace-nowrap' : isBanner ? 'absolute flex flex-col font-["Inter:Semi_Bold",sans-serif] font-semibold inset-[0_-1.87%_0_37.38%] justify-center leading-[0] not-italic text-[#0c111d] text-[20px] text-left whitespace-nowrap' : 'absolute flex flex-col font-["Inter:Semi_Bold",sans-serif] font-semibold inset-[0_0_0_37.38%] justify-center leading-[0] not-italic text-[#0c111d] text-[20px] text-left whitespace-nowrap'}>
          {["Region", "Banner", "Depot", "Route", "Location"].includes(property1) && <p className="leading-[normal]">{isLocation ? "Location" : isRoute ? "Route" : isDepot ? "Depot" : isBanner ? "Banner" : "Region"}</p>}
          {isRegionSelect && (
            <div className="h-[75px] relative shrink-0 w-full">
              <div className="absolute bg-white border-2 border-[rgba(0,123,255,0.6)] border-solid left-0 overflow-clip rounded-[12px] size-[24px] top-0" data-name="Radial button">
                <CheckBackgroundImage additionalClassNames="bg-[#1d7afc] left-[-2px] top-[-2px]" />
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[40px] not-italic text-[#0c111d] text-[20px] text-left top-[12px] whitespace-nowrap">
                <p className="leading-[normal]">Region</p>
              </div>
              <div className="absolute content-stretch cursor-pointer flex gap-[15px] items-center left-[40px] top-[44px]">
                <BackgroundImage3 text="West" additionalClassNames1="h-full" />
                <BackgroundImage3 text="West" additionalClassNames1="h-full" />
                <BackgroundImage3 text="West" additionalClassNames1="h-full" />
                <BackgroundImage3 additionalClassNames="w-[96px]" text="West" additionalClassNames1="size-full" />
              </div>
            </div>
          )}
          {isLocationSelect && (
            <>
              <div className="absolute bg-white border-2 border-[rgba(0,123,255,0.6)] border-solid left-0 overflow-clip rounded-[12px] size-[24px] top-0" data-name="Radial button">
                <CheckBackgroundImage additionalClassNames="bg-[#1d7afc] left-[-2px] top-[-2px]" />
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[40px] not-italic text-[#0c111d] text-[20px] text-left top-[12px] whitespace-nowrap">
                <p className="leading-[normal]">Location</p>
              </div>
              <div className="absolute content-stretch cursor-pointer flex gap-[15px] items-center left-[40px] top-[43px] w-[516px]">
                <BackgroundImage3 text="West" additionalClassNames1="h-full" />
                <BackgroundImage3 text="West" additionalClassNames1="h-full" />
                <BackgroundImage3 text="West" additionalClassNames1="h-full" />
                <BackgroundImage3 text="West" additionalClassNames1="h-full" />
              </div>
            </>
          )}
        </div>
      )}
      {["Region", "Banner", "Banner-select", "Depot", "Depot-select", "Route", "Route-select", "Location"].includes(property1) && (
        <div className={`absolute bg-white border-2 border-[rgba(0,123,255,0.6)] border-solid rounded-[12px] ${isBannerSelectOrDepotSelectOrRouteSelect ? "left-0 overflow-clip size-[24px] top-0" : "inset-[0_77.57%_0_0]"}`} data-name="Radial button">
          {isBannerSelectOrDepotSelectOrRouteSelect && <CheckBackgroundImage additionalClassNames="bg-[#1d7afc] left-[-2px] top-[-2px]" />}
        </div>
      )}
      {isBannerSelectOrDepotSelectOrRouteSelect && (
        <>
          <div className={`-translate-y-1/2 absolute flex flex-col font-["Inter:Semi_Bold",sans-serif] font-semibold justify-center leading-[0] left-[40px] not-italic text-[#0c111d] text-[20px] text-left top-[12px] ${isRouteSelect ? "h-[24px] w-[57px]" : "whitespace-nowrap"}`}>
            <p className="leading-[normal]">{isRouteSelect ? "Route" : isDepotSelect ? "Depot" : isBannerSelect ? "Banner" : ""}</p>
          </div>
          <div className={`absolute content-stretch flex gap-[15px] items-center left-[40px] ${isRouteSelect ? "top-[42px] w-[516px]" : isDepotSelect ? "top-[42px] w-[624px]" : "top-[40px] w-[516px]"}`}>
            <BackgroundImage3 text="West" additionalClassNames1="h-full" />
            <BackgroundImage3 text="West" additionalClassNames1="h-full" />
            <BackgroundImage3 text="West" additionalClassNames1="h-full" />
            <BackgroundImage3 text="West" additionalClassNames1="h-full" />
          </div>
        </>
      )}
    </button>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch cursor-pointer flex flex-col h-[261px] isolate items-start justify-between left-0 top-[608px] w-[107px]">
        <Group className="block h-[24px] relative shrink-0 w-full z-[5]" />
        <Group className="block h-[24px] relative shrink-0 w-full z-[4]" property1="Location" />
        <Group className="block h-[24px] relative shrink-0 w-full z-[3]" property1="Route" />
        <Group className="block h-[24px] relative shrink-0 w-full z-[2]" property1="Depot" />
        <Group className="block h-[24px] relative shrink-0 w-full z-[1]" property1="Banner" />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] h-[70px] isolate items-start left-0 pt-[20px] top-[517px] w-[1090px]">
        <div className="relative shrink-0 z-[2]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[39px] items-center leading-[0] not-italic relative text-[0px] text-black">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 whitespace-nowrap">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[24px]">Select Junction</p>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 w-[273px]">
              <p>
                <span className="leading-[normal] text-[#f24e1e] text-[20px]">{`* `}</span>
                <span className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[#0c111d] text-[16px]">Choose one junction to post</span>
                <span className="leading-[normal] text-[#f24e1e] text-[20px]">{` `}</span>
              </p>
            </div>
          </div>
        </div>
        <BackgroundImage1 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] h-[70px] isolate items-start left-0 pt-[20px] top-[108px] w-[1090px]">
        <div className="relative shrink-0 z-[2]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[24px]">File Information</p>
            </div>
          </div>
        </div>
        <BackgroundImage1 />
      </div>
      <div className="absolute content-start flex flex-wrap gap-[20px_40px] isolate items-start left-0 top-[199px] w-[1090px]">
        <div className="h-[91px] relative shrink-0 w-[525px] z-[6]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#0c111d] text-[20px] top-[12px] w-[437px]">
            <p>
              <span className="leading-[0.16]">{`Title `}</span>
              <span className="leading-[0.16] text-[#f04438]">{`* `}</span>
            </p>
          </div>
          <div className="absolute bg-white border border-[#d0d5dd] border-solid h-[57px] left-0 overflow-clip rounded-[4px] top-[31px] w-[525px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] left-[15px] not-italic text-[#475467] text-[24px] top-[29px] w-[431px]">
              <p className="leading-[0.2]">|</p>
            </div>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-[5]">
          <BackgroundImageAndText text="Posting Date" additionalClassNames="h-[20px]" />
          <BackgroundImage2 additionalClassNames="mt-[29px]" />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-[4]">
          <div className="col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center ml-0 mt-0 not-italic relative row-1 text-[#f24e1e] text-[20px] whitespace-nowrap">
            <p>
              <span className="leading-[normal] text-[#0c111d]">Category</span>
              <span className="leading-[normal]">{` * `}</span>
            </p>
          </div>
          <button className="col-1 cursor-pointer h-[57px] ml-0 mt-[35.5px] relative row-1 w-[525px]" data-name="Filter list">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col isolate items-start relative size-full">
                <div className="h-[57px] relative rounded-[4px] shrink-0 w-full z-[1]" data-name="Dropdown">
                  <div className="content-stretch flex flex-col isolate items-start pb-[6px] relative size-full">
                    <div className="bg-white flex-[1_0_0] mb-[-6px] min-h-px min-w-px relative rounded-[4px] w-full z-[2]" data-name="Dropdown-field">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-between px-[15px] py-[7px] relative size-full">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[16px] text-left w-[184px]">
                            <p className="leading-[0.14]">{`All `}</p>
                          </div>
                          <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="icon-holder">
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="arrow_down">
                              <div className="absolute inset-[21.43%_3.57%]" data-name="vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1429 6.85714">
                                  <path clipRule="evenodd" d={svgPaths.p380e7df0} fill="var(--fill-0, #1D2939)" fillRule="evenodd" id="vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#1d7afc] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-[3]">
          <BackgroundImageAndText text="Expiration Date" additionalClassNames="h-[22.791px]" />
          <BackgroundImage2 additionalClassNames="mt-[35.55px]" />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-[2]">
          <BackgroundImageAndText1 text="Label" additionalClassNames="w-[525px]" />
          <div className="col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center ml-[56px] mt-[48.05px] not-italic relative row-1 text-[#ca2f5e] text-[20px] whitespace-nowrap">
            <p className="leading-[normal]">Urgent</p>
          </div>
          <div className="col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center ml-[305px] mt-[49.05px] not-italic relative row-1 text-[#0c111d] text-[20px] whitespace-nowrap">
            <p className="leading-[normal]">Non-urgent</p>
          </div>
          <RadialButton className="bg-white col-1 ml-[16px] mt-[48.05px] relative rounded-[12px] row-1 size-[24px]" />
          <RadialButton className="bg-white col-1 ml-[263px] mt-[48.05px] relative rounded-[12px] row-1 size-[24px]" />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-[1]">
          <BackgroundImageAndText1 text="File Type" additionalClassNames="whitespace-nowrap" />
          <div className="col-1 flex flex-col font-['Poppins:Regular',sans-serif] justify-center ml-[107px] mt-0 not-italic relative row-1 text-[#0c111d] text-[16px] whitespace-nowrap">
            <p className="leading-[normal]">(Only ID owner has access to confidential files)</p>
          </div>
          <div className="col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center ml-[56px] mt-[48.5px] not-italic relative row-1 text-[#0c111d] text-[20px] whitespace-nowrap">
            <p className="leading-[normal]">Confidential</p>
          </div>
          <div className="col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center ml-[305px] mt-[49.5px] not-italic relative row-1 text-[#0c111d] text-[20px] whitespace-nowrap">
            <p className="leading-[normal]">General</p>
          </div>
          <RadialButton className="bg-white col-1 ml-[16px] mt-[48.5px] relative rounded-[12px] row-1 size-[24px]" />
          <RadialButton className="bg-white col-1 ml-[263px] mt-[48.5px] relative rounded-[12px] row-1 size-[24px]" />
        </div>
      </div>
      <div className="absolute bg-white h-[94px] left-[8px] rounded-[8px] top-0 w-[1073px]">
        <div className="content-stretch flex gap-[11px] items-center justify-center overflow-clip px-[142px] py-[5px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[54px]">
            <div className="absolute left-[-3px] overflow-clip size-[60px] top-[-7px]" data-name="file">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
                    <path d={svgPaths.p205b900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_16.67%_62.5%_54.17%]" data-name="Vector">
                <div className="absolute inset-[-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                    <path d="M1 1V8H8" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <FileUpload className="absolute bottom-[16.67%] left-[20.37%] overflow-clip right-[46.3%] top-1/2" style="Outlined" />
          </div>
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
            <p className="text-[20px]">
              <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:Bold',sans-serif] leading-[normal] not-italic underline">Click to upload</span>
              <span className="leading-[normal]">{` or drag and drop`}</span>
              <span className="leading-[normal]">{` `}</span>
              <span className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic text-[#f24e1e]">*</span>
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#c0bfbf] border-dashed inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
    </div>
  );
}