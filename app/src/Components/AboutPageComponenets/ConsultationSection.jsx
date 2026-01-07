import React from 'react'
import bgImage from "../../assets/img/AboutSection/consultationBgImage.png"

export const ConsultationSection = () => {
  return (
    <div className='xl:h-[25rem] md:h-[15rem] xl:mb-36 md:mb-14 relative' style={{

      backgroundImage:`url(${bgImage})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
    }}>

        <div className='xl:w-[45%] md:w-[60%] xl:left-10 md:left-8 xl:bottom-8 md:bottom-6 absolute'>

            <h2 className='font-manrope font-semibold text-white xl:text-4xl md:text-2xl xl:mb-2'>Let's Build Something Meaningful</h2>
            <p className='font-jakarta font-normal text-white xl:mb-3 md:leading-5 md:mb-1'>We're here to discuss your ideas, understand your vision, and guide you through the entire design journey.</p>
            <button className='bg-[#B50404] font-manrope font-bold tracking-wide rounded-md xl:px-14 xl:py-4 md:px-8 md:py-2 text-white md:text-sm'>BOOK A CONSULTATION</button>
        </div>

    </div>
  )
}
