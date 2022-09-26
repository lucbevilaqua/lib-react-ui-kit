import React from 'react'

export type FontFamily = 'primary' | 'secondary'
export type FontType = 'header' | 'text' | 'link' | 'display'
export type FontSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'
export type FontWeight = 'light' | 'regular' | 'medium' | 'semibold'
export type FontColor = 'dark' | 'light'

export interface TypographyStyleProps {
  size: FontSize
  color: FontColor
  truncate: boolean
  width: string
  maxHeight: string
}

export interface TypographyProps {
  size?: TypographyStyleProps['size']
  color?: TypographyStyleProps['color']
  truncate?: boolean
  width?: string
  maxHeight?: string
  children: React.ReactNode
}

// display

export type FontWeightDisplay = 'medium' | 'semibold'

export interface TypographyStyleDisplayProps extends TypographyStyleProps {
  weight: FontWeightDisplay
}

export interface TypographyDisplayProps extends TypographyProps {
  weight?: TypographyStyleDisplayProps['weight']
}
