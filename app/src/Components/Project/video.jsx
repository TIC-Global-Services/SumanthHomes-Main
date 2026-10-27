import React, { useState } from 'react'

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <section className="py-12 md:py-20 px-4 md:px-[5%] w-full">
      <div className="relative w-full h-[50vh] md:h-[70vh] bg-gray-200 overflow-hidden shadow-2xl">
        {/* Video Thumbnail Placeholder */}
        <img 
          src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1920&q=80" 
          alt="Urbanscapes Video Thumbnail" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group hover:bg-black/40 transition-colors duration-300 flex items-center justify-center cursor-pointer">
          {/* Play Button */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>

        {/* Bottom Right Text */}
         <button
              onClick={() => setIsPlaying(true)}
              className="absolute bottom-0 right-0 bg-[#5A3A2E] text-white px-12 py-2.5  text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Watch Showreel</span>
              
            </button>
      </div>
    </section>
  )
}

export default Video