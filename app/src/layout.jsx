import { NavBar } from './Components/NavBar'
import { Outlet } from "react-router-dom";
import { Footer } from './Components/Footer'
import { ScrollToTop } from './utils/ScrollToTop'
import { useSEO } from './utils/useSEO'
import PageLoader from './Components/PageLoader'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    useSEO();

    return (
        <div className="bg-[#f6f6f6] min-h-screen">
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '14px',
                        padding: '14px 20px',
                        borderRadius: '6px',
                        background: '#1a1a1a',
                        color: '#ffffff',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                    },
                    success: {
                        iconTheme: {
                            primary: '#B50404',
                            secondary: '#ffffff',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#B50404',
                            secondary: '#ffffff',
                        },
                    },
                }}
            />
            <PageLoader />
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
