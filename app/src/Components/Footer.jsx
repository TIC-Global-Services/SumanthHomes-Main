import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#E1E1E1]'>

        <div className='
        flex items-end justify-between
         mb-7 md:mb-7'>

            <div className='mt-20 ml-10 md:mt-14'>

                <h2 className='
                font-semibold text-[#B50404] 
                text-xs md:text-sm xl:text-xl
                tracking-wider md:tracking-widest
                
                '>SUMANTH HOMES - INDIA</h2>
                <p className='
                font-normal
                text-xs md:text-xs xl:text-sm'>Villa No.3, Lotus Serene Villas, <br/>Near Autonagar, Renigunta Road, Tirupati</p>

            </div>

            <div className='mt-20 mr-10 md:mt-14 text-right'>

                <p className='
                font-medium
                text-xs xl:text-sm md:text-xs'>+91 8220 637727</p>
                <p className='
                font-medium 
                text-xs xl:text-sm md:text-xs'>info@domain.com</p>

            </div>

        </div>

        <div className='text-center mb-8'>

            <h2 className='
            font-extrabold text-[#A7A7A7] 
            text-5xl xl:text-9xl md:text-7xl 
            '> SUMANTH HOMES </h2>

        </div>

        <div className='
        flex-col gap-4 justify-self-center mb-2 md:mb-2'>

            <div className=''>

                <p className='
                font-normal 
                text-xs md:text-xs'>Designed & Developed by TIC Global Services</p>

            </div>

            <div className=''>

                <p className='
                font-normal 
                text-xs md:text-xs'>@2025 Sumanth Homes. All Rights Reserved</p>

            </div>

        </div>
    </div>
  )
}
