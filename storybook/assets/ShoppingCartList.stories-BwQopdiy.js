import{p as k,j as g}from"./styled-components.browser.esm-C_jzoV4G.js";import{d as S}from"./index-efxvOAgQ.js";import{i as q,s as x}from"./atoms-Bma6jZCg.js";import{r as y}from"./index-l2PZgWEW.js";import{S as _}from"./SelectAll-Cv2U0PDV.js";import{S as Q}from"./ShoppingCartItem-m_1RJjEl.js";import"./index-BXzUGxBp.js";import"./constants-Cy3rjPpZ.js";import"./Checkbox-CTPdlmmq.js";import"./DeleteButton-ilTJRi2m.js";import"./SetQuantity-BNMenz06.js";const A=e=>{const[s,t]=S(q);return y.useEffect(()=>{t(e.map(o=>({id:o.id,quantity:o.quantity})))},[e,t]),{getOneItemQuantity:o=>{const n=s.find(c=>c.id===o);return n==null?void 0:n.quantity},setOneItemQuantity:(o,n)=>{const c=s.findIndex(d=>d.id===o);if(c!==-1){const d=[...s];d[c]={...d[c],quantity:n},t(d)}}}};function E(e,s,t){const r=new Set(e.map(n=>n[t])),u=new Set(s.map(n=>n[t])),o=[];return r.forEach(n=>{if(u.has(n)){const c=e.find(d=>d[t]===n);c&&o.push(c)}}),o}const D=(e,s)=>{const[t,r]=S(x),[u,o]=y.useState(e.length===t.length);y.useEffect(()=>{e.length!==0&&r(i=>E([...i],e.map(a=>({cartItemId:a.id,quantity:a.quantity,price:a.product.price})),"cartItemId"))},[e,r]),y.useEffect(()=>{o(e.length===t.length)},[e,t]);const n=i=>t.find(p=>p.cartItemId===i)!==void 0;return{selectedItems:t,onCheckboxClick:i=>{const p=n(i.id);r(p?a=>a.filter(m=>m.cartItemId!==i.id):a=>[...a,{cartItemId:i.id,price:i.product.price,quantity:s(i.id)??i.quantity}])},isSelected:n,onSelectAllClick:()=>{u?(r([]),o(!1)):(r(e.map(i=>({cartItemId:i.id,quantity:s(i.id)??i.quantity,price:i.product.price}))),o(!0))},all:u,selectedItemQuantity:(i,p)=>{const a=t.findIndex(m=>m.cartItemId===i.id);if(a!==-1){const m=[...t];m[a]={...m[a],quantity:p},r(m)}}}},O=k.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,b=({cartItems:e,refetch:s})=>{const{getOneItemQuantity:t,setOneItemQuantity:r}=A(e),{onCheckboxClick:u,isSelected:o,all:n,onSelectAllClick:c,selectedItemQuantity:d}=D(e,t);return g.jsxs(O,{children:[g.jsx(_,{isSelectAll:n,onSelectAllClick:c}),e.map(f=>g.jsx(Q,{cartItem:f,isSelected:o,onCheckboxClick:u,selectedItemQuantity:d,getOneItemQuantity:t,setOneItemQuantity:r,refetch:s},f.id))]})};b.__docgenInfo={description:"",methods:[],displayName:"ShoppingCartList",props:{cartItems:{required:!0,tsType:{name:"Array",elements:[{name:"CartItem"}],raw:"CartItem[]"},description:""},refetch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};const G={title:"ShoppingCartList",component:b},l={args:{cartItems:[{id:1,quantity:2,product:{id:1,name:"춘식이",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}},{id:2,quantity:2,product:{id:2,name:"춘식이2",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}},{id:3,quantity:2,product:{id:3,name:"춘식이3",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}}],refetch:async()=>console.log("쿠키")}};var C,I,h;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(h=(I=l.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const H=["기본"];export{H as __namedExportsOrder,G as default,l as 기본};
