import React from 'react'

export const GridCard2 = ({Image, mainText, subText}) => {
  return (
    <div>

        <img src={Image} className='xl:h-[20rem] xl:w-[100%]'></img>

        <div className='flex justify-center items-center xl:mt-4 xl:mb-8'>

            <h4 className='font-medium text-xl'>{mainText}</h4>
            <div className='xl:h-[2px] xl:w-10 xl:mx-4 bg-[#737373]'></div>
            <p className='font-normal text-[#737373] text-xl'>{subText}</p>

        </div>

    </div>
  )
}
