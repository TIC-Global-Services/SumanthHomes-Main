import { ScrollTrigger, gsap } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const TextSlideInAnimation = (titleRef, contentRef, containerRef) => {

    const title = titleRef.current;
    const content = contentRef.current;

    gsap.fromTo(title, {
      y:200,
      opacity:0,

      scrollTrigger:{
        trigger:containerRef.current,
        start:"top 90%",
        toggleActions:"play reverse play reverse",
        invalidateOnRefresh:true,
        immediateRender:false,
      }
    },
    {
      y:0,
      duration:.5,
      opacity:1,
      
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top 90%",
        toggleActions:"play reverse play reverse",
        invalidateOnRefresh:true,
      }
    }
  )


  gsap.fromTo(content, {
      y:100,
      opacity:0,
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top 90%",
        invalidateOnRefresh:true,
        immediateRender:false,
        toggleActions:"play reverse play reverse",
      }
    },
    {
      y:0,
      opacity:1,
      delay:.3,
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top 90%",
        toggleActions:"play reverse play reverse",
        invalidateOnRefresh:true,
      }
    }
  )
  return
}
