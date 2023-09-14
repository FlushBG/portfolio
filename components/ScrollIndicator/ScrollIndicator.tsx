import React from 'react';
import { m } from 'framer-motion';
import { fonts } from '@/pages/_app';
import { cn } from '@/utils/classname-utils';
import classes from './ScrollIndicator.module.scss';

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
      <div className={cn(classes.text, fonts.openSans)}>Scroll Me</div>
    </div>
  );
};

export default ScrollIndicator;
