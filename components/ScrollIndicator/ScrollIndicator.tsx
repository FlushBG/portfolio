import React from 'react';
import { m } from 'framer-motion';
import classes from './ScrollIndicator.module.scss';
import { Open_Sans } from 'next/font/google';
import { cn } from '../../utils/classname-utils';

const openSans = Open_Sans({ weight: '600', subsets: ['latin'] });

const ScrollIndicator = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wheel}>
        <m.div
          animate={{
            y: ['.25rem', '.75rem', '1rem', '1.25rem'],
            opacity: [0, 1, 1, 1],
          }}
          transition={{ duration: .75, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          className={classes.indicator}
        />
      </div>
      <div className={cn(classes.text, openSans.className)}>Scroll Me</div>
    </div>
  );
};

export default ScrollIndicator;
