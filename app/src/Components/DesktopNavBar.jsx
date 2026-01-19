import logo from "../assets/img/logos/sumanthHomesLogo.png";
import { NavLink } from "react-router-dom"



export const DesktopNavBar = () => {

  const navLinkAnimation = "hover:text-[#B40505] hover:scale-125 hover:duration-200";
  const currentLinkAnimation = "text-[#B40505] scale-125 ";

  return (
    <div >
      <nav className="
      fixed top-4 left-1/2 -translate-x-1/2
      flex items-center justify-between md:justify-center
      gap-2
      w-[50%]
      z-50">


      <div className="
      box-border
      flex items-center justify-center 
      rounded-full
    bg-white p-1 xl:p-2
      aspect-square
      w-[15%] sm:w-10 md:w-10 lg:w-14 xl:w-14 2xl:w-20
      sm:h-10 md:h-10 lg:h-14 xl:h-14 2xl:h-20 
      z-40
      ">

        <img 
        src={logo}
        className="
        w-full
        h-full 
        object-fill"
        ></img>

      </div>



      <div className="hidden md:block">

        <ul className="
        md:flex items-center
        cursor-pointer
        gap-2 xl:gap-14 md:gap-6 sm:gap-8
        rounded-full bg-white/40
        h-8 xl:h-14 md:h-10 sm:h-10 lg:h-12 2xl:h-20
        px-4 xl:px-20 md:px-10
        font-manrope font-extrabold 
        text-[.6rem] xl:text-sm sm:text-xs 2xl:text-xl md:text-sm">

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
