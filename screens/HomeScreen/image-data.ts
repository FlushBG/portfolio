import { VerticalParallaxImageProps } from '../../components/VerticalParallax/VerticalParallax';
import { isMobile } from '../../utils/screen-utils';

export const imageData: Omit<VerticalParallaxImageProps, 'scrollProgress'>[] = [
  {
    src: '/svg/home/layer-1.svg',
    alt: 'Layer 1',
    className: 'layer-1',
    outputRange: ['0%', '0%'],
  },
  {
    src: '/svg/home/layer-2.svg',
    alt: 'Layer 2',
    className: 'layer-2',
    outputRange: ['0%', isMobile() ? '0%' : '35%'],
  },
  {
    src: '/svg/home/layer-3.svg',
    alt: 'Layer 3',
    className: 'layer-3',
    outputRange: ['0%', isMobile() ? '0%' : '40%'],
  },
  {
    src: '/svg/home/layer-4.svg',
    alt: 'Layer 4',
    className: 'layer-4',
    outputRange: ['0%', isMobile() ? '0%' : '65%'],
  },
  {
    src: '/svg/home/layer-5.svg',
    alt: 'Layer 5',
    className: 'layer-5',
    outputRange: ['0%', isMobile() ? '0%' : '70%']
  },
  {
    src: '/svg/home/layer-6.svg',
    alt: 'Layer 6',
    className: 'layer-6',
    outputRange: ['0%', isMobile() ? '0%' : '75%'],
    priority: true,
  }
];
