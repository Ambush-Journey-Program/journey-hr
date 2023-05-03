var o=Object.defineProperty;var e=(t,a)=>o(t,"name",{value:a,configurable:!0});import{a as r}from"./styled-components.browser.esm-017417a4.js";import{B as n}from"./badge-421f58ed.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./paragraphs-81eb5bec.js";import"./paragraphs.styled-e351ea7a.js";const f={component:n,title:"UI/Badge",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Badge } from './badge';
import { IBadgeProps } from './types';

export default {
  component: Badge,
  title: 'UI/Badge',
  parameters: {
    isLoading: false,
    label: 'Badge text',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Badge',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1',
              description:
                'This is the Figma of the Badge and its variations. It used the Navbar Figma as reference',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<IBadgeProps> = (args) => {
  return <Badge {...args} />;
};

export const BadgeStory = Template.bind({});
BadgeStory.args = {
  text: 'Dev Team',
};
`,locationsMap:{"badge-story":{startLoc:{col:37,line:29},endLoc:{col:1,line:31},startBody:{col:37,line:29},endBody:{col:1,line:31}}}},isLoading:!1,label:"Badge text",relatedLinks:{sections:[{title:"Figma",links:[{text:"Badge",url:"https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1",description:"This is the Figma of the Badge and its variations. It used the Navbar Figma as reference"}]}]}}},s=e(t=>r(n,{...t}),"Template"),i=s.bind({});i.args={text:"Dev Team"};const b=["BadgeStory"];export{i as BadgeStory,b as __namedExportsOrder,f as default};
//# sourceMappingURL=badge.stories-c7c42443.js.map
