import React from 'react'

export const SkeletonLayout = () => {
  return (
    <div className='
    w-full overflow-hidden
    h-[80svh] md:h-[100svh] xl:h-auto xl:aspect-[1440/553]
    bg-white
    grid grid-cols-3 grid-rows-3
    '>
        <div className='
        mt-8
        col-start-2
        w-full aspect-[9/1]
        bg-gray-200
        border rounded-full
        '></div>

        <div className='
        col-start-2 row-start-2
        w-full aspect-[6/1]
        bg-gray-200
        border rounded-full
        '>

        </div>
    </div>
  )
}
