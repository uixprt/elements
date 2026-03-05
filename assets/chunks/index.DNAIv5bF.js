var m=Object.defineProperty;var g=(e,s,t)=>s in e?m(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var o=(e,s,t)=>g(e,typeof s!="symbol"?s+"":s,t);const u=`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    vertical-align: middle;
    box-sizing: border-box;
  }

  :host([hidden]) {
    display: none;
  }

  svg {
    display: block;
    width: var(--elements-icon-size, 24px);
    height: var(--elements-icon-size, 24px);
    fill: currentColor;
    overflow: hidden;
  }
`,h=typeof CSSStyleSheet<"u"?(()=>{const e=new CSSStyleSheet;return e.replaceSync(u),e})():null,v=u,y={star:'<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-3.885a.562.562 0 0 0-.652 0L4.83 19.64a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L.86 9.397c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>',heart:'<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>',check:'<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>',"x-mark":'<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>',plus:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>',minus:'<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>',home:'<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>',user:'<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>',settings:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>',trash:'<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>',search:'<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>',bell:'<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>',lightning:'<path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>',eye:'<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>',download:'<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>',upload:'<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"/>'};class _ extends HTMLElement{constructor(){super();o(this,"_shadow");o(this,"_svgEl",null);o(this,"_slotEl",null);if(this._shadow=this.attachShadow({mode:"open"}),h)this._shadow.adoptedStyleSheets=[h];else{const t=document.createElement("style");t.textContent=v,this._shadow.appendChild(t)}this._render()}static get observedAttributes(){return["name","size","color","label","src"]}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get size(){return Number(this.getAttribute("size")??24)}set size(t){this.setAttribute("size",String(t))}get color(){return this.getAttribute("color")??""}set color(t){this.setAttribute("color",t)}attributeChangedCallback(t,n,i){n!==i&&this._update()}_render(){this._shadow.innerHTML="",this._slotEl=document.createElement("slot"),this._svgEl=document.createElementNS("http://www.w3.org/2000/svg","svg"),this._svgEl.setAttribute("xmlns","http://www.w3.org/2000/svg"),this._svgEl.setAttribute("viewBox","0 0 24 24"),this._svgEl.setAttribute("fill","none"),this._svgEl.setAttribute("stroke","currentColor"),this._svgEl.setAttribute("stroke-width","1.5"),this._svgEl.setAttribute("aria-hidden","true"),this._shadow.appendChild(this._svgEl),this._shadow.appendChild(this._slotEl),this._update()}_update(){const t=this.name,n=this.size,i=this.color,r=this.getAttribute("label")??t,l=this.getAttribute("src");if(this.style.setProperty("--elements-icon-size",`${n}px`),i?this.style.color=i:this.style.removeProperty("color"),!this._svgEl)return;if(l){fetch(l).then(a=>a.text()).then(a=>{this._svgEl&&(this._svgEl.innerHTML=a,this._svgEl.style.display="",this._slotEl&&(this._slotEl.style.display="none"),r?(this._svgEl.setAttribute("aria-label",r),this._svgEl.removeAttribute("aria-hidden")):this._svgEl.setAttribute("aria-hidden","true"))}).catch(()=>{this._svgEl&&(this._svgEl.innerHTML="",this._svgEl.style.display="none",this._slotEl&&(this._slotEl.style.display=""))});return}const d=t?y[t]:null;d?(this._svgEl.innerHTML=d,this._svgEl.style.display="",this._slotEl&&(this._slotEl.style.display="none"),r?(this._svgEl.setAttribute("aria-label",r),this._svgEl.removeAttribute("aria-hidden")):this._svgEl.setAttribute("aria-hidden","true")):(this._svgEl.style.display="none",this._slotEl&&(this._slotEl.style.display=""))}}const b=`
  :host {
    display: inline-block;
    box-sizing: border-box;
    font-family: var(--elements-font-family, system-ui, -apple-system, sans-serif);
  }

  :host([hidden]) {
    display: none;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border: none;
    border-radius: var(--elements-radius, 0.375rem);
    font-family: inherit;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s ease, transform 0.1s ease, opacity 0.15s ease, box-shadow 0.15s ease;
    white-space: nowrap;
    user-select: none;
    position: relative;
    overflow: hidden;
    outline: none;
    letter-spacing: 0.01em;
  }

  button:focus-visible {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.45);
  }

  button:active:not(:disabled) {
    transform: scale(0.97);
  }

  /* --- Sizes --- */
  :host([size='sm']) button {
    font-size: 0.8125rem;
    padding: 0.375rem 0.75rem;
    min-height: 2rem;
  }

  :host([size='md']) button,
  button {
    font-size: 0.9375rem;
    padding: 0.5rem 1.125rem;
    min-height: 2.5rem;
  }

  :host([size='lg']) button {
    font-size: 1.0625rem;
    padding: 0.625rem 1.5rem;
    min-height: 3rem;
  }

  /* --- Variants --- */

  /* Primary */
  :host([variant='primary']) button,
  button {
    background: var(--elements-color-primary, #3b82f6);
    color: #fff;
  }
  :host([variant='primary']) button:hover:not(:disabled),
  button:hover:not(:disabled) {
    background: var(--elements-color-primary-hover, #2563eb);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35);
  }

  /* Secondary */
  :host([variant='secondary']) button {
    background: transparent;
    color: var(--elements-color-primary, #3b82f6);
    box-shadow: inset 0 0 0 1.5px var(--elements-color-primary, #3b82f6);
  }
  :host([variant='secondary']) button:hover:not(:disabled) {
    background: rgba(59, 130, 246, 0.08);
    box-shadow: inset 0 0 0 1.5px var(--elements-color-primary-hover, #2563eb);
  }

  /* Ghost */
  :host([variant='ghost']) button {
    background: transparent;
    color: inherit;
    box-shadow: none;
  }
  :host([variant='ghost']) button:hover:not(:disabled) {
    background: var(--elements-color-ghost-hover, rgba(0, 0, 0, 0.06));
  }

  /* Danger */
  :host([variant='danger']) button {
    background: var(--elements-color-danger, #ef4444);
    color: #fff;
  }
  :host([variant='danger']) button:hover:not(:disabled) {
    background: var(--elements-color-danger-hover, #dc2626);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
  }

  /* --- Disabled --- */
  button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  /* --- Loading spinner --- */
  .spinner {
    display: none;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    flex-shrink: 0;
  }

  :host([loading]) .spinner {
    display: block;
  }

  :host([loading]) button {
    cursor: wait;
  }

  :host([loading]) .slot-wrapper {
    opacity: 0.7;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,c=typeof CSSStyleSheet<"u"?(()=>{const e=new CSSStyleSheet;return e.replaceSync(b),e})():null,f=b;class k extends HTMLElement{constructor(){super();o(this,"_shadow");o(this,"_btn");if(this._shadow=this.attachShadow({mode:"open"}),c)this._shadow.adoptedStyleSheets=[c];else{const t=document.createElement("style");t.textContent=f,this._shadow.appendChild(t)}this._render()}static get observedAttributes(){return["variant","size","disabled","loading","type"]}get variant(){return this.getAttribute("variant")??"primary"}set variant(t){this.setAttribute("variant",t)}get size(){return this.getAttribute("size")??"md"}set size(t){this.setAttribute("size",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get loading(){return this.hasAttribute("loading")}set loading(t){t?this.setAttribute("loading",""):this.removeAttribute("loading")}attributeChangedCallback(t,n,i){n!==i&&this._btn&&this._syncButton()}_render(){this._shadow.innerHTML="",this._btn=document.createElement("button"),this._btn.setAttribute("part","button");const t=document.createElement("span");t.className="spinner",t.setAttribute("aria-hidden","true"),this._btn.appendChild(t);const n=document.createElement("span");n.className="slot-wrapper";const i=document.createElement("slot");n.appendChild(i),this._btn.appendChild(n),this._shadow.appendChild(this._btn),this._syncButton()}_syncButton(){const t=this.disabled||this.loading;this._btn.disabled=t,this._btn.setAttribute("type",this.getAttribute("type")??"button"),this.loading?this._btn.setAttribute("aria-busy","true"):this._btn.removeAttribute("aria-busy")}}function p(e,s){customElements.get(e)||customElements.define(e,s)}p("a-svg",_);p("a-button",k);export{k as Button,_ as Svg};
