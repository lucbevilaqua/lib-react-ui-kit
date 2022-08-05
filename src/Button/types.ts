import React from 'react'

export interface ButtonStyleProps {
    shape?: 'primary' | 'secondary' | 'subtle' | 'text'
    size?: 'huge' | 'large' | 'medium' | 'small'
    disabled?: boolean
}

export interface ButtonProps extends ButtonStyleProps {
    onClick?: () => void
    children?: React.ReactNode;
}