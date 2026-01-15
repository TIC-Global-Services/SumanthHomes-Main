import React, { useEffect } from 'react'
import img1 from "../../assets/img/ArchitectureDesign/arielDay8k.jpg";
import img2 from "../../assets/img/ArchitectureDesign/ArchitectureImage2.png";
import img3 from "../../assets/img/ArchitectureDesign/ArchitectureImage3.jpg";
import img4 from "../../assets/img/ArchitectureDesign/ArchitectureImage4.png";
import { useRef } from 'react';
import {gsap} from "gsap/gsap-core"
import { CardButtons } from '../../sub-components/CardButtons';

export const ArchitectureDesignSection = () => {

    let containerWidth = 0;

    const tl = gsap.timeline(); 

    const CardRef = useRef(null);

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


    let frame = 0;
    const maxFrame = (ArchitectureCards.length-1);

    useEffect(()=>{
        
        const el = CardRef.current;
        containerWidth = el.offsetWidth + 16;

    },[])


    const prev = ()=>{
            if((frame) > 0){
                frame = frame-1;
                const el = CardRef.current;
                tl.to(el,{
                    x:`+=${containerWidth}`,
                    ease:'expo'
                })  
            } 
        }

    const next = ()=>{
        if((frame) < maxFrame){
            frame = frame+1;
            const el = CardRef.current;
            tl.to(el,{
                x:`-=${containerWidth}`,
                ease:'expo'
            })  
        }}
    

  return (
    <div className=' my-20'>

        <div className='
        xl:flex items-end justify-between 
        xl:gap-96'>

            <div className='text-left'>

                <p className='
                text-[#B50404] font-semibold
                text-xs md:text-xs 
                uppercase leading-8 tracking-widest'>ARCHITECTURE & DESIGN</p>
                <h4 className='
                font-bold
                text-3xl xl:text-4xl md:text-2xl
                mb-4
                xl:leading-10
                tracking-tight'>Crafting modern buildings where style meets purpose.</h4>

            </div>

            <div className='xl:w-[50%] md:pt-2'>

                <p className='
                font-normal 
                xl:leading-5 
                xl:text-sm'>Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>

            </div>

        </div>

        <div 
        className='w-full  overflow-hidden md:overflow-scroll'
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
                ArchitectureCards.map((card, _)=>[

                    <div className='
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
                ])
            }
                
            
            </div>
        </div>
        <CardButtons prev={prev} next={next} />

    </div>
  )
}
