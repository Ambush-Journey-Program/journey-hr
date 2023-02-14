import { Meta, Story } from '@storybook/react'

import { SelectInput } from './select-input'
import { ISelectInputProps } from './types'

export default {
  component: SelectInput,
  title: 'UI/SelectInput',
  parameters: {
    isLoading: false,
    label: 'SelectInput text',
  },
} as Meta

const Template: Story<ISelectInputProps> = (args) => {
  return <SelectInput {...args} />
}

export const SelectInputStory = Template.bind({})
