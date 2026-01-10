import logo from "../assets/img/logos/sumanthHomesLogo.png";
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import { useRef, useState, useEffect} from "react";

export const NavBar = () => {

  const [clicked, setClicked] = useState(false);

const navBarMenuBtn = useRef(null);
const navBarMenu = useRef(null);
const line1 = useRef(null);
const line2 = useRef(null);

useEffect(() => {
  gsap.set(line1.current, { y: -6 });
  gsap.set(line2.current, { y: 6 });
}, []);

// Making navbar X
useEffect(() => {
  if (!line1.current || !line2.current) return;

  if (clicked) {
    gsap.to(line1.current, { rotate: 45, y: 0, duration: 0.3 });
    gsap.to(line2.current, { rotate: -45, y: 0, duration: 0.3 });
  } else {
    gsap.to(line1.current, { rotate: 0, y: -6, duration: 0.3 });
    gsap.to(line2.current, { rotate: 0, y: 6, duration: 0.3 });
  }
}, [clicked]);

const navMenu = () => {
  setClicked(prev => !prev);

  if (!clicked) {
    navBarMenuBtn.current.style.display = "block";
    navBarMenu.current.style.backgroundColor = "rgba(255,255,255,1)";
  } else {
    navBarMenuBtn.current.style.display = "none";
    navBarMenu.current.style.backgroundColor = "rgba(255,255,255,0.2)";
  }
};


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

      <div
  ref={navBarMenu}
  className="
    relative
    flex justify-center items-center
    rounded-full
    w-[19%]
    aspect-[4/3]
    md:hidden
    z-40
    bg-white/20
  "
  style={{
    backgroundColor:"var(--bgcolor,rgba(255,255,255,0.2))"
  }}
  onClick={navMenu}
>
  <span
    ref={line1}
    className="absolute w-[40%] h-[2px] bg-black "
  />
  <span
    ref={line2}
    className="absolute w-[40%] h-[2px] bg-black "
  />
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

    <div 
    ref={navBarMenuBtn}

    className="
      fixed
      top-0
      left-0
      z-30 
      w-full
      min-h-dvh
      bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
      "
      
      style={{
        display:'var(--display,none)'
      }}
      >

        <ul className="
        pt-40
        flex flex-col gap-16
        py-20
        
        text-white
        text-4xl
        
        ">

          <Link to='/'><li className="
          pl-10
          " >HOME</li></Link>
          <Link to='/about'><li className="
          pl-10
          " >ABOUT</li></Link>
          <Link to='/projects'><li className="
          pl-10
          " >PROJECTS</li></Link>
          <Link to='/contact'><li className="
          pl-10
          " >CONTACT</li></Link>          

        </ul>

      </div>
    </div>

  )
}
