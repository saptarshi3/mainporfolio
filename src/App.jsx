import { useEffect } from 'react';
import Lenis from 'lenis';
import Scene from './components/canvas/Scene';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import OpenSource from './components/sections/OpenSource';
import Contact from './components/sections/Contact';
import './index.css';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {/* 3D Canvas Background */}
      <Scene />

      {/* Scrollable Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <OpenSource />
        <Contact />
      </main>
    </div>
  );
}

export default App;
