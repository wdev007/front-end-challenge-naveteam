import React from 'react';

import { Button } from './styles';

export interface IButton {
  width?: number;
}

interface IProps extends IButton {
  type: 'button' | 'reset' | 'submit';
  onClick: (event: any) => void;
}

const ButtomComponent: React.FC<IProps> = ({
  children,
  type = 'button',
  onClick,
  ...rest
}) => {
  return (
    <Button type={type} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default ButtomComponent;
