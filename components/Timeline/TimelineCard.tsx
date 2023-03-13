import React from 'react';
import { m, Variants } from 'framer-motion';
import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';
import { GridPosition } from './Timeline';
import { cn, cnif } from '../../utils/classname-utils';
import classes from './TimelineCard.module.scss';
import { isMobile } from '../../utils/screen-utils';

type TimelineCardProps = {
  position: GridPosition;
};

const raleway = Raleway({ subsets: ['latin'] });
const bebasBook = localFont({
  src: '../../public/fonts/BebasNeue Book.otf',
});

const variants: Variants = {
  initial_left: { opacity: 0, x: '-6rem' },
  initial_right: { opacity: 0, x: '6rem' },
  in_view_left: { opacity: [0, 1, 1], x: ['-6rem', '1rem', '0rem'] },
  in_view_right: { opacity: [0, 1, 1], x: ['6rem', '-1rem', '0rem'] },
};

const TimelineCard = ({ position }: TimelineCardProps) => {
  return (
    <m.div
      variants={variants}
      initial={`initial_${position}`}
      whileInView={`in_view_${position}`}
      transition={{ duration: 0.75, type: 'spring', delay: 0.35 }}
      viewport={{ once: true }}
      className={cn(classes.card, classes[position])}
    >
      <h3 className={cn(bebasBook.className)}>
        Senior Full-Stack Developer <span> @ Accedia</span>
      </h3>

      <ul className={raleway.className}>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis
          odio eveniet recusandae rerum deserunt iure consequatur accusantium
          minus voluptatem?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          aperiam labore laudantium rerum laborum. Ipsa vitae architecto
          necessitatibus error rem.
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          eaque iste tempore, praesentium quod nemo ex eius voluptas fugiat ab.
        </li>
      </ul>
    </m.div>
  );
};

export default TimelineCard;
