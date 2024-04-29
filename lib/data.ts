import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { SiAlwaysdata } from 'react-icons/si';
import onlineshopping from '@/public/assests/Projects/onlineshopping.jpg';
import star from '@/public/assests/Projects/star.png';
import IPL from '@/public/assests/Projects/IPL.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'North South University-Bangladesh',
    location: 'Dhaka, Bangladesh',
    description:
      'I graduated after 4 years of studying in Computer Science and Engineering.',
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2024',
  },
  {
    title: 'SQA Tester (Part Time)',
    location: 'Dhaka, Bangladesh',
    description:
      'I Worked as a manual tester focusing on user experience, functionality, and overall quality assurance and reported the issues to the developers.',
    icon: React.createElement(CgWorkAlt),
    date: 'November 2023 - January 2024',
  },
  {
    title: 'Trainee Engineer',
    location: 'Dhaka, Bangladesh',
    description:
      "Worked as a trainee engineer for the Data Science Department Under the Enhancing Digital Government & Economy (EDGE) at Octopus Communication Ltd.",
    icon: React.createElement(SiAlwaysdata),
    date: 'October 2023 - January 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'IPL Score Predictor (Machine Learning)',
    description:
      'Using the dataset implemented machine Learning algorithms to predict the final score of a game.',
    tags: ['Machine Learning algorithms', 'decision tree regressor', 'linear regression', 'random forest regressor','support vector machine '],
    imageUrl: IPL,
  },
  {
    title: 'Online Shopping (e-commerce)',
    description:
      'This is a e-commerce website for buying your everyday things. The focus is to fulfill the needs of customers with a resonable price.',
    tags: ['HTML', 'PHP', 'Javascript', 'CSS', 'MySQL', 'Bootstrap'],
    imageUrl: onlineshopping,
  },
  {
    title: 'Star Social',
    description:
      'Created a social media website using django. Where one can join & create groups. They can also post and comment on the posts as well.  ',
    tags: ['HTML', 'Pyhton', 'Django', 'CSS', 'Javascript'],
    imageUrl: star,
  },
] as const;

export const skillsData = [
  'JavaScript',
  'Java',
  'C',
  'C++',
  'php',
  'Bootstrap',
  'HTML',
  'CSS',
  'Python',
  'Django',
  'React',
  'Next.js',
  'Node.js',
  'Machine Learning',
  'Deep Learning',
  'Git',
  'Docker',
  'Tailwind',
  'MySQL',
  'MongoDB',
  'Framer Motion',
] as const;