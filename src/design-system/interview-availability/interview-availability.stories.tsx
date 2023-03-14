import { Meta, Story } from '@storybook/react'

import { InterviewAvailability } from './interview-availability'
import { IInterviewAvailabilityProps } from './types'

export default {
  component: InterviewAvailability,
  title: 'UI/InterviewAvailability',
  parameters: {
    isLoading: false,
    label: 'InterviewAvailability text',
  },
} as Meta

const Template: Story<IInterviewAvailabilityProps> = (args) => {
  return <InterviewAvailability {...args} />
}

export const InterviewAvailabilityStory = Template.bind({})
