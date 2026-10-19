import React from 'react'

export interface MasterPlanTabProps {
  masterPlanImage: string
  masterPlanTitle?: string
  onOpenLightbox?: (imageUrl: string, title: string) => void
  className?: string
}

/**
 * Master Plan Tab Component with Expand & Zoom Lightbox trigger
 */
export const MasterPlanTab: React.FC<MasterPlanTabProps> = ({
  masterPlanImage,
  masterPlanTitle = 'Master Plan Layout',
  onOpenLightbox,
  className = '',
}) => {
  const handleOpen = () => {
    if (onOpenLightbox) {
      onOpenLightbox(masterPlanImage, masterPlanTitle)
    }
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {masterPlanTitle && (
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#5A3A2E] mb-6 text-center">
          {masterPlanTitle}
        </h2>
      )}

      <div className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 md:p-8 max-w-6xl w-full flex items-center justify-center group">
        <img
          src={masterPlanImage}
          alt={masterPlanTitle}
          onClick={handleOpen}
          className="w-full h-auto max-h-[620px] object-contain rounded-lg cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
        />

        {/* Expand / Fullscreen Button */}
        {onOpenLightbox && (
          <button
            onClick={handleOpen}
            aria-label="Expand and zoom master plan"
            title="Expand and zoom"
            className="absolute bottom-6 right-6 p-2.5 bg-white/95 hover:bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
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
    </div>
  )
}

export default MasterPlanTab
