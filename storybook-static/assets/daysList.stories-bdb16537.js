var R=Object.defineProperty;var i=(e,a)=>R(e,"name",{value:a,configurable:!0});import{H as d,j as o,a as t}from"./styled-components.browser.esm-017417a4.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import{B as b}from"./button-c8f1e04e.js";import"./cardWrapper-4210e8b5.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import"./select-input-ec4b04ef.js";import{T as V}from"./title-54c56285.js";import{S as _}from"./subtitle-fd265a16.js";import"./paragraphs-81eb5bec.js";import{P as w}from"./paragraphs.styled-e351ea7a.js";import{B as g}from"./badge-421f58ed.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";import"./doodles-b547f457.js";import"./text-area-1fc051a4.js";import"./tooltip-49cecdc0.js";import"./short-appointment-72ccf319.js";import"./guests-appointment-f0e8a51f.js";const L=[{id:"1",name:"teste",date:"Nov 02 Thu, 2023"},{id:"2",name:"teste2",date:"Nov 15 Wed, 2023"},{id:"3",name:"teste3",date:"Nov 23 Thu, 2023"}],D=[{id:"1",dateRange:"Nov 02 Thu, 2023 - Nov 15 Wed, 2023",badge:"teste"},{id:"2",dateRange:"Nov 15 Wed, 2023",badge:"teste2"},{id:"3",dateRange:"Nov 15 Wed, 2023 - Nov 23 Thu, 2023",badge:"teste3"}],H=[{id:"1",name:"teste",dateRange:"Nov 02 Thu, 2023 - Nov 15 Wed, 2023",badge:"teste"},{id:"2",name:"teste2",dateRange:"Nov 15 Wed, 2023",badge:"teste2"},{id:"3",name:"teste3",dateRange:"Nov 15 Wed, 2023 - Nov 23 Thu, 2023",badge:"teste3"}],m=d.ul`
  h5 {
    padding-bottom: 2rem;
  }
`;try{m.displayName="ListWrapper",m.__docgenInfo={description:"",displayName:"ListWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function r({title:e,buttonTitle:a,list:s,renderRow:n}){return o(m,{"data-testid":e,children:[t(V,{variant:"h5",children:e}),s.map(T=>n(T)),t(b,{variant:"ghost",children:a})]})}i(r,"DaysLists");try{r.displayName="DaysLists",r.__docgenInfo={description:"",displayName:"DaysLists",props:{storyType:{defaultValue:null,description:"",name:"storyType",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!0,type:{name:"string"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"HolidaysList[] | TimeOffList[] | TeamCalendarList[]"}},renderRow:{defaultValue:null,description:"",name:"renderRow",required:!0,type:{name:"(details: HolidaysList | TimeOffList | TeamCalendarList) => Element"}}}}}catch{}const p=d.li`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;

  p {
    width: fit-content;
    align-self: center;
  }

  div {
    margin-left: 1rem;
  }
`;try{p.displayName="TimeOffRow",p.__docgenInfo={description:"",displayName:"TimeOffRow",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function u({details:e}){return o(p,{children:[t(w,{size:"medium",colorVariant:"dark",fontWeight:"hair",children:e.dateRange}),t(g,{text:e.badge})]},e.id)}i(u,"TimeOffRow");try{u.displayName="TimeOffRow",u.__docgenInfo={description:"",displayName:"TimeOffRow",props:{details:{defaultValue:null,description:"",name:"details",required:!0,type:{name:"TimeOffList"}}}}}catch{}const f=d.li`
  padding-bottom: 1.5rem;
  line-height: 27px;
`;try{f.displayName="HolidayRow",f.__docgenInfo={description:"",displayName:"HolidayRow",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function l({details:e}){return o(f,{children:[t(_,{variant:"s4",fontWeight:"regular",children:e.name}),t(w,{size:"medium",colorVariant:"dark",fontWeight:"hair",children:e.date})]},e.id)}i(l,"HolidayRow");try{l.displayName="HolidayRow",l.__docgenInfo={description:"",displayName:"HolidayRow",props:{details:{defaultValue:null,description:"",name:"details",required:!0,type:{name:"HolidaysList"}}}}}catch{}const c=d.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
`,y=d.div`
  display: flex;
  flex-direction: row;

  p {
    align-self: center;
  }
`;try{c.displayName="TeamCalendarRow",c.__docgenInfo={description:"",displayName:"TeamCalendarRow",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{y.displayName="DateValidation",y.__docgenInfo={description:"",displayName:"DateValidation",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function h({details:e}){return o(c,{children:[t(_,{variant:"s4",fontWeight:"regular",children:e.name}),o(y,{children:[t(w,{size:"medium",colorVariant:"dark",fontWeight:"hair",children:e.dateRange}),t(g,{text:e.badge})]})]},e.id)}i(h,"TeamCalendarRow");try{h.displayName="TeamCalendarRow",h.__docgenInfo={description:"",displayName:"TeamCalendarRow",props:{details:{defaultValue:null,description:"",name:"details",required:!0,type:{name:"TeamCalendarList"}}}}}catch{}const Y={component:r,title:"Components/DaysLists",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { teamCalendar, holidays, timeOff } from './mockLists';
import { DaysLists } from './daysLists';
import {
  DaysListsProps,
  TimeOffList,
  HolidaysList,
  TeamCalendarList,
} from './types';
import { TimeOffRow } from './daysListsRow/TimeOffRow';
import { HolidayRow } from './daysListsRow/HolidayRow';
import { TeamCalendarRow } from './daysListsRow/TeamCalendarRow';


export default {
  component: DaysLists,
  title: 'Components/DaysLists',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'DaysLists ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1',
              description: 'This is the Figma of DaysLists',
            },
          ],
        },
      ],
    },
  },
  argTypes: {
    renderRow: {
      description:
        'renderRow: Is a callback function that received the details from the current iteration as argument<br/>Details: is the argument for the callback function<br/>RowComponent: is the component that will mount the current row<br/>Type: the type of the array that will be rendered<br/><br/> \`renderRow={(<details>) => (<RowComponent> as <type>)}\`<br/><br/>',
    },
    storyType: {
      options: ['holidays', 'timeOff', 'teamCalendar'],
      control: {
        type: \`select\`,
      },
    },
  },
} as Meta;

const Template: Story<DaysListsProps> = (args) => {
  const { storyType, ...rest } = args;

  if (storyType === 'holidays') {
    return (
      <DaysLists
        {...rest}
        list={holidays}
        renderRow={(details) => (
          <HolidayRow details={details as HolidaysList} />
        )}
      />
    );
  } else if (storyType === 'timeOff') {
    return (
      <DaysLists
        {...rest}
        list={timeOff}
        renderRow={(details) => <TimeOffRow details={details as TimeOffList} />}
      />
    );
  } else if (storyType === 'teamCalendar') {
    return (
      <DaysLists
        {...rest}
        list={teamCalendar}
        renderRow={(details) => (
          <TeamCalendarRow details={details as TeamCalendarList} />
        )}
      />
    );
  }
  return <DaysLists {...args} />;
};

export const DaysListsStory = Template.bind({});
DaysListsStory.args = {
  title: 'Holidays Calendar',
  buttonTitle: 'View Holidays calendar',
  list: holidays,
  renderRow: (details) => <HolidayRow details={details as HolidaysList} />,
};
`,locationsMap:{"days-lists-story":{startLoc:{col:40,line:48},endLoc:{col:1,line:81},startBody:{col:40,line:48},endBody:{col:1,line:81}}}},relatedLinks:{sections:[{title:"Figma",links:[{text:"DaysLists ",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1",description:"This is the Figma of DaysLists"}]}]}},argTypes:{renderRow:{description:"renderRow: Is a callback function that received the details from the current iteration as argument<br/>Details: is the argument for the callback function<br/>RowComponent: is the component that will mount the current row<br/>Type: the type of the array that will be rendered<br/><br/> `renderRow={(<details>) => (<RowComponent> as <type>)}`<br/><br/>"},storyType:{options:["holidays","timeOff","teamCalendar"],control:{type:"select"}}}},N=i(e=>{const{storyType:a,...s}=e;return a==="holidays"?t(r,{...s,list:L,renderRow:n=>t(l,{details:n})}):a==="timeOff"?t(r,{...s,list:D,renderRow:n=>t(u,{details:n})}):a==="teamCalendar"?t(r,{...s,list:H,renderRow:n=>t(h,{details:n})}):t(r,{...e})},"Template"),O=N.bind({});O.args={title:"Holidays Calendar",buttonTitle:"View Holidays calendar",list:L,renderRow:e=>t(l,{details:e})};const Z=["DaysListsStory"];export{O as DaysListsStory,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=daysList.stories-bdb16537.js.map
