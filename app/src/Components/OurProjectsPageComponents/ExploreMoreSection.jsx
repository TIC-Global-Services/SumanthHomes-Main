import React from 'react'
import image1 from "../../assets/img/OurProjectsPage/ExploreMoreSection/image1.png"
import image2 from "../../assets/img/OurProjectsPage/ExploreMoreSection/image2.png"
import { Card3 } from './sub-componenets/Card3'


export const ExploreMoreSection = () => {

    const data = [
        'Structural design',
        'Building design',
        'Interior design',
        'Landscape design',
        'Facility optimization',
        'Space utilization',
        'Architectural',
        'Innovative design',
        'Contractor bidding',
        'Space planning',
        'Residential',
        'Technological design'
    ]

  return (
    <div className='
    flex justify-between
    mb-4
    mt-8
    '>

        <div className='xl:mb-72 gap-20'>

            <h4 className='
            font-normal
            mb-4 xl:mb-12
            xl:w-[80%] 
            xl:text-3xl 
            '>
                Our small size enables us to service our clients closely and gives us the flexibility to adapt to changing scenarios in the design world.
            </h4>

            <div className='
            grid grid-cols-2 md:grid-cols-3 gap-4
            w-full md:w-[80%]'>

                {
                    data.map((t, _ )=>(
                        <Card3 text={t}/>
                    ))
                }

            </div>

        </div>

        <div className='
        hidden md:block
        relative
        xl:w-[40%] 
        '>

            <img src={image2} className='xl:w-[25rem] xl:h-[25rem] xl:right-8 absolute'></img>
            <img src={image1} className='xl:w-[18rem] xl:h-[20rem] xl:top-44 xl:right-40 absolute'></img>
            

        </div>

    </div>
  )
}
