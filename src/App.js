import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CodeViewer from "./components/CodeViewer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DataScienceReport from "./components/DataScienceReport";
import ScrollToTop from "./components/ScrollToTop";
import SemiconductorReport from './components/SemiconductorReport';
import LoanApprovalReport from './components/LoanApprovalReport';
import InterestRateReport from './components/InterestRateReport';
import InterestRateEstimatorReport from "./components/InterestRateEstimatorReport";
import CarValuationReport from './components/CarValuationReport'; 
import SimplePOSReport from './components/SimplePOSReport';
import OfflineABTesting from './components/OfflineABTesting';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="mt-36">
          <Routes>
            {/* Home route renders all main sections */}
            <Route
              path="/"
              element={
                <>
                  <Intro />
                  <About />
                  <Projects />
                  <Skills />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* View raw code files */}
            <Route path="/view/:filename" element={<CodeViewer />} />

            {/* Reports */}
            <Route path="/trending-stock-report" element={<SemiconductorReport />} />
            <Route path="/loan-approval-report" element={<LoanApprovalReport />} />
            <Route path="/interest-rate-report" element={<InterestRateReport />} />
            <Route path="/car-valuation-report" element={<CarValuationReport />} />
            <Route path="/data-science-report" element={<DataScienceReport />} />
            <Route path="/simple-pos-report" element={<SimplePOSReport />} />
            <Route path="/offline-ab-testing-report" element={<OfflineABTesting />} />
            {/* App “View Program” page for the estimator */}
            <Route path="/interest-rate-estimator" element={<InterestRateEstimatorReport />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
