var l=Object.defineProperty;var n=(e,i)=>l(e,"name",{value:i,configurable:!0});import{H as o,j as a,a as r}from"./styled-components.browser.esm-017417a4.js";import{P as m}from"./paragraphs.styled-e351ea7a.js";import{d as t}from"./devices-01550430.js";const s=o.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  border-radius: 0.625rem;
  width: 100%;
  background-color: ${e=>e.theme.color.contrasts.lightContrast};

  @media ${t.tabletLarge}, ${t.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${t.desktop} {
    padding-bottom: 1.25rem;
  }
`,p=o.div`
  word-break: break-word;
`,c=o.div`
  margin-top: 0.375rem;
  margin-bottom: 1.125rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.406rem;
  font-family: ${e=>e.theme.font.fontFamilyTitle};
  color: ${e=>e.theme.color.contrasts.highContrast};

  @media ${t.tabletLarge}, ${t.desktop} {
    font-size: 1.25rem;
    line-height: 1.563rem;
  }
`,h=o.div`
  margin-top: 0.375rem;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.688rem;
  font-family: ${e=>e.theme.font.fontFamilyBody};
  color: ${e=>e.theme.color.contrasts.mediumContrast};

  @media ${t.desktop} {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;function d({appointment:e,date:i}){return a(s,{children:[a(p,{children:[r(m,{fontWeight:"hair",size:"small",colorVariant:"dark",children:"Name of the event"}),r(c,{children:e})]}),a("div",{children:[r(m,{fontWeight:"hair",size:"small",colorVariant:"dark",children:"Date:"}),r(h,{children:i})]})]})}n(d,"ShortHappyHour");try{d.displayName="ShortHappyHour",d.__docgenInfo={description:"",displayName:"ShortHappyHour",props:{appointment:{defaultValue:null,description:"",name:"appointment",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}}}catch{}export{d as S};
//# sourceMappingURL=short-appointment-72ccf319.js.map
