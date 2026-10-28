import { MobileNavBar } from "./MobileNavBar";
import { DesktopNavBar } from "./DesktopNavBar";

export const NavBar = () => {
  return (
    <>
      {/* Desktop Navigation: visible on md (768px) and above */}
      <div className="hidden md:block">
        <DesktopNavBar />
      </div>

      {/* Mobile Navigation: visible below md (768px) */}
      <div className="block md:hidden">
        <MobileNavBar />
      </div>
    </>
  )
}

