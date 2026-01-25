import { useNavigate } from "react-router-dom"

export const BackToBtn = () => {
    const Navigate = useNavigate();
  return (
    <div className='w-full flex mb-16'>
        <button
        onClick={()=>{Navigate(-1)}}
        className='
        flex items-center gap-4
        w-[90%] xl:w-[25%] aspect-[7/1] mx-auto xl:mx-0 xl:ml-auto 
        bg-[#B50404]
        px-6

        '>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.251114 4.53572C-0.0834351 4.87027 -0.0834351 5.41357 0.251114 5.74812L4.53333 10.0303C4.86788 10.3649 5.41119 10.3649 5.74574 10.0303C6.08028 9.69579 6.08028 9.15248 5.74574 8.81794L2.92215 5.99702H11.1333C11.607 5.99702 11.9897 5.6143 11.9897 5.14058C11.9897 4.66686 11.607 4.28414 11.1333 4.28414H2.92482L5.74306 1.46323C6.07761 1.12868 6.07761 0.585369 5.74306 0.250821C5.40851 -0.0837278 4.8652 -0.0837278 4.53066 0.250821L0.248437 4.53304L0.251114 4.53572Z" fill="white"/>
            </svg>

            <span className='
             text-white
            font-light tracking-[-2%] uppercase
         
            '>BACK TO ONGOING PROJECTS</span>
        </button>
    </div>
  )
}
