import React, { ReactNode } from 'react';

interface Props {
  type: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ type, children, onClick }: Props) => {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
