<div
        className="absolute left-[24px] top-[55px] z-50 backdrop-blur-[35px] bg-[rgba(255,255,255,0.75)] rounded-bl-[12px] rounded-br-[12px] p-[20px] inline-grid gap-x-[12px] gap-y-[8px]"
        style={{
          gridTemplateColumns: showSubItems ? "220px 220px" : "220px fit-content(100%)",
          gridTemplateRows: "repeat(9, 36px)",
        }}
      >
        {/* Row 1: Headers */}
        <div className="col-start-1 row-start-1 self-stretch justify-self-stretch rounded-[5px]">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="flex items-start p-[4px] size-full">
              <p className="font-['Poppins',sans-serif] text-[#6e6e6e] text-[14px] uppercase whitespace-nowrap" style={{ fontWeight: 400, lineHeight: "20px" }}>
                Featured Apps
              </p>
            </div>
          </div>
        </div>

        <div className="col-start-2 row-start-1 self-stretch justify-self-stretch rounded-[5px]">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="flex items-start p-[4px] size-full">
              <p className="font-['Poppins',sans-serif] text-[#6e6e6e] text-[14px] uppercase whitespace-nowrap" style={{ fontWeight: 400, lineHeight: "20px" }}>
                {showSubItems ? activeApp!.name : "Coming Soon"}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Apps - Column 1, Rows 2-9 */}
        {featuredApps.map((app, index) => {
          const isActive = activeIndex === index;
          const isSelected = selectedIndex === index;
          return (
            <button
              key={app.name}
              className={`col-start-1 self-stretch justify-self-stretch relative transition-colors cursor-pointer ${
                isActive || isSelected ? "bg-[#e4edf9]" : ""
              }`}
              style={{ gridRowStart: index + 2 }}
              onMouseEnter={() => {
                setHoveredIndex(index);
                if (selectedIndex !== null && selectedIndex !== index) {
                  setSelectedIndex(null);
                }
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (app.subItems && app.subItems.length > 0) {
                  setSelectedIndex(selectedIndex === index ? null : index);
                }
              }}
            >
              <div className="flex flex-row items-center overflow-clip size-full">
                <div className="flex gap-[4px] items-center p-[4px] size-full">
                  <MenuIcon svgPath={app.svgPath} id={`featured_${index}`} />
                  <p className="font-['Poppins',sans-serif] text-[#1c1b1f] text-[14px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "20px" }}>
                    {app.name}
                  </p>
                </div>
              </div>
              {/* Blue left border stroke on hover/selected */}
              {(isActive || isSelected) && (
                <div
                  aria-hidden="true"
                  className="absolute border-[#0b8ef0] border-l-2 border-solid inset-[0_0_0_-2px] pointer-events-none"
                />
              )}
            </button>
          );
        })}

        {/* Right column content */}
        {showSubItems
          ? /* Sub-items for active app */
            activeApp!.subItems!.map((subItem, index) => (
              <button
                key={subItem}
                className="col-start-2 self-stretch justify-self-stretch rounded-[4px] hover:bg-black/5 transition-colors cursor-pointer"
                style={{ gridRowStart: index + 2 }}
              >
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="flex items-center p-[4px] size-full">
                    <p className="font-['Poppins',sans-serif] text-[#1c1b1f] text-[14px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "20px" }}>
                      {subItem}
                    </p>
                  </div>
                </div>
              </button>
            ))
          : /* Coming Soon Apps - default state */
            comingSoonApps.map((app, index) => (
              <div
                key={app.name}
                className="col-start-2 self-stretch justify-self-stretch rounded-[4px] opacity-25"
                style={{ gridRowStart: index + 2 }}
              >
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="flex gap-[4px] items-center p-[4px] size-full">
                    <MenuIcon svgPath={app.svgPath} id={`coming_${index}`} />
                    <p className="font-['Poppins',sans-serif] text-[#1c1b1f] text-[14px] whitespace-nowrap" style={{ fontWeight: 500, lineHeight: "20px" }}>
                      {app.name}
                    </p>
                  </div>
                </div>
              </div>
            ))
        }
      </div>