import React from 'react'

export const Card3 = ({text}) => {
  return (
    <div className='flex items-end gap-2'>

        <p className='font-normal text-[#737373]'>+</p>
        <h6 className='font-normal text-[#737373]'>{text}</h6>
    </div>
  )
}
