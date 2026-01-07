import React from 'react'
import img1 from "../../assets/img/ArchitectureDesign/arielDay8k.jpg";
import img2 from "../../assets/img/ArchitectureDesign/ArchitectureImage2.png";
import img3 from "../../assets/img/ArchitectureDesign/ArchitectureImage3.jpg";
import img4 from "../../assets/img/ArchitectureDesign/ArchitectureImage4.png";

export const ArchitectureDesignSection = () => {

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
                text-[#B50404]font-semibold
                text-sm md:text-xs 
                uppercase leading-8 tracking-widest'>ARCHITECTURE & DESIGN</p>
                <h4 className='
                font-bold
                text-xl xl:text-4xl md:text-2xl
                mb-4
                xl:leading-10
                tracking-tight'>Crafting modern buildings where style meets purpose.</h4>

            </div>

            <div className='xl:w-[50%] md:pt-2'>

                <p className='
                font-normal 
                xl:leading-5 
                text-xs xl:text-sm'>Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>

            </div>

        </div>

        <div className='
        flex overflow-scroll 
        mt-8 xl:mt-12 
        gap-4 xl:gap-8' style={{
            scrollbarWidth:'none',
        }}>

            {
                ArchitectureCards.map((card, _)=>[

                    <div className='relative flex-shrink-0'>
                        
                        <img className='
                        w-52 xl:w-[280px] 
                        h-60 xl:h-[350px]' src={card.img}></img>
                        <p className='
                        absolute 
                        bottom-8 xl:bottom-11 
                        font-jakarta font-medium text-white text-center
                        justify-self-center
                        text-sm xl:text-xl 
                        '>{card.text}</p>
                
                    </div>
                ])
            }
                
            
        </div>

    </div>
  )
}
