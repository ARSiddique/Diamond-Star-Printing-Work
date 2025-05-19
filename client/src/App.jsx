import React from 'react'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  

import Home from './pages/HomePage'  
import About from './pages/AboutUs'  
import Gallery from './pages/Gallery'  
import Contact from './pages/ContactUs'  
import Navbar from './components/Navbar'  
import ScrollToTopButton from './components/ScrollToTopButton'  
import WhatsAppButton from './components/WhatsAppButton'  
import EmailButton from './components/EmailButton'  
import Footer from './components/Footer'  
import Services from './pages/Services'  
import SerDetail from './pages/SerDetail'  

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <WhatsAppButton />
      <EmailButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Updated the main services route to plural */}
        <Route path="/services" element={<Services />} />
        {/* New route for individual service details */}
        <Route path="/services/:id" element={<SerDetail/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )  
}

export default App  
