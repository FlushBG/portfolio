import { m } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils/classname-utils';
import classes from './Layout.module.scss';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';

const Layout = ({}) => {
  return <div>TODO</div>
}

const NestedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={classes.container}>
      <main>{children}</main>
      <nav className={classes.sidebar}>
        <a
          href='https://github.com/FlushBG'
          target='_blank'
          className={classes.iconLink}
        >
          <FiGithub />
        </a>
        <a
          href='https://linkedin.com/in/a-angelov'
          target='_blank'
          className={classes.iconLink}
        >
          <FiLinkedin />
        </a>
        <a href='#' className={classes.iconLink}>
          <FiMail />
        </a>
        <div className={classes.line} />
      </nav>
    </div>
  );
};

export { Layout, NestedLayout };
