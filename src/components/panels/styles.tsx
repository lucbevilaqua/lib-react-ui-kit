import { toRem } from '../../theme/ui-kit'
import styled from 'styled-components'

import { PanelsStyleProps } from './types'

export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + ${toRem(10)});
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.border.radius.xxs};
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: ${toRem(22)};
    top: ${toRem(-10)};
    position: absolute;
    border: ${toRem(10)} solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`

export const ContentCard = styled.div<PanelsStyleProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: flex-start;
  color: ${props => props.theme.colors.default.white};
`

export const TooltipText = styled.div`
  color: ${props => props.theme.colors.default.white};
  
`

export const TooltipCard = styled.div<PanelsStyleProps>`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: ${props => props.theme.colors.default.white};
    background-color: ${props => props.theme.colors.default.black};
    width:${props => toRem(props.size as string)};
    padding: ${({ theme }) => theme.spacings.xs} ${({ theme }) => theme.spacings.md};
    &:before {
      border-color: ${props => props.theme.colors.default.black};
    }
  }
`
