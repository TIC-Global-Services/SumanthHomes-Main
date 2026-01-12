import React from 'react'
import missionImage from "../../assets/img/AboutSection/missionImage.png"

export const MissionSection = () => {
  return (
    <div className='
    flex flex-col md:flex-row justify-between items-center
    xl:gap-10 md:gap-3  xl:mt-4 md:mt-4
    mb-14 xl:mb-20 md:mb-14'>

        <div className='order-2 md:order-1'>

            <img className='
            xl:h-[18rem]
            xl:w-[40rem]' src={missionImage}></img>

        </div>

        <div className='xl:w-[50%] order-1 md:order-2'>

            <p className='xl:mb-4 md:mb-1 font-jakarta font-semibold uppercase tracking-[0.2rem] [word-spacing:3px] text-[rgb(181,4,4)] text-xs'>OUR MISSION</p>

            <h2 className='xl:mb-8 md:mb-4 font-manrope font-semibold xl:text-4xl md:text-xl'>Designs that Inspire Living</h2>

            <p className='mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>

                At Sumanth Homes, we channel all our resources, energy, and expertise toward delivering high-quality infrastructure built to the highest standards. We constantly evaluate our actions, learning from every experience to improve and evolve. This approach empowers us to take on greater challenges and drives our continuous growth as a firm.

            </p>

        </div>



    </div>
  )
}
