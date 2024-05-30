import{p as h,j as p}from"./styled-components.browser.esm-C_jzoV4G.js";import{S as b}from"./SelectAll-BIweDEBy.js";import{S as q}from"./ShoppingCartItem-B0yOhLKt.js";import{d as l}from"./index-efxvOAgQ.js";import{i as _,a as f}from"./atoms-DX0Xi3dF.js";import{r as m}from"./index-l2PZgWEW.js";import"./Checkbox-Z0MRkm5C.js";import"./constants-BaHCQkqZ.js";import"./DeleteButton-ilTJRi2m.js";import"./SetQuantity-QTNeJtgB.js";import"./index-BXzUGxBp.js";const S=n=>{const[i,a]=l(_);return m.useEffect(()=>{a(n.map(o=>({id:o.id,quantity:o.quantity})))},[n,a]),{getOneItemQuantity:o=>{const t=i.find(e=>e.id===o);return t==null?void 0:t.quantity},setOneItemQuantity:(o,t)=>{a(i.map(e=>e.id===o?{...e,quantity:t}:e))}}},k=n=>{const[i,a]=l(f),c=t=>i.find(e=>e.cartItemId===t)!==void 0;return{isSelected:c,toggleItemSelection:t=>{const e=c(t.id);a(e?r=>r.filter(s=>s.cartItemId!==t.id):r=>[...r,{cartItemId:t.id,price:t.product.price,quantity:n(t.id)??t.quantity,name:t.product.name,imageUrl:t.product.imageUrl}])},updateSelectedItemQuantity:(t,e)=>{a(i.map(r=>r.cartItemId===t.id?{...r,quantity:e}:r))}}},Q=n=>{const[i,a]=l(f),[c,d]=m.useState(!1),{getOneItemQuantity:o}=S(n);return m.useEffect(()=>{const e=n.every(r=>i.some(s=>s.cartItemId===r.id));d(e)},[n,i]),m.useEffect(()=>{if(n.length>0){const e=i.filter(r=>n.some(s=>s.id===r.cartItemId));e.length!==i.length&&a(e)}},[n,i]),{selectedItems:i,onSelectAllClick:()=>{a(c?[]:n.map(e=>({cartItemId:e.id,quantity:o(e.id)??e.quantity,price:e.product.price,name:e.product.name,imageUrl:e.product.imageUrl})))},allSelectedItems:c}},x=h.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,C=({cartItems:n,refetch:i})=>{const{getOneItemQuantity:a,setOneItemQuantity:c}=S(n),{isSelected:d,toggleItemSelection:o,updateSelectedItemQuantity:t}=k(a),{allSelectedItems:e,onSelectAllClick:r}=Q(n);return p.jsxs(x,{children:[p.jsx(b,{isSelectAll:e,onSelectAllClick:r}),n.map(s=>p.jsx(q,{cartItem:s,isSelected:d,toggleItemSelection:o,updateSelectedItemQuantity:t,getOneItemQuantity:a,setOneItemQuantity:c,refetch:i},s.id))]})};C.__docgenInfo={description:"",methods:[],displayName:"ShoppingCartList",props:{cartItems:{required:!0,tsType:{name:"Array",elements:[{name:"CartItem"}],raw:"CartItem[]"},description:""},refetch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};const T={title:"ShoppingCartList",component:C},u={args:{cartItems:[{id:1,quantity:2,product:{id:1,name:"춘식이",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}},{id:2,quantity:2,product:{id:2,name:"춘식이2",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}},{id:3,quantity:2,product:{id:3,name:"춘식이3",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}}],refetch:async()=>console.log("쿠키")}};var g,y,I;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    cartItems: [{
      id: 1,
      quantity: 2,
      product: {
        id: 1,
        name: '춘식이',
        price: 15000000,
        imageUrl: 'https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171',
        category: '고양이'
      }
    }, {
      id: 2,
      quantity: 2,
      product: {
        id: 2,
        name: '춘식이2',
        price: 15000000,
        imageUrl: 'https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171',
        category: '고양이'
      }
    }, {
      id: 3,
      quantity: 2,
      product: {
        id: 3,
        name: '춘식이3',
        price: 15000000,
        imageUrl: 'https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171',
        category: '고양이'
      }
    }],
    refetch: async () => console.log('쿠키')
  }
}`,...(I=(y=u.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const F=["기본"];export{F as __namedExportsOrder,T as default,u as 기본};
