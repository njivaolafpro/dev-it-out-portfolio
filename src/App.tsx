import { LanguageProvider } from './i18n/LanguageContext';
import GridBackground from './components/background/GridBackground';
import NavBar from './components/layout/NavBar';
import Hero from './components/sections/Hero';

export default function App() {
  return (
    <LanguageProvider>
      <GridBackground />
      <NavBar />
      <main>
        <Hero />
      </main>
    </LanguageProvider>
  );
}
