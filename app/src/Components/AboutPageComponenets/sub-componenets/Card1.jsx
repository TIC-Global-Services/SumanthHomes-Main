import React from 'react'

export const Card1 = ({number, content, pageNo}) => {
  return (


    <div className='
    flex items-center justify-between
    md:gap-5 border-t-2
    border-[#3E3E3E]
    xl:pt-4 md:pt-4
    w-[100%] md:w-[30%] xl:w-[30%]'>

        <div className='xl:w-[60%] md:w-[60%]'>

            <p className='font-jakarta font-normal tracking-wide'> <span className='text-[#B50404]'>{number}</span> {content}</p>

        </div>

        <p className='font-jakarta font-medium'>{pageNo}</p>
    </div>

  )
}
