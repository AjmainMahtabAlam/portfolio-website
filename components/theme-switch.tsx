'use client';

import React, { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div>
      <button
        className='fixed bottom-5 md:top-6 right-5 bg-slate-100 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
        border border-slate-800 border-opacity-40 shadow-2xl rounded-full flex justify-center items-center
        hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
        onClick={toggleTheme}>
        {theme === 'light' ? (
          <BsSun className='text-slate-800 text-xl' />
        ) : (
          <BsMoon className='text-slate-50 text-xl' />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;