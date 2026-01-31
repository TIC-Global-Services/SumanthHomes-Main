import { HeroSection } from '../Components/HomePageComponents/HeroSection'
import { HistorySection } from "../Components/HomePageComponents/HistorySection"
import ProjectSection from '../Components/HomePageComponents/ProjectSection'
import { ArchitectureDesignSection } from "../Components/HomePageComponents/ArchitectureDesignSection"
import { VideoPlayerSection } from "../Components/HomePageComponents/VideoPlayerSection"
import { MiniStatsSections } from "../Components/HomePageComponents/MiniStatsSections"
import { MapSection } from "../Components/HomePageComponents/MapSection"
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from '../Layout/ContainerLayout'
import { ScrollToTop } from "../utils/ScrollToTop"
import ADCards  from '../Components/HomePageComponents/ADCards'
import { ParallaxProvider } from 'react-scroll-parallax'

const HomePage = () => {

  return (
    <div className='overflow-hidden' >
      <ParallaxProvider>
        <ScrollToTop/>
        <NavBar />
        <HeroSection/>
        <ContainerLayout>    
            <HistorySection/>
            <ProjectSection/> 
            <ArchitectureDesignSection/>
        </ContainerLayout>
        <div className='pl-[20px] pr-[20px] md:pl-[43px] lg:pl-[57px] xl:pl-[71px] 2xl:pl-[80px] overflow-scroll' style={{scrollbarWidth:"none"}}>
          <ADCards/>
        </div>
        <ContainerLayout>
            <VideoPlayerSection />
            <MiniStatsSections/>
            <MapSection/>
        </ContainerLayout>
        <Footer/>
        </ParallaxProvider>
    </div>
  )
}

export default HomePage;