import React from 'react'

export interface AvatarProps {
    isBorded?: boolean;
    type?: 'default' | 'topbar'
    name?: string;
    isFullName?: boolean;
    bordered?: boolean;
    src?:string
    alt?: string
    text?: 'default' | 'right' | 'center'
    typeStatus?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode
    badge?: boolean;
    color?: string,
    label?: string;
    width?: number;
    size?: number,
    progress?: number,
    trackWidth?: number,
    trackColor?: string,
    indicatorWidth?: number,
    indicatorColor?: string,
    indicatorCap?: string,
    spinnerMode?: boolean;
    spinnerSpeed?: number;
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}
