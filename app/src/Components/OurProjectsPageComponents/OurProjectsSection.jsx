import Prj1BgImage from "../../assets/img/OurProjectsSection/arialDayView.jpg"
import Prj2BgImage from "../../assets/img/OurProjectsPage/elevation8k.jpg"
import { DefaultOurProjects } from "../DefaultOurProjectsSection"
import { useRef, useEffect } from "react"
import { gsap ,ScrollTrigger, TextPlugin } from "gsap/all"
import '../../assets/styles/titleStyle.css';
import {motion} from "motion/react"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur"
import BlurText from "../../utils/BlurText"
import { TitleStyleData } from "../../utils/TitleComponentStyle"


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const OurProjectsSection = () => {

    

  const titleRef = useRef(null);
      
      useEffect(()=>{
          const el = titleRef.current;
          
          gsap.to(el, {
              duration:2,
              text:{
                  value:'Ongoing Projects',
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
    <div className="w-full">

        <motion.div
        
        className="mb-10">

            <BlurText
              text="DREAMS IN CONCRETE"
              delay={120}
              animateBy="words"
              direction="bottom"
              className={`text-center 
            flex justify-center items-center
            mb-1 xl:mb-4 md:mb-1 ${TitleStyleData.miniTitle}`}
            
            />

            <BlurText
              text=" Ongoing Projects"
              delay={120}
              animateBy="words"
              direction="bottom"
              className={`flex justify-center items-center text-center xl:mb-5 md:mb-5 ${TitleStyleData.mainTitle}`}
            />

            
           

            

            
        </motion.div>

        <DefaultOurProjects id={'villa1'} bgImage={Prj1BgImage} miniHeader={'Premium Living Spaces'} mainHeader={'LOTUS SERENE VILLAS'} description={'Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati.'} />
        
        <DefaultOurProjects id={'villa2'} bgImage={Prj2BgImage} miniHeader={'A work in motion'} mainHeader={'URBANSCAPES'} description={' Urbanscapes is a contemporary Hi- Rise Building in Tirupati. We aim to building a beautiful 2 & 3 BHK gated community with fully loaded amenities.'} /> 
    </div>
  )
}
