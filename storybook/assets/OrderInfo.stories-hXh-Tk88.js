import{u as p,a as m,K as d,$ as u}from"./index-Df_t1Jkf.js";import{p as o,j as r}from"./styled-components.browser.esm-C_jzoV4G.js";import{r as g}from"./index-l2PZgWEW.js";import{R as h}from"./constants-Cy3rjPpZ.js";import{F as x}from"./FloatingButton-8FbaUajh.js";import"./index-BXzUGxBp.js";const f=o.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70rem;
  gap: 2.4rem;
`,y=o.p`
  ${t=>t.theme.typography.pageTitle};
  text-align: center;
`,j=o.p`
  ${t=>t.theme.typography.label};
  white-space: pre-line;
  text-align: center;
`,R=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,$=o.p`
  ${t=>t.theme.typography.boldLabel};
  text-align: center;
`,C=o.p`
  ${t=>t.theme.typography.pageTitle};
  text-align: center;
`,l=()=>{const t=p(),n=m(),e=n.state;return g.useEffect(()=>{e===null&&t(h.ERROR)},[n.pathname,t,e]),r.jsxs(r.Fragment,{children:[r.jsxs(f,{children:[r.jsx(y,{children:"주문 확인"}),r.jsx(j,{children:`총 ${e==null?void 0:e.kindCount}종류의 상품 ${e==null?void 0:e.productCount}개를 주문합니다.
최종 결제 금액을 확인해 주세요.`}),r.jsxs(R,{children:[r.jsx($,{children:"총 결제 금액"}),r.jsxs(C,{children:[e==null?void 0:e.totalPrice.toLocaleString(),"원"]})]})]}),r.jsx(x,{label:"결제하기",disabled:!0})]})};l.__docgenInfo={description:"",methods:[],displayName:"OrderInfo"};const L={title:"OrderInfo",component:l,decorators:[d],parameters:{reactRouter:u({location:{state:{kindCount:2,productCount:4,totalPrice:15e3}},routing:{path:"/order-info"}})}},a={};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const v=["기본"];export{v as __namedExportsOrder,L as default,a as 기본};
