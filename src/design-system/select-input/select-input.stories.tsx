import { Meta, Story } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

import { SelectInput } from './select-input';
import { ISelectInputProps } from './types';

export default {
  component: SelectInput,
  title: 'UI/SelectInput',
  parameters: {
    isLoading: false,
    label: 'SelectInput text',
  },
} as Meta;

const exampleOptions = [
  {
    label: 'Text 1',
    value: '1',
  },
  {
    label: 'Text 2',
    value: '2',
  },
  {
    label: 'Text 3',
    value: '3',
  },
];

const Template: Story<ISelectInputProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <SelectInput {...args} />
    </ThemeProvider>
  );
};

export const SelectInputStory = Template.bind({});
SelectInputStory.args = {
  title: 'Title Example',
  required: true,
  options: exampleOptions,
};
