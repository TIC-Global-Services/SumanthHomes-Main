import { NavBar } from './Components/NavBar'
import { Outlet } from "react-router-dom";
import { Footer } from './Components/Footer'
import { ScrollToTop } from './utils/ScrollToTop'

const Layout = () => {
    return (
        <div className="bg-[#f6f6f6] min-h-screen">
            <ScrollToTop />
            <NavBar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout