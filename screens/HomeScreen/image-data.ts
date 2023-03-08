import { VerticalParallaxImageProps } from '../../components/VerticalParallax/VerticalParallax';

export const imageData: Omit<VerticalParallaxImageProps, 'scrollProgress'>[] = [
  {
    src: '/svg/home/layer-1.svg',
    alt: 'Layer 1',
    className: 'layer-1',
    outputRange: [0, 0],
  },
  {
    src: '/svg/home/layer-2.svg',
    alt: 'Layer 2',
    className: 'layer-2',
    outputRange: [0, 200],
  },
  {
    src: '/svg/home/layer-3.svg',
    alt: 'Layer 3',
    className: 'layer-3',
    outputRange: [0, 400],
    priority: true,
  },
  {
    src: '/svg/home/layer-4.svg',
    alt: 'Layer 4',
    className: 'layer-4',
    outputRange: [0, 500],
  },
];
