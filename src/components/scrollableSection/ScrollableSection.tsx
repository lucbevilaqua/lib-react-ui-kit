import React from 'react'

import { ScrollableSectionProps } from './types'

import * as S from './styles'

export const ScrollableSection: React.FC<ScrollableSectionProps> = ({
  children,
  maxHeight,
  ...args
}) => {
  return (
    <S.ScrollableContent maxHeight={maxHeight} {...args}>
      {children}
    </S.ScrollableContent>
  )
}
