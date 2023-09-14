import React from 'react';
import { m, useScroll } from 'framer-motion';
import { fonts } from '@/pages/_app';
import { ScrollIndicator } from '@/components';
import { VerticalParallaxImage } from '@/components/VerticalParallax';
import useScreenSizeDetection from '@/hooks/useScreenSizeDetection';
import { cn } from '@/utils/classname-utils';
import { getImageData } from './image-data';
import classes from './HomeScreen.module.scss';

// TODO: Add a context setting for enabling or disabling parallax FX.
// Default for mobile will be false, for other screens: true.
// Add it to an app context
const HomeScreen: React.FC = () => {
  const { isMobile } = useScreenSizeDetection();
  const screenRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: screenRef,
    offset: ['end end', 'end start'],
  });
  
  return (
    <section ref={screenRef} className={classes.body}>
      <m.h1
        initial={{ opacity: 0, y: '3rem' }}
        animate={{ opacity: 1, y: '-4rem' }}
        transition={{
          duration: 1.25,
          repeat: 1,
          ease: 'easeOut',
          repeatType: 'reverse',
          repeatDelay: 3,
        }}
        className={cn(classes.greeting, fonts.bebas)}
      >
        Hello!
      </m.h1>
      {getImageData(isMobile).map((data) => (
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
      <ScrollIndicator />
    </section>
  );
};

export default HomeScreen;
