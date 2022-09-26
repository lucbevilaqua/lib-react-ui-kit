import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  TextDisplay as TextDisplayComponet,
  TextHeader as TextHeaderComponet,
  TextBody as TextBodyComponet
} from '../components/typography/Typography'

import { TypographyStyleDisplayProps, TypographyStyleProps } from '../components/typography/types'

export default {
  title: 'Components/Tipografia',
  component: TextDisplayComponet,
  subcomponents: { TextHeaderComponet, TextBodyComponet }
} as ComponentMeta<typeof TextDisplayComponet>

const fontSizeList: TypographyStyleProps['size'][] = ['xlarge', 'large', 'medium', 'small', 'xsmall']
const fontWeightDisplayList: TypographyStyleDisplayProps['weight'][] = ['medium', 'semibold']

const GrupColumn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {children}
  </div>
)

export const TextDisplay: ComponentStory<typeof TextDisplayComponet> = () => (
  <GrupColumn>
    {fontSizeList.map((s) => (
      <GrupColumn key={s}>
        {fontWeightDisplayList.map((w) => (
        <TextDisplayComponet
          key={`${s}.${w}`}
          size={s}
          weight={w}
        >
          {`${s}.${w}`}
        </TextDisplayComponet>
        ))}
        <hr />
      </GrupColumn>
    ))}
  </GrupColumn>
)

export const TextHeader: ComponentStory<typeof TextHeaderComponet> = () => (
  <GrupColumn>
    {fontSizeList.map((s) => (
      <GrupColumn key={s}>
        <TextHeaderComponet
          key={s}
          size={s}
        >
          {s}
        </TextHeaderComponet>
      </GrupColumn>
    ))}
  </GrupColumn>
)

export const TextBody: ComponentStory<typeof TextBodyComponet> = () => (
  <GrupColumn>
    {fontSizeList.map((s) => (
      <GrupColumn key={s}>
        <TextBodyComponet
          key={s}
          size={s}
        >
          {s}
        </TextBodyComponet>
      </GrupColumn>
    ))}
  </GrupColumn>
)

export const TextTruncate: ComponentStory<typeof TextBodyComponet> = () => (
  <TextBodyComponet size='large' truncate={true} width='17rem'>
    Esse é um exemplo de um texto que é muito longo e será truncado por conta disso
  </TextBodyComponet>
)
