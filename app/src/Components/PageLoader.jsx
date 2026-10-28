import React, { useState, useEffect } from 'react'

/**
 * Fullscreen Preloader with percentage counting from 0% to 100%.
 * Features:
 * - White background (#ffffff)
 * - Black text (#000000)
 * - No progress bar
 * - Displays the pure number with percentage (e.g. 0% -> 100%)
 * - Elegant luxury typography with smooth fade-out exit
 */
export const PageLoader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    let current = 0
    // Dynamic interval steps to mimic realistic asset/page loading
    const interval = setInterval(() => {
      // Accelerate towards 100%
      const increment = Math.max(1, Math.floor(Math.random() * 4) + 1)
      current = Math.min(100, current + increment)
      setPercent(current)

      if (current >= 100) {
        clearInterval(interval)
        // Short pause at 100% for readability before fade out
        setTimeout(() => {
          setIsFading(true)
          setTimeout(() => {
            setIsMounted(false)
            if (onComplete) onComplete()
          }, 600) // matches transition duration
        }, 200)
      }
    }, 25)

    return () => clearInterval(interval)
  }, [onComplete])

  if (!isMounted) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-black transition-opacity duration-700 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label={`Loading page ${percent}%`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Minimalist, luxury brand subtitle */}
        <span className="font-manrope text-[11px] sm:text-sm tracking-tight uppercase text-gray-500 mb-2 font-medium">
          Sumanth Homes
        </span>

        {/* 0% to 100% large counter */}
        <div className="flex items-baseline">
          <span className="font-manrope font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-black tabular-nums">
            {percent}
          </span>
          <span className="font-manrope font-semibold text-2xl sm:text-3xl md:text-4xl text-black ">
            %
          </span>
        </div>
      </div>
    </div>
  )
}

export default PageLoader
