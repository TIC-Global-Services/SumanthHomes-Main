import { DefaultHeroSection } from "../Components/DefaultHeroSection"
import { ArchitectureProcessSection } from "../Components/OurProjectsPageComponents/ArchitectureProcessSection"
import bgImage from "../assets/img/OurProjectsPage/ourProjectsBgImage.png"
import Hero from '../Components/Project/Hero'
import Crafting from '../Components/Project/crafting'
import Upgrade from '../Components/Project/upgrade'
import ExploreDetails from '../Components/Project/exploreDetails'
import Amenities from '../Components/Project/amenities'
import Video from '../Components/Project/video'
import { OurProjectsSection } from "../Components/OurProjectsPageComponents/OurProjectsSection"
import { CompletedProjectsSection } from "../Components/OurProjectsPageComponents/CompletedProjectsSection"
import { ExploreMoreSection } from "../Components/OurProjectsPageComponents/ExploreMoreSection"
import OngoingDevelopment from '../Components/Project/ongoingDevelopment'
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from "../Layout/ContainerLayout"
import { ScrollToTop } from "../utils/ScrollToTop"
import { ParallaxProvider } from "react-scroll-parallax"
import Urbanscapes from "../Components/Project/urbenscaps"

const ProjectsPage = () => {


  return (
    <div className="overflow-hidden" style={{ backgroundImage: "url('/bg_layer.svg')", backgroundRepeat: 'repeat-y', backgroundSize: 'contain', backgroundPosition: 'center' }}>
      <ParallaxProvider>
        <ScrollToTop />
        {/* <DefaultHeroSection bgImage={bgImage} mainText={"Our Projects"} subText={"Great Architecture Services"} /> */}
        {/* <ContainerLayout> */}
        {/* <Hero />
        <Crafting />
        <Upgrade />
        <ExploreDetails />
        <Amenities />
        <Video />
        <OngoingDevelopment />
        <Urbanscapes /> */}
        <DefaultHeroSection bgImage={bgImage} mainText={"Our Projects"} subText={"Great Architecture Services"} />
        <ContainerLayout>
          <ArchitectureProcessSection />
          <OurProjectsSection />
          <CompletedProjectsSection />
          <ExploreMoreSection />
        </ContainerLayout>
        {/* </ContainerLayout>   */}

      </ParallaxProvider>
    </div>
  )
}

export default ProjectsPage;