import React, { useEffect, useState } from 'react'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import WOW from 'wowjs';


const App = () => {
  const [theme, setTheme] = useState(() => true);
  const toggleTheme = () => {
    setTheme( prevTheme => !prevTheme);
  }

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <div className={`${theme ? ' bg-dark text-light' : 'bg-light text-dark'}`}>
      <NavBar theme={theme}/>
      <Home theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Projects />
      <Skills  />
      <Contact />
      <Footer theme={theme} />
    </div>
  )
}

export default App