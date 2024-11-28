import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';

function AppContent() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('hero');

  const themeIcon = darkMode ? moon : sun;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <div className="nav-content">
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>VARUN AKKALA</div>
          <div className="nav-menu">
            <div className="nav-links">
              <button 
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={() => scrollToSection('hero')}
              >
                About
              </button>
              <button 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
              <img src={themeIcon} alt="Theme toggle" />
            </button>
          </div>
        </div>
      </nav>
      
      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
