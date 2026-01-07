import React from 'react'

export const card1 = ({img, text}) => {
  return (
    <div className='relative flex-shrink-0'>
                        
            <img className='w-[420px] h-[500px]' src={img}></img>
            <p className='text-white text-2xl left-24 bottom-11 absolute'>{text}</p>
                
    </div>
  )
}