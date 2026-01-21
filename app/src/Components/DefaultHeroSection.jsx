import {gsap, TextPlugin} from "gsap/all"


gsap.registerPlugin(TextPlugin);

export const DefaultHeroSection = ({bgImage, mainText, subText, white=false}) => {
  

  

  return (

    <div className='
    flex items-center justify-center
    w-[100%]
    h-[14rem] xl:h-[24rem] md:h-[18rem]' style={{

        backgroundImage:`url(${bgImage})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover'
    }}>

        <div className='text-center'>

            <h2 className={`
            font-manrope font-normal
            text-3xl md:text-6xl xl:text-7xl xl:tracking-tighter md:tracking-tight
            xl:mb-6 md:mb-4 ${white ? 'text-white' : 'text-black'}`}>{mainText}</h2>

            <p className='
            font-jakarta font-semibold
            tracking-widest uppercase [word-spacing:5px] text-[#B40505]
            text-[.8rem] md:text-xs xl:text-xs'
            
            >{subText}</p>

        </div>

    </div>
  )
}
