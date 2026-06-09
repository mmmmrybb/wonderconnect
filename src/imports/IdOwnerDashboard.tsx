import clsx from "clsx";
import svgPaths from "./svg-36elkxxxbp";
import imgScreencaptureWonderbrands202409191131111 from "figma:asset/fd359b6aa08f68ea26c3ba53d9e13eb35b05a2d7.png";
import imgImage from "figma:asset/39eac9d87da24a0dc285047823dcb63ee1fd558e.png";
import imgWonderconnect1 from "figma:asset/626a9f8383df3b2003d799798e5cb065de374bd9.png";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Poppins:Regular',sans-serif] gap-[30px] items-center leading-[0] not-italic pr-[25px] relative text-[#4e4e4e] text-[14px] w-full">{children}</div>
      </div>
    </div>
  );
}
type MarkAsReadUnreadHelperProps = {
  additionalClassNames?: string;
};

function MarkAsReadUnreadHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<MarkAsReadUnreadHelperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-33.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          {children}
        </svg>
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <button className={additionalClassNames}>
      <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] h-[40px] justify-center leading-[0] left-0 not-italic text-[16px] text-left text-white top-[20px] w-[218px]">
        <p className="leading-[normal]">{children}</p>
      </div>
    </button>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("absolute block cursor-pointer h-[40px] left-[41px] overflow-clip rounded-[8px] w-[218px]", additionalClassNames)}>{children}</Wrapper1>;
}
type ContentIndicatorTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContentIndicatorText({ text, additionalClassNames = "" }: ContentIndicatorTextProps) {
  return (
    <div className={clsx("absolute bg-[#fc0a18] rounded-[15px] size-[20px]", additionalClassNames)}>
      <Wrapper3>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-full">
          <p className="leading-[normal]">{text}</p>
        </div>
      </Wrapper3>
    </div>
  );
}
type ContentTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContentText({ text, additionalClassNames = "" }: ContentTextProps) {
  return <Wrapper1 additionalClassNames={clsx("absolute block cursor-pointer h-[40px] left-[41px] overflow-clip rounded-[8px]", additionalClassNames)}>{text}</Wrapper1>;
}

function ContentHelper() {
  return (
    <div className="absolute h-0 left-[25px] top-[143px] w-[225px]">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 1">
          <line id="Line 10" stroke="var(--stroke-0, #1D7AFC)" strokeOpacity="0.5" x2="225" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type ImageProps = {
  text: string;
  text1: string;
};

function Image({ text, text1 }: ImageProps) {
  return (
    <div className="absolute contents left-[50px] top-[22px]">
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] h-[25px] leading-[normal] left-[140px] not-italic text-[16px] text-center text-white top-[89px] w-[156px]">{text}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[normal] left-[140px] not-italic text-[12px] text-center text-white top-[114px] w-[180px]">{text1}</p>
      <div className="absolute left-[110px] size-[60px] top-[22px]" data-name="image">
        <img alt="" className="absolute block max-w-none size-full" height="60" src={imgImage} width="60" />
      </div>
    </div>
  );
}
type NumbersHolderPaginationNumberStatusTextProps = {
  text: string;
};

function NumbersHolderPaginationNumberStatusText({ text }: NumbersHolderPaginationNumberStatusTextProps) {
  return (
    <div className="bg-white relative shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border-[#ebeaeb] border-r border-solid inset-0 pointer-events-none" />
      <Wrapper4>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a0a1] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">{text}</p>
        </div>
      </Wrapper4>
    </div>
  );
}
type CheckboxCheckProps = {
  additionalClassNames?: string;
};

