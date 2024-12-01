import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-hidden antialiased text-neutral-800 scroll-smooth'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App