import React from 'react';
import { fonts } from '@/pages/_app';
import { cn } from '@/utils/classname-utils';
import classes from './PageHeading.module.scss';

type PageHeadingProps = {
  number: number;
  title: string;
};

const PageHeading = ({ number, title }: PageHeadingProps) => {
  return (
    <h2 className={cn(classes.heading, fonts.bebas)}>
      <span className={classes.number}>0{number}.</span>
      <span className={classes.backgroundText}>0{number}. {title}</span>
      <span className={classes.title}>{title}</span>
    </h2>
  );
};

export default PageHeading;
