import React from 'react';
import { m } from 'framer-motion';
import { cn } from '@/utils/classname-utils';
import classes from './AboutScreen.module.scss';
import useScreenSizeDetection from '@/hooks/useScreenSizeDetection';
import { fonts } from '@/pages/_app';

const AboutScreen = () => {
  const { isMobile } = useScreenSizeDetection();
  const goToContactForm = (): void => {
    const contactForm = document.getElementById('contact');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={classes.body}>
      <m.h1
        initial={{ x: isMobile ? '93vw' : '86vw' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.75, type: 'spring' }}
        viewport={{ once: true }}
        className={cn(classes.heading, fonts.bebas)}
      >
        <span>My name is</span> Angel Angelov.
      </m.h1>
      <m.h2
        initial={{ x: isMobile ? '-75vw' : '-85vw' }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 0.75,
          delay: isMobile ? 0 : 0.25,
          type: 'spring',
        }}
        viewport={{ once: true }}
        className={cn(classes.subheading, fonts.bebasBook)}
      >
        <span>I turn ideas into</span> digital solutions.
      </m.h2>
      <m.p
        initial={{ x: isMobile ? '93vw' : '86vw' }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 0.75,
          delay: isMobile ? 0 : 0.25,
          type: 'spring',
        }}
        viewport={{ once: true }}
        className={cn(classes.paragraph, fonts.raleway)}
      >
        I&apos;m a frontend developer with a knack for making things happen.
        Whether you need a killer website, a mobile app that&apos;ll make your
        competitors weep, or some other kind of digital magic, I&apos;m your
        guy.
        <br />
        <br />
        My weapons of choice are <b>Next.js, React.js and Typescript</b>, but I
        can also handle backend (Node.js) along with infrastructure tools
        (Docker, Kubernetes, AWS) easily. Don&apos;t worry if you don&apos;t
        know what all that means - just trust me, I&apos;m good at what I do.
      </m.p>
      <m.div
        initial={{ x: isMobile ? '-93vw' : '-85vw' }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 0.75,
          delay: isMobile ? 0 : 0.5,
          type: 'spring',
        }}
        viewport={{ once: true }}
        className={classes.actionWrapper}
      >
        <button
          className={cn(classes.action, fonts.bebasBook)}
          onClick={goToContactForm}
        >
          Let&apos;s get in touch!
        </button>
      </m.div>
      <div className={cn(classes.backgroundText, fonts.bebas)}>Portfolio</div>
    </section>
  );
};

export default AboutScreen;
