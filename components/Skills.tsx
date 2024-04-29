'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills', 0.5);
  return (
    <section
      ref={ref}
      id='skills'
      className='flex flex-col justify-center items-center text-center max-w-[53rem] scroll-mt-28 mb-40'>
      <SectionHeading title='Skills' />
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skills, index) => (
          <motion.li
            key={index}
            className='flex justify-center items-center bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}>
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;