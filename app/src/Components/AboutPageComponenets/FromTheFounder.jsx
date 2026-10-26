import React from 'react'
import BlurText from '../../utils/BlurText'
import { motion } from 'motion/react'

export const FromTheFounder = ({ className = '' }) => {
  return (
    <section
      className={`py-12 sm:py-16 md:py-20 lg:py-24 w-full flex flex-col items-center justify-center text-center font-manrope ${className}`}
    >
      {/* Red Tag / Mini Title */}
      <p className="text-[#CC1518] text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3">
        SHS TEAM
      </p>

      {/* Main Heading */}
      <BlurText
        text="From the Founder"
        delay={35}
        animateBy="words"
        direction="bottom"
        className="font-manrope font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#191919] tracking-tight leading-[1.2] mb-6 sm:mb-8"
      />

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="font-extralight text-lg sm:text-2xl md:text-[28px] lg:text-[32px] text-[#7A7A7A] leading-[1.5] max-w-3xl lg:max-w-4xl px-4 select-none tracking-normal"
      >
        “Absolutely amazing theme, flexible and awesome design with possibilities. It's so very easy to use and to customize. Simply the great designs and best theme”
      </motion.blockquote>

      {/* Author */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        viewport={{ once: true }}
        className="font-normal text-sm sm:text-xl text-[#191919] mt-6 sm:mt-8 tracking-tight"
      >
        The Founder
      </motion.p>
    </section>
  )
}

export default FromTheFounder
