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
  textColor?: string
  titleColor?: string
  descriptionColor?: string
  descColor?: string
  titleClassName?: string
  descriptionClassName?: string
  gridClassName?: string
  iconContainerClassName?: string
  iconClassName?: string
}

/**
 * Specifications Tab Component (4-Column Grid with Circular Icons)
 * The icon image already includes its circular border, so the container displays
 * the image at full badge size (w-14 h-14 / sm:w-16 sm:h-16) without an extra border.
 * Allows custom text colors via textColor, titleColor, and descriptionColor.
 */
export const SpecificationsTab: React.FC<SpecificationsTabProps> = ({
  specifications = [],
  className = '',
  textColor,
  titleColor,
  descriptionColor,
  descColor,
  titleClassName = '',
  descriptionClassName = '',
  gridClassName = '',
  iconContainerClassName = '',
  iconClassName = '',
}) => {
  const finalTitleColor = titleColor || textColor || '#2B1B17'
  const finalDescColor = descriptionColor || descColor || textColor || '#735A4D'

  return (
    <div className={`w-full py-4 ${className}`}>
      <div
        className={
          gridClassName ||
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-12 max-w-7xl mx-auto'
        }
      >
        {specifications.map((item) => (
          <div key={item.id} className="flex flex-col items-start group">
            {/* Icon container: image already contains the circular border */}
            <div
              className={
                iconContainerClassName ||
                'w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-105'
              }
            >
              {item.icon ? (
                <img
                  src={item.icon}
                  alt={item.title}
                  className={iconClassName || 'w-full h-full object-contain select-none'}
                  loading="lazy"
                />
              ) : (
                item.iconSvg
              )}
            </div>

            {/* Specification Title */}
            <h3
              style={{ color: finalTitleColor }}
              className={`text-base sm:text-lg lg:text-[19px] font-semibold mb-2 leading-snug tracking-tight ${titleClassName}`}
            >
              {item.title}
            </h3>

            {/* Specification Description */}
            <p
              style={{ color: finalDescColor }}
              className={`text-xs sm:text-sm font-normal leading-relaxed ${descriptionClassName}`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecificationsTab
