'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCard from './ProjectCard';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.25);

  return (
    <section ref={ref} id='projects' className='text-center scroll-mt-28 mb-28'>
      <SectionHeading title='My Projects' />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;