import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import React, { useCallback, useMemo } from 'react';
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
};

const ParallaxImage = ({
  className,
  src,
  alt,
  scrollProgress,
  start,
  distance
}: ParallaxImageProps) => {
  const y = useParallax(scrollProgress, start, distance);
  
  return (
    <motion.div
      style={{ y }}
      className={`${classes.base} ${className}`}
    >
      <Image src={src} alt={alt} fill sizes='100vw' />
    </motion.div>
  );
};

export default ParallaxImage;
