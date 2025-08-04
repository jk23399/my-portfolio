import React from 'react';
import { Link } from 'react-router-dom'; // <a> 태그 대신 Link를 import 합니다.

// Import your project images
import svdImage from '../assets/gauss.jpg';
import statPlotImage from '../assets/7z_zip.png';
import carImage from '../assets/car.jpg';
import scatterByRegion from '../assets/scatter_by_region.png'; // Placeholder for scatter plot by region


export default function Projects() {
  return (
    <section id="Projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-left">Projects</h2>
        
        <div className="space-y-20">

          {/* --- Category 1: Software Development --- */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-left border-b-2 border-indigo-500 pb-2">
              Software Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
              
              {/* Autonomous Driving Program Card */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <img
                  src={carImage}
                  alt="Autonomous Driving Program"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Autonomous Driving Program
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    An autonomous driving program using EV3 Lego and MATLAB.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      MATLAB
                    </span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href={`/view/autonomousDriving.m`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <a
                      href="https://youtube.com/shorts/LAghSF4Ig9g?feature=share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- Category 2: Data Science --- */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-left border-b-2 border-indigo-500 pb-2">
              Data Science / Data Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
              
              {/* --- Data Science Project Card --- */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <img
                  src={scatterByRegion}
                  alt="Correlation heatmap of World Bank data"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    The Impact of Digital Finance on National Treasury
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Conducted a full-cycle analysis of World Bank data to show that mobile finance expansion significantly boosts tax revenue in developing economies (≈0.087 slope, p &lt; 0.001), while advanced markets exhibit diminishing returns. Included hypothesis testing, balanced panel filtering, and targeted feature engineering.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                      Python
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                      Pandas
                    </span>
                     <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                      Matplotlib
                    </span>
                     <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                      Seaborn
                    </span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      Data Analysis
                    </span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/worldbank-data-analysis/blob/main/mobile_tax_revenue.ipynb" // 여기에 깃허브 레포지토리 링크를 넣어주세요
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/data-science-report" 
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- Category 3: Mathematics --- */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-left border-b-2 border-indigo-500 pb-2">
              Mathematics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              
              {/* SVD Project Card */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <img
                  src={svdImage}
                  alt="Analysis of SVD image compression"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Image Compression with SVD
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    A Linear Algebra project demonstrating image compression by
                    applying Singular Value Decomposition (SVD) to reduce matrix rank.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      MATLAB
                    </span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      Linear Algebra
                    </span>
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
                <img
                  src={statPlotImage}
                  alt="T-distribution plot for compression analysis"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Paired t-Test: ZIP vs. 7z Compression Speed
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    A project for Statistics and Probability that uses a paired
                    t-test to determine if a statistically significant difference
                    exists in compression speed between ZIP and 7z algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Statistics
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Matplotlib
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      PowerShell
                    </span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      Paired t-Test
                    </span>
                  </div>
                  <a
                    href={process.env.PUBLIC_URL + '/files/stat-project.pdf'}
                    target="_blank"
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