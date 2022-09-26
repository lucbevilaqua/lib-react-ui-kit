import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ColorPaletteCard, ColorPaletteCardProps, ColorScaleCard, ColorScaleCardProps } from '../../theme/components/colors/styles'

import { TextBody, TextHeader } from '../../components/typography/Typography'

export default {
  title: 'Tokens/Cores',
  component: ColorPaletteCard

} as ComponentMeta<typeof ColorPaletteCard>

const primaryScale = ['ui', 'text'] as Array<ColorScaleCardProps['primary']>
const secundaryScale = [1, 2, 3, 4] as Array<ColorScaleCardProps['secundary']>

const primaryPalette = ['primary', 'error', 'success', 'warning'] as Array<ColorPaletteCardProps['primary']>
const secundaryPalette = ['light', 'default', 'dark'] as Array<ColorPaletteCardProps['secundary']>

export const Palette: ComponentStory<typeof ColorPaletteCard> = () => {
  const colorsPaletteDemo = primaryPalette.map((p) => {
    const palette = secundaryPalette.map((s) => {
      return (
        <ColorPaletteCard
          primary={p}
          secundary={s}
          key={`${p}.${s}`}
        >
          <TextBody>
            {`colors.${p}.${s}`}
          </TextBody>
        </ColorPaletteCard>
      )
    })

    return (
      <div key={p}>
        <TextHeader>
          {p}
        </TextHeader>
        <div style={{ display: 'flex' }}>
          {palette}
        </div>
      </div>
    )
  })

  return (
    <div>
      {colorsPaletteDemo}
    </div>
  )
}

export const Scale: ComponentStory<typeof ColorScaleCard> = () => {
  const colorsPaletteDemo = primaryScale.map((p) => {
    const palette = secundaryScale.map((s) => {
      return (
        <ColorScaleCard
          primary={p}
          secundary={s}
          key={`${p}.${s}`}
        >
          <TextBody color={p === primaryScale[1] && s === 1 ? 'light' : 'dark'}>
            {`colors.${p}[${s}]`}
          </TextBody>
        </ColorScaleCard>
      )
    })

    return (
      <div key={p}>
        <TextHeader>
          {p}
        </TextHeader>
        <div style={{ display: 'flex' }}>
          {palette}
        </div>
      </div>
    )
  })

  return (
    <div>
      {colorsPaletteDemo}
    </div>
  )
}
