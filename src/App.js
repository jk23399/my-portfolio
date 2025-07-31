import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  return (
    <div className = "App">
      <Navbar />
      <main className="mt-16">{/* mt-16 to push content bloew the fixed navbar */}
        <Intro />
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Skills /> */}
      </main>
    </div>
  );
}

export default App;