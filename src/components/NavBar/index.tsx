import React, { useState } from "react";
import "./style.css";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo or Branding */}
        <div className="text-2xl font-bold cursor-pointer">Njiva Olaf Ranaivoson</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 text-white space-y-4 py-4`}
      >
        <a href="#home" className="block px-4 py-2 hover:text-gray-400">Home</a>
        <a href="#about" className="block px-4 py-2 hover:text-gray-400">About</a>
        <a href="#projects" className="block px-4 py-2 hover:text-gray-400">Projects</a>
        <a href="#contact" className="block px-4 py-2 hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
