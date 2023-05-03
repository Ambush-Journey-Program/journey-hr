var u=Object.defineProperty;var l=(t,n)=>u(t,"name",{value:n,configurable:!0});import{H as r,C as s,j as i,a as e}from"./styled-components.browser.esm-017417a4.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import{E as y,B as d}from"./button-c8f1e04e.js";import"./cardWrapper-4210e8b5.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import"./select-input-ec4b04ef.js";import{T as h}from"./title-54c56285.js";import{S as p}from"./subtitle-fd265a16.js";import"./paragraphs-81eb5bec.js";import{d as a}from"./devices-01550430.js";import{T as g}from"./tooltip-49cecdc0.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./badge-421f58ed.js";import"./doodles-b547f457.js";import"./text-area-1fc051a4.js";import"./short-appointment-72ccf319.js";import"./paragraphs.styled-e351ea7a.js";import"./guests-appointment-f0e8a51f.js";const x=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${t=>t.theme.color.contrasts.lightContrast};
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;

  @media ${a.mobile} {
    padding: 24px;
  }
`,f=r.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
  gap: 24px;
  width: 100%;
  max-width: 100%;

  @media ${a.mobile} {
    gap: 14px;
  }
`,S=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  gap: 6px;

  @media ${a.tablet} {
    gap: 4px;
  }
`,v={employee:s`
    div {
      display: block;
    }
  `,manager:s`
    div {
      display: none;
    }
  `},b=r.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media ${a.mobile} {
    gap: 6px;
  }

  & .alert {
    width: 1.125rem;
    height: 1.125rem;
    color: ${t=>t.theme.color.brandColors.red};

    path {
      stroke-width: 2px;
      margin-bottom: 0;
    }
  }

  ${({variant:t})=>v[t]}
`,w=r.li`
  display: flex;
  align-items: center;
  gap: 212px;

  @media ${a.tablet} {
    gap: 121px;
  }

  @media ${a.mobile} {
    gap: 14px;
    flex-direction: column;
    align-items: flex-start;
  }
  .divider {
    margin: 2px;
    height: 1px;
    width: 100%;
    background-color: ${t=>t.theme.color.contrasts.lowestContrast};
    display: none;

    @media ${a.mobile} {
      display: block;
    }
  }
  &:last-of-type .divider {
    display: none;
  }
`,k=r.div`
  display: flex;
  gap: 6px;
`,C=[{id:"1",period:"Nov 01 Wed - Nov 15 Wed , 2023",summary:"06 Recharge Days, 1 US Holidays, 1 Optional Holidays"},{id:"2",period:"Jan 01 Mon - Jan 15 Mon, 2024",summary:"06 Recharge Days, 6 US Holidays, 4 Optional Holidays"}];function o({onDelete:t,onEdit:n,variant:c}){return i(x,{"data-testid":"summary",children:[e(h,{variant:"h6",children:"Request Summary"}),e(f,{children:C.map(m=>i(w,{children:[i(S,{children:[i(b,{variant:c,children:[e(p,{variant:"s6",fontWeight:"medium",children:m.period}),e(g,{text:"You need to request your manager to approve this",children:e(y,{className:"alert","data-testid":"Alert"})})]}),e(p,{variant:"s6",fontWeight:"hair",children:m.summary})]}),i(k,{children:[e(d,{color:"alternative",variant:"ghost",sizeVariant:"large","data-testid":"Edit",onClick:n,"aria-label":"Edit Button",icon:"PencilIcon"}),e(d,{color:"primary",variant:"ghost",sizeVariant:"large","data-testid":"Delete",onClick:t,"aria-label":"Delete Button",icon:"TrashIcon"})]}),e("span",{className:"divider"})]},m.id))})]})}l(o,"Summary");try{o.displayName="Summary",o.__docgenInfo={description:"",displayName:"Summary",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"employee"'},{value:'"manager"'}]}}}}}catch{}const Y={component:o,title:"Components/Summary",parameters:{storySource:{source:`
import { Meta, Story } from '@storybook/react';
import { Summary } from './summary';
import { SummaryProps } from './types';

export default {
  component: Summary,
  title: 'Components/Summary',
  parameters: {
    label: 'Summary',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Summary',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1',
              description: 'This is the Figma of the Summary.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<SummaryProps> = (args) => {
  return <Summary {...args} />;
};

export const SummaryStory = Template.bind({});
SummaryStory.args = { variant: 'employee' };
`,locationsMap:{"summary-story":{startLoc:{col:38,line:28},endLoc:{col:1,line:30},startBody:{col:38,line:28},endBody:{col:1,line:30}}}},label:"Summary",relatedLinks:{sections:[{title:"Figma",links:[{text:"Summary",url:"https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1",description:"This is the Figma of the Summary."}]}]}}},E=l(t=>e(o,{...t}),"Template"),_=E.bind({});_.args={variant:"employee"};const K=["SummaryStory"];export{_ as SummaryStory,K as __namedExportsOrder,Y as default};
//# sourceMappingURL=summary.stories-84076efa.js.map
