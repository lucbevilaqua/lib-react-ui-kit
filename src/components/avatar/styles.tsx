import styled from 'styled-components'
import { toRem } from '../../theme/ui-kit'
import { AvatarProps } from './types'

export const Avatar = styled.div<AvatarProps>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
`

const wrapperCircle = styled.circle` 
  cx: 50px;
  cy: 50px;
  r: 36px;
  fill: transparent;
  stroke-width: ${props => props.theme.spacings.tiny};
`

export const FilledCircle = styled(wrapperCircle)<AvatarProps>`
  stroke: ${props => props.bordered ? props.theme.colors.primary.default : ''};
  stroke-dasharray: ${toRem(251.2)};
  stroke-dashoffset: ${toRem(188.4)};
  `

export const Circle = styled(wrapperCircle)`
  stroke: ${props => props.theme.colors.border.avatar};
`

export const AvatarCircle = styled.span<AvatarProps>`
  position: absolute;
  width: ${toRem(40)};
  height: ${toRem(40)};
  border-radius: 85%;
  background-image: ${props => props.theme.colors.gradient.primary};
  transform: translate(38%, 0%);
`

export const AvatarCircleImg = styled.img<AvatarProps>`
  position: absolute;
  width: ${toRem(40)};
  height: ${toRem(40)};
  border-radius: 85%;
  transform: translate(36%, 0%);
  `

export const AvatarDefault = styled.span <AvatarProps>`
  width: ${toRem(56)};
  height: ${toRem(56)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color:${props => props.theme.colors.default.white};
  border: ${toRem(2)} solid ${props => props.isBorded ? props.theme.colors.default.black : 'none'};
  background-color: ${props => props.theme.colors.primary.default};
`

export const AvatarDefaultImg = styled.img<AvatarProps>`
  width: ${toRem(56)};
  height: ${toRem(56)};
  border-radius: 50%;
  border: ${toRem(2)} solid ${props => !props.isBorded ? props.theme.colors.default.black : 'none'};
`
