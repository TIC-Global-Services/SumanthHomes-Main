import React, { useState, useRef, useEffect } from 'react'

export interface ImageZoomModalProps {
  isOpen: boolean
  imageUrl: string
  title: string
  onClose: () => void
}

/**
 * Fullscreen Interactive Lightbox with Zoom In, Zoom Out, Reset, Mouse Pan, and Wheel Zoom
 */
export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}) => {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })

  // Reset zoom & pan when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Keyboard navigation: Escape to close, +/- to zoom
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === '+' || e.key === '=') zoomIn()
      if (e.key === '-') zoomOut()
      if (e.key === '0') resetZoom()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.35, 4))
  const zoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.35, 0.75)
      if (next <= 1) setPosition({ x: 0, y: 0 })
      return next
    })
  }

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return
    isDragging.current = true
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || scale <= 1) return
    e.preventDefault()
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    })
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) zoomIn()
    else zoomOut()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/92 backdrop-blur-md p-4 sm:p-6"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* Top Header & Toolbar */}
      <div className="w-full max-w-6xl flex items-center justify-between z-10 text-white mb-2">
        <h3 className="text-base sm:text-xl font-medium tracking-wide truncate max-w-[60%] text-white/90">
          {title}
        </h3>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2 sm:gap-3 bg-neutral-900/90 border border-neutral-700/80 rounded-full px-3 sm:px-4 py-1.5 shadow-xl">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.75}
            title="Zoom Out (-)"
            className="p-1.5 hover:text-red-400 disabled:opacity-40 transition cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          <span className="text-xs sm:text-sm font-mono text-gray-300 min-w-[50px] text-center select-none">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={zoomIn}
            disabled={scale >= 4}
            title="Zoom In (+)"
            className="p-1.5 hover:text-green-400 disabled:opacity-40 transition cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          <div className="w-px h-4 bg-neutral-700 mx-1" />

          <button
            onClick={resetZoom}
            title="Reset Zoom (0)"
            className="text-xs text-neutral-300 hover:text-white px-1.5 py-0.5 rounded transition cursor-pointer font-medium"
          >
            Reset
          </button>

          <button
            onClick={onClose}
            title="Close (Esc)"
            className="p-1.5 hover:text-red-400 text-neutral-300 transition cursor-pointer ml-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Image Viewport Area */}
      <div
        className={`w-full flex-1 flex items-center justify-center overflow-hidden relative ${
          scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
        }`}
        onMouseDown={handleMouseDown}
      >
        <img
          src={imageUrl}
          alt={title}
          draggable="false"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging.current ? 'none' : 'transform 0.15s ease-out',
          }}
          className="max-w-[95vw] max-h-[82vh] object-contain select-none transition-transform"
        />
      </div>

      {/* Bottom Hint */}
      <div className="text-center text-neutral-400 text-xs sm:text-sm select-none py-1">
        {scale > 1
          ? 'Click and drag to pan around image • Mouse wheel or controls to zoom'
          : 'Scroll or use + / - to zoom in'}
      </div>
    </div>
  )
}

export default ImageZoomModal
