import { useRef, useState, useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { Logo } from "../sub-components/logo";
import { motion } from "motion/react";

export const MobileNavBar = () => {
    const [clicked, setClicked] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const linkAnimation = {
      initial : {opacity:0, x:-100},
      whileInView : {opacity:1, x:0},
      transition: {duration:1},
      viewport : {once:false},
    }
    
    const navBarMenuBtn = useRef(null);
    const navBarMenu = useRef(null);

    let navBtnStyle = `
            absolute
            top-6
            right-6
            flex justify-center items-center
            rounded-full
            w-[15%]
            aspect-[4/3]
            md:hidden
            z-40
            bg-white/20
          `

    const closeMenu = () => {
      setClicked(false);
      if (navBarMenuBtn.current) {
        navBarMenuBtn.current.style.display = "none";
      }
      if (navBarMenu.current) {
        navBarMenu.current.style.backgroundColor = "rgba(255,255,255,0.2)";
      }
    };

    // Close menu when route changes
    useEffect(() => {
      closeMenu();
    }, [location.pathname]);

    const navMenu = () => {
      if (!clicked) {
        setClicked(true);
        if (navBarMenuBtn.current) {
          navBarMenuBtn.current.style.display = "block";
          gsap.fromTo(
            navBarMenuBtn.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
          );
        }
      } else {
        closeMenu();
      }
    };
    
    return (
    <nav className="
        fixed top-0 left-1/2 -translate-x-1/2
        flex items-center justify-between md:justify-center
        gap-2
        w-full sm:w-[70%] md:w-[90%] lg:w-[90%] xl:w-[50%]
        z-50">
        
        <div 
            onClick={() => { navigate('/'); closeMenu(); }} 
            className="
            absolute
            top-5
            left-6
            box-border
            flex items-center justify-center 
            rounded-full
            bg-white p-1 xl:p-2
            aspect-square
            w-[13%] sm:w-10 md:w-10 lg:w-14 xl:w-14 2xl:w-20
            sm:h-10 md:h-10 lg:h-14 xl:h-14 2xl:h-20 
            z-40 cursor-pointer
            ">
            <Logo/>
        </div>
        
        <button
            ref={navBarMenu}
            className={navBtnStyle}
            onClick={navMenu}
            aria-label="Toggle Navigation Menu"
        >
            {clicked ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <img src="/hugeicons_menu.svg" alt="Menu" className="w-6 h-6 object-contain" />
            )}
        </button>

        <div
            ref={navBarMenuBtn}
            className="
                fixed
                top-0
                left-0
                z-30 
                w-full
                min-h-dvh
              bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
              "
            style={{
                display:'var(--display,none)'
            }}
            >

            <ul className="
                pt-40
                flex flex-col gap-16
                py-20
                text-black
                text-4xl
            ">
                <motion.li
                  initial={linkAnimation.initial}
                  whileInView={linkAnimation.whileInView}
                  transition={linkAnimation.transition}
                  viewport={linkAnimation.viewport}
                  className="pl-10"
                >
                  <Link to='/' onClick={closeMenu}>HOME</Link>
                </motion.li>

                <motion.li
                  initial={linkAnimation.initial}
                  whileInView={linkAnimation.whileInView}
                  transition={linkAnimation.transition}
                  viewport={linkAnimation.viewport}
                  className="pl-10"
                >
                  <Link to='/about' onClick={closeMenu}>ABOUT</Link>
                </motion.li>

                <motion.li
                  initial={linkAnimation.initial}
                  whileInView={linkAnimation.whileInView}
                  transition={linkAnimation.transition}
                  viewport={linkAnimation.viewport}
                  className="pl-10"
                >
                  <Link to='/projects' onClick={closeMenu}>PROJECTS</Link>
                </motion.li>

                <motion.li 
                  initial={linkAnimation.initial}
                  whileInView={linkAnimation.whileInView}
                  transition={linkAnimation.transition}
                  viewport={linkAnimation.viewport}
                  className="pl-10"
                >
                  <Link to='/contact' onClick={closeMenu}>CONTACT</Link>
                </motion.li>         
            </ul>
      </div>
    </nav>
  )
}
