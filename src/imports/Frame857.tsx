import clsx from "clsx";
import svgPaths from "./svg-ton4glddk9";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
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
    <div className={clsx("flex flex-row items-center size-full", additionalClassNames)}>
      <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <Wrapper1>{children}</Wrapper1>
    </div>
  );
}

function ChevronRight() {
  return (
    <Wrapper2>
      <g id="chevron_right">
        <mask height="24" id="mask0_134_322" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
        </mask>
        <g mask="url(#mask0_134_322)">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #1C1B1F)" id="chevron_right_2" />
        </g>
      </g>
    </Wrapper2>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="capitalize font-['Poppins:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#1c1b1f] text-[14px]">{text}</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6f6f6f] text-[11px]">
        <p className="leading-[normal]">{text1}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Save Button">
        <Wrapper2>
          <g id="add">
            <mask height="24" id="mask0_134_326" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
            </mask>
            <g mask="url(#mask0_134_326)">
              <path d={svgPaths.p2a6e0600} fill="var(--fill-0, #1D7AFC)" id="add_2" />
            </g>
          </g>
        </Wrapper2>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d7afc] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Create New</p>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full">
        <Wrapper1 additionalClassNames="overflow-clip rounded-[inherit]">
          <Helper text="Regarding recent recalls" text1="02/12/2025 - 03/12/2025" />
          <ChevronRight />
        </Wrapper1>
      </div>
      <Wrapper>
        <Helper text="New Promotions" text1="02/12/2025 - 03/12/2025" />
        <ChevronRight />
      </Wrapper>
      <Wrapper>
        <Helper text="New cleaning procedures!!!" text1="02/12/2025 - 03/12/2025" />
        <ChevronRight />
      </Wrapper>
    </div>
  );
}