import img1 from "../../assets/img/ArchitectureDesign/arielDay8k.jpg";
import img2 from "../../assets/img/ArchitectureDesign/ArchitectureImage2.png";
import img3 from "../../assets/img/ArchitectureDesign/ArchitectureImage3.jpg";
import img4 from "../../assets/img/ArchitectureDesign/ArchitectureImage4.png";
import { useRef, useEffect } from 'react';
import {gsap} from "gsap/gsap-core"
import { CardButtons } from '../../sub-components/CardButtons';
import { motion } from "motion/react"

export const ArchitectureDesignSection = () => {

    let cardWidth = useRef(0);
    
    const CardRef = useRef(null);
    const slideUpAnimation = {
        initial: {opacity:0, y:100},
        whileInView: {opacity:1, y:0},
        transition:{duration:0.3},
        viewport:{once:false} 
    }

    const ArchitectureCards = [
        {
            img: img1,
            text:'Residential Apartment'
        },
        {
            img: img2,
            text:'Commercial Space'
        },
        {
            img: img3,
            text:'Individual Villas'
        },
        {
            img: img4,
            text:'Random'
        },
        {
            img: img1,
            text:'Residential Apartment'
        },
        {
            img: img2,
            text:'Commercial Space'
        }
    ]


    let frame = useRef(0);
    const maxFrame = (ArchitectureCards.length-1);


    const prev = ()=>{
            if((frame.current) > 0){

                frame.current = frame.current-1;
                const el = CardRef.current;
                gsap.to(el,{
                    x:`+=${cardWidth.current}`,
                    ease:'expo'
                })
            } 
        }

    const next = ()=>{
        if((frame.current) < maxFrame){

            frame.current = frame.current+1;
            const el = CardRef.current;
            gsap.to(el,{
                x:`-=${cardWidth.current}`,
                ease:'expo'
            })
        }}

    useEffect(()=>{

        cardWidth.current = CardRef.current.offsetWidth + 16; //width + 16 ( the gap between cards in pixels )
        
    },[])

  return (
    <div className=' my-20'>

        <div className='
        xl:flex items-end justify-between 
        xl:gap-96'>

            <motion.div
            initial={slideUpAnimation.initial}
            whileInView={slideUpAnimation.whileInView}
            transition={slideUpAnimation.transition}
            viewport={slideUpAnimation.viewport}
            
            className='text-left'>

                <p className='
                text-[#B50404] font-semibold
                text-xs md:text-xs 
                uppercase leading-8 tracking-widest'>ARCHITECTURE & DESIGN</p>
                <h4
                
                className='
                text-black
                font-bold
                text-3xl xl:text-4xl md:text-2xl
                mb-4
                xl:leading-10
                tracking-tight'>
                    Crafting modern buildings where style meets purpose.
                </h4>

            </motion.div>

            <motion.div
            initial={slideUpAnimation.initial}
            whileInView={slideUpAnimation.whileInView}
            transition={slideUpAnimation.transition}
            viewport={slideUpAnimation.viewport}

            className='xl:w-[50%] md:pt-2'>

                <p className='
                font-normal 
                xl:leading-5 
                xl:text-sm'>Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>

            </motion.div>

        </div>

        <div 
        className='w-full overflow-hidden md:overflow-scroll'
        style={{
            scrollbarWidth:'none',
        }}
        >
        <div ref={CardRef} className='
        flex
        mt-8 xl:mt-12 
        gap-4 xl:gap-8'
        >

            {
                ArchitectureCards.map((card, i)=>(

                    <div key={i} className='
                    relative flex-shrink-0 carousel-card
                    w-full md:w-auto
                    '>
                        
                        <img className='
                        aspect-[3/4]
                        w-full xl:w-[280px] 
                        h-[25rem] xl:h-[350px]
                        ' src={card.img}></img>
                        <p className='
                        absolute 
                        bottom-8 xl:bottom-11 
                        font-jakarta font-medium text-white text-center
                        justify-self-center
                        text-xl xl:text-xl 
                        '>{card.text}</p>
                
                    </div>
                ))
            }
                
            
            </div>
        </div>
        <CardButtons prev={prev} next={next} />

    </div>
  )
}
