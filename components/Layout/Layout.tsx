import { m } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils/classname-utils';
import classes from './Layout.module.scss';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={classes.container}>
      <div>{children}</div>
      <nav className={classes.sidebar}>
        <a
          href='https://github.com/FlushBG'
          target='_blank'
          className={classes.iconLink}
        >
          <AiFillGithub />
        </a>
        <a
          href='https://linkedin.com/in/a-angelov'
          target='_blank'
          className={classes.iconLink}
        >
          <AiFillLinkedin />
        </a>
        <a href='#' className={classes.iconLink}>
          <AiOutlineMail />
        </a>
        {/* <div className={classes.separator} /> */}
      </nav>
    </div>
  );
};

export default Layout;
