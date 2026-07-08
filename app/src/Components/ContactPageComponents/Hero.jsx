import {gsap, TextPlugin} from "gsap/all"
import ParallaxComponent from "../../utils/ParallaxComponent";


gsap.registerPlugin(TextPlugin);

export const Hero = ({bgImage, mainText, subText, white=false}) => {
  

  

  return (

    <div className="w-full overflow-hidden">

      <ParallaxComponent>
        <img src={bgImage} alt="HeroImage" className="relative w-[100%] h-[100dvh] object-cover object-right lg:object-center lg:h-[100svh] xl:h-auto xl:aspect-[1440/553]  lg:scale-120 xl:scale-150" />
      </ParallaxComponent>
        
      

        <div className='absolute  w-[100%] top-[0%] h-[80dvh] lg:h-[100dvh] xl:h-auto xl:aspect-[1440/553] text-center justify-self-center flex justify-center items-center'>

        <div>
          <h2 className={`
            font-manrope font-normal tracking-wide md:tracking-[-4px]
            text-3xl md:text-6xl xl:text-[86px] 
            xl:mb-6 md:mb-4 ${white ? 'text-white' : 'text-black'}`}>{mainText}</h2>

            <p className='
            font-semibold
            tracking-[3px] uppercase text-[#B40505]
            md:text-xs xl:text-[13px]'
            
            >{subText}</p>

        </div>
            
        </div>

    </div>
  )
}
