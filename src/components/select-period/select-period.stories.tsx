import { Meta, Story } from '@storybook/react';
import { SelectPeriod } from './select-period';
import styled from 'styled-components';

export default {
  component: SelectPeriod,
  title: 'Components/SelectPeriod',
} satisfies Meta;

const Wrapper = styled.div`
  width: 866px;
  padding: 40px;
`;

const Template: Story = (args) => {
  return (
    <Wrapper>
      <SelectPeriod {...args} />{' '}
    </Wrapper>
  );
};

export const SelectPeriodStory = Template.bind({});
