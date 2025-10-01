import{j as e}from"./jsx-runtime-BNA1KBBw.js";import{useMDXComponents as Ke}from"./index-BMALXjVh.js";import{b as st}from"./blocks-rOcCyZbg.js";import{d as _e,c as K,f as ie,a as Qe,i as Ze,j as at,b as ct,k as lt,g as dt,e as de,I as ut}from"./iframe-DYI76bYf.js";import ft from"../src/stories/assets/github.svg";import ht from"../src/stories/assets/discord.svg";import gt from"../src/stories/assets/youtube.svg";import mt from"../src/stories/assets/tutorials.svg";import Ce from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/styling.png?ignore";import Ie from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/context.png?ignore";import Ee from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/assets.png?ignore";import Pe from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/docs.png?ignore";import Ne from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/share.png?ignore";import qe from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/figma-plugin.png?ignore";import Oe from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/testing.png?ignore";import Le from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/accessibility.png?ignore";import Me from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/theming.png?ignore";import Ae from"/home/runner/work/my-project-1/my-project-1/src/stories/assets/addon-library.png?ignore";import"./index-CUoryC41.js";var ue={},fe={},he={},De;function pt(){return De||(De=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return t}});function t(c){let{widthInt:l,heightInt:f,blurWidth:a,blurHeight:n,blurDataURL:o,objectFit:j}=c;const b=20,y=a?a*40:l,i=n?n*40:f,p=y&&i?"viewBox='0 0 "+y+" "+i+"'":"",m=p?"none":j==="contain"?"xMidYMid":j==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+p+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+b+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+b+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+m+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}})(he)),he}var ge={},ze;function je(){return ze||(ze=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0});function t(f,a){for(var n in a)Object.defineProperty(f,n,{enumerable:!0,get:a[n]})}t(r,{VALID_LOADERS:function(){return c},imageConfigDefault:function(){return l}});const c=["default","imgix","cloudinary","akamai","custom"],l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}})(ge)),ge}var Te;function et(){return Te||(Te=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return y}}),_e();const t=pt(),c=je(),l=["-moz-initial","fill","none","scale-down",void 0];function f(i){return i.default!==void 0}function a(i){return i.src!==void 0}function n(i){return!!i&&typeof i=="object"&&(f(i)||a(i))}function o(i){return typeof i>"u"?i:typeof i=="number"?Number.isFinite(i)?i:NaN:typeof i=="string"&&/^[0-9]+$/.test(i)?parseInt(i,10):NaN}function j(i,p,m){let{deviceSizes:q,allSizes:S}=i;if(m){const k=/(^|\s)(1?\d?\d)vw/g,h=[];for(let u;u=k.exec(m);u)h.push(parseInt(u[2]));if(h.length){const u=Math.min(...h)*.01;return{widths:S.filter(x=>x>=q[0]*u),kind:"w"}}return{widths:S,kind:"w"}}return typeof p!="number"?{widths:q,kind:"w"}:{widths:[...new Set([p,p*2].map(k=>S.find(h=>h>=k)||S[S.length-1]))],kind:"x"}}function b(i){let{config:p,src:m,unoptimized:q,width:S,quality:A,sizes:k,loader:h}=i;if(q)return{src:m,srcSet:void 0,sizes:void 0};const{widths:u,kind:x}=j(p,S,k),s=u.length-1;return{sizes:!k&&x==="w"?"100vw":k,srcSet:u.map((g,d)=>h({config:p,src:m,quality:A,width:g})+" "+(x==="w"?g:d+1)+x).join(", "),src:h({config:p,src:m,quality:A,width:u[s]})}}function y(i,p){let{src:m,sizes:q,unoptimized:S=!1,priority:A=!1,loading:k,className:h,quality:u,width:x,height:s,fill:g=!1,style:d,overrideSrc:R,onLoad:I,onLoadingComplete:X,placeholder:_="empty",blurDataURL:C,fetchPriority:D,decoding:O="async",layout:z,objectFit:T,objectPosition:Q,lazyBoundary:ne,lazyRoot:Z,...N}=i;const{imgConf:$,showAltText:L,blurComplete:ee,defaultLoader:V}=p;let G,w=$||c.imageConfigDefault;if("allSizes"in w)G=w;else{var F;const v=[...w.deviceSizes,...w.imageSizes].sort((B,re)=>B-re),W=w.deviceSizes.sort((B,re)=>B-re),te=(F=w.qualities)==null?void 0:F.sort((B,re)=>B-re);G={...w,allSizes:v,deviceSizes:W,qualities:te}}if(typeof V>"u")throw Object.defineProperty(new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let Y=N.loader||V;delete N.loader,delete N.srcSet;const oe="__next_img_default"in Y;if(oe){if(G.loader==="custom")throw Object.defineProperty(new Error('Image with src "'+m+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{const v=Y;Y=W=>{const{config:te,...B}=W;return v(B)}}if(z){z==="fill"&&(g=!0);const v={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},W={responsive:"100vw",fill:"100vw"},te=v[z];te&&(d={...d,...te});const B=W[z];B&&!q&&(q=B)}let M="",U=o(x),H=o(s),we,Se;if(n(m)){const v=f(m)?m.default:m;if(!v.src)throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(v)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!v.height||!v.width)throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(v)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(we=v.blurWidth,Se=v.blurHeight,C=C||v.blurDataURL,M=v.src,!g){if(!U&&!H)U=v.width,H=v.height;else if(U&&!H){const W=U/v.width;H=Math.round(v.height*W)}else if(!U&&H){const W=H/v.height;U=Math.round(v.width*W)}}}m=typeof m=="string"?m:M;let ke=!A&&(k==="lazy"||typeof k>"u");(!m||m.startsWith("data:")||m.startsWith("blob:"))&&(S=!0,ke=!1),G.unoptimized&&(S=!0),oe&&!G.dangerouslyAllowSVG&&m.split("?",1)[0].endsWith(".svg")&&(S=!0);const it=o(u),J=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:Q}:{},L?{}:{color:"transparent"},d),Re=!ee&&_!=="empty"?_==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:U,heightInt:H,blurWidth:we,blurHeight:Se,blurDataURL:C||"",objectFit:J.objectFit})+'")':'url("'+_+'")':null,nt=l.includes(J.objectFit)?J.objectFit==="fill"?"100% 100%":"cover":J.objectFit;let ot=Re?{backgroundSize:nt,backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Re}:{};const le=b({config:G,src:m,unoptimized:S,width:U,quality:it,sizes:q,loader:Y});return{props:{...N,loading:ke?"lazy":k,fetchPriority:D,width:U,height:H,decoding:O,className:h,style:{...J,...ot},sizes:le.sizes,srcSet:le.srcSet,src:R||le.src},meta:{unoptimized:S,priority:A,placeholder:_,fill:g}}}})(fe)),fe}var se={exports:{}},ae={exports:{}},me={},Ue;function bt(){return Ue||(Ue=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});const t=K(),c=typeof window>"u",l=c?()=>{}:t.useLayoutEffect,f=c?()=>{}:t.useEffect;function a(n){const{headManager:o,reduceComponentsToState:j}=n;function b(){if(o&&o.mountedInstances){const i=t.Children.toArray(Array.from(o.mountedInstances).filter(Boolean));o.updateHead(j(i,n))}}if(c){var y;o==null||(y=o.mountedInstances)==null||y.add(n.children),b()}return l(()=>{var i;return o==null||(i=o.mountedInstances)==null||i.add(n.children),()=>{var p;o==null||(p=o.mountedInstances)==null||p.delete(n.children)}}),l(()=>(o&&(o._pendingUpdate=b),()=>{o&&(o._pendingUpdate=b)})),f(()=>(o&&o._pendingUpdate&&(o._pendingUpdate(),o._pendingUpdate=null),()=>{o&&o._pendingUpdate&&(o._pendingUpdate(),o._pendingUpdate=null)})),null}})(me)),me}var pe={},Fe;function yt(){return Fe||(Fe=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"AmpStateContext",{enumerable:!0,get:function(){return l}});const l=ie()._(K()).default.createContext({})})(pe)),pe}var be={},Be;function xt(){return Be||(Be=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(c){let{ampFirst:l=!1,hybrid:f=!1,hasQuery:a=!1}=c===void 0?{}:c;return l||f&&a}})(be)),be}var Ge;function vt(){return Ge||(Ge=1,(function(r,t){"use client";Object.defineProperty(t,"__esModule",{value:!0});function c(h,u){for(var x in u)Object.defineProperty(h,x,{enumerable:!0,get:u[x]})}c(t,{default:function(){return k},defaultHead:function(){return i}});const l=ie(),f=Ze(),a=Qe(),n=f._(K()),o=l._(bt()),j=yt(),b=at(),y=xt();_e();function i(h){h===void 0&&(h=!1);const u=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return h||u.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),u}function p(h,u){return typeof u=="string"||typeof u=="number"?h:u.type===n.default.Fragment?h.concat(n.default.Children.toArray(u.props.children).reduce((x,s)=>typeof s=="string"||typeof s=="number"?x:x.concat(s),[])):h.concat(u)}const m=["name","httpEquiv","charSet","itemProp"];function q(){const h=new Set,u=new Set,x=new Set,s={};return g=>{let d=!0,R=!1;if(g.key&&typeof g.key!="number"&&g.key.indexOf("$")>0){R=!0;const I=g.key.slice(g.key.indexOf("$")+1);h.has(I)?d=!1:h.add(I)}switch(g.type){case"title":case"base":u.has(g.type)?d=!1:u.add(g.type);break;case"meta":for(let I=0,X=m.length;I<X;I++){const _=m[I];if(g.props.hasOwnProperty(_))if(_==="charSet")x.has(_)?d=!1:x.add(_);else{const C=g.props[_],D=s[_]||new Set;(_!=="name"||!R)&&D.has(C)?d=!1:(D.add(C),s[_]=D)}}break}return d}}function S(h,u){const{inAmpMode:x}=u;return h.reduce(p,[]).reverse().concat(i(x).reverse()).filter(q()).reverse().map((s,g)=>{const d=s.key||g;return n.default.cloneElement(s,{key:d})})}function A(h){let{children:u}=h;const x=(0,n.useContext)(j.AmpStateContext),s=(0,n.useContext)(b.HeadManagerContext);return(0,a.jsx)(o.default,{reduceComponentsToState:S,headManager:s,inAmpMode:(0,y.isInAmpMode)(x),children:u})}const k=A;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)})(ae,ae.exports)),ae.exports}var ye={},We;function _t(){return We||(We=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return f}});const c=ie()._(K()),l=je(),f=c.default.createContext(l.imageConfigDefault)})(ye)),ye}var xe={},$e;function tt(){return $e||($e=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});const t=75;function c(f){let{config:a,src:n,width:o,quality:j}=f;var b;const y=j||((b=a.qualities)==null?void 0:b.reduce((i,p)=>Math.abs(p-t)<Math.abs(i-t)?p:i))||t;return a.path+"?url="+encodeURIComponent(n)+"&w="+o+"&q="+y+(n.startsWith("/_next/static/media/"),"")}c.__next_img_default=!0;const l=c})(xe)),xe}var ce={exports:{}},He;function jt(){return He||(He=1,(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});const c=K();function l(a,n){const o=(0,c.useRef)(null),j=(0,c.useRef)(null);return(0,c.useCallback)(b=>{if(b===null){const y=o.current;y&&(o.current=null,y());const i=j.current;i&&(j.current=null,i())}else a&&(o.current=f(a,b)),n&&(j.current=f(n,b))},[a,n])}function f(a,n){if(typeof a=="function"){const o=a(n);return typeof o=="function"?o:()=>a(null)}else return a.current=n,()=>{a.current=null}}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)})(ce,ce.exports)),ce.exports}var Xe;function wt(){return Xe||(Xe=1,(function(r,t){"use client";var c={};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});const l=ie(),f=Ze(),a=Qe(),n=f._(K()),o=l._(ct()),j=l._(vt()),b=et(),y=je(),i=_t();_e();const p=lt(),m=l._(tt()),q=jt(),S=c.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function A(s,g,d,R,I,X,_){const C=s?.src;if(!s||s["data-loaded-src"]===C)return;s["data-loaded-src"]=C,("decode"in s?s.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!s.parentElement||!s.isConnected)){if(g!=="empty"&&I(!0),d?.current){const O=new Event("load");Object.defineProperty(O,"target",{writable:!1,value:s});let z=!1,T=!1;d.current({...O,nativeEvent:O,currentTarget:s,target:s,isDefaultPrevented:()=>z,isPropagationStopped:()=>T,persist:()=>{},preventDefault:()=>{z=!0,O.preventDefault()},stopPropagation:()=>{T=!0,O.stopPropagation()}})}R?.current&&R.current(s)}})}function k(s){return n.use?{fetchPriority:s}:{fetchpriority:s}}const h=(0,n.forwardRef)((s,g)=>{let{src:d,srcSet:R,sizes:I,height:X,width:_,decoding:C,className:D,style:O,fetchPriority:z,placeholder:T,loading:Q,unoptimized:ne,fill:Z,onLoadRef:N,onLoadingCompleteRef:$,setBlurComplete:L,setShowAltText:ee,sizesInput:V,onLoad:G,onError:w,...F}=s;const Y=(0,n.useCallback)(M=>{M&&(w&&(M.src=M.src),M.complete&&A(M,T,N,$,L))},[d,T,N,$,L,w,ne,V]),oe=(0,q.useMergedRef)(g,Y);return(0,a.jsx)("img",{...F,...k(z),loading:Q,width:_,height:X,decoding:C,"data-nimg":Z?"fill":"1",className:D,style:O,sizes:I,srcSet:R,src:d,ref:oe,onLoad:M=>{const U=M.currentTarget;A(U,T,N,$,L)},onError:M=>{ee(!0),T!=="empty"&&L(!0),w&&w(M)}})});function u(s){let{isAppRouter:g,imgAttributes:d}=s;const R={as:"image",imageSrcSet:d.srcSet,imageSizes:d.sizes,crossOrigin:d.crossOrigin,referrerPolicy:d.referrerPolicy,...k(d.fetchPriority)};return g&&o.default.preload?(o.default.preload(d.src,R),null):(0,a.jsx)(j.default,{children:(0,a.jsx)("link",{rel:"preload",href:d.srcSet?void 0:d.src,...R},"__nimg-"+d.src+d.srcSet+d.sizes)})}const x=(0,n.forwardRef)((s,g)=>{const R=!(0,n.useContext)(p.RouterContext),I=(0,n.useContext)(i.ImageConfigContext),X=(0,n.useMemo)(()=>{var $;const L=S||I||y.imageConfigDefault,ee=[...L.deviceSizes,...L.imageSizes].sort((w,F)=>w-F),V=L.deviceSizes.sort((w,F)=>w-F),G=($=L.qualities)==null?void 0:$.sort((w,F)=>w-F);return{...L,allSizes:ee,deviceSizes:V,qualities:G}},[I]),{onLoad:_,onLoadingComplete:C}=s,D=(0,n.useRef)(_);(0,n.useEffect)(()=>{D.current=_},[_]);const O=(0,n.useRef)(C);(0,n.useEffect)(()=>{O.current=C},[C]);const[z,T]=(0,n.useState)(!1),[Q,ne]=(0,n.useState)(!1),{props:Z,meta:N}=(0,b.getImgProps)(s,{defaultLoader:m.default,imgConf:X,blurComplete:z,showAltText:Q});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{...Z,unoptimized:N.unoptimized,placeholder:N.placeholder,fill:N.fill,onLoadRef:D,onLoadingCompleteRef:O,setBlurComplete:T,setShowAltText:ne,sizesInput:s.sizes,ref:g}),N.priority?(0,a.jsx)(u,{isAppRouter:R,imgAttributes:Z}):null]})});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)})(se,se.exports)),se.exports}var Ve;function St(){return Ve||(Ve=1,(function(r){var t={};Object.defineProperty(r,"__esModule",{value:!0});function c(b,y){for(var i in y)Object.defineProperty(b,i,{enumerable:!0,get:y[i]})}c(r,{default:function(){return j},getImageProps:function(){return o}});const l=ie(),f=et(),a=wt(),n=l._(tt());function o(b){const{props:y}=(0,f.getImgProps)(b,{defaultLoader:n.default,imgConf:t.__NEXT_IMAGE_OPTS});for(const[i,p]of Object.entries(y))p===void 0&&delete y[i];return{props:y}}const j=a.Image})(ue)),ue}var ve,Ye;function kt(){return Ye||(Ye=1,ve=St()),ve}var Rt=kt();const Ct=dt(Rt);var It=({src:r,width:t,quality:c=75})=>{const l=[];if(r||l.push("src"),t||l.push("width"),l.length>0)throw new Error(`Next Image Optimization requires ${l.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({src:r,width:t,quality:c})}`);const f=new URL(r,window.location.href);return!f.searchParams.has("w")&&!f.searchParams.has("q")&&(f.searchParams.set("w",t.toString()),f.searchParams.set("q",c.toString())),!r.startsWith("http://")&&!r.startsWith("https://")?f.toString().slice(f.origin.length):f.toString()},Et=Ct,rt=de.forwardRef(({loader:r,...t},c)=>{const l=de.useContext(ut);return de.createElement(Et,{ref:c,...l,...t,loader:r??It})});rt.displayName="NextImage";var E=rt;const Pt={src:Ce,height:260,width:580,blurDataURL:Ce},Nt={src:Ie,height:260,width:580,blurDataURL:Ie},qt={src:Ee,height:260,width:580,blurDataURL:Ee},Ot={src:Pe,height:520,width:890,blurDataURL:Pe},Lt={src:Ne,height:520,width:890,blurDataURL:Ne},Mt={src:qe,height:520,width:890,blurDataURL:qe},At={src:Oe,height:520,width:890,blurDataURL:Oe},Dt={src:Le,height:520,width:890,blurDataURL:Le},zt={src:Me,height:520,width:890,blurDataURL:Me},Tt={src:Ae,height:2520,width:4720,blurDataURL:Ae},P=()=>e.jsx("svg",{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:e.jsx("path",{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})});function Je(r){const t={code:"code",h1:"h1",p:"p",...Ke(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(st,{title:"Configure your project"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(t.h1,{id:"netive-guide",children:"Netive Guide"}),e.jsx(t.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."})]}),e.jsxs("div",{className:"sb-section",children:[e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{src:Pt,alt:"A wall of logos representing different styling technologies",width:0,height:0,style:{width:"100%",height:"auto"}}),e.jsx("h4",{className:"sb-section-item-heading",children:"Add styling and CSS"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."}),e.jsxs("a",{href:"https://storybook.js.org/docs/configure/styling-and-css/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:Nt,alt:"An abstraction representing the composition of data for a component"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Provide context and mocking"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available."}),e.jsxs("a",{href:"https://storybook.js.org/docs/writing-stories/decorators/?renderer=react&ref=configure#context-for-mocking",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:qt,alt:"A representation of typography and image assets"}),e.jsxs("div",{children:[e.jsx("h4",{className:"sb-section-item-heading",children:"Load assets and resources"}),e.jsxs("p",{className:"sb-section-item-paragraph",children:[`To link static files (like fonts) to your projects and stories, use the
`,e.jsx(t.code,{children:"staticDirs"}),` configuration option to specify folders to load when
starting Storybook.`]}),e.jsxs("a",{href:"https://storybook.js.org/docs/configure/images-and-assets/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]})]})]})]}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(t.h1,{id:"do-more-with-storybook",children:"Do more with Storybook"}),e.jsx(t.p,{children:"Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs."})]}),e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-features-grid",children:[e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:Ot,alt:"A screenshot showing the autodocs tag being set, pointing a docs page being generated"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Autodocs"}),e.jsx("p",{className:"sb-section-item-paragraph",children:`Auto-generate living,
interactive reference documentation from your components and stories.`}),e.jsxs("a",{href:"https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:Lt,alt:"A browser window showing a Storybook being published to a chromatic.com URL"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Publish to Chromatic"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Publish your Storybook to review and collaborate with your entire team."}),e.jsxs("a",{href:"https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react&ref=configure#publish-storybook-with-chromatic",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:Mt,alt:"Windows showing the Storybook plugin in Figma"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Figma Plugin"}),e.jsx("p",{className:"sb-section-item-paragraph",children:`Embed your stories into Figma to cross-reference the design and live
implementation in one place.`}),e.jsxs("a",{href:"https://storybook.js.org/docs/sharing/design-integrations/?renderer=react&ref=configure#embed-storybook-in-figma-with-the-plugin",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:At,alt:"Screenshot of tests passing and failing"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Testing"}),e.jsx("p",{className:"sb-section-item-paragraph",children:`Use stories to test a component in all its variations, no matter how
complex.`}),e.jsxs("a",{href:"https://storybook.js.org/docs/writing-tests/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:Dt,alt:"Screenshot of accessibility tests passing and failing"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Accessibility"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Automatically test your components for a11y issues as you develop."}),e.jsxs("a",{href:"https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:zt,alt:"Screenshot of Storybook in light and dark mode"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Theming"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Theme Storybook's UI to personalize it to your project."}),e.jsxs("a",{href:"https://storybook.js.org/docs/configure/theming/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]})]})})]}),`
`,e.jsxs("div",{className:"sb-addon",children:[e.jsxs("div",{className:"sb-addon-text",children:[e.jsx("h4",{children:"Addons"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Integrate your tools with Storybook to connect workflows."}),e.jsxs("a",{href:"https://storybook.js.org/addons/?ref=configure",target:"_blank",children:["Discover all addons",e.jsx(P,{})]})]}),e.jsx("div",{className:"sb-addon-img",children:e.jsx(E,{width:650,height:347,src:Tt,alt:"Integrate your tools with Storybook to connect workflows."})})]}),`
`,e.jsxs("div",{className:"sb-section sb-socials",children:[e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:32,height:32,layout:"fixed",src:ft,alt:"Github logo",className:"sb-explore-image"}),e.jsx(t.p,{children:"Join our contributors building the future of UI development."}),e.jsxs("a",{href:"https://github.com/storybookjs/storybook",target:"_blank",children:["Star on GitHub",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:33,height:32,layout:"fixed",src:ht,alt:"Discord logo",className:"sb-explore-image"}),e.jsxs("div",{children:[e.jsx(t.p,{children:"Get support and chat with frontend developers."}),e.jsxs("a",{href:"https://discord.gg/storybook",target:"_blank",children:["Join Discord server",e.jsx(P,{})]})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:32,height:32,layout:"fixed",src:gt,alt:"Youtube logo",className:"sb-explore-image"}),e.jsxs("div",{children:[e.jsx(t.p,{children:"Watch tutorials, feature previews and interviews."}),e.jsxs("a",{href:"https://www.youtube.com/@chromaticui",target:"_blank",children:["Watch on YouTube",e.jsx(P,{})]})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:33,height:32,layout:"fixed",src:mt,alt:"A book",className:"sb-explore-image"}),e.jsx("p",{children:"Follow guided walkthroughs on for key workflows."}),e.jsxs("a",{href:"https://storybook.js.org/tutorials/?ref=configure",target:"_blank",children:["Discover tutorials",e.jsx(P,{})]})]})]}),`
`,e.jsx("style",{children:`
.sb-container {
  margin-bottom: 48px;
}

