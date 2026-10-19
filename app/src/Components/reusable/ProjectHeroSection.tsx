'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import BlurText from '../../utils/BlurText'

// Default Assets for Urbanscapes Hero
import defaultBanner from '../../assets/img/OurProjectsSection/project_hero_banner.png'
import defaultLogo from '../../assets/img/OurProjectsSection/urbanscapes_logo.png'

export type HeroLogoPosition = 'center' | 'bottom-center' | 'bottom-left' | 'top-center'

export interface HeroConfigItem {
  id?: string | number
  // Background & Overlay
  banner?: string
  bgImage?: string
  alt?: string
  overlayClassName?: string

  // Logo / Branding
  logo?: string
  logoAlt?: string
  logoWidth?: number | string
  logoHeight?: number | string
  logoClassName?: string
  logoPosition?: HeroLogoPosition

  // Title / Subtitle / Badge
  title?: string
  titleClassName?: string
  subtitle?: string
  subtitleClassName?: string
  badge?: string // e.g. "PHASE II"
  badgeClassName?: string

  // Bottom-Right Call to Action Button
  buttonText?: string
  buttonLink?: string
  route?: string // alias for buttonLink
  buttonBgColor?: string // e.g. '#623725' | '#154848' | '#C5161D'
  buttonTextColor?: string
  buttonClassName?: string
  showButton?: boolean
  onButtonClick?: () => void
}

export interface ProjectHeroSectionProps {
  id?: string
  data?: HeroConfigItem[] // Primary configuration passed as array of objects
  item?: HeroConfigItem // Optional single item config
  activeSlide?: number // If multiple items passed in data array
  className?: string

  // Flat prop overrides for extra flexibility
  banner?: string
  bgImage?: string
  alt?: string
  logo?: string
  logoPosition?: HeroLogoPosition
  title?: string
  subtitle?: string
  badge?: string
  buttonText?: string
  buttonLink?: string
  route?: string
  buttonBgColor?: string
  buttonTextColor?: string
  buttonClassName?: string
  showButton?: boolean
  onButtonClick?: () => void
}

export type HeroProps = ProjectHeroSectionProps

// Preset configurations for reference projects matching design specs
export const defaultHeroConfigs: HeroConfigItem[] = [
  // 1. Urbanscapes (Image 1: Center logo + Brown Button)
  {
    id: 'urbanscapes',
    banner: defaultBanner,
    alt: 'Urbanscapes Aerial View',
    logo: defaultLogo,
    logoPosition: 'center',
    buttonText: 'EXPLORE THE APARTMENTS',
    buttonLink: '#explore',
    buttonBgColor: '#623725',
  },
  // 2. Lotus Serene Villas (Image 2: Bottom-center golden lotus + Teal Button)
  {
    id: 'lotus-serene-villas',
    banner: '/lotus-vila/lotus-hero-banner.jpg',
    alt: 'Lotus Serene Villas Aerial View',
    logo: '/lotus-vilas-phase-2.png',
    logoPosition: 'bottom-center',
    badge: 'PHASE II',
    buttonText: 'EXPLORE THE VILLAS',
    buttonLink: '/lotus-villas-phase-2',
    buttonBgColor: '#154848',
  },
  // 3. Garuda Gateway (Image 3: Bottom-left title + Crimson Red Button)
  {
    id: 'garuda-gateway',
    banner: '/garuda-gateway/garuda-gateway-hero.jpg',
    alt: 'Garuda Gateway Commercial & Residential View',
    title: 'Garuda Gateway',
    logoPosition: 'bottom-left',
    buttonText: 'EXPLORE THE COMMERCIAL SPACES & RESIDENTIAL HOMES',
    buttonLink: '/garuda-gateway',
    buttonBgColor: '#C5161D',
  },
]

/**
 * Reusable ProjectHeroSection component
 * - Fully configurable via an array of objects passed as props (data prop)
 * - Supports logoPosition:
 *     - 'center' (Image 1: Urbanscapes center typography/logo)
 *     - 'bottom-center' (Image 2: Golden emblem + Phase II badge)
 *     - 'bottom-left' (Image 3: Garuda Gateway large bottom-left title)
 *     - 'top-center' (Legacy top offset)
 * - Bottom-right action button with configurable route/link, background color, and text
 */
