import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurText from '../../utils/BlurText'

export interface DiscoverSectionProps {
  id?: string
  title?: string
  Highlighttitle?: string
  Highlighttitecolor?: string
  description?: string
  buttonText?: string
  buttonColor?: string
  buttonTextColor?: string
  buttonClassName?: string
  imageSrc: string
  imageAlt?: string
  contactTargetId?: string
  contactUrl?: string
  brochureUrl?: string
  document?: string
  documentUrl?: string
  onButtonClick?: () => void
  onDownload?: () => void
  className?: string
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({
  id = 'discover',
  title = 'Discover the Complete Lifestyle',
  description = 'Explore every aspect of Lotus Serene Villas – Phase II through our comprehensive brochure. From the thoughtfully designed master plan and spacious villa configurations to premium amenities, architectural details, and community features, discover what makes this exclusive development a distinguished address crafted for refined and modern living.',
  buttonText = 'Download Brochure',
  buttonColor = '#B50404',
  buttonTextColor = '#ffffff',
  buttonClassName = '',
  imageSrc,
  Highlighttitle,
  Highlighttitecolor,
  imageAlt = 'Discover the complete lifestyle',
  contactTargetId = 'contact-cta',
  contactUrl = '/contact',
  brochureUrl,
  document: documentProp,
  documentUrl,
  onButtonClick,
  onDownload,
  className = ''
}) => {
  const navigate = useNavigate()
  const activeBrochure = brochureUrl || documentUrl || documentProp

  // Brochure button click handler matching ExploreDetailsSection
  const handleBrochureClick = () => {
    if (onDownload) {
      onDownload()
      return
    }
    if (onButtonClick) {
      onButtonClick()
      return
    }
    if (activeBrochure) {
      window.open(activeBrochure, '_blank')
      return
    }

    const contactSection =
      document.getElementById(contactTargetId) ||
      document.getElementById('contact-cta') ||
      document.getElementById('contact') ||
      document.getElementById('enquire')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(contactUrl)
    }
  }

  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-8 md:px-[5%] w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <BlurText
              text={title}
              delay={30}
              animateBy="words"
              direction="bottom"
              className="text-2xl sm:text-2xl lg:text-[32px] font-semibold text-gray-900 tracking-tight"
            />
            <BlurText
              text={Highlighttitle}
              delay={30}
              animateBy="words"
              direction="bottom"
              className="text-2xl sm:text-2xl lg:text-[48px] font-semibold leading-none text-gray-900 tracking-tight mt-2"
              style={{ color: Highlighttitecolor }}
            />
          </div>

          <div className="mb-8">
            <BlurText
              text={description}
              delay={20}
              animateBy="words"
              direction="bottom"
              className="text-[#666666] text-sm sm:text-sm lg:text-lg leading-[1.2] lg:leading-relaxed max-w-xl"
            />
          </div>

          <div>
            <button
              onClick={handleBrochureClick}
              style={{ backgroundColor: buttonColor, color: buttonTextColor }}
              className={`inline-flex items-center gap-2.5 hover:brightness-105 px-8 py-3.5 rounded-lg text-sm lg:text-base font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider cursor-pointer ${buttonClassName}`}
            >
              <span>{buttonText}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Elevation Image */}
        <div className="w-full h-72 sm:h-96 md:h-[350px] lg:h-[460px] overflow-hidden shadow-xl bg-gray-100 group">
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
