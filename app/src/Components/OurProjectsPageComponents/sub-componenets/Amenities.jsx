import { Icon3 } from "./AmenitiesIcons/Icon3";
import { Icon4 } from "./AmenitiesIcons/Icon4";
import { Icon5 } from "./AmenitiesIcons/Icon5";
import { Icon6 } from "./AmenitiesIcons/Icon6";
import {motion} from "motion/react"
import { SlideUpAnimationBlur } from "../../../utils/SlideUpAnimationBlur";

export const Amenities = () => {


  return (
    <div className='w-full mb-32'>
        <motion.h2
        initial={SlideUpAnimationBlur.initial}
        whileInView={SlideUpAnimationBlur.whileInView}
        transition={SlideUpAnimationBlur.transition}
        viewport={SlideUpAnimationBlur.viewport}
        
        className="text-2xl font-manrope font-semibold mb-10">Amenities</motion.h2>

        <div className='w-full flex gap-2 flex-wrap md:flex-nowrap'>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex justify-between items-center w-[60%] aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
                <svg className='mx-auto my-auto' width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9918 0.385596C17.8698 0.263368 17.725 0.166393 17.5655 0.100226C17.4061 0.0340588 17.2351 0 17.0625 0C16.8899 0 16.7189 0.0340588 16.5595 0.100226C16.4 0.166393 16.2552 0.263368 16.1333 0.385596L0.383252 16.1356C0.261447 16.2577 0.164905 16.4026 0.099144 16.5621C0.0333833 16.7215 -0.000305943 16.8924 2.09343e-06 17.0648V35.4398C2.09343e-06 35.7879 0.138283 36.1218 0.384424 36.3679C0.630566 36.6141 0.964405 36.7523 1.3125 36.7523H13.125C13.4731 36.7523 13.8069 36.6141 14.0531 36.3679C14.2992 36.1218 14.4375 35.7879 14.4375 35.4398V24.9398H19.6875V35.4398C19.6875 35.7879 19.8258 36.1218 20.0719 36.3679C20.3181 36.6141 20.6519 36.7523 21 36.7523H32.8125C33.1606 36.7523 33.4944 36.6141 33.7406 36.3679C33.9867 36.1218 34.125 35.7879 34.125 35.4398V17.0648C34.1253 16.8924 34.0916 16.7215 34.0259 16.5621C33.9601 16.4026 33.8636 16.2577 33.7418 16.1356L30.1875 12.584V3.93985C30.1875 3.59175 30.0492 3.25791 29.8031 3.01177C29.5569 2.76563 29.2231 2.62735 28.875 2.62735H26.25C25.9019 2.62735 25.5681 2.76563 25.3219 3.01177C25.0758 3.25791 24.9375 3.59175 24.9375 3.93985V7.33397L17.9918 0.385596ZM2.625 34.1273V17.6082L17.0625 3.17072L31.5 17.6082V34.1273H22.3125V23.6273C22.3125 23.2792 22.1742 22.9454 21.9281 22.6993C21.6819 22.4531 21.3481 22.3148 21 22.3148H13.125C12.7769 22.3148 12.4431 22.4531 12.1969 22.6993C11.9508 22.9454 11.8125 23.2792 11.8125 23.6273V34.1273H2.625Z" fill="#262B35"/></svg>

            </div>
            
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Clubhouse</p>
          </div>


          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex justify-between items-center w-[45%] aspect-square rounded-full bg-gradient-to-tl from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
                <svg className='mx-auto my-auto' width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 23.3527C33.221 22.6982 31.793 21.09 30.61 19.2997C29.868 18.1797 28.2387 18.248 27.4337 19.3242C25.5962 21.783 22.8487 23.75 18.5 23.75C14.1128 23.75 11.3565 21.2457 9.51725 18.8902C8.74725 17.9067 7.27725 17.919 6.6035 18.9708C5.375 20.8905 3.947 22.658 1 23.3527M36 32.1028C33.221 31.4483 31.793 29.84 30.61 28.0498C29.868 26.9298 28.2387 26.998 27.4337 28.0743C25.5962 30.533 22.8487 32.5 18.5 32.5C14.1128 32.5 11.3565 29.9957 9.51725 27.6402C8.74725 26.6567 7.27725 26.669 6.6035 27.7207C5.375 29.6405 3.947 31.408 1 32.1028M4.5 15.875L10.5848 12.2245C10.9124 12.028 11.1932 11.7624 11.4075 11.4461C11.6219 11.1299 11.7646 10.7707 11.8258 10.3936C11.8869 10.0164 11.865 9.63053 11.7616 9.26276C11.6582 8.89499 11.4757 8.55422 11.227 8.26425L9.498 6.25C9.0652 5.75222 8.84787 5.1029 8.89381 4.44488C8.93976 3.78687 9.24522 3.17405 9.743 2.74125C10.2408 2.30845 10.8901 2.09112 11.5481 2.13706C12.2061 2.18301 12.819 2.48847 13.2518 2.98625L24.625 15.875M27.25 9.75C28.4103 9.75 29.5231 9.28906 30.3436 8.46859C31.1641 7.64812 31.625 6.53532 31.625 5.375C31.625 4.21468 31.1641 3.10188 30.3436 2.28141C29.5231 1.46094 28.4103 1 27.25 1C26.0897 1 24.9769 1.46094 24.1564 2.28141C23.3359 3.10188 22.875 4.21468 22.875 5.375C22.875 6.53532 23.3359 7.64812 24.1564 8.46859C24.9769 9.28906 26.0897 9.75 27.25 9.75Z" stroke="#262B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Swimming Pool</p>
          </div>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex justify-between items-center w-[60%] aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
              <Icon3/>
            </div>
            
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Play Area</p>
          </div>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex justify-between items-center w-1/2 aspect-square rounded-full bg-gradient-to-tl from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
              <Icon4/>
            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Walking Track</p>
          </div>


          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex justify-between items-center w-1/2 aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
            <Icon5/>
            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>24/7 Security</p>
          </div>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex justify-between items-center w-1/2 aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
            <Icon6/>
            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Indoor Games</p>
          </div>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-transparent'>
            <div className="flex justify-between items-center w-1/2 aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
            <Icon6/>
            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Indoor Games</p>
          </div>

        </div>
    </div>
  )
}
