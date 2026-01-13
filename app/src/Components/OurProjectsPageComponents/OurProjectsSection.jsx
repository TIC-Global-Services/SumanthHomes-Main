import Prj1BgImage from "../../assets/img/OurProjectsSection/arialDayView.jpg"
import Prj2BgImage from "../../assets/img/OurProjectsPage/elevation8k.jpg"
import { DefaultOurProjects } from "../DefaultOurProjectsSection"

export const OurProjectsSection = () => {
  return (
    <div>

        <div className="mb-10">
            <p className='
            text-center 
            xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[0.2rem] [word-spacing:3px]
            text-[rgb(181,4,4)]
            text-xs'>DREAMS IN CONCRETE</p>
            <h2 className='
            text-center font-manrope font-semibold
          text-black
            text-3xl xl:text-4xl xl:mb-5 md:text-2xl md:mb-5 '>Ongoing Projects</h2>
        </div>

        <DefaultOurProjects bgImage={Prj1BgImage} miniHeader={'Premium Living Spaces'} mainHeader={'LOTUS SERENE VILLAS'} description={'Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati.'} />
        <DefaultOurProjects bgImage={Prj2BgImage} miniHeader={'A work in motion'} mainHeader={'URBANSCAPES'} description={' Urbanscapes is a contemporary Hi- Rise Building in Tirupati. We aim to building a beautiful 2 & 3 BHK gated community with fully loaded amenities.'} />
    </div>
  )
}
