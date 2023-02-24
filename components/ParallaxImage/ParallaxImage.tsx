import React from 'react';
import { m, MotionValue } from 'framer-motion';
import useParallax from '../../hooks/useParallax';
import Image from 'next/image';
import classes from './ParallaxImage.module.scss';

export type ParallaxImageProps = {
  className: string;
  src: string;
  alt: string;
  scrollProgress: MotionValue<number>;
  start: number;
  distance: number;
  priority?: boolean;
};

const ParallaxImage = ({
  className,
  src,
  alt,
  scrollProgress,
  start,
  distance,
  priority = false
}: ParallaxImageProps) => {
  const y = useParallax(scrollProgress, start, distance);
 
  return (
    <m.div style={{ y }} className={`${classes.base} ${className}`}>
      <Image priority={priority} src={src} alt={alt} fill loading='lazy' sizes='100vw' />
    </m.div>
  );
};

export default ParallaxImage;
