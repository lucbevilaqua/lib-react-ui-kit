import React from 'react'

import { BadgeProps } from './types'

import * as S from './styles'

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'solid',
  size = 'large',
  shape = 'default',
  ...args
}) => {
  return (
    <S.Badge
      variant={variant}
      size={size}
      shape={shape}
      {...args}
    >
      {children}
    </S.Badge>
  )
}
