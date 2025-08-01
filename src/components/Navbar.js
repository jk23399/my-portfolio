// src/components/Navbar.js

import React from "react";
import logoImage from '../assets/Jooho_logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 relative">
      <div className="w-full px-8 sm:px-16 py-6 flex justify-between items-center">
        
        <a href="#Intro">
          <img
            src={logoImage}
            alt="Jooho Kim Signature Logo"
            className="h-32" 
          />
        </a>

        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#Intro" className="text-3xl hover:text-blue-600">Home</a></li>
          <li><a href="#About" className="text-3xl hover:text-blue-600">About</a></li>
          <li><a href="#Projects" className="text-3xl hover:text-blue-600">Projects</a></li>
          <li><a href="#Skills" className="text-3xl hover:text-blue-600">Skills</a></li>
        </ul>
      </div>
    </nav>
  );
}