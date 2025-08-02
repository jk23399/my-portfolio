import React, { useState, useEffect } from "react";
import logoImage from '../assets/Jooho_logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={
        `fixed bg-white shadow-lg z-50 transition-all duration-300
        ${scrolled ? 'right-12 w-48 top-0 bottom-0 overflow-y-auto' : 'right-0 w-full h-auto top-0'}
        `
      }
    >
      <div
        className={`flex transition-all duration-300
          ${scrolled
            ? 'flex-col items-center justify-start py-8 space-y-8'
            : 'justify-between items-center w-full px-8 sm:px-16 py-6'}`
      }
      >
        <a href="#Intro">
          <img
            src={logoImage}
            alt="Jooho Kim Signature Logo"
            className={`${scrolled ? 'h-16' : 'h-32'}`}
          />
        </a>

        <ul
          className={`transition-all duration-300 text-right
            ${scrolled
              ? 'flex flex-col space-y-6 mt-4'
              : 'hidden md:flex items-center space-x-8'}`
        }
        >
          <li><a href="#Intro" className="text-3xl hover:text-blue-600">Home</a></li>
          <li><a href="#About" className="text-3xl hover:text-blue-600">About</a></li>
          <li><a href="#Projects" className="text-3xl hover:text-blue-600">Projects</a></li>
          <li><a href="#Skills" className="text-3xl hover:text-blue-600">Skills</a></li>
          <li><a href="#Contact" className="text-3xl hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
