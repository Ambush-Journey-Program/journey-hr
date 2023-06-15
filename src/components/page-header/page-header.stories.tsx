import { Meta, Story } from '@storybook/react';
import { PageHeaderProps } from './types';
import { Button } from '@ambush/ui';
import styled from 'styled-components';
import { PageHeader } from '.';
import { BackButton } from '..';

export default {
  component: PageHeader,
  title: 'Components/PageHeader',
  parameters: {
    label: 'PageHeader text',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Page Header',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1',
              description:
                'This is the Figma of the Page Header and its variations. It used the Navbar Figma as reference',
            },
          ],
        },
      ],
    },
  },
} satisfies Meta;
const StyledDiv = styled.div`
  width: calc(48rem - 5rem);
  height: 110vh;

  @media (min-width: 48rem) {
    width: calc(48rem - 2rem);
  }
  @media (min-width: 62rem) {
    width: calc(62rem - 2rem);
  }
  @media (min-width: 75rem) {
    width: calc(75rem - 2rem);
  }
`;

const Template: Story<PageHeaderProps> = (args) => {
  return (
    <StyledDiv>
      <PageHeader {...args} />
    </StyledDiv>
  );
};

export const PageHeaderStory = Template.bind({});
PageHeaderStory.args = {
  title: 'Happy Hour Schedule',
  subtitle: 'Choose the best dates to celebrate',
  button: <Button>Apply Time Off</Button>,
  backButton: <BackButton onClick={() => {}} />,
};
