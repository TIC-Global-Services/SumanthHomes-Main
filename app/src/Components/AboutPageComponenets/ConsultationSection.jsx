import bgImage from "../../assets/img/AboutSection/consultationBgImage.png";
import { useNavigate } from "react-router-dom";

export const ConsultationSection = () => {

  const navigate = useNavigate();
    
  const handleClick = () =>{
    navigate('/contact');
  }

  return (
    <div className='
    flex 
    w-full
    aspect-[3/]
    md:aspect-auto
    xl:h-[30rem] md:h-[15rem]
    mb-20 xl:mb-36 md:mb-14
    ' 
      style={{

      backgroundImage:`url(${bgImage})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
    }}>

        <div className='
        flex flex-col justify-between items-center md:items-start md:justify-end
        m-8
        w-full
        h-full md:h-auto
        xl:w-[45%] md:w-[60%]
        
        
        '>

          <div className=''>

            <h2 className='
            font-manrope font-semibold text-white
            text-2xl xl:text-4xl md:text-2xl
            xl:mb-2'>
              Let's Build Something Meaningful</h2>

            <p className='
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
            bg-[#B50404] font-manrope font-bold tracking-wide rounded-md
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
