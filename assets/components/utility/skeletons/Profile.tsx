import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Profile = ({ children }: Props) => {
  return (
    <section className='w-[500px] border-solid-black h-[500px] flex flex-col items-center justify-center'>
      {children}
    </section>
  );
};

export default Profile;
