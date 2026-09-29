import React from 'react'
import BlurText from '../../utils/BlurText'

export interface BuildForSectionProps {
  id?: string
  variant?: 'clean' | 'banner'
  subtitle?: string
  title?: string
  titleColorClass?: string // e.g. 'text-[#B50404]' or 'text-[#D49B5A]'
  description?: string
  bgImage?: string
  bgImageAlt?: string
  className?: string
  DclassName?: string
}

export const BuildForSection: React.FC<BuildForSectionProps> = ({
  id = 'build-for',
  variant,
  subtitle = 'Designed for Living',
  title = 'Built for Business',
  titleColorClass = 'text-[#B50404]',
  description = "Garuda Gateway Commercial & Residential redefines urban living by integrating premium commercial spaces with well-planned residences. With strategic connectivity, contemporary design, and a thriving community, it's built for both success and comfort.",
  bgImage,
  bgImageAlt = 'Designed for Living, Built for Business',
  className = '',
  DclassName
}) => {
  // Determine variant automatically if not explicitly given
  const isBanner = variant === 'banner' || Boolean(bgImage)

  const bannerDescClass =
    DclassName ||
    'text-white/90 text-xs sm:text-sm md:text-base lg:text-2xl leading-relaxed max-w-xl font-normal drop-shadow-sm'

  const cleanDescClass =
    DclassName ||
    'text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl font-normal'

  if (isBanner && bgImage) {
    return (
      <section id={id} className={`py-12 md:py-20 px-4 sm:px-8 md:px-[5%] w-full bg-white flex justify-center ${className}`}>
        <div className="relative w-full  h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] xl:h-[620px] overflow-hidden shadow-2xl group bg-neutral-900">
          {/* Background Banner Image */}
          <img
            src={bgImage}
            alt={bgImageAlt}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
          />

          {/* Ambient Dark Gradient Overlays for High Contrast & Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/45 to-transparent pointer-events-none" />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" /> */}

          {/* Content Box Positioned Bottom-Left */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 md:p-12 lg:p-16">
            <BlurText
              text={subtitle}
              delay={25}
              animateBy="words"
              direction="bottom"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-semibold text-white tracking-tight leading-tight"
            />

            <BlurText
              text={title}
              delay={35}
              animateBy="words"
              direction="bottom"
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold ${titleColorClass} tracking-tight leading-tight mt-1 mb-2`}
            />

            <BlurText
              text={description}
              delay={15}
              animateBy="words"
              direction="bottom"
              className={bannerDescClass}
            />
          </div>
        </div>
      </section>
    )
  }

  // Clean layout (Image 2 style)
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-8 md:px-[5%] w-full bg-white flex justify-center ${className}`}>
      <div className="w-full">
        {/* Subtitle */}
        <BlurText
          text={subtitle}
          delay={25}
          animateBy="words"
          direction="bottom"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-gray-900 tracking-tight leading-tight"
        />

        {/* Main Highlight Title */}
        <BlurText
          text={title}
          delay={35}
          animateBy="words"
          direction="bottom"
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold ${titleColorClass} tracking-tight leading-tight mt-1 mb-6`}
        />

        {/* Description Paragraph */}
        <BlurText
          text={description}
          delay={15}
          animateBy="words"
          direction="bottom"
          className={cleanDescClass}
        />
      </div>
    </section>
  )
}

export default BuildForSection
