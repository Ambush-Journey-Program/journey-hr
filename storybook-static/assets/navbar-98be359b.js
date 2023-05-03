var m=Object.defineProperty;var i=(e,r)=>m(e,"name",{value:r,configurable:!0});import{H as n,C as l,a,j as s}from"./styled-components.browser.esm-017417a4.js";import{A as p}from"./avatar-7d72cb7f.js";import{r as d}from"./index-86ac2416.js";import{C as u}from"./cardWrapper-4210e8b5.js";const h=n.div`
  width: 992px;
  margin: 0 auto;
`,g=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 1.25rem 0;
`,f=n.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 6rem;
  width: 100%;
  max-width: 100%;
  list-style: none;

  li {
    margin: 0 1.125rem;
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      ${({colors:e})=>L[e]};
    }
  }
  li:first-of-type {
    margin-left: 0;
  }
  li:last-of-type {
    margin-right: 0;
  }
`,v=n.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 3.75rem 2.5rem;
  justify-content: space-between;

  h1 {
    margin-left: 0.5625rem;
    color: ${e=>e.theme.color.brandColors.darkPurple};
    font-size: 18px;
    font-weight: 700;
  }
`,L={light:l`
    color: ${e=>e.theme.color.brandColors.light};
  `,dark:l`
    color: ${e=>e.theme.color.contrasts.mediumContrast};
  `},y=i(e=>d.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M13.1806 1.90248C14.4707 0.108288 16.8737 -0.481885 18.8481 0.510521L23.3567 2.77658C23.3791 2.78786 23.3862 2.81655 23.3715 2.83695L9.09315 22.6838C9.07036 22.7155 9.1007 22.758 9.13807 22.7468L13.3347 21.486C13.766 21.3564 14.1425 21.0879 14.4054 20.7223L23.3259 8.31984C23.3491 8.28762 23.4 8.30401 23.4 8.34369L23.4 19.6416C23.4 19.672 23.368 19.6917 23.3408 19.6782L18.3526 17.1862C18.3346 17.1772 18.3128 17.1826 18.3011 17.1989L15.0823 21.6709C14.819 22.0366 14.4423 22.305 14.0106 22.4344L9.36859 23.8255C8.46805 24.0953 7.49835 24.0101 6.65874 23.5872L0.0426912 20.2548C0.0202644 20.2435 0.0132379 20.2149 0.0278974 20.1945L13.1806 1.90248Z",fill:"#422D5F"})),"SvgUnion");function o({navigationLinks:e,colors:r="light"}){return a(f,{colors:r,children:e.map(t=>a("li",{children:a("a",{href:t.url,children:t.label})},t.label))})}i(o,"NavBarLinks");try{o.displayName="NavBarLinks",o.__docgenInfo={description:"",displayName:"NavBarLinks",props:{navigationLinks:{defaultValue:null,description:"",name:"navigationLinks",required:!0,type:{name:"LinkList"}},colors:{defaultValue:{value:"light"},description:"",name:"colors",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}function c({navigationLinks:e,avatarSrc:r="src/design-system/avatar/User-Photo.png",colors:t}){return a(h,{"data-testid":"NavBar",children:a(u,{children:s(g,{children:[s(v,{children:[a(y,{}),a("h1",{children:"Ambush"})]}),a(o,{colors:t,navigationLinks:e,"data-testid":"Links"}),a(p,{src:r,sizeVariant:"small","data-testid":"Avatar"})]})})})}i(c,"NavBar");try{c.displayName="NavBar",c.__docgenInfo={description:"",displayName:"NavBar",props:{navigationLinks:{defaultValue:null,description:"",name:"navigationLinks",required:!0,type:{name:"LinkList"}},avatarSrc:{defaultValue:{value:"src/design-system/avatar/User-Photo.png"},description:"",name:"avatarSrc",required:!1,type:{name:"string"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}export{c as N};
//# sourceMappingURL=navbar-98be359b.js.map
