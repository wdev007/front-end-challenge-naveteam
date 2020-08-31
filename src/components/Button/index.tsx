import React from 'react';

import { Button } from './styles';

export interface IButton {
  width?: number;
  disabled?: boolean;
}

interface IProps extends IButton {
  type: 'button' | 'reset' | 'submit';
  onClick: (event: any) => void;
}

const ButtomComponent: React.FC<IProps> = ({
  children,
  type = 'button',
  onClick,
  disabled = false,
  ...rest
}) => {
  return (
    <Button type={type} onClick={onClick} {...rest} disabled={disabled}>
      {children}
    </Button>
  );
};

export default ButtomComponent;
