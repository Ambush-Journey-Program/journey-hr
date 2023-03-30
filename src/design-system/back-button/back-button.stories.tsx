import { Meta, Story } from '@storybook/react'

import { BackButton } from './back-button'
import { IBackButtonProps } from './types'

export default {
  component: BackButton,
  title: 'UI/BackButton',
  parameters: {
    isLoading: false,
    label: 'BackButton text',
  },
} as Meta

const Template: Story<IBackButtonProps> = (args) => {
  return <BackButton {...args} />
}

export const BackButtonStory = Template.bind({})
