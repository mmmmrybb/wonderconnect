import clsx from "clsx";
import svgPaths from "./svg-ydd2pjyoq0";
import imgWonderconnect1 from "figma:asset/626a9f8383df3b2003d799798e5cb065de374bd9.png";
import imgProfile from "figma:asset/728fd08227ec3fac525217a38e941feea1e15670.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[30px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        {children}
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[rgba(255,255,255,0.75)] content-stretch flex items-center justify-between left-0 px-[24px] py-[5px] top-[5px] w-[1440px]">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <Wrapper additionalClassNames="relative shrink-0">
            <g id="dehaze">
              <mask height="30" id="mask0_27_42" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="30" id="Bounding box" width="30" />
              </mask>
              <g mask="url(#mask0_27_42)">
                <path d={svgPaths.p4c77400} fill="var(--fill-0, #1C1B1F)" id="dehaze_2" />
              </g>
            </g>
          </Wrapper>
          <div className="h-[30px] relative shrink-0 w-[191px]" data-name="Wonderconnect 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWonderconnect1} />
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            <Wrapper additionalClassNames="relative shrink-0">
              <g id="view_carousel">
                <mask height="30" id="mask0_27_50" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                  <rect fill="var(--fill-0, #D9D9D9)" height="30" id="Bounding box" width="30" />
                </mask>
                <g mask="url(#mask0_27_50)">
                  <path d={svgPaths.p3f9cf600} fill="var(--fill-0, #133356)" id="view_carousel_2" />
                </g>
              </g>
            </Wrapper>
            <div className="relative shrink-0 size-[40px]">
              <Wrapper additionalClassNames="absolute left-[8px] top-[6px]">
                <g id="feedback">
                  <mask height="30" id="mask0_27_46" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="30" id="Bounding box" width="30" />
                  </mask>
                  <g mask="url(#mask0_27_46)">
                    <path d={svgPaths.p358233f0} fill="var(--fill-0, #133356)" id="feedback_2" />
                  </g>
                </g>
              </Wrapper>
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
      <div className="absolute content-stretch flex h-[5px] items-center left-0 top-0 w-[1440px]">
        <div className="bg-[#7abe43] flex-[1_0_0] h-full min-h-px min-w-px" />
        <div className="bg-[#3082c4] flex-[1_0_0] h-full min-h-px min-w-px" />
        <div className="bg-[#e84855] flex-[1_0_0] h-full min-h-px min-w-px" />
        <div className="bg-[#ffeb62] flex-[1_0_0] h-full min-h-px min-w-px" />
      </div>
    </div>
  );
}