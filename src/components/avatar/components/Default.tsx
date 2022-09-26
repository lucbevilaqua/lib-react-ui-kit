import React from 'react'

import { AvatarProps } from '../types'

import * as S from '../styles'
import { getInitials } from '../../../helper/profile'

export const Default: React.FC<AvatarProps> = ({
  children,
  onClick,
  isFullName,
  name,
  src,
  alt,
  type,
  text,
  typeStatus,
  icon,
  badge,
  color,
  progress,
  size,
  isBorded,
  ...args
}) => {
  return (
         <>
          {src ? (<S.AvatarDefaultImg src={src} {...args} />) : (<S.AvatarDefault isBorded={isBorded}>{!isFullName ? getInitials(name as string) : isFullName} </S.AvatarDefault>)}
         </>

  )
}
