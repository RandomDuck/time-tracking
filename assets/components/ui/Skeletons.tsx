import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const UserPage = ({ children }: Props) => {
  return (
    <section className='max-w-[500px] m-auto bg-red-200'>{children}</section>
  );
};

export const AdminPage = ({ children }: Props) => {
  return (
    <section className='max-w-[500px] m-auto bg-green-200'>{children}</section>
  );
};

export default { UserPage, AdminPage } as const;
