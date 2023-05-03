var r=Object.defineProperty;var e=(o,n)=>r(o,"name",{value:n,configurable:!0});import{a as s}from"./styled-components.browser.esm-017417a4.js";import{C as t}from"./checkbox-f95c08ba.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./title-54c56285.js";import"./devices-01550430.js";import"./subtitle-fd265a16.js";import"./paragraphs-81eb5bec.js";import"./paragraphs.styled-e351ea7a.js";const f={component:t,title:"UI/Checkbox",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';

import { CheckBox } from './checkbox';
import { CheckboxProps } from './types';

export default {
  component: CheckBox,
  title: 'UI/Checkbox',
  parameters: {
    isLoading: false,
    label: 'Checkbox text',
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  return <CheckBox {...args} />;
};

export const CheckboxStory = Template.bind({});
CheckboxStory.args = {
  disabled: false,
  isChecked: false,
  label: 'Label',
  description: 'Description',
  labelFontWeight: 'light',
};
`,locationsMap:{"checkbox-story":{startLoc:{col:39,line:15},endLoc:{col:1,line:17},startBody:{col:39,line:15},endBody:{col:1,line:17}}}},isLoading:!1,label:"Checkbox text"}},a=e(o=>s(t,{...o}),"Template"),c=a.bind({});c.args={disabled:!1,isChecked:!1,label:"Label",description:"Description",labelFontWeight:"light"};const y=["CheckboxStory"];export{c as CheckboxStory,y as __namedExportsOrder,f as default};
//# sourceMappingURL=checkbox.stories-f6e2d3d6.js.map
