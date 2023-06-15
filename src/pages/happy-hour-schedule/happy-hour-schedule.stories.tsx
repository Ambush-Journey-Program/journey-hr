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
  width: calc(768px - 5rem);
  height: 110vh;

  @media (width >= 768px) {
    width: calc(769px - 2rem);
  }

  @media (width >= 992px) {
    width: calc(992px - 2rem);
  }

  @media (width >= 1200px) {
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
