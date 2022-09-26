import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/button/Button'

import { ButtonProps } from '../components/button/types'

const sizeList: Array<ButtonProps['size']> = [
  'xlarge',
  'large',
  'medium',
  'small'
]

const shapeList: Array<ButtonProps['shape']> = [
  'primary',
  'secondary',
  'subtle',
  'text'
]

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    children: 'button',
    disabled: false,
    size: 'medium',
    shape: 'primary'
  }
} as ComponentMeta<typeof Button>

const ComponentWrapper: React.FC<{ title?: string, children: React.ReactNode }> = ({
  title,
  children
}) => (
  <div key={title} style={{ padding: '8px 0' }}>
    <h2 style={{ marginBottom: '8px', color: '#F9F7F4' }}>{title}</h2>
    {children}
  </div>
)

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args} onClick={() => { console.log('click') }}> {children} </Button>
)

// PAGES
// Primary
export const Primary = Template.bind({})
Primary.args = {}

// Size
export const Size: ComponentStory<typeof Button> = (args) => (
  <div>
    {sizeList.map((size) => (
      <ComponentWrapper title={size} key={size}>
        <Button {...args} size={size} />
      </ComponentWrapper>
    ))}
  </div>
)
Size.parameters = { controls: { exclude: ['size'] } }

// Shape
export const Shape: ComponentStory<typeof Button> = (args) => (
  <div>
    {shapeList.map((shape) => (
      <ComponentWrapper title={shape} key={shape}>
        <Button {...args} shape={shape} />
      </ComponentWrapper>
    ))}
  </div>
)
Shape.parameters = { controls: { exclude: ['shape'] } }
