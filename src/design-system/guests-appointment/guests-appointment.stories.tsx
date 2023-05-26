import { Meta, Story } from '@storybook/react';
import { GuestsAppointment } from './guests-appointment';
import { GuestsAppointmentProps } from './types';

const listGuests = [
  'Mariana',
  'Marcello',
  'Lucas',
  'Barbara dos Santos',
  'Ana Pereira',
  'Claudia da Silva',
];

export default {
  component: GuestsAppointment,
  title: 'UI/GuestsAppointment',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<GuestsAppointmentProps> = (args) => {
  return <GuestsAppointment {...args} />;
};

export const GuestsAppointmentStory = Template.bind({});
GuestsAppointmentStory.args = {
  guests: listGuests,
};
