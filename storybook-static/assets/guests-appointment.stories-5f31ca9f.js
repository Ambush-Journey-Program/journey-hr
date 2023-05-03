var o=Object.defineProperty;var n=(t,e)=>o(t,"name",{value:e,configurable:!0});import{a}from"./styled-components.browser.esm-017417a4.js";import{G as s}from"./guests-appointment-f0e8a51f.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";const r=["Mariana","Marcello","Lucas","Barbara dos Santos","Ana Pereira","Claudia da Silva"],A={component:s,title:"UI/GuestsAppointment",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { GuestsAppointment } from './guests-appointment';
import { GuestsAppointmentProps } from './types';

const listGuests = [
  'Mariana',
  'Marcello',
  'Lucas',
  'Barbara dos Santos',
  'Ana Pereira',
  'Claudia da Silva',
];

export default {
  component: GuestsAppointment,
  title: 'UI/GuestsAppointment',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<GuestsAppointmentProps> = (args) => {
  return <GuestsAppointment {...args} />;
};

export const GuestsAppointmentStory = Template.bind({});
GuestsAppointmentStory.args = {
  guests: listGuests,
};
`,locationsMap:{"guests-appointment-story":{startLoc:{col:48,line:22},endLoc:{col:1,line:24},startBody:{col:48,line:22},endBody:{col:1,line:24}}}},isLoading:!1}},p=n(t=>a(s,{...t}),"Template"),i=p.bind({});i.args={guests:r};const y=["GuestsAppointmentStory"];export{i as GuestsAppointmentStory,y as __namedExportsOrder,A as default};
//# sourceMappingURL=guests-appointment.stories-5f31ca9f.js.map
