var w=Object.defineProperty;var r=(e,n)=>w(e,"name",{value:n,configurable:!0});import{C as T,H as l,j as f,a as i}from"./styled-components.browser.esm-017417a4.js";import{r as s}from"./index-86ac2416.js";import{P as v}from"./paragraphs-81eb5bec.js";import{d as p}from"./devices-01550430.js";const _=T`
  &:invalid {
    color: ${e=>e.theme.color.auxiliary.error};
    + p {
      display: block;
    }
  }
`,A=l.label`
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
`,q=l.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-width: 18rem;
  color: ${e=>e.theme.color.contrasts.highContrast};
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`,z=l.textarea`
  width: 100%;
  resize: none;
  font-family: 'Mundial', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  border: 1px solid ${e=>e.theme.color.contrasts.lowestContrast};
  border-radius: 0.75rem;
  padding: 0.75rem 1.375rem;
  margin-bottom: 0.25rem;
  color: ${e=>e.theme.color.contrasts.highContrast};

  @media ${p.mobile} {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }

  &::placeholder {
    color: ${e=>e.theme.color.contrasts.lowestContrast};

    @media ${p.mobile} {
      font-size: 0.875rem;
    }
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${e=>e.theme.color.contrasts.mediumContrast};
    border: 1px solid ${e=>e.theme.color.brandColors.purple};
  }
  & + p {
    display: none;
  }
  ${({internalTouched:e})=>e&&_}
`;function g({rows:e=3,spellCheck:n,placeholder:x="Write the description",onTextChange:y=r(()=>{},"onTextChange"),required:m=!1,touched:c=!1,label:a,...o}){const[d,h]=s.useState(!1),[b,u]=s.useState("Description Required");s.useEffect(()=>{h(c)},[c]);function $(t){y(t.target.value),h(!0),C(t.target.value)}r($,"onInputChange");function C(t){if(t.length===0){u("Description Required");return}Boolean(o.minLength)&&o.minLength>=t.length&&u(`Minimal length must be greater than ${o.minLength}`)}return r(C,"handleValidationError"),f(q,{children:[f(A,{htmlFor:`textArea-${a}`,children:[a," ",m&&i("span",{children:"Required"})]}),i(z,{id:`textArea-${a}`,placeholder:x,internalTouched:d,onChange:$,rows:e,spellCheck:n,required:m,...o}),d&&i(v,{size:"extrasmall",fontWeight:"light",colorVariant:"red",children:b})]})}r(g,"TextArea");try{g.displayName="TextArea",g.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},onTextChange:{defaultValue:{value:"() => {}"},description:"",name:"onTextChange",required:!1,type:{name:"((value: string) => void)"}},touched:{defaultValue:{value:"false"},description:"",name:"touched",required:!1,type:{name:"boolean"}}}}}catch{}export{g as T};
//# sourceMappingURL=text-area-1fc051a4.js.map
