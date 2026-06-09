import clsx from "clsx";
import svgPaths from "./svg-mxlyiool10";

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

export default function Frame() {
  return (
    <div className="backdrop-blur-[35px] bg-[rgba(255,255,255,0.75)] gap-x-[12px] gap-y-[8px] grid grid-cols-[__220px_fit-content(100%)] grid-rows-[_________36px_36px_36px_36px_36px_36px_36px_36px_36px] p-[20px] relative rounded-bl-[12px] rounded-br-[12px] size-full">
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
  );
}