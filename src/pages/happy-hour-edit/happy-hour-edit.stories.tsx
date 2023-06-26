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

const Template: Story<HappyHourEditProps> = (args) => {
  return (
    <StyledDiv>
      <HappyHourEdit {...args} />
    </StyledDiv>
  );
};

export const HappyHourEditStory = Template.bind({});
