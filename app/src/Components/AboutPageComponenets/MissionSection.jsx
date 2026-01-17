import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger, TextPlugin } from "gsap/all";
import '../../assets/styles/titleStyle.css';
import missionImage from "../../assets/img/AboutSection/missionImage.png"
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const MissionSection = () => {

    const subtitleRef = useRef(null);
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
    <div  ref={containerRef} className='
    overflow-hidden
    flex flex-col md:flex-row justify-between items-center
    xl:gap-10 md:gap-3  xl:mt-4 md:mt-4
    mb-14 xl:mb-20 md:mb-14'>

        <div ref={imageRef} className='order-2 md:order-1'>

            <img className='
            xl:h-[18rem]
            xl:w-[40rem]' src={missionImage}></img>

        </div>

        <div className='xl:w-[50%] order-1 md:order-2'>

            <div ref={titleRef}>
              <p className='
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[0.2rem] [word-spacing:3px]
            text-[rgb(181,4,4)]
            text-xs'>OUR MISSION</p>

              <h2
            ref={subtitleRef}
            className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold
            text-3xl xl:text-4xl md:text-xl'>Designs that Inspire Living</h2>
            </div>

            <p ref={contentRef} className='mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>

                At Sumanth Homes, we channel all our resources, energy, and expertise toward delivering high-quality infrastructure built to the highest standards. We constantly evaluate our actions, learning from every experience to improve and evolve. This approach empowers us to take on greater challenges and drives our continuous growth as a firm.

            </p>

        </div>



    </div>
  )
}