function CheckboxCheck({ additionalClassNames = "" }: CheckboxCheckProps) {
  return (
    <div className={clsx("absolute left-0 overflow-clip top-0", additionalClassNames)}>
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

function HelperbuttonHelper() {
  return (
    <div className="h-0 relative w-[11px]">
      <div className="absolute inset-[-3.68px_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.36396">
          <path d={svgPaths.p3a4a4d80} fill="var(--stroke-0, #757575)" id="Arrow 1" />
        </svg>
      </div>
    </div>
  );
}
type EnFrProps = {
  className?: string;
  property1?: "Light1" | "Light2" | "dark2" | "dark1";
};

function EnFr({ className, property1 = "Light1" }: EnFrProps) {
  const isDark1 = property1 === "dark1";
  const isDark1OrDark2 = ["dark1", "dark2"].includes(property1);
  const isDark2 = property1 === "dark2";
  const isLight2 = property1 === "Light2";
  const isLight2OrDark2 = ["Light2", "dark2"].includes(property1);
  return (
    <button className={className || `block relative w-[197px] ${isDark1OrDark2 ? "h-[50px]" : "h-[81px]"}`}>
      <div className={`absolute flex flex-col font-["Poppins:Bold",sans-serif] inset-0 justify-center leading-[0] not-italic text-center ${isDark1OrDark2 ? "text-[#123356] text-[0px]" : "text-[30px] text-white"}`}>
        <p className={isDark1OrDark2 ? 'font-["Poppins:Medium",sans-serif] text-[22px]' : undefined}>
          <span className={`leading-[normal] ${isLight2OrDark2 ? "" : isDark1 ? "[text-decoration-skip-ink:none] decoration-solid text-[#123356] underline" : "[text-decoration-skip-ink:none] decoration-solid underline"}`}>{isLight2OrDark2 ? "EN " : isDark1 ? "EN" : "EN"}</span>
          <span className={`leading-[normal] ${isDark2 ? "text-[#123356]" : isLight2 ? 'font-["Poppins:Regular",sans-serif] not-italic' : ""}`}>{isLight2OrDark2 ? "|" : isDark1 ? " " : " "}</span>
          <span className={`leading-[normal] ${isLight2OrDark2 ? "" : isDark1 ? "text-[#123356]" : 'font-["Poppins:Regular",sans-serif] not-italic'}`}>{isLight2OrDark2 ? " " : isDark1 ? "|" : "|"}</span>
          <span className={`leading-[normal] ${isDark2 ? "[text-decoration-skip-ink:none] decoration-solid text-[#123356] underline" : isLight2 ? "[text-decoration-skip-ink:none] decoration-solid underline" : ""}`}>{isLight2OrDark2 ? "FR" : isDark1 ? " FR" : " FR"}</span>
        </p>
      </div>
    </button>
  );
}
type FileDownloadProps = {
  className?: string;
  style?: "Filled" | "Outlined" | "Round" | "Sharp" | "Two Tone";
};

function FileDownload({ className, style = "Filled" }: FileDownloadProps) {
  const isOutlined = style === "Outlined";
  return (
    <div className={className || "relative"}>
      {["Filled", "Outlined", "Round", "Sharp"].includes(style) && (
        <div className={`absolute ${isOutlined ? "inset-[16.67%]" : "inset-[14.58%_20.83%]"}`} data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isOutlined ? "0 0 16 16" : "0 0 14 17"}>
            <path d={style === "Round" ? svgPaths.p3ea678f0 : isOutlined ? svgPaths.pa003000 : svgPaths.p229e3580} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      )}
      {style === "Two Tone" && (
        <div className="absolute contents inset-[12.5%_20.83%_16.67%_20.83%]" data-name="Group">
          <div className="absolute inset-[12.5%_20.83%_16.67%_20.83%]" data-name="Group">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
              <g id="Group">
                <path d={svgPaths.p279bc500} fill="var(--fill-0, black)" id="Vector" opacity="0.3" />
                <path d="M14 15H0V17H14V15Z" fill="var(--fill-0, black)" id="Vector_2" />
                <path d={svgPaths.p24504c00} fill="var(--fill-0, black)" id="Vector_3" />
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
type ComponentProps = {
  className?: string;
  property1?: "Frame 772" | "info" | "Variant3" | "Variant4";
};

function Component({ className, property1 = "info" }: ComponentProps) {
  const isInfoOrVariant4 = ["info", "Variant4"].includes(property1);
  const isVariant3 = property1 === "Variant3";
  return (
    <div className={className || `relative ${isInfoOrVariant4 ? "size-[20px]" : ""}`}>
      {["Frame 772", "Variant3"].includes(property1) && (
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[3px] items-center relative">
            <div className="overflow-clip relative shrink-0 size-[15px]" data-name="info">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
                <div className="absolute inset-[-25%_-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                    <path d="M1 5V1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
                <div className="absolute inset-[-1px_-9999.77%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
                    <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#eaecf0] content-stretch flex items-center justify-center px-[5px] relative rounded-[3px] shrink-0">
              <div className={`flex flex-col font-["Poppins:Regular",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-right whitespace-nowrap ${isVariant3 ? "text-[#1d7afc]" : "text-[#ca2f5e]"}`}>
                <p className="leading-[normal]">{isVariant3 ? "Click on file name to preview" : property1 === "Frame 772" ? "Urgent files marked as red" : ""}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isInfoOrVariant4 && (
        <div className="-translate-y-1/2 absolute h-[15px] left-0 overflow-clip right-1/4 top-[calc(50%+0.5px)]" data-name="info">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p10533c80} id="Vector" stroke="var(--stroke-0, #1D7AFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
            <div className="absolute inset-[-30%_-0.75px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 4">
                <path d="M0.75 3.25V0.75" id="Vector" stroke="var(--stroke-0, #1D7AFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-0.75px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.50625 1.5">
                <path d="M0.75 0.75H0.75625" id="Vector" stroke="var(--stroke-0, #1D7AFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
type MarkAsReadUnreadProps = {
  className?: string;
  property1?: "mark unread" | "unread hover" | "mark read" | "read hover 2";
};

function MarkAsReadUnread({ className, property1 = "mark unread" }: MarkAsReadUnreadProps) {
  if (property1 === "unread hover") {
    return (
      <button className={className || "block cursor-pointer h-[24px] relative w-[28px]"} data-name="Property 1=unread hover">
        <div className="absolute flex items-center inset-[0_3.57%_0_0] justify-center text-[#4e4e4e]">
          <FolderOutlinedIcon style={{ fontSize: 24, color: '#4e4e4e' }} />
        </div>
        <MarkAsReadUnreadHelper additionalClassNames="inset-[12.5%_14.29%_62.5%_64.29%]">
          <circle cx="5" cy="5" fill="var(--fill-0, #4E4E4E)" id="Ellipse 5" r="4" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </MarkAsReadUnreadHelper>
        <div className="absolute bg-[#4e4e4e] content-stretch flex h-[19px] items-center justify-center left-[-39px] px-[3px] py-[5px] rounded-[2px] top-[24px] w-[108px]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-left text-white w-[96px]">
            <p className="leading-[normal]">Mark as unread</p>
          </div>
        </div>
      </button>
    );
  }
  if (property1 === "mark read") {
    return (
      <div className={className || "h-[24px] relative w-[27px]"} data-name="Property 1=mark read">
        <div className="absolute flex items-center inset-0 justify-center text-black">
          <FolderOpenOutlinedIcon style={{ fontSize: 24, color: 'black' }} />
        </div>
      </div>
    );
  }
  if (property1 === "read hover 2") {
    return (
      <button className={className || "block cursor-pointer h-[24px] relative w-[27px]"} data-name="Property 1=read hover 2">
        <div className="absolute flex items-center inset-0 justify-center text-[#4e4e4e]">
          <FolderOpenOutlinedIcon style={{ fontSize: 24, color: '#4e4e4e' }} />
        </div>
        <div className="absolute bg-[#4e4e4e] content-stretch flex h-[19px] items-center justify-center left-[-29px] px-[3px] py-[5px] rounded-[2px] top-[24px]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-left text-white w-[80px]">
            <p className="leading-[normal]">Mark as read</p>
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "h-[24px] relative w-[27px]"} data-name="Property 1=mark unread">
      <div className="absolute flex items-center inset-0 justify-center text-black">
        <FolderOutlinedIcon style={{ fontSize: 24, color: 'black' }} />
      </div>
      <MarkAsReadUnreadHelper additionalClassNames="inset-[12.5%_11.11%_62.5%_66.67%]">
        <circle cx="5" cy="5" fill="var(--fill-0, black)" id="Ellipse 5" r="4" stroke="var(--stroke-0, white)" strokeWidth="2" />
      </MarkAsReadUnreadHelper>
    </div>
  );
}
type CheckboxProps = {
  className?: string;
  property1?: "Default" | "hover" | "selected" | "Variant4";
};

function Checkbox({ className, property1 = "Default" }: CheckboxProps) {
  const isSelected = property1 === "selected";
  const isVariant4 = property1 === "Variant4";
  return (
    <div className={className || `relative rounded-[4px] size-[17px] ${isVariant4 ? "bg-[#e4e7ec]" : isSelected ? "bg-[#1d7afc] overflow-clip" : "bg-white overflow-clip"}`}>
      {["Default", "hover", "Variant4"].includes(property1) && (
        <div aria-hidden={["Default", "hover"].includes(property1) ? "true" : undefined} className={isVariant4 ? "overflow-clip relative rounded-[inherit] size-full" : property1 === "hover" ? "absolute border-2 border-[rgba(0,123,255,0.6)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_0px_4px_rgba(0,123,255,0.1)]" : "absolute border-2 border-[rgba(0,123,255,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]"}>
          {isVariant4 && <CheckboxCheck additionalClassNames="size-[24px]" />}
        </div>
      )}
      {isSelected && <CheckboxCheck additionalClassNames="size-[17px]" />}
      {isVariant4 && <div aria-hidden="true" className="absolute border-2 border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />}
    </div>
  );
}

export default function IdOwnerDashboard() {
  return (
    <div className="bg-white relative size-full" data-name="Id owner dashboard">
      <div className="absolute bg-[#eff8ff] h-[925px] left-0 overflow-clip top-[65px] w-[2006px]" data-name="Content">
        <div className="absolute bg-white h-[873px] left-[305px] overflow-clip rounded-[10px] top-[26px] w-[900px]" data-name="New Posts">
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[677px] items-start left-[calc(50%-0.5px)] overflow-x-clip overflow-y-auto top-[127px] w-[845px]">
            <div className="content-stretch flex gap-[20px] items-center py-[10px] relative shrink-0 w-full">
              <Checkbox className="bg-white relative rounded-[4px] shrink-0 size-[17px]" />
              <div className="flex-[1_0_0] min-h-px min-w-px relative">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[30px] items-center pr-[25px] relative w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ca2f5e] text-[14px] w-[338px]">
                        <p className="leading-[normal]">Associated Grocer- WK 42</p>
                      </div>
                    </div>
                    <div className="content-stretch flex font-['Poppins:Medium',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#ca2f5e] text-[14px] w-[380px]">
                      <div className="flex flex-col justify-center relative shrink-0 w-[160px]">
                        <p className="leading-[normal]">Marketing</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                        <p className="leading-[normal]">9/20/2024</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                        <p className="leading-[normal]">9/20/2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center py-[10px] relative shrink-0 w-full">
              <Checkbox className="bg-white relative rounded-[4px] shrink-0 size-[17px]" />
              <div className="flex-[1_0_0] min-h-px min-w-px relative">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex font-['Poppins:Medium',sans-serif] gap-[30px] items-center leading-[0] not-italic pr-[25px] relative text-[#0c111d] text-[14px] w-full">
                    <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
                      <p className="leading-[normal]">Associated Grocer- WK 41</p>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[380px]">
                      <div className="flex flex-col justify-center relative shrink-0 w-[160px]">
                        <p className="leading-[normal]">Marketing</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                        <p className="leading-[normal]">9/20/2024</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                        <p className="leading-[normal]">9/20/2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center py-[10px] relative shrink-0 w-full">
              <Checkbox className="bg-white relative rounded-[4px] shrink-0 size-[17px]" />
              <Wrapper2>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
                  <p className="leading-[normal]">Quality Foods-OCT 3-OCT 9 FEATURE</p>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[380px]">
                  <div className="flex flex-col justify-center relative shrink-0 w-[160px]">
                    <p className="leading-[normal]">Marketing</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                    <p className="leading-[normal]">9/20/2024</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                    <p className="leading-[normal]">9/20/2024</p>
                  </div>
                </div>
              </Wrapper2>
            </div>
            <div className="content-stretch flex gap-[20px] items-center py-[10px] relative shrink-0 w-full">
              <Checkbox className="bg-white relative rounded-[4px] shrink-0 size-[17px]" />
              <Wrapper2>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
                  <p className="leading-[normal]">{`WALMART: Nouveaux produits Great Value - 23 `}</p>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[380px]">
                  <div className="flex flex-col justify-center relative shrink-0 w-[160px]">
                    <p className="leading-[normal]">{`Features & Promotions`}</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                    <p className="leading-[normal]">9/20/2024</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                    <p className="leading-[normal]">9/20/2024</p>
                  </div>
                </div>
              </Wrapper2>
            </div>
            <div className="content-stretch flex gap-[20px] items-center py-[10px] relative shrink-0 w-full">
              <Checkbox className="bg-white relative rounded-[4px] shrink-0 size-[17px]" />
              <Wrapper2>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
                  <p className="leading-[normal]">WALMART: Nouveaux produits Great Value - 23 septembre</p>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[380px]">
                  <div className="flex flex-col justify-center relative shrink-0 w-[160px]">
                    <p className="leading-[normal]">New Product Listings</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                    <p className="leading-[normal]">9/20/2024</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                    <p className="leading-[normal]">9/20/2024</p>
                  </div>
                </div>
              </Wrapper2>
            </div>
            <div className="content-stretch flex gap-[20px] items-center py-[10px] relative shrink-0 w-full">
              <Checkbox className="bg-white relative rounded-[4px] shrink-0 size-[17px]" />
              <Wrapper2>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
                  <p className="leading-[normal]">lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam euismod nisi vel consectetur cursus, nunc sapien feugiat lorem</p>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[380px]">
                  <div className="flex flex-col justify-center relative shrink-0 w-[160px]">
                    <p className="leading-[normal]">New Product Listings</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                    <p className="leading-[normal]">9/20/2024</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
                    <p className="leading-[normal]">9/20/2024</p>
                  </div>
                </div>
              </Wrapper2>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute h-[24px] left-[calc(50%-0.5px)] top-[83px] w-[845px]">
            <Checkbox className="-translate-y-1/2 absolute bg-white left-0 rounded-[4px] size-[17px] top-[calc(50%+0.5px)]" />
            <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[37px] not-italic text-[#757575] text-[16px] top-[12px] whitespace-nowrap">
              <p className="leading-[normal]">File Name</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[440px] not-italic text-[#757575] text-[16px] top-[12px] whitespace-nowrap">
              <p className="leading-[normal]">Category</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[1686px] not-italic text-[#757575] text-[16px] top-[12px] whitespace-nowrap">
              <p className="leading-[normal]">Created By</p>
            </div>
            <button className="absolute cursor-pointer left-[635px] top-0">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center relative">
                  <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-left whitespace-nowrap">
                    <p className="leading-[normal]">Post Date</p>
                  </div>
                  <div className="flex h-[11px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "59", "--transform-inner-height": "16" } as React.CSSProperties}>
                    <div className={`flex-none ${"Descending" === "Ascending" ? "-rotate-90" : "rotate-90"}`}>
                      <HelperbuttonHelper />
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button className="absolute cursor-pointer left-[745px] top-0 w-[98px]">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center relative">
                  <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-left whitespace-nowrap">
                    <p className="leading-[normal]">Expiry Date</p>
                  </div>
                  <div className="flex h-[11px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "69", "--transform-inner-height": "16" } as React.CSSProperties}>
                    <div className={`flex-none ${"Descending" === "Ascending" ? "-rotate-90" : "rotate-90"}`}>
                      <HelperbuttonHelper />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[117px] w-[871px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 871 1">
                <line id="Line 12" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="871" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex h-[68px] items-center justify-between left-[calc(50%+1px)] top-[805px] w-[940px]">
            <div className="h-[40px] relative shrink-0 w-[454px]" data-name="Wonderbrands-Pagination">
              <div className="flex flex-row items-end size-full">
                <div className="content-stretch flex items-end pt-[10px] relative size-full">
                  <div className="content-stretch flex gap-[62px] items-center relative shrink-0" data-name="left_frame">
                    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] relative shrink-0" data-name="numbers">
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-full justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#c0bfbf] text-[16px] text-center tracking-[-3.68px] w-[16px]">
                        <p className="leading-[normal]">{`<<`}</p>
                      </div>
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-full justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#c0bfbf] text-[16px] text-center tracking-[-3.2px] w-[8px]">
                        <p className="leading-[normal]">{`<`}</p>
                      </div>
                      <div className="relative rounded-[4px] shrink-0" data-name="numbers holder">
                        <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit]">
                          <button className="bg-[#e0e0e0] cursor-pointer relative shrink-0 size-[32px]" data-name="Pagination number status">
                            <Wrapper4>
                              <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d7afc] text-[12px] text-center whitespace-nowrap">
                                <p className="leading-[normal]">1</p>
                              </div>
                            </Wrapper4>
                          </button>
                          <NumbersHolderPaginationNumberStatusText text="2" />
                          <NumbersHolderPaginationNumberStatusText text="3" />
                          <NumbersHolderPaginationNumberStatusText text=". . ." />
                          <NumbersHolderPaginationNumberStatusText text="400" />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#ebeaeb] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#333132] text-[16px] text-center tracking-[-3.2px] w-[8px]">
                        <p className="leading-[normal]">{`>`}</p>
                      </div>
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#333132] text-[16px] text-center tracking-[-3.68px] w-[16px]">
                        <p className="leading-[normal]">{`>>`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Items Per Page">
                      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4f4f4f] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[normal]">Page</p>
                      </div>
                      <div className="bg-white relative rounded-[4px] shrink-0">
                        <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[8px] py-[7px] relative rounded-[inherit]">
                          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4f4f4f] text-[12px] text-center w-[21.622px]">
                            <p className="leading-[normal]">8</p>
                          </div>
                          <div className="h-[5px] relative shrink-0 w-[9px]" data-name="mdi:caret-down">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
                              <path d="M0 0L4.5 5L9 0H0Z" fill="var(--fill-0, #4F4F4F)" id="mdi:caret-down" />
                            </svg>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#1d7afc] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 py-[4px] top-[13px] w-[850px]">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 text-[#4e4e4e] text-[24px] whitespace-nowrap">
                  <p className="leading-[normal]">Posts</p>
                </div>
                <Component className="col-1 ml-[65px] mt-0 relative row-1 size-[20px]" />
              </div>
            </div>
            <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
              <MarkAsReadUnread className="h-[24px] relative shrink-0 w-[27px]" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="filter">
                <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                      <path d={svgPaths.p30dc8280} id="Vector" stroke="var(--stroke-0, #0C111D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="bg-white col-1 h-[30px] ml-0 mt-0 relative rounded-[50px] row-1 w-[212px]" data-name="Input - Search 1.0">
                  <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
                    <div className="relative shrink-0 size-[20px]" data-name="search">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="search">
                          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #898989)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M17.5 17.5L13.875 13.875" id="Vector_2" stroke="var(--stroke-0, #898989)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#898989] text-[14px] w-[66px]">
                      <p className="leading-[0.14]">Search</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[50px]" />
                </div>
              </div>
              <div className="bg-[#1d7afc] content-stretch flex h-[30px] items-center justify-center px-[5px] py-[8px] relative rounded-[4px] shrink-0" data-name="Save Button">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[80px]">
                  <p className="leading-[0.16]">Post New</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white h-[873px] left-[1225px] overflow-x-clip overflow-y-auto rounded-[10px] top-[26px] w-[760px]" data-name="Preview">
          <div className="-translate-x-1/2 absolute h-[806px] left-1/2 overflow-x-clip overflow-y-auto rounded-[5px] top-[57px] w-[732px]">
            <div className="absolute h-[1552px] left-0 top-0 w-[732px]" data-name="screencapture-wonderbrands-2024-09-19-11_31_11 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreencaptureWonderbrands202409191131111} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 py-[6px] top-[9px] w-[700px]">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 text-[#4e4e4e] text-[24px] whitespace-nowrap">
                <p className="leading-[normal]">Preview</p>
              </div>
              <Component className="col-1 ml-[96px] mt-0 relative row-1 size-[20px]" property1="Variant4" />
            </div>
            <div className="h-[25px] relative shrink-0 w-[81px]">
              <FileDownload className="absolute left-0 overflow-clip size-[24px] top-0" style="Outlined" />
              <div className="absolute inset-[4%_0_0_70.37%] overflow-clip">
                <div className="absolute inset-[20.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={"Outlined" === "Round" ? svgPaths.p32bc8880 : svgPaths.p31b7a80} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[2px] bg-[#123356] h-[970px] left-0 overflow-clip rounded-br-[10px] rounded-tr-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[280px]" data-name="Nav bar">
          <Image text="Jenny Smith" text1="jenny.smith@wonderbrand.com" />
          <ContentHelper />
          <Image text="Jenny Smith" text1="jenny.smith@wonderbrand.com" />
          <ContentHelper />
          <button className="absolute block cursor-pointer h-[40px] left-[25px] overflow-clip rounded-[8px] top-[193px] w-[234px]" data-name="Communications">
            <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Poppins:Bold',sans-serif] h-[40px] justify-center leading-[0] left-0 not-italic text-[20px] text-left text-white top-[20px] w-[204px]">
              <p className="leading-[normal]">Communications</p>
            </div>
          </button>
          <div className="absolute left-[238px] overflow-clip size-[24px] top-[204px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-25%_-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
                  <path d="M1.5 1.5L7.5 7.5L13.5 1.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>
          <Wrapper additionalClassNames="top-[513px]">{`Buy & Sell`}</Wrapper>
          <ContentText text="Product Availability" additionalClassNames="top-[473px] w-[218px]" />
          <ContentText text="Support" additionalClassNames="top-[433px] w-[218px]" />
          <Wrapper additionalClassNames="top-[393px]">{`Policies & Documents`}</Wrapper>
          <ContentText text="New Product Listings" additionalClassNames="top-[353px] w-[180px]" />
          <ContentText text="Marketing" additionalClassNames="top-[313px] w-[180px]" />
          <button className="absolute block cursor-pointer h-[40px] left-[41px] overflow-clip rounded-[8px] top-[273px] w-[209px]" data-name="feature">
            <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Poppins:Bold',sans-serif] h-[40px] justify-center leading-[0] left-0 not-italic text-[16px] text-left text-white top-[20px] w-[204px]">
              <p className="leading-[normal]">{`Features & Promotions`}</p>
            </div>
          </button>
          <ContentText text="All" additionalClassNames="top-[233px] w-[218px]" />
        </div>
        <ContentIndicatorText text="6" additionalClassNames="left-[213px] top-[203px]" />
        <ContentIndicatorText text="2" additionalClassNames="left-[240px] top-[283px]" />
        <ContentIndicatorText text="4" additionalClassNames="left-[240px] top-[363px]" />
      </div>
      <div className="absolute left-[56px] size-[32px] top-[103px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center size-full" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[2009px]">
        <div className="content-stretch flex h-[10px] items-center relative shrink-0 w-full">
          <div className="bg-[#7abe43] h-[10px] shrink-0 w-[501.5px]" />
          <div className="bg-[#3082c4] h-[10px] shrink-0 w-[501.5px]" />
          <div className="bg-[#e84855] h-[10px] shrink-0 w-[501.5px]" />
          <div className="bg-[#ffeb62] h-[10px] shrink-0 w-[501.5px]" />
        </div>
        <div className="bg-[#f9fcff] h-[55px] relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[30px] items-center px-[50px] relative size-full">
              <div className="content-stretch flex gap-[10px] items-end relative shrink-0">
                <div className="h-[30px] relative shrink-0 w-[27px]" data-name="grid-solid 1">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 30">
                    <g id="grid-solid 1">
                      <path d={svgPaths.p3d022c00} fill="var(--fill-0, #123356)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="h-[30px] relative shrink-0 w-[192px]" data-name="Wonderconnect 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWonderconnect1} />
                </div>
              </div>
              <div className="content-stretch flex gap-[35px] h-full items-center relative shrink-0">
                <div className="bg-gradient-to-r from-[#eff8ff] from-[12.27%] h-full relative shrink-0 to-white w-[1290px]" data-name="Scrolling banner">
                  <div className="flex flex-row items-center overflow-x-auto overflow-y-clip size-full">
                    <div className="content-stretch flex gap-[10px] items-center pl-[20px] relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="edit-03">
                        <div className="absolute inset-[11.99%_12.5%_16.67%_12.5%]" data-name="Icon">
                          <div className="absolute inset-[-5.84%_-5.56%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 19.1214">
                              <path d={svgPaths.pba47f00} id="Icon" stroke="var(--stroke-0, #1D7AFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[300px] items-center leading-[0] not-italic overflow-clip relative shrink-0 text-[#ca2f5e] text-ellipsis w-[1407px] whitespace-nowrap">
                        <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[18px]">
                          <p className="leading-[2] overflow-hidden">Please be informed of the time and date of the new system updates. Immediate action may be required; for any questions, please contact IT department for more information.</p>
                        </div>
                        <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[20px]">
                          <p className="leading-[2] overflow-hidden">Please be informed of the time and date of the new system updates. Immediate action may be required; for any questions, please contact IT department for more information.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#289fe2] border-l-3 border-solid inset-0 pointer-events-none" />
                </div>
                <EnFr className="block cursor-pointer h-[50px] relative shrink-0 w-[197px]" property1="dark1" />
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="h-[34px] relative shrink-0 w-[37px]">
                    <div className="absolute left-[3px] overflow-clip shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[32px] top-px" data-name="bell">
                      <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
                        <div className="absolute inset-[-5%_-4.17%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0002 22">
                            <path d={svgPaths.p221d2b00} id="Vector" stroke="var(--stroke-0, #0C111D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[87.5%_42.79%_8.35%_42.79%]" data-name="Vector">
                        <div className="absolute inset-[-75.28%_-21.68%_-75.27%_-21.68%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61366 3.32877">
                            <path d={svgPaths.p27b41200} id="Vector" stroke="var(--stroke-0, #0C111D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-[#fc0a18] left-[20px] rounded-[15px] size-[17px] top-0" data-name="Indicator">
                      <Wrapper3>
                        <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f9fcff] text-[14px] text-center w-full">
                          <p className="leading-[normal]">7</p>
                        </div>
                      </Wrapper3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}