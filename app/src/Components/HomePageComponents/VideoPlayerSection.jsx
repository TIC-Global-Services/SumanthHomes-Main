import { LoadScriptNext } from '@react-google-maps/api'
import { useState, useRef } from 'react'
import gsap from 'gsap'

export const VideoPlayerSection = () => {
    const gsapTimeline = gsap.timeline();

    const data = [
        {text:"Absolutely amazing theme, flexible and awesome design with possibilities. It's so very easy to use and to customize. Simply the great designs and best theme -",author:"Jonson donner"},
        {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor, malesuada et design -",author:"second memeber"},
        {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor, malesuada et design -",author:"third member"}
    ]

    const [index, setIndex ] = useState(0);
    const cardRef = useRef(null);
    const maxIndex = data.length;

    const next = () =>{
        if(index < maxIndex){
        
        const card = cardRef.current;

        gsapTimeline.to(card, {
            opacity:0,
            duration:0.6,
            onComplete:()=>{
                setIndex(prev => (prev + 1) % data.length);
            }
        })

        gsapTimeline.to(card,
            {
                opacity:1,
                duration:0.6,
            }
        )
    }
    }


    const prev = () => {
         const card = cardRef.current;

         gsapTimeline.to(card,{
                opacity:0,
                duration:0.6,
                onComplete:()=>{
                    setIndex(prev => (prev - 1) % data.length);
                }
            }
         )
         gsapTimeline.to(card,{
            opacity:1, 
            duration:0.6
         }
         )
       };

    

  return (
    <div>

        <div className='
        relative
        mt-4 xl:mt-8 md:mt-8'>

            <iframe src='https://www.youtube.com/embed/AXNHQ5Pgeig' className='
            aspect-[16/7]
            w-full
            mb-12
            '></iframe>

            <div className='
            bottom-0 right-0 absolute
            bg-[#B50404] 
            px-2 xl:px-7 md:px-7 
            py-1 xl:py-2 md:py-2
            '>
                <p className='
              text-white
                text-xs
                '
                >WATCH SHOWREEL</p>

            </div>

        </div>

        <div className='
        mt-6 xl:mt-16 md:mt-16'>

            <div className='
            flex md:flex-row items-center justify-center  flex-wrap
            gap-2 md:gap-2 xl:gap-5 
            xl:mb-5 md:mb-3
            '>
                
                <div ref={cardRef} className='
                text-center
                text-[#737373]
                w-[90%] md:w-[70%] xl:w-[70%] 
                 md:text-xl xl:text-2xl
                mb-2
                '
                > 
                    {data[index].text} <span className='text-black'>{data[index].author}</span>
                </div>


                {/* Buttons */}

                <div className='
                flex items-center justify-center
                md:order-first
                flex-shrink-0
                bg-white
                p-2
                rounded-full'>
                    <div>
                        <button onClick={prev} className='flex items-center justify-center '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(24,0) scale(-1,1)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4696C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53097C15.0782 6.39014 14.9991 6.19913 14.9991 5.99997C14.9991 5.80081 15.0782 5.6098 15.219 5.46897C15.3598 5.32814 15.5508 5.24902 15.75 5.24902C15.9492 5.24902 16.1402 5.32814 16.281 5.46897L22.281 11.469C22.3508 11.5386 22.4063 11.6214 22.4441 11.7125C22.4819 11.8036 22.5013 11.9013 22.5013 12C22.5013 12.0986 22.4819 12.1963 22.4441 12.2874C22.4063 12.3785 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3901 14.9991 18.1991 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3896 1.5 12.1989 1.5 12Z"
                                    fill="#B50404"/>
                            </g>
                            </svg>
  
                        </button>
                    </div>
                        
                </div>

                <div className='
                flex items-center justify-center
                flex-shrink-0
                bg-white
                p-2
                rounded-full'>
                    <div >
                        <button onClick={next} className='flex items-center justify-center '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4696C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53097C15.0782 6.39014 14.9991 6.19913 14.9991 5.99997C14.9991 5.80081 15.0782 5.6098 15.219 5.46897C15.3598 5.32814 15.5508 5.24902 15.75 5.24902C15.9492 5.24902 16.1402 5.32814 16.281 5.46897L22.281 11.469C22.3508 11.5386 22.4063 11.6214 22.4441 11.7125C22.4819 11.8036 22.5013 11.9013 22.5013 12C22.5013 12.0986 22.4819 12.1963 22.4441 12.2874C22.4063 12.3785 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3901 14.9991 18.1991 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3896 1.5 12.1989 1.5 12Z"
                                fill="#B50404"/>
                           </svg>

                        </button>
                    </div>
                </div>
                

            </div>

            <div className='
            hidden md:flex items-center gap-1 justify-self-center'>

                <p> 0{index+1} </p>
                
                <svg width="220" height="1" viewBox="0 0 220 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="220" height="1" fill="#737373"/>
                    <rect width={`${((index+1)/maxIndex)*100}%`} height="1" fill="#B50404"/>
                </svg>

                <p>0{maxIndex}</p>

            </div>

        </div>

    </div>
  )
}
