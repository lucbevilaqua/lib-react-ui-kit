import styled, { css } from 'styled-components'

import { ButtonStyleProps } from './types'

export const Button = styled.button<ButtonStyleProps>`
  font-style: normal;
  font-weight: 500;
  text-align: center;
  background: none;
  color: #ec5f4c;
  border: 2px solid #ec5f4c;
  :hover {
    color: #ffaea3;
    border-color: #ffaea3;
  }
  /* size */
  ${(props) => {
    switch (props.size) {
      case 'huge':
        return css`
          height: 72px;
          min-width: 72px;
          border-radius: 16px;
          padding: 24px 32px;
          font-size: 18px;
          line-height: 32px;
        `
      case 'large':
        return css`
          height: 64px;
          min-width: 64px;
          border-radius: 12px;
          padding: 20px 32px;
          font-size: 15px;
          line-height: 24px;
        `
      case 'medium':
        return css`
          height: 56px;
          min-width: 56px;
          border-radius: 12px;
          padding: 16px 24px;
          font-size: 15px;
          line-height: 24px;
        `
      case 'small':
        return css`
          height: 40px;
          min-width: 40px;
          border-radius: 8px;
          padding: 9px 16px;
          font-size: 13px;
          line-height: 22px;
        `
    }
  }}
  /* shape */
  ${(props) => {
    switch (props.shape) {
      case 'primary':
        return css`
          border: none;
          background: #ec5f4c;
          color: #6c0d00;
          :hover {
            border: none;
            background: #ffaea3;
            color: #6c0d00;
          }
        `
      case 'subtle':
        return css`
          border-color: #4f4f4f;
        `
      case 'text':
        return css`
          border: none;
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