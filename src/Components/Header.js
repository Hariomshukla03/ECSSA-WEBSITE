import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
  }, []); // ✅ Fix: Added empty dependency array to prevent infinite re-renders

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-black shadow-xl h-16 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" onClick={closeMenu}>
            <img
              className="w-8 h-8 sm:w-10 sm:h-10"
              src="/assets/whitelogo.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul ref={navRef} className="hidden sm:flex items-center space-x-8 text-white">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/announcement" onClick={closeMenu}>Announcement</Link></li>
          <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/loginpage" onClick={closeMenu}>
            <button className="p-[4px] mt-[-4px] shadow-lg hover:after:h-[2px]">Login</button>
          </Link></li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-black text-white">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/announcement" onClick={closeMenu}>Announcement</Link></li>
              <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/loginpage" onClick={closeMenu}>
                <button className="p-[4px] mt-[-4px] shadow-lg hover:after:h-[2px]">Login</button>
              </Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
