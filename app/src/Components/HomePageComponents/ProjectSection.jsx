import bgImage from "../../assets/img/OurProjectsSection/arialDayView.jpg";
import { DefaultOurProjects } from "../DefaultOurProjectsSection";
import { motion } from "motion/react";
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";

const ProjectSection = () => {

  const miniHeader = "PREMIUM LIVING SPACES";
  const mainHeader = "LOTUS SERENE VILLAS";
  const description = "Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati."

  return (
    <div id="prj" className="mb-20 md:mb-[120px]">

        <div className='
        text-center  
        text-3xl xl:text-2xl md:text-2xl
        mb-5 md:mb-10
         '>
               <BlurText
                text="OUR PROJECTS"
                animateBy="words"
                direction="bottom "
                className="text-[#B50404]
                font-manrope font-semibold
                text-2xl  md:text-2xl xl:text-[28px]
                tracking-0 md:tracking-[-0.5px]
                flex justify-center
                "
                />
        </div>
        <DefaultOurProjects id={'villa1'} bgImage={bgImage} miniHeader={miniHeader} mainHeader={mainHeader} description={description} />
    </div>
  )
}


export default ProjectSection;