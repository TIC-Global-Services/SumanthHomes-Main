import Prj1BgImage from "../../assets/img/OurProjectsSection/arialDayView.jpg"
import Prj2BgImage from "../../assets/img/OurProjectsPage/elevation8k.jpg"
import Logo1 from "../../assets/img/OurProjectsSection/lotus_serene_villas.png"
import Logo2 from "../../assets/img/OurProjectsSection/urbanscapes_logo.png"
import { OngoingProjectCard } from "./sub-componenets/OngoingProjectCard"
import '../../assets/styles/titleStyle.css';
import { motion } from "motion/react"
import BlurText from "../../utils/BlurText"
import { TitleStyleData } from "../../utils/TitleComponentStyle"

const ongoingProjects = [
  {
    id: 'villa1',
    badge: 'RECENT PROJECTS',
    bgImage: Prj1BgImage,
    miniHeader: 'Premium Living Spaces',
    mainHeader: 'LOTUS SERENE VILLAS',
    description: 'Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati.',
    logoImage: Logo1,
    link: '/lotus-villas-phase-2',
  },
  {
    id: 'villa2',
    badge: 'RECENT PROJECTS',
    bgImage: Prj2BgImage,
    miniHeader: 'A work in motion',
    mainHeader: 'URBANSCAPES',
    description: 'Urbanscapes is a contemporary Hi-Rise Building in Tirupati. We aim to building a beautiful 2 & 3 BHK gated community with fully loaded amenities.',
    logoImage: Logo2,
    link: '/urbanscapes',
  },
];

export const OurProjectsSection = () => {
  return (
    <div className="w-full mt-[120px] md:mt-[120px]">
      <motion.div className="mb-[30px] md:mb-[60px]">
        <BlurText
          text="DREAMS IN CONCRETE"
          delay={120}
          animateBy="words"
          direction="bottom"
          className={`text-center text-[#B50404] flex justify-center items-center font-semibold text-[10px] md:text-xs tracking-tight md:tracking-wider`}
        />

        <BlurText
          text=" Ongoing Projects"
          delay={120}
          animateBy="words"
          direction="bottom"
          className={`flex justify-center items-center text-center text-2xl md:text-[38px]`}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full max-w-6xl mx-auto">
        {ongoingProjects.map((project) => (
          <OngoingProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
