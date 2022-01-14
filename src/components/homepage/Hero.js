import React, { useEffect, useState } from 'react';
import coding from '../../assets/images/coding-hero.JPG';
import giona from '../../assets/images/giona-hero-1.JPG';

function Hero() {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const number = window.scrollY / 300 > 1 ? 1 : window.scrollY / 300;
      setOpacity(number.toFixed(2));
    });
  });
  return (
    <section className='hero bg-white py-8'>
      <div className='container flex h-full items-start gap-4'>
        <div className='flex flex-col gap-4'>
          <img src={giona} alt='' style={{ borderTopLeftRadius: '200px' }} />
          <img
            src={coding}
            alt=''
            style={{ borderBottomRightRadius: '200px' }}
          />
        </div>
        <h1 className='uppercase text-6xl font-bold sticky top-[2rem]'>
          Hello! My name is{' '}
          <span className='tracking-wide inline-block text-[#a8a8a8]'>
            thequietguy
          </span>{' '}
          <span style={{ opacity: opacity }}>and I love coding.</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
