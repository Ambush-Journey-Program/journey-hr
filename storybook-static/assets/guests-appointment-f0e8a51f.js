var l=Object.defineProperty;var i=(e,o)=>l(e,"name",{value:o,configurable:!0});import{H as r,j as n,a}from"./styled-components.browser.esm-017417a4.js";import{d as t}from"./devices-01550430.js";const d=r.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.625rem;
  background-color: ${e=>e.theme.color.contrasts.lightContrast};

  @media ${t.desktop} {
    padding-bottom: 1.25rem;
  }
`,p=r.div`
  margin-top: 0.5rem;
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
`,c=r.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0.375rem;

  li {
    padding-bottom: 0.25rem;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.688rem;
    word-break: break-word;
    font-family: ${e=>e.theme.font.fontFamilyBody};
    color: ${e=>e.theme.color.contrasts.mediumContrast};
  }
  @media ${t.tablet}, ${t.tabletLarge}, ${t.desktop} {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.938rem;
  }
`;function m({guests:e}){return n(d,{children:[n(p,{children:["Group of ",e.length]}),a(c,{children:e.map((o,s)=>a("li",{children:o},s))})]})}i(m,"GuestsAppointment");try{m.displayName="GuestsAppointment",m.__docgenInfo={description:"",displayName:"GuestsAppointment",props:{guests:{defaultValue:null,description:"",name:"guests",required:!0,type:{name:"string[]"}}}}}catch{}export{m as G};
//# sourceMappingURL=guests-appointment-f0e8a51f.js.map
