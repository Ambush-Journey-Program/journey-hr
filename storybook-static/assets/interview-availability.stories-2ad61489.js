var y=Object.defineProperty;var a=(r,n)=>y(r,"name",{value:n,configurable:!0});import{H as o,a as t,j as s}from"./styled-components.browser.esm-017417a4.js";import{r as m}from"./index-86ac2416.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import{B as b}from"./button-c8f1e04e.js";import{C as f}from"./cardWrapper-4210e8b5.js";import{I as h}from"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import{S as p}from"./select-input-ec4b04ef.js";import"./title-54c56285.js";import"./subtitle-fd265a16.js";import"./paragraphs-81eb5bec.js";import{d as c}from"./devices-01550430.js";import"./index-4c94892f.js";import{P as g}from"./page-header-81a172b1.js";import"./iframe-e52d0cbe.js";import"./badge-421f58ed.js";import"./doodles-b547f457.js";import"./text-area-1fc051a4.js";import"./tooltip-49cecdc0.js";import"./short-appointment-72ccf319.js";import"./paragraphs.styled-e351ea7a.js";import"./guests-appointment-f0e8a51f.js";const I=[{label:"Morning",value:"morning"},{label:"Afternoon",value:"afternoon"},{label:"Evening",value:"evening"}],w=[{label:"Frontend",value:"frontend"},{label:"Backend",value:"backend"},{label:"Devops",value:"devops"}],S=[{label:"React Developer",value:"react_developer"},{label:"Java Developer",value:"java_developer"},{label:"Product Designer",value:"product_designer"}],A=o.div``;o.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;const x=o.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 1.25rem;

  @media ${c.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`,D=o.div`
  display: grid;

  @media ${c.tablet} {
    grid-column: 2;
    justify-content: flex-end;
  }
`;function d(){const[r,n]=m.useState(""),[e,l]=m.useState({area:"",shift:"",opportunity:""}),v=a(i=>{i.preventDefault(),console.log(`Your state values: 

    Date: ${r} 

    Area: ${e.area} 

    Shift: ${e.shift} 

    Opportunity: ${e.opportunity}`)},"handleSubmit"),u=e.area&&e.shift&&e.opportunity&&r;return t(f,{children:s(A,{children:[t(g,{title:"Technical Interview Availability",subtitle:"Schedule a technical interview for a candidate."}),t("div",{children:s(x,{"data-testid":"interview-form-test",onSubmit:v,action:"",children:[t(h,{name:"data",type:"date",label:"Date:",onTextChange:n}),t(p,{name:"area",title:"Area:",placeholder:"UX Designer",options:w,required:!0,value:e.area,handleSelect:i=>{l({...e,area:i})}}),t(p,{name:"shift",title:"Shift:",placeholder:"Morning",options:I,required:!0,value:e.shift,handleSelect:i=>{l({...e,shift:i})}}),t(p,{name:"opportunity",title:"Opportunity:",placeholder:"Product Designer",options:S,required:!0,value:e.opportunity,handleSelect:i=>{l({...e,opportunity:i})}}),t(D,{children:t(b,{sizeVariant:"medium",disabled:!u,children:"Search"})})]})})]})})}a(d,"InterviewAvailability");const Z={component:d,title:"Components/InterviewAvailability",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { InterviewAvailability } from './interview-availability';
import { IInterviewAvailabilityProps } from './types';

export default {
  component: InterviewAvailability,
  title: 'Components/InterviewAvailability',
  parameters: {},
} as Meta;

const Template: Story<IInterviewAvailabilityProps> = (args) => {
  return <InterviewAvailability {...args} />;
};

export const InterviewAvailabilityStory = Template.bind({});
InterviewAvailabilityStory.args = {};
`,locationsMap:{"interview-availability-story":{startLoc:{col:53,line:11},endLoc:{col:1,line:13},startBody:{col:53,line:11},endBody:{col:1,line:13}}}}}},B=a(r=>t(d,{...r}),"Template"),$=B.bind({});$.args={};const ee=["InterviewAvailabilityStory"];export{$ as InterviewAvailabilityStory,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=interview-availability.stories-2ad61489.js.map
