import { useState, useEffect, useCallback } from "react";
import svgPaths from "./svg-f8rftpwqwc";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  effectiveDate: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset to 0 if current slide is out of bounds after reorder
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [slides.length, currentSlide]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 6000);
    return () => clearInterval(timer);
  }, [goToNext]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
      {/* Slides container */}
      <div className="relative w-full">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: idx === currentSlide ? 1 : 0,
              pointerEvents: idx === currentSlide ? "auto" : "none",
              position: idx === currentSlide ? "relative" : "absolute",
              zIndex: idx === currentSlide ? 1 : 0,
            }}
          >
            <div className="backdrop-blur-[12.5px] bg-[rgba(249,249,249,0.75)] flex flex-col w-full h-[500px]">
              {/* Main content row */}
              <div className="flex gap-[40px] items-center px-[50px] py-[20px] flex-1 min-h-0">
                {/* Left: text content */}
                <div className="flex flex-[1_0_0] flex-col items-start justify-between min-w-0 self-stretch">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px] w-full">
                    <p
                      className="capitalize text-black text-[16px] w-full"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        lineHeight: "normal",
                      }}
                    >
                      {slide.title}
                    </p>
                    <p
                      className="text-black text-[14px] w-full"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        lineHeight: "normal",
                      }}
                    >
                      {slide.description}
                    </p>
                  </div>
                  {/* Date pinned to bottom */}
                  <p
                    className="text-black text-[12px] whitespace-nowrap"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                  >
                    Effective date: {slide.effectiveDate}
                  </p>
                </div>

                {/* Right: image */}
                <div className="flex-[1_0_0] min-w-0 relative rounded-[16px] overflow-hidden aspect-[16/9]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                  />
                </div>
              </div>

              {/* Dots indicator — inside the slide at the bottom */}
              <div className="flex items-center justify-center gap-6 py-3">
                {slides.map((s, dotIdx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`size-[8px] rounded-full transition-colors cursor-pointer ${
                      dotIdx === currentSlide ? "bg-[#1D7FF6]" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={goToNext}
        className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[24px] flex items-center justify-center z-10 cursor-pointer"
        aria-label="Next slide"
      >
        <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <mask height="24" id="mask_chev_r_new" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" width="24" />
          </mask>
          <g mask="url(#mask_chev_r_new)">
            <path d={svgPaths.pa1eb970} fill="#1C1B1F" />
          </g>
        </svg>
      </button>

      {/* Left arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-[14px] top-1/2 -translate-y-1/2 size-[24px] flex items-center justify-center z-10 cursor-pointer"
        aria-label="Previous slide"
      >
        <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <mask height="24" id="mask_chev_l_new" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" width="24" />
          </mask>
          <g mask="url(#mask_chev_l_new)">
            <path d={svgPaths.pa1eb970} fill="#1C1B1F" transform="rotate(180 12 12)" />
          </g>
        </svg>
      </button>
    </div>
  );
}