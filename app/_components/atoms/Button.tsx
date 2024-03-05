import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: IButton) => {
  return <button onClick={ onClick }>{ children }</button>;
};

export default Button;