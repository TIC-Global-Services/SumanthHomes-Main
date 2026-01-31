import bgImage from "../../assets/img/AboutSection/consultationBgImage.png";
import { useNavigate } from "react-router-dom";
import ParallaxComponent from "../../utils/ParallaxComponent";

export const ConsultationSection = () => {

  const navigate = useNavigate();
    
  const handleClick = () =>{
    navigate('/contact');
  }

  return (
    <div className='
    relative
    overflow-hidden
    flex 
    w-full
    aspect-[3/2] md:aspect-[3/1]
    mb-20 xl:mb-36 md:mb-14
    ' >

      <ParallaxComponent className={`w-full
      aspect-[3/2] md:aspect-[3/1]
      mb-20 xl:mb-36 md:mb-14`}>
        <img src={bgImage} alt="consultation Image" 
      className="
      scale-150
      w-full
      aspect-[3/2] md:aspect-[3/1]
      " />
      </ParallaxComponent>
      

        <div className='
        w-full
        aspect-[3/2] md:aspect-[3/1]
        absolute inset-0
        flex flex-col items-start sm:justify-center md:items-start md:justify-end
        mb-20 xl:mb-36 md:mb-14 
        pb-8 pl-10
        '>

          <div className='my-auto sm:my-0'>

            <h2 className='
            font-manrope font-semibold text-white tracking-[-0.5px]
            text-2xl xl:text-4xl md:text-2xl
            xl:mb-2'>
              Let's Build Something Meaningful</h2>

            <p className='
            hidden sm:block
            font-normal text-white 
            text-base md:text-xs xl:text-base
            xl:mb-3
            md:leading-5
            md:mb-1'>
              We're here to discuss your ideas, understand your vision, and guide you through the entire design journey.
              </p>


          </div>

          <div className=''>
            <button onClick={handleClick} className='
            bg-[#B50404] font-manrope font-bold tracking-[2px] rounded-md
             px-4 md:px-8 xl:px-14
             py-2 md:py-2 xl:py-4 
             hover:bg-white hover:text-[#B50404]
            text-white
             md:text-sm'>BOOK A CONSULTATION</button>
          </div>
            
            
        </div>

    </div>
  )
}
