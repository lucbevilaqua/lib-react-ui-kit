import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Drawer } from '../components/drawer/Drawer'
import { DrawerProps } from '../components/drawer/types'

const sizeList: Array<DrawerProps['size']> = [
  'xlarge',
  'large',
  'medium',
  'small'
]

export default {
  title: 'Components/Drawer',
  component: Drawer,
  args: {
    children: <>{[...Array(10)].map((v, i) => <p key={i} style={{ color: '#F9F7F4' }}>item {i}</p>)}</>,
    footer: <p style={{ color: '#F9F7F4' }}>Footer</p>,
    header: <p style={{ color: '#F9F7F4' }}>header</p>
  }
} as ComponentMeta<typeof Drawer>

const ComponentWrapper: React.FC<{ title?: string, children: React.ReactNode }> = ({
  title,
  children
}) => (
  <div key={title} style={{ padding: '8px 0' }}>
    <h2 style={{ color: '#F9F7F4' }}>{title}</h2>
    {children}
  </div>
)

// Size
export const Size: ComponentStory<typeof Drawer> = (args) => (
  <div>
    {sizeList.map((size) => (
      <ComponentWrapper title={size} key={size}>
         <Drawer {...args} size={size} />
      </ComponentWrapper>
    ))}
  </div>
)
