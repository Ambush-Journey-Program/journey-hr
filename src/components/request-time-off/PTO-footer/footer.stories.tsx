/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta, Story } from '@storybook/react';
import { Footer } from './footer';
import { FooterProps } from './types';

export default {
  component: Footer,
  title: 'Components/Footer',
  parameters: {
    label: 'Footer',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Footer',
              url: 'https://www.figma.com/file/DtUfFjZ3an8okk2Jc3QbCs/Fluxo-de-f%C3%A9rias?node-id=272-53804&t=J1zz2jaMslGPnWiD-0',
              description: 'This is the Figma of the Footer and its variations',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<FooterProps> = (args) => {
  return <Footer {...args} />;
};

export const FooterStory = Template.bind({});
FooterStory.args = {};
