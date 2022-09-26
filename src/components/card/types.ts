import React from 'react'

export interface CardStyleProps {
  size?: 'xlarge' | 'large' | 'medium' | 'small'
}

export interface CardProps extends CardStyleProps {
  image?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
}
