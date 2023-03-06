import { Meta, Story } from '@storybook/react'

import { Tooltip } from './tooltip'
import { ITooltipProps } from './types'

export default {
  component: Tooltip,
  title: 'UI/Tooltip',
  parameters: {
    isLoading: false,
    label: 'Tooltip text',
  },
} as Meta

const Template: Story<ITooltipProps> = (args) => {
  return <Tooltip {...args} />
}

export const TooltipStory = Template.bind({})
