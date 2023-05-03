var p=Object.defineProperty;var i=(o,l)=>p(o,"name",{value:l,configurable:!0});import{H as a,j as r,a as t}from"./styled-components.browser.esm-017417a4.js";import{C as n}from"./checkbox-f95c08ba.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import"./button-c8f1e04e.js";import"./cardWrapper-4210e8b5.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import"./select-input-ec4b04ef.js";import{T as s}from"./title-54c56285.js";import{S as d}from"./subtitle-fd265a16.js";import"./paragraphs-81eb5bec.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";import"./badge-421f58ed.js";import"./doodles-b547f457.js";import"./text-area-1fc051a4.js";import"./tooltip-49cecdc0.js";import"./short-appointment-72ccf319.js";import"./paragraphs.styled-e351ea7a.js";import"./guests-appointment-f0e8a51f.js";const m=a.div`
  background: ${o=>o.theme.color.contrasts.lightContrast};
  border-radius: 10px;
  width: 100%;
  padding: 40px;
`,c=a.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,y=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;function e(){return r(m,{children:[r(y,{"data-testid":"optionalHolidays",children:[t(s,{children:"Optional Holidays",variant:"h6"}),t(d,{children:"You can save employee's recharge days by adding optional holidays to their Time Off.",variant:"s6",fontWeight:"regular"})]}),r(c,{children:[t(n,{onChange:()=>{},isChecked:!0,label:"All Soul's Day",description:"Nov 02 Mon, 2023",labelFontWeight:"semibold"}),t(n,{onChange:()=>{},isChecked:!0,label:"Brazilian Republic Proclamation Day",description:"Nov 15 Thu, 2023",labelFontWeight:"semibold"})]})]})}i(e,"OptionalHolidays");const A={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { OptionalHolidays } from './optional-holidays';
import { OptionalHolidaysProps } from './types';

export default {
  component: OptionalHolidays,
  title: 'Components/OptionalHolidays',
} as Meta;

const Template: Story<OptionalHolidaysProps> = (args) => {
  return <OptionalHolidays {...args} />;
};

export const OptionalHolidaysStory = Template.bind({});
`,locationsMap:{"optional-holidays-story":{startLoc:{col:47,line:10},endLoc:{col:1,line:12},startBody:{col:47,line:10},endBody:{col:1,line:12}}}}},component:e,title:"Components/OptionalHolidays"},h=i(o=>t(e,{...o}),"Template"),E=h.bind({}),R=["OptionalHolidaysStory"];export{E as OptionalHolidaysStory,R as __namedExportsOrder,A as default};
//# sourceMappingURL=optional-holidays.stories-e5094884.js.map
