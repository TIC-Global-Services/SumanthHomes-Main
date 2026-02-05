import bgImage from "../../assets/img/AboutSection/consultationBgImage.png";
import { useNavigate } from "react-router-dom";
import ParallaxComponent from "../../utils/ParallaxComponent";

const ConsultationSection = () => {

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
    md:aspect-[3/1]
    xl:mb-36 md:mb-14
    ' >

      <ParallaxComponent className={`w-full
      aspect-[3/2] md:aspect-[3/1]
      mb-20 xl:mb-36 md:mb-14`}>
        <img src={bgImage} alt="consultation Image" 
      className="
      scale-150
      w-full
      aspect-[375/575] md:aspect-[3/1]
      " />
      </ParallaxComponent>
      

        <div className='
        w-[80%] md:w-full
        aspect-[3/2] md:aspect-[3/1]
        absolute left-0 bottom-0 md:inset-0
        flex flex-col items-start sm:justify-center md:items-start md:justify-end
        xl:mb-36 md:mb-14 
        pb-10 md:pb-8
        pl-6 md:pl-10
        '>

          <div className=''>

            <h2 className='
            font-manrope font-semibold
            text-[40px] xl:text-4xl md:text-2xl
          text-[#F7F7F2]
           tracking-[-0.5px]
           leading-[48px]
           mb-4 xl:mb-2'>
              Let's Build Something Meaningful</h2>

            <p className='
            w-[80%] md:w-auto
            font-normal text-white 
            text-xs md:text-xs xl:text-base
            xl:mb-3
            leading-[15px] md:leading-5
            mb-4 md:mb-1'>
              We're here to discuss your ideas, understand your vision, and guide you through the entire design journey.
              </p>


          </div>

          <div className=''>
            <button onClick={handleClick} className='
            uppercase
            bg-[#B50404] font-manrope font-bold tracking-0 md:tracking-[2px] rounded-md
             px-4 md:px-8 xl:px-14
             py-2 md:py-2 xl:py-4 
             hover:bg-white hover:text-[#B50404] active:bg-[#B50404] active:text-white
            text-white
             text-[11px] md:text-sm'>BOOK A CONSULTATION</button>
          </div>
            
            
        </div>

    </div>
  )
}

export default ConsultationSection;