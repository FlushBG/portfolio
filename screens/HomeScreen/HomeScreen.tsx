import React, { useState } from 'react';
import { m, useScroll } from 'framer-motion';
import { imageData } from './image-data';
import useParallax from '../../hooks/useParallax';
import { VerticalParallaxImage } from '../../components/VerticalParallax';
import classes from './HomeScreen.module.scss';
import localFont from 'next/font/local';
import { cn } from '../../utils/classname-utils';

const moonliteSolid = localFont({
  src: '../../public/fonts/Moonlite Solid.ttf',
});

const HomeScreen: React.FC = () => {
  const [showGreeting, setShowGreeting] = useState<boolean>(true);
  const screenRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: screenRef,
    offset: ['end end', 'end start'],
  });

  return (
    <section ref={screenRef} className={classes.body}>
      {showGreeting && <m.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onViewportLeave={() => setShowGreeting(false)}
        className={cn(classes.greeting)}
      >
        hello
      </m.h1>}
      {imageData.map((data) => (
        <VerticalParallaxImage
          key={data.alt}
          src={data.src}
          alt={data.alt}
          priority={data.priority}
          outputRange={data.outputRange}
          scrollProgress={scrollYProgress}
          className={classes[data.className]}
        />
      ))}
    </section>
  );
};

export default HomeScreen;
