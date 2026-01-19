import { useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import { Logo } from "../sub-components/logo";
import { motion } from "motion/react";

export const MobileNavBar = () => {

    const tl = gsap.timeline();
    const [clicked, setClicked] = useState(false);

    const linkAnimation = {
      initial : {opacity:0, x:-100},
      whileInView : {opacity:1, x:0},
      transition: {duration:1},
      viewport : {once:false},
    }
    
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
        
        const ctx = gsap.context(()=>{
            
            if (clicked) {
                gsap.to(line1.current, { rotate: 45, y: 0, duration: 0.3 });
                gsap.to(line2.current, { rotate: -45, y: 0, duration: 0.3 });
            } else {
                gsap.to(line1.current, { rotate: 0, y: -6, duration: 0.3 });
                gsap.to(line2.current, { rotate: 0, y: 6, duration: 0.3 });
            }
        })
        return(
            ()=>{ctx.revert()}
        )
    }, [clicked]);

    const navMenu = () => {
  setClicked(prev => !prev);

  if (!clicked) {
    navBarMenuBtn.current.style.display = "block";
    navBarMenu.current.style.backgroundColor = "rgba(255,255,255,1)";

    tl.fromTo(navBarMenuBtn.current, {
      opacity:0,
    }, {
      opacity:1,
      duration:.5,
    })


  } else {
    navBarMenuBtn.current.style.display = "none";
    navBarMenu.current.style.backgroundColor = "rgba(255,255,255,0.2)";
  }
};
    
    return (
    <nav className="
        fixed top-0 left-1/2 -translate-x-1/2
        flex items-center justify-between md:justify-center
        gap-2
        w-full sm:w-[70%] md:w-[90%] lg:w-[90%] xl:w-[50%]
        z-50">
        
        
        <div className="
            absolute
            top-4
            left-2
            box-border
            flex items-center justify-center 
            rounded-full
            bg-white p-1 xl:p-2
            aspect-square
            w-[15%] sm:w-10 md:w-10 lg:w-14 xl:w-14 2xl:w-20
            sm:h-10 md:h-10 lg:h-14 xl:h-14 2xl:h-20 
            z-40
            ">
        
            <Logo/>
        
        </div>
        
        <div
            ref={navBarMenu}
            className="
            absolute
            top-4
            right-2
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

                className="pl-10"><Link to='/'>HOME</Link></motion.li>

                <motion.li
                initial={linkAnimation.initial}
                whileInView={linkAnimation.whileInView}
                transition={linkAnimation.transition}
                viewport={linkAnimation.viewport}

                className="pl-10" ><Link to='/about'>ABOUT</Link></motion.li>

                <motion.li
                initial={linkAnimation.initial}
                whileInView={linkAnimation.whileInView}
                transition={linkAnimation.transition}
                viewport={linkAnimation.viewport}
                
                className="pl-10" ><Link to='/projects'>PROJECTS</Link></motion.li>

                <motion.li 
                
                initial={linkAnimation.initial}
                whileInView={linkAnimation.whileInView}
                transition={linkAnimation.transition}
                viewport={linkAnimation.viewport}
                
                className="pl-10" ><Link to='/contact'>CONTACT</Link> </motion.li>         

            </ul>
      </div>
    </nav>
  )
}
