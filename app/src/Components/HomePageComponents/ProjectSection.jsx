import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useSwipeable } from "react-swipeable";
import BlurText from "../../utils/BlurText";

import Prj1BgImage from "../../assets/img/OurProjectsSection/arialDayView.jpg";
import Prj2BgImage from "../../assets/img/OurProjectsPage/elevation8k.jpg";
import Logo1 from "../../assets/img/OurProjectsSection/lotus_serene_villas.png";
import Logo2Dark from "../../assets/img/OurProjectsSection/urbanscapes_logo.png";
import Logo2Brown from "../../assets/img/OurProjectsSection/urbanscapes_brown_logo.png";

const projects = [
  {
    id: "villa1",
    badgeDesktop: "NEW LAUNCH",
    badgeMobile: "RECENT PROJECTS",
    miniHeader: "Premium Living Spaces",
    mainHeader: "LOTUS SERENE VILLAS",
    description:
      "Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati.",
    bgImage: Prj1BgImage,
    logoDark: Logo1,
    logoLight: Logo1,
    link: "/lotus-villas-phase-2"
  },
  {
    id: "villa2",
    badgeDesktop: "ONGOING",
    badgeMobile: "RECENT PROJECTS",
    miniHeader: "A work in motion",
    mainHeader: "URBANSCAPES",
    description:
      "Urbanscapes is a contemporary Hi-Rise Building in Tirupati. We aim to build a beautiful 2 & 3 BHK gated community with fully loaded amenities.",
    bgImage: Prj2BgImage,
    logoDark: Logo2Dark,
    logoLight: Logo2Brown,
    link: "/urbanscapes"
  }
];

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const isAnimating = useRef(false);

  const desktopCardRef = useRef(null);
  const desktopImgRef = useRef(null);
  const mobileCardRef = useRef(null);

  const currentProject = projects[currentIndex];

  const animateSwitch = (newIndex) => {
    if (isAnimating.current || newIndex === currentIndex) return;
    isAnimating.current = true;

    // Timeline for desktop & mobile
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      }
    });

    const targets = [desktopCardRef.current, desktopImgRef.current, mobileCardRef.current].filter(Boolean);

    tl.to(targets, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(newIndex);
      }
    }).to(targets, {
      opacity: 1,
      duration: 0.35,
      ease: "power2.out"
    });
  };

  const nextProject = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    animateSwitch(nextIdx);
  };

  const prevProject = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    animateSwitch(prevIdx);
  };

  // Mobile swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextProject(),
    onSwipedRight: () => prevProject(),
    trackMouse: true
  });

  return (
    <section id="prj" className="w-full mb-16 md:mb-28 select-none">
      {/* Section Title */}
      <div className="text-center mb-6 md:mb-10">
        <BlurText
          text="OUR PROJECTS"
          animateBy="words"
          direction="bottom"
          className="text-[#B50404] font-manrope font-semibold text-2xl md:text-3xl xl:text-[32px] tracking-[0.5px] md:tracking-tight flex justify-center uppercase"
        />
      </div>

      {/* =========================================
          DESKTOP VERSION (Matches Desktop Image 1)
          ========================================= */}
      <div className="hidden md:block relative w-full h-[520px] lg:h-[600px] xl:h-[660px] overflow-hidden bg-neutral-900 shadow-xl">
        {/* Main Background Image */}
        <div ref={desktopImgRef} className="w-full h-full">
          <img
            src={currentProject.bgImage}
            alt={currentProject.mainHeader}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Top-Left Red Ribbon */}
        <div className="absolute top-0 left-0 bg-[#A60000] z-20 w-11 lg:w-12 h-48 lg:h-56 flex items-center justify-center shadow-lg">
          <span className="text-white font-manrope font-bold text-[11px] lg:text-xs tracking-[2.5px] uppercase whitespace-nowrap rotate-90 select-none">
            {currentProject.badgeDesktop}
          </span>
        </div>

        {/* Bottom-Right Overlay Area with Buttons + Dark Card */}
        <div className="absolute bottom-0 right-0 z-20 flex items-end">
          {/* Switcher Buttons (Stacked on the left of the dark card) */}
          <div className="flex flex-col flex-shrink-0">
            {/* Next Project (Diagonal Up-Right Arrow) */}
            <button
              onClick={nextProject}
              aria-label="Next Project"
              className="w-12 h-12 lg:w-14 lg:h-14 bg-[#191919] hover:bg-[#252525] active:bg-[#A60000] border-b border-[#2d2d2d] flex items-center justify-center cursor-pointer transition-colors group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:scale-110"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0008 0.625C15.0008 0.45924 14.9349 0.300269 14.8177 0.183058C14.7005 0.0658481 14.5415 0 14.3758 0H6.87579C6.71003 0 6.55106 0.0658481 6.43385 0.183058C6.31664 0.300269 6.25079 0.45924 6.25079 0.625C6.25079 0.79076 6.31664 0.949731 6.43385 1.06694C6.55106 1.18415 6.71003 1.25 6.87579 1.25H12.867L0.183289 13.9325C0.125179 13.9906 0.0790843 14.0596 0.0476354 14.1355C0.0161866 14.2114 0 14.2928 0 14.375C0 14.4572 0.0161866 14.5386 0.0476354 14.6145C0.0790843 14.6904 0.125179 14.7594 0.183289 14.8175C0.241399 14.8756 0.310386 14.9217 0.38631 14.9532C0.462234 14.9846 0.54361 15.0008 0.625789 15.0008C0.707969 15.0008 0.789344 14.9846 0.865269 14.9532C0.941193 14.9217 1.01018 14.8756 1.06829 14.8175L13.7508 2.13375V8.125C13.7508 8.29076 13.8166 8.44973 13.9338 8.56694C14.0511 8.68415 14.21 8.75 14.3758 8.75C14.5415 8.75 14.7005 8.68415 14.8177 8.56694C14.9349 8.44973 15.0008 8.29076 15.0008 8.125V0.625Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Prev Project (Diagonal Down-Left Arrow) */}
            <button
              onClick={prevProject}
              aria-label="Previous Project"
              className="w-12 h-12 lg:w-14 lg:h-14 bg-[#191919] hover:bg-[#252525] active:bg-[#A60000] flex items-center justify-center cursor-pointer transition-colors group"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:scale-110"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 16.8748C2.5 17.0406 2.56585 17.1995 2.68306 17.3168C2.80027 17.434 2.95924 17.4998 3.125 17.4998H10.625C10.7908 17.4998 10.9497 17.434 11.0669 17.3168C11.1842 17.1995 11.25 17.0406 11.25 16.8748C11.25 16.7091 11.1842 16.5501 11.0669 16.4329C10.9497 16.3157 10.7908 16.2498 10.625 16.2498H4.63375L17.3175 3.56731C17.4349 3.44995 17.5008 3.29078 17.5008 3.12481C17.5008 2.95884 17.4349 2.79967 17.3175 2.68231C17.2001 2.56495 17.041 2.49902 16.875 2.49902C16.709 2.49902 16.5499 2.56495 16.4325 2.68231L3.75 15.3661V9.37481C3.75 9.20905 3.68415 9.05008 3.56694 8.93287C3.44973 8.81566 3.29076 8.74981 3.125 8.74981C2.95924 8.74981 2.80027 8.81566 2.68306 8.93287C2.56585 9.05008 2.5 9.20905 2.5 9.37481V16.8748Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Dark Overlay Content Box */}
          <div
            ref={desktopCardRef}
            className="w-[420px] lg:w-[480px] xl:w-[520px] bg-black/85 lg:bg-black/90 backdrop-blur-md px-8 py-8 lg:px-11 lg:py-10 flex flex-col justify-between"
          >
            {/* Logo or Main Header */}
            {currentProject.logoDark ? (
              <div
                onClick={() => navigate(currentProject.link)}
                className="w-full flex justify-center mb-4 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={currentProject.logoDark}
                  alt={currentProject.mainHeader}
                  className="h-20 lg:h-30 w-[150px] object-cover"
                />
              </div>
            ) : (
              <div className="mb-4">
                <BlurText
                  key={`mini-${currentProject.id}`}
                  text={currentProject.miniHeader}
                  delay={50}
                  animateBy="words"
                  direction="bottom"
                  className="text-white/70 text-xs uppercase tracking-wider font-medium mb-1"
                />
                <BlurText
                  key={`main-${currentProject.id}`}
                  text={currentProject.mainHeader}
                  delay={80}
                  animateBy="words"
                  direction="bottom"
                  className="text-white font-manrope font-bold text-2xl lg:text-3xl tracking-tight"
                />
              </div>
            )}

            {/* Description */}
            <BlurText
              key={`desc-${currentProject.id}`}
              text={currentProject.description}
              delay={20}
              animateBy="words"
              direction="bottom"
              className="text-white/85 font-manrope font-light text-[13px] lg:text-[14px] leading-relaxed mb-6 text-left"
            />

            {/* Explore Projects Button */}
            <button
              onClick={() => navigate(currentProject.link)}
              className="flex items-center gap-2 text-white font-manrope font-bold text-xs lg:text-[13px] uppercase tracking-wider hover:text-[#B50404] transition-colors cursor-pointer group self-start"
            >
              <span>EXPLORE PROJECTS</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE VERSION (Matches Mobile Image 2)
          ========================================= */}
      <div {...swipeHandlers} className="block md:hidden w-full max-w-lg mx-auto bg-white shadow-sm border border-neutral-100">
        <div ref={mobileCardRef} className="w-full flex flex-col">
          {/* Top Image Container */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
            <img
              src={currentProject.bgImage}
              alt={currentProject.mainHeader}
              className="w-full h-full object-cover object-center"
            />

            {/* Top-Left Red Ribbon */}
            <div className="absolute top-0 left-0 bg-[#A60000] z-10 w-9 h-36 flex items-center justify-center shadow-md">
              <span className="text-white font-manrope font-bold text-[10px] tracking-[2px] uppercase whitespace-nowrap rotate-90 select-none">
                {currentProject.badgeMobile}
              </span>
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="bg-white px-5 py-6 sm:px-8 sm:py-8 flex flex-col items-start text-left">
            {/* Mini Header */}
            <p className="text-[#191919] font-medium text-xs sm:text-sm mb-1.5 font-manrope">
              {currentProject.miniHeader}
            </p>

            {/* Main Header */}
            <h2 className="text-[#191919] font-manrope font-bold text-2xl sm:text-[28px] tracking-tight leading-tight uppercase mb-3">
              {currentProject.mainHeader}
            </h2>

            {/* Description */}
            <p className="text-[#737373] font-manrope font-normal text-xs sm:text-sm leading-relaxed mb-6">
              {currentProject.description}
            </p>

            {/* Explore Project Action Button */}
            <button
              onClick={() => navigate(currentProject.link)}
              className="flex items-center gap-2 text-black font-manrope font-bold text-xs uppercase tracking-wider hover:text-[#B50404] transition-colors cursor-pointer group"
            >
              <span>EXPLORE PROJECT</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Carousel Indicators / Controls */}
        <div className="flex items-center justify-between px-5 pb-5 pt-1 border-t border-neutral-100">
          <div className="flex items-center gap-1.5">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => animateSwitch(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-6 bg-[#B50404]" : "w-1.5 bg-neutral-300"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              aria-label="Previous"
              className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-700"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextProject}
              aria-label="Next"
              className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-700"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;