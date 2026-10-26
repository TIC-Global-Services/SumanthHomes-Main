import React, { useState } from 'react'

export interface ShowreelSectionProps {
  id?: string
  videoUrl?: string
  thumbnailSrc?: string
  thumbnailAlt?: string
  title?: string
  buttonText?: string
  accentColor?: string
  className?: string
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({
  id = 'showreel',
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  thumbnailSrc = '/lotus-vila/show-real-thum.png',
  thumbnailAlt = 'Project Heritage Showreel',
  title = 'Watch Showreel',
  buttonText = 'Watch Showreel',
  accentColor = '#CCA062',
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <section id={id} className={`py-12 md:py-20 px-4 sm:px-8 md:px-[5%] w-full ${className}`}>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[72vh] rounded-[4px] overflow-hidden shadow-2xl group">
        {isPlaying ? (
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 bg-black/75 hover:bg-black text-white px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm transition-all cursor-pointer z-20"
              aria-label="Close showreel video"
            >
              ✕ Close
            </button>
          </div>
        ) : (
          <>
            {/* Showreel Thumbnail */}
            <img
              src={thumbnailSrc}
              alt={thumbnailAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Ambient Dark Overlay */}
            <div
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Play showreel"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsPlaying(true)
                }
              }}
            >
              {/* Play Button Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 text-gray-900 border border-white/60">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-1.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom Right Showreel Badge Button */}
            <button
              onClick={() => setIsPlaying(true)}
              style={{ backgroundColor: accentColor }}
              className="absolute bottom-5 right-5 sm:bottom-0 sm:right-0 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-md shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>{buttonText}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default ShowreelSection
