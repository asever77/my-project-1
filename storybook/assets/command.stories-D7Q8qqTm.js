import{j as e}from"./jsx-runtime-qXjPENQY.js";import{r as m,e as A}from"./iframe-vkdy9PSu.js";import{R as xn,P as gn,O as fn,C as Cn}from"./index-BKZ9reNd.js";import{P as $}from"./index-0kxtDDZv.js";import{u as q}from"./index-B0Z9MRuO.js";import{a as J}from"./index-TaS-8cbB.js";import{c as P}from"./utils-CBfrqCZ4.js";import{D as vn,c as jn,d as Nn,e as yn,b as bn}from"./dialog-zkPPFC-d.js";import{S as Z}from"./search-CxwwKcLr.js";import{B as wn}from"./button-BeR2cXOe.js";import{B as O}from"./badge-DHQAmv51.js";import{C as Y,a as ee,b as ne,c as te,d as ae}from"./card-DuW1NBDm.js";import{C as fe}from"./calendar-BXw-wG_S.js";import{U as Ge}from"./users-DT406VQ7.js";import{c as Sn}from"./createLucideIcon-DT2cZkkW.js";import{U as Be}from"./user-BR8oJbTL.js";import{S as Le}from"./settings-TaLyVU6l.js";import{F as Q}from"./file-text-DtujDUZq.js";import{F as he}from"./folder-DJ79xwmU.js";import{D as In}from"./download-tU0MczaK.js";import{C as kn}from"./copy-B0rJY7g4.js";import{S as En}from"./scissors-SgCoh-g4.js";import{S as Fn}from"./square-pen-CMJjZu_3.js";import{T as An}from"./trash-2-Ca0Yiqe1.js";import{C as Qe}from"./camera-BbvXXSXN.js";import{B as Ye}from"./bell-4m82BrZ_.js";import{S as Dn}from"./shield-7rGZh86x.js";import{C as en}from"./command-BWtSV3Gm.js";import{B as Re}from"./book-open-BH7Y4Cxo.js";import{M as nn}from"./mail-DwJXRejZ.js";import{I as tn}from"./image-DriWQomG.js";import{P as an}from"./palette-VVjnbEJa.js";import{S as Me}from"./star-B1Itfmbi.js";import{P as _e}from"./plus-CGNExkA6.js";import{E as Rn}from"./external-link-Cxh5GVsc.js";import{C as xe}from"./circle-question-mark-DBDbs724.js";import{H as sn}from"./house-BaMn0INn.js";import{A as Tn}from"./arrow-right-DCxiha81.js";import{U as $n}from"./upload-DwfqHvw3.js";import{C as Pn}from"./clock-CJ2DUrJL.js";import{Z as ge}from"./zap-DIuwzwbV.js";import{F as Gn}from"./funnel-CnS1HM2w.js";import{A as Bn}from"./arrow-up-down-BxmZxQAf.js";import{K as Te}from"./keyboard-hKm9QTNP.js";import"./index-BeNwZOra.js";import"./index-Dsdd1Jqs.js";import"./index-QCh-e3tA.js";import"./index-DdArwYzb.js";import"./index-DbagnNFI.js";import"./index-0DBZZt5u.js";import"./index-bedW0_xM.js";import"./index-BAWlKGlJ.js";import"./index-BZXyV1Vc.js";import"./x-CtzjTZHi.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Ce=Sn("calculator",Ln);var Xe=1,Mn=.9,_n=.8,Kn=.17,Fe=.1,Ae=.999,zn=.9999,Un=.99,Hn=/[\\\/_+.#"@\[\(\{&]/,Vn=/[\\\/_+.#"@\[\(\{&]/g,On=/[\s-]/,rn=/[\s-]/g;function $e(t,s,a,o,d,l,n){if(l===s.length)return d===t.length?Xe:Un;var c=`${d},${l}`;if(n[c]!==void 0)return n[c];for(var N=o.charAt(l),u=a.indexOf(N,d),C=0,v,F,S,R;u>=0;)v=$e(t,s,a,o,u+1,l+1,n),v>C&&(u===d?v*=Xe:Hn.test(t.charAt(u-1))?(v*=_n,S=t.slice(d,u-1).match(Vn),S&&d>0&&(v*=Math.pow(Ae,S.length))):On.test(t.charAt(u-1))?(v*=Mn,R=t.slice(d,u-1).match(rn),R&&d>0&&(v*=Math.pow(Ae,R.length))):(v*=Kn,d>0&&(v*=Math.pow(Ae,u-d))),t.charAt(u)!==s.charAt(l)&&(v*=zn)),(v<Fe&&a.charAt(u-1)===o.charAt(l+1)||o.charAt(l+1)===o.charAt(l)&&a.charAt(u-1)!==o.charAt(l))&&(F=$e(t,s,a,o,u+1,l+2,n),F*Fe>v&&(v=F*Fe)),v>C&&(C=v),u=a.indexOf(N,u+1);return n[c]=C,C}function We(t){return t.toLowerCase().replace(rn," ")}function qn(t,s,a){return t=a&&a.length>0?`${t+" "+a.join(" ")}`:t,$e(t,s,We(t),We(s),0,0,{})}var W='[cmdk-group=""]',De='[cmdk-group-items=""]',Zn='[cmdk-group-heading=""]',dn='[cmdk-item=""]',Je=`${dn}:not([aria-disabled="true"])`,Pe="cmdk-item-select",H="data-value",Xn=(t,s,a)=>qn(t,s,a),mn=m.createContext(void 0),se=()=>m.useContext(mn),on=m.createContext(void 0),Ke=()=>m.useContext(on),ln=m.createContext(void 0),cn=m.forwardRef((t,s)=>{let a=V(()=>{var r,p;return{search:"",value:(p=(r=t.value)!=null?r:t.defaultValue)!=null?p:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),o=V(()=>new Set),d=V(()=>new Map),l=V(()=>new Map),n=V(()=>new Set),c=un(t),{label:N,children:u,value:C,onValueChange:v,filter:F,shouldFilter:S,loop:R,disablePointerSelection:je=!1,vimBindings:M=!0,...re}=t,Ne=q(),ze=q(),ye=q(),_=m.useRef(null),y=dt();K(()=>{if(C!==void 0){let r=C.trim();a.current.value=r,I.emit()}},[C]),K(()=>{y(6,He)},[]);let I=m.useMemo(()=>({subscribe:r=>(n.current.add(r),()=>n.current.delete(r)),snapshot:()=>a.current,setState:(r,p,x)=>{var i,f,j,k;if(!Object.is(a.current[r],p)){if(a.current[r]=p,r==="search")Ie(),we(),y(1,Se);else if(r==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let w=document.getElementById(ye);w?w.focus():(i=document.getElementById(Ne))==null||i.focus()}if(y(7,()=>{var w;a.current.selectedItemId=(w=U())==null?void 0:w.id,I.emit()}),x||y(5,He),((f=c.current)==null?void 0:f.value)!==void 0){let w=p??"";(k=(j=c.current).onValueChange)==null||k.call(j,w);return}}I.emit()}},emit:()=>{n.current.forEach(r=>r())}}),[]),be=m.useMemo(()=>({value:(r,p,x)=>{var i;p!==((i=l.current.get(r))==null?void 0:i.value)&&(l.current.set(r,{value:p,keywords:x}),a.current.filtered.items.set(r,Ue(p,x)),y(2,()=>{we(),I.emit()}))},item:(r,p)=>(o.current.add(r),p&&(d.current.has(p)?d.current.get(p).add(r):d.current.set(p,new Set([r]))),y(3,()=>{Ie(),we(),a.current.value||Se(),I.emit()}),()=>{l.current.delete(r),o.current.delete(r),a.current.filtered.items.delete(r);let x=U();y(4,()=>{Ie(),x?.getAttribute("id")===r&&Se(),I.emit()})}),group:r=>(d.current.has(r)||d.current.set(r,new Set),()=>{l.current.delete(r),d.current.delete(r)}),filter:()=>c.current.shouldFilter,label:N||t["aria-label"],getDisablePointerSelection:()=>c.current.disablePointerSelection,listId:Ne,inputId:ye,labelId:ze,listInnerRef:_}),[]);function Ue(r,p){var x,i;let f=(i=(x=c.current)==null?void 0:x.filter)!=null?i:Xn;return r?f(r,a.current.search,p):0}function we(){if(!a.current.search||c.current.shouldFilter===!1)return;let r=a.current.filtered.items,p=[];a.current.filtered.groups.forEach(i=>{let f=d.current.get(i),j=0;f.forEach(k=>{let w=r.get(k);j=Math.max(w,j)}),p.push([i,j])});let x=_.current;X().sort((i,f)=>{var j,k;let w=i.getAttribute("id"),de=f.getAttribute("id");return((j=r.get(de))!=null?j:0)-((k=r.get(w))!=null?k:0)}).forEach(i=>{let f=i.closest(De);f?f.appendChild(i.parentElement===f?i:i.closest(`${De} > *`)):x.appendChild(i.parentElement===x?i:i.closest(`${De} > *`))}),p.sort((i,f)=>f[1]-i[1]).forEach(i=>{var f;let j=(f=_.current)==null?void 0:f.querySelector(`${W}[${H}="${encodeURIComponent(i[0])}"]`);j?.parentElement.appendChild(j)})}function Se(){let r=X().find(x=>x.getAttribute("aria-disabled")!=="true"),p=r?.getAttribute(H);I.setState("value",p||void 0)}function Ie(){var r,p,x,i;if(!a.current.search||c.current.shouldFilter===!1){a.current.filtered.count=o.current.size;return}a.current.filtered.groups=new Set;let f=0;for(let j of o.current){let k=(p=(r=l.current.get(j))==null?void 0:r.value)!=null?p:"",w=(i=(x=l.current.get(j))==null?void 0:x.keywords)!=null?i:[],de=Ue(k,w);a.current.filtered.items.set(j,de),de>0&&f++}for(let[j,k]of d.current)for(let w of k)if(a.current.filtered.items.get(w)>0){a.current.filtered.groups.add(j);break}a.current.filtered.count=f}function He(){var r,p,x;let i=U();i&&(((r=i.parentElement)==null?void 0:r.firstChild)===i&&((x=(p=i.closest(W))==null?void 0:p.querySelector(Zn))==null||x.scrollIntoView({block:"nearest"})),i.scrollIntoView({block:"nearest"}))}function U(){var r;return(r=_.current)==null?void 0:r.querySelector(`${dn}[aria-selected="true"]`)}function X(){var r;return Array.from(((r=_.current)==null?void 0:r.querySelectorAll(Je))||[])}function ke(r){let p=X()[r];p&&I.setState("value",p.getAttribute(H))}function Ee(r){var p;let x=U(),i=X(),f=i.findIndex(k=>k===x),j=i[f+r];(p=c.current)!=null&&p.loop&&(j=f+r<0?i[i.length-1]:f+r===i.length?i[0]:i[f+r]),j&&I.setState("value",j.getAttribute(H))}function Ve(r){let p=U(),x=p?.closest(W),i;for(;x&&!i;)x=r>0?st(x,W):rt(x,W),i=x?.querySelector(Je);i?I.setState("value",i.getAttribute(H)):Ee(r)}let Oe=()=>ke(X().length-1),qe=r=>{r.preventDefault(),r.metaKey?Oe():r.altKey?Ve(1):Ee(1)},Ze=r=>{r.preventDefault(),r.metaKey?ke(0):r.altKey?Ve(-1):Ee(-1)};return m.createElement($.div,{ref:s,tabIndex:-1,...re,"cmdk-root":"",onKeyDown:r=>{var p;(p=re.onKeyDown)==null||p.call(re,r);let x=r.nativeEvent.isComposing||r.keyCode===229;if(!(r.defaultPrevented||x))switch(r.key){case"n":case"j":{M&&r.ctrlKey&&qe(r);break}case"ArrowDown":{qe(r);break}case"p":case"k":{M&&r.ctrlKey&&Ze(r);break}case"ArrowUp":{Ze(r);break}case"Home":{r.preventDefault(),ke(0);break}case"End":{r.preventDefault(),Oe();break}case"Enter":{r.preventDefault();let i=U();if(i){let f=new Event(Pe);i.dispatchEvent(f)}}}}},m.createElement("label",{"cmdk-label":"",htmlFor:be.inputId,id:be.labelId,style:ot},N),ve(t,r=>m.createElement(on.Provider,{value:I},m.createElement(mn.Provider,{value:be},r))))}),Wn=m.forwardRef((t,s)=>{var a,o;let d=q(),l=m.useRef(null),n=m.useContext(ln),c=se(),N=un(t),u=(o=(a=N.current)==null?void 0:a.forceMount)!=null?o:n?.forceMount;K(()=>{if(!u)return c.item(d,n?.id)},[u]);let C=pn(d,l,[t.value,t.children,l],t.keywords),v=Ke(),F=T(y=>y.value&&y.value===C.current),S=T(y=>u||c.filter()===!1?!0:y.search?y.filtered.items.get(d)>0:!0);m.useEffect(()=>{let y=l.current;if(!(!y||t.disabled))return y.addEventListener(Pe,R),()=>y.removeEventListener(Pe,R)},[S,t.onSelect,t.disabled]);function R(){var y,I;je(),(I=(y=N.current).onSelect)==null||I.call(y,C.current)}function je(){v.setState("value",C.current,!0)}if(!S)return null;let{disabled:M,value:re,onSelect:Ne,forceMount:ze,keywords:ye,..._}=t;return m.createElement($.div,{ref:J(l,s),..._,id:d,"cmdk-item":"",role:"option","aria-disabled":!!M,"aria-selected":!!F,"data-disabled":!!M,"data-selected":!!F,onPointerMove:M||c.getDisablePointerSelection()?void 0:je,onClick:M?void 0:R},t.children)}),Jn=m.forwardRef((t,s)=>{let{heading:a,children:o,forceMount:d,...l}=t,n=q(),c=m.useRef(null),N=m.useRef(null),u=q(),C=se(),v=T(S=>d||C.filter()===!1?!0:S.search?S.filtered.groups.has(n):!0);K(()=>C.group(n),[]),pn(n,c,[t.value,t.heading,N]);let F=m.useMemo(()=>({id:n,forceMount:d}),[d]);return m.createElement($.div,{ref:J(c,s),...l,"cmdk-group":"",role:"presentation",hidden:v?void 0:!0},a&&m.createElement("div",{ref:N,"cmdk-group-heading":"","aria-hidden":!0,id:u},a),ve(t,S=>m.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":a?u:void 0},m.createElement(ln.Provider,{value:F},S))))}),Qn=m.forwardRef((t,s)=>{let{alwaysRender:a,...o}=t,d=m.useRef(null),l=T(n=>!n.search);return!a&&!l?null:m.createElement($.div,{ref:J(d,s),...o,"cmdk-separator":"",role:"separator"})}),Yn=m.forwardRef((t,s)=>{let{onValueChange:a,...o}=t,d=t.value!=null,l=Ke(),n=T(u=>u.search),c=T(u=>u.selectedItemId),N=se();return m.useEffect(()=>{t.value!=null&&l.setState("search",t.value)},[t.value]),m.createElement($.input,{ref:s,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":N.listId,"aria-labelledby":N.labelId,"aria-activedescendant":c,id:N.inputId,type:"text",value:d?t.value:n,onChange:u=>{d||l.setState("search",u.target.value),a?.(u.target.value)}})}),et=m.forwardRef((t,s)=>{let{children:a,label:o="Suggestions",...d}=t,l=m.useRef(null),n=m.useRef(null),c=T(u=>u.selectedItemId),N=se();return m.useEffect(()=>{if(n.current&&l.current){let u=n.current,C=l.current,v,F=new ResizeObserver(()=>{v=requestAnimationFrame(()=>{let S=u.offsetHeight;C.style.setProperty("--cmdk-list-height",S.toFixed(1)+"px")})});return F.observe(u),()=>{cancelAnimationFrame(v),F.unobserve(u)}}},[]),m.createElement($.div,{ref:J(l,s),...d,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":c,"aria-label":o,id:N.listId},ve(t,u=>m.createElement("div",{ref:J(n,N.listInnerRef),"cmdk-list-sizer":""},u)))}),nt=m.forwardRef((t,s)=>{let{open:a,onOpenChange:o,overlayClassName:d,contentClassName:l,container:n,...c}=t;return m.createElement(xn,{open:a,onOpenChange:o},m.createElement(gn,{container:n},m.createElement(fn,{"cmdk-overlay":"",className:d}),m.createElement(Cn,{"aria-label":t.label,"cmdk-dialog":"",className:l},m.createElement(cn,{ref:s,...c}))))}),tt=m.forwardRef((t,s)=>T(a=>a.filtered.count===0)?m.createElement($.div,{ref:s,...t,"cmdk-empty":"",role:"presentation"}):null),at=m.forwardRef((t,s)=>{let{progress:a,children:o,label:d="Loading...",...l}=t;return m.createElement($.div,{ref:s,...l,"cmdk-loading":"",role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":d},ve(t,n=>m.createElement("div",{"aria-hidden":!0},n)))}),z=Object.assign(cn,{List:et,Item:Wn,Input:Yn,Group:Jn,Separator:Qn,Dialog:nt,Empty:tt,Loading:at});function st(t,s){let a=t.nextElementSibling;for(;a;){if(a.matches(s))return a;a=a.nextElementSibling}}function rt(t,s){let a=t.previousElementSibling;for(;a;){if(a.matches(s))return a;a=a.previousElementSibling}}function un(t){let s=m.useRef(t);return K(()=>{s.current=t}),s}var K=typeof window>"u"?m.useEffect:m.useLayoutEffect;function V(t){let s=m.useRef();return s.current===void 0&&(s.current=t()),s}function T(t){let s=Ke(),a=()=>t(s.snapshot());return m.useSyncExternalStore(s.subscribe,a,a)}function pn(t,s,a,o=[]){let d=m.useRef(),l=se();return K(()=>{var n;let c=(()=>{var u;for(let C of a){if(typeof C=="string")return C.trim();if(typeof C=="object"&&"current"in C)return C.current?(u=C.current.textContent)==null?void 0:u.trim():d.current}})(),N=o.map(u=>u.trim());l.value(t,c,N),(n=s.current)==null||n.setAttribute(H,c),d.current=c}),d}var dt=()=>{let[t,s]=m.useState(),a=V(()=>new Map);return K(()=>{a.current.forEach(o=>o()),a.current=new Map},[t]),(o,d)=>{a.current.set(o,d),s({})}};function mt(t){let s=t.type;return typeof s=="function"?s(t.props):"render"in s?s.render(t.props):t}function ve({asChild:t,children:s},a){return t&&m.isValidElement(s)?m.cloneElement(mt(s),{ref:s.ref},a(s.props.children)):a(s)}var ot={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};function D({className:t,...s}){return e.jsx(z,{"data-slot":"command",className:P("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",t),...s})}function hn({title:t="Command Palette",description:s="Search for a command to run...",children:a,className:o,showCloseButton:d=!0,...l}){return e.jsxs(vn,{...l,children:[e.jsxs(jn,{className:"sr-only",children:[e.jsx(Nn,{children:t}),e.jsx(yn,{children:s})]}),e.jsx(bn,{className:P("overflow-hidden p-0",o),showCloseButton:d,children:e.jsx(D,{className:"[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:a})})]})}function G({className:t,...s}){return e.jsxs("div",{"data-slot":"command-input-wrapper",className:"flex h-9 items-center gap-2 border-b px-3",children:[e.jsx(Z,{className:"size-4 shrink-0 opacity-50"}),e.jsx(z.Input,{"data-slot":"command-input",className:P("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",t),...s})]})}function B({className:t,...s}){return e.jsx(z.List,{"data-slot":"command-list",className:P("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",t),...s})}function L({...t}){return e.jsx(z.Empty,{"data-slot":"command-empty",className:"py-6 text-center text-sm",...t})}function b({className:t,...s}){return e.jsx(z.Group,{"data-slot":"command-group",className:P("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",t),...s})}function E({className:t,...s}){return e.jsx(z.Separator,{"data-slot":"command-separator",className:P("bg-border -mx-1 h-px",t),...s})}function h({className:t,...s}){return e.jsx(z.Item,{"data-slot":"command-item",className:P("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...s})}function g({className:t,...s}){return e.jsx("span",{"data-slot":"command-shortcut",className:P("text-muted-foreground ml-auto text-xs tracking-widest",t),...s})}D.__docgenInfo={description:"",methods:[],displayName:"Command"};hn.__docgenInfo={description:"",methods:[],displayName:"CommandDialog",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search for a command to run..."',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};G.__docgenInfo={description:"",methods:[],displayName:"CommandInput"};B.__docgenInfo={description:"",methods:[],displayName:"CommandList"};L.__docgenInfo={description:"",methods:[],displayName:"CommandEmpty"};b.__docgenInfo={description:"",methods:[],displayName:"CommandGroup"};h.__docgenInfo={description:"",methods:[],displayName:"CommandItem"};g.__docgenInfo={description:"",methods:[],displayName:"CommandShortcut"};E.__docgenInfo={description:"",methods:[],displayName:"CommandSeparator"};const ia={title:"UI/Contents/Command",component:D,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{value:{description:"현재 선택된 값"},onValueChange:{description:"값 변경 핸들러"}}},me={render:()=>e.jsxs(D,{className:"rounded-lg border shadow-md max-w-[450px]",children:[e.jsx(G,{placeholder:"명령어를 입력하세요..."}),e.jsxs(B,{children:[e.jsx(L,{children:"검색 결과가 없습니다."}),e.jsxs(b,{heading:"제안",children:[e.jsxs(h,{children:[e.jsx(fe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"일정"})]}),e.jsxs(h,{children:[e.jsx(Ge,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"연락처"})]}),e.jsxs(h,{children:[e.jsx(Ce,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"계산기"})]})]}),e.jsx(E,{}),e.jsxs(b,{heading:"설정",children:[e.jsxs(h,{children:[e.jsx(Be,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"프로필"}),e.jsx(g,{children:"⌘P"})]}),e.jsxs(h,{children:[e.jsx(Le,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"설정"}),e.jsx(g,{children:"⌘,"})]})]})]})]}),parameters:{docs:{description:{story:"기본 Command 컴포넌트입니다. 검색 입력과 그룹화된 명령어 목록을 보여줍니다."}}}},oe={render:()=>{const[t,s]=A.useState(!1);return A.useEffect(()=>{const a=o=>{o.key==="k"&&(o.metaKey||o.ctrlKey)&&(o.preventDefault(),s(d=>!d))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col gap-2 text-center",children:[e.jsxs("p",{className:"text-sm text-muted-foreground",children:[e.jsxs("kbd",{className:"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",children:[e.jsx("span",{className:"text-xs",children:"⌘"}),"K"]}),"를 눌러 명령 팔레트를 여세요"]}),e.jsx(wn,{onClick:()=>s(!0),children:"명령 팔레트 열기"})]}),e.jsxs(hn,{open:t,onOpenChange:s,title:"명령 팔레트",description:"원하는 기능을 검색하고 실행하세요",children:[e.jsx(G,{placeholder:"기능을 검색하세요..."}),e.jsxs(B,{children:[e.jsx(L,{children:"검색 결과가 없습니다."}),e.jsxs(b,{heading:"파일",children:[e.jsxs(h,{children:[e.jsx(Q,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 파일"}),e.jsx(g,{children:"⌘N"})]}),e.jsxs(h,{children:[e.jsx(he,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 폴더"}),e.jsx(g,{children:"⌘⇧N"})]}),e.jsxs(h,{children:[e.jsx(In,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"다운로드"}),e.jsx(g,{children:"⌘D"})]})]}),e.jsx(E,{}),e.jsxs(b,{heading:"편집",children:[e.jsxs(h,{children:[e.jsx(kn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"복사"}),e.jsx(g,{children:"⌘C"})]}),e.jsxs(h,{children:[e.jsx(En,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"잘라내기"}),e.jsx(g,{children:"⌘X"})]}),e.jsxs(h,{children:[e.jsx(Fn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"편집"}),e.jsx(g,{children:"⌘E"})]}),e.jsxs(h,{children:[e.jsx(An,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"삭제"}),e.jsx(g,{children:"Del"})]})]}),e.jsx(E,{}),e.jsxs(b,{heading:"도구",children:[e.jsxs(h,{children:[e.jsx(Ce,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"계산기"})]}),e.jsxs(h,{children:[e.jsx(fe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"일정"})]}),e.jsxs(h,{children:[e.jsx(Qe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"스크린샷"}),e.jsx(g,{children:"⌘⇧4"})]})]}),e.jsx(E,{}),e.jsxs(b,{heading:"설정",children:[e.jsxs(h,{children:[e.jsx(Le,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"환경설정"}),e.jsx(g,{children:"⌘,"})]}),e.jsxs(h,{children:[e.jsx(Ye,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"알림 설정"})]}),e.jsxs(h,{children:[e.jsx(Dn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"보안 설정"})]})]})]})]})]})},parameters:{docs:{description:{story:"모달 다이얼로그 형태의 Command 팔레트입니다. Cmd+K로 열 수 있습니다."}}}},le={render:()=>{const[t,s]=A.useState(""),a=[{category:"생산성",apps:[{name:"문서 작성기",icon:Q,description:"텍스트 문서 작성 및 편집",shortcut:"⌘1"},{name:"스프레드시트",icon:Ce,description:"표 계산 및 데이터 분석",shortcut:"⌘2"},{name:"프레젠테이션",icon:Re,description:"슬라이드 프레젠테이션 제작",shortcut:"⌘3"},{name:"일정 관리",icon:fe,description:"일정 및 회의 관리",shortcut:"⌘4"}]},{category:"커뮤니케이션",apps:[{name:"이메일",icon:nn,description:"메일 송수신 및 관리",shortcut:"⌘M"},{name:"메신저",icon:Ge,description:"실시간 채팅 및 화상 통화",shortcut:"⌘T"},{name:"화상 회의",icon:Qe,description:"온라인 미팅 및 웨비나",shortcut:"⌘V"}]},{category:"디자인",apps:[{name:"이미지 편집기",icon:tn,description:"사진 편집 및 보정",shortcut:"⌘I"},{name:"벡터 디자인",icon:an,description:"로고 및 일러스트 제작",shortcut:"⌘R"},{name:"UI 디자인",icon:Me,description:"웹 및 앱 인터페이스 디자인",shortcut:"⌘U"}]}];return e.jsx("div",{className:"w-[500px] space-y-4",children:e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(en,{className:"h-5 w-5"}),"애플리케이션 런처"]}),e.jsx(te,{children:"원하는 앱을 검색하고 빠르게 실행하세요"})]}),e.jsxs(ae,{children:[e.jsxs(D,{value:t,onValueChange:s,className:"rounded-lg border",children:[e.jsx(G,{placeholder:"앱 이름을 검색하세요..."}),e.jsxs(B,{children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(Z,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"검색 결과가 없습니다."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"다른 키워드로 검색해보세요."})]})}),a.map(o=>e.jsxs(A.Fragment,{children:[e.jsx(b,{heading:o.category,children:o.apps.map(d=>e.jsxs(h,{value:d.name,onSelect:()=>{s(d.name),console.log(`실행: ${d.name}`)},className:"flex items-center gap-3 py-3",children:[e.jsx(d.icon,{className:"h-8 w-8 p-1.5 bg-primary/10 rounded-md text-primary"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:d.name}),e.jsx("div",{className:"text-xs text-muted-foreground",children:d.description})]}),e.jsx(g,{children:d.shortcut})]},d.name))}),e.jsx(E,{})]},o.category)),e.jsxs(b,{heading:"빠른 작업",children:[e.jsxs(h,{value:"새 창",children:[e.jsx(_e,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 창 열기"}),e.jsx(g,{children:"⌘N"})]}),e.jsxs(h,{value:"전체화면",children:[e.jsx(Rn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"전체화면 모드"}),e.jsx(g,{children:"F11"})]}),e.jsxs(h,{value:"도움말",children:[e.jsx(xe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"도움말"}),e.jsx(g,{children:"F1"})]})]})]})]}),t&&e.jsx("div",{className:"mt-4 p-3 bg-muted rounded-lg",children:e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-medium",children:"선택된 앱:"})," ",t]})})]})]})})},parameters:{docs:{description:{story:"애플리케이션 런처 형태의 Command입니다. 앱을 카테고리별로 구분하고 상세 설명을 제공합니다."}}}},ie={render:()=>{const[t,s]=A.useState("/"),[a,o]=A.useState(""),d=[{name:"Documents",type:"folder",path:"/Documents",size:"-",modified:"오늘"},{name:"Pictures",type:"folder",path:"/Pictures",size:"-",modified:"어제"},{name:"Downloads",type:"folder",path:"/Downloads",size:"-",modified:"2일 전"},{name:"project.pdf",type:"file",path:"/project.pdf",size:"2.4 MB",modified:"1시간 전"},{name:"report.docx",type:"file",path:"/report.docx",size:"856 KB",modified:"3시간 전"},{name:"presentation.pptx",type:"file",path:"/presentation.pptx",size:"4.2 MB",modified:"5시간 전"},{name:"data.xlsx",type:"file",path:"/data.xlsx",size:"1.8 MB",modified:"어제"},{name:"image.png",type:"file",path:"/image.png",size:"524 KB",modified:"2일 전"}],l=(n,c)=>{if(n==="folder")return he;switch(c.split(".").pop()?.toLowerCase()){case"pdf":return Q;case"docx":case"doc":return Re;case"pptx":case"ppt":return Re;case"xlsx":case"xls":return Ce;case"png":case"jpg":case"jpeg":case"gif":return tn;default:return Q}};return e.jsx("div",{className:"w-[600px] space-y-4",children:e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(Z,{className:"h-5 w-5"}),"파일 탐색기"]}),e.jsx(te,{children:"파일과 폴더를 빠르게 검색하고 이동하세요"})]}),e.jsxs(ae,{children:[e.jsxs("div",{className:"mb-4 flex items-center gap-2 text-sm",children:[e.jsx(sn,{className:"h-4 w-4"}),e.jsx("span",{children:"현재 위치:"}),e.jsx(O,{variant:"secondary",children:t})]}),e.jsxs(D,{value:a,onValueChange:o,className:"rounded-lg border",children:[e.jsx(G,{placeholder:"파일명 또는 폴더명으로 검색..."}),e.jsxs(B,{children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(he,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"파일을 찾을 수 없습니다."})]})}),e.jsx(b,{heading:"폴더",children:d.filter(n=>n.type==="folder").map(n=>{const c=l(n.type,n.name);return e.jsxs(h,{value:n.name,onSelect:()=>{s(n.path),o(n.name)},className:"flex items-center gap-3 py-2",children:[e.jsx(c,{className:"h-5 w-5 text-blue-500"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.name}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["폴더 • ",n.modified]})]}),e.jsx(Tn,{className:"h-4 w-4 text-muted-foreground"})]},n.path)})}),e.jsx(E,{}),e.jsx(b,{heading:"파일",children:d.filter(n=>n.type==="file").map(n=>{const c=l(n.type,n.name);return e.jsxs(h,{value:n.name,onSelect:()=>{o(n.name)},className:"flex items-center gap-3 py-2",children:[e.jsx(c,{className:"h-5 w-5 text-green-500"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.name}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:[n.size," • ",n.modified]})]}),e.jsx(g,{children:"Enter"})]},n.path)})}),e.jsx(E,{}),e.jsxs(b,{heading:"빠른 작업",children:[e.jsxs(h,{value:"새 폴더",children:[e.jsx(_e,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 폴더 만들기"}),e.jsx(g,{children:"⌘⇧N"})]}),e.jsxs(h,{value:"업로드",children:[e.jsx($n,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"파일 업로드"}),e.jsx(g,{children:"⌘U"})]}),e.jsxs(h,{value:"새로고침",children:[e.jsx(Pn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새로고침"}),e.jsx(g,{children:"F5"})]})]})]})]}),a&&e.jsx("div",{className:"mt-4 p-3 bg-muted rounded-lg",children:e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"선택됨:"})," ",a]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"현재 위치:"})," ",t]})]})})]})]})})},parameters:{docs:{description:{story:"파일 탐색기 형태의 Command입니다. 폴더와 파일을 구분하여 표시하고 빠른 작업을 제공합니다."}}}},ce={render:()=>{const[t,s]=A.useState(""),[a,o]=A.useState([{id:"1",title:"프로젝트 기획서 작성",status:"진행중",priority:"높음",due:"오늘",project:"웹사이트 리뉴얼"},{id:"2",title:"디자인 시스템 구축",status:"대기",priority:"중간",due:"내일",project:"웹사이트 리뉴얼"},{id:"3",title:"API 문서 검토",status:"완료",priority:"낮음",due:"어제",project:"백엔드 개발"},{id:"4",title:"사용자 테스트 진행",status:"진행중",priority:"높음",due:"이번 주",project:"모바일 앱"},{id:"5",title:"성능 최적화",status:"대기",priority:"중간",due:"다음 주",project:"백엔드 개발"},{id:"6",title:"배포 준비",status:"검토",priority:"높음",due:"다음 주",project:"웹사이트 리뉴얼"}]),d=n=>{switch(n){case"완료":return e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"});case"진행중":return e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-pulse"});case"대기":return e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"});case"검토":return e.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full"});default:return e.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full"})}},l=n=>{switch(n){case"높음":return"text-red-500";case"중간":return"text-yellow-500";case"낮음":return"text-green-500";default:return"text-gray-500"}};return e.jsx("div",{className:"w-[700px] space-y-4",children:e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(ge,{className:"h-5 w-5"}),"작업 관리자"]}),e.jsx(te,{children:"작업을 검색하고 빠르게 전환하세요"})]}),e.jsxs(ae,{children:[e.jsxs(D,{value:t,onValueChange:s,className:"rounded-lg border",children:[e.jsx(G,{placeholder:"작업명, 프로젝트명, 상태로 검색..."}),e.jsxs(B,{children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(Z,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"검색된 작업이 없습니다."})]})}),e.jsx(b,{heading:"오늘 할 일",children:a.filter(n=>n.due==="오늘").map(n=>e.jsxs(h,{value:`${n.title} ${n.project} ${n.status}`,onSelect:()=>s(n.id),className:"flex items-center gap-3 py-3",children:[d(n.status),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.title}),e.jsxs("div",{className:"text-xs text-muted-foreground flex items-center gap-2",children:[e.jsx("span",{children:n.project}),e.jsx("span",{children:"•"}),e.jsxs("span",{className:l(n.priority),children:[n.priority," 우선순위"]})]})]}),e.jsx(O,{variant:n.status==="완료"?"default":"secondary",children:n.status})]},n.id))}),e.jsx(E,{}),e.jsx(b,{heading:"이번 주",children:a.filter(n=>n.due==="이번 주"||n.due==="내일").map(n=>e.jsxs(h,{value:`${n.title} ${n.project} ${n.status}`,onSelect:()=>s(n.id),className:"flex items-center gap-3 py-3",children:[d(n.status),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.title}),e.jsxs("div",{className:"text-xs text-muted-foreground flex items-center gap-2",children:[e.jsx("span",{children:n.project}),e.jsx("span",{children:"•"}),e.jsx("span",{children:n.due}),e.jsx("span",{children:"•"}),e.jsx("span",{className:l(n.priority),children:n.priority})]})]}),e.jsx(O,{variant:n.status==="완료"?"default":"secondary",children:n.status})]},n.id))}),e.jsx(E,{}),e.jsx(b,{heading:"기타",children:a.filter(n=>!["오늘","내일","이번 주"].includes(n.due)).map(n=>e.jsxs(h,{value:`${n.title} ${n.project} ${n.status}`,onSelect:()=>s(n.id),className:"flex items-center gap-3 py-3",children:[d(n.status),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.title}),e.jsxs("div",{className:"text-xs text-muted-foreground flex items-center gap-2",children:[e.jsx("span",{children:n.project}),e.jsx("span",{children:"•"}),e.jsx("span",{children:n.due})]})]}),e.jsx(O,{variant:n.status==="완료"?"default":"secondary",children:n.status})]},n.id))}),e.jsx(E,{}),e.jsxs(b,{heading:"빠른 작업",children:[e.jsxs(h,{value:"새 작업",children:[e.jsx(_e,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새 작업 만들기"}),e.jsx(g,{children:"⌘T"})]}),e.jsxs(h,{value:"필터",children:[e.jsx(Gn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"작업 필터"}),e.jsx(g,{children:"⌘F"})]}),e.jsxs(h,{value:"정렬",children:[e.jsx(Bn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"정렬 옵션"}),e.jsx(g,{children:"⌘S"})]})]})]})]}),t&&e.jsx("div",{className:"mt-4 p-4 bg-muted rounded-lg",children:(()=>{const n=a.find(c=>c.id===t);return n?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[d(n.status),e.jsx("span",{className:"font-medium",children:n.title}),e.jsx(O,{variant:"outline",children:n.status})]}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsxs("div",{children:["프로젝트: ",n.project]}),e.jsxs("div",{children:["마감일: ",n.due]}),e.jsxs("div",{children:["우선순위: ",e.jsx("span",{className:l(n.priority),children:n.priority})]})]})]}):null})()})]})]})})},parameters:{docs:{description:{story:"작업 관리자 형태의 Command입니다. 작업 상태, 우선순위, 마감일별로 구분하여 표시합니다."}}}},ue={render:()=>{const[t,s]=A.useState(""),a=[{category:"메인 메뉴",items:[{name:"대시보드",icon:sn,path:"/dashboard",shortcut:"⌘1",badge:null},{name:"프로젝트",icon:he,path:"/projects",shortcut:"⌘2",badge:"12"},{name:"작업",icon:ge,path:"/tasks",shortcut:"⌘3",badge:"5"},{name:"팀",icon:Ge,path:"/team",shortcut:"⌘4",badge:null},{name:"일정",icon:fe,path:"/calendar",shortcut:"⌘5",badge:"3"}]},{category:"도구",items:[{name:"파일 관리",icon:Q,path:"/files",shortcut:"⌘F",badge:null},{name:"채팅",icon:nn,path:"/chat",shortcut:"⌘C",badge:"새 메시지"},{name:"알림",icon:Ye,path:"/notifications",shortcut:"⌘N",badge:"2"},{name:"즐겨찾기",icon:Me,path:"/favorites",shortcut:"⌘B",badge:null}]},{category:"설정",items:[{name:"계정 설정",icon:Be,path:"/profile",shortcut:"⌘P",badge:null},{name:"환경 설정",icon:Le,path:"/settings",shortcut:"⌘,",badge:null},{name:"도움말",icon:xe,path:"/help",shortcut:"⌘?",badge:null}]}];return e.jsx("div",{className:"w-[500px] space-y-4",children:e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(Te,{className:"h-5 w-5"}),"빠른 네비게이션"]}),e.jsx(te,{children:"페이지와 기능에 빠르게 이동하세요"})]}),e.jsxs(ae,{children:[e.jsxs(D,{value:t,onValueChange:s,className:"rounded-lg border",children:[e.jsx(G,{placeholder:"페이지나 기능을 검색하세요..."}),e.jsxs(B,{children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(Z,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"일치하는 항목이 없습니다."})]})}),a.map(o=>e.jsxs(A.Fragment,{children:[e.jsx(b,{heading:o.category,children:o.items.map(d=>e.jsxs(h,{value:`${d.name} ${d.path}`,onSelect:()=>{s(d.path),console.log(`네비게이션: ${d.path}`)},className:"flex items-center gap-3 py-2",children:[e.jsx(d.icon,{className:"h-4 w-4"}),e.jsx("span",{className:"flex-1",children:d.name}),d.badge&&e.jsx(O,{variant:"secondary",className:"text-xs",children:d.badge}),e.jsx(g,{children:d.shortcut})]},d.path))}),e.jsx(E,{})]},o.category)),e.jsxs(b,{heading:"빠른 작업",children:[e.jsxs(h,{value:"검색",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"전체 검색"}),e.jsx(g,{children:"/"})]}),e.jsxs(h,{value:"명령",children:[e.jsx(en,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"명령 팔레트"}),e.jsx(g,{children:"⌘K"})]}),e.jsxs(h,{value:"테마",children:[e.jsx(an,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"테마 전환"}),e.jsx(g,{children:"⌘⇧T"})]})]})]})]}),t&&e.jsx("div",{className:"mt-4 p-3 bg-muted rounded-lg",children:e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-medium",children:"선택된 경로:"})," ",t]})})]})]})})},parameters:{docs:{description:{story:"네비게이션 메뉴 형태의 Command입니다. 애플리케이션의 모든 페이지와 기능에 빠르게 접근할 수 있습니다."}}}},pe={render:()=>{const[t,s]=A.useState([]),[a,o]=A.useState(""),d=n=>{s(c=>[...c,n]),setTimeout(()=>{s(c=>c.slice(1))},3e3)},l=[{name:"고대비 모드 활성화",description:"화면의 대비를 높여 가독성을 향상시킵니다",icon:ge,shortcut:"⌘⇧H"},{name:"스크린 리더 지원",description:"스크린 리더 사용자를 위한 추가 정보를 제공합니다",icon:Be,shortcut:"⌘⇧S"},{name:"키보드 네비게이션 가이드",description:"키보드만으로 모든 기능에 접근하는 방법을 안내합니다",icon:Te,shortcut:"⌘⇧K"},{name:"폰트 크기 증가",description:"모든 텍스트 크기를 20% 증가시킵니다",icon:ge,shortcut:"⌘+"},{name:"포커스 표시 강화",description:"포커스된 요소를 더 명확하게 표시합니다",icon:Me,shortcut:"⌘⇧F"}];return e.jsxs("div",{className:"space-y-6 w-[600px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Command 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"↑↓"}),"로 명령어 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"}),"로 명령어 실행"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Escape"}),"로 팔레트 닫기"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 포커스 이동"]}),e.jsx("li",{children:"스크린 리더가 명령어 정보와 상태 안내"}),e.jsx("li",{children:"ARIA 라이브 영역으로 검색 결과 변경 알림"})]})]}),e.jsx("div",{"aria-live":"polite","aria-label":"명령 팔레트 상태 안내",className:"sr-only",children:t.map((n,c)=>e.jsx("div",{children:n},c))}),e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsx(ne,{children:"접근 가능한 명령 팔레트"}),e.jsx(te,{children:"완전한 키보드 네비게이션과 스크린 리더 지원"})]}),e.jsxs(ae,{children:[e.jsxs(D,{value:a,onValueChange:n=>{o(n),n&&d(`${n} 명령이 선택되었습니다`)},className:"rounded-lg border",role:"combobox","aria-label":"접근성 명령 팔레트",children:[e.jsx(G,{placeholder:"접근성 명령을 검색하세요...","aria-label":"명령 검색",onFocus:()=>d("명령 검색 필드가 활성화되었습니다")}),e.jsxs(B,{role:"listbox","aria-label":"명령 목록",children:[e.jsx(L,{children:e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(xe,{className:"mx-auto h-8 w-8 text-muted-foreground mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"일치하는 명령이 없습니다."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"다른 키워드로 검색해보세요."})]})}),e.jsx(b,{heading:"접근성 도구",children:l.map((n,c)=>e.jsxs(h,{value:n.name,onSelect:()=>{o(n.name),d(`${n.name} 명령이 실행되었습니다`)},className:"flex items-start gap-3 py-3",role:"option","aria-describedby":`command-${c}-desc`,children:[e.jsx(n.icon,{className:"h-5 w-5 mt-0.5 text-primary"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.name}),e.jsx("div",{id:`command-${c}-desc`,className:"text-xs text-muted-foreground",children:n.description})]}),e.jsx(g,{"aria-label":`단축키: ${n.shortcut}`,children:n.shortcut})]},n.name))}),e.jsx(E,{}),e.jsxs(b,{heading:"도움말",children:[e.jsxs(h,{value:"키보드 단축키",onSelect:()=>d("키보드 단축키 도움말이 열렸습니다"),children:[e.jsx(Te,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"키보드 단축키 목록"}),e.jsx(g,{"aria-label":"단축키: F1",children:"F1"})]}),e.jsxs(h,{value:"접근성 가이드",onSelect:()=>d("접근성 가이드가 열렸습니다"),children:[e.jsx(xe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"접근성 사용 가이드"}),e.jsx(g,{"aria-label":"단축키: Shift F1",children:"⇧F1"})]})]})]})]}),a&&e.jsxs("div",{className:"mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"w-2 h-2 bg-primary rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-primary",children:"활성 명령"})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium",children:a}),e.jsx("div",{className:"text-muted-foreground mt-1",children:l.find(n=>n.name===a)?.description})]})]}),e.jsxs("div",{className:"mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-green-700 dark:text-green-300",children:"접근성 기능 활성화됨"})]}),e.jsxs("ul",{className:"text-xs text-green-600 dark:text-green-400 space-y-1",children:[e.jsx("li",{children:"• ARIA 역할과 속성 정의됨"}),e.jsx("li",{children:"• 키보드 네비게이션 완전 지원"}),e.jsx("li",{children:"• 스크린 리더 호환성 확보"}),e.jsx("li",{children:"• 라이브 영역으로 상태 변경 안내"}),e.jsx("li",{children:"• 명확한 포커스 표시"}),e.jsx("li",{children:"• 의미있는 라벨과 설명 제공"})]}),t.length>0&&e.jsxs("div",{className:"mt-3 p-2 bg-green-100 dark:bg-green-900 rounded border-l-2 border-green-500",children:[e.jsx("div",{className:"text-xs font-medium text-green-700 dark:text-green-300",children:"최근 안내:"}),e.jsx("div",{className:"text-xs text-green-600 dark:text-green-400",children:t[t.length-1]})]})]})]})]})]})},parameters:{docs:{description:{story:"Command의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."}}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md max-w-[450px]">
      <CommandInput placeholder="명령어를 입력하세요..." />
      <CommandList>
        <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
        <CommandGroup heading="제안">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>일정</span>
          </CommandItem>
          <CommandItem>
            <Users className="mr-2 h-4 w-4" />
            <span>연락처</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>계산기</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="설정">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>프로필</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>설정</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
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
    return <div className="space-y-4">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
            를 눌러 명령 팔레트를 여세요
          </p>
          <Button onClick={() => setOpen(true)}>명령 팔레트 열기</Button>
        </div>

        <CommandDialog open={open} onOpenChange={setOpen} title="명령 팔레트" description="원하는 기능을 검색하고 실행하세요">
          <CommandInput placeholder="기능을 검색하세요..." />
          <CommandList>
            <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
            
            <CommandGroup heading="파일">
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>새 파일</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Folder className="mr-2 h-4 w-4" />
                <span>새 폴더</span>
                <CommandShortcut>⌘⇧N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Download className="mr-2 h-4 w-4" />
                <span>다운로드</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="편집">
              <CommandItem>
                <Copy className="mr-2 h-4 w-4" />
                <span>복사</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Scissors className="mr-2 h-4 w-4" />
                <span>잘라내기</span>
                <CommandShortcut>⌘X</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>편집</span>
                <CommandShortcut>⌘E</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>삭제</span>
                <CommandShortcut>Del</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="도구">
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>계산기</span>
              </CommandItem>
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>일정</span>
              </CommandItem>
              <CommandItem>
                <Camera className="mr-2 h-4 w-4" />
                <span>스크린샷</span>
                <CommandShortcut>⌘⇧4</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="설정">
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>환경설정</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>알림 설정</span>
              </CommandItem>
              <CommandItem>
                <Shield className="mr-2 h-4 w-4" />
                <span>보안 설정</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
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
    return <div className="w-[500px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CommandIcon className="h-5 w-5" />
              애플리케이션 런처
            </CardTitle>
            <CardDescription>
              원하는 앱을 검색하고 빠르게 실행하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Command value={selectedApp} onValueChange={setSelectedApp} className="rounded-lg border">
              <CommandInput placeholder="앱 이름을 검색하세요..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">검색 결과가 없습니다.</p>
                    <p className="text-xs text-muted-foreground mt-1">다른 키워드로 검색해보세요.</p>
                  </div>
                </CommandEmpty>
                
                {applications.map(category => <React.Fragment key={category.category}>
                    <CommandGroup heading={category.category}>
                      {category.apps.map(app => <CommandItem key={app.name} value={app.name} onSelect={() => {
                    setSelectedApp(app.name);
                    // 실제 앱 실행 로직
                    console.log(\`실행: \${app.name}\`);
                  }} className="flex items-center gap-3 py-3">
                          <app.icon className="h-8 w-8 p-1.5 bg-primary/10 rounded-md text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">{app.name}</div>
                            <div className="text-xs text-muted-foreground">{app.description}</div>
                          </div>
                          <CommandShortcut>{app.shortcut}</CommandShortcut>
                        </CommandItem>)}
                    </CommandGroup>
                    <CommandSeparator />
                  </React.Fragment>)}
                
                <CommandGroup heading="빠른 작업">
                  <CommandItem value="새 창">
                    <Plus className="mr-2 h-4 w-4" />
                    <span>새 창 열기</span>
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="전체화면">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <span>전체화면 모드</span>
                    <CommandShortcut>F11</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="도움말">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>도움말</span>
                    <CommandShortcut>F1</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {selectedApp && <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="text-sm">
                  <span className="font-medium">선택된 앱:</span> {selectedApp}
                </div>
              </div>}
          </CardContent>
        </Card>
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
    return <div className="w-[600px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              파일 탐색기
            </CardTitle>
            <CardDescription>
              파일과 폴더를 빠르게 검색하고 이동하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* 경로 표시 */}
            <div className="mb-4 flex items-center gap-2 text-sm">
              <Home className="h-4 w-4" />
              <span>현재 위치:</span>
              <Badge variant="secondary">{currentPath}</Badge>
            </div>

            <Command value={selectedFile} onValueChange={setSelectedFile} className="rounded-lg border">
              <CommandInput placeholder="파일명 또는 폴더명으로 검색..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <Folder className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">파일을 찾을 수 없습니다.</p>
                  </div>
                </CommandEmpty>
                
                <CommandGroup heading="폴더">
                  {files.filter(f => f.type === "folder").map(folder => {
                  const IconComponent = getFileIcon(folder.type, folder.name);
                  return <CommandItem key={folder.path} value={folder.name} onSelect={() => {
                    setCurrentPath(folder.path);
                    setSelectedFile(folder.name);
                  }} className="flex items-center gap-3 py-2">
                        <IconComponent className="h-5 w-5 text-blue-500" />
                        <div className="flex-1">
                          <div className="font-medium">{folder.name}</div>
                          <div className="text-xs text-muted-foreground">폴더 • {folder.modified}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </CommandItem>;
                })}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="파일">
                  {files.filter(f => f.type === "file").map(file => {
                  const IconComponent = getFileIcon(file.type, file.name);
                  return <CommandItem key={file.path} value={file.name} onSelect={() => {
                    setSelectedFile(file.name);
                    // 파일 열기 로직
                  }} className="flex items-center gap-3 py-2">
                        <IconComponent className="h-5 w-5 text-green-500" />
                        <div className="flex-1">
                          <div className="font-medium">{file.name}</div>
                          <div className="text-xs text-muted-foreground">{file.size} • {file.modified}</div>
                        </div>
                        <CommandShortcut>Enter</CommandShortcut>
                      </CommandItem>;
                })}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="빠른 작업">
                  <CommandItem value="새 폴더">
                    <Plus className="mr-2 h-4 w-4" />
                    <span>새 폴더 만들기</span>
                    <CommandShortcut>⌘⇧N</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="업로드">
                    <Upload className="mr-2 h-4 w-4" />
                    <span>파일 업로드</span>
                    <CommandShortcut>⌘U</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="새로고침">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>새로고침</span>
                    <CommandShortcut>F5</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {selectedFile && <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="text-sm space-y-1">
                  <div><span className="font-medium">선택됨:</span> {selectedFile}</div>
                  <div><span className="font-medium">현재 위치:</span> {currentPath}</div>
                </div>
              </div>}
          </CardContent>
        </Card>
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
    return <div className="w-[700px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              작업 관리자
            </CardTitle>
            <CardDescription>
              작업을 검색하고 빠르게 전환하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Command value={selectedTask} onValueChange={setSelectedTask} className="rounded-lg border">
              <CommandInput placeholder="작업명, 프로젝트명, 상태로 검색..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">검색된 작업이 없습니다.</p>
                  </div>
                </CommandEmpty>
                
                <CommandGroup heading="오늘 할 일">
                  {tasks.filter(t => t.due === "오늘").map(task => <CommandItem key={task.id} value={\`\${task.title} \${task.project} \${task.status}\`} onSelect={() => setSelectedTask(task.id)} className="flex items-center gap-3 py-3">
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <div className="font-medium">{task.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span>{task.project}</span>
                          <span>•</span>
                          <span className={getPriorityColor(task.priority)}>{task.priority} 우선순위</span>
                        </div>
                      </div>
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>
                        {task.status}
                      </Badge>
                    </CommandItem>)}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="이번 주">
                  {tasks.filter(t => t.due === "이번 주" || t.due === "내일").map(task => <CommandItem key={task.id} value={\`\${task.title} \${task.project} \${task.status}\`} onSelect={() => setSelectedTask(task.id)} className="flex items-center gap-3 py-3">
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <div className="font-medium">{task.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span>{task.project}</span>
                          <span>•</span>
                          <span>{task.due}</span>
                          <span>•</span>
                          <span className={getPriorityColor(task.priority)}>{task.priority}</span>
                        </div>
                      </div>
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>
                        {task.status}
                      </Badge>
                    </CommandItem>)}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="기타">
                  {tasks.filter(t => !["오늘", "내일", "이번 주"].includes(t.due)).map(task => <CommandItem key={task.id} value={\`\${task.title} \${task.project} \${task.status}\`} onSelect={() => setSelectedTask(task.id)} className="flex items-center gap-3 py-3">
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <div className="font-medium">{task.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span>{task.project}</span>
                          <span>•</span>
                          <span>{task.due}</span>
                        </div>
                      </div>
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>
                        {task.status}
                      </Badge>
                    </CommandItem>)}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="빠른 작업">
                  <CommandItem value="새 작업">
                    <Plus className="mr-2 h-4 w-4" />
                    <span>새 작업 만들기</span>
                    <CommandShortcut>⌘T</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="필터">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>작업 필터</span>
                    <CommandShortcut>⌘F</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="정렬">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <span>정렬 옵션</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {selectedTask && <div className="mt-4 p-4 bg-muted rounded-lg">
                {(() => {
              const task = tasks.find(t => t.id === selectedTask);
              if (!task) return null;
              return <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(task.status)}
                        <span className="font-medium">{task.title}</span>
                        <Badge variant="outline">{task.status}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>프로젝트: {task.project}</div>
                        <div>마감일: {task.due}</div>
                        <div>우선순위: <span className={getPriorityColor(task.priority)}>{task.priority}</span></div>
                      </div>
                    </div>;
            })()}
              </div>}
          </CardContent>
        </Card>
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
    return <div className="w-[500px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Keyboard className="h-5 w-5" />
              빠른 네비게이션
            </CardTitle>
            <CardDescription>
              페이지와 기능에 빠르게 이동하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Command value={selectedItem} onValueChange={setSelectedItem} className="rounded-lg border">
              <CommandInput placeholder="페이지나 기능을 검색하세요..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">일치하는 항목이 없습니다.</p>
                  </div>
                </CommandEmpty>
                
                {menuItems.map(group => <React.Fragment key={group.category}>
                    <CommandGroup heading={group.category}>
                      {group.items.map(item => <CommandItem key={item.path} value={\`\${item.name} \${item.path}\`} onSelect={() => {
                    setSelectedItem(item.path);
                    // 네비게이션 로직
                    console.log(\`네비게이션: \${item.path}\`);
                  }} className="flex items-center gap-3 py-2">
                          <item.icon className="h-4 w-4" />
                          <span className="flex-1">{item.name}</span>
                          {item.badge && <Badge variant="secondary" className="text-xs">
                              {item.badge}
                            </Badge>}
                          <CommandShortcut>{item.shortcut}</CommandShortcut>
                        </CommandItem>)}
                    </CommandGroup>
                    <CommandSeparator />
                  </React.Fragment>)}
                
                <CommandGroup heading="빠른 작업">
                  <CommandItem value="검색">
                    <Search className="mr-2 h-4 w-4" />
                    <span>전체 검색</span>
                    <CommandShortcut>/</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="명령">
                    <CommandIcon className="mr-2 h-4 w-4" />
                    <span>명령 팔레트</span>
                    <CommandShortcut>⌘K</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="테마">
                    <Palette className="mr-2 h-4 w-4" />
                    <span>테마 전환</span>
                    <CommandShortcut>⌘⇧T</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {selectedItem && <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="text-sm">
                  <span className="font-medium">선택된 경로:</span> {selectedItem}
                </div>
              </div>}
          </CardContent>
        </Card>
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
    return <div className="space-y-6 w-[600px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Command 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">↑↓</kbd>로 명령어 간 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로 명령어 실행</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 팔레트 닫기</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 포커스 이동</li>
            <li>스크린 리더가 명령어 정보와 상태 안내</li>
            <li>ARIA 라이브 영역으로 검색 결과 변경 알림</li>
          </ul>
        </div>

        {/* 라이브 영역 */}
        <div aria-live="polite" aria-label="명령 팔레트 상태 안내" className="sr-only">
          {announcements.map((announcement, index) => <div key={index}>{announcement}</div>)}
        </div>

        {/* 접근성 명령 팔레트 */}
        <Card>
          <CardHeader>
            <CardTitle>접근 가능한 명령 팔레트</CardTitle>
            <CardDescription>
              완전한 키보드 네비게이션과 스크린 리더 지원
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Command value={selectedCommand} onValueChange={value => {
            setSelectedCommand(value);
            if (value) {
              addAnnouncement(\`\${value} 명령이 선택되었습니다\`);
            }
          }} className="rounded-lg border" role="combobox" aria-label="접근성 명령 팔레트">
              <CommandInput placeholder="접근성 명령을 검색하세요..." aria-label="명령 검색" onFocus={() => addAnnouncement("명령 검색 필드가 활성화되었습니다")} />
              <CommandList role="listbox" aria-label="명령 목록">
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <HelpCircle className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">일치하는 명령이 없습니다.</p>
                    <p className="text-xs text-muted-foreground mt-1">다른 키워드로 검색해보세요.</p>
                  </div>
                </CommandEmpty>
                
                <CommandGroup heading="접근성 도구">
                  {accessibilityCommands.map((command, index) => <CommandItem key={command.name} value={command.name} onSelect={() => {
                  setSelectedCommand(command.name);
                  addAnnouncement(\`\${command.name} 명령이 실행되었습니다\`);
                }} className="flex items-start gap-3 py-3" role="option" aria-describedby={\`command-\${index}-desc\`}>
                      <command.icon className="h-5 w-5 mt-0.5 text-primary" />
                      <div className="flex-1">
                        <div className="font-medium">{command.name}</div>
                        <div id={\`command-\${index}-desc\`} className="text-xs text-muted-foreground">
                          {command.description}
                        </div>
                      </div>
                      <CommandShortcut aria-label={\`단축키: \${command.shortcut}\`}>
                        {command.shortcut}
                      </CommandShortcut>
                    </CommandItem>)}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="도움말">
                  <CommandItem value="키보드 단축키" onSelect={() => addAnnouncement("키보드 단축키 도움말이 열렸습니다")}>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>키보드 단축키 목록</span>
                    <CommandShortcut aria-label="단축키: F1">F1</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="접근성 가이드" onSelect={() => addAnnouncement("접근성 가이드가 열렸습니다")}>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>접근성 사용 가이드</span>
                    <CommandShortcut aria-label="단축키: Shift F1">⇧F1</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {/* 선택된 명령 표시 */}
            {selectedCommand && <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium text-primary">활성 명령</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium">{selectedCommand}</div>
                  <div className="text-muted-foreground mt-1">
                    {accessibilityCommands.find(c => c.name === selectedCommand)?.description}
                  </div>
                </div>
              </div>}

            {/* 접근성 상태 */}
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  접근성 기능 활성화됨
                </span>
              </div>
              <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                <li>• ARIA 역할과 속성 정의됨</li>
                <li>• 키보드 네비게이션 완전 지원</li>
                <li>• 스크린 리더 호환성 확보</li>
                <li>• 라이브 영역으로 상태 변경 안내</li>
                <li>• 명확한 포커스 표시</li>
                <li>• 의미있는 라벨과 설명 제공</li>
              </ul>
              
              {announcements.length > 0 && <div className="mt-3 p-2 bg-green-100 dark:bg-green-900 rounded border-l-2 border-green-500">
                  <div className="text-xs font-medium text-green-700 dark:text-green-300">최근 안내:</div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    {announcements[announcements.length - 1]}
                  </div>
                </div>}
            </div>
          </CardContent>
        </Card>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Command의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...pe.parameters?.docs?.source}}};export{pe as AccessibilityDemo,le as ApplicationLauncher,oe as CommandDialogStory,me as Default,ie as FileExplorer,ue as NavigationMenu,ce as TaskManager,ia as default};
