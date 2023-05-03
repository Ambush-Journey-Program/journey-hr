var p=Object.defineProperty;var t=(o,n)=>p(o,"name",{value:n,configurable:!0});import{a}from"./styled-components.browser.esm-017417a4.js";import{S as r}from"./short-appointment-72ccf319.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./paragraphs.styled-e351ea7a.js";import"./devices-01550430.js";const e="Pizza and Games",s="01/02/2023",h={component:r,title:"UI/ShortHappyHour",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { ShortHappyHour } from './short-appointment';
import { ShortHappyHourProps } from './types';
const title = 'Pizza and Games';
const date = '01/02/2023';
export default {
  component: ShortHappyHour,
  title: 'UI/ShortHappyHour',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<ShortHappyHourProps> = (args) => {
  return <ShortHappyHour {...args} />;
};

export const ShortHappyHourStory = Template.bind({});
ShortHappyHourStory.args = {
  appointment: title,
  date: date,
};
`,locationsMap:{"short-happy-hour-story":{startLoc:{col:45,line:14},endLoc:{col:1,line:16},startBody:{col:45,line:14},endBody:{col:1,line:16}}}},isLoading:!1}},i=t(o=>a(r,{...o}),"Template"),m=i.bind({});m.args={appointment:e,date:s};const f=["ShortHappyHourStory"];export{m as ShortHappyHourStory,f as __namedExportsOrder,h as default};
//# sourceMappingURL=short-appointment.stories-80d8b1c8.js.map
