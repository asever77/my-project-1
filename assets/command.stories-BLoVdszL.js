import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{r as m,e as A}from"./iframe-BdMZbwUm.js";import{R as xn,P as gn,O as fn,C as Cn}from"./index-DnjHYjiR.js";import{P as $}from"./index-BMTS4V62.js";import{u as q}from"./index-DI80qA_d.js";import{a as J}from"./index-COOYaFQ0.js";import{c as P}from"./utils-CBfrqCZ4.js";import{D as vn,c as jn,d as Nn,e as yn,b as bn}from"./dialog-CVsWCIkh.js";import{S as Z}from"./search-BLIwCZDF.js";import{B as wn}from"./button-bDZQ1CGr.js";import{B as O}from"./badge-B3XW2gOL.js";import{C as Y,a as ee,b as ne,c as re,d as te}from"./card-BgCPKrWA.js";import{C as fe}from"./calendar-TKHYDXI1.js";import{U as Ge}from"./users-D0OQj7Zx.js";import{c as Sn}from"./createLucideIcon-CdHLrrBb.js";import{U as Be}from"./user-BJjfzFFu.js";import{S as Le}from"./settings-DU4pWZhP.js";import{F as Q}from"./file-text-DmRPTJWd.js";import{F as he}from"./folder-B9KLKYQ6.js";import{D as In}from"./download-C_QE2hwp.js";import{C as kn}from"./copy-DjfSNRR3.js";import{S as En}from"./scissors-CX1jQ9yg.js";import{S as Fn}from"./square-pen-DxCcn08u.js";import{T as An}from"./trash-2-V1gZ4z9T.js";import{C as Qe}from"./camera-COarpcgO.js";import{B as Ye}from"./bell-D52r2PyL.js";import{S as Dn}from"./shield-a7_S6rP-.js";import{C as en}from"./command-DJbrygGl.js";import{B as Re}from"./book-open-DffYBj6l.js";import{M as nn}from"./mail-jnGPqVVg.js";import{I as rn}from"./image-BUKezXs8.js";import{P as tn}from"./palette-zG9piD6e.js";import{S as Me}from"./star-C0TOQxsF.js";import{P as _e}from"./plus-BRMNfJxT.js";import{E as Rn}from"./external-link-CwwQX_H7.js";import{C as xe}from"./circle-question-mark-CqzTygxD.js";import{H as an}from"./house-CKc6052P.js";import{A as Tn}from"./arrow-right-CvdUpCcu.js";import{U as $n}from"./upload-D-efKita.js";import{C as Pn}from"./clock-DuZK96C-.js";import{Z as ge}from"./zap-CbIKWmf2.js";import{F as Gn}from"./funnel-10QqEpoH.js";import{A as Bn}from"./arrow-up-down-DS44qa8j.js";import{K as Te}from"./keyboard-Bocrq9S2.js";import"./index-CQPQ-BqZ.js";import"./index-B_g0QmXh.js";import"./index-BbsuTJMv.js";import"./index-Cu_wm-Vw.js";import"./index-CdFegrUu.js";import"./index-DYSxFDR_.js";import"./index-BGyhPWDZ.js";import"./index-RnXzWidx.js";import"./index-C2zivziK.js";import"./x-BlIlgLCT.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Ce=Sn("calculator",Ln);var Xe=1,Mn=.9,_n=.8,Kn=.17,Fe=.1,Ae=.999,zn=.9999,Un=.99,Hn=/[\\\/_+.#"@\[\(\{&]/,Vn=/[\\\/_+.#"@\[\(\{&]/g,On=/[\s-]/,sn=/[\s-]/g;function $e(r,a,t,o,d,l,n){if(l===a.length)return d===r.length?Xe:Un;var c=`${d},${l}`;if(n[c]!==void 0)return n[c];for(var N=o.charAt(l),u=t.indexOf(N,d),C=0,v,F,S,R;u>=0;)v=$e(r,a,t,o,u+1,l+1,n),v>C&&(u===d?v*=Xe:Hn.test(r.charAt(u-1))?(v*=_n,S=r.slice(d,u-1).match(Vn),S&&d>0&&(v*=Math.pow(Ae,S.length))):On.test(r.charAt(u-1))?(v*=Mn,R=r.slice(d,u-1).match(sn),R&&d>0&&(v*=Math.pow(Ae,R.length))):(v*=Kn,d>0&&(v*=Math.pow(Ae,u-d))),r.charAt(u)!==a.charAt(l)&&(v*=zn)),(v<Fe&&t.charAt(u-1)===o.charAt(l+1)||o.charAt(l+1)===o.charAt(l)&&t.charAt(u-1)!==o.charAt(l))&&(F=$e(r,a,t,o,u+1,l+2,n),F*Fe>v&&(v=F*Fe)),v>C&&(C=v),u=t.indexOf(N,u+1);return n[c]=C,C}function We(r){return r.toLowerCase().replace(sn," ")}function qn(r,a,t){return r=t&&t.length>0?`${r+" "+t.join(" ")}`:r,$e(r,a,We(r),We(a),0,0,{})}var W='[cmdk-group=""]',De='[cmdk-group-items=""]',Zn='[cmdk-group-heading=""]',dn='[cmdk-item=""]',Je=`${dn}:not([aria-disabled="true"])`,Pe="cmdk-item-select",H="data-value",Xn=(r,a,t)=>qn(r,a,t),mn=m.createContext(void 0),ae=()=>m.useContext(mn),on=m.createContext(void 0),Ke=()=>m.useContext(on),ln=m.createContext(void 0),cn=m.forwardRef((r,a)=>{let t=V(()=>{var s,p;return{search:"",value:(p=(s=r.value)!=null?s:r.defaultValue)!=null?p:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),o=V(()=>new Set),d=V(()=>new Map),l=V(()=>new Map),n=V(()=>new Set),c=un(r),{label:N,children:u,value:C,onValueChange:v,filter:F,shouldFilter:S,loop:R,disablePointerSelection:je=!1,vimBindings:M=!0,...se}=r,Ne=q(),ze=q(),ye=q(),_=m.useRef(null),y=dr();K(()=>{if(C!==void 0){let s=C.trim();t.current.value=s,I.emit()}},[C]),K(()=>{y(6,He)},[]);let I=m.useMemo(()=>({subscribe:s=>(n.current.add(s),()=>n.current.delete(s)),snapshot:()=>t.current,setState:(s,p,x)=>{var i,f,j,k;if(!Object.is(t.current[s],p)){if(t.current[s]=p,s==="search")Ie(),we(),y(1,Se);else if(s==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let w=document.getElementById(ye);w?w.focus():(i=document.getElementById(Ne))==null||i.focus()}if(y(7,()=>{var w;t.current.selectedItemId=(w=U())==null?void 0:w.id,I.emit()}),x||y(5,He),((f=c.current)==null?void 0:f.value)!==void 0){let w=p??"";(k=(j=c.current).onValueChange)==null||k.call(j,w);return}}I.emit()}},emit:()=>{n.current.forEach(s=>s())}}),[]),be=m.useMemo(()=>({value:(s,p,x)=>{var i;p!==((i=l.current.get(s))==null?void 0:i.value)&&(l.current.set(s,{value:p,keywords:x}),t.current.filtered.items.set(s,Ue(p,x)),y(2,()=>{we(),I.emit()}))},item:(s,p)=>(o.current.add(s),p&&(d.current.has(p)?d.current.get(p).add(s):d.current.set(p,new Set([s]))),y(3,()=>{Ie(),we(),t.current.value||Se(),I.emit()}),()=>{l.current.delete(s),o.current.delete(s),t.current.filtered.items.delete(s);let x=U();y(4,()=>{Ie(),x?.getAttribute("id")===s&&Se(),I.emit()})}),group:s=>(d.current.has(s)||d.current.set(s,new Set),()=>{l.current.delete(s),d.current.delete(s)}),filter:()=>c.current.shouldFilter,label:N||r["aria-label"],getDisablePointerSelection:()=>c.current.disablePointerSelection,listId:Ne,inputId:ye,labelId:ze,listInnerRef:_}),[]);function Ue(s,p){var x,i;let f=(i=(x=c.current)==null?void 0:x.filter)!=null?i:Xn;return s?f(s,t.current.search,p):0}function we(){if(!t.current.search||c.current.shouldFilter===!1)return;let s=t.current.filtered.items,p=[];t.current.filtered.groups.forEach(i=>{let f=d.current.get(i),j=0;f.forEach(k=>{let w=s.get(k);j=Math.max(w,j)}),p.push([i,j])});let x=_.current;X().sort((i,f)=>{var j,k;let w=i.getAttribute("id"),de=f.getAttribute("id");return((j=s.get(de))!=null?j:0)-((k=s.get(w))!=null?k:0)}).forEach(i=>{let f=i.closest(De);f?f.appendChild(i.parentElement===f?i:i.closest(`${De} > *`)):x.appendChild(i.parentElement===x?i:i.closest(`${De} > *`))}),p.sort((i,f)=>f[1]-i[1]).forEach(i=>{var f;let j=(f=_.current)==null?void 0:f.querySelector(`${W}[${H}="${encodeURIComponent(i[0])}"]`);j?.parentElement.appendChild(j)})}function Se(){let s=X().find(x=>x.getAttribute("aria-disabled")!=="true"),p=s?.getAttribute(H);I.setState("value",p||void 0)}function Ie(){var s,p,x,i;if(!t.current.search||c.current.shouldFilter===!1){t.current.filtered.count=o.current.size;return}t.current.filtered.groups=new Set;let f=0;for(let j of o.current){let k=(p=(s=l.current.get(j))==null?void 0:s.value)!=null?p:"",w=(i=(x=l.current.get(j))==null?void 0:x.keywords)!=null?i:[],de=Ue(k,w);t.current.filtered.items.set(j,de),de>0&&f++}for(let[j,k]of d.current)for(let w of k)if(t.current.filtered.items.get(w)>0){t.current.filtered.groups.add(j);break}t.current.filtered.count=f}function He(){var s,p,x;let i=U();i&&(((s=i.parentElement)==null?void 0:s.firstChild)===i&&((x=(p=i.closest(W))==null?void 0:p.querySelector(Zn))==null||x.scrollIntoView({block:"nearest"})),i.scrollIntoView({block:"nearest"}))}function U(){var s;return(s=_.current)==null?void 0:s.querySelector(`${dn}[aria-selected="true"]`)}function X(){var s;return Array.from(((s=_.current)==null?void 0:s.querySelectorAll(Je))||[])}function ke(s){let p=X()[s];p&&I.setState("value",p.getAttribute(H))}function Ee(s){var p;let x=U(),i=X(),f=i.findIndex(k=>k===x),j=i[f+s];(p=c.current)!=null&&p.loop&&(j=f+s<0?i[i.length-1]:f+s===i.length?i[0]:i[f+s]),j&&I.setState("value",j.getAttribute(H))}function Ve(s){let p=U(),x=p?.closest(W),i;for(;x&&!i;)x=s>0?ar(x,W):sr(x,W),i=x?.querySelector(Je);i?I.setState("value",i.getAttribute(H)):Ee(s)}let Oe=()=>ke(X().length-1),qe=s=>{s.preventDefault(),s.metaKey?Oe():s.altKey?Ve(1):Ee(1)},Ze=s=>{s.preventDefault(),s.metaKey?ke(0):s.altKey?Ve(-1):Ee(-1)};return m.createElement($.div,{ref:a,tabIndex:-1,...se,"cmdk-root":"",onKeyDown:s=>{var p;(p=se.onKeyDown)==null||p.call(se,s);let x=s.nativeEvent.isComposing||s.keyCode===229;if(!(s.defaultPrevented||x))switch(s.key){case"n":case"j":{M&&s.ctrlKey&&qe(s);break}case"ArrowDown":{qe(s);break}case"p":case"k":{M&&s.ctrlKey&&Ze(s);break}case"ArrowUp":{Ze(s);break}case"Home":{s.preventDefault(),ke(0);break}case"End":{s.preventDefault(),Oe();break}case"Enter":{s.preventDefault();let i=U();if(i){let f=new Event(Pe);i.dispatchEvent(f)}}}}},m.createElement("label",{"cmdk-label":"",htmlFor:be.inputId,id:be.labelId,style:or},N),ve(r,s=>m.createElement(on.Provider,{value:I},m.createElement(mn.Provider,{value:be},s))))}),Wn=m.forwardRef((r,a)=>{var t,o;let d=q(),l=m.useRef(null),n=m.useContext(ln),c=ae(),N=un(r),u=(o=(t=N.current)==null?void 0:t.forceMount)!=null?o:n?.forceMount;K(()=>{if(!u)return c.item(d,n?.id)},[u]);let C=pn(d,l,[r.value,r.children,l],r.keywords),v=Ke(),F=T(y=>y.value&&y.value===C.current),S=T(y=>u||c.filter()===!1?!0:y.search?y.filtered.items.get(d)>0:!0);m.useEffect(()=>{let y=l.current;if(!(!y||r.disabled))return y.addEventListener(Pe,R),()=>y.removeEventListener(Pe,R)},[S,r.onSelect,r.disabled]);function R(){var y,I;je(),(I=(y=N.current).onSelect)==null||I.call(y,C.current)}function je(){v.setState("value",C.current,!0)}if(!S)return null;let{disabled:M,value:se,onSelect:Ne,forceMount:ze,keywords:ye,..._}=r;return m.createElement($.div,{ref:J(l,a),..._,id:d,"cmdk-item":"",role:"option","aria-disabled":!!M,"aria-selected":!!F,"data-disabled":!!M,"data-selected":!!F,onPointerMove:M||c.getDisablePointerSelection()?void 0:je,onClick:M?void 0:R},r.children)}),Jn=m.forwardRef((r,a)=>{let{heading:t,children:o,forceMount:d,...l}=r,n=q(),c=m.useRef(null),N=m.useRef(null),u=q(),C=ae(),v=T(S=>d||C.filter()===!1?!0:S.search?S.filtered.groups.has(n):!0);K(()=>C.group(n),[]),pn(n,c,[r.value,r.heading,N]);let F=m.useMemo(()=>({id:n,forceMount:d}),[d]);return m.createElement($.div,{ref:J(c,a),...l,"cmdk-group":"",role:"presentation",hidden:v?void 0:!0},t&&m.createElement("div",{ref:N,"cmdk-group-heading":"","aria-hidden":!0,id:u},t),ve(r,S=>m.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?u:void 0},m.createElement(ln.Provider,{value:F},S))))}),Qn=m.forwardRef((r,a)=>{let{alwaysRender:t,...o}=r,d=m.useRef(null),l=T(n=>!n.search);return!t&&!l?null:m.createElement($.div,{ref:J(d,a),...o,"cmdk-separator":"",role:"separator"})}),Yn=m.forwardRef((r,a)=>{let{onValueChange:t,...o}=r,d=r.value!=null,l=Ke(),n=T(u=>u.search),c=T(u=>u.selectedItemId),N=ae();return m.useEffect(()=>{r.value!=null&&l.setState("search",r.value)},[r.value]),m.createElement($.input,{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":N.listId,"aria-labelledby":N.labelId,"aria-activedescendant":c,id:N.inputId,type:"text",value:d?r.value:n,onChange:u=>{d||l.setState("search",u.target.value),t?.(u.target.value)}})}),er=m.forwardRef((r,a)=>{let{children:t,label:o="Suggestions",...d}=r,l=m.useRef(null),n=m.useRef(null),c=T(u=>u.selectedItemId),N=ae();return m.useEffect(()=>{if(n.current&&l.current){let u=n.current,C=l.current,v,F=new ResizeObserver(()=>{v=requestAnimationFrame(()=>{let S=u.offsetHeight;C.style.setProperty("--cmdk-list-height",S.toFixed(1)+"px")})});return F.observe(u),()=>{cancelAnimationFrame(v),F.unobserve(u)}}},[]),m.createElement($.div,{ref:J(l,a),...d,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":c,"aria-label":o,id:N.listId},ve(r,u=>m.createElement("div",{ref:J(n,N.listInnerRef),"cmdk-list-sizer":""},u)))}),nr=m.forwardRef((r,a)=>{let{open:t,onOpenChange:o,overlayClassName:d,contentClassName:l,container:n,...c}=r;return m.createElement(xn,{open:t,onOpenChange:o},m.createElement(gn,{container:n},m.createElement(fn,{"cmdk-overlay":"",className:d}),m.createElement(Cn,{"aria-label":r.label,"cmdk-dialog":"",className:l},m.createElement(cn,{ref:a,...c}))))}),rr=m.forwardRef((r,a)=>T(t=>t.filtered.count===0)?m.createElement($.div,{ref:a,...r,"cmdk-empty":"",role:"presentation"}):null),tr=m.forwardRef((r,a)=>{let{progress:t,children:o,label:d="Loading...",...l}=r;return m.createElement($.div,{ref:a,...l,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":d},ve(r,n=>m.createElement("div",{"aria-hidden":!0},n)))}),z=Object.assign(cn,{List:er,Item:Wn,Input:Yn,Group:Jn,Separator:Qn,Dialog:nr,Empty:rr,Loading:tr});function ar(r,a){let t=r.nextElementSibling;for(;t;){if(t.matches(a))return t;t=t.nextElementSibling}}function sr(r,a){let t=r.previousElementSibling;for(;t;){if(t.matches(a))return t;t=t.previousElementSibling}}function un(r){let a=m.useRef(r);return K(()=>{a.current=r}),a}var K=typeof window>"u"?m.useEffect:m.useLayoutEffect;function V(r){let a=m.useRef();return a.current===void 0&&(a.current=r()),a}function T(r){let a=Ke(),t=()=>r(a.snapshot());return m.useSyncExternalStore(a.subscribe,t,t)}function pn(r,a,t,o=[]){let d=m.useRef(),l=ae();return K(()=>{var n;let c=(()=>{var u;for(let C of t){if(typeof C=="string")return C.trim();if(typeof C=="object"&&"current"in C)return C.current?(u=C.current.textContent)==null?void 0:u.trim():d.current}})(),N=o.map(u=>u.trim());l.value(r,c,N),(n=a.current)==null||n.setAttribute(H,c),d.current=c}),d}var dr=()=>{let[r,a]=m.useState(),t=V(()=>new Map);return K(()=>{t.current.forEach(o=>o()),t.current=new Map},[r]),(o,d)=>{t.current.set(o,d),a({})}};function mr(r){let a=r.type;return typeof a=="function"?a(r.props):"render"in a?a.render(r.props):r}function ve({asChild:r,children:a},t){return r&&m.isValidElement(a)?m.cloneElement(mr(a),{ref:a.ref},t(a.props.children)):t(a)}var or={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};function D({className:r,...a}){return e.jsx(z,{"data-slot":"command",className:P("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",r),...a})}function hn({title:r="Command Palette",description:a="Search for a command to run...",children:t,className:o,showCloseButton:d=!0,...l}){return e.jsxs(vn,{...l,children:[e.jsxs(jn,{className:"sr-only",children:[e.jsx(Nn,{children:r}),e.jsx(yn,{children:a})]}),e.jsx(bn,{className:P("overflow-hidden p-0",o),showCloseButton:d,children:e.jsx(D,{className:"[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:t})})]})}function G({className:r,...a}){return e.jsxs("div",{"data-slot":"command-input-wrapper",className:"flex h-9 items-center gap-2 border-b px-3",children:[e.jsx(Z,{className:"size-4 shrink-0 opacity-50"}),e.jsx(z.Input,{"data-slot":"command-input",className:P("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",r),...a})]})}function B({className:r,...a}){return e.jsx(z.List,{"data-slot":"command-list",className:P("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",r),...a})}function L({...r}){return e.jsx(z.Empty,{"data-slot":"command-empty",className:"py-6 text-center text-sm",...r})}function b({className:r,...a}){return e.jsx(z.Group,{"data-slot":"command-group",className:P("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",r),...a})}function E({className:r,...a}){return e.jsx(z.Separator,{"data-slot":"command-separator",className:P("bg-border -mx-1 h-px",r),...a})}function h({className:r,...a}){return e.jsx(z.Item,{"data-slot":"command-item",className:P("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",r),...a})}function g({className:r,...a}){return e.jsx("span",{"data-slot":"command-shortcut",className:P("text-muted-foreground ml-auto text-xs tracking-widest",r),...a})}D.__docgenInfo={description:"",methods:[],displayName:"Command"};hn.__docgenInfo={description:"",methods:[],displayName:"CommandDialog",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search for a command to run..."',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};G.__docgenInfo={description:"",methods:[],displayName:"CommandInput"};B.__docgenInfo={description:"",methods:[],displayName:"CommandList"};L.__docgenInfo={description:"",methods:[],displayName:"CommandEmpty"};b.__docgenInfo={description:"",methods:[],displayName:"CommandGroup"};h.__docgenInfo={description:"",methods:[],displayName:"CommandItem"};g.__docgenInfo={description:"",methods:[],displayName:"CommandShortcut"};E.__docgenInfo={description:"",methods:[],displayName:"CommandSeparator"};const it={title:"UI/Contents/Command",component:D,parameters:{layout:"centered",docs:{description:{component:`
사용자가 빠르게 명령을 검색하고 실행할 수 있는 Command Palette 컴포넌트입니다. cmdk 라이브러리를 기반으로 구축되었습니다.

## 주요 기능
- **빠른 검색**: 키워드로 명령어와 기능을 즉시 찾기
- **키보드 네비게이션**: 화살표 키와 Enter로 완전한 키보드 제어
- **그룹핑**: 관련 명령어들을 카테고리별로 구성
- **단축키 표시**: 각 명령어의 키보드 단축키 안내
- **퍼지 검색**: 정확하지 않은 검색어도 스마트하게 매칭
- **접근성**: 스크린 리더와 키보드 사용자 완벽 지원
- **커스터마이징**: 아이콘, 라벨, 그룹 자유 설정

## 구성 요소
- **Command**: 메인 명령 팔레트 컨테이너
- **CommandDialog**: 모달 형태의 명령 팔레트
- **CommandInput**: 검색 입력 필드
- **CommandList**: 명령어 목록 컨테이너
- **CommandGroup**: 명령어 그룹 (카테고리)
- **CommandItem**: 개별 명령어 항목
- **CommandSeparator**: 그룹 간 구분선
- **CommandShortcut**: 키보드 단축키 표시
- **CommandEmpty**: 검색 결과 없음 상태

## 사용법
\`\`\`tsx
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"

// 기본 사용법
<Command>
  <CommandInput placeholder="명령어를 입력하세요..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup heading="파일">
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>새 파일</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// 다이얼로그 형태
const [open, setOpen] = useState(false)
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="검색..." />
  <CommandList>
    {/* 명령어 항목들 */}
  </CommandList>
</CommandDialog>

// 키보드 바인딩
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])
\`\`\`

## Props
### Command
- \`value\`: 현재 선택된 값
- \`onValueChange\`: 값 변경 핸들러
- \`filter\`: 커스텀 필터 함수
- \`shouldFilter\`: 자동 필터링 여부

### CommandDialog
- \`open\`: 다이얼로그 열림 상태
- \`onOpenChange\`: 상태 변경 핸들러
- \`title\`: 다이얼로그 제목
- \`description\`: 설명 텍스트

### CommandItem
- \`value\`: 항목 값 (검색용)
- \`onSelect\`: 선택 시 실행할 함수
- \`disabled\`: 비활성화 상태
- \`keywords\`: 추가 검색 키워드

## 접근성
- **ARIA 역할**: \`combobox\`, \`listbox\`, \`option\` 역할 제공
- **키보드 네비게이션**: 
  - \`↑↓\` 항목 간 이동
  - \`Enter\` 항목 선택
  - \`Escape\` 닫기
  - \`Tab\` 포커스 이동
- **스크린 리더**: 검색 결과와 선택 항목 명확히 안내
- **포커스 관리**: 다이얼로그 열림 시 검색 필드로 자동 포커스
- **라이브 영역**: 검색 결과 변경 시 실시간 안내

## 사용 사례
- **애플리케이션 런처**: 앱 내 모든 기능에 빠른 접근
- **파일 검색**: 프로젝트 파일과 폴더 빠른 탐색
- **명령어 실행**: 개발 도구의 명령어 팔레트
- **설정 검색**: 복잡한 설정 메뉴에서 빠른 찾기
- **문서 네비게이션**: 긴 문서에서 섹션 이동
- **연락처 검색**: 사용자나 연락처 빠른 찾기
- **작업 관리**: 할 일이나 프로젝트 빠른 전환

## 키보드 단축키
일반적인 단축키 패턴:
- \`Cmd/Ctrl + K\`: 명령 팔레트 열기
- \`Cmd/Ctrl + P\`: 파일 검색
- \`Cmd/Ctrl + Shift + P\`: 명령어 팔레트
- \`/\`: 검색 모드
- \`?\`: 도움말

## 검색 최적화
- **퍼지 매칭**: 오타나 부분 입력도 인식
- **키워드 태그**: 항목별 추가 검색어 설정
- **우선순위**: 자주 사용하는 항목 상위 노출
- **최근 사용**: 최근 선택한 항목 우선 표시
- **카테고리 필터**: 특정 그룹만 검색 가능

## 모범 사례
- 명령어에 명확하고 직관적인 이름 사용
- 아이콘으로 시각적 구분 강화
- 키보드 단축키를 일관성 있게 표시
- 그룹핑으로 관련 명령어 정리
- 빈번한 작업에는 짧은 키워드 제공
- 검색 결과 없음 상태에 대안 제시
- 로딩 상태와 에러 처리 구현
        `}}},tags:["autodocs"],argTypes:{value:{description:"현재 선택된 값"},onValueChange:{description:"값 변경 핸들러"}}},me={render:()=>e.jsxs(D,{className:"rounded-lg border shadow-md max-w-[450px]",children:[e.jsx(G,{placeholder:"명령어를 입력하세요..."}),e.jsxs(B,{children:[e.jsx(L,{children:"검색 결과가 없습니다."}),e.jsxs(b,{heading:"제안",children:[e.jsxs(h,{children:[e.jsx(fe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"일정"})]}),e.jsxs(h,{children:[e.jsx(Ge,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"연락처"})]}),e.jsxs(h,{children:[e.jsx(Ce,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"계산기"})]})]}),e.jsx(E,{}),e.jsxs(b,{heading:"설정",children:[e.jsxs(h,{children:[e.jsx(Be,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"프로필"}),e.jsx(g,{children:"⌘P"})]}),e.jsxs(h,{children:[e.jsx(Le,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"설정"}),e.jsx(g,{children:"⌘,"})]})]})]})]}),parameters:{docs:{description:{story:"기본 Command 컴포넌트입니다. 검색 입력과 그룹화된 명령어 목록을 보여줍니다."}}}},oe={render:()=>{const[r,a]=A.useState(!1);return A.useEffect(()=>{const t=o=>{o.key==="k"&&(o.metaKey||o.ctrlKey)&&(o.preventDefault(),a(d=>!d))};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col gap-2 text-center",children:[e.jsxs("p",{className:"text-sm text-muted-foreground",children:[e.jsxs("kbd",{className:"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",children:[e.jsx("span",{className:"text-xs",children:"⌘"}),"K"]}),"를 눌러 명령 팔레트를 여세요"]}),e.jsx(wn,{onClick:()=>a(!0),children:"명령 팔레트 열기"})]}),e.jsxs(hn,{open:r,onOpenChange:a,title:"명령 팔레트",description:"원하는 기능을 검색하고 실행하세요",children:[e.jsx(G,{placeholder:"기능을 검색하세요..."}),e.jsxs(B,{children:[e.jsx(L,{children:"검색 결과가 없습니다."}),e.jsxs(b,{heading:"파일",children:[e.jsxs(h,{children:[e.jsx(Q,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 파일"}),e.jsx(g,{children:"⌘N"})]}),e.jsxs(h,{children:[e.jsx(he,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 폴더"}),e.jsx(g,{children:"⌘⇧N"})]}),e.jsxs(h,{children:[e.jsx(In,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"다운로드"}),e.jsx(g,{children:"⌘D"})]})]}),e.jsx(E,{}),e.jsxs(b,{heading:"편집",children:[e.jsxs(h,{children:[e.jsx(kn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"복사"}),e.jsx(g,{children:"⌘C"})]}),e.jsxs(h,{children:[e.jsx(En,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"잘라내기"}),e.jsx(g,{children:"⌘X"})]}),e.jsxs(h,{children:[e.jsx(Fn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"편집"}),e.jsx(g,{children:"⌘E"})]}),e.jsxs(h,{children:[e.jsx(An,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"삭제"}),e.jsx(g,{children:"Del"})]})]}),e.jsx(E,{}),e.jsxs(b,{heading:"도구",children:[e.jsxs(h,{children:[e.jsx(Ce,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"계산기"})]}),e.jsxs(h,{children:[e.jsx(fe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"일정"})]}),e.jsxs(h,{children:[e.jsx(Qe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"스크린샷"}),e.jsx(g,{children:"⌘⇧4"})]})]}),e.jsx(E,{}),e.jsxs(b,{heading:"설정",children:[e.jsxs(h,{children:[e.jsx(Le,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"환경설정"}),e.jsx(g,{children:"⌘,"})]}),e.jsxs(h,{children:[e.jsx(Ye,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"알림 설정"})]}),e.jsxs(h,{children:[e.jsx(Dn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"보안 설정"})]})]})]})]})]})},parameters:{docs:{description:{story:"모달 다이얼로그 형태의 Command 팔레트입니다. Cmd+K로 열 수 있습니다."}}}},le={render:()=>{const[r,a]=A.useState(""),t=[{category:"생산성",apps:[{name:"문서 작성기",icon:Q,description:"텍스트 문서 작성 및 편집",shortcut:"⌘1"},{name:"스프레드시트",icon:Ce,description:"표 계산 및 데이터 분석",shortcut:"⌘2"},{name:"프레젠테이션",icon:Re,description:"슬라이드 프레젠테이션 제작",shortcut:"⌘3"},{name:"일정 관리",icon:fe,description:"일정 및 회의 관리",shortcut:"⌘4"}]},{category:"커뮤니케이션",apps:[{name:"이메일",icon:nn,description:"메일 송수신 및 관리",shortcut:"⌘M"},{name:"메신저",icon:Ge,description:"실시간 채팅 및 화상 통화",shortcut:"⌘T"},{name:"화상 회의",icon:Qe,description:"온라인 미팅 및 웨비나",shortcut:"⌘V"}]},{category:"디자인",apps:[{name:"이미지 편집기",icon:rn,description:"사진 편집 및 보정",shortcut:"⌘I"},{name:"벡터 디자인",icon:tn,description:"로고 및 일러스트 제작",shortcut:"⌘R"},{name:"UI 디자인",icon:Me,description:"웹 및 앱 인터페이스 디자인",shortcut:"⌘U"}]}];return e.jsx("div",{className:"w-[500px] space-y-4",children:e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(en,{className:"h-5 w-5"}),"애플리케이션 런처"]}),e.jsx(re,{children:"원하는 앱을 검색하고 빠르게 실행하세요"})]}),e.jsxs(te,{children:[e.jsxs(D,{value:r,onValueChange:a,className:"rounded-lg border",children:[e.jsx(G,{placeholder:"앱 이름을 검색하세요..."}),e.jsxs(B,{children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(Z,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"검색 결과가 없습니다."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"다른 키워드로 검색해보세요."})]})}),t.map(o=>e.jsxs(A.Fragment,{children:[e.jsx(b,{heading:o.category,children:o.apps.map(d=>e.jsxs(h,{value:d.name,onSelect:()=>{a(d.name),console.log(`실행: ${d.name}`)},className:"flex items-center gap-3 py-3",children:[e.jsx(d.icon,{className:"h-8 w-8 p-1.5 bg-primary/10 rounded-md text-primary"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:d.name}),e.jsx("div",{className:"text-xs text-muted-foreground",children:d.description})]}),e.jsx(g,{children:d.shortcut})]},d.name))}),e.jsx(E,{})]},o.category)),e.jsxs(b,{heading:"빠른 작업",children:[e.jsxs(h,{value:"새 창",children:[e.jsx(_e,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 창 열기"}),e.jsx(g,{children:"⌘N"})]}),e.jsxs(h,{value:"전체화면",children:[e.jsx(Rn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"전체화면 모드"}),e.jsx(g,{children:"F11"})]}),e.jsxs(h,{value:"도움말",children:[e.jsx(xe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"도움말"}),e.jsx(g,{children:"F1"})]})]})]})]}),r&&e.jsx("div",{className:"mt-4 p-3 bg-muted rounded-lg",children:e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-medium",children:"선택된 앱:"})," ",r]})})]})]})})},parameters:{docs:{description:{story:"애플리케이션 런처 형태의 Command입니다. 앱을 카테고리별로 구분하고 상세 설명을 제공합니다."}}}},ie={render:()=>{const[r,a]=A.useState("/"),[t,o]=A.useState(""),d=[{name:"Documents",type:"folder",path:"/Documents",size:"-",modified:"오늘"},{name:"Pictures",type:"folder",path:"/Pictures",size:"-",modified:"어제"},{name:"Downloads",type:"folder",path:"/Downloads",size:"-",modified:"2일 전"},{name:"project.pdf",type:"file",path:"/project.pdf",size:"2.4 MB",modified:"1시간 전"},{name:"report.docx",type:"file",path:"/report.docx",size:"856 KB",modified:"3시간 전"},{name:"presentation.pptx",type:"file",path:"/presentation.pptx",size:"4.2 MB",modified:"5시간 전"},{name:"data.xlsx",type:"file",path:"/data.xlsx",size:"1.8 MB",modified:"어제"},{name:"image.png",type:"file",path:"/image.png",size:"524 KB",modified:"2일 전"}],l=(n,c)=>{if(n==="folder")return he;switch(c.split(".").pop()?.toLowerCase()){case"pdf":return Q;case"docx":case"doc":return Re;case"pptx":case"ppt":return Re;case"xlsx":case"xls":return Ce;case"png":case"jpg":case"jpeg":case"gif":return rn;default:return Q}};return e.jsx("div",{className:"w-[600px] space-y-4",children:e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(Z,{className:"h-5 w-5"}),"파일 탐색기"]}),e.jsx(re,{children:"파일과 폴더를 빠르게 검색하고 이동하세요"})]}),e.jsxs(te,{children:[e.jsxs("div",{className:"mb-4 flex items-center gap-2 text-sm",children:[e.jsx(an,{className:"h-4 w-4"}),e.jsx("span",{children:"현재 위치:"}),e.jsx(O,{variant:"secondary",children:r})]}),e.jsxs(D,{value:t,onValueChange:o,className:"rounded-lg border",children:[e.jsx(G,{placeholder:"파일명 또는 폴더명으로 검색..."}),e.jsxs(B,{children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(he,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"파일을 찾을 수 없습니다."})]})}),e.jsx(b,{heading:"폴더",children:d.filter(n=>n.type==="folder").map(n=>{const c=l(n.type,n.name);return e.jsxs(h,{value:n.name,onSelect:()=>{a(n.path),o(n.name)},className:"flex items-center gap-3 py-2",children:[e.jsx(c,{className:"h-5 w-5 text-blue-500"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.name}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["폴더 • ",n.modified]})]}),e.jsx(Tn,{className:"h-4 w-4 text-muted-foreground"})]},n.path)})}),e.jsx(E,{}),e.jsx(b,{heading:"파일",children:d.filter(n=>n.type==="file").map(n=>{const c=l(n.type,n.name);return e.jsxs(h,{value:n.name,onSelect:()=>{o(n.name)},className:"flex items-center gap-3 py-2",children:[e.jsx(c,{className:"h-5 w-5 text-green-500"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.name}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:[n.size," • ",n.modified]})]}),e.jsx(g,{children:"Enter"})]},n.path)})}),e.jsx(E,{}),e.jsxs(b,{heading:"빠른 작업",children:[e.jsxs(h,{value:"새 폴더",children:[e.jsx(_e,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 폴더 만들기"}),e.jsx(g,{children:"⌘⇧N"})]}),e.jsxs(h,{value:"업로드",children:[e.jsx($n,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"파일 업로드"}),e.jsx(g,{children:"⌘U"})]}),e.jsxs(h,{value:"새로고침",children:[e.jsx(Pn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새로고침"}),e.jsx(g,{children:"F5"})]})]})]})]}),t&&e.jsx("div",{className:"mt-4 p-3 bg-muted rounded-lg",children:e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"선택됨:"})," ",t]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"현재 위치:"})," ",r]})]})})]})]})})},parameters:{docs:{description:{story:"파일 탐색기 형태의 Command입니다. 폴더와 파일을 구분하여 표시하고 빠른 작업을 제공합니다."}}}},ce={render:()=>{const[r,a]=A.useState(""),[t,o]=A.useState([{id:"1",title:"프로젝트 기획서 작성",status:"진행중",priority:"높음",due:"오늘",project:"웹사이트 리뉴얼"},{id:"2",title:"디자인 시스템 구축",status:"대기",priority:"중간",due:"내일",project:"웹사이트 리뉴얼"},{id:"3",title:"API 문서 검토",status:"완료",priority:"낮음",due:"어제",project:"백엔드 개발"},{id:"4",title:"사용자 테스트 진행",status:"진행중",priority:"높음",due:"이번 주",project:"모바일 앱"},{id:"5",title:"성능 최적화",status:"대기",priority:"중간",due:"다음 주",project:"백엔드 개발"},{id:"6",title:"배포 준비",status:"검토",priority:"높음",due:"다음 주",project:"웹사이트 리뉴얼"}]),d=n=>{switch(n){case"완료":return e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"});case"진행중":return e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-pulse"});case"대기":return e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"});case"검토":return e.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full"});default:return e.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full"})}},l=n=>{switch(n){case"높음":return"text-red-500";case"중간":return"text-yellow-500";case"낮음":return"text-green-500";default:return"text-gray-500"}};return e.jsx("div",{className:"w-[700px] space-y-4",children:e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(ge,{className:"h-5 w-5"}),"작업 관리자"]}),e.jsx(re,{children:"작업을 검색하고 빠르게 전환하세요"})]}),e.jsxs(te,{children:[e.jsxs(D,{value:r,onValueChange:a,className:"rounded-lg border",children:[e.jsx(G,{placeholder:"작업명, 프로젝트명, 상태로 검색..."}),e.jsxs(B,{children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(Z,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"검색된 작업이 없습니다."})]})}),e.jsx(b,{heading:"오늘 할 일",children:t.filter(n=>n.due==="오늘").map(n=>e.jsxs(h,{value:`${n.title} ${n.project} ${n.status}`,onSelect:()=>a(n.id),className:"flex items-center gap-3 py-3",children:[d(n.status),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.title}),e.jsxs("div",{className:"text-xs text-muted-foreground flex items-center gap-2",children:[e.jsx("span",{children:n.project}),e.jsx("span",{children:"•"}),e.jsxs("span",{className:l(n.priority),children:[n.priority," 우선순위"]})]})]}),e.jsx(O,{variant:n.status==="완료"?"default":"secondary",children:n.status})]},n.id))}),e.jsx(E,{}),e.jsx(b,{heading:"이번 주",children:t.filter(n=>n.due==="이번 주"||n.due==="내일").map(n=>e.jsxs(h,{value:`${n.title} ${n.project} ${n.status}`,onSelect:()=>a(n.id),className:"flex items-center gap-3 py-3",children:[d(n.status),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.title}),e.jsxs("div",{className:"text-xs text-muted-foreground flex items-center gap-2",children:[e.jsx("span",{children:n.project}),e.jsx("span",{children:"•"}),e.jsx("span",{children:n.due}),e.jsx("span",{children:"•"}),e.jsx("span",{className:l(n.priority),children:n.priority})]})]}),e.jsx(O,{variant:n.status==="완료"?"default":"secondary",children:n.status})]},n.id))}),e.jsx(E,{}),e.jsx(b,{heading:"기타",children:t.filter(n=>!["오늘","내일","이번 주"].includes(n.due)).map(n=>e.jsxs(h,{value:`${n.title} ${n.project} ${n.status}`,onSelect:()=>a(n.id),className:"flex items-center gap-3 py-3",children:[d(n.status),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.title}),e.jsxs("div",{className:"text-xs text-muted-foreground flex items-center gap-2",children:[e.jsx("span",{children:n.project}),e.jsx("span",{children:"•"}),e.jsx("span",{children:n.due})]})]}),e.jsx(O,{variant:n.status==="완료"?"default":"secondary",children:n.status})]},n.id))}),e.jsx(E,{}),e.jsxs(b,{heading:"빠른 작업",children:[e.jsxs(h,{value:"새 작업",children:[e.jsx(_e,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 작업 만들기"}),e.jsx(g,{children:"⌘T"})]}),e.jsxs(h,{value:"필터",children:[e.jsx(Gn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"작업 필터"}),e.jsx(g,{children:"⌘F"})]}),e.jsxs(h,{value:"정렬",children:[e.jsx(Bn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"정렬 옵션"}),e.jsx(g,{children:"⌘S"})]})]})]})]}),r&&e.jsx("div",{className:"mt-4 p-4 bg-muted rounded-lg",children:(()=>{const n=t.find(c=>c.id===r);return n?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[d(n.status),e.jsx("span",{className:"font-medium",children:n.title}),e.jsx(O,{variant:"outline",children:n.status})]}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsxs("div",{children:["프로젝트: ",n.project]}),e.jsxs("div",{children:["마감일: ",n.due]}),e.jsxs("div",{children:["우선순위: ",e.jsx("span",{className:l(n.priority),children:n.priority})]})]})]}):null})()})]})]})})},parameters:{docs:{description:{story:"작업 관리자 형태의 Command입니다. 작업 상태, 우선순위, 마감일별로 구분하여 표시합니다."}}}},ue={render:()=>{const[r,a]=A.useState(""),t=[{category:"메인 메뉴",items:[{name:"대시보드",icon:an,path:"/dashboard",shortcut:"⌘1",badge:null},{name:"프로젝트",icon:he,path:"/projects",shortcut:"⌘2",badge:"12"},{name:"작업",icon:ge,path:"/tasks",shortcut:"⌘3",badge:"5"},{name:"팀",icon:Ge,path:"/team",shortcut:"⌘4",badge:null},{name:"일정",icon:fe,path:"/calendar",shortcut:"⌘5",badge:"3"}]},{category:"도구",items:[{name:"파일 관리",icon:Q,path:"/files",shortcut:"⌘F",badge:null},{name:"채팅",icon:nn,path:"/chat",shortcut:"⌘C",badge:"새 메시지"},{name:"알림",icon:Ye,path:"/notifications",shortcut:"⌘N",badge:"2"},{name:"즐겨찾기",icon:Me,path:"/favorites",shortcut:"⌘B",badge:null}]},{category:"설정",items:[{name:"계정 설정",icon:Be,path:"/profile",shortcut:"⌘P",badge:null},{name:"환경 설정",icon:Le,path:"/settings",shortcut:"⌘,",badge:null},{name:"도움말",icon:xe,path:"/help",shortcut:"⌘?",badge:null}]}];return e.jsx("div",{className:"w-[500px] space-y-4",children:e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(Te,{className:"h-5 w-5"}),"빠른 네비게이션"]}),e.jsx(re,{children:"페이지와 기능에 빠르게 이동하세요"})]}),e.jsxs(te,{children:[e.jsxs(D,{value:r,onValueChange:a,className:"rounded-lg border",children:[e.jsx(G,{placeholder:"페이지나 기능을 검색하세요..."}),e.jsxs(B,{children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(Z,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"일치하는 항목이 없습니다."})]})}),t.map(o=>e.jsxs(A.Fragment,{children:[e.jsx(b,{heading:o.category,children:o.items.map(d=>e.jsxs(h,{value:`${d.name} ${d.path}`,onSelect:()=>{a(d.path),console.log(`네비게이션: ${d.path}`)},className:"flex items-center gap-3 py-2",children:[e.jsx(d.icon,{className:"h-4 w-4"}),e.jsx("span",{className:"flex-1",children:d.name}),d.badge&&e.jsx(O,{variant:"secondary",className:"text-xs",children:d.badge}),e.jsx(g,{children:d.shortcut})]},d.path))}),e.jsx(E,{})]},o.category)),e.jsxs(b,{heading:"빠른 작업",children:[e.jsxs(h,{value:"검색",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"전체 검색"}),e.jsx(g,{children:"/"})]}),e.jsxs(h,{value:"명령",children:[e.jsx(en,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"명령 팔레트"}),e.jsx(g,{children:"⌘K"})]}),e.jsxs(h,{value:"테마",children:[e.jsx(tn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"테마 전환"}),e.jsx(g,{children:"⌘⇧T"})]})]})]})]}),r&&e.jsx("div",{className:"mt-4 p-3 bg-muted rounded-lg",children:e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-medium",children:"선택된 경로:"})," ",r]})})]})]})})},parameters:{docs:{description:{story:"네비게이션 메뉴 형태의 Command입니다. 애플리케이션의 모든 페이지와 기능에 빠르게 접근할 수 있습니다."}}}},pe={render:()=>{const[r,a]=A.useState([]),[t,o]=A.useState(""),d=n=>{a(c=>[...c,n]),setTimeout(()=>{a(c=>c.slice(1))},3e3)},l=[{name:"고대비 모드 활성화",description:"화면의 대비를 높여 가독성을 향상시킵니다",icon:ge,shortcut:"⌘⇧H"},{name:"스크린 리더 지원",description:"스크린 리더 사용자를 위한 추가 정보를 제공합니다",icon:Be,shortcut:"⌘⇧S"},{name:"키보드 네비게이션 가이드",description:"키보드만으로 모든 기능에 접근하는 방법을 안내합니다",icon:Te,shortcut:"⌘⇧K"},{name:"폰트 크기 증가",description:"모든 텍스트 크기를 20% 증가시킵니다",icon:ge,shortcut:"⌘+"},{name:"포커스 표시 강화",description:"포커스된 요소를 더 명확하게 표시합니다",icon:Me,shortcut:"⌘⇧F"}];return e.jsxs("div",{className:"space-y-6 w-[600px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Command 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"↑↓"}),"로 명령어 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"}),"로 명령어 실행"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Escape"}),"로 팔레트 닫기"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 포커스 이동"]}),e.jsx("li",{children:"스크린 리더가 명령어 정보와 상태 안내"}),e.jsx("li",{children:"ARIA 라이브 영역으로 검색 결과 변경 알림"})]})]}),e.jsx("div",{"aria-live":"polite","aria-label":"명령 팔레트 상태 안내",className:"sr-only",children:r.map((n,c)=>e.jsx("div",{children:n},c))}),e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsx(ne,{children:"접근 가능한 명령 팔레트"}),e.jsx(re,{children:"완전한 키보드 네비게이션과 스크린 리더 지원"})]}),e.jsxs(te,{children:[e.jsxs(D,{value:t,onValueChange:n=>{o(n),n&&d(`${n} 명령이 선택되었습니다`)},className:"rounded-lg border",role:"combobox","aria-label":"접근성 명령 팔레트",children:[e.jsx(G,{placeholder:"접근성 명령을 검색하세요...","aria-label":"명령 검색",onFocus:()=>d("명령 검색 필드가 활성화되었습니다")}),e.jsxs(B,{role:"listbox","aria-label":"명령 목록",children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(xe,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"일치하는 명령이 없습니다."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"다른 키워드로 검색해보세요."})]})}),e.jsx(b,{heading:"접근성 도구",children:l.map((n,c)=>e.jsxs(h,{value:n.name,onSelect:()=>{o(n.name),d(`${n.name} 명령이 실행되었습니다`)},className:"flex items-start gap-3 py-3",role:"option","aria-describedby":`command-${c}-desc`,children:[e.jsx(n.icon,{className:"h-5 w-5 mt-0.5 text-primary"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.name}),e.jsx("div",{id:`command-${c}-desc`,className:"text-xs text-muted-foreground",children:n.description})]}),e.jsx(g,{"aria-label":`단축키: ${n.shortcut}`,children:n.shortcut})]},n.name))}),e.jsx(E,{}),e.jsxs(b,{heading:"도움말",children:[e.jsxs(h,{value:"키보드 단축키",onSelect:()=>d("키보드 단축키 도움말이 열렸습니다"),children:[e.jsx(Te,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"키보드 단축키 목록"}),e.jsx(g,{"aria-label":"단축키: F1",children:"F1"})]}),e.jsxs(h,{value:"접근성 가이드",onSelect:()=>d("접근성 가이드가 열렸습니다"),children:[e.jsx(xe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"접근성 사용 가이드"}),e.jsx(g,{"aria-label":"단축키: Shift F1",children:"⇧F1"})]})]})]})]}),t&&e.jsxs("div",{className:"mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"w-2 h-2 bg-primary rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-primary",children:"활성 명령"})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium",children:t}),e.jsx("div",{className:"text-muted-foreground mt-1",children:l.find(n=>n.name===t)?.description})]})]}),e.jsxs("div",{className:"mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-green-700 dark:text-green-300",children:"접근성 기능 활성화됨"})]}),e.jsxs("ul",{className:"text-xs text-green-600 dark:text-green-400 space-y-1",children:[e.jsx("li",{children:"• ARIA 역할과 속성 정의됨"}),e.jsx("li",{children:"• 키보드 네비게이션 완전 지원"}),e.jsx("li",{children:"• 스크린 리더 호환성 확보"}),e.jsx("li",{children:"• 라이브 영역으로 상태 변경 안내"}),e.jsx("li",{children:"• 명확한 포커스 표시"}),e.jsx("li",{children:"• 의미있는 라벨과 설명 제공"})]}),r.length>0&&e.jsxs("div",{className:"mt-3 p-2 bg-green-100 dark:bg-green-900 rounded border-l-2 border-green-500",children:[e.jsx("div",{className:"text-xs font-medium text-green-700 dark:text-green-300",children:"최근 안내:"}),e.jsx("div",{className:"text-xs text-green-600 dark:text-green-400",children:r[r.length-1]})]})]})]})]})]})},parameters:{docs:{description:{story:"Command의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."}}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md max-w-[450px]">\r
      <CommandInput placeholder="명령어를 입력하세요..." />\r
      <CommandList>\r
        <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>\r
        <CommandGroup heading="제안">\r
          <CommandItem>\r
            <Calendar className="mr-2 h-4 w-4" />\r
            <span>일정</span>\r
          </CommandItem>\r
          <CommandItem>\r
            <Users className="mr-2 h-4 w-4" />\r
            <span>연락처</span>\r
          </CommandItem>\r
          <CommandItem>\r
            <Calculator className="mr-2 h-4 w-4" />\r
            <span>계산기</span>\r
          </CommandItem>\r
        </CommandGroup>\r
        <CommandSeparator />\r
        <CommandGroup heading="설정">\r
          <CommandItem>\r
            <User className="mr-2 h-4 w-4" />\r
            <span>프로필</span>\r
            <CommandShortcut>⌘P</CommandShortcut>\r
          </CommandItem>\r
          <CommandItem>\r
            <Settings className="mr-2 h-4 w-4" />\r
            <span>설정</span>\r
            <CommandShortcut>⌘,</CommandShortcut>\r
          </CommandItem>\r
        </CommandGroup>\r
      </CommandList>\r
    </Command>,
  parameters: {
    docs: {
      description: {
        story: "기본 Command 컴포넌트입니다. 검색 입력과 그룹화된 명령어 목록을 보여줍니다."
      }
    }
  }
}`,...me.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen(open => !open);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);
    return <div className="space-y-4">\r
        <div className="flex flex-col gap-2 text-center">\r
          <p className="text-sm text-muted-foreground">\r
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">\r
              <span className="text-xs">⌘</span>K\r
            </kbd>\r
            를 눌러 명령 팔레트를 여세요\r
          </p>\r
          <Button onClick={() => setOpen(true)}>명령 팔레트 열기</Button>\r
        </div>\r
\r
        <CommandDialog open={open} onOpenChange={setOpen} title="명령 팔레트" description="원하는 기능을 검색하고 실행하세요">\r
          <CommandInput placeholder="기능을 검색하세요..." />\r
          <CommandList>\r
            <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>\r
            \r
            <CommandGroup heading="파일">\r
              <CommandItem>\r
                <FileText className="mr-2 h-4 w-4" />\r
                <span>새 파일</span>\r
                <CommandShortcut>⌘N</CommandShortcut>\r
              </CommandItem>\r
              <CommandItem>\r
                <Folder className="mr-2 h-4 w-4" />\r
                <span>새 폴더</span>\r
                <CommandShortcut>⌘⇧N</CommandShortcut>\r
              </CommandItem>\r
              <CommandItem>\r
                <Download className="mr-2 h-4 w-4" />\r
                <span>다운로드</span>\r
                <CommandShortcut>⌘D</CommandShortcut>\r
              </CommandItem>\r
            </CommandGroup>\r
            \r
            <CommandSeparator />\r
            \r
            <CommandGroup heading="편집">\r
              <CommandItem>\r
                <Copy className="mr-2 h-4 w-4" />\r
                <span>복사</span>\r
                <CommandShortcut>⌘C</CommandShortcut>\r
              </CommandItem>\r
              <CommandItem>\r
                <Scissors className="mr-2 h-4 w-4" />\r
                <span>잘라내기</span>\r
                <CommandShortcut>⌘X</CommandShortcut>\r
              </CommandItem>\r
              <CommandItem>\r
                <Edit className="mr-2 h-4 w-4" />\r
                <span>편집</span>\r
                <CommandShortcut>⌘E</CommandShortcut>\r
              </CommandItem>\r
              <CommandItem>\r
                <Trash2 className="mr-2 h-4 w-4" />\r
                <span>삭제</span>\r
                <CommandShortcut>Del</CommandShortcut>\r
              </CommandItem>\r
            </CommandGroup>\r
            \r
            <CommandSeparator />\r
            \r
            <CommandGroup heading="도구">\r
              <CommandItem>\r
                <Calculator className="mr-2 h-4 w-4" />\r
                <span>계산기</span>\r
              </CommandItem>\r
              <CommandItem>\r
                <Calendar className="mr-2 h-4 w-4" />\r
                <span>일정</span>\r
              </CommandItem>\r
              <CommandItem>\r
                <Camera className="mr-2 h-4 w-4" />\r
                <span>스크린샷</span>\r
                <CommandShortcut>⌘⇧4</CommandShortcut>\r
              </CommandItem>\r
            </CommandGroup>\r
            \r
            <CommandSeparator />\r
            \r
            <CommandGroup heading="설정">\r
              <CommandItem>\r
                <Settings className="mr-2 h-4 w-4" />\r
                <span>환경설정</span>\r
                <CommandShortcut>⌘,</CommandShortcut>\r
              </CommandItem>\r
              <CommandItem>\r
                <Bell className="mr-2 h-4 w-4" />\r
                <span>알림 설정</span>\r
              </CommandItem>\r
              <CommandItem>\r
                <Shield className="mr-2 h-4 w-4" />\r
                <span>보안 설정</span>\r
              </CommandItem>\r
            </CommandGroup>\r
          </CommandList>\r
        </CommandDialog>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "모달 다이얼로그 형태의 Command 팔레트입니다. Cmd+K로 열 수 있습니다."
      }
    }
  }
}`,...oe.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedApp, setSelectedApp] = React.useState<string>("");
    const applications = [{
      category: "생산성",
      apps: [{
        name: "문서 작성기",
        icon: FileText,
        description: "텍스트 문서 작성 및 편집",
        shortcut: "⌘1"
      }, {
        name: "스프레드시트",
        icon: Calculator,
        description: "표 계산 및 데이터 분석",
        shortcut: "⌘2"
      }, {
        name: "프레젠테이션",
        icon: BookOpen,
        description: "슬라이드 프레젠테이션 제작",
        shortcut: "⌘3"
      }, {
        name: "일정 관리",
        icon: Calendar,
        description: "일정 및 회의 관리",
        shortcut: "⌘4"
      }]
    }, {
      category: "커뮤니케이션",
      apps: [{
        name: "이메일",
        icon: Mail,
        description: "메일 송수신 및 관리",
        shortcut: "⌘M"
      }, {
        name: "메신저",
        icon: Users,
        description: "실시간 채팅 및 화상 통화",
        shortcut: "⌘T"
      }, {
        name: "화상 회의",
        icon: Camera,
        description: "온라인 미팅 및 웨비나",
        shortcut: "⌘V"
      }]
    }, {
      category: "디자인",
      apps: [{
        name: "이미지 편집기",
        icon: Image,
        description: "사진 편집 및 보정",
        shortcut: "⌘I"
      }, {
        name: "벡터 디자인",
        icon: Palette,
        description: "로고 및 일러스트 제작",
        shortcut: "⌘R"
      }, {
        name: "UI 디자인",
        icon: Star,
        description: "웹 및 앱 인터페이스 디자인",
        shortcut: "⌘U"
      }]
    }];
    return <div className="w-[500px] space-y-4">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <CommandIcon className="h-5 w-5" />\r
              애플리케이션 런처\r
            </CardTitle>\r
            <CardDescription>\r
              원하는 앱을 검색하고 빠르게 실행하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <Command value={selectedApp} onValueChange={setSelectedApp} className="rounded-lg border">\r
              <CommandInput placeholder="앱 이름을 검색하세요..." />\r
              <CommandList>\r
                <CommandEmpty>\r
                  <div className="py-6 text-center">\r
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />\r
                    <p className="text-sm text-muted-foreground">검색 결과가 없습니다.</p>\r
                    <p className="text-xs text-muted-foreground mt-1">다른 키워드로 검색해보세요.</p>\r
                  </div>\r
                </CommandEmpty>\r
                \r
                {applications.map(category => <React.Fragment key={category.category}>\r
                    <CommandGroup heading={category.category}>\r
                      {category.apps.map(app => <CommandItem key={app.name} value={app.name} onSelect={() => {
                    setSelectedApp(app.name);
                    // 실제 앱 실행 로직
                    console.log(\`실행: \${app.name}\`);
                  }} className="flex items-center gap-3 py-3">\r
                          <app.icon className="h-8 w-8 p-1.5 bg-primary/10 rounded-md text-primary" />\r
                          <div className="flex-1">\r
                            <div className="font-medium">{app.name}</div>\r
                            <div className="text-xs text-muted-foreground">{app.description}</div>\r
                          </div>\r
                          <CommandShortcut>{app.shortcut}</CommandShortcut>\r
                        </CommandItem>)}\r
                    </CommandGroup>\r
                    <CommandSeparator />\r
                  </React.Fragment>)}\r
                \r
                <CommandGroup heading="빠른 작업">\r
                  <CommandItem value="새 창">\r
                    <Plus className="mr-2 h-4 w-4" />\r
                    <span>새 창 열기</span>\r
                    <CommandShortcut>⌘N</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="전체화면">\r
                    <ExternalLink className="mr-2 h-4 w-4" />\r
                    <span>전체화면 모드</span>\r
                    <CommandShortcut>F11</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="도움말">\r
                    <HelpCircle className="mr-2 h-4 w-4" />\r
                    <span>도움말</span>\r
                    <CommandShortcut>F1</CommandShortcut>\r
                  </CommandItem>\r
                </CommandGroup>\r
              </CommandList>\r
            </Command>\r
\r
            {selectedApp && <div className="mt-4 p-3 bg-muted rounded-lg">\r
                <div className="text-sm">\r
                  <span className="font-medium">선택된 앱:</span> {selectedApp}\r
                </div>\r
              </div>}\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "애플리케이션 런처 형태의 Command입니다. 앱을 카테고리별로 구분하고 상세 설명을 제공합니다."
      }
    }
  }
}`,...le.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPath, setCurrentPath] = React.useState("/");
    const [selectedFile, setSelectedFile] = React.useState("");
    const files = [{
      name: "Documents",
      type: "folder",
      path: "/Documents",
      size: "-",
      modified: "오늘"
    }, {
      name: "Pictures",
      type: "folder",
      path: "/Pictures",
      size: "-",
      modified: "어제"
    }, {
      name: "Downloads",
      type: "folder",
      path: "/Downloads",
      size: "-",
      modified: "2일 전"
    }, {
      name: "project.pdf",
      type: "file",
      path: "/project.pdf",
      size: "2.4 MB",
      modified: "1시간 전"
    }, {
      name: "report.docx",
      type: "file",
      path: "/report.docx",
      size: "856 KB",
      modified: "3시간 전"
    }, {
      name: "presentation.pptx",
      type: "file",
      path: "/presentation.pptx",
      size: "4.2 MB",
      modified: "5시간 전"
    }, {
      name: "data.xlsx",
      type: "file",
      path: "/data.xlsx",
      size: "1.8 MB",
      modified: "어제"
    }, {
      name: "image.png",
      type: "file",
      path: "/image.png",
      size: "524 KB",
      modified: "2일 전"
    }];
    const getFileIcon = (type: string, name: string) => {
      if (type === "folder") return Folder;
      const extension = name.split('.').pop()?.toLowerCase();
      switch (extension) {
        case 'pdf':
          return FileText;
        case 'docx':
        case 'doc':
          return BookOpen;
        case 'pptx':
        case 'ppt':
          return BookOpen;
        case 'xlsx':
        case 'xls':
          return Calculator;
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'gif':
          return Image;
        default:
          return FileText;
      }
    };
    return <div className="w-[600px] space-y-4">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Search className="h-5 w-5" />\r
              파일 탐색기\r
            </CardTitle>\r
            <CardDescription>\r
              파일과 폴더를 빠르게 검색하고 이동하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            {/* 경로 표시 */}\r
            <div className="mb-4 flex items-center gap-2 text-sm">\r
              <Home className="h-4 w-4" />\r
              <span>현재 위치:</span>\r
              <Badge variant="secondary">{currentPath}</Badge>\r
            </div>\r
\r
            <Command value={selectedFile} onValueChange={setSelectedFile} className="rounded-lg border">\r
              <CommandInput placeholder="파일명 또는 폴더명으로 검색..." />\r
              <CommandList>\r
                <CommandEmpty>\r
                  <div className="py-6 text-center">\r
                    <Folder className="mx-auto h-8 w-8 text-muted-foreground mb-2" />\r
                    <p className="text-sm text-muted-foreground">파일을 찾을 수 없습니다.</p>\r
                  </div>\r
                </CommandEmpty>\r
                \r
                <CommandGroup heading="폴더">\r
                  {files.filter(f => f.type === "folder").map(folder => {
                  const IconComponent = getFileIcon(folder.type, folder.name);
                  return <CommandItem key={folder.path} value={folder.name} onSelect={() => {
                    setCurrentPath(folder.path);
                    setSelectedFile(folder.name);
                  }} className="flex items-center gap-3 py-2">\r
                        <IconComponent className="h-5 w-5 text-blue-500" />\r
                        <div className="flex-1">\r
                          <div className="font-medium">{folder.name}</div>\r
                          <div className="text-xs text-muted-foreground">폴더 • {folder.modified}</div>\r
                        </div>\r
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />\r
                      </CommandItem>;
                })}\r
                </CommandGroup>\r
                \r
                <CommandSeparator />\r
                \r
                <CommandGroup heading="파일">\r
                  {files.filter(f => f.type === "file").map(file => {
                  const IconComponent = getFileIcon(file.type, file.name);
                  return <CommandItem key={file.path} value={file.name} onSelect={() => {
                    setSelectedFile(file.name);
                    // 파일 열기 로직
                  }} className="flex items-center gap-3 py-2">\r
                        <IconComponent className="h-5 w-5 text-green-500" />\r
                        <div className="flex-1">\r
                          <div className="font-medium">{file.name}</div>\r
                          <div className="text-xs text-muted-foreground">{file.size} • {file.modified}</div>\r
                        </div>\r
                        <CommandShortcut>Enter</CommandShortcut>\r
                      </CommandItem>;
                })}\r
                </CommandGroup>\r
                \r
                <CommandSeparator />\r
                \r
                <CommandGroup heading="빠른 작업">\r
                  <CommandItem value="새 폴더">\r
                    <Plus className="mr-2 h-4 w-4" />\r
                    <span>새 폴더 만들기</span>\r
                    <CommandShortcut>⌘⇧N</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="업로드">\r
                    <Upload className="mr-2 h-4 w-4" />\r
                    <span>파일 업로드</span>\r
                    <CommandShortcut>⌘U</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="새로고침">\r
                    <Clock className="mr-2 h-4 w-4" />\r
                    <span>새로고침</span>\r
                    <CommandShortcut>F5</CommandShortcut>\r
                  </CommandItem>\r
                </CommandGroup>\r
              </CommandList>\r
            </Command>\r
\r
            {selectedFile && <div className="mt-4 p-3 bg-muted rounded-lg">\r
                <div className="text-sm space-y-1">\r
                  <div><span className="font-medium">선택됨:</span> {selectedFile}</div>\r
                  <div><span className="font-medium">현재 위치:</span> {currentPath}</div>\r
                </div>\r
              </div>}\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "파일 탐색기 형태의 Command입니다. 폴더와 파일을 구분하여 표시하고 빠른 작업을 제공합니다."
      }
    }
  }
}`,...ie.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedTask, setSelectedTask] = React.useState("");
    const [tasks, setTasks] = React.useState([{
      id: "1",
      title: "프로젝트 기획서 작성",
      status: "진행중",
      priority: "높음",
      due: "오늘",
      project: "웹사이트 리뉴얼"
    }, {
      id: "2",
      title: "디자인 시스템 구축",
      status: "대기",
      priority: "중간",
      due: "내일",
      project: "웹사이트 리뉴얼"
    }, {
      id: "3",
      title: "API 문서 검토",
      status: "완료",
      priority: "낮음",
      due: "어제",
      project: "백엔드 개발"
    }, {
      id: "4",
      title: "사용자 테스트 진행",
      status: "진행중",
      priority: "높음",
      due: "이번 주",
      project: "모바일 앱"
    }, {
      id: "5",
      title: "성능 최적화",
      status: "대기",
      priority: "중간",
      due: "다음 주",
      project: "백엔드 개발"
    }, {
      id: "6",
      title: "배포 준비",
      status: "검토",
      priority: "높음",
      due: "다음 주",
      project: "웹사이트 리뉴얼"
    }]);
    const getStatusIcon = (status: string) => {
      switch (status) {
        case "완료":
          return <div className="w-2 h-2 bg-green-500 rounded-full" />;
        case "진행중":
          return <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />;
        case "대기":
          return <div className="w-2 h-2 bg-yellow-500 rounded-full" />;
        case "검토":
          return <div className="w-2 h-2 bg-purple-500 rounded-full" />;
        default:
          return <div className="w-2 h-2 bg-gray-400 rounded-full" />;
      }
    };
    const getPriorityColor = (priority: string) => {
      switch (priority) {
        case "높음":
          return "text-red-500";
        case "중간":
          return "text-yellow-500";
        case "낮음":
          return "text-green-500";
        default:
          return "text-gray-500";
      }
    };
    return <div className="w-[700px] space-y-4">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Zap className="h-5 w-5" />\r
              작업 관리자\r
            </CardTitle>\r
            <CardDescription>\r
              작업을 검색하고 빠르게 전환하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <Command value={selectedTask} onValueChange={setSelectedTask} className="rounded-lg border">\r
              <CommandInput placeholder="작업명, 프로젝트명, 상태로 검색..." />\r
              <CommandList>\r
                <CommandEmpty>\r
                  <div className="py-6 text-center">\r
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />\r
                    <p className="text-sm text-muted-foreground">검색된 작업이 없습니다.</p>\r
                  </div>\r
                </CommandEmpty>\r
                \r
                <CommandGroup heading="오늘 할 일">\r
                  {tasks.filter(t => t.due === "오늘").map(task => <CommandItem key={task.id} value={\`\${task.title} \${task.project} \${task.status}\`} onSelect={() => setSelectedTask(task.id)} className="flex items-center gap-3 py-3">\r
                      {getStatusIcon(task.status)}\r
                      <div className="flex-1">\r
                        <div className="font-medium">{task.title}</div>\r
                        <div className="text-xs text-muted-foreground flex items-center gap-2">\r
                          <span>{task.project}</span>\r
                          <span>•</span>\r
                          <span className={getPriorityColor(task.priority)}>{task.priority} 우선순위</span>\r
                        </div>\r
                      </div>\r
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>\r
                        {task.status}\r
                      </Badge>\r
                    </CommandItem>)}\r
                </CommandGroup>\r
                \r
                <CommandSeparator />\r
                \r
                <CommandGroup heading="이번 주">\r
                  {tasks.filter(t => t.due === "이번 주" || t.due === "내일").map(task => <CommandItem key={task.id} value={\`\${task.title} \${task.project} \${task.status}\`} onSelect={() => setSelectedTask(task.id)} className="flex items-center gap-3 py-3">\r
                      {getStatusIcon(task.status)}\r
                      <div className="flex-1">\r
                        <div className="font-medium">{task.title}</div>\r
                        <div className="text-xs text-muted-foreground flex items-center gap-2">\r
                          <span>{task.project}</span>\r
                          <span>•</span>\r
                          <span>{task.due}</span>\r
                          <span>•</span>\r
                          <span className={getPriorityColor(task.priority)}>{task.priority}</span>\r
                        </div>\r
                      </div>\r
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>\r
                        {task.status}\r
                      </Badge>\r
                    </CommandItem>)}\r
                </CommandGroup>\r
                \r
                <CommandSeparator />\r
                \r
                <CommandGroup heading="기타">\r
                  {tasks.filter(t => !["오늘", "내일", "이번 주"].includes(t.due)).map(task => <CommandItem key={task.id} value={\`\${task.title} \${task.project} \${task.status}\`} onSelect={() => setSelectedTask(task.id)} className="flex items-center gap-3 py-3">\r
                      {getStatusIcon(task.status)}\r
                      <div className="flex-1">\r
                        <div className="font-medium">{task.title}</div>\r
                        <div className="text-xs text-muted-foreground flex items-center gap-2">\r
                          <span>{task.project}</span>\r
                          <span>•</span>\r
                          <span>{task.due}</span>\r
                        </div>\r
                      </div>\r
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>\r
                        {task.status}\r
                      </Badge>\r
                    </CommandItem>)}\r
                </CommandGroup>\r
                \r
                <CommandSeparator />\r
                \r
                <CommandGroup heading="빠른 작업">\r
                  <CommandItem value="새 작업">\r
                    <Plus className="mr-2 h-4 w-4" />\r
                    <span>새 작업 만들기</span>\r
                    <CommandShortcut>⌘T</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="필터">\r
                    <Filter className="mr-2 h-4 w-4" />\r
                    <span>작업 필터</span>\r
                    <CommandShortcut>⌘F</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="정렬">\r
                    <ArrowUpDown className="mr-2 h-4 w-4" />\r
                    <span>정렬 옵션</span>\r
                    <CommandShortcut>⌘S</CommandShortcut>\r
                  </CommandItem>\r
                </CommandGroup>\r
              </CommandList>\r
            </Command>\r
\r
            {selectedTask && <div className="mt-4 p-4 bg-muted rounded-lg">\r
                {(() => {
              const task = tasks.find(t => t.id === selectedTask);
              if (!task) return null;
              return <div className="space-y-2">\r
                      <div className="flex items-center gap-2">\r
                        {getStatusIcon(task.status)}\r
                        <span className="font-medium">{task.title}</span>\r
                        <Badge variant="outline">{task.status}</Badge>\r
                      </div>\r
                      <div className="text-sm text-muted-foreground">\r
                        <div>프로젝트: {task.project}</div>\r
                        <div>마감일: {task.due}</div>\r
                        <div>우선순위: <span className={getPriorityColor(task.priority)}>{task.priority}</span></div>\r
                      </div>\r
                    </div>;
            })()}\r
              </div>}\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "작업 관리자 형태의 Command입니다. 작업 상태, 우선순위, 마감일별로 구분하여 표시합니다."
      }
    }
  }
}`,...ce.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = React.useState("");
    const menuItems = [{
      category: "메인 메뉴",
      items: [{
        name: "대시보드",
        icon: Home,
        path: "/dashboard",
        shortcut: "⌘1",
        badge: null
      }, {
        name: "프로젝트",
        icon: Folder,
        path: "/projects",
        shortcut: "⌘2",
        badge: "12"
      }, {
        name: "작업",
        icon: Zap,
        path: "/tasks",
        shortcut: "⌘3",
        badge: "5"
      }, {
        name: "팀",
        icon: Users,
        path: "/team",
        shortcut: "⌘4",
        badge: null
      }, {
        name: "일정",
        icon: Calendar,
        path: "/calendar",
        shortcut: "⌘5",
        badge: "3"
      }]
    }, {
      category: "도구",
      items: [{
        name: "파일 관리",
        icon: FileText,
        path: "/files",
        shortcut: "⌘F",
        badge: null
      }, {
        name: "채팅",
        icon: Mail,
        path: "/chat",
        shortcut: "⌘C",
        badge: "새 메시지"
      }, {
        name: "알림",
        icon: Bell,
        path: "/notifications",
        shortcut: "⌘N",
        badge: "2"
      }, {
        name: "즐겨찾기",
        icon: Star,
        path: "/favorites",
        shortcut: "⌘B",
        badge: null
      }]
    }, {
      category: "설정",
      items: [{
        name: "계정 설정",
        icon: User,
        path: "/profile",
        shortcut: "⌘P",
        badge: null
      }, {
        name: "환경 설정",
        icon: Settings,
        path: "/settings",
        shortcut: "⌘,",
        badge: null
      }, {
        name: "도움말",
        icon: HelpCircle,
        path: "/help",
        shortcut: "⌘?",
        badge: null
      }]
    }];
    return <div className="w-[500px] space-y-4">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Keyboard className="h-5 w-5" />\r
              빠른 네비게이션\r
            </CardTitle>\r
            <CardDescription>\r
              페이지와 기능에 빠르게 이동하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <Command value={selectedItem} onValueChange={setSelectedItem} className="rounded-lg border">\r
              <CommandInput placeholder="페이지나 기능을 검색하세요..." />\r
              <CommandList>\r
                <CommandEmpty>\r
                  <div className="py-6 text-center">\r
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />\r
                    <p className="text-sm text-muted-foreground">일치하는 항목이 없습니다.</p>\r
                  </div>\r
                </CommandEmpty>\r
                \r
                {menuItems.map(group => <React.Fragment key={group.category}>\r
                    <CommandGroup heading={group.category}>\r
                      {group.items.map(item => <CommandItem key={item.path} value={\`\${item.name} \${item.path}\`} onSelect={() => {
                    setSelectedItem(item.path);
                    // 네비게이션 로직
                    console.log(\`네비게이션: \${item.path}\`);
                  }} className="flex items-center gap-3 py-2">\r
                          <item.icon className="h-4 w-4" />\r
                          <span className="flex-1">{item.name}</span>\r
                          {item.badge && <Badge variant="secondary" className="text-xs">\r
                              {item.badge}\r
                            </Badge>}\r
                          <CommandShortcut>{item.shortcut}</CommandShortcut>\r
                        </CommandItem>)}\r
                    </CommandGroup>\r
                    <CommandSeparator />\r
                  </React.Fragment>)}\r
                \r
                <CommandGroup heading="빠른 작업">\r
                  <CommandItem value="검색">\r
                    <Search className="mr-2 h-4 w-4" />\r
                    <span>전체 검색</span>\r
                    <CommandShortcut>/</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="명령">\r
                    <CommandIcon className="mr-2 h-4 w-4" />\r
                    <span>명령 팔레트</span>\r
                    <CommandShortcut>⌘K</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="테마">\r
                    <Palette className="mr-2 h-4 w-4" />\r
                    <span>테마 전환</span>\r
                    <CommandShortcut>⌘⇧T</CommandShortcut>\r
                  </CommandItem>\r
                </CommandGroup>\r
              </CommandList>\r
            </Command>\r
\r
            {selectedItem && <div className="mt-4 p-3 bg-muted rounded-lg">\r
                <div className="text-sm">\r
                  <span className="font-medium">선택된 경로:</span> {selectedItem}\r
                </div>\r
              </div>}\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "네비게이션 메뉴 형태의 Command입니다. 애플리케이션의 모든 페이지와 기능에 빠르게 접근할 수 있습니다."
      }
    }
  }
}`,...ue.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [announcements, setAnnouncements] = React.useState<string[]>([]);
    const [selectedCommand, setSelectedCommand] = React.useState("");
    const addAnnouncement = (message: string) => {
      setAnnouncements(prev => [...prev, message]);
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 3000);
    };
    const accessibilityCommands = [{
      name: "고대비 모드 활성화",
      description: "화면의 대비를 높여 가독성을 향상시킵니다",
      icon: Zap,
      shortcut: "⌘⇧H"
    }, {
      name: "스크린 리더 지원",
      description: "스크린 리더 사용자를 위한 추가 정보를 제공합니다",
      icon: User,
      shortcut: "⌘⇧S"
    }, {
      name: "키보드 네비게이션 가이드",
      description: "키보드만으로 모든 기능에 접근하는 방법을 안내합니다",
      icon: Keyboard,
      shortcut: "⌘⇧K"
    }, {
      name: "폰트 크기 증가",
      description: "모든 텍스트 크기를 20% 증가시킵니다",
      icon: Zap,
      shortcut: "⌘+"
    }, {
      name: "포커스 표시 강화",
      description: "포커스된 요소를 더 명확하게 표시합니다",
      icon: Star,
      shortcut: "⌘⇧F"
    }];
    return <div className="space-y-6 w-[600px]">\r
        <div className="space-y-2">\r
          <h3 className="text-lg font-semibold">접근성 데모</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Command 컴포넌트의 접근성 기능을 확인해보세요:\r
          </p>\r
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">↑↓</kbd>로 명령어 간 이동</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로 명령어 실행</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 팔레트 닫기</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 포커스 이동</li>\r
            <li>스크린 리더가 명령어 정보와 상태 안내</li>\r
            <li>ARIA 라이브 영역으로 검색 결과 변경 알림</li>\r
          </ul>\r
        </div>\r
\r
        {/* 라이브 영역 */}\r
        <div aria-live="polite" aria-label="명령 팔레트 상태 안내" className="sr-only">\r
          {announcements.map((announcement, index) => <div key={index}>{announcement}</div>)}\r
        </div>\r
\r
        {/* 접근성 명령 팔레트 */}\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>접근 가능한 명령 팔레트</CardTitle>\r
            <CardDescription>\r
              완전한 키보드 네비게이션과 스크린 리더 지원\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <Command value={selectedCommand} onValueChange={value => {
            setSelectedCommand(value);
            if (value) {
              addAnnouncement(\`\${value} 명령이 선택되었습니다\`);
            }
          }} className="rounded-lg border" role="combobox" aria-label="접근성 명령 팔레트">\r
              <CommandInput placeholder="접근성 명령을 검색하세요..." aria-label="명령 검색" onFocus={() => addAnnouncement("명령 검색 필드가 활성화되었습니다")} />\r
              <CommandList role="listbox" aria-label="명령 목록">\r
                <CommandEmpty>\r
                  <div className="py-6 text-center">\r
                    <HelpCircle className="mx-auto h-8 w-8 text-muted-foreground mb-2" />\r
                    <p className="text-sm text-muted-foreground">일치하는 명령이 없습니다.</p>\r
                    <p className="text-xs text-muted-foreground mt-1">다른 키워드로 검색해보세요.</p>\r
                  </div>\r
                </CommandEmpty>\r
                \r
                <CommandGroup heading="접근성 도구">\r
                  {accessibilityCommands.map((command, index) => <CommandItem key={command.name} value={command.name} onSelect={() => {
                  setSelectedCommand(command.name);
                  addAnnouncement(\`\${command.name} 명령이 실행되었습니다\`);
                }} className="flex items-start gap-3 py-3" role="option" aria-describedby={\`command-\${index}-desc\`}>\r
                      <command.icon className="h-5 w-5 mt-0.5 text-primary" />\r
                      <div className="flex-1">\r
                        <div className="font-medium">{command.name}</div>\r
                        <div id={\`command-\${index}-desc\`} className="text-xs text-muted-foreground">\r
                          {command.description}\r
                        </div>\r
                      </div>\r
                      <CommandShortcut aria-label={\`단축키: \${command.shortcut}\`}>\r
                        {command.shortcut}\r
                      </CommandShortcut>\r
                    </CommandItem>)}\r
                </CommandGroup>\r
                \r
                <CommandSeparator />\r
                \r
                <CommandGroup heading="도움말">\r
                  <CommandItem value="키보드 단축키" onSelect={() => addAnnouncement("키보드 단축키 도움말이 열렸습니다")}>\r
                    <Keyboard className="mr-2 h-4 w-4" />\r
                    <span>키보드 단축키 목록</span>\r
                    <CommandShortcut aria-label="단축키: F1">F1</CommandShortcut>\r
                  </CommandItem>\r
                  <CommandItem value="접근성 가이드" onSelect={() => addAnnouncement("접근성 가이드가 열렸습니다")}>\r
                    <HelpCircle className="mr-2 h-4 w-4" />\r
                    <span>접근성 사용 가이드</span>\r
                    <CommandShortcut aria-label="단축키: Shift F1">⇧F1</CommandShortcut>\r
                  </CommandItem>\r
                </CommandGroup>\r
              </CommandList>\r
            </Command>\r
\r
            {/* 선택된 명령 표시 */}\r
            {selectedCommand && <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">\r
                <div className="flex items-center gap-2 mb-2">\r
                  <div className="w-2 h-2 bg-primary rounded-full" />\r
                  <span className="text-sm font-medium text-primary">활성 명령</span>\r
                </div>\r
                <div className="text-sm">\r
                  <div className="font-medium">{selectedCommand}</div>\r
                  <div className="text-muted-foreground mt-1">\r
                    {accessibilityCommands.find(c => c.name === selectedCommand)?.description}\r
                  </div>\r
                </div>\r
              </div>}\r
\r
            {/* 접근성 상태 */}\r
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">\r
              <div className="flex items-center gap-2 mb-2">\r
                <div className="w-2 h-2 bg-green-500 rounded-full" />\r
                <span className="text-sm font-medium text-green-700 dark:text-green-300">\r
                  접근성 기능 활성화됨\r
                </span>\r
              </div>\r
              <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">\r
                <li>• ARIA 역할과 속성 정의됨</li>\r
                <li>• 키보드 네비게이션 완전 지원</li>\r
                <li>• 스크린 리더 호환성 확보</li>\r
                <li>• 라이브 영역으로 상태 변경 안내</li>\r
                <li>• 명확한 포커스 표시</li>\r
                <li>• 의미있는 라벨과 설명 제공</li>\r
              </ul>\r
              \r
              {announcements.length > 0 && <div className="mt-3 p-2 bg-green-100 dark:bg-green-900 rounded border-l-2 border-green-500">\r
                  <div className="text-xs font-medium text-green-700 dark:text-green-300">최근 안내:</div>\r
                  <div className="text-xs text-green-600 dark:text-green-400">\r
                    {announcements[announcements.length - 1]}\r
                  </div>\r
                </div>}\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Command의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...pe.parameters?.docs?.source}}};export{pe as AccessibilityDemo,le as ApplicationLauncher,oe as CommandDialogStory,me as Default,ie as FileExplorer,ue as NavigationMenu,ce as TaskManager,it as default};
