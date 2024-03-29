import { Meta, Story, StoryFn } from '@storybook/react';
import { RadioButton } from './radio-button';
import { RadioButtonProps } from './types';

export default {
  component: RadioButton,
  title: 'UI/RadioButton',
  parameters: {},
} as Meta;

export const RadioButtonStory: StoryFn<typeof RadioButton> = (
  args: RadioButtonProps,
) => (
  <>
    <RadioButton
      defaultChecked={true}
      label={'Selection 1'}
      value={'Selection 1'}
      name={'Selection 1'}
    />
    <RadioButton
      defaultChecked={false}
      label={'Selection 2'}
      value={'Selection 2'}
      name={'Selection 1'}
    />
    <RadioButton
      defaultChecked={false}
      label={'Selection 3'}
      value={'Selection 3'}
      name={'Selection 1'}
    />
    <RadioButton
      defaultChecked={false}
      label={'Selection 4'}
      value={'Selection 4'}
      name={'Selection 1'}
    />
  </>
);

RadioButtonStory.args = {
  fontWeight: 'hair',
  disabled: false,
  defaultChecked: false,
};

RadioButtonStory.argTypes = {
  fontWeight: {
    control: { type: 'radio' },
    options: ['hair', 'semibold'],
  },
};
