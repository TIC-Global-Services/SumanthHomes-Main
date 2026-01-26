import { Icon3 } from "./AmenitiesIcons/Icon3";
import { Icon4 } from "./AmenitiesIcons/Icon4";
import { Icon5 } from "./AmenitiesIcons/Icon5";
import { Icon6 } from "./AmenitiesIcons/Icon6";

export const Amenities = () => {


  return (
    <div className='w-full mb-32'>
        <h2 className="text-2xl font-manrope font-semibold mb-10">Amenities</h2>

        <div className='flex gap-2 flex-wrap md:flex-nowrap'>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
              <svg className='mx-auto my-auto flex-grow' width="37" height="34" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9293 3.00815C21.8073 2.88593 21.6625 2.78895 21.503 2.72278C21.3436 2.65662 21.1726 2.62256 21 2.62256C20.8274 2.62256 20.6564 2.65662 20.497 2.72278C20.3375 2.78895 20.1927 2.88593 20.0708 3.00815L4.32075 18.7582C4.19895 18.8803 4.1024 19.0252 4.03664 19.1846C3.97088 19.3441 3.93719 19.5149 3.9375 19.6874V38.0624C3.9375 38.4105 4.07578 38.7443 4.32192 38.9905C4.56807 39.2366 4.90191 39.3749 5.25 39.3749H17.0625C17.4106 39.3749 17.7444 39.2366 17.9906 38.9905C18.2367 38.7443 18.375 38.4105 18.375 38.0624V27.5624H23.625V38.0624C23.625 38.4105 23.7633 38.7443 24.0094 38.9905C24.2556 39.2366 24.5894 39.3749 24.9375 39.3749H36.75C37.0981 39.3749 37.4319 39.2366 37.6781 38.9905C37.9242 38.7443 38.0625 38.4105 38.0625 38.0624V19.6874C38.0628 19.5149 38.0291 19.3441 37.9634 19.1846C37.8976 19.0252 37.8011 18.8803 37.6793 18.7582L34.125 15.2065V6.5624C34.125 6.21431 33.9867 5.88047 33.7406 5.63433C33.4944 5.38819 33.1606 5.2499 32.8125 5.2499H30.1875C29.8394 5.2499 29.5056 5.38819 29.2594 5.63433C29.0133 5.88047 28.875 6.21431 28.875 6.5624V9.95653L21.9293 3.00815ZM6.5625 36.7499V20.2308L21 5.79328L35.4375 20.2308V36.7499H26.25V26.2499C26.25 25.9018 26.1117 25.568 25.8656 25.3218C25.6194 25.0757 25.2856 24.9374 24.9375 24.9374H17.0625C16.7144 24.9374 16.3806 25.0757 16.1344 25.3218C15.8883 25.568 15.75 25.9018 15.75 26.2499V36.7499H6.5625Z" stroke="#262B35" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#262B35"/>
            </svg>
            </div>
            
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Clubhouse</p>
          </div>


          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex w-[50%] aspect-square rounded-full bg-gradient-to-tl from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
            <svg className="mx-auto my-auto flex-grow" width="37" height="34" viewBox="-1 -3 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 23.3527C33.221 22.6982 31.793 21.09 30.61 19.2997C29.868 18.1797 28.2387 18.248 27.4337 19.3242C25.5962 21.783 22.8487 23.75 18.5 23.75C14.1128 23.75 11.3565 21.2457 9.51725 18.8902C8.74725 17.9067 7.27725 17.919 6.6035 18.9708C5.375 20.8905 3.947 22.658 1 23.3527M36 32.1028C33.221 31.4483 31.793 29.84 30.61 28.0498C29.868 26.9298 28.2387 26.998 27.4337 28.0743C25.5962 30.533 22.8487 32.5 18.5 32.5C14.1128 32.5 11.3565 29.9957 9.51725 27.6402C8.74725 26.6567 7.27725 26.669 6.6035 27.7207C5.375 29.6405 3.947 31.408 1 32.1028M4.5 15.875L10.5848 12.2245C10.9124 12.028 11.1932 11.7624 11.4075 11.4461C11.6219 11.1299 11.7646 10.7707 11.8258 10.3936C11.8869 10.0164 11.865 9.63053 11.7616 9.26276C11.6582 8.89499 11.4757 8.55422 11.227 8.26425L9.498 6.25C9.0652 5.75222 8.84787 5.1029 8.89381 4.44488C8.93976 3.78687 9.24522 3.17405 9.743 2.74125C10.2408 2.30845 10.8901 2.09112 11.5481 2.13706C12.2061 2.18301 12.819 2.48847 13.2518 2.98625L24.625 15.875M27.25 9.75C28.4103 9.75 29.5231 9.28906 30.3436 8.46859C31.1641 7.64812 31.625 6.53532 31.625 5.375C31.625 4.21468 31.1641 3.10188 30.3436 2.28141C29.5231 1.46094 28.4103 1 27.25 1C26.0897 1 24.9769 1.46094 24.1564 2.28141C23.3359 3.10188 22.875 4.21468 22.875 5.375C22.875 6.53532 23.3359 7.64812 24.1564 8.46859C24.9769 9.28906 26.0897 9.75 27.25 9.75Z"
            stroke="#262B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            /></svg>


            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Swimming Pool</p>
          </div>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
              <Icon3/>
            </div>
            
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Play Area</p>
          </div>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex w-[50%] aspect-square rounded-full bg-gradient-to-tl from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
              <Icon4/>
            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Walking Track</p>
          </div>


          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
            <Icon5/>
            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>24/7 Security</p>
          </div>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-[#E4E4E4]'>
            <div className="flex w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
            <Icon6/>
            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Indoor Games</p>
          </div>

          <div className=' flex flex-col justify-center items-center flex-grow border-r-2 border-transparent'>
            <div className="flex w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#B50404]/15 from-0% via-[#B50404]/15 via-[50%] to-transparent to-50%">
            <Icon6/>
            </div>
            <p className='text-xl font-urbanist font-semibold tracking-wide mt-4'>Indoor Games</p>
          </div>

        </div>
    </div>
  )
}
