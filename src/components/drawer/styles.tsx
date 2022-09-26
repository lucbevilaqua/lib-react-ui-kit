import styled, { css } from 'styled-components'

import { DrawerStyleProps } from './types'

const Spacing = styled.div<DrawerStyleProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacings.md};

  flex: none;
  order: 1;
  flex-grow: 0;

  ${props => {
      switch (props.size) {
        case 'xlarge':
          return css`
            padding: ${({ theme }) => theme.spacings.md} ${({ theme }) => theme.spacings.lg};
          `
        case 'large':
          return css`
            padding: ${({ theme }) => theme.spacings.xs} ${({ theme }) => theme.spacings.lg};
          `
        case 'medium':
          return css`
            padding: ${({ theme }) => theme.spacings.xs} ${({ theme }) => theme.spacings.md};
          `
        case 'small':
          return css`
            padding: ${({ theme }) => theme.spacings.xxxs} ${({ theme }) => theme.spacings.xs};
          `
      }
  }}
`

export const Drawer = styled.div<DrawerStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  isolation: isolate;

  background: ${({ theme }) => theme.colors.default.black};

  ${props => {
      switch (props.size) {
        case 'xlarge':
          return css`
            border-radius: ${({ theme }) => theme.border.radius.xs};

            font-size: ${({ theme }) => theme.fonts.text.xlarge.fontSize};
            line-height: ${({ theme }) => theme.fonts.text.xlarge.lineHeight};
          `
        case 'large':
          return css`
            border-radius: ${({ theme }) => theme.border.radius.xxs};

            font-size: ${({ theme }) => theme.fonts.text.large.fontSize};
            line-height: ${({ theme }) => theme.fonts.text.large.lineHeight};
          `
        case 'medium':
          return css`
            border-radius: ${({ theme }) => theme.border.radius.xxs};

            font-size: ${({ theme }) => theme.fonts.text.medium.fontSize};
            line-height: ${({ theme }) => theme.fonts.text.medium.lineHeight};
          `
        case 'small':
          return css`
            border-radius: ${({ theme }) => theme.border.radius.xxs};

            font-size: ${({ theme }) => theme.fonts.text.small.fontSize};
            line-height: ${({ theme }) => theme.fonts.text.small.lineHeight};
          `
      }
  }}
`

export const Header = styled(Spacing)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
`

export const Body = styled(Spacing)`
  flex-direction: column;
  gap: 0;
`

export const Footer = styled(Spacing)`
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
`
