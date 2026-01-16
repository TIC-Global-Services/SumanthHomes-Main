import imageLeft from "../../assets/img/AboutSection/image-left.png"
import imageMiddle from "../../assets/img/AboutSection/image-middle.png"
import imageRight from "../../assets/img/AboutSection/image-right.png"
import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger, TextPlugin } from "gsap/all";
import '../../assets/styles/titleStyle.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const AboutSumanthHomesSection = () => {

  const titleRef = useRef(null);

  useEffect(()=>{

    const el = titleRef.current;

    gsap.to(el, {
      duration:2,
      text:{
        value:'Crafting contemporary buildings with elegance.',
        oldClass:'start',
        newClass:'end',
      },
      scrollTrigger:{
        trigger:el,
        start:"top center"
      }
    })
  },[])
  return (

    <div className='
    flex items-center flex-wrap
    gap-8 md:gap-12 xl:gap-16
    mt-8 xl:mt-20 md:mt-14
    mb-14 xl:mb-20 md:mb-12'>

        <div className='
        flex items-center relative
        gap-1 xl:gap-3 md:gap-2
        '>

            <img className='
            w-[17rem] xl:w-[19rem] md:w-[29rem]
            h-[8rem] xl:h-[16rem] md:h-[10rem]
            
            ' src={imageLeft}
            
            ></img>

            <img className='
            absolute
            top-[3rem] xl:top-[30%] md:top-[30%]
            left-[2rem] md:left-[35%] xl:left-[25%]
            w-[10rem] md:w-[15rem] xl:w-[16rem]
            h-[8rem] md:h-[11rem] xl:h-[15rem] 
            ' 
            src={imageMiddle}
            
            ></img>

            <img className='
            w-[30rem] xl:w-[20rem] md:w-[29rem]
            h-[10rem] xl:h-[19rem] md:h-[13rem]
             ' src={imageRight}
            
             ></img>

        </div>

        <div className='
        w-[100%] xl:w-[40%] md:w-[90%]
        '>

            <p className='
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[0.2rem] [word-spacing:3px]
            text-[rgb(181,4,4)]
            text-xs'>About Sumanth homes</p>


            <h4 ref={titleRef} className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold
            text-3xl xl:text-4xl md:text-xl'>Crafting contemporary buildings with elegance.</h4>

            <p className='mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>
              
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
