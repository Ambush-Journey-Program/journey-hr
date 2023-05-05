import { Meta, Story } from '@storybook/react'

import { Tab } from './tab'
import { TabProps } from './types'

export default {
  component: Tab,
  title: 'UI/Tab',
  parameters: {
    isLoading: false,
    label: 'Tab text',
  },
} as Meta

const Template: Story<TabProps> = (args) => {
  return <Tab {...args} />
}

export const TabStory = Template.bind({})
