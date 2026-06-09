import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";

function Helper() {
  return (
    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#475467] text-[16px] w-full">
      <p className="leading-[normal]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center pt-[20px] relative size-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[10px] isolate items-start pb-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full z-[2]">
            <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[#0c111d] text-[20px] w-[163px]">
                <p>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0.16] not-italic">Announcement</span>
                  <span className="leading-[0.16]">{` 1`}</span>
                </p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[#123356] text-[16px] text-center whitespace-nowrap">
                <EditOutlinedIcon style={{ fontSize: 16, color: '#123356' }} />
              </div>
            </div>
            <Helper />
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-black whitespace-nowrap z-[1]">
            <p className="leading-[normal]">Posting period: 02/12/2025 - 03/12/2025</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] isolate items-start pb-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full z-[2]">
            <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[22px] justify-center relative shrink-0 text-[#0c111d] text-[20px] w-[166px]">
                <p>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0.16] not-italic">Announcement</span>
                  <span className="leading-[0.16]">{` 2`}</span>
                </p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[#123356] text-[16px] text-center whitespace-nowrap">
                <EditOutlinedIcon style={{ fontSize: 16, color: '#123356' }} />
              </div>
            </div>
            <Helper />
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-black whitespace-nowrap z-[1]">
            <p className="leading-[normal]">Posting period: 02/12/2025 - 03/12/2025</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[30px] relative shrink-0 w-[250px]">
        <div className="content-stretch flex gap-[20px] items-center justify-center leading-[0] not-italic overflow-clip relative rounded-[inherit] size-full text-[#1d7afc] whitespace-nowrap">
          <div className="flex flex-col justify-center relative shrink-0 text-[24px]">
            <AddIcon style={{ fontSize: 24, color: '#1d7afc' }} />
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px]">
            <p className="leading-[normal]">Add another banner</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#1d7afc] border-b-2 border-solid inset-[0_0_-2px_0] pointer-events-none" />
      </div>
    </div>
  );
}