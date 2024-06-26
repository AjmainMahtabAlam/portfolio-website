import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDevider from '@/components/SectionDevider';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center px-4'>
      <Intro />
      <SectionDevider />
      <About />
      <SectionDevider />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

export const runtime = 'edge';