// src/components/Intro.js

import React from 'react';
import profileImage from '../assets/jooho.png';

export default function Intro() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center max-w-7xl w-full">
        
        <div className="w-full md:w-3/5 text-center md:text-left pr-0 md:pr-12 mb-12 md:mb-0">
          <p className="text-4xl text-gray-600 mb-2">Hey, I am Jooho Kim</p>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            A Software Engineer <br/>Building the Future
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Majoring in Computer Science at ASU, I am on the path to becoming the best developer through the experience of applying theory to real projects.          </p>
          <a
            href="#contact" 
            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="w-full md:w-2/5 flex justify-center items-center">
          <div className="relative w-[400px] h-[500px] sm:w-[450px] sm:h-[550px]">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -rotate-6"></div>
            <img 
              src={profileImage}
              alt="Jooho Kim Profile" 
              className="relative w-full h-full object-cover rounded-3xl shadow-lg" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}