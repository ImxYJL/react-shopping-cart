import{p as l,j as t}from"./styled-components.browser.esm-C_jzoV4G.js";import{P as d}from"./PriceInfo-DS9dRlx7.js";import{b as w,c as O,R as k,a as h}from"./index-efxvOAgQ.js";import{K as g,O as m}from"./constants-Cy3rjPpZ.js";import{s as F}from"./atoms-Bma6jZCg.js";import"./index-l2PZgWEW.js";import"./index-BXzUGxBp.js";const z="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4664_1446)'%3e%3cpath%20d='M7.33331%204.66666H8.66665V5.99999H7.33331V4.66666ZM7.33331%207.33333H8.66665V11.3333H7.33331V7.33333ZM7.99998%201.33333C4.31998%201.33333%201.33331%204.31999%201.33331%207.99999C1.33331%2011.68%204.31998%2014.6667%207.99998%2014.6667C11.68%2014.6667%2014.6666%2011.68%2014.6666%207.99999C14.6666%204.31999%2011.68%201.33333%207.99998%201.33333ZM7.99998%2013.3333C5.05998%2013.3333%202.66665%2010.94%202.66665%207.99999C2.66665%205.05999%205.05998%202.66666%207.99998%202.66666C10.94%202.66666%2013.3333%205.05999%2013.3333%207.99999C13.3333%2010.94%2010.94%2013.3333%207.99998%2013.3333Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4664_1446'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",b=l.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,v=l.article`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,M=l.p`
  ${e=>e.theme.typography.label};
`,R=l.hr`
  width: 100%;
  height: 0.1rem;
  border: 0.1rem solid ${e=>e.theme.color.black10};
`,H=w({key:g.PRICE_INFO,get:({get:e})=>{const r=e(F).reduce((p,n)=>p+=n.price*n.quantity,0),i=r>=m.SHIPPING_FREE_PRICE||r===0?0:m.SHIPPING_FEE;return{order:r,shipping:i,total:r+i}}});w({key:g.ORDER_INFO,get:({get:e})=>{const o=e(F),r=o.length,x=o.reduce((p,n)=>p+=n.quantity,0),i=e(H).total;return{kindCount:r,productCount:x,totalPrice:i}}});const N=()=>{const e=O(H);return t.jsxs(b,{children:[t.jsxs(v,{children:[t.jsx("img",{src:z,alt:""}),t.jsx(M,{children:`총 주문 금액이 ${m.SHIPPING_FREE_PRICE.toLocaleString()}원 이상일 경우 무료 배송됩니다.`})]}),t.jsx(R,{}),t.jsx(d,{title:"주문 금액",price:e.order}),t.jsx(d,{title:"배송비",price:e.shipping}),t.jsx(R,{}),t.jsx(d,{title:"총 결제 금액",price:e.total})]})};N.__docgenInfo={description:"",methods:[],displayName:"PaymentTotal"};const K={title:"PaymentTotal",component:N},_=k({key:g.PRICE_INFO}),s={decorators:[e=>t.jsx(h,{initializeState:({set:o})=>{o(_,{order:3e3,shipping:3e3,total:6e3})},children:t.jsx(e,{})})]},c={decorators:[e=>t.jsx(h,{initializeState:({set:o})=>{o(_,{order:96999,shipping:3e3,total:99999})},children:t.jsx(e,{})})]},a={decorators:[e=>t.jsx(h,{initializeState:({set:o})=>{o(_,{order:1e5,shipping:0,total:1e5})},children:t.jsx(e,{})})]};var S,f,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <RecoilRoot initializeState={({
    set
  }) => {
    set(priceInfoState, {
      order: 3000,
      shipping: 3000,
      total: 6000
    });
  }}>
        <Story />
      </RecoilRoot>]
}`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var u,y,P;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <RecoilRoot initializeState={({
    set
  }) => {
    set(priceInfoState, {
      order: 96999,
      shipping: 3000,
      total: 99999
    });
  }}>
        <Story />
      </RecoilRoot>]
}`,...(P=(y=c.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var j,C,E;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <RecoilRoot initializeState={({
    set
  }) => {
    set(priceInfoState, {
      order: 100000,
      shipping: 0,
      total: 100000
    });
  }}>
        <Story />
      </RecoilRoot>]
}`,...(E=(C=a.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const B=["기본","배송비가_있을_때","배송비가_없을_때"];export{B as __namedExportsOrder,K as default,s as 기본,a as 배송비가_없을_때,c as 배송비가_있을_때};
