import { useRef } from 'react';
import Home3DSpline from './components/Home3DSpline';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import ClientBarSection from './components/ClientBarSection';
import Navbar from './components/NavBar';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={mainRef}>
      <Navbar/>
      <Home3DSpline />
      <About />
      <Experience />
      <ClientBarSection/>
      <Contact />
    </div>
  );
}

export default App;