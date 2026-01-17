import { useState, useEffect } from "react"
import { MobileNavBar } from "./MobileNavBar";
import { DesktopNavBar } from "./DesktopNavBar";

export const NavBar = () => {

    const [mobileScreen, setMobileScreen] = useState(window.outerWidth<600);

    useEffect(()=>{

        const onResize = () =>{ setMobileScreen(window.outerWidth<600); }

        window.addEventListener("resize", onResize);

        return(
            ()=>{window.removeEventListener("resize", onResize)}
        )
    },[])

  return (
    <div>
        {mobileScreen ? <MobileNavBar/> : <DesktopNavBar/>}
    </div>
    
  )
}
