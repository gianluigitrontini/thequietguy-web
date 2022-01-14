import React from 'react';

function Footer() {
  return (
    <footer className='py-4'>
      <div className='container flex flex-col items-center'>
        <span className='text-xs'>&#169; Copyright 2021 | Giona Paolini</span>
        <span className='text-xs'>
          Design and Development by{' '}
          <a
            href='https://gianluigitrontini.github.io/'
            target='_blank'
            rel='noreferrer'>
            Gianluigi Trontini
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
