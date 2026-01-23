import {  useRef } from "react"

export const Footer = () => {

    const textMaskRef = useRef(null);


        

        const handleMouseEnter = (e) =>{

            const el = textMaskRef.current;
            const rect = el.getBoundingClientRect();
            
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            el.style.setProperty('--x', `${x}px`);
            el.style.setProperty('--y', `${y}px`);
            el.style.setProperty('--opacity', 1);
        }
    
    const handleMouseLeave = () =>{

        const el = textMaskRef.current;

        el.style.setProperty('--opacity', 0);
    }

    
  return (
<div>
    <div className='
    flex items-center justify-center md:block min-h-[50dvh] bg-[#E1E1E1]
    px-6 xl:px-[105px] lg:px-[50px] md:px-[20px] '>

        <div className='
        flex flex-col 
        pt-4 md:pt-10 
        pb-7 md:pb-7
        '>

            <div className='
            flex
            relative
            text-center
            pb-8 
             '>
                <h2
                ref={textMaskRef}
                onMouseMove={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    WebkitMaskImage:'radial-gradient(circle at var(--x) var(--y), rgba(0,0,0, .9) 1%, transparent 10%)',
                    maskImage:'radial-gradient(circle at var(--x) var(--y), rgba(0,0,0, 0.9) 1%, transparent 10%)',
                    opacity:'var(--opacity, 0)'
                }}
                className='
                    absolute
                    hover:cursor-default
                    top-0 left-0 w-full
                    flex-grow
                    bg-gradient-to-tr from-[#B40505] to-[#da4949]
                    bg-clip-text
                    font-extrabold text-transparent 
                    text-6xl xl:text-9xl md:text-8xl 
                    '> SUMANTH HOMES 
                </h2>

                <h2 className='
                    w-full
                    flex-grow
                    font-extrabold text-[#A7A7A7] 
                    text-6xl xl:text-9xl md:text-8xl 
                    hover:cursor-default
                    '> SUMANTH HOMES 
                </h2>
                

            </div>

            <div className='
            w-full
            pt-14
            md:flex items-center justify-between
            md:order-first'> 
                <div className=' 
                    text-center
                    mb-6 
                    md:order-first'>

                <h2 className='
                font-semibold text-[#B50404] 
                md:text-left
                text-sm md:text-sm xl:text-xl
                tracking-wider md:tracking-widest
                pb-2
                
                '>SUMANTH HOMES - INDIA</h2>
                <p className='
                font-normal
                md:text-left
                text-sm md:text-xs xl:text-sm'>Villa No.3, Lotus Serene Villas, <br/>Near Autonagar, Renigunta Road, Tirupati</p>

                </div>

                <div className='text-center mb-6'>

                <p className='
                font-medium
                text-sm xl:text-sm md:text-xs'>+91 8220 637727</p>
                <p className='
                font-medium 
                text-sm xl:text-sm md:text-xs'>info@domain.com</p>

                </div>
            </div>

            <div className='
            md:flex items-center justify-between
            text-center
            
            pb-4
            '>

                <div className='
                md:text-left
                pb-1'>

                    <p className='
                        font-normal
                        text-xs md:text-xs'>Designed & Developed by TIC Global Services</p>

                </div>

                <div className='
                md:text-right
                '>

                    <p className='
                        font-normal 
                        text-xs md:text-xs'>@2025 Sumanth Homes. All Rights Reserved</p>

                </div>

            </div>

        </div>

        

        

    </div>


</div>
  )
}
