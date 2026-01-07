import React from 'react'

export const Card2 = ({bgImage, Name, Position}) => {
  return (
    <div className='xl:w-[20rem] xl:h-[20rem] md:w-[20rem] md:h-[8rem] relative' style={{
        backgroundImage:`url(${bgImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        position:'center'
    }}>

        <div className='xl:bottom-8 md:bottom-3 xl:left-11 md:left-2 absolute'>

            <h2 className='font-jakarta font-medium xl:text-xl md:text-sm text-white'>{Name}</h2>
            <h4 className='font-jakarta font-normal text-white/75 md:text-xs'>{Position}</h4>
     
        </div>        
    </div>
  )
}
