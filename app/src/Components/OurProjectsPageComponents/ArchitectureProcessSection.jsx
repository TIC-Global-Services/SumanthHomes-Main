import React from 'react'
import { GridCard1 } from './sub-componenets/GridCard1'

export const ArchitectureProcessSection = () => {
  return (
    <div className='flex items-start justify-evenly xl:h-[40rem] xl:mt-20'>

        <div className='xl:w-[40%]'>

            <p className='xl:mb-4 md:mb-1 font-jakarta font-semibold uppercase tracking-[0.2rem] [word-spacing:3px] text-[rgb(181,4,4)] text-xs'>Architecture process</p>
            <h2 className='xl:mb-8 md:mb-4 font-manrope font-semibold xl:text-4xl md:text-xl'>From Concept to Completion</h2>
            <p className='xl:w-[90%] mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>
              At Sumanth Homes, we create buildings that reflect minimalism and timeless elegance, thoughtfully designed to harmonize with the environment and complement the beauty around them.
            </p>

        </div>

        <div className='grid grid-cols-2 gap-4'>
           
           <GridCard1 number={'1'} mainText={'Design planing'} subText={"Our buildings combine design elegance of lines and shapes."} />
           <GridCard1 number={'2'} mainText={'Design concept'} subText={'Our buildings combine design elegance of lines and shapes.'}/>
           <GridCard1 number={'3'} mainText={'Design development'} subText={'Our buildings combine design elegance of lines and shapes.'}/>
           <GridCard1 number={'4'} mainText={'Finished project'} subText={'Our buildings combine design elegance of lines and shapes.'}/>

        </div>

    </div>
  )
}
