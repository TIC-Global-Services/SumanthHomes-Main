import React from 'react'

export const Card1 = ({number, content, pageNo}) => {
  return (


    <div className='
    
    flex items-center justify-between
    md:gap-5 border-t-2
    border-[#3E3E3E]
    xl:pt-4 md:pt-4
    w-[100%] md:w-[20%] xl:w-[30%]'>

        <div className='md:w-[60%] xl:w-[60%] '>

            <p className='font-normal tracking-wide'> <span className='text-[#B50404]'>{number}</span> {content}</p>

        </div>

        <p className=' font-medium'>{pageNo}</p>
    </div>

  )
}
