import { ParallaxImageProps } from '../../components/ParallaxImage/ParallaxImage';

export const imageData: Omit<ParallaxImageProps, 'scrollProgress'>[] = [
   {
      className: 'layer-1',
      src: '/svgg/home/layer-1.svg',
      alt: 'Layer 1',
      start: 0,
      distance: 0,
   },
   {
      className: 'layer-2',
      src: '/svgg/home/layer-2.svg',
      alt: 'Layer 2',
      start: 0,
      distance: 200,
   },
   {
      className: 'layer-3',
      src: '/svgg/home/layer-3.svg',
      alt: 'Layer 3',
      start: 0,
      distance: 500,
   },
   {
      className: 'layer-4',
      src: '/svgg/home/layer-4.svg',
      alt: 'Layer 4',
      start: 0,
      distance: 600,
      priority: true,
   },
   {
      className: 'layer-5',
      src: '/svgg/home/layer-5.svg',
      alt: 'Layer 5',
      start: 0,
      distance: 600,
   },
   {
      className: 'layer-6',
      src: '/svgg/home/layer-6.svg',
      alt: 'Layer 6',
      start: 0,
      distance: 650,
   },
]