var n=Object.defineProperty;var e=(t,r)=>n(t,"name",{value:r,configurable:!0});import{a as i}from"./styled-components.browser.esm-017417a4.js";import{S as o}from"./subtitle-fd265a16.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";const S={component:o,title:"UI/Typography",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Subtitle } from './subtitle';
import { SubtitleProps } from './types';

export default {
  component: Subtitle,
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
  },
} as Meta;

const SubtitleTemplate: Story<SubtitleProps> = (args) => {
  return <Subtitle {...args} />;
};

export const SubtitleStory = SubtitleTemplate.bind({});
SubtitleStory.args = {
  children: 'Label',
  variant: 's1',
  fontWeight: 'medium',
};
`,locationsMap:{"subtitle-story":{startLoc:{col:47,line:13},endLoc:{col:1,line:15},startBody:{col:47,line:13},endBody:{col:1,line:15}}}},children:"Label"}},l=e(t=>i(o,{...t}),"SubtitleTemplate"),a=l.bind({});a.args={children:"Label",variant:"s1",fontWeight:"medium"};const d=["SubtitleStory"];export{a as SubtitleStory,d as __namedExportsOrder,S as default};
//# sourceMappingURL=subtitle.stories-85e5040e.js.map
