import React from 'react'

export const Card3 = ({text}) => {
  return (
    <div className='flex items-end gap-2
    w-full
    '>

        <p className='
        font-extrabold
        xl:mr-2
        text-[#737373]
        
        '>+</p>
        <h6 className='
        font-normal
        text-[#737373]
        text-xs md:text-base xl:text-base
        '>{text}</h6>
    </div>
  )
}
