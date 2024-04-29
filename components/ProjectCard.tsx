'use client';

import React, { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';

type ProjectInfoProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectInfoProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 2'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      className='group mb-3 sm:mb-8 last:mb-0'
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}>
      <section
        className='text-start bg-gray-100 md:max-w-[45rem] border border-black/5 overflow-hidden pr-0
        md:pr-8 relative md:h-[22rem] hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20'>
        <div
          className='pt-4 pb-7 px-5 pl-0 pr-0 sm:pt-0 md:pl-10 md:pr-2 md:pt-10 max-w-[60%] md:max-w-[50%] flex flex-col h-full 
        group-even:ml-[8rem] md:group-even:ml-[22rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-50'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 md:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt='project image'
          quality={95}
          className='absolute top-[40px] -right-60 md:-right-80 h-[17rem] w-auto md:h-full md:w-[40rem] rounded-lg shadow-2xl
          group-even:right-80 
          group-even:-left-60 
          md:group-even:-left-80 
          transition 
          group-hover:-translate-x-5 
          group-hover:translate-y-5 
          group-hover:-rotate-3 

          group-even:group-hover:translate-x-5 
          group-even:group-hover:translate-y-5 
          group-even:group-hover:rotate-3 

          group-hover:scale-105'
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;