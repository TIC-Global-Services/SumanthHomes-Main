import React from 'react'

export const Card2 = ({Number, titleText, contentText}) => {
  return (

    <div className='
    flex items-center justify-center flex-wrap flex-shrink-0
    w-[70%] xl:w-[30%] 
    md:box-border 
    md:h-[188px] 
    bg-white 
    
    gap-4 
    xl:py-10
    pl-10
    pr-10'>
        
        <div className='
        text-center bg-white'>

            <h3 className='font-manrope font-bold xl:text-7xl md:text-5xl text-[#B50404] tracking-tighter'>{Number}</h3>

        </div>

        <div className='xl:w-[60%]'> 

            <h5 className='xl:text-sm md:text-sm md:text-center xl:text-left md:tracking-tighter font-jakarta font-medium text-black xl:tracking-tight '>{titleText}</h5>
            <p className='text-[#464851] md:text-xs md:text-center xl:text-left xl:text-xs font-jakarta font-normal xl:tracking-tighter xl:leading-5'>{contentText}</p>

        </div>

    </div>


)
}

