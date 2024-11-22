import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  return (
    <div className="bg-back">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
