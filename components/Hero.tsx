import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import colors from 'tailwindcss/colors';
import Background from './Background';

type Props = {};
const IMAGE_SRC =
  'https://images.unsplash.com/photo-1520296337137-1f4843838f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80';
const TYPEWRITER_WORDS: string[] = [
  'full-stack app',
  'online store',
  'personal blog',
  'admin dashboard',
];

const Hero = ({}: Props) => {
  const [text] = useTypewriter({
    words: TYPEWRITER_WORDS,
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 65,
    deleteSpeed: 65,
  });

  return (
    <section id='hero' className='snap-start'>
      <div className='h-screen flex flex-col space-y-8 justify-center items-center overflow-hidden text-center'>
        {/* <Background /> */}
        <div className='flex-shrink-0 w-28 h-28 md:w-36 md:h-36 my-4 relative'>
          <Image
            src={IMAGE_SRC}
            alt='Profile Image'
            fill
            className='object-cover rounded-full'
          />
        </div>
        <p className='text-3xl md:text-6xl uppercase select-none font-bold z-10'>
          Hi, my name&apos;s
        </p>
        <p className='text-3xl md:text-6xl uppercase select-none font-bold z-10'>
          Angel Angelov
        </p>
        <p className='text-xl md:text-4xl uppercase select-none font-bold z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400'>
          I&apos;m a software engineer
        </p>
        <p className='text-xl md:text-4xl uppercase select-none font-bold z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-300'>
          <span>I will build your</span>
        </p>
        <p className='text-xl md:text-4xl uppercase select-none font-bold z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-300'>
          <span>{text}</span>
          <Cursor cursorColor={colors.amber[300]} cursorStyle='_' />
        </p>
        <div className='pt-6 z-10'>
          <Link href='#about'>
            <button className='hero-btn'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='hero-btn'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='hero-btn'>Skills</button>
          </Link>
          <Link href='#skills'>
            <button className='hero-btn'>Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
