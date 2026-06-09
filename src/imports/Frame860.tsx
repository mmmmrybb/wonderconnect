import svgPaths from "./svg-cby935hkpj";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full">
      <Wrapper>
        <g id="edit">
          <mask height="24" id="mask0_38_686" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_38_686)">
            <path d={svgPaths.p337a2200} fill="var(--fill-0, #1D7AFC)" id="edit_2" />
          </g>
        </g>
      </Wrapper>
      <Wrapper>
        <g id="delete">
          <mask height="24" id="mask0_38_682" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_38_682)">
            <path d={svgPaths.p68dfd00} fill="var(--fill-0, #E71616)" id="delete_2" />
          </g>
        </g>
      </Wrapper>
    </div>
  );
}