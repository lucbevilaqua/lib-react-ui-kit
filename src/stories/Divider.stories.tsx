import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Divider } from '../components/divider/Divider'

const items = ['Item 1', 'Item 2', 'Item 3']

export default {
  title: 'Components/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

export const Default: ComponentStory<typeof Divider> = (args) => (
  <div>
    {items.map((item) => (
      <>
        <h2 style={{ marginBottom: '8px', color: '#F9F7F4' }}>{item}</h2>
        <Divider />
      </>
    ))}
  </div>
)
