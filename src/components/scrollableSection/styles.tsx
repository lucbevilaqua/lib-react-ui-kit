import styled from 'styled-components'

import { ScrollableSectionStyleProps } from './types'

export const ScrollableContent = styled.div<ScrollableSectionStyleProps>`
  max-height: ${(props) => props.maxHeight};
  height: 100%;
  width: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacings.xxxs};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.ui[2]};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.ui[3]};
    border-radius: ${({ theme }) => theme.border.radius.xs};
  }
`
