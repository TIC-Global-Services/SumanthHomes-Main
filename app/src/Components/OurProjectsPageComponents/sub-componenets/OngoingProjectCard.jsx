import React from 'react';
import { useNavigate } from 'react-router-dom';

export const OngoingProjectCard = ({
  id,
  badge = 'RECENT PROJECTS',
  theme = 'dark', // 'dark' | 'black' | 'light' | 'white'
  bgImage,
  miniHeader,
  mainHeader,
  description,
  logoImage,
  link,
  buttonText = 'KNOW MORE',
  onPrev,
  onNext,
}) => {
  const navigate = useNavigate();
  const isDark = theme === 'dark' || theme === 'black';

  const handleNavigate = (e) => {
    if (e) e.stopPropagation();
    if (link) {
      navigate(link);
    }
  };

  return (
    <div id={id} className="w-full relative select-none">
      {/* =========================================
          DESKTOP VERSION (Matches Desktop Screenshot)
          ========================================= */}
      <div className="hidden md:block relative w-full h-[440px] lg:h-[520px] xl:h-[580px] overflow-hidden bg-neutral-900 shadow-lg">
        {/* Main Background Image */}
        <div className="w-full h-full overflow-hidden">
          <img
            src={bgImage}
            alt={mainHeader}
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Top-Left Red Ribbon Badge */}
        {badge && (
          <div className="absolute top-0 left-0 bg-[#A60000] z-20 w-11 lg:w-12 h-44 lg:h-52 flex items-center justify-center shadow-lg">
            <span className="text-white font-manrope font-bold text-[10px] lg:text-xs tracking-[2.5px] uppercase whitespace-nowrap rotate-90 select-none">
              {badge}
            </span>
          </div>
        )}

        {/* Bottom-Right Overlay Area with Buttons + Themed Card */}
        <div className="absolute bottom-0 right-0 z-20 flex items-end">
          {/* Switcher Buttons (Stacked on the left of the card) */}
          <div className="flex flex-col flex-shrink-0">
            {/* Top Button - Diagonal Up-Right Arrow */}
            <button
              onClick={onPrev || handleNavigate}
              aria-label="Previous Project"
              className="w-10 h-10 lg:w-12 lg:h-12 bg-[#191919] hover:bg-[#252525] active:bg-[#A60000] border-b border-[#2d2d2d] flex items-center justify-center cursor-pointer transition-colors group"
            >
              <svg
                width="14"
                height="14"
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

            {/* Bottom Button - Diagonal Down-Left Arrow */}
            <button
              onClick={onNext || handleNavigate}
              aria-label="Next Project"
              className="w-10 h-10 lg:w-12 lg:h-12 bg-[#191919] hover:bg-[#252525] active:bg-[#A60000] flex items-center justify-center cursor-pointer transition-colors group"
            >
              <svg
                width="16"
                height="16"
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

          {/* Themed Overlay Content Box (Configured via theme: 'dark' | 'light') */}
          <div
            className={`w-[400px] lg:w-[470px] xl:w-[520px] px-8 py-8 lg:px-11 lg:py-10 flex flex-col justify-between transition-colors duration-300 ${
              isDark
                ? 'bg-black/90 lg:bg-[#111111]/95 text-white backdrop-blur-md shadow-2xl'
                : 'bg-white text-black shadow-xl'
            }`}
          >
            {/* Logo or Text Headers */}
            {logoImage ? (
              <div
                onClick={handleNavigate}
                className="w-full flex justify-center mb-4 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={logoImage}
                  alt={mainHeader}
                  className="h-16 lg:h-30 max-w-[280px] object-cover"
                />
              </div>
            ) : (
              <div className="mb-4">
                <p
                  className={`text-xs uppercase tracking-wider font-medium mb-1 font-manrope ${
                    isDark ? 'text-white/70' : 'text-black/70'
                  }`}
                >
                  {miniHeader}
                </p>
                <h3
                  className={`font-manrope font-bold text-2xl lg:text-3xl tracking-tight ${
                    isDark ? 'text-white' : 'text-[#191919]'
                  }`}
                >
                  {mainHeader}
                </h3>
              </div>
            )}

            {/* Description */}
            <p
              className={`font-manrope text-[12px] lg:text-[13px] leading-relaxed mb-6 text-left ${
                isDark ? 'text-white/85 font-light' : 'text-[#737373] font-normal'
              }`}
            >
              {description}
            </p>

            {/* Know More Action Button */}
            <button
              onClick={handleNavigate}
              className={`flex items-center gap-2 font-manrope font-bold text-xs uppercase tracking-wider cursor-pointer group self-start transition-colors ${
                isDark
                  ? 'text-white hover:text-[#B50404]'
                  : 'text-black hover:text-[#B50404]'
              }`}
            >
              <span>{buttonText}</span>
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
          MOBILE VERSION (Matches Mobile Card)
          ========================================= */}
      <div
        onClick={handleNavigate}
        className={`block md:hidden w-full max-w-lg mx-auto shadow-sm border overflow-hidden cursor-pointer transition-colors duration-300 ${
          isDark
            ? 'bg-[#141414] border-neutral-800 text-white'
            : 'bg-white border-neutral-100 text-black'
        }`}
      >
        {/* Top Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
          <img
            src={bgImage}
            alt={mainHeader}
            className="w-full h-full object-cover object-center"
          />

          {/* Top-Left Red Ribbon */}
          {badge && (
            <div className="absolute top-0 left-0 bg-[#A60000] z-10 w-9 h-36 flex items-center justify-center shadow-md">
              <span className="text-white font-manrope font-bold text-[10px] tracking-[2px] uppercase whitespace-nowrap rotate-90 select-none">
                {badge}
              </span>
            </div>
          )}

          {/* Overlaid Logo in Bottom-Center of Image */}
          {logoImage && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 w-full px-6 flex justify-center pointer-events-none">
              <img
                src={logoImage}
                alt={mainHeader}
                className="h-14 max-w-[180px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              />
            </div>
          )}
        </div>

        {/* Bottom Content Area */}
        <div className="px-5 py-6 sm:px-8 sm:py-8 flex flex-col items-start text-left">
          {/* Mini Header */}
          <p
            className={`font-manrope font-medium text-xs sm:text-sm mb-1.5 ${
              isDark ? 'text-white/70' : 'text-black'
            }`}
          >
            {miniHeader}
          </p>

          {/* Main Header */}
          <h2
            className={`font-manrope font-bold text-2xl sm:text-[28px] tracking-tight leading-tight uppercase mb-3 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            {mainHeader}
          </h2>

          {/* Description */}
          <p
            className={`font-manrope text-[11px] sm:text-sm leading-relaxed mb-6 ${
              isDark ? 'text-white/80 font-light' : 'text-[#737373] font-normal'
            }`}
          >
            {description}
          </p>

          {/* Action Button */}
          <div className="mt-auto pt-2">
            <span
              className={`flex items-center gap-2 font-manrope font-bold text-xs uppercase tracking-wider transition-colors ${
                isDark
                  ? 'text-white hover:text-[#B50404]'
                  : 'text-black hover:text-[#B50404]'
              }`}
            >
              <span>{buttonText}</span>
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
