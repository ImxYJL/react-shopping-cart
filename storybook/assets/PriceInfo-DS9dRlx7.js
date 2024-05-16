import{p as i,j as t}from"./styled-components.browser.esm-C_jzoV4G.js";const n=i.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 4.2rem;
`,s=i.p`
  ${e=>e.theme.typography.boldLabel};
`,o=i.p`
  ${e=>e.theme.typography.pageTitle};
`,p=({title:e,price:r})=>t.jsxs(n,{children:[t.jsx(s,{children:e}),t.jsxs(o,{children:[r.toLocaleString(),"원"]})]});p.__docgenInfo={description:"",methods:[],displayName:"PriceInfo",props:{title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""}}};export{p as P};
