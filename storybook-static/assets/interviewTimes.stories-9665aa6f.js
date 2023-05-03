var c=Object.defineProperty;var o=(e,i)=>c(e,"name",{value:i,configurable:!0});import{H as a,a as t,j as m}from"./styled-components.browser.esm-017417a4.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import{B as p}from"./button-c8f1e04e.js";import{C as u}from"./cardWrapper-4210e8b5.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import"./select-input-ec4b04ef.js";import"./title-54c56285.js";import"./subtitle-fd265a16.js";import"./paragraphs-81eb5bec.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";import"./badge-421f58ed.js";import"./doodles-b547f457.js";import"./text-area-1fc051a4.js";import"./tooltip-49cecdc0.js";import"./short-appointment-72ccf319.js";import"./paragraphs.styled-e351ea7a.js";import"./guests-appointment-f0e8a51f.js";const w=a.ul`
  padding: 1.5rem;
  text-align: center;

  h2 {
    color: ${e=>e.theme.color.contrasts.mediumContrast};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.875rem;
    padding-bottom: 1.5rem;
  }

  li {
    padding-bottom: 1.5rem;

    h3 {
      color: ${e=>e.theme.color.contrasts.mediumContrast};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 125%;
      padding-bottom: 0.5rem;
    }

    p {
      color: ${e=>e.theme.color.contrasts.lowContrast};
      font-weight: 600;
      font-size: 1rem;
      line-height: 150%;
    }
  }

  button {
    margin: 0 auto;
  }
`;function d({interviews:e,index:i,onClick:r}){return t(u,{children:m(w,{"data-testid":"ScheduleCard",children:[m("h2",{children:["Option #",i+1]}),e.schedules.map((n,l)=>m("li",{children:[t("h3",{children:n.title}),t("p",{children:n.interviewerName}),t("p",{children:n.scheduleTime})]},l)),t(p,{icon:"CalendarIcon",onClick:r,children:"Schedule"})]})})}o(d,"ScheduleCard");try{d.displayName="ScheduleCard",d.__docgenInfo={description:"",displayName:"ScheduleCard",props:{interviews:{defaultValue:null,description:"",name:"interviews",required:!0,type:{name:"InterviewOption"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const h=a.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;

  div {
    padding: 0;
  }
`;function s({interviewOptions:e,onClick:i}){return t(h,{"data-testid":"InterviewTimes",children:e.map((r,n)=>t(d,{interviews:r,index:n,onClick:i},r.id))})}o(s,"InterviewTimes");try{s.displayName="InterviewTimes",s.__docgenInfo={description:"",displayName:"InterviewTimes",props:{interviewOptions:{defaultValue:null,description:"",name:"interviewOptions",required:!0,type:{name:"InterviewOption[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const v=[{id:1,schedules:[{title:"UX Interview",interviewerName:"Robson Lopes",scheduleTime:"10:15 - 10:45"},{title:"UI Interview",interviewerName:"Henrique Bittencourt",scheduleTime:"10:45 - 11:30"}]},{id:2,schedules:[{title:"UX Interview",interviewerName:"Robson Lopes",scheduleTime:"10:15 - 10:45"},{title:"UI Interview",interviewerName:"Henrique Bittencourt",scheduleTime:"10:45 - 11:30"}]}],R={component:s,title:"Components/InterviewTimes",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { InterviewTimes } from './interviewTimes';
import { InterviewOption, InterviewTimesProps } from './types';

const interviews: InterviewOption[] = [
  {
    id: 1,
    schedules: [
      {
        title: \`UX Interview\`,
        interviewerName: \`Robson Lopes\`,
        scheduleTime: '10:15 - 10:45',
      },
      {
        title: \`UI Interview\`,
        interviewerName: \`Henrique Bittencourt\`,
        scheduleTime: '10:45 - 11:30',
      },
    ],
  },
  {
    id: 2,
    schedules: [
      {
        title: \`UX Interview\`,
        interviewerName: \`Robson Lopes\`,
        scheduleTime: '10:15 - 10:45',
      },
      {
        title: \`UI Interview\`,
        interviewerName: \`Henrique Bittencourt\`,
        scheduleTime: '10:45 - 11:30',
      },
    ],
  },
];

export default {
  component: InterviewTimes,
  title: 'Components/InterviewTimes',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Schedule Card ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1',
              description: 'This is the Figma of Schedule Card',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<InterviewTimesProps> = (args) => {
  return <InterviewTimes {...args} />;
};

export const InterviewTimesStory = Template.bind({});
InterviewTimesStory.args = {
  interviewOptions: interviews,
};
`,locationsMap:{"interview-times-story":{startLoc:{col:45,line:59},endLoc:{col:1,line:61},startBody:{col:45,line:59},endBody:{col:1,line:61}}}},relatedLinks:{sections:[{title:"Figma",links:[{text:"Schedule Card ",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1",description:"This is the Figma of Schedule Card"}]}]}}},I=o(e=>t(s,{...e}),"Template"),y=I.bind({});y.args={interviewOptions:v};const z=["InterviewTimesStory"];export{y as InterviewTimesStory,z as __namedExportsOrder,R as default};
//# sourceMappingURL=interviewTimes.stories-9665aa6f.js.map
