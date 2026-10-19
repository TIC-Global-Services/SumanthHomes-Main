import React from 'react'

export interface LocationItem {
  name: string
  dist: string
}

export interface LocationTabProps {
  locationItems?: LocationItem[]
  mapEmbedUrl?: string
  title?: string
  subtitle?: string
  className?: string
}

/**
 * Location Tab Component (Proximities List + Map Embed)
 */
export const LocationTab: React.FC<LocationTabProps> = ({
  locationItems = [],
  mapEmbedUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=79.3900%2C13.6100%2C79.4500%2C13.6500&layer=mapnik&marker=13.6288%2C79.4192',
  title = 'Location Map',
  subtitle = 'Proximities',
  className = '',
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-4 bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 ${className}`}
    >
      {/* Proximities List */}
      <div>
        {title && <h3 className="text-2xl font-semibold text-[#5A3A2E] mb-2">{title}</h3>}
        {subtitle && <h4 className="text-lg font-medium text-black mb-6">{subtitle}</h4>}
        <ul className="space-y-3">
          {locationItems.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center text-sm sm:text-base border-b border-gray-100 pb-2.5 last:border-0"
            >
              <span className="text-gray-700 font-medium">{item.name}</span>
              <span className="text-[#6b4c3a] bg-[#F7F2EE] font-semibold px-3 py-1 rounded-full text-xs sm:text-sm">
                {item.dist}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Map Embed */}
      <div className="w-full h-[360px] sm:h-[440px] rounded-xl overflow-hidden border border-gray-200 relative group">
        <iframe
          title="Project Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={mapEmbedUrl}
          className="w-full h-full"
        />
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs text-gray-600 shadow-sm">
          <a
            href="https://www.openstreetmap.org/#map=14/13.6288/79.4192"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium"
          >
            View Larger Map
          </a>
        </div>
      </div>
    </div>
  )
}

export default LocationTab
