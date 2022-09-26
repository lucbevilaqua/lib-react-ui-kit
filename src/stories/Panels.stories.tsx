/* eslint-disable react/prop-types */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Panels } from '../components/panels/Panels'

export default {
  title: 'Components/Panels',
  component: Panels,
  args: {
    children: 'Conteudo'
  }
} as ComponentMeta<typeof Panels>

const ComponentWrapper: React.FC<{ title?: string, children?: React.ReactNode }> = ({
  title,
  children
}) => (
    <div key={title} style={{ padding: '8px 0' }}>
      <h2 style={{ marginBottom: '8px', color: '#F9F7F4' }}>{title}</h2>
      {children}
    </div>
)

function contentPanels () {
  return (
  <>
    <p>Oi</p>
    <p>tudo bem?</p>
  </>
  )
}

const Template: ComponentStory<typeof Panels> = ({ children, ...args }) => (
    <ComponentWrapper title='Panels'>
      <Panels {...args} size="190" direction="column" content={contentPanels()}>{children} </Panels>
    </ComponentWrapper>
)

export const Primary = Template.bind({})
Primary.args = {}
