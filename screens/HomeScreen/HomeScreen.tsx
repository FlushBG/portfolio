import React from 'react';
import { m, useScroll } from 'framer-motion';
import { imageData } from './image-data';
import useParallax from '../../hooks/useParallax';
import { VerticalParallaxImage } from '../../components/VerticalParallax';
import classes from './HomeScreen.module.scss';

const HomeScreen: React.FC = () => {
  const screenRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: screenRef,
    offset: ['end end', 'end start'],
  });
  const y = useParallax(scrollYProgress, ['0%', '50%']);

  return (
    <div ref={screenRef} className={classes.body}>
      {/* <m.div style={{ y }} className={styles.text}>
        <fieldset className={styles.intro}>
          <legend>Hi, I&apos;m</legend>
        </fieldset>
        <div className={styles.title}>Angel Angelov</div>
        <div className={styles.subtitle}>Full-Stack Dev</div>
      </m.div> */}
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
    </div>
  );
};

export default HomeScreen;
