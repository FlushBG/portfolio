import React from 'react';
import { useScroll } from 'framer-motion';
import { imageData } from './image-data';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import styles from './HomeScreen.module.scss';

const HomeScreen: React.FC = () => {
  const screenRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: screenRef,
    offset: ['end end', 'end start'],
  });

  return (
      <div ref={screenRef} className={styles.body}>
        {imageData.map((data) => (
          <ParallaxImage
            key={data.alt}
            className={styles[data.className]}
            src={data.src}
            alt={data.alt}
            scrollProgress={scrollYProgress}
            start={data.start}
            distance={data.distance}
            x={data.x}
            rotate={data.rotate}
            flip={data.flip}
          />
        ))}
      </div>
  );
};

export default HomeScreen;
