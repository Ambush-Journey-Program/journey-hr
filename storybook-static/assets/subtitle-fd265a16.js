var r=Object.defineProperty;var s=(e,a)=>r(e,"name",{value:a,configurable:!0});import{C as i,H as n,a as l}from"./styled-components.browser.esm-017417a4.js";import{d as t}from"./devices-01550430.js";const d={s1:i`
    font-size: 1.75rem;

    @media ${t.tablet} {
      font-size: 2rem;
    }

    @media ${t.desktop} {
      font-size: 2.5rem;
    }
  `,s2:i`
    font-size: 1.5rem;

    @media ${t.tablet} {
      font-size: 1.75rem;
    }

    @media ${t.desktop} {
      font-size: 2rem;
    }
  `,s3:i`
    font-size: 1.25rem;

    @media ${t.tablet} {
      font-size: 1.5rem;
    }

    @media ${t.desktop} {
      font-size: 1.75rem;
    }
  `,s4:i`
    font-size: 1.125rem;

    @media ${t.tablet} {
      font-size: 1.25rem;
    }

    @media ${t.desktop} {
      font-size: 1.5rem;
    }
  `,s5:i`
    font-size: 1rem;

    @media ${t.tablet} {
      font-size: 1.125rem;
    }

    @media ${t.desktop} {
      font-size: 1.25rem;
    }
  `,s6:i`
    font-size: 0.875rem;

    @media ${t.tablet} {
      font-size: 1rem;
    }

    @media ${t.desktop} {
      font-size: 1.125;
    }
  `},u={hair:i`
    font-weight: 300;
  `,regular:i`
    font-weight: 400;
  `,medium:i`
    font-weight: 500;
  `},f=n.p`
  font-family: ${e=>e.theme.font.fontFamilyTitle};
  font-style: normal;
  ${({fontWeight:e})=>u[e]}
  color: ${e=>e.theme.color.contrasts.highContrast};

  ${({variant:e})=>d[e]}
`;function o({variant:e,children:a,fontWeight:m="medium"}){return l(f,{variant:e,fontWeight:m,children:a})}s(o,"Subtitle");try{o.displayName="Subtitle",o.__docgenInfo={description:"",displayName:"Subtitle",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"s1"'},{value:'"s2"'},{value:'"s3"'},{value:'"s4"'},{value:'"s5"'},{value:'"s6"'}]}},fontWeight:{defaultValue:{value:"medium"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"hair"'},{value:'"regular"'}]}}}}}catch{}export{o as S};
//# sourceMappingURL=subtitle-fd265a16.js.map
