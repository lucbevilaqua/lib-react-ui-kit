import React from 'react'

import { DrawerProps } from './types'

import * as S from './styles'

export const Drawer: React.FC<DrawerProps> = ({
  children,
  size = 'medium',
  header,
  footer,
  ...args
}) => {
  return (
    <S.Drawer
      size={size}
      {...args}
    >
        <S.Header
          size={size}
        >
          {header}
        </S.Header>

        <S.Body
          size={size}
        >
          {children}
        </S.Body>

        <S.Footer
          size={size}
        >
          {footer}
        </S.Footer>
    </S.Drawer>
  )
}
