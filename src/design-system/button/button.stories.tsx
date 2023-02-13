import { Meta, Story } from '@storybook/react'

import { Button } from './button'
import { IButtonProps } from './types'

export default {
  component: Button,
  title: 'UI/Button',
  parameters: {
    isLoading: false,
    label: 'Button text',
  },
} as Meta

const Template: Story<IButtonProps> = (args) => {
  return <Button {...args} />
}

export const ButtonStory = Template.bind({})
