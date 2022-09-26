import React from 'react'

import { CardProps } from './types'

import * as S from './styles'

export const Card: React.FC<CardProps> = ({
  children,
  header,
  image,
  footer,
  size = 'medium',
  ...args
}) => {
  return (
    <S.Card
      size={size}
      {...args}
    >
      <S.Image>
        {image}
      </S.Image>

      <S.CardContainer>
        <S.Header>
          {header}
        </S.Header>

        <S.Body>
          {children}
        </S.Body>

        <S.Footer>
          {footer}
        </S.Footer>
      </S.CardContainer>
    </S.Card>
  )
}
