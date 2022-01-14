import React from 'react';
import UniMaas from '../../assets/images/maastricht-university.png';
import CM from '../../assets/images/cm-logo.jfif';
import CX from '../../assets/images/cx-logo.png';
import Connector from '../../assets/images/resume-connector.png';
import Connector2 from '../../assets/images/resume-connector-2.png';

function Resume() {
  return (
    <section id='resume' className='py-8'>
      <div className='flex flex-col mx-auto items-center my-24'>
        {/* Maastricht University */}
        <div className='flex gap-4 mt-36'>
          <img
            src={UniMaas}
            alt='Maastricht University Logo'
            className='w-64'
          />
          <div className='border-l-2 border-gray-500 p-4 w-[275px]'>
            <span className='block'>Graduated in 2019</span>
            <span className='block'>BA in Knowledge Engineering</span>
          </div>
        </div>

        <img className='mx-auto w-2 my-16 opacity-25' src={Connector} alt='' />

        {/* CX Company */}
        <div className='flex gap-4 mb-8'>
          <img src={CX} alt='CX Logo' className='w-64 ml-auto' />
          <div className='border-l-2 border-gray-500 p-4 w-[275px] whitespace-nowrap'>
            <span className='block'>2018 &mdash; Ongoing</span>
            <span className='block'>Medior Developer</span>
          </div>
        </div>

        <img
          className='mx-auto w-32 my-16 opacity-25'
          src={Connector2}
          alt=''
        />

        <div className='flex justify-center gap-8'>
          {/* CM Company */}
          <div className='flex gap-4 mb-8'>
            <div className='w-24'>
              <img src={CM} alt='CM Logo' className='w-20 ml-auto' />
            </div>
            <div className='border-l-2 border-gray-500 p-4 w-[275px] whitespace-nowrap'>
              <span className='block'>CX got acquired by CM.com</span>
              <span className='block'>Part-time (upon request)</span>
            </div>
          </div>
          {/* Freelance Company */}
          <div className='flex gap-4 mb-8'>
            <div className='w-24'>
              <img src={CM} alt='Other company' className='w-20 ml-auto' />
            </div>
            <div className='border-l-2 border-gray-500 p-4 w-[275px] whitespace-nowrap'>
              <span className='block'>Started freelancing in 2020</span>
              <span className='block'>Managing Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
