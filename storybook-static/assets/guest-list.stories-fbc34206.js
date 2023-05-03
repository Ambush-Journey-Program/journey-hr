var e=Object.defineProperty;var s=(t,i)=>e(t,"name",{value:i,configurable:!0});import{a as r}from"./styled-components.browser.esm-017417a4.js";import{G as o,a as n}from"./const-45365122.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import"./badge-421f58ed.js";import"./paragraphs-81eb5bec.js";import"./paragraphs.styled-e351ea7a.js";import"./button-c8f1e04e.js";import"./cardWrapper-4210e8b5.js";import"./doodles-b547f457.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import"./select-input-ec4b04ef.js";import"./text-area-1fc051a4.js";import"./tooltip-49cecdc0.js";import"./title-54c56285.js";import"./subtitle-fd265a16.js";import"./short-appointment-72ccf319.js";import"./guests-appointment-f0e8a51f.js";const D={component:o,title:"Components/GuestList",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';

import { GuestListProps } from './types';

import { GuestList } from './guest-list';
import { GUESTS_LIST_DATA } from '../const';

export default {
  component: GuestList,
  title: 'Components/GuestList',
  parameters: {
    guestsList: list,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Guest-List',
              url: \`https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=14-32493&t=fFoku2dhra99oAz4-0&fuid=1196819673068025271\`,
              description: 'This is the Figma of Guest-List',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const GuestListTemplate: Story<GuestListProps> = (args) => {
  return <GuestList {...args} />;
};

export const GuestListStory = GuestListTemplate.bind({});
GuestListStory.args = {
  guestsList: GUESTS_LIST_DATA,
};
`,locationsMap:{"guest-list-story":{startLoc:{col:49,line:30},endLoc:{col:1,line:32},startBody:{col:49,line:30},endBody:{col:1,line:32}}}},guestsList:list,relatedLinks:{sections:[{title:"Figma",links:[{text:"Guest-List",url:"https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=14-32493&t=fFoku2dhra99oAz4-0&fuid=1196819673068025271",description:"This is the Figma of Guest-List"}]}]}}},m=s(t=>r(o,{...t}),"GuestListTemplate"),p=m.bind({});p.args={guestsList:n};const U=["GuestListStory"];export{p as GuestListStory,U as __namedExportsOrder,D as default};
//# sourceMappingURL=guest-list.stories-fbc34206.js.map
