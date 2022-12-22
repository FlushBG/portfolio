import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col flex-grow md:flex-row text-center md:text-left justify-evenly items-center'>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        src='https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80'
        className='flex-shrink-0 w-52 h-52 rounded-full object-cover'
      />
      <p className='text-sm p-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
        tellus ipsum. Sed id odio rutrum lorem faucibus auctor. Ut at urna
        gravida, imperdiet elit eget, vestibulum urna. Quisque leo eros,
        vehicula sed ultrices at, facilisis non lectus. Donec id feugiat sem.
        Quisque aliquam, risus vitae ultricies mollis, tellus magna congue urna,
        in rhoncus sapien tortor eget nulla.
      </p>
    </div>
  );
};

export default About;
