import { NavLink } from "react-router-dom"
import { Logo } from "../sub-components/logo";



export const DesktopNavBar = () => {

  const navLinkAnimation = "hover:text-[#B40505] hover:scale-125 hover:duration-200 cursor-pointer";
  const currentLinkAnimation = "text-[#B40505] scale-125";

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
      w-[10%] xl:w-[8%]
      aspect-square
      z-40
      ">

        <Logo/>
        

      </div>
      



      <div className="">

        <ul className="
        md:flex items-center
        gap-2 xl:gap-14 md:gap-6 sm:gap-8
        rounded-full bg-white/40
        px-4 xl:px-20 md:px-10
        font-manrope font-extrabold 
        aspect-[10/1]
        text-base xl:text-sm sm:text-xs 2xl:text-xl md:text-sm ">

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
