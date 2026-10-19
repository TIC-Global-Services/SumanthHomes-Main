import React, { useState } from 'react'
import { CompassRose } from './CompassRose'

export interface FloorPlanSlide {
  id: string | number
  title: string
  mainImage: string
  sideImage?: string
  alt?: string
}

export interface FloorPlansTabProps {
  floorPlans?: FloorPlanSlide[]
  currentSlide?: number
  onSlideChange?: (index: number) => void
  onOpenLightbox?: (imageUrl: string, title: string) => void
  titleColor?: string
  className?: string
}

/**
 * Floor Plans Tab Component (Slider with 80% Main Plan + 20% Side Plan + Compass + Zoom)
 */
export const FloorPlansTab: React.FC<FloorPlansTabProps> = ({
  floorPlans = [],
  currentSlide: controlledSlide,
  onSlideChange,
  onOpenLightbox,
  titleColor,
  className = '',
}) => {
  const [internalSlide, setInternalSlide] = useState<number>(0)
  const isControlled = typeof controlledSlide === 'number'
  const activeIndex = isControlled ? controlledSlide : internalSlide

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalSlide(newIndex)
    }
    if (onSlideChange) {
      onSlideChange(newIndex)
    }
  }

  const handlePrevSlide = () => {
    if (floorPlans.length === 0) return
    const prev = activeIndex === 0 ? floorPlans.length - 1 : activeIndex - 1
    handleIndexChange(prev)
  }

  const handleNextSlide = () => {
    if (floorPlans.length === 0) return
    const next = activeIndex === floorPlans.length - 1 ? 0 : activeIndex + 1
    handleIndexChange(next)
  }

  const currentFloorPlan = floorPlans[activeIndex] || floorPlans[0]

  if (!currentFloorPlan) return null

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Floor Plan Title */}
      <h2
        style={titleColor ? { color: titleColor } : undefined}
        className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#5A3A2E] mb-4 text-center tracking-tight"
      >
        {currentFloorPlan.title}
      </h2>

      {/* Floor Plan Card Container */}
      <div className="relative max-w-6xl w-full p-4 sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Main Floor Plan Image (80% Width) */}
          <div className="w-full lg:w-[80%] flex items-center justify-center relative min-h-[320px] sm:min-h-[420px]  overflow-hidden group">
            <img
              src={currentFloorPlan.mainImage}
              alt={currentFloorPlan.alt || currentFloorPlan.title}
              onClick={() => onOpenLightbox?.(currentFloorPlan.mainImage, currentFloorPlan.title)}
              className="w-full h-auto max-h-[520px] object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
            />

            {/* Expand & Zoom Button (Bottom Right of Main Plan) */}
            {onOpenLightbox && (
              <button
                onClick={() => onOpenLightbox(currentFloorPlan.mainImage, currentFloorPlan.title)}
                aria-label="Expand and zoom floor plan"
                title="Expand & zoom in/out"
                className="absolute bottom-3 right-3 p-2.5 bg-white/95 hover:bg-white text-gray-800 rounded-lg shadow-md border border-gray-200 transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </button>
            )}
          </div>

          {/* Side Panel (20% Width) with Compass & Floors In Plan */}
          <div className="w-full lg:w-[20%] flex flex-row lg:flex-col justify-between items-center py-2 px-2 border-t lg:border-t-0 lg:border-l border-gray-100">
            {/* Compass Rose */}
            <div className="w-1/2 lg:w-full flex justify-center items-center">
              <CompassRose />
            </div>

            {/* Floors in the Plan Side Graphic */}
            {currentFloorPlan.sideImage && (
              <div className="w-1/2 lg:w-full flex justify-center items-center mt-0 lg:mt-4">
                <img
                  src={currentFloorPlan.sideImage}
                  alt="Floors in Plan"
                  className="w-full max-w-[150px] sm:max-w-[170px] h-auto object-contain drop-shadow-sm select-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slider Arrows (Left / Right Navigation matching reference) */}
      {floorPlans.length > 1 && (
        <div className="flex items-center justify-center gap-8 mt-8 sm:mt-10">
          <button
            onClick={handlePrevSlide}
            aria-label="Previous floor plan"
            className="p-2 text-gray-600 hover:text-red-600 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <svg
              width="34"
              height="22"
              viewBox="0 0 34 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="30" y1="11" x2="4" y2="11" />
              <polyline points="12 3 4 11 12 19" />
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            aria-label="Next floor plan"
            className="p-2 text-[#DC2626] hover:text-red-700 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <svg
              width="34"
              height="22"
              viewBox="0 0 34 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="11" x2="30" y2="11" />
              <polyline points="22 3 30 11 22 19" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default FloorPlansTab
