import styled, { css } from 'styled-components'

import { BadgeStyleProps } from './types'

export const Badge = styled.button<BadgeStyleProps>`
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  border-radius: ${({ theme }) => theme.border.radius.xxs};
  padding: ${({ theme }) => theme.spacings.tiny} ${({ theme }) => theme.spacings.xxxs};
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: 0.9;
  }

  /* size */
  ${(props) => {
    switch (props.size) {
      case 'large':
        return css`
          height: 32px;
          min-width: 47px;

          font-size: ${({ theme }) => theme.fonts.text.small.fontSize};
          line-height: ${({ theme }) => theme.fonts.text.xsmall.lineHeight};
        `
      case 'small':
        return css`
          height: 28px;
          min-width: 48px;

          font-size: ${({ theme }) => theme.fonts.text.small.fontSize};
          line-height: ${({ theme }) => theme.fonts.text.xsmall.lineHeight};
          
        `
    }
  }}

  /* type */
${(props) => {
  switch (props.shape) {
    case 'secondary':
      return css`
        background: ${({ theme }) => theme.colors.secondary.light};
        border: ${({ theme }) => theme.border.width.thick} solid ${({ theme }) => theme.colors.secondary.light};
        color: ${props.variant === 'outline' ? ({ theme }) => theme.colors.secondary.light : ({ theme }) => theme.colors.secondary.dark};
      `
    case 'general':
      return css`
        background: ${({ theme }) => theme.colors.general.light};
        border: ${({ theme }) => theme.border.width.thick} solid ${({ theme }) => theme.colors.general.light};
        color: ${props.variant === 'outline' ? ({ theme }) => theme.colors.general.light : ({ theme }) => theme.colors.general.dark};
      `
    case 'success':
      return css`
        background: ${({ theme }) => theme.colors.success.light};
        border: ${({ theme }) => theme.border.width.thick} solid ${({ theme }) => theme.colors.success.light};
        color: ${props.variant === 'outline' ? ({ theme }) => theme.colors.success.light : ({ theme }) => theme.colors.success.dark};
      `
    case 'warning':
      return css`
        background: ${({ theme }) => theme.colors.warning.light};
        border: ${({ theme }) => theme.border.width.thick} solid ${({ theme }) => theme.colors.warning.light};
        color: ${props.variant === 'outline' ? ({ theme }) => theme.colors.warning.light : ({ theme }) => theme.colors.warning.dark};
      `
    case 'error':
      return css`
        background: ${({ theme }) => theme.colors.error.light};
        border: ${({ theme }) => theme.border.width.thick} solid ${({ theme }) => theme.colors.error.light};
        color: ${props.variant === 'outline' ? ({ theme }) => theme.colors.error.light : ({ theme }) => theme.colors.error.dark};
      `
    default:
      return css`
        background: ${({ theme }) => theme.colors.primary.light};
        border: ${({ theme }) => theme.border.width.thick} solid ${({ theme }) => theme.colors.primary.light};
        color: ${props.variant === 'outline' ? ({ theme }) => theme.colors.primary.light : ({ theme }) => theme.colors.primary.dark};
      `
  }
}}

  /* variant */
  ${(props) => {
    switch (props.variant) {
      case 'solid':
        return css`
          border: none;
        `
      case 'outline':
        return css`
          background: transparent;
        `
    }
  }}

  /* disabled */
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}


`
