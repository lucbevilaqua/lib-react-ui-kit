import React from 'react'

export interface BadgeStyleProps {
  variant?: 'solid' | 'outline'
  size?: 'large' | 'small'
  shape?: 'default' | 'secondary' | 'general' | 'success' | 'warning' | 'error'
}

export interface BadgeProps extends BadgeStyleProps {
  children: React.ReactNode
}
