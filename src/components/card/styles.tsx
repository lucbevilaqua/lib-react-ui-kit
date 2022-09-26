import styled, { css } from 'styled-components'

import { CardStyleProps } from './types'

const Spacing = styled.div<CardStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacings.md};

  flex: none;
  flex-wrap: nowrap;
  order: 1;
  flex-grow: 0;
`

export const Card = styled(Spacing)`
  background: ${({ theme }) => theme.colors.default.black};

  /* size */
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
`

export const CardContainer = styled.div<CardStyleProps>`
  height: 100%;
`

export const Header = styled(Spacing)``

export const Body = styled(Spacing)`
  flex-flow: wrap;
`

export const Footer = styled(Spacing)``

export const Image = styled.div<CardStyleProps>`
  max-height: 100%;
`
