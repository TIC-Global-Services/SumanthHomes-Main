import { DefaultHeroSection } from "../Components/DefaultHeroSection"
import { ArchitectureProcessSection } from "../Components/OurProjectsPageComponents/ArchitectureProcessSection"
import bgImage from "../assets/img/OurProjectsPage/ourProjectsBgImage.png"
import { OurProjectsSection } from "../Components/OurProjectsPageComponents/OurProjectsSection"
import { CompletedProjectsSection } from "../Components/OurProjectsPageComponents/CompletedProjectsSection"
import { ExploreMoreSection } from "../Components/OurProjectsPageComponents/ExploreMoreSection"
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from "../Layout/ContainerLayout"
import { ScrollToTop } from "../utils/ScrollToTop"

export const ProjectsPage = () => {



  return (
    <div>
        <ScrollToTop/>
       <NavBar />
        <DefaultHeroSection bgImage={bgImage} mainText={"Our Projects"} subText={"Great Architecture Services"} />
        <ContainerLayout>
            <ArchitectureProcessSection />
            <OurProjectsSection />
            <CompletedProjectsSection />
            <ExploreMoreSection/>
        </ContainerLayout>
        <Footer/>
    </div>
  )
}
