import React from 'react';
import { Link } from 'react-router-dom';

// Import your project images
import simplePOSpic from '../assets/SimplePOSpic.png';
import ABTesting from '../assets/ABTesting.png';
import InterestRateEstimator from '../assets/interestEstimator.gif';
import distPOS from '../assets/distPOS.png';

export default function Projects() {
  return (
    <section id="Projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-left">Projects</h2>

        <div className="space-y-20">

          {/* --- Category 1: Software Development --- */}
          <div>
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

              {/* Distributed POS System */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={distPOS}
                  alt="Distributed POS System"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Distributed POS System Migration (In Progress)
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                     Migrating a standalone Android POS to a distributed cloud architecture using AWS and Spring Boot. 
                     <br></br>Focuses on solving concurrency challenges (Race Conditions) and enabling real-time multi-device synchronization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Spring Boot</span>
                    <span className="bg-purple-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">REST API</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">MySQL</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">AWS</span>
                    <span className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">GitHub</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/simple-pos-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/dist-pos-report"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              </div>

              {/* Offline A/B Testing */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={ABTesting}
                  alt="Credit Risk Analyzer"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Offline A/B Testing for Recommender Systems
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                  Offline evaluation of recommendation algorithms using historical user data. Compares a popularity-based baseline against a personalized collaborative filtering model through statistical reweighting techniques, eliminating the need for live A/B tests.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
                    <span className="bg-purple-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Pandas</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Numpy</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Scikit-learn</span>
                    <span className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Matplotlib</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/offline-AB-testing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/offline-ab-testing-report"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              </div>

              {/* InterestRateEstimator */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={InterestRateEstimator}
                  alt="Credit Risk Analyzer"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Interest Rate Estimator
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                  Combines classifier and regressor models to predict loan eligibility and estimate interest rates. Provides real-time inference through a REST API and a responsive dashboard.                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
                    <span className="bg-purple-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Pandas</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Scikit-learn</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Flask</span>
                    <span className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">React</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/InterestRate_Estimator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/interest-rate-estimator"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
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
