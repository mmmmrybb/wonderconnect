import svgPaths from "./svg-e8mckgskin";

export default function Delete() {
  return (
    <div className="relative size-full" data-name="delete">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_38_710)" id="delete">
          <mask height="24" id="mask0_38_710" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_38_710)">
            <path d={svgPaths.p68dfd00} fill="var(--fill-0, #E71616)" id="delete_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_38_710">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}