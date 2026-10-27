import React, { useState, useEffect, useRef } from 'react'

// Tab Subcomponents
import {
  AmenitiesTab,
  MasterPlanTab,
  FloorPlansTab,
  SpecificationsTab,
  LocationTab,
  ImageZoomModal,
  CompassRose,
} from './tabs'

import type {
  FloorPlanSlide,
  SpecificationItem,
  LocationItem,
} from './tabs'

// Default Asset imports
import floorplan1 from '../../assets/img/OurProjectsSection/floor_plan-1.png'
import floorplan2 from '../../assets/img/OurProjectsSection/floor_plan-2.png'
import floorsInPlan1 from '../../assets/img/OurProjectsSection/floors-inthe-plan-1.png'
import floorsInPlan2 from '../../assets/img/OurProjectsSection/floors-inthe-plan-2.png'
import specificationImg from '../../assets/img/OurProjectsSection/specification.png'

// Specification Icon Assets
import internalFinishesIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/internal-finishes.png'
import windowsIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/windows.png'
import superStructuresIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/super-stuctures.png'
import foundationStructureIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/foundation-stucture.png'
import toiletIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/toilet.png'
import waterProofingIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/water-proofing.png'
import doorIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/door.png'
import liftsIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/lifts.png'
import sanitaryWearIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/sanitary-wear.png'
import grillsIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/grils.png'
import kitchenIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/kitchen.png'
import powerBackupIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/power-backup.png'
import staircaseRailingIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/staircase-railing.png'
import electricalsIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/electicals.png'
import flooringIcon from '../../assets/img/OurProjectsSection/urbascapes/specifications/flooring.png'

// Re-export subcomponent types for consumer convenience
export type { FloorPlanSlide, SpecificationItem, LocationItem }
export {
  AmenitiesTab,
  MasterPlanTab,
  FloorPlansTab,
  SpecificationsTab,
  LocationTab,
  ImageZoomModal,
  CompassRose,
}

export interface AmenitiesTabsSectionProps {
  id?: string
  tabs?: string[]
  initialTab?: string
  activeTabColor?: string
  amenitiesImage?: string
  /** Alias for amenitiesImage for consumer flexibility */
  amenitiesImg?: string
  masterPlanImage?: string
  masterPlanTitle?: string
  floorPlans?: FloorPlanSlide[]
  specifications?: SpecificationItem[]
  locationItems?: LocationItem[]
  mapEmbedUrl?: string
  mapUrl?: string
  className?: string
  specificationsTextColor?: string
  specificationsTitleColor?: string
  specificationsDescColor?: string
  specificationsCircleColor?: string
}

export const defaultFloorPlans: FloorPlanSlide[] = [
  {
    id: 1,
    title: 'Ground Floor Plan',
    mainImage: floorplan1,
    sideImage: floorsInPlan1,
    alt: 'Ground Floor Plan',
  },
  {
    id: 2,
    title: 'First Floor Plan',
    mainImage: floorplan2,
    sideImage: floorsInPlan2,
    alt: 'First Floor Plan',
  },
]

