var p=Object.defineProperty;var o=(e,t)=>p(e,"name",{value:t,configurable:!0});import{C as h,H as a,j as f,a as r}from"./styled-components.browser.esm-017417a4.js";import{P as g}from"./paragraphs.styled-e351ea7a.js";const i=h`
  p,
  p:hover {
    color: ${e=>e.theme.color.contrasts.lowestContrast};
  }
`,b=a.div`
  display: flex;
  margin-bottom: 1rem;
  cursor: pointer;
  accent-color: ${e=>e.theme.color.contrasts.highContrast};
  &:hover {
    accent-color: ${e=>e.theme.color.button.secondaryHover};
  }
  &:disabled {
    accent-color: ${e=>e.theme.color.contrasts.lowestContrast};
  }
  p:hover {
    color: ${e=>e.theme.color.button.secondaryHover};
  }
  ${({disabled:e})=>e&&i};
`,y=a.input`
  display: flex;
  margin: 0rem;
  margin-right: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
`,v=a.label`
  color: ${e=>e.theme.color.contrasts.highContrast};
  ${({disabled:e})=>e&&i};
`,C=a(g)``;function l({value:e,fontWeight:t="hair",disabled:n=!1,defaultChecked:s=!1,label:c,name:d}){function u(m){console.log(m.target.value)}return o(u,"optionChange"),f(b,{children:[r(y,{type:"radio",name:d,id:e,value:e,defaultChecked:s,onChange:u,disabled:n}),r(v,{htmlFor:e,disabled:n,children:r(C,{colorVariant:"dark",size:"medium",fontWeight:t,children:c})})]})}o(l,"RadioButton");try{l.displayName="RadioButton",l.__docgenInfo={description:"",displayName:"RadioButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},fontWeight:{defaultValue:{value:"hair"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"hair"'},{value:'"semibold"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}export{l as R};
//# sourceMappingURL=radio-button-53cb0ed9.js.map
