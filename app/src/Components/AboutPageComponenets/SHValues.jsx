import image1 from "../../assets/img/AboutSection/shvalueImage1.png"
import image2 from "../../assets/img/AboutSection/shvalueImage2.png"
import { useRef, useEffect } from "react";
import { gsap, TextPlugin, ScrollTrigger } from "gsap/all";
import '../../assets/styles/titleStyle.css'
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const SHValues = () => {

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
      
      useEffect(()=>{
        TextSlideInAnimation(titleRef, contentRef, containerRef);

        gsap.fromTo(image1Ref.current, {
          y:100,
          scrollTrigger:{
            trigger:containerRef.current,
            toggleActions:"play none none reset",
        }
        },
        {
          y:0,
          duration:2,
          scrollTrigger:{
            trigger:containerRef.current,
            toggleActions:"play none none reset"
          }
        })

        gsap.fromTo(image2Ref.current, {
          y:100,
          scrollTrigger:{
            trigger:containerRef.current,
            toggleActions:"play none none reset",
        }
        },
        {
          y:0,
          duration:2,
          scrollTrigger:{
            trigger:containerRef.current,
            toggleActions:"play none none reset"
          }
        })
      },[])

  return (
    <div ref={containerRef} className='flex xl:gap-3 
    mb-14 xl:mb-28'>

        <div className=' xl:w-[80%]'>

            <div ref={titleRef}>
            <p className='
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[0.2rem] [word-spacing:3px]
            text-[rgb(181,4,4)]
            text-xs'>SH VALUES</p>

            <h2 
            className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold 
            text-3xl xl:text-4xl md:text-xl'>What We Stand For</h2>
            </div>

            <p ref={contentRef} className='mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>
              Our mission is to channel our passion, expertise, and resources into crafting premium infrastructure that meets the highest standards of quality and design. We believe in learning, evolving, and improving with every project — constantly questioning our processes to achieve perfection. By embracing challenges and refining our approach, we aim to grow stronger as a firm and continue creating homes that reflect integrity, comfort, and enduring value.
            </p>

        </div>

        <div ref={image1Ref} className='hidden xl:block'>

            <img className='
            xl:w-[70rem]
            xl:h-[27rem] md:h-[12rem]' src={image1} />

            <p className='xl:mt-1 md:mt-1'>Timeless Design</p>

        </div>

        <div ref={image2Ref} className='hidden xl:block'>

            <img className='xl:w-[70rem] xl:h-[20rem] md:h-[12rem]' src={image2} />

            <p className='xl:mt-1 md:mt-1'>Honest Craftmanship</p>

        </div>

    </div>
  )
}
