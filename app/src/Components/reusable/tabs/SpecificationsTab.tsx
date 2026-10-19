import React from 'react'

export interface SpecificationItem {
  id: string | number
  title: string
  description: string
  icon?: string
  iconSvg?: React.ReactNode
}

export interface SpecificationsTabProps {
  specifications?: SpecificationItem[]
  className?: string
}

/**
 * Specifications Tab Component (4-Column Grid with Circular Badges)
 */
export const SpecificationsTab: React.FC<SpecificationsTabProps> = ({
  specifications = [],
  className = '',
}) => {
  return (
    <div className={`w-full py-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl mx-auto">
        {specifications.map((item) => (
          <div key={item.id} className="flex flex-col items-start group">
            {/* Circular Icon Container with Bronze/Brown Outline */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#8C6D58]/60 flex items-center justify-center mb-4 bg-white/70 shadow-sm transition-transform duration-300 group-hover:scale-105">
              {item.icon ? (
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              ) : (
                item.iconSvg
              )}
            </div>

            {/* Specification Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-[#2B1B17] font-serif mb-2 leading-snug">
              {item.title}
            </h3>

            {/* Specification Description */}
            <p className="text-xs sm:text-sm text-[#735A4D] font-normal leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecificationsTab
