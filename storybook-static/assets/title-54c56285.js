var m=Object.defineProperty;var a=(t,o)=>m(t,"name",{value:o,configurable:!0});import{C as i,H as r,a as n}from"./styled-components.browser.esm-017417a4.js";import{d as e}from"./devices-01550430.js";const l={h1:i`
    font-size: 2rem;

    @media ${e.tablet} {
      font-size: 2.5rem;
    }

    @media ${e.desktop} {
      font-size: 3rem;
    }
  `,h2:i`
    font-size: 1.75rem;

    @media ${e.tablet} {
      font-size: 2rem;
    }

    @media ${e.desktop} {
      font-size: 2.5rem;
    }
  `,h3:i`
    font-size: 1.5rem;

    @media ${e.tablet} {
      font-size: 1.75rem;
    }

    @media ${e.desktop} {
      font-size: 2rem;
    }
  `,h4:i`
    font-size: 1.25rem;

    @media ${e.tablet} {
      font-size: 1.5rem;
    }

    @media ${e.desktop} {
      font-size: 1.75rem;
    }
  `,h5:i`
    font-size: 1.125rem;

    @media ${e.tablet} {
      font-size: 1.25rem;
    }

    @media ${e.desktop} {
      font-size: 1.5rem;
    }
  `,h6:i`
    font-size: 1rem;

    @media ${e.tablet} {
      font-size: 1.125rem;
    }

    @media ${e.desktop} {
      font-size: 1.25;
    }
  `},d=r.div`
  font-family: ${t=>t.theme.font.fontFamilyTitle};
  font-style: normal;
  font-weight: 700;
  color: ${t=>t.theme.color.contrasts.highContrast};

  ${({variant:t})=>l[t]}
`;function s({variant:t,children:o}){return n(d,{variant:t,as:t,children:o})}a(s,"Title");try{s.displayName="Title",s.__docgenInfo={description:"",displayName:"Title",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}}}catch{}export{s as T};
//# sourceMappingURL=title-54c56285.js.map
