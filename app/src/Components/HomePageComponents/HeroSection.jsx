import React from 'react'
import bgimage from "../../assets/img/heroSection/heroSectionImage.jpg";

export const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen" style={{
        backgroundImage:`url(${bgimage})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
    }}>

    <h2 className='
    absolute
    text-[#F7F7F2] font-manrope font-medium
    bottom-0 left-0
    w-64 xl:w-[60%] md:w-[60%]
    xl:text-6xl
    xl:pl-20 md:pl-10
    xl:pb-20 md:pb-10 
    
    md:text-3xl
    
    '>
            Elevating Every Space with Purpose and Precision
    </h2>

    </div>
  )
}
