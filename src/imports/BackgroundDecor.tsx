export function BackgroundDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blue blurred circle - top right area */}
      <div className="absolute -top-[13%] left-[26%] w-[414px] h-[414px]">
        <svg className="block size-full" fill="none" viewBox="0 0 464 464">
          <g filter="url(#filter_blue)" opacity="0.25">
            <circle cx="232" cy="232" fill="#0B8EF0" r="207" />
          </g>
          <defs>
            <filter id="filter_blue" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" width="464" height="464" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="12.5" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Yellow blurred circle - top left */}
      <div className="absolute -top-[6%] left-[7%] w-[195px] h-[196px]">
        <svg className="block size-full" fill="none" viewBox="0 0 245 246">
          <g filter="url(#filter_yellow)" opacity="0.25">
            <ellipse cx="122.5" cy="123" fill="#FEE431" rx="97.5" ry="98" />
          </g>
          <defs>
            <filter id="filter_yellow" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" width="245" height="246" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="12.5" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Red blurred circle - right side */}
      <div className="absolute top-[10%] right-[-10%] w-[245px] h-[245px]">
        <svg className="block size-full" fill="none" viewBox="0 0 295 295">
          <g filter="url(#filter_red)" opacity="0.25">
            <circle cx="147.5" cy="147.5" fill="#FF1752" r="122.5" />
          </g>
          <defs>
            <filter id="filter_red" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" width="295" height="295" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="12.5" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Green blurred circle - center-left */}
      <div className="absolute top-[34%] left-[51%] w-[300px] h-[300px]">
        <svg className="block size-full" fill="none" viewBox="0 0 350 350">
          <g filter="url(#filter_green)" opacity="0.25">
            <circle cx="175" cy="175" fill="#74D02A" r="150" />
          </g>
          <defs>
            <filter id="filter_green" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" width="350" height="350" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="12.5" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Large dark shape behind content */}
      <div className="absolute top-[12%] left-[5%] w-[80%] h-[75%] blur-sm opacity-[0.03]">
        <div className="w-full h-full bg-[#133356] rounded-[50%]" />
      </div>
    </div>
  );
}
