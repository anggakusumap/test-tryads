import React, { ReactNode } from 'react';

interface ITextButton {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const TextButton = ({ children, onClick, className }: ITextButton) => {
  return <button className={ className } onClick={ onClick }>{ children }</button>;
};

export default TextButton;