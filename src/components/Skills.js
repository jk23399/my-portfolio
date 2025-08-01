import React from 'react';
import LeetCodeCard from './LeetCodeCard';
import GeeksforGeeksCard from './GeeksforGeeksCard';

export default function Skills() {
  return (
    <section id="Skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-left">Skills & Technologies</h2>
        
        {/* --- Skill Badges Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-20">
          {/* Proficient In */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Proficient In</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-lg font-medium px-4 py-2 rounded-full">Java</span>
              <span className="bg-indigo-100 text-indigo-800 text-lg font-medium px-4 py-2 rounded-full">Python</span>
              <span className="bg-indigo-100 text-indigo-800 text-lg font-medium px-4 py-2 rounded-full">Excel</span>
              <span className="bg-indigo-100 text-indigo-800 text-lg font-medium px-4 py-2 rounded-full">PowerPoint</span>
            </div>
          </div>
          {/* Familiar With */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Familiar With</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-yellow-100 text-yellow-800 text-lg font-medium px-4 py-2 rounded-full">C/C++</span>
              <span className="bg-yellow-100 text-yellow-800 text-lg font-medium px-4 py-2 rounded-full">MATLAB</span>
              <span className="bg-yellow-100 text-yellow-800 text-lg font-medium px-4 py-2 rounded-full">SQL</span>
              <span className="bg-green-100 text-green-800 text-lg font-medium px-4 py-2 rounded-full">JavaScript</span>
              <span className="bg-green-100 text-green-800 text-lg font-medium px-4 py-2 rounded-full">React</span>
              <span className="bg-green-100 text-green-800 text-lg font-medium px-4 py-2 rounded-full">HTML/CSS</span>
              <span className="bg-green-100 text-green-800 text-lg font-medium px-4 py-2 rounded-full">Node.js</span>
              <span className="bg-gray-200 text-gray-800 text-lg font-medium px-4 py-2 rounded-full">Git & GitHub</span>
              <span className="bg-gray-200 text-gray-800 text-lg font-medium px-4 py-2 rounded-full">REST APIs</span>
            </div>
          </div>
        </div>

        {/* --- Coding Profiles Section (New Structure) --- */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-left">Coding Profiles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full">
            <LeetCodeCard />
            <GeeksforGeeksCard />
          </div>
        </div>

      </div>
    </section>
  );
}