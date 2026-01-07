import React from 'react'

export const GridCard1 = ({number, mainText, subText}) => {
  return (
    <div className='col-span-1 relative xl:mx-14 xl:mb-24'>

        <h2 className='xl:text-8xl xl:w-[15rem]'>0{number}</h2>

        <div className='xl:top-16 xl:left-4 absolute'>
            <h4 className='xl:text-2xl'>{mainText}</h4>
             <p className='xl:w-[90%] mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>{subText}</p>
        </div>
        
    </div>
  )
}
