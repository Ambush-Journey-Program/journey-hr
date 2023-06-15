import { Meta, Story } from '@storybook/react';
import { Modal } from './modal';
import { ModalProps } from './types';

export default {
  component: Modal,
  title: 'UI/Modal',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Modal ',
              url:
                'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1',
              description: 'This is the Figma of Modal',
            },
          ],
        },
      ],
    },
  },
} satisfies Meta;

const Template: Story<ModalProps> = (args) => {
  return <Modal {...args} />;
};

export const ModalStory = Template.bind({});
ModalStory.args = {
  onConfirm: () => {},
  isOpen: true,
  onClose: () => {},
  title: 'Modal Title',
  children: 'Modal description',
  cancelButtonText: 'Cancel Button',
  confirmButtonText: 'Confirm Button',
};
