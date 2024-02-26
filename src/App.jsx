// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Insights from './components/Insights';
import Service from "./components/Services";
import Projects from "./components/Projects";

import About from "./components/About";
import AboutMarcela from './components/AboutMarcela';
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <AboutMarcela />
      <Insights/>
      <Service />
      <Projects />
      <Contact />
      <footer className="p-3 text-center bg-bg_light_primary">
        <h6 className="mb-3 text-bg_pink_third">Bruna Galozzi</h6>
        <p>Design By Willian De Sá</p>
      </footer>
    </div>
  );
};

export default App;
