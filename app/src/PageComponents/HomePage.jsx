import { HeroSection } from '../Components/HomePageComponents/HeroSection'
import { HistorySection } from "../Components/HomePageComponents/HistorySection"
import { ArchitectureDesignSection } from "../Components/HomePageComponents/ArchitectureDesignSection"
import { MiniStatsSections } from "../Components/HomePageComponents/MiniStatsSections"
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from '../Layout/ContainerLayout'
import { ScrollToTop } from "../utils/ScrollToTop"
import { ParallaxProvider } from 'react-scroll-parallax'
import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react'

const ADCards = lazy(()=>import('../Components/HomePageComponents/ADCards'));
const ProjectSection = lazy(()=>import('../Components/HomePageComponents/ProjectSection'));
const VideoPlayerSection = lazy(()=>import('../Components/HomePageComponents/VideoPlayerSection'));
const MapSection = lazy(()=>import('../Components/HomePageComponents/MapSection'));

const HomePage = () => {

  const [showLate, setShowLate] = useState(false);

  useEffect(()=>{
    setShowLate(true);
  }, [])

  return (
    <div className='overflow-hidden' >
      <ParallaxProvider>
        <ScrollToTop/>
        <NavBar />
        <HeroSection/>
        <ContainerLayout>    
            <HistorySection/>
            <Suspense fallback={<div>Loading...</div>}>
              { showLate && <ProjectSection/> }
            </Suspense>
            <ArchitectureDesignSection/>
        </ContainerLayout>
        <div className='pl-[20px] pr-[20px] md:pl-[43px] lg:pl-[57px] xl:pl-[71px] 2xl:pl-[80px] overflow-scroll' style={{scrollbarWidth:"none"}}>
          <Suspense fallback={<div>Loading...</div>}>
            { showLate && <ADCards/> }
          </Suspense>
        </div>
        <ContainerLayout>
          <Suspense fallback={<div>Loading...</div>}>
            { showLate && <VideoPlayerSection/> }
          </Suspense>
            <MiniStatsSections/>
          <Suspense fallback={<div>Loading...</div>}>
            { showLate && <MapSection/>}
          </Suspense>
        </ContainerLayout>
        <Footer/>
        </ParallaxProvider>
    </div>
  )
}

export default HomePage;