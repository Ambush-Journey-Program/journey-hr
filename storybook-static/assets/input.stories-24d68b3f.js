var s=Object.defineProperty;var e=(t,r)=>s(t,"name",{value:r,configurable:!0});import{a as o}from"./styled-components.browser.esm-017417a4.js";import{I as n}from"./input-e44c0346.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./paragraphs-81eb5bec.js";import"./paragraphs.styled-e351ea7a.js";const y={component:n,title:"UI/Input",argTypes:{},parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Input } from './input';
import { IInputProps } from './types';

export default {
  component: Input,
  title: 'UI/Input',
  argTypes: {},
  parameters: {
    label: 'Label',
    required: true,
    disabled: false,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Input',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=3%3A32&t=pApxUetlxSBLJr2G-0',
              description: 'This is the Figma of the Input and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<IInputProps> = (args) => {
  return <Input {...args} />;
};

export const SelectInputStory = Template.bind({});
SelectInputStory.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
};
`,locationsMap:{"select-input-story":{startLoc:{col:37,line:30},endLoc:{col:1,line:32},startBody:{col:37,line:30},endBody:{col:1,line:32}}}},label:"Label",required:!0,disabled:!1,relatedLinks:{sections:[{title:"Figma",links:[{text:"Input",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=3%3A32&t=pApxUetlxSBLJr2G-0",description:"This is the Figma of the Input and its variations."}]}]}}},i=e(t=>o(n,{...t}),"Template"),a=i.bind({});a.args={label:"Label",required:!0,disabled:!1,readOnly:!1};const f=["SelectInputStory"];export{a as SelectInputStory,f as __namedExportsOrder,y as default};
//# sourceMappingURL=input.stories-24d68b3f.js.map
