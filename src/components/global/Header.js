import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../utils/Icon';

import Logo from './Logo';

function Header() {
  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

  const NAV = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/',
      name: 'Projects',
    },
    {
      path: '/',
      name: 'About',
    },
  ];

  // useLayoutEffect(() => {
  //   document.addEventListener('DOMContentLoaded', function () {
  //     const header = document.querySelector('header');
  //     document.addEventListener('scroll', () => {
  //       if (window.scrollY > 50) {
  //         header.classList.add('shadow-classic');
  //       } else {
  //         if (header.classList.contains('shadow-classic')) {
  //           header.classList.remove('shadow-classic');
  //         }
  //       }
  //     });
  //   });
  // }, []);

  // Add overflow-hidden to body if hamburger menu is toggled
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    isHamburgerToggled && body.classList.add('overflow-hidden');
    !isHamburgerToggled &&
      body.classList.contains('overflow-hidden') &&
      body.classList.remove('overflow-hidden');
  }, [isHamburgerToggled]);

  const MobileNavigation = () => {
    return (
      <nav
        id='mobile_navigation'
        className={`${
          isHamburgerToggled ? 'block' : 'hidden'
        } bg-gray-900 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center lg:hidden text-xl z-10`}>
        <ul className='flex flex-col justify-center items-center gap-4'>
          {/* Routes Here */}
          {NAV.map((link, i) => (
            <li key={i} className=''>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          <button
            className='mt-12 border-2 border-white py-3 px-6 text-white'
            onClick={() => setIsHamburgerToggled(false)}>
            Close
          </button>
        </ul>
      </nav>
    );
  };

  const DesktopNavigation = () => {
    return (
      <nav id='desktop-nav' className='w-full hidden lg:block'>
        <ul className='flex items-center justify-between gap-4 text-center'>
          {NAV.map((link, i) => (
            <li key={i} className=''>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <header className='h-[85px] flex items-center z-10'>
      <div className='container flex items-center justify-center'>
        {/* Logo Here*/}

        {/* Desktop Nav */}
        <DesktopNavigation />
        {/* Hamburger Icon */}
        <div
          className='text-white lg:hidden'
          onClick={() => setIsHamburgerToggled(true)}>
          <Icon hamburger />
        </div>
        {/* Mobile Nav */}
        <MobileNavigation />
      </div>
    </header>
  );
}

export default Header;
