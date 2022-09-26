import React from 'react'

import { TypographyDisplayProps, TypographyProps } from './types'

import * as S from './styles'

export const TextDisplay: React.FC<TypographyDisplayProps> = ({
  children,
  size = 'medium',
  weight = 'medium',
  color = 'light',
  truncate = false,
  width = '',
  maxHeight = ''
}) => <S.TextDisplay size={size} weight={weight} color={color} truncate={truncate} width={width} maxHeight={maxHeight}>{children}</S.TextDisplay>

export const TextHeader: React.FC<TypographyProps> = ({
  children,
  size = 'medium',
  color = 'light',
  truncate = false,
  width = '',
  maxHeight = ''
}) => <S.TextHeader size={size} color={color} truncate={truncate} width={width} maxHeight={maxHeight}>{children}</S.TextHeader>

export const TextBody: React.FC<TypographyProps> = ({
  children,
  size = 'medium',
  color = 'light',
  truncate = false,
  width = '',
  maxHeight = ''
}) => <S.TextBody size={size} color={color} truncate={truncate} width={width} maxHeight={maxHeight}>{children}</S.TextBody>
