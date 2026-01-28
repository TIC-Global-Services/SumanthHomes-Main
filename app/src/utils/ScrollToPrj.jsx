import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const ScrollToPrj = () => {

    const { pathname } = useLocation();

    useEffect(()=>{
        window.scrollTo({
            top:window.innerHeight,
        });
    }, [pathname])
  return null;
}
