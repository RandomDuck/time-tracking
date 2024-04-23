import React, { ReactNode } from 'react';

interface Props {
  type: string;
  children: ReactNode;
}

const Button = ({ type, children }: Props) => {
  return <button className={type}>{children}</button>;
};

export default Button;