export const defaultSpecifications: SpecificationItem[] = [
  {
    id: 1,
    title: 'Internal Finishes',
    description: 'Smooth Plaster Finish With High-End Wall Putty, Finished With Good Quality Emulsion Paint.',
    icon: internalFinishesIcon,
  },
  {
    id: 2,
    title: 'Windows',
    description: 'Quality UPVC Frames And Windows With Good Quality Glass, Hardware And Slide Mesh Fitted.',
    icon: windowsIcon,
  },
  {
    id: 3,
    title: 'Super Structure',
    description: '9" Thick Solid AAC Blocks For External Walls And 4" Thick Solid AAC Blocks For Internal Walls.',
    icon: superStructuresIcon,
  },
  {
    id: 4,
    title: 'Foundation And Structure',
    description: 'RCC Framed Structure Designed To Withstand Wind And Seismic Loads.',
    icon: foundationStructureIcon,
  },
  {
    id: 5,
    title: 'Toilets',
    description: "Glazed Ceramic Tile Dado Upto 7' Height With Anti-Skid Tile Flooring For Enhanced Safety.",
    icon: toiletIcon,
  },
  {
    id: 6,
    title: 'Water Proofing',
    description: "Glazed Ceramic Tile Dado Upto 7' Height With Anti-Skid Tile Flooring For Enhanced Protection.",
    icon: waterProofingIcon,
  },
  {
    id: 7,
    title: 'Door',
    description: 'Teak Wood Frames With Melamine Polish. Flush Doors With Veneer On Both Sides, Standard Fittings And Locks.',
    icon: doorIcon,
  },
  {
    id: 8,
    title: 'Lifts',
    description: '4 High Speed Automatic Passenger Lifts Of Quality Make, Provided According To The Structural Planning.',
    icon: liftsIcon,
  },
  {
    id: 9,
    title: 'Sanitary-Ware & Plumbing',
    description: "Quality Western Style WC's, CP Fittings And Wash Basins, With Superior Quality PVC & CPVC Piping.",
    icon: sanitaryWearIcon,
  },
  {
    id: 10,
    title: 'Grills',
    description: 'M.S Safety Grills Provided For Windows, Offering Added Security And Protection.',
    icon: grillsIcon,
  },
  {
    id: 11,
    title: 'Security',
    description: '24/7 Security Provided At The Main Gate, With CCTV Surveillance Provided Across Common Areas.',
    iconSvg: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#8C6D58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
        <path d="M12 8v1" />
      </svg>
    ),
  },
  {
    id: 12,
    title: 'Kitchen',
    description: "Granite Platform With Stainless Steel Sink And Provisions For Water Purifier, Chimney And Exhaust. Glazed Ceramic Tile Dado Upto 2' Above The Platform.",
    icon: kitchenIcon,
  },
  {
    id: 13,
    title: 'Power Backup',
    description: 'Power Backup For Lifts, Water Supply And Common Areas Shall Be Provided With Generator Support.',
    icon: powerBackupIcon,
  },
  {
    id: 14,
    title: 'Staircase Railing',
    description: 'S.S Railing Is Provided For Staircase, While M.S Railing Is Provided For Balconies.',
    icon: staircaseRailingIcon,
  },
  {
    id: 15,
    title: 'Electrical',
    description: 'ISI Standard Concealed Copper Wiring In Conduits With Quality Modular Switches And Sockets. Split AC Provision Included.',
    icon: electricalsIcon,
  },
  {
    id: 16,
    title: 'Flooring',
    description: 'Vitrified Floor Tiles Of Sizes 1200mm X 600mm, 600mm X 600mm Or 800mm X 8mm Of Reputed Make Shall Be Used.',
    icon: flooringIcon,
  },
]

export const lotusSereneLocationData: LocationItem[] = [
  { name: 'Tirupati - Renigunta Road', dist: '200 Mts' },
  { name: 'Narayanadri Hospital', dist: '250 Mts' },
  { name: 'Ankura Hospital', dist: '750 Mts' },
  { name: 'New Tiruchanur Railway Station', dist: '1 Km' },
  { name: 'Chadalawada Educational Institutions', dist: '1 Km' },
  { name: 'Tirupati Central Bus Stand', dist: '3 Kms' },
  { name: 'Tirupati Main Railway Station', dist: '3.5 Kms' },
  { name: 'Tirupati International Airport', dist: '12 Kms' },
]

export const lotusSereneMapEmbedUrl =
  'https://www.openstreetmap.org/export/embed.html?bbox=79.4300%2C13.6100%2C79.4700%2C13.6450&layer=mapnik&marker=13.6264%2C79.4538'

export const lotusSereneMapUrl =
  'https://www.openstreetmap.org/?mlat=13.6264&mlon=79.4538#map=15/13.6264/79.4538'

export const defaultLocationData: LocationItem[] = lotusSereneLocationData

export const defaultTabsList = ['Amenities', 'Master Plan', 'Floor Plans', 'Specifications', 'Location']

/**
 * Unified AmenitiesTabsSection orchestrating modular tabs:
 * - AmenitiesTab
 * - MasterPlanTab
 * - FloorPlansTab
 * - SpecificationsTab
 * - LocationTab
 * with interactive ImageZoomModal lightbox
 */
