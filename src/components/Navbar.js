import React from "react";
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/Jooho_logo.png';

export default function Navbar() {
  const location = useLocation(); // Get current URL information

  // --- Active link styling ---
  const activeLinkClass = "text-indigo-600 font-bold";
  const defaultLinkClass = "text-3xl hover:text-blue-600 transition-colors";

  return (
    // --- Main navigation bar container ---
    // It's fixed to the top, full-width, with a white background and shadow.
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-8 py-4">
        
        {/* --- Logo --- */}
        {/* Clicking the logo always takes you to the top of the main page. */}
        <Link to="/#Intro">
          <img
            src={logoImage}
            alt="Jooho Kim Signature Logo"
            className="h-24" // Fixed height for the logo
          />
        </Link>

        {/* --- Navigation Links --- */}
        {/* The list is always displayed horizontally on medium screens and up. */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><Link to="/#Intro" className={defaultLinkClass}>Home</Link></li>
          <li><Link to="/#About" className={defaultLinkClass}>About</Link></li>
          <li>
            <Link 
              to="/#Projects" 
              // The 'Projects' link is highlighted when on the data science report page.
              className={`${defaultLinkClass} ${location.pathname === '/data-science-report' ? activeLinkClass : ''}`}
            >
              Projects
            </Link>
          </li>
          <li><Link to="/#Skills" className={defaultLinkClass}>Skills</Link></li>
          <li><Link to="/#Contact" className={defaultLinkClass}>Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}