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
// src/App.js   
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="mt-16">
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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
