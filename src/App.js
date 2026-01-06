import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Academics from "./Components/Acadamics";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import GlowthicCaseStudy from "./Components/GlowthicCaseStudy";
import IntroHero from "./Components/IntroHero";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();



  useEffect(() => {
    if (location.state?.scrollTo) {
      document
        .getElementById(location.state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* INTRO */}
      {showIntro && <IntroHero onDone={() => setShowIntro(false)} />}

      {!showIntro && (
        <div className="app-wrapper">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <div className="page-wrapper">
                  <Home />
                  <Skills />
                  <About />
                  <Academics />
                  <Experience />
                  <Projects />
                  <Achievements />
                  <Contact />
                </div>
              }
            />

            <Route
              path="/projects/glowthic"
              element={<GlowthicCaseStudy />}
            />
          </Routes>
        </div>
      )}
    </>

  );
}

export default App;
