import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/theme-switch';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ajmain Mahtab Alam | Personal Portfolio Website',
  description:
    'Hello I am Ajmain Mahtab Alam. A Full-Stack Developer. I am particularly interested in roles that allow me to work on software development or machine learning projects, where I can leverage my skills and grow professionally. In the future, I aim to deepen my expertise in software development and advance my knowledge in machine learning, deep learning, and artificial intelligence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] md:h-screen w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946266]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] md:h-screen w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}