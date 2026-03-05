import{b as a}from"./iframe-D_2zchzR.js";import"./preload-helper-Dp1pzeXC.js";const Q={title:"Components/Button",component:"a-button",tags:["autodocs"],parameters:{docs:{description:{component:`
An accessible, framework-agnostic button component with multiple variants and sizes.

\`\`\`html
<a-button variant="primary" size="md">Click me</a-button>
<a-button variant="danger" loading>Deleting…</a-button>
\`\`\`
        `}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost","danger"],description:"Visual style variant",table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:{type:"boolean"},description:"Disables the button"},loading:{control:{type:"boolean"},description:"Shows a loading spinner and disables interaction"},label:{control:{type:"text"},description:"Button label text",table:{category:"Slot"}}},args:{variant:"primary",size:"md",disabled:!1,loading:!1,label:"Click me"},render:({variant:j,size:q,disabled:F,loading:H,label:J})=>a`
    <a-button
      variant=${j}
      size=${q}
      ?disabled=${F}
      ?loading=${H}
    >${J}</a-button>
  `},e={name:"Primary",args:{variant:"primary",label:"Save Changes"}},t={name:"Secondary",args:{variant:"secondary",label:"Cancel"}},n={name:"Ghost",args:{variant:"ghost",label:"Learn More"}},r={name:"Danger",args:{variant:"danger",label:"Delete Account"}},s={name:"Sizes",render:()=>a`
    <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
      <a-button variant="primary" size="sm">Small</a-button>
      <a-button variant="primary" size="md">Medium</a-button>
      <a-button variant="primary" size="lg">Large</a-button>
    </div>
  `},o={name:"All Variants",render:()=>a`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary">Primary</a-button>
      <a-button variant="secondary">Secondary</a-button>
      <a-button variant="ghost">Ghost</a-button>
      <a-button variant="danger">Danger</a-button>
    </div>
  `},i={name:"Loading State",render:()=>a`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary" loading>Saving…</a-button>
      <a-button variant="secondary" loading>Processing</a-button>
      <a-button variant="danger" loading>Deleting</a-button>
    </div>
  `},l={name:"Disabled State",render:()=>a`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary" disabled>Disabled Primary</a-button>
      <a-button variant="secondary" disabled>Disabled Secondary</a-button>
      <a-button variant="ghost" disabled>Disabled Ghost</a-button>
    </div>
  `},m={name:"With Icon",render:()=>a`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary">
        <a-svg name="download" size="16" style="margin-right:0.25rem"></a-svg>
        Download
      </a-button>
      <a-button variant="danger">
        <a-svg name="trash" size="16" style="margin-right:0.25rem"></a-svg>
        Delete
      </a-button>
      <a-button variant="secondary">
        <a-svg name="plus" size="16" style="margin-right:0.25rem"></a-svg>
        Add Item
      </a-button>
      <a-button variant="ghost">
        <a-svg src="/logo.svg" size="16" style="margin-right:0.25rem"></a-svg>
        With Logo
      </a-button>
    </div>
  `},d={name:"Custom Theme (CSS vars)",render:()=>a`
    <div style="
      --elements-color-primary: #8b5cf6;
      --elements-color-primary-hover: #7c3aed;
      --elements-radius: 9999px;
      display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;
    ">
      <a-button variant="primary">Purple Pill</a-button>
      <a-button variant="secondary">Outlined</a-button>
    </div>
  `};var c,p,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    variant: 'primary',
    label: 'Save Changes'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Secondary',
  args: {
    variant: 'secondary',
    label: 'Cancel'
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,h,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Ghost',
  args: {
    variant: 'ghost',
    label: 'Learn More'
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,w,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Danger',
  args: {
    variant: 'danger',
    label: 'Delete Account'
  }
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var D,z,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => html\`
    <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
      <a-button variant="primary" size="sm">Small</a-button>
      <a-button variant="primary" size="md">Medium</a-button>
      <a-button variant="primary" size="lg">Large</a-button>
    </div>
  \`
}`,...(P=(z=s.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var C,L,A;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => html\`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary">Primary</a-button>
      <a-button variant="secondary">Secondary</a-button>
      <a-button variant="ghost">Ghost</a-button>
      <a-button variant="danger">Danger</a-button>
    </div>
  \`
}`,...(A=(L=o.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var G,V,I;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Loading State',
  render: () => html\`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary" loading>Saving…</a-button>
      <a-button variant="secondary" loading>Processing</a-button>
      <a-button variant="danger" loading>Deleting</a-button>
    </div>
  \`
}`,...(I=(V=i.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var W,T,$;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Disabled State',
  render: () => html\`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary" disabled>Disabled Primary</a-button>
      <a-button variant="secondary" disabled>Disabled Secondary</a-button>
      <a-button variant="ghost" disabled>Disabled Ghost</a-button>
    </div>
  \`
}`,...($=(T=l.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var M,k,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With Icon',
  render: () => html\`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary">
        <a-svg name="download" size="16" style="margin-right:0.25rem"></a-svg>
        Download
      </a-button>
      <a-button variant="danger">
        <a-svg name="trash" size="16" style="margin-right:0.25rem"></a-svg>
        Delete
      </a-button>
      <a-button variant="secondary">
        <a-svg name="plus" size="16" style="margin-right:0.25rem"></a-svg>
        Add Item
      </a-button>
      <a-button variant="ghost">
        <a-svg src="/logo.svg" size="16" style="margin-right:0.25rem"></a-svg>
        With Logo
      </a-button>
    </div>
  \`
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var O,_,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Custom Theme (CSS vars)',
  render: () => html\`
    <div style="
      --elements-color-primary: #8b5cf6;
      --elements-color-primary-hover: #7c3aed;
      --elements-radius: 9999px;
      display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;
    ">
      <a-button variant="primary">Purple Pill</a-button>
      <a-button variant="secondary">Outlined</a-button>
    </div>
  \`
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const R=["Primary","Secondary","Ghost","Danger","Sizes","AllVariants","LoadingState","DisabledState","WithIcon","CustomTheme"];export{o as AllVariants,d as CustomTheme,r as Danger,l as DisabledState,n as Ghost,i as LoadingState,e as Primary,t as Secondary,s as Sizes,m as WithIcon,R as __namedExportsOrder,Q as default};
