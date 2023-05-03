var i=Object.defineProperty;var a=(e,t)=>i(e,"name",{value:t,configurable:!0});import{c as o,A as l}from"./Props-12c55f78.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import{t as d}from"./theme-94f45b2f.js";import"./string-8e9b81a5.js";import"./index-e32dc4a9.js";import"./es.map.constructor-139626eb.js";import"./es.number.to-fixed-49eef01b.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}a(p,"_extends");const c=a(e=>a(function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),o("div",r)},"MDXDefaultShortcode"),"makeShortcode"),h=c("Meta"),u={},w="wrapper";function m({components:e,...t}){return o(w,p({},u,t,{components:e,mdxType:"MDXLayout"}),o(h,{title:"Docs/Shadows",mdxType:"Meta"}),o("style",null,`
    h2{
      font-weight: 700;
      font-size: 22px;
      line-height: 40px;
      color: #301F47;
      margin-bottom:50px;
    }

    .shadows{
      display:flex;
      gap:65px;
    }

    .shadow_element{
      padding:100px;
      color:#301F47;
      border-radius: 40px;
      background-color:${[d.color.auxiliary.white]}
    }

    #shadowCream{
      box-shadow:${[d.shadows.cream]};
    }

    #shadowPurple{
    box-shadow:${[d.shadows.purple]};
    }
  `),o("h2",null,"Shadows"),o("div",{className:"shadows"},o("div",{className:"shadow_element",id:"shadowCream"},"Cream"),o("div",{className:"shadow_element",id:"shadowPurple"},"Purple")))}a(m,"MDXContent");m.isMDXComponent=!0;const x=a(()=>{throw new Error("Docs-only story")},"__page");x.parameters={docsOnly:!0};const s={title:"Docs/Shadows",tags:["stories-mdx"],includeStories:["__page"]},g={};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>o(l,{mdxStoryNameToKey:g,mdxComponentAnnotations:s},o(m,null))};const O=["__page"];export{O as __namedExportsOrder,x as __page,s as default};
//# sourceMappingURL=shadows.stories-fe210138.js.map
