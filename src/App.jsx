import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./shared/components/About";
import Contact from "./shared/components/Contact";
import Experience from "./shared/components/Experience";
import Home from "./shared/components/Home";
import Navbar from "./shared/components/Navbar";
import Skills from "./shared/components/Skills";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
