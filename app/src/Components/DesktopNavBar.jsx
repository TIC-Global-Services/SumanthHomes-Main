import { NavLink } from "react-router-dom"
import { Logo } from "../sub-components/logo";



export const DesktopNavBar = () => {

  const navLinkAnimation = "hover:text-[#B40505] hover:scale-125 hover:duration-200 cursor-pointer";
  const currentLinkAnimation = "text-[#B40505] font-extrabold scale-125";

  return (
    <div >
      <nav className="
      fixed top-6 left-1/2 -translate-x-1/2
      flex items-center justify-between md:justify-center
      gap-2
      md:w-[60%] xl:w-[40%] 
      z-50">


      <div className="
      box-border
      flex items-center justify-center 
      rounded-full
      bg-white p-1 xl:p-2
      w-[9%]
      aspect-square
      z-40
      ">

        <Logo/>
        

      </div>
      



      <div className="w-[90%]">

        <ul className="
        flex items-center justify-evenly
        gap-3
        rounded-full bg-white/40
        font-manrope font-normal
        tracking-wider
        aspect-[10/1]
        uppercase
        px-6
        text-sm  xl:text-sm 
        bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-none bg-opacity-60 backdrop-saturate-100 backdrop-contrast-50
        ">

          <li className={navLinkAnimation}><NavLink to='/' className={({isActive})=>(isActive?currentLinkAnimation:"")}>HOME</NavLink></li>
          <li className={navLinkAnimation}><NavLink to='/about' className={({isActive})=>(isActive?currentLinkAnimation:"")}>ABOUT</NavLink></li>
          <li className={navLinkAnimation}><NavLink to='/projects' className={({isActive})=>(isActive?currentLinkAnimation:"")}>PROJECTS</NavLink></li>
          <li className={navLinkAnimation}><NavLink to='/contact' className={({isActive})=>(isActive?currentLinkAnimation:"")}>CONTACT</NavLink></li>

        </ul>

      </div>
      

    </nav>

    
    </div>

  )
}
