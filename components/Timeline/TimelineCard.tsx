import React from 'react';
import { m, useAnimationControls, Variants } from 'framer-motion';
import localFont from 'next/font/local';
import { Open_Sans, Raleway } from 'next/font/google';
import { GridPosition } from './Timeline';
import { cn, cnif } from '../../utils/classname-utils';
import classes from './TimelineCard.module.scss';
import { isMobile } from '../../utils/screen-utils';

type TimelineCardProps = {
  position: GridPosition;
};

const raleway = Raleway({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const bebasBook = localFont({
  src: '../../public/fonts/BebasNeue Book.otf',
});

const variants: Variants = {
  initial_left: { opacity: 0, x: '-6rem' },
  initial_right: { opacity: 0, x: '6rem' },
  in_view_left: { opacity: [0, 1, 1], x: ['-6rem', '1rem', '0rem'] },
  in_view_right: { opacity: [0, 1, 1], x: ['6rem', '-1rem', '0rem'] },
};

const mobileVariants: Variants = {
  initial_right: { opacity: 0, y: '6rem' },
  in_view_right: { opacity: [0, 1, 1], y: ['6rem', '-1rem', '0rem'] },
};

const TimelineCard = ({ position }: TimelineCardProps) => {
  const animationControls = useAnimationControls();

  return (
    <m.div
      variants={isMobile() ? mobileVariants : variants}
      initial={`initial_${position}`}
      whileInView={`in_view_${position}`}
      transition={{
        duration: 0.3,
        type: 'spring',
        delay: 0.3,
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      onAnimationComplete={() =>
        animationControls.start({
          x: ['100vw', '-1vw', '0vw'],
        })
      }
      className={cn(classes.card, classes[position])}
    >
      <h3 className={cn(bebasBook.className)}>
        <span className={classes.position}>Senior Full-Stack Developer</span>
        <span className={classes.link}> @ Accedia</span>
        <span className={cn(classes.date, openSans.className)}>
          Sep 2020 - Present
        </span>
      </h3>
      <m.ul
        initial={{ x: '100vw' }}
        animate={animationControls}
        className={raleway.className}
      >
        <m.li initial={{ x: '100vw' }} animate={animationControls}>
          <div className={classes.bullet} />
          <span className={classes.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            veritatis odio eveniet recusandae rerum deserunt iure consequatur
            accusantium minus voluptatem?
          </span>
        </m.li>
        <m.li
          initial={{ x: '100vw' }}
          animate={animationControls}
          transition={{ delay: 0.25 }}
        >
          <div className={classes.bullet} />
          <span className={classes.content}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis aperiam labore laudantium rerum laborum. Ipsa vitae
            architecto necessitatibus error rem.
          </span>
        </m.li>
        <m.li
          initial={{ x: '100vw' }}
          animate={animationControls}
          transition={{ delay: 0.5 }}
        >
          <div className={classes.bullet} />
          <span className={classes.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eaque iste tempore, praesentium quod nemo ex eius
            voluptas fugiat ab.
          </span>
        </m.li>
      </m.ul>
    </m.div>
  );
};

export default TimelineCard;
