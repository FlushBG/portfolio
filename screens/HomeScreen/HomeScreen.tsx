import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { imageData } from './image-data';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import styles from './HomeScreen.module.scss';
import useParallax from '../../hooks/useParallax';

const HomeScreen: React.FC = () => {
  const screenRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: screenRef,
    offset: ['end end', 'end start'],
  });
  const y = useParallax(scrollYProgress, 0, 350);

  return (
    <div ref={screenRef} className={styles.body}>
      <div className={styles.bottomBar} />
      <motion.div style={{ y }} className={styles.text}>
        <fieldset className={styles.intro}>
          <legend>Hi, I&apos;m</legend>
        </fieldset>
        {/* <div className={styles.intro}>Hi, I&apos;m</div> */}
        <div className={styles.title}>Angel Angelov</div>
        <div className={styles.subtitle}>Full-Stack Dev</div>
      </motion.div>
      {imageData.map((data) => (
        <ParallaxImage
          key={data.alt}
          className={styles[data.className]}
          src={data.src}
          alt={data.alt}
          scrollProgress={scrollYProgress}
          start={data.start}
          distance={data.distance}
        />
      ))}
    </div>
  );
};

export default HomeScreen;
