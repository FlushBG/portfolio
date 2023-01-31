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
  x?: number | string;
  rotate?: number;
  flip?: boolean;
};

const ParallaxImage = ({
  className,
  src,
  alt,
  scrollProgress,
  start,
  distance,
  x,
  rotate,
  flip,
}: ParallaxImageProps) => {
  const y = useParallax(scrollProgress, start, distance);
  const scaleX: number | undefined = useMemo(
    () => (flip ? -1 : undefined),
    [flip]
  );

  return (
    <motion.div
      style={{ y, x, scaleX, rotate }}
      className={`${classes.base} ${className}`}
    >
      <Image src={src} alt={alt} fill sizes='100vw' />
    </motion.div>
  );
};

export default ParallaxImage;
