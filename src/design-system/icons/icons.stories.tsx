import { Meta, Story } from '@storybook/react'

import { Icons } from './icons'
import { IconsProps } from './types'

export default {
  component: Icons,
  title: 'UI/Icons',
  parameters: {
    isLoading: false,
    label: 'Icons text',
  },
} as Meta

const Template: Story<IconsProps> = (args) => {
  return <Icons {...args} />
}

export const IconsStory = Template.bind({})
