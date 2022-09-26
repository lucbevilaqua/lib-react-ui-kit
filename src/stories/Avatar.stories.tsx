/* eslint-disable react/prop-types */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from '../components/avatar/Avatar'

export default {
  title: 'components/Avatar',
  component: Avatar,
  args: {
    children: 'span'
  }
} as ComponentMeta<typeof Avatar>

const ComponentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
    <div style={{ padding: '8px 0', width: '500px', margin: '50px auto' }}>
      {children}
    </div>
)

const Template: ComponentStory<typeof Avatar> = ({ children, bordered, ...args }) => (
    <ComponentWrapper>
        <Avatar {...args} bordered={true} type="topbar"> {children} </Avatar>
        <Avatar {...args} src="https://i.imgur.com/6GuZIHD.jpeg" bordered={false} type="topbar"> {children} </Avatar>
    </ComponentWrapper>
)

export const Primary = Template.bind({})
Primary.args = {}

const TemplateNew: ComponentStory<typeof Avatar> = ({ children, bordered, ...args }) => (
  <><ComponentWrapper>
    <Avatar {...args} bordered={true} type="default" name='span' isBorded={false}> {children} </Avatar>
  </ComponentWrapper><ComponentWrapper><Avatar {...args} bordered={true} type="default" src="https://i.imgur.com/6GuZIHD.jpeg" isBorded={true}> {children} </Avatar></ComponentWrapper></>

)

export const Secondary = TemplateNew.bind({})
Secondary.args = {}
