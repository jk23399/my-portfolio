import React from 'react';
// Import your project images
import svdImage from '../assets/gauss.jpg';
import statPlotImage from '../assets/7z_zip.png';

export default function Projects() {
  return (
    <section id="Projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-left">Projects</h2>
        
        <div className="space-y-20">

          {/* --- Category 1: Software Development --- */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-left border-b-2 border-indigo-500 pb-2">Software Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center h-full">
                <h4 className="text-xl font-bold mb-2">Project Coming Soon</h4>
                <p className="text-gray-600">This spot is reserved for a future software project.</p>
              </div>
            </div>
          </div>

          {/* --- Category 2: Data Science --- */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-left border-b-2 border-indigo-500 pb-2">Data Science</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
               <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center h-full">
                <h4 className="text-xl font-bold mb-2">Project Coming Soon</h4>
                <p className="text-gray-600">This spot is reserved for a future data analysis project.</p>
              </div>
            </div>
          </div>

          {/* --- Category 3: Mathematics & Algorithms --- */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-left border-b-2 border-indigo-500 pb-2">Mathematics & Algorithms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              
              {/* SVD Project Card */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <img src={svdImage} alt="Analysis of SVD image compression" className="rounded-md mb-4 border" />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">Image Compression with SVD</h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    A Linear Algebra project demonstrating image compression by applying Singular Value Decomposition (SVD) to reduce matrix rank.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">MATLAB</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Linear Algebra</span>
                  </div>
                  <a 
                    href="/files/svd-lab-report.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    View Report (PDF)
                  </a>
                </div>
              </div>

              {/* Statistics Project Card */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <img src={statPlotImage} alt="T-distribution plot for compression analysis" className="rounded-md mb-4 border" />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">Paired t-Test: ZIP vs. 7z Compression Speed</h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    A project for Statistics and Probability that uses a paired t-test to determine if a statistically significant difference exists in compression speed between ZIP and 7z algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Statistics</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Matplotlib</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">PowerShell</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Paired t-Test</span>
                  </div>
                  <a 
                    href={process.env.PUBLIC_URL + '/files/stat-project.pdf'}                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    View Report (PDF)
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}