import bgimage from "../../assets/img/heroSection/heroSectionImage.jpg";

export const HeroSection = () => {


  return (
    <div className="
    relative
    w-full
    min-h-[100svh]
    hero-section" style={{
        backgroundImage:`url(${bgimage})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        opacity:1,
    }}>


    <h2 className='
    absolute
    text-white font-manrope font-bold
    bottom-0 left-0
    w-[80%] md:w-[70%] lg:w-[70%] xl:w-[60%] 
    pl-4 xl:pl-20 md:pl-10
    pb-9 xl:pb-20 md:pb-10 
    text-4xl md:text-5xl lg:text-6xl  xl:text-6xl 2xl:text-6xl
    
    '>
            Elevating Every Space with Purpose and Precision
    </h2>

    </div>
  )
}
