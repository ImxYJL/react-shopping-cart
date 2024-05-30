import{j as y}from"./styled-components.browser.esm-C_jzoV4G.js";import{r as l}from"./index-l2PZgWEW.js";import{S as i}from"./SetQuantity-QTNeJtgB.js";import"./constants-BaHCQkqZ.js";const g={title:"SetQuantity",component:i},n={decorators:[o=>{const[c,e]=l.useState(0),m=async()=>{e(t=>t+1)},u=async()=>{e(t=>Math.max(t-1,0))};return y.jsx(o,{args:{quantity:c,handleIncrement:m,handleDecrement:u}})}],args:{quantity:0,handleIncrement:async()=>console.log("올리"),handleDecrement:async()=>console.log("쿠키")}};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [Story => {
    const [quantity, setQuantity] = useState<number>(0);
    const handleIncrement = async () => {
      setQuantity(prev => prev + 1);
    };
    const handleDecrement = async () => {
      setQuantity(prev => Math.max(prev - 1, 0));
    };
    return <Story args={{
      quantity: quantity,
      handleIncrement: handleIncrement,
      handleDecrement: handleDecrement
    }} />;
  }],
  args: {
    quantity: 0,
    handleIncrement: async () => console.log('올리'),
    handleDecrement: async () => console.log('쿠키')
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const x=["기본_SetQuantity"];export{x as __namedExportsOrder,g as default,n as 기본_SetQuantity};
