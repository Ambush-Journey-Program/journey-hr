var o=Object.defineProperty;var t=(e,n)=>o(e,"name",{value:n,configurable:!0});import{a as s}from"./styled-components.browser.esm-017417a4.js";import{T as r}from"./text-area-1fc051a4.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./paragraphs-81eb5bec.js";import"./paragraphs.styled-e351ea7a.js";import"./devices-01550430.js";const T={component:r,title:"UI/Text Area",argTypes:{},parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { TextArea } from './text-area';
import { TextAreaProps } from './types';

export default {
  component: TextArea,
  title: 'UI/Text Area',
  argTypes: {},
  parameters: {
    minLength: 10,
    rows: 3,
    spellCheck: true,
    required: true,
    touched: false,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Text Area',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=9-31268&t=crxIvUD123577MuX-0',
              description:
                'This is the Figma of the Text Area and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => {
  return <TextArea {...args} />;
};

export const SelectInputStory = Template.bind({});
SelectInputStory.args = {
  minLength: 10,
  spellCheck: true,
  rows: 3,
  touched: false,
  required: true,
  label: 'Description',
};
`,locationsMap:{"select-input-story":{startLoc:{col:39,line:33},endLoc:{col:1,line:35},startBody:{col:39,line:33},endBody:{col:1,line:35}}}},minLength:10,rows:3,spellCheck:!0,required:!0,touched:!1,relatedLinks:{sections:[{title:"Figma",links:[{text:"Text Area",url:"https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=9-31268&t=crxIvUD123577MuX-0",description:"This is the Figma of the Text Area and its variations."}]}]}}},i=t(e=>s(r,{...e}),"Template"),a=i.bind({});a.args={minLength:10,spellCheck:!0,rows:3,touched:!1,required:!0,label:"Description"};const f=["SelectInputStory"];export{a as SelectInputStory,f as __namedExportsOrder,T as default};
//# sourceMappingURL=text-area.stories-ca5fea70.js.map
