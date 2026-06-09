export default function ScrollingBanner() {
  return (
    <div className="bg-[#fcf7d1] content-stretch flex items-center justify-between px-[20px] relative size-full" data-name="Scrolling banner">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#fd354f] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[2] overflow-hidden whitespace-pre">{`Please be informed of the time and date of the new system updates. Immediate action may be required; for any questions, please contact IT department for more information.                     Please be informed of the time and date of the new system updates. Immediate action may be required; for any questions, please contact IT department for more information.`}</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[12px] relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(215,215,215,0.25)] shrink-0">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e71616] text-[12px] whitespace-nowrap">
          <p className="leading-[2]">Edit</p>
        </div>
      </div>
    </div>
  );
}