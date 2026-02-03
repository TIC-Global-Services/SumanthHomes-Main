import logo from "../assets/img/logos/sumanthHomesLogo.png"
import { useNavigate } from "react-router-dom"

export const Logo = () => {
  const Navigate = useNavigate();

  return (
       <img 
        src={logo}
        alt="logo"
        className="
        w-full
        h-full 
        object-fill
        cursor-pointer
        "
    ></img>

  )
}
