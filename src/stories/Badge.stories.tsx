import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge } from '../components/badge/Badge'

import { BadgeProps } from '../components/badge/types'
import { TextBody } from '../components/typography/Typography'

const sizeList: Array<BadgeProps['size']> = [
  'large',
  'small'
]

const variantList: Array<BadgeProps['variant']> = [
  'solid',
  'outline'
]

const shapeList: Array<BadgeProps['shape']> = [
  'default',
  'secondary',
  'general',
  'success',
  'warning',
  'error'
]

export default {
  title: 'components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    size: 'large',
    variant: 'solid',
    shape: 'default'
  }
} as ComponentMeta<typeof Badge>

const ComponentWrapper: React.FC<{ title?: string, children: React.ReactNode }> = ({
  title,
  children
}) => (
  <div key={title} style={{ padding: '8px 0', color: '#FFF', textTransform: 'capitalize', display: 'flex', flexDirection: 'column', width: 90 }}>
    <TextBody>
      {title}
    </TextBody>
    {children}
  </div>
)

// PAGES
// Shape
export const Shape: ComponentStory<typeof Badge> = (args) => (
  <div>
    {shapeList.map((shape) => (
      <ComponentWrapper title={shape} key={shape}>
        <Badge {...args} shape={shape} />
      </ComponentWrapper>
    ))}
  </div>
)
Shape.parameters = { controls: { exclude: ['shape'] } }

// Variant
export const Variant: ComponentStory<typeof Badge> = (args) => (
  <div>
    {variantList.map((variant) => (
      <ComponentWrapper title={variant} key={variant}>
        <Badge {...args} variant={variant} />
      </ComponentWrapper>
    ))}
  </div>
)
Variant.parameters = { controls: { exclude: ['variant'] } }

// Size
export const Size: ComponentStory<typeof Badge> = (args) => (
  <div>
    {sizeList.map((size) => (
      <ComponentWrapper title={size} key={size}>
        <Badge {...args} size={size} />
      </ComponentWrapper>
    ))}
  </div>
)
Size.parameters = { controls: { exclude: ['size'] } }
