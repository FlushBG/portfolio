import { useMotionValue } from 'framer-motion';
import { ParallaxImageProps } from '../../components/ParallaxImage/ParallaxImage';

export const imageData: Omit<ParallaxImageProps, 'scrollProgress'>[] = [
   {
      className: 'fullMoon',
      src: '/images/home/full-moon.png',
      alt: 'Full moon',
      start: 0,
      distance: 1200,
      x: -50,
   },
   {
      className: 'backMountain',
      src: '/images/home/mountain.png',
      alt: 'Back mountain',
      start: 0,
      distance: 900,
   },
   {
      className: 'frontMountain',
      src: '/images/home/mountain.png',
      alt: 'Front mountain',
      start: 0,
      distance: 850,
      flip: true
   },
   {
      className: 'forest',
      src: '/images/home/pine-forest.png',
      alt: 'Forest',
      start: 0,
      distance: 550
   },
   {
      className: 'backGrass',
      src: '/images/home/grass.png',
      alt: 'Back grass',
      start: 0,
      distance: 150,
      flip: true,
      rotate: 5
   },
   {
      className: 'frontGrass',
      src: '/images/home/grass.png',
      alt: 'Front grass',
      start: 0,
      distance: 0
   },
]