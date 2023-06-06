import { Meta, Story, StoryFn } from '@storybook/react';
import styled, { css } from 'styled-components';
import { Logo } from './logo';
import { ILogoProps } from './types';
import { Logos } from './logosrc';

export default {
  component: Logo,
  title: 'UI/Logo',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Logo',
              url: 'https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=2%3A890&t=WcI5jns5q5TpQbxH-1',
              description: 'This is the Figma of the Logo and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const LogoStoryWrapper = styled.div<{ alternate?: boolean }>`
  padding: 32px;
  width: 200px;
  ${(props) =>
    props.alternate &&
    css`
      background-color: darkgray;
    `}
`;

export const SelectCardStory: StoryFn<typeof Logo> = (args) => (
  <LogoStoryWrapper alternate={args.colorVariant === 'light'}>
    <Logo {...args} />
  </LogoStoryWrapper>
);

SelectCardStory.args = {
  logoVariation: 'horizontal',
  colorVariant: 'red',
};
SelectCardStory.argTypes = {
  logoVariation: { options: Object.keys(Logos), control: { type: 'radio' } },
  colorVariant: {
    options: ['light', 'red', 'purple', 'yellow', 'dark'],
    control: { type: 'radio' },
  },
};
