import{b as s}from"./iframe-i9-DXKss.js";import"./preload-helper-Dp1pzeXC.js";const r={name:"Dynamic src (SVG file)",render:(e,{updateArgs:c})=>{let a=e.src||"";return s`
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <label>
          SVG file URL:
          <input
            type="text"
            value=${a}
            @input=${m=>c({src:m.target.value})}
            style="margin-left:0.5rem;width:300px;"
          />
        </label>
        <a-svg src=${a} size="48"></a-svg>
        <div style="font-size:0.85em;color:#888;">
          Try a public SVG URL or a local file served by Vite (e.g. /logo.svg)
        </div>
      </div>
    `},args:{src:"/logo.svg"},argTypes:{src:{control:"text",description:"SVG file URL"},name:{table:{disable:!0}}}},D=["star","heart","check","x-mark","plus","minus","home","user","settings","trash","search","bell","lightning","eye","download","upload"],L={title:"Components/Svg",component:"a-svg-icon",tags:["autodocs"],parameters:{docs:{description:{component:'\nA scalable, accessible SVG icon component with a built-in Heroicons subset.\nUse the `name` attribute to select a built-in icon, or place an `<svg>` in the default slot for custom icons.\n\n```html\n<a-svg name="star" size="32" color="#f59e0b"></a-svg>\n```\n        '}}},argTypes:{name:{control:{type:"select"},options:D,description:"Built-in icon name",table:{defaultValue:{summary:""}}},size:{control:{type:"number",min:12,max:128,step:4},description:"Icon size in pixels",table:{defaultValue:{summary:"24"}}},color:{control:{type:"color"},description:"Icon color (CSS color value)"},label:{control:{type:"text"},description:"Accessible label (aria-label)"}},render:({name:e,size:c,color:a,label:m})=>s`<a-svg
      name=${e??"star"}
      size=${c??24}
      color=${a??""}
      label=${m??""}
    ></a-svg>`},n={name:"Default (Star)",args:{name:"star",size:32,color:"#f59e0b",label:"Star icon"}},t={name:"All Built-in Icons",render:()=>s`
    <div
      style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 1.5rem;
      padding: 1.5rem;
    "
    >
      ${D.map(e=>s`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
            <a-svg name=${e} size="28" color="#94a3b8"></a-svg>
            <span style="font-size:0.7rem;color:#64748b;font-family:monospace">${e}</span>
          </div>
        `)}
    </div>
  `},l={name:"Sizes",render:()=>s`
    <div style="display:flex;align-items:center;gap:1.5rem;">
      ${[12,16,20,24,32,48,64].map(e=>s`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
            <a-svg name="star" size=${e} color="#3b82f6"></a-svg>
            <span style="font-size:0.65rem;color:#64748b">${e}px</span>
          </div>
        `)}
    </div>
  `},o={name:"Colors",render:()=>s`
    <div style="display:flex;gap:1.25rem;align-items:center;">
      ${["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#94a3b8"].map(e=>s`<a-svg name="heart" size="32" color=${e}></a-svg>`)}
    </div>
  `},i={name:"Custom SVG (via slot)",render:()=>s`
    <a-svg size="40">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b">
        <polygon
          points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        />
      </svg>
    </a-svg>
  `};var p,d,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Dynamic src (SVG file)',
  render: (args, {
    updateArgs
  }) => {
    let current = args.src || '';
    return html\`
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <label>
          SVG file URL:
          <input
            type="text"
            value=\${current}
            @input=\${(e: any) => updateArgs({
      src: e.target.value
    })}
            style="margin-left:0.5rem;width:300px;"
          />
        </label>
        <a-svg src=\${current} size="48"></a-svg>
        <div style="font-size:0.85em;color:#888;">
          Try a public SVG URL or a local file served by Vite (e.g. /logo.svg)
        </div>
      </div>
    \`;
  },
  args: {
    src: '/logo.svg'
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'SVG file URL'
    },
    name: {
      table: {
        disable: true
      }
    }
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,v,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Default (Star)',
  args: {
    name: 'star',
    size: 32,
    color: '#f59e0b',
    label: 'Star icon'
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,b,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'All Built-in Icons',
  render: () => html\`
    <div
      style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 1.5rem;
      padding: 1.5rem;
    "
    >
      \${ICON_NAMES.map(name => html\`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
            <a-svg name=\${name} size="28" color="#94a3b8"></a-svg>
            <span style="font-size:0.7rem;color:#64748b;font-family:monospace">\${name}</span>
          </div>
        \`)}
    </div>
  \`
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,z,$;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => html\`
    <div style="display:flex;align-items:center;gap:1.5rem;">
      \${[12, 16, 20, 24, 32, 48, 64].map(size => html\`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
            <a-svg name="star" size=\${size} color="#3b82f6"></a-svg>
            <span style="font-size:0.65rem;color:#64748b">\${size}px</span>
          </div>
        \`)}
    </div>
  \`
}`,...($=(z=l.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var h,V,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => html\`
    <div style="display:flex;gap:1.25rem;align-items:center;">
      \${['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#94a3b8'].map(color => html\`<a-svg name="heart" size="32" color=\${color}></a-svg>\`)}
    </div>
  \`
}`,...(w=(V=o.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var C,G,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Custom SVG (via slot)',
  render: () => html\`
    <a-svg size="40">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b">
        <polygon
          points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        />
      </svg>
    </a-svg>
  \`
}`,...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};const R=["SrcDynamic","Default","AllIcons","Sizes","Colors","CustomSvgSlot"];export{t as AllIcons,o as Colors,i as CustomSvgSlot,n as Default,l as Sizes,r as SrcDynamic,R as __namedExportsOrder,L as default};
