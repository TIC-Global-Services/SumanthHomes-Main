import logo from "../assets/img/logos/sumanthHomesLogo.png";
import { Link } from "react-router-dom"
import { gsap } from "gsap"


export const DesktopNavBar = () => {

const handleHover = (e) => {
  gsap.to(e.currentTarget, {
    scale: 1.3,
    color: "#B50404",
    duration: 0.2
  });
};

const handleNotHover = (e) => {
  gsap.to(e.currentTarget, {
    scale: 1,
    color: "black",
    duration: 0.2
  });
};


  return (
    <div >
    <nav className="
    fixed top-4 left-1/2 -translate-x-1/2
    flex items-center justify-between md:justify-center
    gap-2
    w-[90%] sm:w-[70%] md:w-[90%] lg:w-[90%] xl:w-[50%]
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

          <Link to='/'><li onMouseEnter={handleHover} onMouseLeave={handleNotHover}>HOME</li></Link>
          <Link to='/about'><li onMouseEnter={handleHover} onMouseLeave={handleNotHover}>ABOUT</li></Link>
          <Link to='/projects'><li onMouseEnter={handleHover} onMouseLeave={handleNotHover}>PROJECTS</li></Link>
          <Link to='/contact'><li onMouseEnter={handleHover} onMouseLeave={handleNotHover}>CONTACT</li></Link>

        </ul>

      </div>
      

    </nav>

    
    </div>

  )
}
