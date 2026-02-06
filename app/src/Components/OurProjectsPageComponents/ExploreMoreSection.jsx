import image1 from "../../assets/img/OurProjectsPage/ExploreMoreSection/image1.png"
import image2 from "../../assets/img/OurProjectsPage/ExploreMoreSection/image2.png"
import { Card3 } from './sub-componenets/Card3'
import { useRef, useEffect } from 'react'
import { ScrollTrigger, gsap } from "gsap/all"
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation"
import { motion } from "motion/react"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur"
import BlurText from "../../utils/BlurText"
import ParallaxComponent from "../../utils/ParallaxComponent"

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
    md:overflow-hidden
    flex justify-between gap-6 md:gap-0 flex-wrap md:flex-nowrap
    mb-20
    mt-8
    '>

        <div
          
          
        
          className='xl:mb-72 gap-20'>

              <BlurText
              text="Our small size enables us to service our clients closely and gives us the flexibility to adapt to changing scenarios in the design world."
              delay={120}
              animateBy="words"
              direction="bottom"
               ref={titleRef}
               className='
            font-normal
            mb-4 xl:mb-12
            xl:w-[80%] 
            md:text-xl xl:text-3xl 
            '
            />

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

       
        
        className='
        block
        relative
        w-full md:w-auto
        xl:w-[45%] 
        '>
            <div className='aspect-[243/300] md:aspect-[308/371] w-[70%] md:w-auto flex ml-auto  overflow-hidden'>
                <ParallaxComponent className={'w-full'}>
                    <img className="w-full scale-150" src={image2} />
                </ParallaxComponent>
            </div>

            <div className="w-[50%] md:w-[70%] aspect-[170/202] md:aspect-[203.33/242.05] absolute top-36 left-0 md:top-44 md:left-auto md:right-40   overflow-hidden ">
                <ParallaxComponent className='w-full'>
                    <img className="w-full scale-150" src={image1} />
                </ParallaxComponent>
            </div>
            
            
            

        </motion.div>

    </div>
  )
}