export const AmenitiesTabsSection: React.FC<AmenitiesTabsSectionProps> = ({
  id = 'amenities-section',
  tabs = defaultTabsList,
  initialTab,
  activeTabColor = '#5A3A2E',
  amenitiesImage,
  amenitiesImg,
  masterPlanImage = specificationImg,
  masterPlanTitle = 'Master Plan Layout',
  floorPlans = defaultFloorPlans,
  specifications = defaultSpecifications,
  locationItems = defaultLocationData,
  mapEmbedUrl = lotusSereneMapEmbedUrl,
  mapUrl = lotusSereneMapUrl,
  className = '',
  specificationsTextColor,
  specificationsTitleColor,
  specificationsDescColor,
  specificationsCircleColor,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab || tabs[0] || 'Amenities')
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // Tab button refs for mobile auto-scroll slider
  const tabsContainerRef = useRef<HTMLDivElement>(null)
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Lightbox Modal State
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean
    imageUrl: string
    title: string
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  })

  // Keep activeTab valid if tabs prop changes dynamically
  useEffect(() => {
    if (!tabs.includes(activeTab)) {
      setActiveTab(tabs[0] || 'Amenities')
    }
  }, [tabs, activeTab])

  // Automatically scroll active tab into view on mobile
  useEffect(() => {
    const activeEl = tabButtonRefs.current[activeTab]
    if (activeEl && tabsContainerRef.current) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [activeTab])

  const openLightbox = (imageUrl: string, title: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
    })
  }

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <section
      id={id}
      className={`py-16 md:py-24 w-full ${className}`}
      
    >
      <div className="px-4 md:px-[5%] max-w-7xl mx-auto">
        {/* Scalable Tab Buttons (Slider on Mobile, Wrapped on Desktop) */}
        <div 
          className="relative w-full mb-8 md:mb-16 border-b-2 pb-6 md:pb-10"
          style={{ borderBottomColor: activeTabColor || '#CC1518' }}
        >
          <div
            ref={tabsContainerRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="flex items-center gap-2.5 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth py-1 px-1 md:px-0 md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  ref={(el) => {
                    tabButtonRefs.current[tab] = el
                  }}
                  onClick={() => {
                    setActiveTab(tab)
                    if (tab === 'Floor Plans') setCurrentSlide(0)
                  }}
                  style={isActive ? { backgroundColor: activeTabColor } : {}}
                  className={`flex-shrink-0 whitespace-nowrap px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                    isActive
                      ? 'text-white scale-105 shadow-md'
                      : 'bg-white text-gray-700 hover:text-black hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[400px]">
          {/* 1. Amenities Tab */}
          {activeTab === 'Amenities' && (
            <AmenitiesTab amenitiesImage={amenitiesImage || amenitiesImg} />
          )}

          {/* 2. Master Plan Tab */}
          {(activeTab === 'Master Plan' || activeTab === 'masterplace') && (
            <MasterPlanTab
              masterPlanImage={masterPlanImage}
              masterPlanTitle={masterPlanTitle}
              onOpenLightbox={openLightbox}
            />
          )}

          {/* 3. Floor Plans Tab */}
          {activeTab === 'Floor Plans' && (
            <FloorPlansTab
              floorPlans={floorPlans}
              currentSlide={currentSlide}
              onSlideChange={setCurrentSlide}
              onOpenLightbox={openLightbox}
              titleColor={activeTabColor}
            />
          )}

          {/* 4. Specifications Tab */}
          {activeTab === 'Specifications' && (
            <SpecificationsTab
              specifications={specifications}
              textColor={specificationsTextColor || activeTabColor}
              titleColor={specificationsTitleColor || activeTabColor}
              descriptionColor={specificationsDescColor || activeTabColor}
            />
          )}

          {/* 5. Location Tab */}
          {activeTab === 'Location' && (
            <LocationTab
              locationItems={locationItems}
              mapEmbedUrl={mapEmbedUrl}
              mapUrl={mapUrl}
              accentColor={activeTabColor}
            />
          )}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <ImageZoomModal
        isOpen={lightboxState.isOpen}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        onClose={closeLightbox}
      />
    </section>
  )
}

export default AmenitiesTabsSection
