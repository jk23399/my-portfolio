import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CodeViewer from "./components/CodeViewer";

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
