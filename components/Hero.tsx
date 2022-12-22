import React, { useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import colors from 'tailwindcss/colors';
import Background from './Background';

type Props = {};
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
    <div className='h-screen flex flex-col space-y-8 justify-center overflow-hidden text-center'>
      <Background />
      <p className='text-4xl md:text-6xl uppercase select-none font-bold z-10'>
        Hi, my name&apos;s
      </p>
      <p className='text-4xl md:text-6xl uppercase select-none font-bold z-10'>
        Angel Angelov
      </p>
      <p className='text-2xl md:text-4xl uppercase select-none font-bold z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400'>
        I&apos;m a software engineer
      </p>
      <p className='text-2xl md:text-4xl uppercase select-none font-bold z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-300'>
        <span>I will build your</span>
      </p>
      <p className='text-2xl md:text-4xl uppercase select-none font-bold z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-300'>
        <span>{text}</span>
        <Cursor cursorColor={colors.amber[300]} cursorStyle='_' />
      </p>
    </div>
  );
};

export default Hero;
