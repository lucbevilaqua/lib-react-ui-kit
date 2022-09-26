import React from 'react'

import { AvatarProps } from '../types'

import * as S from '../styles'

export const TopBar: React.FC<AvatarProps> = ({
  src,
  alt,
  bordered,
  type,
  text,
  progress,
  size,
  ...args
}) => {
  return (
      <>
          <svg
            aria-label="progressbar"
            height="70"
            role="progressbar"
            width="70"
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
          <S.Circle/>
          <S.FilledCircle bordered={bordered} />
        </svg>
        {src ? (<S.AvatarCircleImg src={src} {...args} />) : (<S.AvatarCircle {...args} />)}
        </>
  )
}
