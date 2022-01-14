import React from 'react';
import Footer from '../components/global/Footer';
import About from '../components/homepage/About';
import Contact from '../components/homepage/Contact';
import Hero from '../components/homepage/Hero';
import Resume from '../components/homepage/Resume';

function Homepage() {
  return (
    <>
      <Hero />
      <Resume />
      <div className='w-1/2 border-t-2 h-2 border-gray-200 mx-auto'></div>
      <About />
      <div className='w-1/2 border-t-2 h-2 border-gray-200 mx-auto'></div>
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
