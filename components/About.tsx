'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About', 0.75);

  return (
    <motion.section
      ref={ref}
      id='about'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className='mb-28 md:mb-0 max-w-[45rem] text-center leading-10 space-y-6 scroll-mt-28 h-auto md:h-[35vh] justify-center items-center flex flex-col'>
      <SectionHeading title={'About me'} />
      <p className='text-xl'>
        Welcome to my website my name is{' '}
        <span className='font-bold'> Ajmain Mahtab Alam.</span> I am a recent Computer Science 
        & Engineering graduate with a strong passion for coding. My passion lies in roles 
        that allow me to work on
        <span className='font-bold'> software development or machine learning projects, </span>
        where I can leverage my skills and grow professionally. 
        In the future, I aim to deepen my expertise in software development and advance my 
        knowledge in machine learning, deep learning, and artificial intelligence. I am actively seeking a stimulating roles as a
        where I can contribute to the progress and achievements of a forward-thinking
        organization.
      </p>
    </motion.section>
  );
};

export default About;