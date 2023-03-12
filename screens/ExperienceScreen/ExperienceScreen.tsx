import React from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import classes from './ExperienceScreen.module.scss';

const ExperienceScreen = () => {
  return (
    <section className={classes.body}>
      <PageHeading number={1} title='Skills and Experience' />
    </section>
  );
};

export default ExperienceScreen;
