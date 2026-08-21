import React from 'react'
import Header from './components/Header'
import IndexRail from './components/IndexRail'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Header />
      <IndexRail />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;
