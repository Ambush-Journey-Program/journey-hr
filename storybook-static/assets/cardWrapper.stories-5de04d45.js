var n=Object.defineProperty;var e=(r,a)=>n(r,"name",{value:a,configurable:!0});import{a as o}from"./styled-components.browser.esm-017417a4.js";import{C as t}from"./cardWrapper-4210e8b5.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";const h={component:t,title:"UI/CardWrapper",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { CardWrapper } from './cardWrapper';
import { CardProps } from './types';

export default {
  component: CardWrapper,
  title: 'UI/CardWrapper',
  parameters: {
    children: 'Label',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Card Wrapper ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A595&t=i4ddngmKFF26EqjW-1',
              description:
                'This is the Figma of the Card Wrapper and its variations. It used the Navbar Figma as reference',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => {
  return <CardWrapper {...args} />;
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  children: 'Label',
};
`,locationsMap:{"select-card-story":{startLoc:{col:35,line:28},endLoc:{col:1,line:30},startBody:{col:35,line:28},endBody:{col:1,line:30}}}},children:"Label",relatedLinks:{sections:[{title:"Figma",links:[{text:"Card Wrapper ",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A595&t=i4ddngmKFF26EqjW-1",description:"This is the Figma of the Card Wrapper and its variations. It used the Navbar Figma as reference"}]}]}}},s=e(r=>o(t,{...r}),"Template"),i=s.bind({});i.args={children:"Label"};const y=["SelectCardStory"];export{i as SelectCardStory,y as __namedExportsOrder,h as default};
//# sourceMappingURL=cardWrapper.stories-5de04d45.js.map
