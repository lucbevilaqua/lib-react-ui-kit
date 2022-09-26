import React from 'react'

import { ButtonProps } from './types'

import * as S from './styles'

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  shape = 'primary',
  size = 'medium',
  ...args
}) => {
  return (
    <S.Button
      disabled={disabled}
      onClick={() => {
        onClick && !disabled && onClick()
      }}
      shape={shape}
      size={size}
      {...args}
    >
      {children}
    </S.Button>
  )
}
