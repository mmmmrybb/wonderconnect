import svgPaths from "./svg-8rt6na7kf7";
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

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[35px] items-center relative size-full">
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
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f9fcff] text-[14px] text-center w-full">
                  <p className="leading-[normal]">7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}