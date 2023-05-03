var p=Object.defineProperty;var a=(e,o)=>p(e,"name",{value:o,configurable:!0});import{C as s,H as t,j as n,a as r}from"./styled-components.browser.esm-017417a4.js";import"./index-86ac2416.js";import"./title-54c56285.js";import"./subtitle-fd265a16.js";import{P as d}from"./paragraphs-81eb5bec.js";const i="/assets/checked-37f4d76c.svg",m="/assets/checkedHover-501b70aa.svg",f=s`
  background-color: ${e=>e.theme.color.button.disabled};
  border: solid ${e=>e.theme.color.button.disabled};

  &:checked,
  :checked:hover {
    border: ${e=>e.theme.color.button.disabled};
    content: url('${i}');
    filter: grayscale(0.8) brightness(2.4);
  }

  &:hover {
    color: ${e=>e.theme.color.button.disabled};
    border: ${e=>e.theme.color.button.disabled};
  }
  cursor: not-allowed;
`,g=s`
  p {
    color: ${e=>e.theme.color.button.disabled};
  }
  &:hover {
    color: ${e=>e.theme.color.button.disabled};
    p {
      color: ${e=>e.theme.color.button.disabled};
    }
  }
  cursor: not-allowed;
`,v=t.label`
  gap: 10px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;

  &:hover {
    p {
      color: ${e=>e.theme.color.button.secondaryHover};
    }
  }

  ${({disabled:e})=>e&&g};
`,k=t.input`
  background-color: ${e=>e.theme.color.brandColors.white};
  appearance: none;
  display: block;
  width: 20px;
  height: 20px;
  border: 3px solid ${e=>e.theme.color.contrasts.highContrast};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border-color: ${e=>e.theme.color.button.secondaryHover};
  }

  &:checked {
    background: none;
    border: none;
    content: url('${i}');
  }
  &:checked:hover {
    content: url('${m}');
  }
  &:hover {
    border-color: ${e=>e.theme.color.button.secondaryHover};
  }

  ${({disabled:e})=>e&&f};
`,x=t.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;function c({onChange:e,isChecked:o,disabled:l=!1,label:h,description:u,labelFontWeight:b="semibold"}){return n(v,{disabled:l,children:[r(k,{"data-testid":"checkbox-test",onChange:e,type:"checkbox",checked:o,disabled:l}),n(x,{children:[r(d,{size:"default",fontWeight:b,children:h}),r(d,{size:"default",fontWeight:"semihair",children:u})]})]})}a(c,"CheckBox");try{c.displayName="CheckBox",c.__docgenInfo={description:"",displayName:"CheckBox",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(() => void) & ChangeEventHandler<HTMLInputElement>"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},labelFontWeight:{defaultValue:{value:"semibold"},description:"",name:"labelFontWeight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"semibold"'}]}}}}}catch{}export{c as C};
//# sourceMappingURL=checkbox-f95c08ba.js.map
