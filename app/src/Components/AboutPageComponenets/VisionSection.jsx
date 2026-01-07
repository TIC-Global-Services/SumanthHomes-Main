import React from 'react'
import visionImage from "../../assets/img/AboutSection/visionImage.png"
import missionImage from "../../assets/img/AboutSection/missionImage.png"

export const VisionSection = () => {
  return (
    <div className='flex justify-between items-center xl:gap-10 md:gap-3 xl:mb-10 md:mb-10'>

        <div className='xl:w-[50%]'>

            <p className='xl:mb-4 md:mb-1 font-jakarta font-semibold uppercase tracking-[0.2rem] [word-spacing:3px] text-[rgb(181,4,4)] text-xs'>OUR VISION</p>

            <h2 className='xl:mb-8 md:mb-4 font-manrope font-semibold xl:text-4xl md:text-xl'>The Art of Modern Building</h2>

            <p className='mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>

                Our vision is to build high-quality homes that reflect trust and lasting value. We understand that a home is a one-time investment for many, and we are committed to delivering spaces that offer comfort, reliability, and complete satisfaction. With this vision, we strive to give our best in every project we undertake.

            </p>

        </div>

        <div>

            <img className='xl:h-[18rem] xl:w-[40rem]' src={visionImage}></img>

        </div>

    </div>
  )
}
