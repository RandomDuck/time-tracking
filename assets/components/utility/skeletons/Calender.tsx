import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Calender = ({ children }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center w-[900px] bg-lime-400 m-auto min-h-[500px] mt-[100px]'>
      {children}
    </div>
  );
};

export default Calender;
