import bgImage from "../../assets/img/OurProjectsSection/arialDayView.jpg";
import { DefaultOurProjects } from "../DefaultOurProjectsSection";

export const ProjectSection = () => {

  const miniHeader = "PREMIUM LIVING SPACES";
  const mainHeader = "LOTUS SERENE VILLAS";
  const description = "Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati."

  return (
    <div>

        <div className='
        text-center  
        text-3xl xl:text-2xl md:text-2xl
        xl:mb-5 md:mb-5
        py-10
         '>
                <h2 className="font-manrope font-semibold text-[#B50404]">OUR PROJECTS</h2>
        </div>
        <DefaultOurProjects id={1} bgImage={bgImage} miniHeader={miniHeader} mainHeader={mainHeader} description={description} />
    </div>
  )
}
