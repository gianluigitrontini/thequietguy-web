const Icon = (props) => {
  return (
    <>
      {props.facebook && (
        <img
          src='https://img.icons8.com/material/24/ffffff/facebook-f.png'
          alt='Facebook Icon'
        />
      )}
      {props.twitter && (
        <img
          src='https://img.icons8.com/material/24/ffffff/twitter-squared.png'
          alt='Twitter Icon'
        />
      )}
      {props.instagram && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'>
          <path d='M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z'></path>
        </svg>
      )}
      {props.phone && (
        <svg
          aria-hidden='true'
          role='img'
          width='1em'
          height='1em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 32 32'>
          <path
            d='M24 13h-2a3.003 3.003 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5z'
            fill='currentColor'
          />
          <path
            d='M28 13h-2a7.008 7.008 0 0 0-7-7V4a9.01 9.01 0 0 1 9 9z'
            fill='currentColor'
          />
          <path
            d='M20.333 21.482l2.24-2.24a2.167 2.167 0 0 1 2.337-.48l2.728 1.092A2.167 2.167 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.167 2.167 0 0 1 2.012 1.362l1.091 2.728a2.167 2.167 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815z'
            fill='currentColor'
          />
        </svg>
      )}
      {props.mail && (
        <svg
          aria-hidden='true'
          role='img'
          width='1em'
          height='1em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 16 16'>
          <g fill='currentColor'>
            <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414L.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
          </g>
        </svg>
      )}
      {props.hamburger && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      )}
    </>
  );
};

export default Icon;
