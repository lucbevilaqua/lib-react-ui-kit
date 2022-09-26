import styled, { css } from 'styled-components'

import { ButtonStyleProps } from './types'

export const Button = styled.button<ButtonStyleProps>`
  font-style: normal;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};

  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: none;
  color: ${({ theme }) => theme.colors.primary.default};
  border: ${({ theme }) => theme.border.width.thick} solid ${({ theme }) => theme.colors.primary.default};

  :hover {
    color: ${({ theme }) => theme.colors.primary.light};
    border-color: ${({ theme }) => theme.colors.primary.light};
  }

  ${(props) => {
    switch (props.size) {
      case 'xlarge':
        return css`
          border-radius: ${({ theme }) => theme.border.radius.xs};
          padding: ${({ theme }) => theme.spacings.md} ${({ theme }) => theme.spacings.lg};

          font-size: ${({ theme }) => theme.fonts.text.medium.fontSize};
          line-height: ${({ theme }) => theme.fonts.text.medium.lineHeight};
        `
      case 'large':
        return css`
          border-radius: ${({ theme }) => theme.border.radius.xxs};
          padding: ${({ theme }) => theme.spacings.xs} ${({ theme }) => theme.spacings.lg};

          font-size: ${({ theme }) => theme.fonts.text.small.fontSize};
          line-height: ${({ theme }) => theme.fonts.text.small.lineHeight};
        `
      case 'medium':
        return css`
          border-radius: ${({ theme }) => theme.border.radius.xxs};
          padding: ${({ theme }) => theme.spacings.xs} ${({ theme }) => theme.spacings.md};

          font-size: ${({ theme }) => theme.fonts.text.small.fontSize};
          line-height: ${({ theme }) => theme.fonts.text.small.lineHeight};
        `
      case 'small':
        return css`
          border-radius: ${({ theme }) => theme.border.radius.xxs};
          padding: ${({ theme }) => theme.spacings.xxxs} ${({ theme }) => theme.spacings.xs};

          font-size: ${({ theme }) => theme.fonts.text.small.fontSize};
          line-height: ${({ theme }) => theme.fonts.text.small.lineHeight};
        `
    }
  }}

  /* shape */
  ${(props) => {
    switch (props.shape) {
      case 'primary':
        return css`
          border-color: ${({ theme }) => theme.colors.primary.default};
          background: ${({ theme }) => theme.colors.primary.default};
          color: ${({ theme }) => theme.colors.primary.dark};
          
          :hover {
            border-color: ${({ theme }) => theme.colors.primary.light};
            background: ${({ theme }) => theme.colors.primary.light};
            color: ${({ theme }) => theme.colors.primary.dark};
          }
        `
      case 'subtle':
        return css`
          border-color: ${({ theme }) => theme.colors.border.subtle};
        `

      case 'text':
        return css`
          border-color: transparent;
        `
    }
  }}

  /* disabled */
  ${(props) =>
    props.disabled &&
    css`
      cursor: none;
      pointer-events: none;
      opacity: 0.5;
    `}
`
