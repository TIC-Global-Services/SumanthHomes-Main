import { HeroSection } from '../Components/HomePageComponents/HeroSection'
import { HistorySection } from "../Components/HomePageComponents/HistorySection"
import { ProjectSection } from '../Components/HomePageComponents/ProjectSection'
import { ArchitectureDesignSection } from "../Components/HomePageComponents/ArchitectureDesignSection"
import { VideoPlayerSection } from "../Components/HomePageComponents/VideoPlayerSection"
import { MiniStatsSections } from "../Components/HomePageComponents/MiniStatsSections"
import { MapSection } from "../Components/HomePageComponents/MapSection"
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from '../Layout/ContainerLayout'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react';
import { ScrollToTop } from "../utils/ScrollToTop"

export const HomePage = () => {

  return (
    <div>
        <ScrollToTop/>
        <NavBar />
        <HeroSection/>
        <ContainerLayout>    
            <HistorySection/>
            <ProjectSection/> 
            <ArchitectureDesignSection/>
            <VideoPlayerSection />
            <MiniStatsSections/>
            <MapSection/>
        </ContainerLayout>
        <Footer/>
    </div>
  )
}
