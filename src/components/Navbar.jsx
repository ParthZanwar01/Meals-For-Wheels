import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ transparent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTransparent = transparent ?? isHome;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${isTransparent ? 'bg-transparent border-transparent' : 'bg-black/60 backdrop-blur-md border-b border-white/[0.06]'}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="font-heading font-bold text-2xl pb-1 cursor-pointer flex-shrink-0 tracking-tight text-white">
          Meals for More
        </Link>
        <div className="lg:hidden cursor-pointer p-2 rounded-xl text-white hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center space-x-2 font-medium text-white/80">
            <li>
              <Link to="/about" className={`px-3 py-2 text-sm transition-colors rounded-lg hover:text-white`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/events" className={`px-3 py-2 text-sm transition-colors rounded-lg hover:text-white`}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/volunteer" className={`px-3 py-2 text-sm transition-colors rounded-lg hover:text-white`}>
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/donations" className={`px-3 py-2 text-sm transition-colors rounded-lg hover:text-white`}>
                Donate
              </Link>
            </li>
            <li>
              <Link to="/programs" className={`px-3 py-2 text-sm transition-colors rounded-lg hover:text-white`}>
                Programs
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`px-3 py-2 text-sm transition-colors rounded-lg hover:text-white`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-background flex flex-col p-6 items-center transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col space-y-6 text-xl font-medium text-foreground text-center">
          <li>
            <Link to="/about" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/volunteer" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Volunteer
            </Link>
          </li>
          <li>
            <Link to="/donations" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Donate
            </Link>
          </li>
          <li>
            <Link to="/programs" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
