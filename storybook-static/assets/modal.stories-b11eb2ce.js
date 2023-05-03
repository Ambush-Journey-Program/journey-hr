var f=Object.defineProperty;var i=(t,n)=>f(t,"name",{value:n,configurable:!0});import{H as o,j as r,a as e}from"./styled-components.browser.esm-017417a4.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import{B as a}from"./button-c8f1e04e.js";import"./cardWrapper-4210e8b5.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import"./select-input-ec4b04ef.js";import{T as g}from"./title-54c56285.js";import"./subtitle-fd265a16.js";import"./paragraphs-81eb5bec.js";import{r as x}from"./index-86ac2416.js";import"./devices-01550430.js";import"./badge-421f58ed.js";import"./doodles-b547f457.js";import"./text-area-1fc051a4.js";import"./tooltip-49cecdc0.js";import"./short-appointment-72ccf319.js";import"./paragraphs.styled-e351ea7a.js";import"./guests-appointment-f0e8a51f.js";import"./iframe-e52d0cbe.js";const y=o.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(231 222 209 / 50%);
  z-index: 100;
  border: none;
`,h=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  background-size: cover;
  padding: 20px;
`,M=o.div`
  min-width: 30rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding-top: 5.6875rem;
  padding-bottom: 3.0625rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  background-color: ${t=>t.theme.color.auxiliary.white};
  border-radius: 1.5625rem;

  .closeButton {
    position: absolute;
    top: 15px;
    padding-top: 1.375rem;
    align-self: flex-end;
    background-color: transparent;

    svg {
      color: ${t=>t.theme.color.button.secondaryHover};
      width: 1.1875rem;
      height: 1.1875rem;
    }
  }
`,b=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
`,B=o.div`
  line-height: 27px;
  padding: 0 2.6875rem;
  text-align: center;
`,C=o.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 0;

  > * + * {
    margin-left: 2rem;
  }
`;function l({onConfirm:t,onClose:n,title:c,children:m,cancelButtonText:p,confirmButtonText:u}){return x.useEffect(()=>{const d=i(s=>{s.target instanceof Element&&(s.target.closest("#modal")||n())},"onClickOutside");return window.addEventListener("click",d,!0),()=>{window.removeEventListener("click",d,!0)}},[]),r(h,{children:[r(M,{id:"modal",role:"dialog",children:[e(a,{className:"closeButton",color:"secondary",icon:"XMarkIcon",onClick:n,"aria-label":"Close Button"}),r(b,{children:[e(g,{variant:"h2",children:c}),e(B,{children:m})]}),r(C,{children:[e(a,{variant:"outlined",color:"secondary",onClick:n,children:p}),e(a,{onClick:t,children:u})]})]}),e(y,{tabIndex:-1,"aria-hidden":"true"})]})}i(l,"Modal");try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},cancelButtonText:{defaultValue:null,description:"",name:"cancelButtonText",required:!0,type:{name:"string"}},confirmButtonText:{defaultValue:null,description:"",name:"confirmButtonText",required:!0,type:{name:"string"}}}}}catch{}const R={component:l,title:"Components/Modal",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Modal } from './modal';
import { ModalProps } from './types';

export default {
  component: Modal,
  title: 'Components/Modal',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Modal ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1',
              description: 'This is the Figma of Modal',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  return <Modal {...args} />;
};

export const ModalStory = Template.bind({});
ModalStory.args = {
  onConfirm: () => {},
  isOpen: true,
  onClose: () => {},
  title: 'Modal Title',
  children: 'Modal description',
  cancelButtonText: 'Cancel Button',
  confirmButtonText: 'Confirm Button',
};
`,locationsMap:{"modal-story":{startLoc:{col:36,line:26},endLoc:{col:1,line:28},startBody:{col:36,line:26},endBody:{col:1,line:28}}}},relatedLinks:{sections:[{title:"Figma",links:[{text:"Modal ",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1",description:"This is the Figma of Modal"}]}]}}},T=i(t=>e(l,{...t}),"Template"),k=T.bind({});k.args={onConfirm:()=>{},isOpen:!0,onClose:()=>{},title:"Modal Title",children:"Modal description",cancelButtonText:"Cancel Button",confirmButtonText:"Confirm Button"};const U=["ModalStory"];export{k as ModalStory,U as __namedExportsOrder,R as default};
//# sourceMappingURL=modal.stories-b11eb2ce.js.map
