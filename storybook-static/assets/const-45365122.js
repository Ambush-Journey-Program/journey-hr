var m=Object.defineProperty;var r=(e,i)=>m(e,"name",{value:i,configurable:!0});import{H as n,a as t,j as o}from"./styled-components.browser.esm-017417a4.js";import{d as a}from"./devices-01550430.js";import"./avatar-7d72cb7f.js";import"./index-215b3469.js";import{B as p}from"./button-c8f1e04e.js";import"./cardWrapper-4210e8b5.js";import"./input-e44c0346.js";import"./logo-b1bd5a3e.js";import"./navbar-98be359b.js";import"./select-input-ec4b04ef.js";import"./title-54c56285.js";import"./subtitle-fd265a16.js";import{P as g}from"./paragraphs-81eb5bec.js";import{r as l}from"./index-86ac2416.js";import{B as u}from"./badge-421f58ed.js";const c=n.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 7px 4px;
  margin-top: 46px;
`,x=n.span`
  display: flex;
  align-items: center;
  gap: 17px;
  @media ${a.tablet}, ${a.tabletLarge}, ${a.desktop} {
    align-items: baseline;
  }
`,C=n.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
  @media ${a.tablet} {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 17px;
  }
`,f=n.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  padding: 11px;
  @media ${a.tablet} {
    padding: 7px;
  }
`,h=r(e=>l.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2ZM3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5C13 7.76142 10.7614 10 8 10C5.23858 10 3 7.76142 3 5ZM2.08296 18H13.917C13.441 15.1623 10.973 13 8 13C5.027 13 2.55904 15.1623 2.08296 18ZM0 19C0 14.5817 3.58172 11 8 11C12.4183 11 16 14.5817 16 19C16 19.5523 15.5523 20 15 20H1C0.447715 20 0 19.5523 0 19Z",fill:"#5C4C73"})),"SvgUserIcon");function d({guestsList:e,onDelete:i}){return t(c,{"data-testid":"GuestList",children:e.map(s=>o(f,{children:[o(x,{children:[t(h,{}),o(C,{children:[t(g,{size:"large",fontWeight:"semibold",children:s.guest.name}),t(u,{text:s.guest.team})]})]}),t(p,{variant:"ghost",icon:"TrashIcon",color:"alternative",onClick:()=>i&&i(s.guest.id),"aria-label":"Delete Button"})]},s.guest.id))})}r(d,"GuestList");try{d.displayName="GuestList",d.__docgenInfo={description:"",displayName:"GuestList",props:{guestsList:{defaultValue:null,description:"",name:"guestsList",required:!0,type:{name:"Guests[]"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((id: string) => void)"}}}}}catch{}const A=[],H=[{guest:{id:"1",name:"Ana Urbano",team:"Design"}},{guest:{id:"2",name:"Marcello Aragoni",team:"Developer"}},{guest:{id:"3",name:"Lucas Medeiros",team:"Developer"}},{guest:{id:"4",name:"Claudia da Silva",team:"Design"}},{guest:{id:"5",name:"Mariana Maia",team:"design"}},{guest:{id:"6",name:"Caio Caixão",team:"Ruby"}},{guest:{id:"7",name:"Dan Donatello",team:"Java"}},{guest:{id:"8",name:"Bruna Caiado",team:"design"}},{guest:{id:"9",name:"Caio Caiado",team:"Ruby"}},{guest:{id:"10",name:"Bárbara Santos",team:"Developer"}},{guest:{id:"11",name:"Juliana ",team:"Design"}},{guest:{id:"12",name:"Lídia ",team:"Developer"}},{guest:{id:"13",name:"Carlos",team:"Design"}},{guest:{id:"14",name:"Beatriz Pereira",team:"Developer"}},{guest:{id:"15",name:"Test",team:"list"}}];export{H as E,d as G,A as a};
//# sourceMappingURL=const-45365122.js.map
