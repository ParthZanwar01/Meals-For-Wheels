import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="app-container relative min-h-screen">
            {/* --- Global Background --- */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto bg-black" />

            {/* --- Foregound Content --- */}
            <div className="relative z-10 pointer-events-none flex flex-col min-h-screen">
                <div className="pointer-events-auto">
                    {!isHome && <Navbar />}
                </div>

                <main className="main-content flex-grow pointer-events-auto" style={{ paddingTop: isHome ? '0' : '80px' }}>
                    <Outlet />
                </main>

                <div className="pointer-events-auto mt-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
