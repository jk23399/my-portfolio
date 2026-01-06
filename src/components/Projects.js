import React from 'react';
import { Link } from 'react-router-dom';

// Import your project images
import carImage from '../assets/ai_car/AI_CAR.gif';
import scatterByRegion from '../assets/scatter_by_region.png';
import trendingStockDashboard from '../assets/dashboard.gif';
import simplePOSpic from '../assets/SimplePOSpic.png';
import interestRateBarchart from '../assets/interest_rate_prediction_pics/binned_comparison.png';
import loanAnalysisGif from '../assets/loan_approval_prediction_pics/loan_analysis.gif';

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

            {/* 2-column grid; cards take equal height */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 items-stretch">

              {/* Simple POS */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={simplePOSpic}
                  alt="Credit Risk Analyzer"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Custom Android POS Solution
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                  A client-commissioned Android POS system engineered for dedicated tablet hardware. Features an offline-first architecture with local database management, direct hardware integration (receipt printers), and role-based access control. Distributed via Google Play Store for streamlined client deployment.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Android</span>
                    <span className="bg-purple-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Kotlin</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">SQLite</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Google Play Console</span>
                    <span className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">GitHub</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/SimplePOS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/simple-pos-report"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              </div>

              {/* Car Valuation App */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={carImage} // replace with a GIF/PNG of your app if you have one
                  alt="Used Car Valuation web app"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Used Car Valuation from Listing or Photo
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    A lightweight web tool that parses a car listing URL or image upload; uses the
                    Gemini API to extract vehicle details, calls the CIS Automotive API for a baseline
                    price, and applies backend logic to return a fair market range with comparable
                    listings. Built with React and FastAPI, deployed on Vercel.                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">React</span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">FastAPI</span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
                    <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
                    <span className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">External APIs</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Vercel</span>
                    <span className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">GitHub</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/car_valuation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/car-valuation-report"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
                    <a
                      href="https://car-valuation-lyart.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
