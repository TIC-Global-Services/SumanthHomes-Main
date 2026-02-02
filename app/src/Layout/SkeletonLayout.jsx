import React from 'react'

export const SkeletonLayout = () => {
  return (
    <div className='
    w-full overflow-hidden
    h-[80svh] md:h-[100svh] xl:h-auto xl:aspect-[1440/553]
    bg-gray-100
    grid grid-cols-3 grid-rows-3
    '>
      <div className='col-start-2 w-full flex gap-6 items-center relative'>

        <div className='w-[15%] aspect-square  border rounded-full bg-gray-400 relative overflow-hidden'>
          <div className='absolute inset-0 bg-[linear-gradient(110deg,#e5e7eb_40%,#ffffff_50%,#e5e7eb_60%)] bg-[length:300%_100%] animate-shimmer'></div>
        </div>

        <div className='w-[80%] aspect-[7/1] border rounded-full bg-gray-700 relative overflow-hidden'>
        <div className='absolute inset-0 border rounded-full bg-[linear-gradient(110deg,#e5e7eb_40%,#ffffff_50%,#e5e7eb_60%)] bg-[length:300%_100%] animate-shimmer'></div>
        </div>
        
      </div>

      <div className='col-start-2 row-start-2 w-full flex flex-col justify-center items-center gap-7 mt-32'>
        
        <div className='w-[80%]  aspect-[5/1] border rounded-full bg-gray-400 relative'>
            <div className='absolute inset-0 aspect-[5/1] border rounded-full bg-[linear-gradient(110deg,#e5e7eb_40%,#ffffff_50%,#e5e7eb_60%)] bg-[length:300%_100%] animate-shimmer '></div>
        </div>

        <div className='w-[40%] aspect-[6/1] border rounded-full bg-gray-400 relative'>
            <div className='absolute inset-0 aspect-[6/1] border rounded-full bg-[linear-gradient(110deg,#e5e7eb_40%,#ffffff_50%,#e5e7eb_60%)] bg-[length:300%_100%] animate-shimmer '></div>
        </div>
      </div>
    </div>
  )
}
