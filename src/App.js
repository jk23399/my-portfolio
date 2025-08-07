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
import SemiconductorReport from './components/SemiconductorReport'; // 파일의 실제 위치에 맞게 경로를 수정하세요
import LoanApprovalReport from './components/LoanApprovalReport';
import InterestRateReport from './components/InterestRateReport';

// src/App.js
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 2. <BrowserRouter> */}
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

            {/* CodeViewer route for viewing raw code files */}
            <Route path="/view/:filename" element={<CodeViewer />} />

            {/* --- Add the new route for your Data Science Report --- */}
            <Route path="/data-science-report" element={<DataScienceReport />} />
                        
            {/* --- Add the new route for your Data Science Report --- */}
            <Route path="/trending-stock-report" element={<SemiconductorReport />} />

            {/* --- Add the new route for your Data Science Report --- */}
            <Route path="/loan-approval-report" element={<LoanApprovalReport />} /> 

            {/* --- Add the new route for your Data Science Report --- */}
            <Route path="/interest-rate-report" element={<InterestRateReport />} />
            </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;