import { useRef } from 'react';
import Home3DSpline from './components/Home3DSpline';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ClientBarSection from './components/ClientBarSection';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={mainRef} className="bg-gray-900">
      <Home3DSpline />
      <About />
      <ClientBarSection/>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;