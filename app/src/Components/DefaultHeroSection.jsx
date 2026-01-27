import {gsap, TextPlugin} from "gsap/all"


gsap.registerPlugin(TextPlugin);

export const DefaultHeroSection = ({bgImage, mainText, subText, white=false}) => {
  

  

  return (

    <div className='
    flex items-center justify-center
    w-[100%]
    h-[14rem] md:h-[18rem] xl:h-auto
    xl:aspect-[1440/553]
    ' style={{

        backgroundImage:`url(${bgImage})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover'
    }}>

        <div className='text-center'>

            <h2 className={`
            font-manrope font-normal tracking-wide md:tracking-[-4px]
            text-3xl md:text-6xl xl:text-7xl xl:tracking-tighter 
            xl:mb-6 md:mb-4 ${white ? 'text-white' : 'text-black'}`}>{mainText}</h2>

            <p className='
            font-semibold
            tracking-[3px] uppercase [word-spacing:5px] text-[#B40505]
            md:text-xs xl:text-xs'
            
            >{subText}</p>

        </div>

    </div>
  )
}
