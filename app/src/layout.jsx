import { NavBar } from './Components/NavBar'
import { Outlet } from "react-router-dom";
import { Footer } from './Components/Footer'

const Layout = () => {
    return (
        <div className="bg-[#f6f6f6] min-h-screen">
            <NavBar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout