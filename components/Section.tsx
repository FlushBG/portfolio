import React from 'react';

type Props = {
  id: string;
  snap: 'snap-start' | 'snap-center';
  header: string;
  children: React.ReactNode;
};

const Section = ({ id, snap, header, children }: Props) => {
  return (
    <section id={id} className={snap}>
      <div className='flex flex-col text-center md:text-left h-screen max-w-7xl mx-auto p-5'>
        <h2 className='uppercase mt-20 text-l tracking-[18px] mr-[-18px] text-gray-500'>
          {header}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
