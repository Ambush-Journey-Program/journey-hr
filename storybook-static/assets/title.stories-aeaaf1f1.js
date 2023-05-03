var n=Object.defineProperty;var e=(t,o)=>n(t,"name",{value:o,configurable:!0});import{a as i}from"./styled-components.browser.esm-017417a4.js";import{T as r}from"./title-54c56285.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";const d={component:r,title:"UI/Typography",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Title } from './title';
import { TitleProps } from './types';

export default {
  component: Title,
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
  },
} as Meta;

const TitleTemplate: Story<TitleProps> = (args) => {
  return <Title {...args} />;
};

export const TitleStory = TitleTemplate.bind({});
TitleStory.args = {
  children: 'Label',
  variant: 'h1',
};
`,locationsMap:{"title-story":{startLoc:{col:41,line:13},endLoc:{col:1,line:15},startBody:{col:41,line:13},endBody:{col:1,line:15}}}},children:"Label"}},l=e(t=>i(r,{...t}),"TitleTemplate"),a=l.bind({});a.args={children:"Label",variant:"h1"};const h=["TitleStory"];export{a as TitleStory,h as __namedExportsOrder,d as default};
//# sourceMappingURL=title.stories-aeaaf1f1.js.map
