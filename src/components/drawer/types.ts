import React from 'react'

export interface DrawerStyleProps {
  size?: 'xlarge' | 'large' | 'medium' | 'small'
}

export interface DrawerProps extends DrawerStyleProps {
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}
