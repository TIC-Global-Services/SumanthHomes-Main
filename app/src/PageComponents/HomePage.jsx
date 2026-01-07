import { HeroSection } from '../Components/HomePageComponents/HeroSection'
import { HistorySection } from "../Components/HomePageComponents/HistorySection"
import { ArchitectureDesignSection } from "../Components/HomePageComponents/ArchitectureDesignSection"
import { VideoPlayerSection } from "../Components/HomePageComponents/VideoPlayerSection"
import { MiniStatsSections } from "../Components/HomePageComponents/MiniStatsSections"
import { MapSection } from "../Components/HomePageComponents/MapSection"
import { DefaultOurProjects } from '../Components/DefaultOurProjectsSection'
import bgImage from "../assets/img/OurProjectsSection/arialDayView.jpg";
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from '../Layout/ContainerLayout'


export const HomePage = () => {


  const miniHeader = "PREMIUM LIVING SPACES";
  const mainHeader = "LOTUS SERENE VILLAS";
  const description = "Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati."

  return (
    <div>
        <NavBar />
        <HeroSection/>
        <ContainerLayout>    
            <HistorySection/>
            <div className='text-center font-manrope font-semibold text-[#B50404] xl:text-2xl xl:mb-5 md:text-2xl md:mb-5 '>
                <h2>OUR PROJECTS</h2>
            </div>
            {/* <DefaultOurProjects bgImage={bgImage} miniHeader={miniHeader} mainHeader={mainHeader} description={description} /> */}
            <ArchitectureDesignSection/>
            <VideoPlayerSection />
            <MiniStatsSections/>
            <MapSection/>
        </ContainerLayout>
        
        <Footer/>
    </div>
  )
}
