var c=Object.defineProperty;var a=(t,e)=>c(t,"name",{value:e,configurable:!0});import{H as s,C as r,j as d,a as m}from"./styled-components.browser.esm-017417a4.js";import{r as u}from"./index-86ac2416.js";const f=s.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  cursor: pointer;
`,h={left:r`
    transform: translateY(-50%);
    top: 50%;
    right: calc(100% + 15px);
    &:after {
      border-color: transparent transparent transparent #${t=>t.theme.color.auxiliary.white};
      left: calc(100% + -1.5px);
      top: calc(50% + -0.5rem);
      transform: rotate(-90deg);
    }
  `,right:r`
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% + 15px);
    &:after {
      border-color: transparent #${t=>t.theme.color.auxiliary.white}
        transparent transparent;
      right: calc(100% + -1.5px);
      left: unset;
      top: calc(50% - 0.5rem);
      transform: rotate(90deg);
    }
  `,bottom:r`
    top: calc(100% + 15px);
    left: 50%;
    transform: translateX(-50%);
    &:after {
      border-color: transparent transparent #${t=>t.theme.color.auxiliary.white} transparent;
      top: unset;
      width: 1px;
      bottom: 100%;
      left: calc(50% - 0.5rem);
      transform: rotate(180deg);
    }
  `,top:r`
    bottom: calc(100% + 15px);
    left: 50%;
    transform: translateX(-50%);
  `,default:r``},b=s.span`
  position: absolute;
  width: 100%;
  background-color: ${t=>t.theme.color.auxiliary.white};
  color: ${t=>t.theme.color.contrasts.highContrast};
  text-align: center;
  border-radius: 0.938rem;
  padding: 0.75rem;
  min-width: 6.25rem;
  max-width: 12.5rem;
  font-weight: 600;
  font-size: 0.75rem;
  box-shadow: 0 0.25rem 0.875rem rgba(0, 0, 0, 0.15),
    0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  &:after {
    content: '';
    z-index: 10;
    position: absolute;
    width: 0.063rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${t=>t.theme.color.auxiliary.white} transparent
      transparent transparent;
    left: calc(50% - 0.5rem);
    top: 100%;
  }
  ${({variantPosition:t})=>h[t]}
`;function l({text:t,children:e,variantPosition:p="top"}){const[o,n]=u.useState(!1);function i(){if(o){n(!1);return}n(!0)}return a(i,"changeVisible"),d(f,{"data-testid":"wrapper",onMouseOver:i,onMouseLeave:i,children:[e,o&&t&&m(b,{"data-testid":"popUp",variantPosition:p,children:t})]})}a(l,"Tooltip");try{l.displayName="Tooltip",l.__docgenInfo={description:"",displayName:"Tooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},variantPosition:{defaultValue:{value:"top"},description:"",name:"variantPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'}]}}}}}catch{}export{l as T};
//# sourceMappingURL=tooltip-49cecdc0.js.map
