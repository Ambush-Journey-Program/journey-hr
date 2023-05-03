var c=Object.defineProperty;var p=(t,o)=>c(t,"name",{value:o,configurable:!0});import{H as r,j as n,a as e}from"./styled-components.browser.esm-017417a4.js";import"./avatar-7d72cb7f.js";import{B as s}from"./index-215b3469.js";import{B as u}from"./button-c8f1e04e.js";import"./cardWrapper-4210e8b5.js";import{I as i}from"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import{S as l}from"./select-input-ec4b04ef.js";import"./title-54c56285.js";import"./subtitle-fd265a16.js";import"./paragraphs-81eb5bec.js";import"./index-4c94892f.js";import{d}from"./devices-01550430.js";import{P as h}from"./page-header-81a172b1.js";import{T as y}from"./text-area-1fc051a4.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./badge-421f58ed.js";import"./doodles-b547f457.js";import"./tooltip-49cecdc0.js";import"./short-appointment-72ccf319.js";import"./paragraphs.styled-e351ea7a.js";import"./guests-appointment-f0e8a51f.js";const S=20;function x(){const t=[];for(let o=8;o<=S;o++)t.push({label:o.toString(),value:o.toString()});return t}p(x,"generateAmountPeopleOptions");r(l)``;const H=r.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
`,f=r.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 24px;

  @media ${d.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,a=r.div``,g=r(u)`
  float: right;

  @media ${d.mobile} {
    width: 100%;
  }
`,w=r(s)`
  padding-left: 0;
  margin-bottom: 12px;
`;function m(){const t=x();return n(H,{"data-testid":"happyHourSchedule",children:[e(w,{onClick:()=>{}}),e(h,{title:"Happy Hour Schedule ",subtitle:"Choose the best dates to celebrate"}),n(f,{children:[e(i,{type:"text",label:"Name of the event"}),e(i,{type:"date",label:"Date"}),e(l,{title:"Amount of people",required:!0,options:t,handleSelect:o=>{console.log(o)}})]}),e(a,{children:e(y,{label:"Description"})}),e(a,{children:e(g,{children:"Generate List"})})]})}p(m,"HappyHourSchedule");const V={component:m,title:"Components/HappyHourSchedule",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { HappyHourSchedule } from './happy-hour-schedule';
import { IHappyHourScheduleProps } from './types';
import styled from 'styled-components';

export default {
  component: HappyHourSchedule,
  title: 'Components/HappyHourSchedule',
  parameters: {},
} as Meta;
const StyledDiv = styled.div\`
  width: calc(768px - 5rem);
  height: 110vh;

  @media (min-width: 768px) {
    width: calc(769px - 2rem);
  }
  @media (min-width: 992px) {
    width: calc(992px - 2rem);
  }
  @media (min-width: 1200px) {
    width: calc(1200px - 2rem);
  }
\`;

const Template: Story<IHappyHourScheduleProps> = (args) => {
  return (
    <StyledDiv>
      <HappyHourSchedule {...args} />
    </StyledDiv>
  );
};

export const HappyHourScheduleStory = Template.bind({});
HappyHourScheduleStory.args = {};
`,locationsMap:{"happy-hour-schedule-story":{startLoc:{col:49,line:26},endLoc:{col:1,line:32},startBody:{col:49,line:26},endBody:{col:1,line:32}}}}}},v=r.div`
  width: calc(768px - 5rem);
  height: 110vh;

  @media (min-width: 768px) {
    width: calc(769px - 2rem);
  }
  @media (min-width: 992px) {
    width: calc(992px - 2rem);
  }
  @media (min-width: 1200px) {
    width: calc(1200px - 2rem);
  }
`,b=p(t=>e(v,{children:e(m,{...t})}),"Template"),B=b.bind({});B.args={};const X=["HappyHourScheduleStory"];export{B as HappyHourScheduleStory,X as __namedExportsOrder,V as default};
//# sourceMappingURL=happy-hour-schedule.stories-9ee5f8be.js.map
