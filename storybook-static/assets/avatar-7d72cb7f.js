var m=Object.defineProperty;var r=(e,a)=>m(e,"name",{value:a,configurable:!0});import{C as t,H as d,a as n}from"./styled-components.browser.esm-017417a4.js";import{d as o}from"./devices-01550430.js";const s={large:t`
    height: 7rem;
    width: 7rem;
    border-radius: 7rem;
  `,small:t`
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  `},u=d.img`
  ${({sizeVariant:e})=>s[e]}

  @media ${o.mobile} {
    ${s.small}
  }
`;function i({src:e,sizeVariant:a="small",...l}){return n(u,{"data-testid":"Avatar",src:e,sizeVariant:a,...l})}r(i,"Avatar");try{i.displayName="Avatar",i.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},sizeVariant:{defaultValue:{value:"small"},description:"",name:"sizeVariant",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}}}}}catch{}export{i as A};
//# sourceMappingURL=avatar-7d72cb7f.js.map
