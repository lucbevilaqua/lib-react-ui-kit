import React from 'react'

export interface PanelsStyleProps {
    size?: string
    direction?: string
  }
export interface PanelsProps extends PanelsStyleProps {
    onClick?: () => void
    children?: React.ReactNode
    content?: React.ReactNode | null
  }
