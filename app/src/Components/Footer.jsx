import React from 'react'

export const Footer = () => {
  return (
<div>
    <div className='flex items-center justify-center md:block min-h-[50dvh] bg-[#E1E1E1]'>

        <div className='
        flex flex-col
        pt-4
        mb-7 md:mb-7
        mx-2 md:mx-8
        '>

            <div className='text-center
             mb-8 
             '>

                <h2 className='
                    font-extrabold text-[#A7A7A7] 
                    text-6xl xl:text-9xl md:text-7xl 
                    '> SUMANTH HOMES 
                </h2>

            </div>

            <div className='
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
            px-2 
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
