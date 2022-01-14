import React from 'react';
import Net from '../../assets/images/dotnet.png';
import Python from '../../assets/images/python.png';
import Docker from '../../assets/images/docker.png';
import Microservices from '../../assets/images/microservices.jpg';
import Golang from '../../assets/images/golang.png';

function About() {
  return (
    <section id='about'>
      <div className='container flex flex-col py-8 my-24'>
        <h3 className='text-5xl text-center'>
          I really, really like <span className='font-bold'>backend</span>{' '}
          development.
        </h3>
        <p className='text-center text-4xl mt-12 mb-8'>I usually eat</p>
        <div className='flex items-center mx-auto my-8'>
          <img src={Net} className='w-20' alt='Microsoft .Net' />
          <span className='font-bold text-4xl text-gray-300 mx-8'>&amp;</span>
          <img src={Python} className='w-20' alt='Python' />
        </div>
        <p className='text-center text-4xl my-8'>
          but I'm always eager to find out more about the things I like <br />
          &mdash; that's the reason we can also talk about
        </p>
        <div className='flex items-center justify-center gap-8 my-8'>
          <img src={Docker} className='w-20' alt='Docker' />
          <img src={Microservices} className='w-20' alt='Microservices' />
          <img src={Golang} className='w-20' alt='Golang' />
        </div>
      </div>
    </section>
  );
}

export default About;
