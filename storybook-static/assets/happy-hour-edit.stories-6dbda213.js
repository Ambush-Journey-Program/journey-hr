var B=Object.defineProperty;var a=(e,d)=>B(e,"name",{value:d,configurable:!0});import{H as n,a as i,j as g}from"./styled-components.browser.esm-017417a4.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import{B as E}from"./button-c8f1e04e.js";import{C as D}from"./cardWrapper-4210e8b5.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import{S as P}from"./select-input-ec4b04ef.js";import"./title-54c56285.js";import"./subtitle-fd265a16.js";import{P as T}from"./paragraphs-81eb5bec.js";import{d as o}from"./devices-01550430.js";import{E as x,G as V}from"./const-45365122.js";import{r as m}from"./index-86ac2416.js";import"./badge-421f58ed.js";import"./doodles-b547f457.js";import"./text-area-1fc051a4.js";import"./tooltip-49cecdc0.js";import"./short-appointment-72ccf319.js";import"./paragraphs.styled-e351ea7a.js";import"./guests-appointment-f0e8a51f.js";import"./iframe-e52d0cbe.js";const G=n.div`
  margin: 20px 0px 28px 0px;
`,H=n.div`
  display: flex;
  justify-content: left;
  margin-bottom: 6px;
`,j=n.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  @media ${o.tablet}, ${o.tabletLarge}, ${o.desktop} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`,z=n(E)`
  margin-top: 16px;
  &:focus {
    max-height: 80%;
  }
  @media ${o.tablet} {
    margin-left: 16px;
    margin-top: 8px;
  }
`,M=n.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 22.5px;
  font-family: ${e=>e.theme.font.fontFamilyTitle};
  color: ${e=>e.theme.color.contrasts.highContrast};

  @media ${o.tablet} {
    font-size: 20px;
    line-height: 25px;
  }
  @media ${o.desktop} {
    font-size: 24px;
    line-height: 30px;
  }
`,q=n.div`
  margin-top: 18px;

  @media ${o.tablet} {
    display: flex;
    width: auto;
    justify-content: flex-end;
  }
`,N=n(E)`
  @media ${o.mobile} {
    width: 100%;
  }
`;n.span`
  display: block;
  margin-top: 0.25rem;
  line-height: 1.125rem;
`;n.select`
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${e=>e.theme.color.contrasts.mediumContrast};
    border: 0.063rem solid ${e=>e.theme.color.brandColors.purple};
  }
`;function l({minGuests:e=8,maxGuests:d=15}){const[c,b]=m.useState(""),[r,u]=m.useState([]),[S,h]=m.useState(""),f=x.filter(t=>!r.includes(t.guest.id)),w=x.filter(t=>r.includes(t.guest.id)),v=f.map(t=>({value:t.guest.id,label:t.guest.name}));function $(){var p;const t=(p=f.find(s=>s.guest.id===c))==null?void 0:p.guest.id;if(t){const s=[...r,t],k=y(s);u(s),h(k)}}a($,"handleIncrease");function C(t){u(p=>p.filter(s=>s!==t))}a(C,"handleDelete");function I(){const t=y(r);h(t),!t&&console.log("Scheduled!")}a(I,"handleOnClick");function y(t){return e>t.length?`Minimum guests must be greater than  ${e-1}.`:d===t.length?"People limit reached.":""}a(y,"getError");const L=r.length>=d,_=r.length<=e;return i(D,{children:g(G,{children:[i(H,{children:i(M,{children:"Group Names"})}),i(H,{children:i(T,{fontWeight:"semihair",size:"medium",colorVariant:"dark",children:`(${r.length} / ${d} People)`})}),g(j,{children:[i(P,{name:"guest",placeholder:"Select a name",options:v,required:!0,id:c,handleSelect:b,warn:S}),i(z,{variant:"ghost",icon:"PlusIcon",color:"secondary",onClick:$,disabled:L,children:"Add Name"})]}),i(V,{guestsList:w,onDelete:C}),i(q,{children:i(N,{sizeVariant:"medium",onClick:I,disabled:_,children:"Schedule"})})]})})}a(l,"HappyHourEdit");try{l.displayName="HappyHourEdit",l.__docgenInfo={description:"",displayName:"HappyHourEdit",props:{guestsListData:{defaultValue:null,description:"",name:"guestsListData",required:!0,type:{name:"Guests[]"}},maxGuests:{defaultValue:{value:"15"},description:"",name:"maxGuests",required:!1,type:{name:"number"}},minGuests:{defaultValue:{value:"8"},description:"",name:"minGuests",required:!1,type:{name:"number"}}}}}catch{}const ht={component:l,title:"Components/HappyHourEdit",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { HappyHourEdit } from './happy-hour-edit';
import { HappyHourEditProps } from './types';

export default {
  component: HappyHourEdit,
  title: 'Components/HappyHourEdit',
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

const Template: Story<HappyHourEditProps> = (args) => {
  return (
    <StyledDiv>
      <HappyHourEdit {...args} />
    </StyledDiv>
  );
};

export const HappyHourEditStory = Template.bind({});
`,locationsMap:{"happy-hour-edit-story":{startLoc:{col:44,line:26},endLoc:{col:1,line:32},startBody:{col:44,line:26},endBody:{col:1,line:32}}}}}},O=n.div`
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
`,W=a(e=>i(O,{children:i(l,{...e})}),"Template"),ft=W.bind({}),yt=["HappyHourEditStory"];export{ft as HappyHourEditStory,yt as __namedExportsOrder,ht as default};
//# sourceMappingURL=happy-hour-edit.stories-6dbda213.js.map
