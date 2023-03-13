import React from 'react';
import { m, Variants } from 'framer-motion';
import classes from './Timeline.module.scss';
import { cn } from '../../utils/classname-utils';
import localFont from 'next/font/local';
import { Open_Sans, Raleway } from 'next/font/google';

const bebasBook = localFont({
  src: '../../public/fonts/BebasNeue Book.otf',
});
const raleway = Raleway({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

const cardVariants: Variants = {
  initLeft: { opacity: 0, x: '-6rem' },
  initRight: { opacity: 0, x: '6rem' },
  inViewLeft: { opacity: [0, 1, 1], x: ['-6rem', '1rem', '0rem'] },
  inViewRight: { opacity: [0, 1, 1], x: ['6rem', '-1rem', '0rem'] },
};

export enum CardPosition {
  Left = 'left',
  Right = 'right',
}
const TEST_DATA = [
  { position: CardPosition.Left },
  { position: CardPosition.Right },
];

type TimelineProps = {
  items?: any[];
};

const Timeline = ({ items = [] }: TimelineProps) => {
  return (
    <div className={classes.container}>
      {TEST_DATA.map((item) => (
        <div
          key={item.position}
          className={cn(classes.item, classes[item.position])}
        >
          <m.div
            initial={{ x: '-50%', scale: 0.25 }}
            whileInView={{ x: '-50%', scale: [0.25, 1.4, 1] }}
            transition={{ duration: 0.75, type: 'spring' }}
            viewport={{ once: true }}
            className={classes.icon}
          ></m.div>
          <m.div
            variants={cardVariants}
            initial={
              item.position === CardPosition.Left ? 'initLeft' : 'initRight'
            }
            whileInView={
              item.position === CardPosition.Left ? 'inViewLeft' : 'inViewRight'
            }
            transition={{ duration: 0.75, type: 'spring', delay: 0.35 }}
            viewport={{ once: true }}
            className={classes.card}
          >
            <h3 className={cn(bebasBook.className)}>
              Senior Full-Stack Developer <span> @ Accedia</span>
            </h3>
            <div className={cn(classes.date, openSans.className)}>
              Sep 2020 - Present
            </div>
            <ul className={raleway.className}>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                veritatis odio eveniet recusandae rerum deserunt iure
                consequatur accusantium minus voluptatem?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis aperiam labore laudantium rerum laborum. Ipsa vitae
                architecto necessitatibus error rem.
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eaque iste tempore, praesentium quod nemo ex eius
                voluptas fugiat ab.
              </li>
            </ul>
          </m.div>
          {/* <m.div className={cn(classes.date, openSans.className)}>
            Sep 2020 - Present
          </m.div> */}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
