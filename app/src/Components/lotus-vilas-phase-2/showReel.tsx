import React, { useState } from 'react'

const ShowReel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <section className="py-12 md:py-20 px-4 md:px-[5%] w-full bg-white">
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[72vh]  overflow-hidden shadow-2xl bg-gray-900 group">
        {isPlaying ? (
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Lotus Serene Villas Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm transition-all"
            >
              ✕ Close
            </button>
          </div>
        ) : (
          <>
            {/* Showreel Thumbnail */}
            <img
              src="/lotus-vila/show-real-thum.png"
              alt="Lotus Serene Villas Heritage Showreel"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Ambient Dark Overlay */}
            <div
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center cursor-pointer"
            >
              {/* Play Button */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 text-[#144234] border border-white/50">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-1.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom Right Showreel Badge */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute bottom-0 right-0 bg-[#144234]/85 hover:bg-[#144234] text-white px-5 py-2.5  text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Watch Showreel</span>
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

export default ShowReel