import { SplitText} from "gsap/SplitText"
import gsap from "gsap/all"
import { useState, useEffect } from "react";

gsap.registerPlugin(SplitText);

const MapSection = () => {
  
  const [latitude, setLatitude] = useState('0');
  const [longitude, setLongitude] = useState('0');

  useEffect(()=>{

    const setPosition = (position) =>{
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    }

    navigator.geolocation.getCurrentPosition(setPosition)
    
  },[])

  return (
    <div className='mb-20 xl:mb-36 md:mb-14'>

      <iframe 
      className='
      pointer-events-none
      aspect-[4/3] md:aspect-[3/1]
      w-full
      '
      src="https://www.openstreetmap.org/export/embed.html?bbox=79.09950256347656%2C13.414333619316578%2C79.74220275878908%2C13.84141349246619&amp;layer=hot&amp;marker=13.627971281465944%2C79.42085266113281"
 ></iframe><br/>
      
        <div className='
        overflow-hidden
        w-[50%] md:w-[80%]
        mx-auto
        flex items-center justify-center flex-wrap shirnk-0
        xl:gap-2
        mb-2 xl:mb-28 md:mb-28
        '>
            <div className='
            flex justify-center
            md:w-auto
            mb-1'>
                <p className='
                text-center
                font-normal text-[#737373]
                w-[100%]
                tracking-[-0.5px]
                mx-auto
                
                text-sm md:text-xl xl:text-2xl'>Studio. Showroom. Site Visits  drop by or get directions </p>
            </div>

            <div className='w-[10%]  border-t-0 md:border-t-2 border-black'>

            </div>

            <button className='
            textAnimate
            hover:scale-105 hover:ease-in-out active:scale-115 active:text-gray-500
            text-[#B50404] font-semibold tracking-[-0.5px]
            w-[100%] md:w-auto
            text-[18px] md:text-xl
            '>
              <a className="w-full" href={`https://www.google.com/maps/dir/${latitude},${longitude}/Tirupati,+Andhra+Pradesh/@13.2822401,79.51811,10z/data=!3m1!4b1!4m18!1m8!3m7!1s0x3a4d4b0f88620427:0xcf4152d1daca0cac!2sTirupati,+Andhra+Pradesh!3b1!8m2!3d13.6287557!4d79.4191795!16zL20vMDg5bHJj!4m8!1m1!4e1!1m5!1m1!1s0x3a4d4b0f88620427:0xcf4152d1daca0cac!2m2!1d79.4191795!2d13.6287557?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D`} target="_blank">
            Get directions
            </a>
              </button> 
            
            
        </div>

    </div>
  )
}

export default MapSection;