.sb-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

img {
  object-fit: cover;
}

.sb-section-title {
  margin-bottom: 32px;
}

.sb-section a:not(h1 a, h2 a, h3 a) {
  font-size: 14px;
}

.sb-section-item, .sb-grid-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sb-section-item-heading {
  padding-top: 20px !important;
  padding-bottom: 5px !important;
  margin: 0 !important;
}
.sb-section-item-paragraph {
  margin: 0;
  padding-bottom: 10px;
}

.sb-chevron {
  margin-left: 5px;
}

.sb-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px 20px;
}

.sb-socials {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.sb-socials p {
  margin-bottom: 10px;
}

.sb-explore-image {
  max-height: 32px;
  align-self: flex-start;
}

.sb-addon {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #EEF3F8;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #EEF3F8;
  height: 180px;
  margin-bottom: 48px;
  overflow: hidden;
}

.sb-addon-text {
  padding-left: 48px;
  max-width: 240px;
}

.sb-addon-text h4 {
  padding-top: 0px;
}

.sb-addon-img {
  position: absolute;
  left: 345px;
  top: 0;
  height: 100%;
  width: 200%;
  overflow: hidden;
}

.sb-addon-img img {
  width: 650px;
  transform: rotate(-15deg);
  margin-left: 40px;
  margin-top: -72px;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0);
  backface-visibility: hidden;
}

@media screen and (max-width: 800px) {
  .sb-addon-img {
    left: 300px;
  }
}

@media screen and (max-width: 600px) {
  .sb-section {
    flex-direction: column;
  }

  .sb-features-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .sb-socials {
    grid-template-columns: repeat(2, 1fr);
  }

  .sb-addon {
    height: 280px;
    align-items: flex-start;
    padding-top: 32px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 24px;
  }

  .sb-addon-img {
    right: 0;
    left: 0;
    top: 130px;
    bottom: 0;
    overflow: hidden;
    height: auto;
    width: 124%;
  }

  .sb-addon-img img {
    width: 1200px;
    transform: rotate(-12deg);
    margin-left: 0;
    margin-top: 48px;
    margin-bottom: -40px;
    margin-left: -24px;
  }
}
`})]})}function ar(r={}){const{wrapper:t}={...Ke(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(Je,{...r})}):Je(r)}export{P as RightArrow,ar as default};
