var o=Object.defineProperty;var r=(a,n)=>o(a,"name",{value:n,configurable:!0});import{a as e}from"./styled-components.browser.esm-017417a4.js";import{P as t}from"./paragraphs-81eb5bec.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./paragraphs.styled-e351ea7a.js";const d={component:t,title:"UI/Typography",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Paragraphs } from './paragraphs';
import { ParagraphsProps } from './types';

export default {
  component: Paragraphs,
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Typography',
              url: 'https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=58%3A29259&t=WcI5jns5q5TpQbxH-1',
              description:
                'This is the Figma of the Typography and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const ParagraphTemplate: Story<ParagraphsProps> = (args) => {
  return <Paragraphs {...args} />;
};

export const ParagraphStory = ParagraphTemplate.bind({});
ParagraphStory.args = {
  children: 'Label',
  size: 'large',
  fontWeight: 'light',
};
`,locationsMap:{"paragraph-story":{startLoc:{col:50,line:28},endLoc:{col:1,line:30},startBody:{col:50,line:28},endBody:{col:1,line:30}}}},children:"Label",relatedLinks:{sections:[{title:"Figma",links:[{text:"Typography",url:"https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=58%3A29259&t=WcI5jns5q5TpQbxH-1",description:"This is the Figma of the Typography and its variations."}]}]}}},s=r(a=>e(t,{...a}),"ParagraphTemplate"),i=s.bind({});i.args={children:"Label",size:"large",fontWeight:"light"};const y=["ParagraphStory"];export{i as ParagraphStory,y as __namedExportsOrder,d as default};
//# sourceMappingURL=paragraphs.stories-0e197b8f.js.map
