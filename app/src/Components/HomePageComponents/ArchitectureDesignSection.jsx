import React, { useEffect } from 'react'
import img1 from "../../assets/img/ArchitectureDesign/arielDay8k.jpg";
import img2 from "../../assets/img/ArchitectureDesign/ArchitectureImage2.png";
import img3 from "../../assets/img/ArchitectureDesign/ArchitectureImage3.jpg";
import img4 from "../../assets/img/ArchitectureDesign/ArchitectureImage4.png";
import { useRef } from 'react';
import {gsap} from "gsap/gsap-core"

export const ArchitectureDesignSection = () => {

    const CardRef = useRef(null);

    const prev = ()=>{
        const el = CardRef.current;
        const containerWidth = el.offsetWidth + 16;
        gsap.to(el,{
            x:`+=${containerWidth}`,
            ease:'expo'
        })  

    }
    const next = ()=>{
        const el = CardRef.current;
        const containerWidth = el.offsetWidth + 16;
        gsap.to(el,{
            x:`-=${containerWidth}`,
            ease:'expo'
        })  
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
        {/* Buttons for smaller screens */}
        <div className='
        flex justify-center items-center
        md:hidden
        gap-5
        mt-5'>
              <div className='
                flex items-center justify-center
                md:order-first
                flex-shrink-0
                bg-white
                p-2
                rounded-full'>
                    <div>
                        <button onClick={prev} className='flex items-center justify-center '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(24,0) scale(-1,1)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4696C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53097C15.0782 6.39014 14.9991 6.19913 14.9991 5.99997C14.9991 5.80081 15.0782 5.6098 15.219 5.46897C15.3598 5.32814 15.5508 5.24902 15.75 5.24902C15.9492 5.24902 16.1402 5.32814 16.281 5.46897L22.281 11.469C22.3508 11.5386 22.4063 11.6214 22.4441 11.7125C22.4819 11.8036 22.5013 11.9013 22.5013 12C22.5013 12.0986 22.4819 12.1963 22.4441 12.2874C22.4063 12.3785 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3901 14.9991 18.1991 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3896 1.5 12.1989 1.5 12Z"
                                    fill="#B50404"/>
                            </g>
                            </svg>
  
                        </button>
                    </div>
                        
                </div>

                <div className='
                flex items-center justify-center
                flex-shrink-0
                md:hidden
                bg-white
                p-2
                rounded-full'>
                    <div >
                        <button onClick={next} className='flex items-center justify-center '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4696C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53097C15.0782 6.39014 14.9991 6.19913 14.9991 5.99997C14.9991 5.80081 15.0782 5.6098 15.219 5.46897C15.3598 5.32814 15.5508 5.24902 15.75 5.24902C15.9492 5.24902 16.1402 5.32814 16.281 5.46897L22.281 11.469C22.3508 11.5386 22.4063 11.6214 22.4441 11.7125C22.4819 11.8036 22.5013 11.9013 22.5013 12C22.5013 12.0986 22.4819 12.1963 22.4441 12.2874C22.4063 12.3785 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3901 14.9991 18.1991 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3896 1.5 12.1989 1.5 12Z"
                                fill="#B50404"/>
                           </svg>

                        </button>
                    </div>
                </div>
          </div>

    </div>
  )
}
