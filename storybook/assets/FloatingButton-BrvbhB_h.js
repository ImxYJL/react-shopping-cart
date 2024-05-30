import{p as e,j as r}from"./styled-components.browser.esm-C_jzoV4G.js";const n=e.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6.4rem;
  padding: 2.4rem;
  border: none;
  background-color: ${o=>o.theme.color.black};
  color: ${o=>o.theme.color.white};
  ${o=>o.theme.typography.boldLabel};
  cursor: pointer;

  &:disabled {
    background-color: ${o=>o.theme.color.lightGray};
  }
`,i=({label:o,...t})=>r.jsx(n,{...t,children:o});i.__docgenInfo={description:"",methods:[],displayName:"FloatingButton",props:{label:{required:!0,tsType:{name:"string"},description:""}}};export{i as F};
