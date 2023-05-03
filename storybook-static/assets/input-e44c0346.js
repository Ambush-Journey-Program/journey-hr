var x=Object.defineProperty;var o=(e,t)=>x(e,"name",{value:t,configurable:!0});import{C as l,H as a,j as i,a as n}from"./styled-components.browser.esm-017417a4.js";import{r as C}from"./index-86ac2416.js";import{P as $}from"./paragraphs-81eb5bec.js";const w=l`
  background-color: ${e=>e.theme.color.brandColors.light};
`,k=l`
  display: block;
  margin-top: 4px;

  & input::placeholder {
    color: ${e=>e.theme.color.auxiliary.error};
    border-color: red;
  }

  & input:active {
    border-color: red;
  }
`,v=l`
  color: ${e=>e.theme.color.auxiliary.error};
  border: ${e=>`1px solid ${e.theme.color.auxiliary.error}`};
`,I=a.div`
  ${({error:e})=>e&&k}
`,_=a.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 150%;
  color: ${e=>e.theme.color.contrasts.mediumContrast};

  span {
    color: ${e=>e.theme.color.contrasts.lowContrast};
  }
`;a.label`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
`;const z=a.div`
  display: flex;
  align-items: center;
  height: 3.25rem;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  color: ${e=>e.theme.color.contrasts.highContrast};
  border: 1px solid ${e=>e.theme.color.contrasts.lowestContrast};
  border-radius: 0.75rem;
  padding-left: 1.25rem;
  margin-top: 0.25rem;
  ${({error:e})=>e&&v}
  ${({disabled:e})=>e&&w};

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${e=>e.theme.color.contrasts.mediumContrast};
    border: 1px solid ${e=>e.theme.color.brandColors.purple};
  }

  & input {
    width: calc(100% - 1rem);
    font-size: 1rem;
    border: none;
    outline: none;
    color: ${e=>e.touched?e.theme.color.contrasts.highContrast:e.theme.color.contrasts.lowestContrast};

    background-position: calc(100% - 0.625rem) center;
    background-size: 1.25em;
    background-repeat: no-repeat;
    &::placeholder {
      color: ${e=>e.theme.color.contrasts.lowestContrast};
    }
  }
  & input::-webkit-calendar-picker-indicator {
    background: transparent;
    background-position: calc(100% - 0.625rem) center;
  }

  & input[type='date'] {
    background-image: url('src/design-system/input/assets/calendar-day.svg');
  }
`;function c({label:e,required:t,value:d,disabled:s,readOnly:p,error:r,type:m="text",name:u,onTextChange:h=o(()=>{},"onTextChange")}){const[g,f]=C.useState(!1);function b(y){h(y.target.value),f(!0)}return o(b,"onInputChange"),i(I,{error:r,children:[i(_,{htmlFor:u,children:[e," ",t&&n("span",{children:"Required"})]}),n(z,{error:r,disabled:s,touched:g,children:n("input",{type:m,placeholder:"Label",required:t,disabled:s,readOnly:p,value:d,onChange:b,"data-testid":"input-test"})}),!!r&&n($,{size:"extrasmall",fontWeight:"light",colorVariant:"red",children:r})]})}o(c,"Input");try{c.displayName="Input",c.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},onTextChange:{defaultValue:{value:"() => {}"},description:"",name:"onTextChange",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}export{c as I};
//# sourceMappingURL=input-e44c0346.js.map
