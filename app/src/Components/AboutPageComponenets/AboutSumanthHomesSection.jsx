import imageLeft from "../../assets/img/AboutSection/image-left.png"
import imageMiddle from "../../assets/img/AboutSection/image-middle.png"
import imageRight from "../../assets/img/AboutSection/image-right.png"
import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger, TextPlugin } from "gsap/all";
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";
import '../../assets/styles/titleStyle.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const AboutSumanthHomesSection = () => {

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const imageRef = useRef(null);

  useEffect(()=>{
    TextSlideInAnimation(titleRef, contentRef, containerRef);

    gsap.fromTo(imageRef.current, {
          x:-100,
          scrollTrigger:{
            trigger:containerRef.current,
            toggleActions:"play none none reset",
        }
        },
        {
          x:0,
          duration:.5,
          scrollTrigger:{
            trigger:containerRef.current,
            toggleActions:"play none none reset"
          }
        })
  },[])

  return (

    <div ref={containerRef} className='
    w-full
    flex items-center flex-wrap xl:flex-nowrap
    gap-8 md:gap-12 xl:gap-32
    mt-8 xl:mt-20 md:mt-14
    mb-14 xl:mb-40 md:mb-12'>

        <div ref={imageRef} className='
        w-full xl:w-[50%]
        flex items-center relative
        gap-4
        mb-4
        '>

            <img className='
            w-[45%]
            aspect-square
            
            ' src={imageLeft}
            
            ></img>

            <img className='
            bg-black
            absolute
            top-[5rem] xl:top-[30%] md:top-[30%]
            left-[5rem] md:left-[35%] xl:left-[25%]
            w-[45%]
            aspect-square
            ' 
            src={imageMiddle}
            
            ></img>

            <img className='
            w-[55%]
            aspect-square
             ' src={imageRight}
            
             ></img>

        </div>

        <div className='
        
        w-[100%] xl:w-[45%] md:w-[80%]
        '>

          <div ref={titleRef}>
            <p className='
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[3px] [word-spacing:3px]
            text-[rgb(181,4,4)]
            text-xs'>About Sumanth homes</p>


            <h4 className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold 
            xl:w-[80%]
            text-3xl xl:text-4xl md:text-xl'>Crafting contemporary buildings with elegance.</h4>

          </div>

            <p
            ref={contentRef}
            className='w-full mb-4 tracking-normal font-normal text-xl text-[#737373] '>
              
              Established in 2013, Sumanth Homes is a partnership firm specializing in high-quality residential and commercial projects. With over 30 years of experience, Managing Partner Manohar Katta brings deep industry expertise and traditional values, while the other partners contribute modern technologies and advanced quality control practices.

            </p>

            <div className='flex gap-2 items-center '>

                <p className='
                font-extrabold uppercase 
                 '>Explore Services</p>

                <button>

                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7445 7.45647C12.079 7.12192 12.079 6.57862 11.7445 6.24407L7.46227 1.96185C7.12772 1.6273 6.58442 1.6273 6.24987 1.96185C5.91532 2.2964 5.91532 2.8397 6.24987 3.17425L9.07346 5.99516H0.862303C0.388583 5.99516 0.00585938 6.37789 0.00585938 6.85161C0.00585938 7.32533 0.388583 7.70805 0.862303 7.70805H9.07078L6.25255 10.529C5.918 10.8635 5.918 11.4068 6.25255 11.7414C6.58709 12.0759 7.1304 12.0759 7.46495 11.7414L11.7472 7.45915L11.7445 7.45647Z" fill="#191919"/>
                  </svg>

                </button>

            </div>

        </div>


    </div>
  )
}
