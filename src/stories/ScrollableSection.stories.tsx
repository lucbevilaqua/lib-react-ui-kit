import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ScrollableSection } from '../components/scrollableSection/ScrollableSection'

import { ScrollableSectionProps } from '../components/scrollableSection/types'

const heightList: Array<ScrollableSectionProps['maxHeight']> = [
  '4rem',
  '10rem'
]

export default {
  title: 'Components/ScrollableSection',
  component: ScrollableSection,
  args: {
    maxHeight: '30rem'
  }
} as ComponentMeta<typeof ScrollableSection>

const ComponentWrapper: React.FC<{ title?: string, children: React.ReactNode }> = ({
  title,
  children
}) => (
  <div key={title} style={{ padding: '8px 0' }}>
    <h2 style={{ marginBottom: '8px', color: '#F9F7F4' }}>{title}</h2>
    {children}
  </div>
)

// MaxHeight
export const MaxHeight: ComponentStory<typeof ScrollableSection> = (args) => (
  <div>
    {heightList.map((size) => (
      <ComponentWrapper title={size} key={size}>
        <ScrollableSection {...args} maxHeight={size}>
          {[...Array(100)].map((v, i) => <p key={i} style={{ color: '#F9F7F4' }}>item {i}</p>)}
        </ScrollableSection>
      </ComponentWrapper>
    ))}
  </div>
)
MaxHeight.parameters = { controls: { exclude: ['maxHeight'] } }
