import React from 'react'

import { PanelsProps } from './types'

import * as S from './styles'

export const Panels: React.FC<PanelsProps> = ({
  children,
  onClick,
  size,
  direction,
  content,
  ...args
}) => {
  return (
    <S.TooltipCard size={size} {...args}>
     <S.TooltipText>
      {children}
     </S.TooltipText>
     <S.TooltipBox>
        <S.ContentCard direction={direction}>
          {content}
        </S.ContentCard>
      </S.TooltipBox>
    </S.TooltipCard>
  )
}
