import React from 'react';
import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';
import classes from './AboutScreen.module.scss';
import { cn } from '../../utils/classname-utils';
import { m } from 'framer-motion';

const raleway = Raleway({ subsets: ['latin'] });
const moonliteSolid = localFont({
  src: '../../public/fonts/Moonlite Solid.ttf',
});
const moonliteOutline = localFont({
  src: '../../public/fonts/Moonlite Outline.ttf',
});

const AboutScreen = () => {
  return (
    <section className={classes.body}>
      <m.h1
        initial={{ x: '95vw' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={cn(classes.heading)}
      >
        My name is Angel Angelov.
      </m.h1>
      <m.h2
        initial={{ x: '-85vw' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={cn(classes.subheading)}
      >
        I turn ideas into digital solutions.
      </m.h2>
      <m.p
        initial={{ x: '95w' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={cn(classes.paragraph, raleway.className)}
      >
        I&apos;m based in Sofia, Bulgaria and have almost 5 years of experience
        building web apps and services using Node.js, Next.js, and Typescript.
        I&apos;ve worked with clients in automotive, gambling, and insurance
        industries and always deliver high-quality solutions that exceed
        expectations. <br />
        <br />
        Ready to take a look at my portfolio and see some of my past work?
        Let&apos;s connect and chat about how we can work together on your next
        project!
      </m.p>
    </section>
  );
};

export default AboutScreen;
