import React from 'react';
import { Timeline, PageHeading } from '../../components';
import classes from './ExperienceScreen.module.scss';

const ExperienceScreen = () => {
  return (
    <section className={classes.body}>
      <PageHeading number={1} title='Skills and Experience' />
      <Timeline />
    </section>
  );
};

export default ExperienceScreen;
