var i=Object.defineProperty;var t=(e,o)=>i(e,"name",{value:o,configurable:!0});import{a as s}from"./styled-components.browser.esm-017417a4.js";import{S as n}from"./select-input-ec4b04ef.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./paragraphs-81eb5bec.js";import"./paragraphs.styled-e351ea7a.js";const l=[{label:"Text 1",value:"1"},{label:"Text 2",value:"2"},{label:"Text 3",value:"3"}],x={component:n,title:"UI/SelectInput",argTypes:{onSelect:{action:"selected"}},parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { SelectInput } from './select-input';
import { ISelectInputProps } from './types';

const exampleOptions = [
  {
    label: 'Text 1',
    value: '1',
  },
  {
    label: 'Text 2',
    value: '2',
  },
  {
    label: 'Text 3',
    value: '3',
  },
];

export default {
  component: SelectInput,
  title: 'UI/SelectInput',
  argTypes: {
    onSelect: { action: 'selected' },
  },
  parameters: {
    title: 'Title',
    required: true,
    options: exampleOptions,
    disabled: false,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Select Input',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=3%3A32&t=i4ddngmKFF26EqjW-1',
              description:
                'This is the Figma of the Select Input and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<ISelectInputProps> = (args) => {
  return <SelectInput {...args} />;
};

export const SelectInputStory = Template.bind({});
SelectInputStory.args = {
  title: 'Title',
  required: true,
  options: exampleOptions,
  disabled: false,
  placeholder: 'Label',
};
`,locationsMap:{"select-input-story":{startLoc:{col:43,line:49},endLoc:{col:1,line:51},startBody:{col:43,line:49},endBody:{col:1,line:51}}}},title:"Title",required:!0,options:l,disabled:!1,relatedLinks:{sections:[{title:"Figma",links:[{text:"Select Input",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=3%3A32&t=i4ddngmKFF26EqjW-1",description:"This is the Figma of the Select Input and its variations."}]}]}}},r=t(e=>s(n,{...e}),"Template"),a=r.bind({});a.args={title:"Title",required:!0,options:l,disabled:!1,placeholder:"Label"};const T=["SelectInputStory"];export{a as SelectInputStory,T as __namedExportsOrder,x as default};
//# sourceMappingURL=select-input.stories-d0deed82.js.map
