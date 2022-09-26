import styled from 'styled-components'

export interface ColorPaletteCardProps {
  primary: 'primary' | 'error' | 'success' | 'warning'
  secundary: 'light' | 'default' | 'dark'
}

export interface ColorScaleCardProps {
  primary: 'ui' | 'text'
  secundary: 1 | 2 | 3 | 4
}

const ColorCard = styled.div`
  height: 100px;
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ColorPaletteCard = styled(ColorCard)<ColorPaletteCardProps>`
  background-color: ${props => props.theme.colors[props.primary][props.secundary]};
`

export const ColorScaleCard = styled(ColorCard)<ColorScaleCardProps>`
  background-color: ${props => props.theme.colors[props.primary][props.secundary]};
`
