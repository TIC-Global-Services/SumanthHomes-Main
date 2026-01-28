import React from 'react'


export const MapSection = () => {


  return (
    <div className='mb-20 xl:mb-36 md:mb-14'>

      <iframe 
      className='
      pointer-events-none
      aspect-[4/3] md:aspect-[3/1]
      w-full
      '
      src="https://www.openstreetmap.org/export/embed.html?bbox=79.09950256347656%2C13.414333619316578%2C79.74220275878908%2C13.84141349246619&amp;layer=hot&amp;marker=13.627971281465944%2C79.42085266113281"
 ></iframe><br/>
      
        <div className='
        w-[50%] md:w-[80%]
        mx-auto
        flex items-center justify-evenly flex-wrap shirnk-0
        xl:gap-6
        mb-2 xl:mb-28 md:mb-28
        '>
            <div className='
            flex justify-center
            md:w-auto
            mx-auto
            mb-1'>
                <p className='
                text-center
                font-normal text-[#737373]
                w-[100%]
                tracking-[-0.5px]
                mx-auto
                
                text-sm md:text-xl xl:text-2xl'>Studio. Showroom. Site Visits  drop by or get directions </p>
            </div>

            <div className='w-[10%]  border-t-0 md:border-t-2 border-black'>

            </div>
            
            <button className='
            text-[#B50404] font-semibold tracking-[-0.5px]
            w-[100%] md:w-auto
            text-[18px] md:text-xl
            '>Get directions</button>
        </div>

    </div>
  )
}
