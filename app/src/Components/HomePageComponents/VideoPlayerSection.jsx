import { LoadScriptNext } from '@react-google-maps/api'
import { useState, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'motion/react';

const VideoPlayerSection = () => {
    const gsapTimeline = gsap.timeline();

    const data = [
        {text:"Absolutely amazing theme, flexible and awesome design with possibilities. It's so very easy to use and to customize. Simply the great designs and best theme -",author:"Jonson donner"},
        {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor, malesuada et design -",author:"second memeber"},
        {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor, malesuada et design -",author:"third member"}
    ]

    const [index, setIndex ] = useState(0);
    const cardRef = useRef(null);
    const maxIndex = data.length;

    const [showReel, setShowReel] = useState(false);

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
        if(index > 0 ){
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
        } 
       };

    

  return (
    <div className='mt-7 md:mt-20'>

        {/* Video Player */}
        <div className='
        mb-[60px] md:mb-[120px]
        relative
        '>

            <iframe src={`https://www.youtube.com/embed/AXNHQ5Pgeig${showReel ? '?autoplay=1' : ''}`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='
            aspect-[335/480] md:aspect-[16/7]
            w-full
            
            '></iframe>

            <button onClick={()=>setShowReel(true)} className='
            bottom-0 right-0 absolute
            bg-[#B50404] text-white
            px-8 xl:px-14 md:px-7 
            py-4 xl:py-4 md:py-2
            hover:bg-white hover:text-[#B50404] hover:border-b-2 
            active:bg-[#B50404] active:text-white active:ease-in
            '>
                <p className='
                
                text-[9px] md:text-xs
                font-manrope font-bold
                tracking-0 md:tracking-[2px]
                uppercase
                '
                >WATCH SHOWREEL</p>

            </button>

        </div>

        {/* Testimonial Cards */}
       
    </div>
  )
}

export default VideoPlayerSection;