import logo from "../assets/img/logos/sumanthHomesLogo.png";
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="
    fixed top-4 left-1/2 -translate-x-1/2
    flex items-center justify-center
    gap-4
    w-[90%] sm:w-[70%] md:w-[50%] xl:w-[50%]
    z-50">

      <div className="
      flex items-center justify-center
      rounded-full
    bg-white p-1 xl:p-2
      w-10 xl:w-14 xl:h-14 md:w-10 md:h-10 sm:w-10 sm:h-10 lg:h-14 2xl:h-20 2xl:w-20
      h-10
      ">

        <img 
        src={logo}
        className="w-full h-full object-contain"
        ></img>

      </div>

      <div>

        <ul className="
        flex items-center
        cursor-pointer
        gap-2 xl:gap-14 md:gap-6 sm:gap-8
        rounded-full bg-white/50
        h-10 xl:h-14 md:h-10 sm:h-10 lg:h-12 2xl:h-20
        px-4 xl:px-20 md:px-10
        font-manrope font-extrabold 
        text-xs xl:text-sm sm:text-xs 2xl:text-xl md:text-sm">

          <Link to='/'><li>HOME</li></Link>
          <Link to='/about'><li>ABOUT</li></Link>
          <Link to='/projects'><li>PROJECTS</li></Link>
          <Link to='/contact'><li>CONTACT</li></Link>

        </ul>

      </div>

    </nav>
  )
}
