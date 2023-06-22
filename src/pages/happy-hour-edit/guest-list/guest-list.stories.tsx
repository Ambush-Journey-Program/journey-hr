import { Meta, Story } from '@storybook/react';
import { GuestListProps } from './types';
import { GuestList } from './guest-list';
import styled from 'styled-components';

export default {
  component: GuestList,
  title: 'Components/GuestList',
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
const guestStorybook = [
  { guest: { id: '11', name: 'Juliana ', team: 'Design' } },
  { guest: { id: '12', name: 'Lídia ', team: 'Developer' } },
  { guest: { id: '13', name: 'Carlos', team: 'Design' } },
];
const GuestListTemplate: Story<GuestListProps> = (args) => {
  return (
    <StyledDiv>
      <GuestList {...args} guestsList={guestStorybook} />
    </StyledDiv>
  );
};

export const GuestListStory = GuestListTemplate.bind({});
