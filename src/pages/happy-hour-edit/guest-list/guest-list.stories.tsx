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
