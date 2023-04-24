import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { HappyHourEdit } from './happy-hour-edit';
import { HappyHourEditProps } from './types';

export default {
  component: HappyHourEdit,
  title: 'Components/HappyHourEdit',
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

const Template: Story<HappyHourEditProps> = (args) => {
  return (
    <StyledDiv>
      <HappyHourEdit {...args} />
    </StyledDiv>
  );
};

export const HappyHourEditStory = Template.bind({});
