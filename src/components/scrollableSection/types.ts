import React from 'react'

export interface ScrollableSectionStyleProps {
  maxHeight?: string
}

export interface ScrollableSectionProps extends ScrollableSectionStyleProps {
  children: React.ReactNode
}
