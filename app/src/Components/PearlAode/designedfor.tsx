import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BlurText from '../../utils/BlurText'

gsap.registerPlugin(ScrollTrigger)

const DesignedFor: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return

    const ctx = gsap.context(() => {
      // 1. Initial State:
      // Cards 2, 3, and 4 start OUTSIDE the div from the bottom (y: 600, opacity: 0)
      gsap.set(['.stack-card-2', '.stack-card-3', '.stack-card-4'], {
        y: 600,
        opacity: 0,
        force3D: true
      })

      // 2. ScrollTrigger Pinned Timeline:
      // Each card glides in SEPARATELY from the bottom outside the div and docks into the stack.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2400',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      // Stage 0: Initial hold on Image 1 (user sees only Image 1 in the container)
      tl.to({}, { duration: 0.4 })

      // Stage 1: Card 2 glides up from OUTSIDE the div into position over Card 1
      tl.fromTo(
        '.stack-card-2',
        { y: 600, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out', duration: 1 }
      )

      // Hold on Card 2
      tl.to({}, { duration: 0.5 })

      // Stage 2: Card 3 glides up from OUTSIDE the div into position over Card 2
      tl.fromTo(
        '.stack-card-3',
        { y: 600, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out', duration: 1 }
      )

      // Hold on Card 3
      tl.to({}, { duration: 0.5 })

      // Stage 3: Card 4 glides up from OUTSIDE the div into position over Card 3
      tl.fromTo(
        '.stack-card-4',
        { y: 600, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out', duration: 1 }
      )

      // Final hold on complete 4-tier stack
      tl.to({}, { duration: 0.6 })
    }, sectionRef)

    const handleRefresh = () => {
      ScrollTrigger.refresh()
    }

    const timer = setTimeout(handleRefresh, 300)
    window.addEventListener('load', handleRefresh)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleRefresh)
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="designed-for-the-way-you-live"
      className="w-full min-h-screen flex items-center justify-center py-12 md:py-16 px-4 sm:px-8 md:px-[5%] bg-white overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left Column: Heading and Description */}
        <div className="flex flex-col justify-center max-w-xl">
          <BlurText
            text="Designed for the Way You Live"
            delay={25}
            animateBy="words"
            direction="bottom"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-gray-900 tracking-tight leading-tight mb-6"
          />

          <p className="text-[#929292] text-sm sm:text-base md:text-lg leading-[1.2] font-normal">
            Pearl Adobe is a thoughtfully planned residential community featuring
            contemporary homes, spacious layouts, and lifestyle-focused amenities. Set
            in a peaceful environment, it offers the perfect balance of comfort,
            convenience, and modern living for families of every stage.
          </p>
        </div>

        {/* Right Column: Stacked Image Container without overflow-hidden so incoming cards travel from outside */}
        <div className="w-full flex justify-center items-center">
          <div
            ref={containerRef}
            className="relative w-full h-[460px] sm:h-[520px] md:h-[560px] lg:h-[600px]"
          >
            <div className="stack-card-1 absolute inset-0 w-full h-full z-10 overflow-hidden">
              <img
                src="/pearlaode/designedfor-1.png"
                alt="Pearl Abode - Daytime Architecture"
                className="w-full h-full object-cover object-top select-none"
                loading="eager"
              />
            </div>

            <div
              style={{
                top: '58px',
                height: 'calc(100% - 58px)'
              }}
              className="stack-card-2 absolute inset-x-0 bottom-0 z-20 overflow-hidden"
            >
              <img
                src="/pearlaode/designedfor-2.png"
                alt="Pearl Abode - Children Play Area & Landscapes"
                className="w-full h-full object-cover object-top select-none"
                loading="lazy"
              />
            </div>

            <div
              style={{
                top: '116px',
                height: 'calc(100% - 116px)'
              }}
              className="stack-card-3 absolute inset-x-0 bottom-0 z-30  overflow-hidden"
            >
              <img
                src="/pearlaode/designedfor-3.png"
                alt="Pearl Abode - Street View & Facade"
                className="w-full h-full object-cover object-top select-none"
                loading="lazy"
              />
            </div>

            <div
              style={{
                top: '174px',
                height: 'calc(100% - 174px)'
              }}
              className="stack-card-4 absolute inset-x-0 bottom-0 z-40 overflow-hidden"
            >
              <img
                src="/pearlaode/designedfor-4.png"
                alt="Pearl Abode - Evening Ambient Lighting"
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignedFor