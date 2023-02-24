import { ParallaxImageProps } from '../../components/ParallaxImage/ParallaxImage';

export const imageData: Omit<ParallaxImageProps, 'scrollProgress'>[] = [
   {
      className: 'layer-1',
      src: '/svg/home/layer-1.svg',
      alt: 'Layer 1',
      start: 0,
      distance: 0,
   },
   {
      className: 'layer-2',
      src: '/svg/home/layer-2.svg',
      alt: 'Layer 2',
      start: 0,
      distance: 100,
   },
   {
      className: 'layer-3',
      src: '/svg/home/layer-3.svg',
      alt: 'Layer 3',
      start: 0,
      distance: 400,
   },
   {
      className: 'layer-4',
      src: '/svg/home/layer-4.svg',
      alt: 'Layer 4',
      start: 0,
      distance: 500,
   },
]