import styled, { css } from 'styled-components'

import { FontColor, FontFamily, FontSize, FontType, FontWeight, TypographyStyleDisplayProps, TypographyStyleProps } from './types'

const getFont = (
  family: FontFamily,
  type: FontType,
  size: FontSize,
  weight: FontWeight,
  color: FontColor
) => css`
  font-family: ${({ theme }) => theme.fonts[family]};
  font-size: ${({ theme }) => theme.fonts[type][size].fontSize};
  font-weight: ${({ theme }) => theme.fonts.weight[weight]};
  letter-spacing: ${({ theme }) => theme.fonts[type][size].letterSpacing};
  line-height: ${({ theme }) => theme.fonts[type][size].lineHeight};
  
  ${() => {
    switch (color) {
      case 'light':
        return css`
          color: ${({ theme }) => theme.colors.text[4]};
        `
      default:
        return css`
          color: ${({ theme }) => theme.colors.text[1]};
        `
    }
  }}
`

const getTruncate = (
  truncate: boolean,
  width: string,
  maxHeight: string
) => css`
  width: ${width ?? '100%'};
  max-height: ${maxHeight};
  ${() => {
    if (truncate) {
      return css`
          overflow: hidden;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
        `
      }
  }}
`

export const TextDisplay = styled.span<TypographyStyleDisplayProps>`
  ${(props) => getFont('primary', 'display', props.size, props.weight, props.color)}
  ${(props) => getTruncate(props.truncate, props.width, props.maxHeight)}
`

export const TextHeader = styled.h1<TypographyStyleProps>`
  ${(props) => getFont('secondary', 'header', props.size, 'medium', props.color)}
  ${(props) => getTruncate(props.truncate, props.width, props.maxHeight)}
`

export const TextBody = styled.p<TypographyStyleProps>`
  ${(props) => getFont('secondary', 'text', props.size, 'regular', props.color)}
  ${(props) => getTruncate(props.truncate, props.width, props.maxHeight)}
`

export const Link = styled.a<TypographyStyleProps>`
  ${(props) => getFont('secondary', 'link', props.size, 'medium', props.color)}
  ${(props) => getTruncate(props.truncate, props.width, props.maxHeight)}
`
