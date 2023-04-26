import { Meta, Story } from '@storybook/react';
import { TextAreaRequestReason } from './reason-text-area';
import { TextAreaRequestReasonProps } from './types';

export default {
  component: TextAreaRequestReason,
  title: 'Components/TextAreaRequestReason',
  parameters: {
    label: 'TextAreaRequestReason text',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Text Area Reason',
              url: 'https://www.figma.com/file/DtUfFjZ3an8okk2Jc3QbCs/Fluxo-de-f%C3%A9rias?node-id=272-53929&t=J1zz2jaMslGPnWiD-0',
              description: 'This is the Figma of the Text Area Reason',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<TextAreaRequestReasonProps> = (args) => {
  return <TextAreaRequestReason {...args} />;
};

export const TextAreaRequestReasonStory = Template.bind({});
TextAreaRequestReasonStory.args = {};
