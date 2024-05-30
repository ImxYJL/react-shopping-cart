import{p as _,j as o}from"./styled-components.browser.esm-C_jzoV4G.js";import{K as p,O as a}from"./constants-BaHCQkqZ.js";import{P as l}from"./PriceInfo-DS9dRlx7.js";import{b as g,c,d as b,R as v,a as I}from"./index-efxvOAgQ.js";import{o as H,s as N,a as T,b as z}from"./atoms-DX0Xi3dF.js";import{r as G}from"./index-l2PZgWEW.js";import"./index-BXzUGxBp.js";const V="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4664_1446)'%3e%3cpath%20d='M7.33331%204.66666H8.66665V5.99999H7.33331V4.66666ZM7.33331%207.33333H8.66665V11.3333H7.33331V7.33333ZM7.99998%201.33333C4.31998%201.33333%201.33331%204.31999%201.33331%207.99999C1.33331%2011.68%204.31998%2014.6667%207.99998%2014.6667C11.68%2014.6667%2014.6666%2011.68%2014.6666%207.99999C14.6666%204.31999%2011.68%201.33333%207.99998%201.33333ZM7.99998%2013.3333C5.05998%2013.3333%202.66665%2010.94%202.66665%207.99999C2.66665%205.05999%205.05998%202.66666%207.99998%202.66666C10.94%202.66666%2013.3333%205.05999%2013.3333%207.99999C13.3333%2010.94%2010.94%2013.3333%207.99998%2013.3333Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4664_1446'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",w=g({key:p.PRICE_INFO,get:({get:e})=>{const t=e(f),i=e(H),r=e(N),s=r.isFree?0:r.shipping,n=r.isFree?t+r.shipping-i:t+s-i;return{order:t,finalShipping:s,total:n}}}),L=g({key:p.IS_OVER_SHIPPING_FEE_FREE,get:({get:e})=>e(f)>=a.SHIPPING_FREE_PRICE}),f=g({key:p.ORDER_TOTAL,get:({get:e})=>e(T).reduce((i,r)=>i+r.price*r.quantity,0)});g({key:p.ORDER_INFO,get:({get:e})=>{const t=e(T),i=t.length,r=t.reduce((n,S)=>n+S.quantity,0),s=e(w).total;return{kindCount:i,productCount:r,totalPrice:s}}});const M=_.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 6rem;
`,Z=_.article`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,B=_.p`
  ${e=>e.theme.typography.label};
`,x=_.hr`
  width: 100%;
  height: 0.1rem;
  border: 0.1rem solid ${e=>e.theme.color.black10};
`,k=({isUseDiscount:e})=>{const t=c(H),[i,r]=b(N),s=c(w),n=c(f),S=c(z),D=c(L);return G.useEffect(()=>{r(D?{...i,shipping:0}:{...i,shipping:S?a.BASIC_SHIPPING_FEE+a.SPECIAL_AREA_ADDITIONAL_SHIPPING_FEE:a.BASIC_SHIPPING_FEE})},[n,i.isFree]),o.jsxs(M,{children:[o.jsxs(Z,{children:[o.jsx("img",{src:V,alt:""}),o.jsx(B,{children:`총 주문 금액이 ${a.SHIPPING_FREE_PRICE.toLocaleString()}원 이상일 경우 무료 배송됩니다.`})]}),o.jsx(x,{}),o.jsx(l,{title:"주문 금액",price:s.order}),e&&o.jsx(l,{title:"쿠폰 할인 금액",price:t===0?t:-t}),o.jsx(l,{title:"배송비",price:i.shipping||0}),o.jsx(x,{}),o.jsx(l,{title:"총 결제 금액",price:e?s.total:s.order+s.finalShipping})]})};k.__docgenInfo={description:"",methods:[],displayName:"PaymentTotal"};const W={title:"PaymentTotal",component:k,args:{isUseDiscount:!1}},R=v({key:p.PRICE_INFO}),d={decorators:[e=>o.jsx(I,{initializeState:({set:t})=>{t(R,{order:3e3,shipping:3e3,total:6e3})},children:o.jsx(e,{})})]},m={decorators:[e=>o.jsx(I,{initializeState:({set:t})=>{t(R,{order:96999,shipping:3e3,total:99999})},children:o.jsx(e,{})})]},h={decorators:[e=>o.jsx(I,{initializeState:({set:t})=>{t(R,{order:1e5,shipping:0,total:1e5})},children:o.jsx(e,{})})]};var u,E,P;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(P=(E=d.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var y,F,C;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(F=m.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var j,O,A;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(O=h.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const X=["기본","배송비가_있을_때","배송비가_없을_때"];export{X as __namedExportsOrder,W as default,d as 기본,h as 배송비가_없을_때,m as 배송비가_있을_때};
