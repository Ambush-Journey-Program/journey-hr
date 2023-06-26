import { Meta, Story } from '@storybook/react';
import { HappyHourSchedule } from './happy-hour-schedule';
import { IHappyHourScheduleProps } from './types';
import styled from 'styled-components';

export default {
  component: HappyHourSchedule,
  title: 'Components/HappyHourSchedule',
  parameters: {},
} as Meta;
const StyledDiv = styled.div`
  width: calc(48rem - 5rem);
  height: 110vh;

  @media (min-width: 48rem) {
    width: calc(48rem - 2rem);
  }
  @media (min-width: 62rem) {
    width: calc(62rem - 2rem);
  }
  @media (min-width: 75rem) {
    width: calc(75rem - 2rem);
  }
`;

const Template: Story<IHappyHourScheduleProps> = (args) => {
  return (
    <StyledDiv>
      <HappyHourSchedule {...args} />
    </StyledDiv>
  );
};

export const HappyHourScheduleStory = Template.bind({});
HappyHourScheduleStory.args = {};
