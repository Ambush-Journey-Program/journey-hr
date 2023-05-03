var $=Object.defineProperty;var i=(e,n)=>$(e,"name",{value:n,configurable:!0});import{H as o,C as u,j as s,a as t}from"./styled-components.browser.esm-017417a4.js";import{r as S}from"./index-86ac2416.js";import{P as c}from"./paragraphs-81eb5bec.js";const v=o.span`
  display: block;
`,d=o.span`
  display: block;
  margin-top: 0.25rem;
  line-height: 1.125rem;
`,C=u`
  color: ${e=>e.theme.color.auxiliary.error};
  border: ${e=>`1px solid ${e.theme.color.auxiliary.error}`};
`,k=u`
  color: ${e=>e.theme.color.auxiliary.whiteDarkMode};
  background-color: ${e=>e.theme.color.contrasts.lightContrast};
`,_=o.div`
  width: 100%;
`,V=o.legend`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 150%;
  color: ${e=>e.theme.color.contrasts.mediumContrast};
`,z=o.select`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.25rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  padding-left: 1.25rem;
  margin-top: 0.25rem;
  padding: 0.875rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('src/design-system/select-input/assets/chevron-down.svg');
  background-position: calc(100% - 1.6em) center;
  background-size: 1.25em;
  background-repeat: no-repeat;
  color: ${e=>e.touched?e.theme.color.contrasts.highContrast:e.theme.color.contrasts.lowestContrast};
  border: 1px solid ${e=>e.theme.color.contrasts.lowestContrast};
  ${({error:e})=>e&&C}
  ${({warn:e})=>e&&k}

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${e=>e.theme.color.contrasts.mediumContrast};
    border: 0.063rem solid ${e=>e.theme.color.brandColors.purple};
  }

  & input {
    outline: none;
    border: none;
  }
`;function p({title:e,options:n,error:a,warn:l,required:m,handleSelect:h,disabled:g,placeholder:f,...y}){function b(r){h(r.target.value),w(!0)}i(b,"handleSelectEvent");const[x,w]=S.useState(!1);return s(_,{children:[s(V,{children:[e,!m&&t(v,{children:"Optional"})]}),s(z,{touched:x,"data-testid":"input-select-test",disabled:g,error:a,warn:l,onChange:b,...y,children:[t("option",{value:"",children:f}),n.map(r=>t("option",{value:r.value,children:r.label},r.value))]}),!!a&&t(d,{children:t(c,{size:"extrasmall",fontWeight:"light",colorVariant:"red",children:a})}),!!l&&t(d,{children:t(c,{size:"extrasmall",fontWeight:"light",colorVariant:"purple",children:l})})]})}i(p,"SelectInput");try{p.displayName="SelectInput",p.__docgenInfo={description:"",displayName:"SelectInput",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},warn:{defaultValue:null,description:"",name:"warn",required:!1,type:{name:"string"}},handleSelect:{defaultValue:null,description:"",name:"handleSelect",required:!0,type:{name:"(selectedValue: string) => void"}}}}}catch{}export{p as S};
//# sourceMappingURL=select-input-ec4b04ef.js.map
