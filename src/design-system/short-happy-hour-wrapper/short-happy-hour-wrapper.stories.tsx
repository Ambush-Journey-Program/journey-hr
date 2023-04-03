import { Meta, Story } from '@storybook/react'

import { ShortHappyHourWrapper } from './short-happy-hour-wrapper'
import { IShortHappyHourWrapperProps } from './types'

export default {
  component: ShortHappyHourWrapper,
  title: 'UI/ShortHappyHourWrapper',
  parameters: {
    isLoading: false,
    label: 'ShortHappyHourWrapper text',
  },
} as Meta

const Template: Story<IShortHappyHourWrapperProps> = (args) => {
  return <ShortHappyHourWrapper {...args} />
}

export const ShortHappyHourWrapperStory = Template.bind({})
