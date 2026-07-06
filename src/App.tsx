import { LanguageProvider } from './i18n/LanguageContext';
import GridBackground from './components/background/GridBackground';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <GridBackground />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
