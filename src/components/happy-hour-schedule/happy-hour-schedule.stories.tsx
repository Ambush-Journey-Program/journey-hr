import { type Meta, type Story } from '@storybook/react';
import { HappyHourSchedule } from './happy-hour-schedule';
import { type IHappyHourScheduleProps } from './types';
import styled from 'styled-components';

export default {
  component: HappyHourSchedule,
  title: 'Components/HappyHourSchedule',
  parameters: {},
} as Meta;
const StyledDiv = styled.div`
  width: calc(768px - 5rem);
  height: 110vh;

  @media (min-width: 768px) {
    width: calc(769px - 2rem);
  }
  @media (min-width: 992px) {
    width: calc(992px - 2rem);
  }
  @media (min-width: 1200px) {
    width: calc(1200px - 2rem);
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
