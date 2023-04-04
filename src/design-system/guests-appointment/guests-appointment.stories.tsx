import { Meta, Story } from '@storybook/react'

import { GuestsAppointment } from './guests-appointment'
import { IGuestsAppointmentProps } from './types'

export default {
  component: GuestsAppointment,
  title: 'UI/GuestsAppointment',
  parameters: {
    isLoading: false,
    label: 'GuestsAppointment text',
  },
} as Meta

const Template: Story<IGuestsAppointmentProps> = (args) => {
  return <GuestsAppointment {...args} />
}

export const GuestsAppointmentStory = Template.bind({})
