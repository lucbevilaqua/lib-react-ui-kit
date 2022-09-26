import React from 'react'

import { DividerProps } from './types'

import * as S from './styles'

export const Divider: React.FC<DividerProps> = ({
  ...args
}) => {
  return (
    <S.Divider {...args} />
  )
}
