import React from 'react'
import { ButtonProps } from './types';

import * as S from './styles';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  ...args
}) => {
  return (
    <S.Button
      onClick={() => {
        onClick && disabled && onClick()
      }}
      disabled={disabled}
      {...args}
    >
      {children}
    </S.Button>
  )
}