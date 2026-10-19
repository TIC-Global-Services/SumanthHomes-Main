import React from 'react'

export interface CompassRoseProps {
  className?: string
}

/**
 * Architectural Compass Rose component matching floor plan drawings
 */
export const CompassRose: React.FC<CompassRoseProps> = ({ className = '' }) => (
  <div className={`flex flex-col items-center justify-center p-2 select-none ${className}`}>
    <svg
      width="84"
      height="84"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm"
    >
      {/* Outer subtle rings */}
      <circle cx="50" cy="50" r="42" stroke="#8C6D58" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <circle cx="50" cy="50" r="38" stroke="#8C6D58" strokeWidth="0.8" opacity="0.4" />

      {/* Corner Cardinal Rays */}
      <polygon points="50,50 48,22 50,14" fill="#C53030" />
      <polygon points="50,50 52,22 50,14" fill="#E53E3E" />
      <polygon points="50,50 48,78 50,86" fill="#718096" />
      <polygon points="50,50 52,78 50,86" fill="#A0AEC0" />
      <polygon points="50,50 22,48 14,50" fill="#718096" />
      <polygon points="50,50 22,52 14,50" fill="#A0AEC0" />
      <polygon points="50,50 78,48 86,50" fill="#718096" />
      <polygon points="50,50 78,52 86,50" fill="#A0AEC0" />

      {/* Diagonal rays */}
      <polygon points="50,50 30,30 25,25" stroke="#CBD5E0" strokeWidth="0.8" fill="#ED8936" opacity="0.5" />
      <polygon points="50,50 70,30 75,25" stroke="#CBD5E0" strokeWidth="0.8" fill="#ED8936" opacity="0.5" />
      <polygon points="50,50 30,70 25,75" stroke="#CBD5E0" strokeWidth="0.8" fill="#CBD5E0" opacity="0.5" />
      <polygon points="50,50 70,70 75,75" stroke="#CBD5E0" strokeWidth="0.8" fill="#CBD5E0" opacity="0.5" />

      {/* Center jewel */}
      <circle cx="50" cy="50" r="4" fill="#742A2A" stroke="#FFFFFF" strokeWidth="1.2" />

      {/* Direction Letters */}
      <text x="50" y="10" textAnchor="middle" fill="#9B2C2C" fontSize="10" fontWeight="bold" fontFamily="serif">N</text>
      <text x="50" y="98" textAnchor="middle" fill="#4A5568" fontSize="9" fontWeight="bold" fontFamily="serif">S</text>
      <text x="96" y="53" textAnchor="middle" fill="#4A5568" fontSize="9" fontWeight="bold" fontFamily="serif">E</text>
      <text x="5" y="53" textAnchor="middle" fill="#4A5568" fontSize="9" fontWeight="bold" fontFamily="serif">W</text>
    </svg>
  </div>
)

export default CompassRose
