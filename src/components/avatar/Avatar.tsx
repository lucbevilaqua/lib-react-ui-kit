import React from 'react'

import { AvatarProps } from './types'

import * as S from './styles'
import { TopBar } from './components/TopBar'
import { Default } from './components/Default'

export const Avatar: React.FC<AvatarProps> = ({
  src,
  bordered,
  alt,
  size,
  isBorded,
  name,
  type,
  ...args
}) => {
  return (
        <S.Avatar {...args}>
          {type === 'topbar' ? (<TopBar src={src} bordered={bordered} alt={alt} />) : (<Default size={size} isBorded={isBorded} src={src} name={name} />)}
        </S.Avatar>
  )
}
