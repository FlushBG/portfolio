import React from 'react';
import { m, MotionValue } from 'framer-motion';
import useParallax from '../../hooks/useParallax';
import Image from 'next/image';

export type VerticalParallaxProps = {
  className: string;
  scrollProgress: MotionValue<number>;
  outputRange: string[];
  children: React.ReactNode;
};

export type VerticalParallaxImageProps = Omit<
  VerticalParallaxProps,
  'children'
> & {
  src: string;
  alt: string;
  priority?: boolean;
};

export const VerticalParallax = ({
  className,
  outputRange,
  scrollProgress,
  children,
}: VerticalParallaxProps) => {
  const y = useParallax(scrollProgress, outputRange);

  return (
    <m.div style={{ y }} className={className}>
      {children}
    </m.div>
  );
};

export const VerticalParallaxImage = ({
  src,
  alt,
  priority = false,
  className,
  outputRange,
  scrollProgress,
}: VerticalParallaxImageProps) => {
  const y = useParallax(scrollProgress, outputRange);

  return (
    <m.div style={{ y }} className={className}>
      <Image priority={priority} src={src} alt={alt} fill sizes='100vw' />
    </m.div>
  );
};
