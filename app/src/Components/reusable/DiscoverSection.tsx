import React from 'react'
import BlurText from '../../utils/BlurText'

export interface DiscoverSectionProps {
  id?: string
  title?: string
  Highlighttitle?: string
  Highlighttitecolor?: string
  description?: string
  buttonText?: string
  buttonColor?: string
  imageSrc: string
  imageAlt?: string
  contactTargetId?: string
  onDownload?: () => void
  className?: string
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({
  id = 'discover',
  title = 'Discover the Complete Lifestyle',
  description = 'Explore every aspect of Lotus Serene Villas – Phase II through our comprehensive brochure. From the thoughtfully designed master plan and spacious villa configurations to premium amenities, architectural details, and community features, discover what makes this exclusive development a distinguished address crafted for refined and modern living.',
  buttonText = 'Download Brochure',
  buttonColor = '#B50404',
  imageSrc,
  Highlighttitle,
  Highlighttitecolor,
  imageAlt = 'Discover the complete lifestyle',
  contactTargetId = 'contact-cta',
  onDownload,
  className = ''
}) => {
  const handleAction = () => {
    if (onDownload) {
      onDownload()
      return
    }

    const contactSection = document.getElementById(contactTargetId)
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/contact'
    }
  }

  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-8 md:px-[5%] w-full ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <BlurText
              text={title}
              delay={30}
              animateBy="words"
              direction="bottom"
              className="text-3xl sm:text-4xl md:text-[38px] font-semibold leading-tight text-gray-900 tracking-tight"
            />
            <BlurText
              text={Highlighttitle}
              delay={30}
              animateBy="words"
              direction="bottom"
              className={`${Highlighttitecolor ??'text-gray-900'} text-3xl sm:text-4xl md:text-[38px] font-semibold leading-tight tracking-tight`}
            />
          </div>

          <div className="mb-8">
            <BlurText
              text={description}
              delay={20}
              animateBy="words"
              direction="bottom"
              className="text-[#666666] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            />
          </div>

          <div>
            <button
              onClick={handleAction}
              style={{ backgroundColor: buttonColor }}
              className="inline-flex items-center gap-2.5 hover:brightness-105 text-white px-8 py-3.5 rounded-lg text-sm sm:text-base font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider cursor-pointer"
            >
              <span>{buttonText}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Elevation Image */}
        <div className="w-full h-72 sm:h-96 md:h-[420px] lg:h-[460px] rounded-[4px] overflow-hidden shadow-xl bg-gray-100 group">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

export default DiscoverSection
