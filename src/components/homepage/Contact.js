import React from 'react';

function Contact() {
  return (
    <section className='py-8 my-24'>
      <div className='container flex flex-col items-center'>
        <h2 className='text-4xl mb-16 font-bold text-center'>
          Find out more about me
        </h2>
        <div className=''>
          <a
            href='https://www.linkedin.com/in/giona-paolini-ba681b117/'
            target='_blank'
            rel='noreferrer'
            className='bg-blue-500 hover:bg-blue-600 py-4 px-6 text-white'>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
