import image1 from "../../assets/img/OurProjectsPage/ExploreMoreSection/image1.png"
import image2 from "../../assets/img/OurProjectsPage/ExploreMoreSection/image2.png"
import { Card3 } from './sub-componenets/Card3'
import { useRef, useEffect } from 'react'
import { ScrollTrigger, gsap } from "gsap/all"
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation"
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger);

export const ExploreMoreSection = () => {

    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);


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
    <div ref={containerRef} className='
    flex justify-between
    mb-20
    mt-8
    '>

        <div
          
          
        
          className='xl:mb-72 gap-20'>

            <motion.h4

            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.2}}
            viewport={{once:false}}

            ref={titleRef} className='
            font-normal
            mb-4 xl:mb-12
            xl:w-[80%] 
            md:text-xl xl:text-3xl 
            '>
                Our small size enables us to service our clients closely and gives us the flexibility to adapt to changing scenarios in the design world.
            </motion.h4>

            <motion.div
            
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.2}}
              viewport={{once:false}}
            
            className='
            grid grid-cols-2 md:grid-cols-3 gap-4
            w-full md:w-[80%]'>

                {
                    data.map((t, _ )=>(
                        <Card3 text={t}/>
                    ))
                }

            </motion.div>

        </div>

        <motion.div

          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5}}
          viewport={{once:false}}
        
        className='
        hidden md:block
        relative
        xl:w-[40%] 
        '>

            <img src={image2} className='xl:w-[25rem] xl:h-[25rem] xl:right-8 absolute'></img>
            <img src={image1} className='xl:w-[18rem] xl:h-[20rem] xl:top-44 xl:right-40 absolute'></img>
            

        </motion.div>

    </div>
  )
}
