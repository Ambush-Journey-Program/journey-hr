var n=Object.defineProperty;var e=(r,a)=>n(r,"name",{value:a,configurable:!0});import{C as d,H as t,a as p}from"./styled-components.browser.esm-017417a4.js";import{d as s}from"./devices-01550430.js";const i={default:d`
    box-shadow: 0px 4px 6px rgba(149, 136, 169, 0.05),
      0px 0px 30px rgba(231, 222, 209, 0.5);
    background-color: ${r=>r.theme.color.brandColors.white};
  `,transparent:d`
    box-shadow: none;
    background-color: transparent;
  `},c=t.div`
  padding: 1.25rem 2.5rem;
  border-radius: 1.25rem;
  width: 100%;
  max-width: 100%;

  @media ${s.mobile} {
    padding: 0.75rem 1.25rem;
  }

  ${({background:r})=>i[r??"default"]}
`;function o({background:r,children:a}){return p(c,{background:r,children:a})}e(o,"CardWrapper");try{o.displayName="CardWrapper",o.__docgenInfo={description:"",displayName:"CardWrapper",props:{background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"transparent"'}]}}}}}catch{}export{o as C};
//# sourceMappingURL=cardWrapper-4210e8b5.js.map
