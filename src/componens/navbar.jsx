import logokanan from "/assets/logo-kanan.svg";
import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="backdrop-blur-xl fixed top-0 left-0 w-full shadow-xl z-50 px-4 md:px-6 h-15 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <img className="h-[30px] md:h-[50px]" loading="lazy" src={logokanan} />

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 items-center">
        <li>
          <Link className="text-white text-sm md:text-xl hover:text-amber-300 transition" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white text-sm md:text-xl hover:text-amber-300 transition" to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            About
          </Link>
        </li>
        <li>
          <Link className="text-white text-sm md:text-xl hover:text-amber-300 transition" to="/Struktur" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Struktur
          </Link>
        </li>
        <li>
          <Link className="mr-1 md:mr-5 text-white font-semibold py-2 px-4 rounded-lg bg-gradient-to-t from-blue-700 to-blue-200 hover:from-blue-800 hover:to-blue-400 transition duration-300" to="/form" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Form
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-50" onClick={toggleNavbar}>
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/30 backdrop-blur-xl py-6 px-4 flex flex-col gap-4 md:hidden z-40">
          <Link className="text-white text-lg hover:text-amber-300 transition" to="/" onClick={() => { toggleNavbar(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Home</Link>
          <Link className="text-white text-lg hover:text-amber-300 transition" to="/about" onClick={() => { toggleNavbar(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>About</Link>
          <Link className="text-white text-lg hover:text-amber-300 transition" to="/Struktur" onClick={() => { toggleNavbar(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Struktur</Link>
          <Link className="text-white text-lg font-semibold py-2 px-4 rounded-lg bg-gradient-to-t from-blue-700 to-blue-200 hover:from-blue-800 hover:to-blue-400 transition" to="/form" onClick={() => { toggleNavbar(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Form</Link>
        </div>
      )}
    </nav>
  );
};

export default MyNavbar;
