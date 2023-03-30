import { Meta, Story } from '@storybook/react'

import { Badge } from './badge'
import { IBadgeProps } from './types'

export default {
  component: Badge,
  title: 'UI/Badge',
  parameters: {
    isLoading: false,
    label: 'Badge text',
  },
} as Meta

const Template: Story<IBadgeProps> = (args) => {
  return <Badge {...args} />
}

export const BadgeStory = Template.bind({})
