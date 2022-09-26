import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '../components/card/Card'

import { CardProps } from '../components/card/types'

const sizeList: Array<CardProps['size']> = [
  'xlarge',
  'large',
  'medium',
  'small'
]

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    header: <p style={{ marginBottom: '8px', color: '#F9F7F4' }}>Header</p>,
    children: <p style={{ marginBottom: '8px', color: '#F9F7F4' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took</p>,
    footer: <p style={{ marginBottom: '8px', color: '#F9F7F4' }}>Footer</p>,
    image: <img src='' alt='Imagem'/>,
    size: 'medium'
  }
} as ComponentMeta<typeof Card>

const ComponentWrapper: React.FC<{ title?: string, children: React.ReactNode }> = ({
  title,
  children
}) => (
  <div key={title} style={{ padding: '8px 0' }}>
    <h2 style={{ marginBottom: '8px', color: '#F9F7F4' }}>{title}</h2>
    {children}
  </div>
)

// Size
export const Size: ComponentStory<typeof Card> = (args) => (
  <div>
    {sizeList.map((size) => (
      <ComponentWrapper title={size} key={size}>
        <Card {...args} size={size} />
      </ComponentWrapper>
    ))}
  </div>
)
Size.parameters = { controls: { exclude: ['size'] } }
