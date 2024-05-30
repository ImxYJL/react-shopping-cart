import{u,a as d,K as g,$ as h}from"./index-Df_t1Jkf.js";import{p as o,j as n}from"./styled-components.browser.esm-C_jzoV4G.js";import{R as s}from"./constants-BaHCQkqZ.js";import{F as x}from"./FloatingButton-BrvbhB_h.js";import{r as f}from"./index-l2PZgWEW.js";import"./index-BXzUGxBp.js";const y=o.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70rem;
  gap: 2.4rem;
`,j=o.p`
  ${t=>t.theme.typography.pageTitle};
  text-align: center;
`,R=o.p`
  ${t=>t.theme.typography.label};
  white-space: pre-line;
  text-align: center;
`,C=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,P=o.p`
  ${t=>t.theme.typography.boldLabel};
  text-align: center;
`,$=o.p`
  ${t=>t.theme.typography.pageTitle};
  text-align: center;
`,l=()=>{const t=u(),r=d(),e=r.state,m=()=>{t(s.MAIN)};return f.useEffect(()=>{e===null&&t(s.ERROR)},[r.pathname,t,e]),n.jsxs(n.Fragment,{children:[n.jsxs(y,{children:[n.jsx(j,{children:"주문 확인"}),n.jsx(R,{children:`총 ${e==null?void 0:e.kindCount}종류의 상품 ${e==null?void 0:e.productCount}개를 주문합니다.
최종 결제 금액을 확인해 주세요.`}),n.jsxs(C,{children:[n.jsx(P,{children:"총 결제 금액"}),n.jsxs($,{children:[e==null?void 0:e.totalPrice.toLocaleString(),"원"]})]})]}),n.jsx(x,{label:"장바구니로 돌아가기",onClick:m})]})};l.__docgenInfo={description:"",methods:[],displayName:"PaymentInfo"};const v={title:"PaymentInfo",component:l,decorators:[g],parameters:{reactRouter:h({location:{state:{kindCount:2,productCount:4,totalPrice:15e3}},routing:{path:"/payment-info"}})}},a={};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const F=["기본"];export{F as __namedExportsOrder,v as default,a as 기본};
