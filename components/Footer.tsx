import React from 'react';

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs block'>
        &copy; All rights reserved to Ajmain Mahtab Alam.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> Built with
        NextJs (App Router), TypeScript, TailwindCSS, Framer Motion
      </p>
    </footer>
  );
};

export default Footer;