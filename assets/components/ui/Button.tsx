import React, { ReactNode } from 'react';

interface Button {
  type: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ type, children, onClick }: Button) => {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
