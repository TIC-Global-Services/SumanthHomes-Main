import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export const OngoingProjectCard = ({
  badge = 'RECENT  PROJECTS',
  bgImage,
  miniHeader,
  mainHeader,
  description,
  logoImage,
  link,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onClick={handleCardClick}
      className="group w-full bg-white shadow-sm hover:shadow-xl border border-neutral-100 flex flex-col cursor-pointer transition-all duration-300 overflow-hidden"
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900">
        <img
          src={bgImage}
          alt={mainHeader}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top-Left Red Ribbon Badge */}
        {badge && (
          <div className="absolute top-0 left-0 bg-[#A60000] z-10 w-9 sm:w-11 h-36 sm:h-44 flex items-center justify-center shadow-md">
            <span className="text-white font-manrope font-bold text-[10px] sm:text-xs tracking-tight uppercase whitespace-nowrap rotate-90 select-none">
              {badge}
            </span>
          </div>
        )}

        {/* Overlaid Logo in Bottom-Center of Image */}
        {logoImage && (
          <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 w-full px-6 flex justify-center pointer-events-none">
            <img
              src={logoImage}
              alt={mainHeader}
              className="h-14 sm:h-18 max-w-[180px] sm:max-w-[220px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="bg-white px-5 py-6 sm:px-7 sm:py-8 flex flex-col items-start text-left flex-grow">
        {/* Mini Header */}
        <p className="text-black font-manrope font-medium text-xs sm:text-sm mb-1.5">
          {miniHeader}
        </p>

        {/* Main Header */}
        <h2 className="text-black font-manrope font-bold text-2xl sm:text-[28px] tracking-tight leading-tight uppercase mb-3">
          {mainHeader}
        </h2>

        {/* Description */}
        <p className="text-black font-manrope font-normal text-[10px] sm:text-sm tracking-tight leading-[1.2] mb-6">
          {description}
        </p>

        {/* Explore Project Action Button */}
        <div className="mt-auto pt-2">
          <span className="flex items-center gap-2 text-black font-manrope font-bold text-xs uppercase tracking-wider group-hover:text-[#B50404] transition-colors">
            <span>EXPLORE PROJECT</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
    </motion.div>
  );
};
