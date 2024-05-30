import{b as a,u as L,K as x,$ as R}from"./index-Df_t1Jkf.js";import{p as l,j as r}from"./styled-components.browser.esm-C_jzoV4G.js";import{R as n}from"./constants-BaHCQkqZ.js";import"./index-l2PZgWEW.js";import"./index-BXzUGxBp.js";const k="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.58331%2016L4.41201%2015.063L3.66238%2016L4.41201%2016.9371L5.58331%2016ZM26.4166%2017.5C27.2451%2017.5%2027.9166%2016.8285%2027.9166%2016C27.9166%2015.1716%2027.2451%2014.5%2026.4166%2014.5V17.5ZM12.7453%204.64633L4.41201%2015.063L6.75462%2016.9371L15.0879%206.52042L12.7453%204.64633ZM4.41201%2016.9371L12.7453%2027.3538L15.0879%2025.4797L6.75462%2015.063L4.41201%2016.9371ZM5.58331%2017.5H26.4166V14.5H5.58331V17.5Z'%20fill='white'/%3e%3c/svg%3e",w=l.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.4rem;
  padding: 2.4rem;
  background-color: ${e=>e.theme.color.black};
  color: ${e=>e.theme.color.white};
  ${e=>e.theme.typography.heading};
`,M=l.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,u=()=>{const e=a(n.ORDER_INFO),g=a(n.PAYMENT_INFO),h=L(),f=()=>{h(-1)};return r.jsx(w,{children:e?r.jsx(M,{onClick:f,children:r.jsx("img",{src:k,alt:"GoToBack"})}):g?"":"쇼핑하기"})};u.__docgenInfo={description:"",methods:[],displayName:"Header"};const H={title:"Header",component:u,decorators:[x]},t={},o={parameters:{reactRouter:R({location:{state:{kindCount:2,productCount:4,totalPrice:15e3}},routing:{path:"/order-info"}})}};var s,c,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        state: {
          kindCount: 2,
          productCount: 4,
          totalPrice: 15000
        }
      },
      routing: {
        path: '/order-info'
      }
    })
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const O=["기본","뒤로가기모드"];export{O as __namedExportsOrder,H as default,t as 기본,o as 뒤로가기모드};
