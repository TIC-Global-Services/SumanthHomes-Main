import React from 'react'

export const DefaultHeroSection = ({bgImage, mainText, subText}) => {
  return (

    <div className='
    flex items-center justify-center
     h-[14rem] xl:h-[24rem] md:h-[18rem]' style={{

        backgroundImage:`url(${bgImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }}>

        <div className='text-center'>

            <h2 className='font-manrope font-normal text-7xl xl:tracking-tighter md:tracking-tight xl:mb-6 md:mb-4'>{mainText}</h2>

            <p className='font-jakarta font-semibold tracking-widest uppercase [word-spacing:5px] text-[#B50404] text-xs'>{subText}</p>

        </div>

    </div>
  )
}
