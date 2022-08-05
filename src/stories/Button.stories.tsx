import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../Button'

export default {
  title: 'design-system/Button',
  component: Button,
  args: {
    children: 'button',
    disabled: false,
    size: 'huge',
    shape: 'primary'
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}> {children} </Button>
)

// Primary
export const Primary = Template.bind({})
Primary.args = {}
