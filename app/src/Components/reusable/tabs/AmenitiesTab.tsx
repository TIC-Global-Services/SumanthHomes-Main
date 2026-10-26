  import React from 'react'

export interface AmenitiesTabProps {
  amenitiesImage?: string
  alt?: string
  className?: string
}

/**
 * Amenities Tab Component
 */
export const AmenitiesTab: React.FC<AmenitiesTabProps> = ({
  amenitiesImage,
  alt = 'Amenities',
  className = '',
}) => {
  if (!amenitiesImage) return null

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="p-4 sm:p-6 md:p-6 max-w-6xl w-full border border-gray-100 flex items-center justify-center">
        <img
          src={amenitiesImage}
          alt={alt}
          className="w-full h-auto max-h-[55dvh] object-contain rounded-xl"
        />
      </div>
    </div>
  )
}

export default AmenitiesTab
