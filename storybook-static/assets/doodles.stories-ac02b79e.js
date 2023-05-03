var n=Object.defineProperty;var e=(o,t)=>n(o,"name",{value:t,configurable:!0});import{a as r}from"./styled-components.browser.esm-017417a4.js";import{D as s}from"./doodles-b547f457.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";const D={component:s,title:"UI/Doodles",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';

import { Doodles } from './doodles';
import { IDoodlesProps } from './types';

export default {
  component: Doodles,
  title: 'UI/Doodles',
  parameters: {
    isLoading: false,
    label: 'Doodles text',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Doodles',
              url: 'https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=6%3A69&t=WcI5jns5q5TpQbxH-1',
              description:
                'This is the Figma of the Doodles and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<IDoodlesProps> = (args) => {
  return <Doodles {...args} />;
};

export const DoodlesStory = Template.bind({});
DoodlesStory.args = {
  colors: 'dark',
};
`,locationsMap:{"doodles-story":{startLoc:{col:39,line:30},endLoc:{col:1,line:32},startBody:{col:39,line:30},endBody:{col:1,line:32}}}},isLoading:!1,label:"Doodles text",relatedLinks:{sections:[{title:"Figma",links:[{text:"Doodles",url:"https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=6%3A69&t=WcI5jns5q5TpQbxH-1",description:"This is the Figma of the Doodles and its variations."}]}]}}},l=e(o=>r(s,{...o}),"Template"),i=l.bind({});i.args={colors:"dark"};const f=["DoodlesStory"];export{i as DoodlesStory,f as __namedExportsOrder,D as default};
//# sourceMappingURL=doodles.stories-ac02b79e.js.map
