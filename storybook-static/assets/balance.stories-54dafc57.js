var x=Object.defineProperty;var p=(t,l)=>x(t,"name",{value:l,configurable:!0});import{H as i,j as n,a as e}from"./styled-components.browser.esm-017417a4.js";import{A as B}from"./avatar-7d72cb7f.js";import"./index-215b3469.js";import{B as C}from"./button-c8f1e04e.js";import"./cardWrapper-4210e8b5.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import"./select-input-ec4b04ef.js";import"./title-54c56285.js";import{S as r}from"./subtitle-fd265a16.js";import{P as s}from"./paragraphs-81eb5bec.js";import{d as a}from"./devices-01550430.js";import{r as S}from"./index-86ac2416.js";import"./badge-421f58ed.js";import"./doodles-b547f457.js";import"./text-area-1fc051a4.js";import"./tooltip-49cecdc0.js";import"./short-appointment-72ccf319.js";import"./paragraphs.styled-e351ea7a.js";import"./guests-appointment-f0e8a51f.js";import"./iframe-e52d0cbe.js";const A=i.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 27px;
  padding: 24px;
  margin: 20px;
  border-radius: 10px;
  background-color: ${t=>t.theme.color.contrasts.lightContrast};

  @media ${a.mobile} {
    padding: 20px;
  }
  @media ${a.tablet} {
    gap: 48px;
  }
  @media ${a.tabletLarge} {
    gap: 32px;
  }
`,u=i.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;
  @media ${a.mobile} {
    flex-direction: column;
    align-items: start;
  }
`,D=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 0;
`,d=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,W=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 42px;

  @media ${a.mobile} {
    span {
      display: none;
    }
    gap: 24px;
  }
  @media ${a.desktop} {
    display: flex;
  }
`,T=i.hr`
  border: 1px solid ${t=>t.theme.color.contrasts.lowestContrast};
  margin-bottom: 0;
  padding-bottom: 0;
  @media ${a.mobile} {
    gap: 24px;
  }
  @media ${a.mobile}, ${a.tablet}, ${a.tabletLarge} {
    display: none;
  }
  @media ${a.desktop} {
    display: block;
  }
`,$=i(C)`
  align-items: center;
  width: 160px;
  height: 40px;
  @media ${a.mobile} {
    width: 100%;
  }
`,g=[{value:"1",label:"Nicoli Rodrigues",avatar:"src/design-system/avatar/User-Photo.png"},{value:"2",label:"Caio Caixão",avatar:"src/design-system/avatar/User-Photo.png"},{value:"3",label:"Dan Donatello",avatar:""}];function c({employees:t=g,buttonClick:l,buttonText:f,isAdmin:b=!1,availableDays:o}){const[m]=S.useState(t[0]),h=o<0,v=o===1||o===-1?"day":"days";return n(A,{children:[b?n(u,{children:[t.length>=1&&n(D,{children:[m.avatar&&e(B,{src:m.avatar,sizeVariant:"small"}),e(r,{variant:"s4",fontWeight:"medium",children:m.label})]}),l&&e($,{onClick:l,variant:"outlined",color:"alternative",sizeVariant:"small",children:f})]}):e(u,{children:e(r,{variant:"s4",fontWeight:"medium",children:"Your Current Balance"})}),n(W,{children:[n(d,{"data-testid":"rechargeDays",children:[e(r,{variant:"s6",fontWeight:"regular",children:"Recharge Days"}),n(s,{size:"extralarge",fontWeight:"semibold",colorVariant:h?"error":"dark",children:[o.toString()," ",v,e("span",{children:" available"})]})]}),n(d,{children:[e(r,{variant:"s6",fontWeight:"regular",children:"Consumed"}),e(s,{size:"extralarge",fontWeight:"semibold",children:"0 days"})]}),n(d,{children:[e(r,{variant:"s6",fontWeight:"regular",children:"Next Refill"}),e(s,{size:"extralarge",fontWeight:"semibold",children:"Mar 24, 2024"})]}),e(T,{}),n(d,{children:[e(r,{variant:"s6",fontWeight:"regular",children:"Optional Holidays"}),e(s,{size:"extralarge",fontWeight:"semibold",children:"0/4 used"})]})]})]})}p(c,"Balance");try{c.displayName="Balance",c.__docgenInfo={description:"",displayName:"Balance",props:{buttonClick:{defaultValue:null,description:"",name:"buttonClick",required:!1,type:{name:"(() => void)"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},employees:{defaultValue:{value:`[
  {
    value: '1',
    label: 'Nicoli Rodrigues',
    avatar: 'src/design-system/avatar/User-Photo.png',
  },
  {
    value: '2',
    label: 'Caio Caixão',
    avatar: 'src/design-system/avatar/User-Photo.png',
  },

  {
    value: '3',
    label: 'Dan Donatello',
    avatar: '',
  },
]`},description:"",name:"employees",required:!1,type:{name:"Employees"}},isAdmin:{defaultValue:{value:"false"},description:"",name:"isAdmin",required:!1,type:{name:"boolean"}},availableDays:{defaultValue:null,description:"",name:"availableDays",required:!0,type:{name:"number"}}}}}catch{}const ee={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';

import { Balance } from './balance';
import { employees } from './mocking/holidays';

export default {
  component: Balance,
  title: 'Components/Balance',
} as Meta;

const Template: Story = (args) => {
  return (
    <Balance
      availableDays={0}
      isAdmin={false}
      employees={employees}
      {...args}
    />
  );
};

export const BalanceStoryWithCTA = Template.bind({});
BalanceStoryWithCTA.args = {
  buttonText: 'View Time Off',
  isAdmin: true,
  buttonClick: () => {},
  availableDays: -1,
};

export const BalanceStory = Template.bind({});
BalanceStory.args = {
  isAdmin: true,
  availableDays: 20,
};
`,locationsMap:{"balance-story-with-cta":{startLoc:{col:24,line:11},endLoc:{col:1,line:20},startBody:{col:24,line:11},endBody:{col:1,line:20}},"balance-story":{startLoc:{col:24,line:11},endLoc:{col:1,line:20},startBody:{col:24,line:11},endBody:{col:1,line:20}}}}},component:c,title:"Components/Balance"},y=p(t=>e(c,{availableDays:0,isAdmin:!1,employees:g,...t}),"Template"),k=y.bind({});k.args={buttonText:"View Time Off",isAdmin:!0,buttonClick:()=>{},availableDays:-1};const V=y.bind({});V.args={isAdmin:!0,availableDays:20};const ae=["BalanceStoryWithCTA","BalanceStory"];export{V as BalanceStory,k as BalanceStoryWithCTA,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=balance.stories-54dafc57.js.map
