import { Meta, Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import { Logo } from './logo';
import { ILogoProps } from './types';

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

const Template: Story<ILogoProps> = (args) => {
  return (
    <LogoStoryWrapper alternate={args.colors === 'light'}>
      <Logo {...args} />
    </LogoStoryWrapper>
  );
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  logoVariation: 'horizontal',
<<<<<<< HEAD
  colorVariant: 'red',
=======
  colors: 'red',
>>>>>>> 9a50f8d (Refactor: fixed Doodles and Logo)
};
