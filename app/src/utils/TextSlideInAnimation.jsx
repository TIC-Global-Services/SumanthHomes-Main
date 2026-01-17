import { ScrollTrigger, gsap } from "gsap/all";
    
gsap.registerPlugin(ScrollTrigger);

export const TextSlideInAnimation = (titleRef, contentRef, containerRef) => {

  ScrollTrigger.config({ignoreMobileResize:true})


    const title = titleRef.current;
    const content = contentRef.current;

    gsap.fromTo(title, {
      y:200,
      opacity:0,
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top bottom",
        toggleActions:"play none none reset",
        markers:true,
      }
    },
    {
      y:0,
      duration:.5,
      opacity:1,
      
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top bottom",
        markers:true,
        toggleActions:"play none none reset",
      }
    }
  )


  gsap.fromTo(content, {
      y:100,
      opacity:0,
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top bottom",
        toggleActions:"play none none reset",
      }
    },
    {
      y:0,
      opacity:1,
      delay:.3,
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top bottom",
        toggleActions:"play none none reset",
      }
    }
  )
  return
}
