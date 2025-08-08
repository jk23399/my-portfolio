import React from 'react';
import { Link } from 'react-router-dom';

// Import your project images
import carImage from '../assets/car.jpg';
import scatterByRegion from '../assets/scatter_by_region.png';
import trendingStockDashboard from '../assets/dashboard.gif';
import interestRateEsimator from '../assets/interestEstimator.gif';
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

              {/* Interest Rate Estimator */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={interestRateEsimator}
                  alt="Credit Risk Analyzer"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Loan Approval and Interest Rate Estimator
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    An interactive web application that predicts credit risk and loan approval likelihood based on user-provided financial data. The prediction engine is powered by two custom-trained machine learning models, both built from datasets that were manually cleaned and refined before training. Deployed on Vercel.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
                    <span className="bg-purple-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Scikit-learn</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">LightGBM</span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Matplotlib</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">React</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">JavaScript</span>
                    <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Vercel</span>
                    <span className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">GitHub</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/credit_risk_analyzer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/credit-risk-analyzer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
                    <a
                      href="https://credit-risk-analyzer-omega.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Autonomous Driving Program Card */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
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
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- Category 2: Data Science / Data Analysis --- */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-left border-b-2 border-indigo-500 pb-2">
              Data Science / Data Analysis
            </h3>

            {/* Put ALL DS cards in the SAME grid so none becomes full width */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 items-stretch">

              {/* Digital Finance */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
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
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Pandas</span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Matplotlib</span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Seaborn</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Data Analysis</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/worldbank-data-analysis/blob/main/mobile_tax_revenue.ipynb"
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

              {/* Trending Stocks */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={trendingStockDashboard}
                  alt="Dashboard for trending stock analysis"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    ARIMA vs. LSTM: A Performance Comparison of Time-Series Forecasting Models on Major Semiconductor Stocks
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    This project compares ARIMA (classical) and LSTM (deep learning) models for stock price forecasting. Following an exploratory data analysis of the semiconductor market (NVIDIA, AMD, Intel), NVIDIA stock was used as a case study for the model comparison. The project culminates in an interactive Dash dashboard showcasing the LSTM model's superior performance in capturing market volatility.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">TensorFlow</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Dashboard</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Scikit-learn</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">API</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Time-series Analysis</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/Time-Serie_Forecasting_Models/blob/main/notebooks/01_data_exploaration.ipynb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/trending-stock-report"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              </div>

              {/* Loan Approval Prediction & Interactive Dashboard */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={loanAnalysisGif}
                  alt="Interactive Loan Approval Dashboard"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Loan Approval Prediction & Interactive Dashboard
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Developed a model to predict loan approval status, discovering that CIBIL credit score is the most critical factor. The project features an interactive dashboard built with Tableau to visualize key insights and model findings effectively.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Scikit-learn</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Tableau</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Dashboard</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Data Analysis</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/credit_risk_analyzer/blob/main/notebooks/01_%08loan_approval_prediction.ipynb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/loan-approval-report"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              </div>

              {/* Predictive Modeling of Loan Interest Rates */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={interestRateBarchart}
                  alt="Bar chart comparing actual vs. predicted interest rates"
                  className="rounded-md mb-4 border"
                />
                <div className="flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">
                    Predictive Modeling of Loan Interest Rates
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    To address the limitations of a simple approval model, this project predicts loan interest rates using a real-world Kaggle dataset. Starting with over 150 features, rapid data reduction retained only 8 core, user-providable features. After feature engineering (e.g., creating a single FICO score from a range) and preprocessing, a LightGBM model was trained, achieving a strong R² of 0.91, further optimized to 0.92 via hyperparameter tuning.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Pandas</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Scikit-learn</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">LightGBM</span>
                    <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Machine Learning</span>
                  </div>
                  <div className="mt-auto flex space-x-4">
                    <a
                      href="https://github.com/jk23399/credit_risk_analyzer/blob/main/notebooks/02_interest_rate_prediction.ipynb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </a>
                    <Link
                      to="/interest-rate-report"
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