export const ProjectHeroSection: React.FC<ProjectHeroSectionProps> = ({
  id = 'project-hero',
  data,
  item: singleItem,
  activeSlide = 0,
  className = '',

  // Flat overrides
  banner: flatBanner,
  bgImage: flatBgImage,
  alt: flatAlt,
  logo: flatLogo,
  logoPosition: flatLogoPosition,
  title: flatTitle,
  subtitle: flatSubtitle,
  badge: flatBadge,
  buttonText: flatButtonText,
  buttonLink: flatButtonLink,
  route: flatRoute,
  buttonBgColor: flatButtonBgColor,
  buttonTextColor: flatButtonTextColor,
  buttonClassName: flatButtonClassName,
  showButton: flatShowButton,
  onButtonClick: flatOnButtonClick,
}) => {
  // Resolve active configuration from array of objects or single item or defaults
  const activeConfig: HeroConfigItem =
    (data && data.length > 0 && (data[activeSlide] || data[0])) ||
    singleItem ||
    defaultHeroConfigs[0]

  // Merge config with flat props if provided
  const background = flatBanner || flatBgImage || activeConfig.banner || activeConfig.bgImage || defaultBanner
  const imageAlt = flatAlt || activeConfig.alt || 'Project Hero View'
  const overlayClass = activeConfig.overlayClassName || 'bg-black/30'

  const logoSrc = flatLogo !== undefined ? flatLogo : activeConfig.logo
  const logoAlt = activeConfig.logoAlt || 'Project Logo'
  const logoClass = activeConfig.logoClassName || ''
  const position: HeroLogoPosition = flatLogoPosition || activeConfig.logoPosition || 'center'

  const titleText = flatTitle !== undefined ? flatTitle : activeConfig.title
  const titleClass = activeConfig.titleClassName || ''
  const subtitleText = flatSubtitle !== undefined ? flatSubtitle : activeConfig.subtitle
  const subtitleClass = activeConfig.subtitleClassName || ''
  const badgeText = flatBadge !== undefined ? flatBadge : activeConfig.badge
  const badgeClass = activeConfig.badgeClassName || ''

  const btnText = flatButtonText || activeConfig.buttonText
  const btnLink = flatButtonLink || flatRoute || activeConfig.buttonLink || activeConfig.route
  const btnBg = flatButtonBgColor || activeConfig.buttonBgColor || '#623725'
  const btnTextColor = flatButtonTextColor || activeConfig.buttonTextColor || 'text-white'
  const btnClass = flatButtonClassName || activeConfig.buttonClassName || ''
  const showBtn =
    flatShowButton !== undefined
      ? flatShowButton
      : activeConfig.showButton !== undefined
      ? activeConfig.showButton
      : Boolean(btnText)
  const onBtnClick = flatOnButtonClick || activeConfig.onButtonClick

  const isHash = btnLink && btnLink.startsWith('#')
  const isExternal = btnLink && (btnLink.startsWith('http://') || btnLink.startsWith('https://'))

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHash && btnLink) {
      const targetId = btnLink.replace('#', '')
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({ behavior: 'smooth' })
      } else {
        e.preventDefault()
        window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
      }
    }
  }

  const buttonStyleClasses = `inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-4.5 font-semibold text-xs sm:text-sm md:text-base tracking-[0.12em] uppercase transition-all duration-300 hover:brightness-110 active:scale-[0.99] select-none cursor-pointer shadow-2xl ${btnTextColor} ${btnClass}`

  return (
    <section id={id} className={`relative w-full min-h-screen overflow-hidden bg-neutral-900 ${className}`}>
      {/* 1. Background Hero Image */}
      <img
        src={background}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
        loading="eager"
      />

      {/* 2. Gradient / Darkening Overlay */}
      <div className={`absolute inset-0 ${overlayClass} pointer-events-none`} />

      {/* 3. Branding Content based on logoPosition */}
      {/* A. Center Position (Image 1: Urbanscapes center typography/logo) */}
      {position === 'center' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          {logoSrc && (
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`max-w-[75vw] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[780px] w-auto h-auto object-contain select-none drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${logoClass}`}
            />
          )}

          {titleText && (
            <div className={`mt-4 ${titleClass}`}>
              <BlurText
                text={titleText}
                delay={30}
                animateBy="words"
                direction="bottom"
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-wide drop-shadow-lg"
              />
            </div>
          )}

          {subtitleText && (
            <p className={`mt-2 text-white/90 text-sm sm:text-base md:text-lg font-light drop-shadow ${subtitleClass}`}>
              {subtitleText}
            </p>
          )}

          {badgeText && (
            <span
              className={`inline-block mt-4 px-4 sm:px-5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/50 text-white bg-black/40 backdrop-blur-sm ${badgeClass}`}
            >
              {badgeText}
            </span>
          )}
        </div>
      )}

      {/* B. Bottom-Center Position (Image 2: Lotus Serene Villas golden emblem + Phase II badge) */}
      {position === 'bottom-center' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-12 sm:pb-16 md:pb-20 lg:pb-2 text-center px-4">
          {logoSrc && (
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`max-w-[70vw] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[560px] w-auto h-auto object-contain select-none drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02] ${logoClass}`}
            />
          )}

          {titleText && (
            <div className={`mt-3 ${titleClass}`}>
              <BlurText
                text={titleText}
                delay={30}
                animateBy="words"
                direction="bottom"
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#D4AF37] tracking-wider drop-shadow-lg"
              />
            </div>
          )}

          {badgeText && (
            <span
              className={`inline-block mt-3 px-4 sm:px-5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-widest border border-[#D4AF37] text-[#D4AF37] bg-black/40 backdrop-blur-sm shadow-md ${badgeClass}`}
            >
              {badgeText}
            </span>
          )}
        </div>
      )}

      {/* C. Bottom-Left Position (Image 3: Garuda Gateway large stylish text) */}
      {position === 'bottom-left' && (
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-end pb-12 sm:pb-16 md:pb-20 px-6 sm:px-10 md:px-[5%]">
          {logoSrc && (
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`max-w-[50vw] sm:max-w-[320px] md:max-w-[400px] w-auto h-auto object-contain select-none drop-shadow-2xl mb-4 ${logoClass}`}
            />
          )}

          {titleText && (
            <div className={`max-w-2xl sm:max-w-3xl ${titleClass}`}>
              <BlurText
                text={titleText}
                delay={40}
                animateBy="words"
                direction="bottom"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[86px] font-normal text-white tracking-tight drop-shadow-2xl font-sans"
              />
            </div>
          )}

          {subtitleText && (
            <p className={`text-white/80 text-sm sm:text-base md:text-lg mt-2 drop-shadow ${subtitleClass}`}>
              {subtitleText}
            </p>
          )}

          {badgeText && (
            <span
              className={`inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/40 text-white bg-black/30 backdrop-blur-sm ${badgeClass}`}
            >
              {badgeText}
            </span>
          )}
        </div>
      )}

      {/* D. Top-Center Position (Legacy offset) */}
      {position === 'top-center' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32 text-center px-4">
          {logoSrc && (
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`max-w-[75vw] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] w-auto h-auto object-contain select-none drop-shadow-2xl ${logoClass}`}
            />
          )}
          {titleText && (
            <div className={`mt-4 ${titleClass}`}>
              <BlurText text={titleText} delay={30} animateBy="words" direction="bottom" />
            </div>
          )}
        </div>
      )}

      {/* 4. Bottom-Right Call to Action Button */}
      {showBtn && btnText && (
        <div className="absolute bottom-0 right-0 z-20">
          {onBtnClick ? (
            <button
              type="button"
              onClick={onBtnClick}
              style={{ backgroundColor: btnBg }}
              className={buttonStyleClasses}
            >
              <span>{btnText}</span>
            </button>
          ) : isExternal ? (
            <a
              href={btnLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: btnBg }}
              className={buttonStyleClasses}
            >
              <span>{btnText}</span>
            </a>
          ) : isHash ? (
            <a
              href={btnLink}
              onClick={handleHashClick}
              style={{ backgroundColor: btnBg }}
              className={buttonStyleClasses}
            >
              <span>{btnText}</span>
            </a>
          ) : (
            <Link
              to={btnLink || '#'}
              style={{ backgroundColor: btnBg }}
              className={buttonStyleClasses}
            >
              <span>{btnText}</span>
            </Link>
          )}
        </div>
      )}
    </section>
  )
}

export default ProjectHeroSection
