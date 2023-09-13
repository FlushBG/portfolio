import React from 'react';
import { m, Variants } from 'framer-motion';
import { Open_Sans } from 'next/font/google';
import { GridPosition } from './Timeline';
import { cn, cnif } from '../../utils/classname-utils';
import classes from './TimelineDate.module.scss';
import { isMobile } from '../../utils/screen-utils';

type TimelineDateProps = {
  position: GridPosition;
};

const openSans = Open_Sans({ subsets: ['latin'] });
const variants: Variants = {
  initial_left: { opacity: 0, x: '6rem' },
  initial_right: { opacity: 0, x: '-6rem' },
  in_view_left: { opacity: [0, 1, 1], x: ['6rem', '-1rem', '0rem'] },
  in_view_right: { opacity: [0, 1, 1], x: ['-6rem', '1rem', '0rem'] },
};

const TimelineDate = ({ position }: TimelineDateProps) => {
  return (
    <m.div
      variants={variants}
      initial={`initial_${position}`}
      whileInView={`in_view_${position}`}
      transition={{ duration: 0.75, type: 'spring', delay: 0.35 }}
      viewport={{ once: true }}
      className={cn(
        classes.date,
        openSans.className,
        cnif(!isMobile(), classes[position])
      )}
    >
      Sep 2020 - Present
    </m.div>
  );
};

export default TimelineDate;
