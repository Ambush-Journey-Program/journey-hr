import { Meta, Story } from '@storybook/react';
import { css, ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Logo } from './logo';
import { ILogoProps } from './types';
import styled from 'styled-components';

export default {
  component: Logo,
  title: 'UI/Logo',
  parameters: {},
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
    <LogoStoryWrapper alternate={args.colorVariant === 'light'}>
      <Logo {...args} />
    </LogoStoryWrapper>
  );
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  variant: 'horizontal',
  colorVariant: 'dark',
};
