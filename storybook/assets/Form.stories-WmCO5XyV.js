import{j as i}from"./jsx-runtime-zcBydOHc.js";import{e as j,r as qe}from"./iframe-f0y5nwCv.js";import{S as Xo}from"./index-Bnc6pY_-.js";import{c as xr}from"./utils-CBfrqCZ4.js";import{L as xe}from"./label-BM3K1upj.js";import{B as we}from"./button-BFt4UOU8.js";import{I as K}from"./input-BjcrOu6i.js";import{T as Ur}from"./textarea-DrRFormm.js";import{C as Ge}from"./checkbox-DMWyT5SE.js";import{R as Qo,a as Re}from"./radio-group-Cmr6hyOh.js";import{S as en,a as rn,b as tn,c as on,d as Me}from"./select-IXBNvkg_.js";import{S as ht}from"./switch-Ca52lcea.js";import{S as nn}from"./separator-DUqQqhOP.js";import{C as pt,a as vt,b as gt,d as bt}from"./card-C4KhRH4Z.js";import{S as to}from"./send-De_nWQOe.js";import{U as oo}from"./user-DfoaXFfO.js";import{S as sn}from"./save-IZTmZawT.js";import{C as an}from"./credit-card-CiMHwNV5.js";import{M as cn}from"./map-pin-CrECppIW.js";import{L as ln}from"./lock-DwdIxpeX.js";import{C as xt}from"./circle-alert-CYU9pkxJ.js";import"./index-DtN1zOg8.js";import"./index-BOW4bzV5.js";import"./index-CdJFUDDL.js";import"./index-srVE7ZBT.js";import"./index-BRAHi5Fr.js";import"./index-Bi2uafXz.js";import"./index-D6TFOBVm.js";import"./index-9wIdD7x2.js";import"./index-DcENkIot.js";import"./check-xiXrEZe3.js";import"./createLucideIcon-D1NW3S5P.js";import"./index-C4QgvzGp.js";import"./index-PbdlLkd4.js";import"./index-BICpT9Gp.js";import"./index-DhshkQxT.js";import"./index-C2jtwZyQ.js";import"./circle-C2p5FWAP.js";import"./index-BdQq_4o_.js";import"./index-CM9Yjl-S.js";import"./index-C0ps_dnZ.js";import"./index-DOOOMRIZ.js";import"./index-ClTdsRsO.js";import"./index-Ddp1U8PL.js";import"./chevron-down-sqExu2i6.js";import"./chevron-up-DlohCIlM.js";var Ke=e=>e.type==="checkbox",ze=e=>e instanceof Date,te=e=>e==null;const no=e=>typeof e=="object";var X=e=>!te(e)&&!Array.isArray(e)&&no(e)&&!ze(e),so=e=>X(e)&&e.target?Ke(e.target)?e.target.checked:e.target.value:e,un=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,io=(e,r)=>e.has(un(r)),dn=e=>{const r=e.constructor&&e.constructor.prototype;return X(r)&&r.hasOwnProperty("isPrototypeOf")},Br=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let r;const t=Array.isArray(e),o=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(Br&&(e instanceof Blob||o))&&(t||X(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!dn(e))r=e;else for(const n in e)e.hasOwnProperty(n)&&(r[n]=Q(e[n]));else return e;return r}var _r=e=>/^\w*$/.test(e),H=e=>e===void 0,Wr=e=>Array.isArray(e)?e.filter(Boolean):[],qr=e=>Wr(e.replace(/["|']|\]/g,"").split(/\.|\[/)),b=(e,r,t)=>{if(!r||!X(e))return t;const o=(_r(r)?[r]:qr(r)).reduce((n,s)=>te(n)?n:n[s],e);return H(o)||o===e?H(e[r])?t:e[r]:o},ie=e=>typeof e=="boolean",D=(e,r,t)=>{let o=-1;const n=_r(r)?[r]:qr(r),s=n.length,a=s-1;for(;++o<s;){const l=n[o];let p=t;if(o!==a){const f=e[l];p=X(f)||Array.isArray(f)?f:isNaN(+n[o+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;e[l]=p,e=e[l]}};const fr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},me={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},be={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Gr=j.createContext(null);Gr.displayName="HookFormContext";const yr=()=>j.useContext(Gr),mn=e=>{const{children:r,...t}=e;return j.createElement(Gr.Provider,{value:t},r)};var ao=(e,r,t,o=!0)=>{const n={defaultValues:r._defaultValues};for(const s in e)Object.defineProperty(n,s,{get:()=>{const a=s;return r._proxyFormState[a]!==me.all&&(r._proxyFormState[a]=!o||me.all),t&&(t[a]=!0),e[a]}});return n};const Hr=typeof window<"u"?j.useLayoutEffect:j.useEffect;function co(e){const r=yr(),{control:t=r.control,disabled:o,name:n,exact:s}=e||{},[a,l]=j.useState(t._formState),p=j.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Hr(()=>t._subscribe({name:n,formState:p.current,exact:s,callback:f=>{!o&&l({...t._formState,...f})}}),[n,o,s]),j.useEffect(()=>{p.current.isValid&&t._setValid(!0)},[t]),j.useMemo(()=>ao(a,t,p.current,!1),[a,t])}var ae=e=>typeof e=="string",lo=(e,r,t,o,n)=>ae(e)?(o&&r.watch.add(e),b(t,e,n)):Array.isArray(e)?e.map(s=>(o&&r.watch.add(s),b(t,s))):(o&&(r.watchAll=!0),t),Lr=e=>te(e)||!no(e);function _e(e,r,t=new WeakSet){if(Lr(e)||Lr(r))return e===r;if(ze(e)&&ze(r))return e.getTime()===r.getTime();const o=Object.keys(e),n=Object.keys(r);if(o.length!==n.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const s of o){const a=e[s];if(!n.includes(s))return!1;if(s!=="ref"){const l=r[s];if(ze(a)&&ze(l)||X(a)&&X(l)||Array.isArray(a)&&Array.isArray(l)?!_e(a,l,t):a!==l)return!1}}return!0}function fn(e){const r=yr(),{control:t=r.control,name:o,defaultValue:n,disabled:s,exact:a,compute:l}=e||{},p=j.useRef(n),f=j.useRef(l),g=j.useRef(void 0);f.current=l;const w=j.useMemo(()=>t._getWatch(o,p.current),[t,o]),[_,Z]=j.useState(f.current?f.current(w):w);return Hr(()=>t._subscribe({name:o,formState:{values:!0},exact:a,callback:O=>{if(!s){const E=lo(o,t._names,O.values||t._formValues,!1,p.current);if(f.current){const ee=f.current(E);_e(ee,g.current)||(Z(ee),g.current=ee)}else Z(E)}}}),[t,s,o,a]),j.useEffect(()=>t._removeUnmounted()),_}function hn(e){const r=yr(),{name:t,disabled:o,control:n=r.control,shouldUnregister:s,defaultValue:a}=e,l=io(n._names.array,t),p=j.useMemo(()=>b(n._formValues,t,b(n._defaultValues,t,a)),[n,t,a]),f=fn({control:n,name:t,defaultValue:p,exact:!0}),g=co({control:n,name:t,exact:!0}),w=j.useRef(e),_=j.useRef(void 0),Z=j.useRef(n.register(t,{...e.rules,value:f,...ie(e.disabled)?{disabled:e.disabled}:{}}));w.current=e;const O=j.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!b(g.errors,t)},isDirty:{enumerable:!0,get:()=>!!b(g.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!b(g.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!b(g.validatingFields,t)},error:{enumerable:!0,get:()=>b(g.errors,t)}}),[g,t]),E=j.useCallback(N=>Z.current.onChange({target:{value:so(N),name:t},type:fr.CHANGE}),[t]),ee=j.useCallback(()=>Z.current.onBlur({target:{value:b(n._formValues,t),name:t},type:fr.BLUR}),[t,n._formValues]),ye=j.useCallback(N=>{const L=b(n._fields,t);L&&N&&(L._f.ref={focus:()=>N.focus&&N.focus(),select:()=>N.select&&N.select(),setCustomValidity:$=>N.setCustomValidity($),reportValidity:()=>N.reportValidity()})},[n._fields,t]),k=j.useMemo(()=>({name:t,value:f,...ie(o)||g.disabled?{disabled:g.disabled||o}:{},onChange:E,onBlur:ee,ref:ye}),[t,o,g.disabled,E,ee,ye,f]);return j.useEffect(()=>{const N=n._options.shouldUnregister||s,L=_.current;L&&L!==t&&!l&&n.unregister(L),n.register(t,{...w.current.rules,...ie(w.current.disabled)?{disabled:w.current.disabled}:{}});const $=(ge,he)=>{const ke=b(n._fields,ge);ke&&ke._f&&(ke._f.mount=he)};if($(t,!0),N){const ge=Q(b(n._options.defaultValues,t));D(n._defaultValues,t,ge),H(b(n._formValues,t))&&D(n._formValues,t,ge)}return!l&&n.register(t),_.current=t,()=>{(l?N&&!n._state.action:N)?n.unregister(t):$(t,!1)}},[t,n,l,s]),j.useEffect(()=>{n._setDisabledField({disabled:o,name:t})},[o,t,n]),j.useMemo(()=>({field:k,formState:g,fieldState:O}),[k,g,O])}const pn=e=>e.render(hn(e));var Yr=(e,r,t,o,n)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[o]:n||!0}}:{},Be=e=>Array.isArray(e)?e:[e],_t=()=>{let e=[];return{get observers(){return e},next:n=>{for(const s of e)s.next&&s.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(s=>s!==n)}}),unsubscribe:()=>{e=[]}}};function uo(e,r){const t={};for(const o in e)if(e.hasOwnProperty(o)){const n=e[o],s=r[o];if(n&&X(n)&&s){const a=uo(n,s);X(a)&&(t[o]=a)}else e[o]&&(t[o]=s)}return t}var ne=e=>X(e)&&!Object.keys(e).length,Jr=e=>e.type==="file",fe=e=>typeof e=="function",hr=e=>{if(!Br)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},mo=e=>e.type==="select-multiple",Kr=e=>e.type==="radio",vn=e=>Kr(e)||Ke(e),Er=e=>hr(e)&&e.isConnected;function gn(e,r){const t=r.slice(0,-1).length;let o=0;for(;o<t;)e=H(e)?o++:e[r[o++]];return e}function bn(e){for(const r in e)if(e.hasOwnProperty(r)&&!H(e[r]))return!1;return!0}function J(e,r){const t=Array.isArray(r)?r:_r(r)?[r]:qr(r),o=t.length===1?e:gn(e,t),n=t.length-1,s=t[n];return o&&delete o[s],n!==0&&(X(o)&&ne(o)||Array.isArray(o)&&bn(o))&&J(e,t.slice(0,-1)),e}var xn=e=>{for(const r in e)if(fe(e[r]))return!0;return!1};function fo(e){return Array.isArray(e)||X(e)&&!xn(e)}function Tr(e,r={}){for(const t in e)fo(e[t])?(r[t]=Array.isArray(e[t])?[]:{},Tr(e[t],r[t])):te(e[t])||(r[t]=!0);return r}function Ve(e,r,t){t||(t=Tr(r));for(const o in e)fo(e[o])?H(r)||Lr(t[o])?t[o]=Tr(e[o],Array.isArray(e[o])?[]:{}):Ve(e[o],te(r)?{}:r[o],t[o]):t[o]=!_e(e[o],r[o]);return t}const yt={value:!1,isValid:!1},Ft={value:!0,isValid:!0};var ho=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!H(e[0].attributes.value)?H(e[0].value)||e[0].value===""?Ft:{value:e[0].value,isValid:!0}:Ft:yt}return yt},po=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:o})=>H(e)?e:r?e===""?NaN:e&&+e:t&&ae(e)?new Date(e):o?o(e):e;const wt={isValid:!1,value:null};var vo=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,wt):wt;function jt(e){const r=e.ref;return Jr(r)?r.files:Kr(r)?vo(e.refs).value:mo(r)?[...r.selectedOptions].map(({value:t})=>t):Ke(r)?ho(e.refs).value:po(H(r.value)?e.ref.value:r.value,e)}var _n=(e,r,t,o)=>{const n={};for(const s of e){const a=b(r,s);a&&D(n,s,a._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:o}},pr=e=>e instanceof RegExp,Ue=e=>H(e)?e:pr(e)?e.source:X(e)?pr(e.value)?e.value.source:e.value:e,kt=e=>({isOnSubmit:!e||e===me.onSubmit,isOnBlur:e===me.onBlur,isOnChange:e===me.onChange,isOnAll:e===me.all,isOnTouch:e===me.onTouched});const Nt="AsyncFunction";var yn=e=>!!e&&!!e.validate&&!!(fe(e.validate)&&e.validate.constructor.name===Nt||X(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===Nt)),Fn=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),zt=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(o=>e.startsWith(o)&&/^\.\w+/.test(e.slice(o.length))));const We=(e,r,t,o)=>{for(const n of t||Object.keys(e)){const s=b(e,n);if(s){const{_f:a,...l}=s;if(a){if(a.refs&&a.refs[0]&&r(a.refs[0],n)&&!o)return!0;if(a.ref&&r(a.ref,a.name)&&!o)return!0;if(We(l,r))break}else if(X(l)&&We(l,r))break}}};function Ct(e,r,t){const o=b(e,t);if(o||_r(t))return{error:o,name:t};const n=t.split(".");for(;n.length;){const s=n.join("."),a=b(r,s),l=b(e,s);if(a&&!Array.isArray(a)&&t!==s)return{name:t};if(l&&l.type)return{name:s,error:l};if(l&&l.root&&l.root.type)return{name:`${s}.root`,error:l.root};n.pop()}return{name:t}}var wn=(e,r,t,o)=>{t(e);const{name:n,...s}=e;return ne(s)||Object.keys(s).length>=Object.keys(r).length||Object.keys(s).find(a=>r[a]===(!o||me.all))},jn=(e,r,t)=>!e||!r||e===r||Be(e).some(o=>o&&(t?o===r:o.startsWith(r)||r.startsWith(o))),kn=(e,r,t,o,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(r||e):(t?o.isOnBlur:n.isOnBlur)?!e:(t?o.isOnChange:n.isOnChange)?e:!0,Nn=(e,r)=>!Wr(b(e,r)).length&&J(e,r),zn=(e,r,t)=>{const o=Be(b(e,t));return D(o,"root",r[t]),D(e,t,o),e};function It(e,r,t="validate"){if(ae(e)||Array.isArray(e)&&e.every(ae)||ie(e)&&!e)return{type:t,message:ae(e)?e:"",ref:r}}var Ee=e=>X(e)&&!pr(e)?e:{value:e,message:""},St=async(e,r,t,o,n,s)=>{const{ref:a,refs:l,required:p,maxLength:f,minLength:g,min:w,max:_,pattern:Z,validate:O,name:E,valueAsNumber:ee,mount:ye}=e._f,k=b(t,E);if(!ye||r.has(E))return{};const N=l?l[0]:a,L=z=>{n&&N.reportValidity&&(N.setCustomValidity(ie(z)?"":z||""),N.reportValidity())},$={},ge=Kr(a),he=Ke(a),ke=ge||he,de=(ee||Jr(a))&&H(a.value)&&H(k)||hr(a)&&a.value===""||k===""||Array.isArray(k)&&!k.length,Ne=Yr.bind(null,E,o,$),pe=(z,T,G,re=be.maxLength,oe=be.minLength)=>{const ve=z?T:G;$[E]={type:z?re:oe,message:ve,ref:a,...Ne(z?re:oe,ve)}};if(s?!Array.isArray(k)||!k.length:p&&(!ke&&(de||te(k))||ie(k)&&!k||he&&!ho(l).isValid||ge&&!vo(l).isValid)){const{value:z,message:T}=ae(p)?{value:!!p,message:p}:Ee(p);if(z&&($[E]={type:be.required,message:T,ref:N,...Ne(be.required,T)},!o))return L(T),$}if(!de&&(!te(w)||!te(_))){let z,T;const G=Ee(_),re=Ee(w);if(!te(k)&&!isNaN(k)){const oe=a.valueAsNumber||k&&+k;te(G.value)||(z=oe>G.value),te(re.value)||(T=oe<re.value)}else{const oe=a.valueAsDate||new Date(k),ve=rr=>new Date(new Date().toDateString()+" "+rr),Pe=a.type=="time",Ae=a.type=="week";ae(G.value)&&k&&(z=Pe?ve(k)>ve(G.value):Ae?k>G.value:oe>new Date(G.value)),ae(re.value)&&k&&(T=Pe?ve(k)<ve(re.value):Ae?k<re.value:oe<new Date(re.value))}if((z||T)&&(pe(!!z,G.message,re.message,be.max,be.min),!o))return L($[E].message),$}if((f||g)&&!de&&(ae(k)||s&&Array.isArray(k))){const z=Ee(f),T=Ee(g),G=!te(z.value)&&k.length>+z.value,re=!te(T.value)&&k.length<+T.value;if((G||re)&&(pe(G,z.message,T.message),!o))return L($[E].message),$}if(Z&&!de&&ae(k)){const{value:z,message:T}=Ee(Z);if(pr(z)&&!k.match(z)&&($[E]={type:be.pattern,message:T,ref:a,...Ne(be.pattern,T)},!o))return L(T),$}if(O){if(fe(O)){const z=await O(k,t),T=It(z,N);if(T&&($[E]={...T,...Ne(be.validate,T.message)},!o))return L(T.message),$}else if(X(O)){let z={};for(const T in O){if(!ne(z)&&!o)break;const G=It(await O[T](k,t),N,T);G&&(z={...G,...Ne(T,G.message)},L(G.message),o&&($[E]=z))}if(!ne(z)&&($[E]={ref:N,...z},!o))return $}}return L(!0),$};const Cn={mode:me.onSubmit,reValidateMode:me.onChange,shouldFocusError:!0};function In(e={}){let r={...Cn,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:fe(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},n=X(r.defaultValues)||X(r.values)?Q(r.defaultValues||r.values)||{}:{},s=r.shouldUnregister?{}:Q(n),a={action:!1,mount:!1,watch:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},p,f=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let w={...g};const _={array:_t(),state:_t()},Z=r.criteriaMode===me.all,O=c=>u=>{clearTimeout(f),f=setTimeout(c,u)},E=async c=>{if(!r.disabled&&(g.isValid||w.isValid||c)){const u=r.resolver?ne((await he()).errors):await de(o,!0);u!==t.isValid&&_.state.next({isValid:u})}},ee=(c,u)=>{!r.disabled&&(g.isValidating||g.validatingFields||w.isValidating||w.validatingFields)&&((c||Array.from(l.mount)).forEach(d=>{d&&(u?D(t.validatingFields,d,u):J(t.validatingFields,d))}),_.state.next({validatingFields:t.validatingFields,isValidating:!ne(t.validatingFields)}))},ye=(c,u=[],d,x,v=!0,h=!0)=>{if(x&&d&&!r.disabled){if(a.action=!0,h&&Array.isArray(b(o,c))){const F=d(b(o,c),x.argA,x.argB);v&&D(o,c,F)}if(h&&Array.isArray(b(t.errors,c))){const F=d(b(t.errors,c),x.argA,x.argB);v&&D(t.errors,c,F),Nn(t.errors,c)}if((g.touchedFields||w.touchedFields)&&h&&Array.isArray(b(t.touchedFields,c))){const F=d(b(t.touchedFields,c),x.argA,x.argB);v&&D(t.touchedFields,c,F)}(g.dirtyFields||w.dirtyFields)&&(t.dirtyFields=Ve(n,s)),_.state.next({name:c,isDirty:pe(c,u),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else D(s,c,u)},k=(c,u)=>{D(t.errors,c,u),_.state.next({errors:t.errors})},N=c=>{t.errors=c,_.state.next({errors:t.errors,isValid:!1})},L=(c,u,d,x)=>{const v=b(o,c);if(v){const h=b(s,c,H(d)?b(n,c):d);H(h)||x&&x.defaultChecked||u?D(s,c,u?h:jt(v._f)):G(c,h),a.mount&&E()}},$=(c,u,d,x,v)=>{let h=!1,F=!1;const V={name:c};if(!r.disabled){if(!d||x){(g.isDirty||w.isDirty)&&(F=t.isDirty,t.isDirty=V.isDirty=pe(),h=F!==V.isDirty);const P=_e(b(n,c),u);F=!!b(t.dirtyFields,c),P?J(t.dirtyFields,c):D(t.dirtyFields,c,!0),V.dirtyFields=t.dirtyFields,h=h||(g.dirtyFields||w.dirtyFields)&&F!==!P}if(d){const P=b(t.touchedFields,c);P||(D(t.touchedFields,c,d),V.touchedFields=t.touchedFields,h=h||(g.touchedFields||w.touchedFields)&&P!==d)}h&&v&&_.state.next(V)}return h?V:{}},ge=(c,u,d,x)=>{const v=b(t.errors,c),h=(g.isValid||w.isValid)&&ie(u)&&t.isValid!==u;if(r.delayError&&d?(p=O(()=>k(c,d)),p(r.delayError)):(clearTimeout(f),p=null,d?D(t.errors,c,d):J(t.errors,c)),(d?!_e(v,d):v)||!ne(x)||h){const F={...x,...h&&ie(u)?{isValid:u}:{},errors:t.errors,name:c};t={...t,...F},_.state.next(F)}},he=async c=>{ee(c,!0);const u=await r.resolver(s,r.context,_n(c||l.mount,o,r.criteriaMode,r.shouldUseNativeValidation));return ee(c),u},ke=async c=>{const{errors:u}=await he(c);if(c)for(const d of c){const x=b(u,d);x?D(t.errors,d,x):J(t.errors,d)}else t.errors=u;return u},de=async(c,u,d={valid:!0})=>{for(const x in c){const v=c[x];if(v){const{_f:h,...F}=v;if(h){const V=l.array.has(h.name),P=v._f&&yn(v._f);P&&g.validatingFields&&ee([h.name],!0);const ce=await St(v,l.disabled,s,Z,r.shouldUseNativeValidation&&!u,V);if(P&&g.validatingFields&&ee([h.name]),ce[h.name]&&(d.valid=!1,u))break;!u&&(b(ce,h.name)?V?zn(t.errors,ce,h.name):D(t.errors,h.name,ce[h.name]):J(t.errors,h.name))}!ne(F)&&await de(F,u,d)}}return d.valid},Ne=()=>{for(const c of l.unMount){const u=b(o,c);u&&(u._f.refs?u._f.refs.every(d=>!Er(d)):!Er(u._f.ref))&&Ir(c)}l.unMount=new Set},pe=(c,u)=>!r.disabled&&(c&&u&&D(s,c,u),!_e(rr(),n)),z=(c,u,d)=>lo(c,l,{...a.mount?s:H(u)?n:ae(c)?{[c]:u}:u},d,u),T=c=>Wr(b(a.mount?s:n,c,r.shouldUnregister?b(n,c,[]):[])),G=(c,u,d={})=>{const x=b(o,c);let v=u;if(x){const h=x._f;h&&(!h.disabled&&D(s,c,po(u,h)),v=hr(h.ref)&&te(u)?"":u,mo(h.ref)?[...h.ref.options].forEach(F=>F.selected=v.includes(F.value)):h.refs?Ke(h.ref)?h.refs.forEach(F=>{(!F.defaultChecked||!F.disabled)&&(Array.isArray(v)?F.checked=!!v.find(V=>V===F.value):F.checked=v===F.value||!!v)}):h.refs.forEach(F=>F.checked=F.value===v):Jr(h.ref)?h.ref.value="":(h.ref.value=v,h.ref.type||_.state.next({name:c,values:Q(s)})))}(d.shouldDirty||d.shouldTouch)&&$(c,v,d.shouldTouch,d.shouldDirty,!0),d.shouldValidate&&Ae(c)},re=(c,u,d)=>{for(const x in u){if(!u.hasOwnProperty(x))return;const v=u[x],h=c+"."+x,F=b(o,h);(l.array.has(c)||X(v)||F&&!F._f)&&!ze(v)?re(h,v,d):G(h,v,d)}},oe=(c,u,d={})=>{const x=b(o,c),v=l.array.has(c),h=Q(u);D(s,c,h),v?(_.array.next({name:c,values:Q(s)}),(g.isDirty||g.dirtyFields||w.isDirty||w.dirtyFields)&&d.shouldDirty&&_.state.next({name:c,dirtyFields:Ve(n,s),isDirty:pe(c,h)})):x&&!x._f&&!te(h)?re(c,h,d):G(c,h,d),zt(c,l)&&_.state.next({...t,name:c}),_.state.next({name:a.mount?c:void 0,values:Q(s)})},ve=async c=>{a.mount=!0;const u=c.target;let d=u.name,x=!0;const v=b(o,d),h=P=>{x=Number.isNaN(P)||ze(P)&&isNaN(P.getTime())||_e(P,b(s,d,P))},F=kt(r.mode),V=kt(r.reValidateMode);if(v){let P,ce;const tr=u.type?jt(v._f):so(c),Fe=c.type===fr.BLUR||c.type===fr.FOCUS_OUT,Yo=!Fn(v._f)&&!r.resolver&&!b(t.errors,d)&&!v._f.deps||kn(Fe,b(t.touchedFields,d),t.isSubmitted,V,F),$r=zt(d,l,Fe);D(s,d,tr),Fe?(!u||!u.readOnly)&&(v._f.onBlur&&v._f.onBlur(c),p&&p(0)):v._f.onChange&&v._f.onChange(c);const Ar=$(d,tr,Fe),Jo=!ne(Ar)||$r;if(!Fe&&_.state.next({name:d,type:c.type,values:Q(s)}),Yo)return(g.isValid||w.isValid)&&(r.mode==="onBlur"?Fe&&E():Fe||E()),Jo&&_.state.next({name:d,...$r?{}:Ar});if(!Fe&&$r&&_.state.next({...t}),r.resolver){const{errors:mt}=await he([d]);if(h(tr),x){const Ko=Ct(t.errors,o,d),ft=Ct(mt,o,Ko.name||d);P=ft.error,d=ft.name,ce=ne(mt)}}else ee([d],!0),P=(await St(v,l.disabled,s,Z,r.shouldUseNativeValidation))[d],ee([d]),h(tr),x&&(P?ce=!1:(g.isValid||w.isValid)&&(ce=await de(o,!0)));x&&(v._f.deps&&(!Array.isArray(v._f.deps)||v._f.deps.length>0)&&Ae(v._f.deps),ge(d,ce,P,Ar))}},Pe=(c,u)=>{if(b(t.errors,u)&&c.focus)return c.focus(),1},Ae=async(c,u={})=>{let d,x;const v=Be(c);if(r.resolver){const h=await ke(H(c)?c:v);d=ne(h),x=c?!v.some(F=>b(h,F)):d}else c?(x=(await Promise.all(v.map(async h=>{const F=b(o,h);return await de(F&&F._f?{[h]:F}:F)}))).every(Boolean),!(!x&&!t.isValid)&&E()):x=d=await de(o);return _.state.next({...!ae(c)||(g.isValid||w.isValid)&&d!==t.isValid?{}:{name:c},...r.resolver||!c?{isValid:d}:{},errors:t.errors}),u.shouldFocus&&!x&&We(o,Pe,c?v:l.mount),x},rr=(c,u)=>{let d={...a.mount?s:n};return u&&(d=uo(u.dirtyFields?t.dirtyFields:t.touchedFields,d)),H(c)?d:ae(c)?b(d,c):c.map(x=>b(d,x))},nt=(c,u)=>({invalid:!!b((u||t).errors,c),isDirty:!!b((u||t).dirtyFields,c),error:b((u||t).errors,c),isValidating:!!b(t.validatingFields,c),isTouched:!!b((u||t).touchedFields,c)}),Mo=c=>{c&&Be(c).forEach(u=>J(t.errors,u)),_.state.next({errors:c?t.errors:{}})},st=(c,u,d)=>{const x=(b(o,c,{_f:{}})._f||{}).ref,v=b(t.errors,c)||{},{ref:h,message:F,type:V,...P}=v;D(t.errors,c,{...P,...u,ref:x}),_.state.next({name:c,errors:t.errors,isValid:!1}),d&&d.shouldFocus&&x&&x.focus&&x.focus()},Uo=(c,u)=>fe(c)?_.state.subscribe({next:d=>"values"in d&&c(z(void 0,u),d)}):z(c,u,!0),it=c=>_.state.subscribe({next:u=>{jn(c.name,u.name,c.exact)&&wn(u,c.formState||g,Ho,c.reRenderRoot)&&c.callback({values:{...s},...t,...u,defaultValues:n})}}).unsubscribe,Bo=c=>(a.mount=!0,w={...w,...c.formState},it({...c,formState:w})),Ir=(c,u={})=>{for(const d of c?Be(c):l.mount)l.mount.delete(d),l.array.delete(d),u.keepValue||(J(o,d),J(s,d)),!u.keepError&&J(t.errors,d),!u.keepDirty&&J(t.dirtyFields,d),!u.keepTouched&&J(t.touchedFields,d),!u.keepIsValidating&&J(t.validatingFields,d),!r.shouldUnregister&&!u.keepDefaultValue&&J(n,d);_.state.next({values:Q(s)}),_.state.next({...t,...u.keepDirty?{isDirty:pe()}:{}}),!u.keepIsValid&&E()},at=({disabled:c,name:u})=>{(ie(c)&&a.mount||c||l.disabled.has(u))&&(c?l.disabled.add(u):l.disabled.delete(u))},Sr=(c,u={})=>{let d=b(o,c);const x=ie(u.disabled)||ie(r.disabled);return D(o,c,{...d||{},_f:{...d&&d._f?d._f:{ref:{name:c}},name:c,mount:!0,...u}}),l.mount.add(c),d?at({disabled:ie(u.disabled)?u.disabled:r.disabled,name:c}):L(c,!0,u.value),{...x?{disabled:u.disabled||r.disabled}:{},...r.progressive?{required:!!u.required,min:Ue(u.min),max:Ue(u.max),minLength:Ue(u.minLength),maxLength:Ue(u.maxLength),pattern:Ue(u.pattern)}:{},name:c,onChange:ve,onBlur:ve,ref:v=>{if(v){Sr(c,u),d=b(o,c);const h=H(v.value)&&v.querySelectorAll&&v.querySelectorAll("input,select,textarea")[0]||v,F=vn(h),V=d._f.refs||[];if(F?V.find(P=>P===h):h===d._f.ref)return;D(o,c,{_f:{...d._f,...F?{refs:[...V.filter(Er),h,...Array.isArray(b(n,c))?[{}]:[]],ref:{type:h.type,name:c}}:{ref:h}}}),L(c,!1,void 0,h)}else d=b(o,c,{}),d._f&&(d._f.mount=!1),(r.shouldUnregister||u.shouldUnregister)&&!(io(l.array,c)&&a.action)&&l.unMount.add(c)}}},Zr=()=>r.shouldFocusError&&We(o,Pe,l.mount),Wo=c=>{ie(c)&&(_.state.next({disabled:c}),We(o,(u,d)=>{const x=b(o,d);x&&(u.disabled=x._f.disabled||c,Array.isArray(x._f.refs)&&x._f.refs.forEach(v=>{v.disabled=x._f.disabled||c}))},0,!1))},ct=(c,u)=>async d=>{let x;d&&(d.preventDefault&&d.preventDefault(),d.persist&&d.persist());let v=Q(s);if(_.state.next({isSubmitting:!0}),r.resolver){const{errors:h,values:F}=await he();t.errors=h,v=Q(F)}else await de(o);if(l.disabled.size)for(const h of l.disabled)J(v,h);if(J(t.errors,"root"),ne(t.errors)){_.state.next({errors:{}});try{await c(v,d)}catch(h){x=h}}else u&&await u({...t.errors},d),Zr(),setTimeout(Zr);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ne(t.errors)&&!x,submitCount:t.submitCount+1,errors:t.errors}),x)throw x},qo=(c,u={})=>{b(o,c)&&(H(u.defaultValue)?oe(c,Q(b(n,c))):(oe(c,u.defaultValue),D(n,c,Q(u.defaultValue))),u.keepTouched||J(t.touchedFields,c),u.keepDirty||(J(t.dirtyFields,c),t.isDirty=u.defaultValue?pe(c,Q(b(n,c))):pe()),u.keepError||(J(t.errors,c),g.isValid&&E()),_.state.next({...t}))},lt=(c,u={})=>{const d=c?Q(c):n,x=Q(d),v=ne(c),h=v?n:x;if(u.keepDefaultValues||(n=d),!u.keepValues){if(u.keepDirtyValues){const F=new Set([...l.mount,...Object.keys(Ve(n,s))]);for(const V of Array.from(F))b(t.dirtyFields,V)?D(h,V,b(s,V)):oe(V,b(h,V))}else{if(Br&&H(c))for(const F of l.mount){const V=b(o,F);if(V&&V._f){const P=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(hr(P)){const ce=P.closest("form");if(ce){ce.reset();break}}}}if(u.keepFieldsRef)for(const F of l.mount)oe(F,b(h,F));else o={}}s=r.shouldUnregister?u.keepDefaultValues?Q(n):{}:Q(h),_.array.next({values:{...h}}),_.state.next({values:{...h}})}l={mount:u.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},a.mount=!g.isValid||!!u.keepIsValid||!!u.keepDirtyValues,a.watch=!!r.shouldUnregister,_.state.next({submitCount:u.keepSubmitCount?t.submitCount:0,isDirty:v?!1:u.keepDirty?t.isDirty:!!(u.keepDefaultValues&&!_e(c,n)),isSubmitted:u.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:v?{}:u.keepDirtyValues?u.keepDefaultValues&&s?Ve(n,s):t.dirtyFields:u.keepDefaultValues&&c?Ve(n,c):u.keepDirty?t.dirtyFields:{},touchedFields:u.keepTouched?t.touchedFields:{},errors:u.keepErrors?t.errors:{},isSubmitSuccessful:u.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:n})},ut=(c,u)=>lt(fe(c)?c(s):c,u),Go=(c,u={})=>{const d=b(o,c),x=d&&d._f;if(x){const v=x.refs?x.refs[0]:x.ref;v.focus&&(v.focus(),u.shouldSelect&&fe(v.select)&&v.select())}},Ho=c=>{t={...t,...c}},dt={control:{register:Sr,unregister:Ir,getFieldState:nt,handleSubmit:ct,setError:st,_subscribe:it,_runSchema:he,_focusError:Zr,_getWatch:z,_getDirty:pe,_setValid:E,_setFieldArray:ye,_setDisabledField:at,_setErrors:N,_getFieldArray:T,_reset:lt,_resetDefaultValues:()=>fe(r.defaultValues)&&r.defaultValues().then(c=>{ut(c,r.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:Ne,_disableForm:Wo,_subjects:_,_proxyFormState:g,get _fields(){return o},get _formValues(){return s},get _state(){return a},set _state(c){a=c},get _defaultValues(){return n},get _names(){return l},set _names(c){l=c},get _formState(){return t},get _options(){return r},set _options(c){r={...r,...c}}},subscribe:Bo,trigger:Ae,register:Sr,handleSubmit:ct,watch:Uo,setValue:oe,getValues:rr,reset:ut,resetField:qo,clearErrors:Mo,unregister:Ir,setError:st,setFocus:Go,getFieldState:nt};return{...dt,formControl:dt}}function Oe(e={}){const r=j.useRef(void 0),t=j.useRef(void 0),[o,n]=j.useState({isDirty:!1,isValidating:!1,isLoading:fe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:fe(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:o},e.defaultValues&&!fe(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:a,...l}=In(e);r.current={...l,formState:o}}const s=r.current.control;return s._options=e,Hr(()=>{const a=s._subscribe({formState:s._proxyFormState,callback:()=>n({...s._formState}),reRenderRoot:!0});return n(l=>({...l,isReady:!0})),s._formState.isReady=!0,a},[s]),j.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),j.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode)},[s,e.mode,e.reValidateMode]),j.useEffect(()=>{e.errors&&(s._setErrors(e.errors),s._focusError())},[s,e.errors]),j.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),j.useEffect(()=>{if(s._proxyFormState.isDirty){const a=s._getDirty();a!==o.isDirty&&s._subjects.state.next({isDirty:a})}},[s,o.isDirty]),j.useEffect(()=>{e.values&&!_e(e.values,t.current)?(s._reset(e.values,{keepFieldsRef:!0,...s._options.resetOptions}),t.current=e.values,n(a=>({...a}))):s._resetDefaultValues()},[s,e.values]),j.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),r.current.formState=ao(o,s),r.current}const Zt=(e,r,t)=>{if(e&&"reportValidity"in e){const o=b(t,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},Or=(e,r)=>{for(const t in r.fields){const o=r.fields[t];o&&o.ref&&"reportValidity"in o.ref?Zt(o.ref,t,e):o&&o.refs&&o.refs.forEach(n=>Zt(n,t,e))}},$t=(e,r)=>{r.shouldUseNativeValidation&&Or(e,r);const t={};for(const o in e){const n=b(r.fields,o),s=Object.assign(e[o]||{},{ref:n&&n.ref});if(Sn(r.names||Object.keys(e),o)){const a=Object.assign({},b(t,o));D(a,"root",s),D(t,o,a)}else D(t,o,s)}return t},Sn=(e,r)=>{const t=At(r);return e.some(o=>At(o).match(`^${t}\\.\\d+`))};function At(e){return e.replace(/\]|\[/g,"")}function m(e,r,t){function o(l,p){var f;Object.defineProperty(l,"_zod",{value:l._zod??{},enumerable:!1}),(f=l._zod).traits??(f.traits=new Set),l._zod.traits.add(e),r(l,p);for(const g in a.prototype)g in l||Object.defineProperty(l,g,{value:a.prototype[g].bind(l)});l._zod.constr=a,l._zod.def=p}const n=t?.Parent??Object;class s extends n{}Object.defineProperty(s,"name",{value:e});function a(l){var p;const f=t?.Parent?new s:this;o(f,l),(p=f._zod).deferred??(p.deferred=[]);for(const g of f._zod.deferred)g();return f}return Object.defineProperty(a,"init",{value:o}),Object.defineProperty(a,Symbol.hasInstance,{value:l=>t?.Parent&&l instanceof t.Parent?!0:l?._zod?.traits?.has(e)}),Object.defineProperty(a,"name",{value:e}),a}class Le extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class go extends Error{constructor(r){super(`Encountered unidirectional transform during encode: ${r}`),this.name="ZodEncodeError"}}const bo={};function Ce(e){return bo}function Zn(e){const r=Object.values(e).filter(o=>typeof o=="number");return Object.entries(e).filter(([o,n])=>r.indexOf(+o)===-1).map(([o,n])=>n)}function Pr(e,r){return typeof r=="bigint"?r.toString():r}function Xr(e){return{get value(){{const r=e();return Object.defineProperty(this,"value",{value:r}),r}}}}function Qr(e){return e==null}function et(e){const r=e.startsWith("^")?1:0,t=e.endsWith("$")?e.length-1:e.length;return e.slice(r,t)}function $n(e,r){const t=(e.toString().split(".")[1]||"").length,o=r.toString();let n=(o.split(".")[1]||"").length;if(n===0&&/\d?e-\d?/.test(o)){const p=o.match(/\d?e-(\d?)/);p?.[1]&&(n=Number.parseInt(p[1]))}const s=t>n?t:n,a=Number.parseInt(e.toFixed(s).replace(".","")),l=Number.parseInt(r.toFixed(s).replace(".",""));return a%l/10**s}const Et=Symbol("evaluating");function M(e,r,t){let o;Object.defineProperty(e,r,{get(){if(o!==Et)return o===void 0&&(o=Et,o=t()),o},set(n){Object.defineProperty(e,r,{value:n})},configurable:!0})}function Se(e,r,t){Object.defineProperty(e,r,{value:t,writable:!0,enumerable:!0,configurable:!0})}function Ze(...e){const r={};for(const t of e){const o=Object.getOwnPropertyDescriptors(t);Object.assign(r,o)}return Object.defineProperties({},r)}function Vt(e){return JSON.stringify(e)}const xo="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function vr(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}const An=Xr(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function He(e){if(vr(e)===!1)return!1;const r=e.constructor;if(r===void 0)return!0;const t=r.prototype;return!(vr(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function _o(e){return He(e)?{...e}:Array.isArray(e)?[...e]:e}const En=new Set(["string","number","symbol"]);function Te(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function je(e,r,t){const o=new e._zod.constr(r??e._zod.def);return(!r||t?.parent)&&(o._zod.parent=e),o}function y(e){const r=e;if(!r)return{};if(typeof r=="string")return{error:()=>r};if(r?.message!==void 0){if(r?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");r.error=r.message}return delete r.message,typeof r.error=="string"?{...r,error:()=>r.error}:r}function Vn(e){return Object.keys(e).filter(r=>e[r]._zod.optin==="optional"&&e[r]._zod.optout==="optional")}const Dn={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function Ln(e,r){const t=e._zod.def,o=Ze(e._zod.def,{get shape(){const n={};for(const s in r){if(!(s in t.shape))throw new Error(`Unrecognized key: "${s}"`);r[s]&&(n[s]=t.shape[s])}return Se(this,"shape",n),n},checks:[]});return je(e,o)}function Tn(e,r){const t=e._zod.def,o=Ze(e._zod.def,{get shape(){const n={...e._zod.def.shape};for(const s in r){if(!(s in t.shape))throw new Error(`Unrecognized key: "${s}"`);r[s]&&delete n[s]}return Se(this,"shape",n),n},checks:[]});return je(e,o)}function On(e,r){if(!He(r))throw new Error("Invalid input to extend: expected a plain object");const t=e._zod.def.checks;if(t&&t.length>0)throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");const n=Ze(e._zod.def,{get shape(){const s={...e._zod.def.shape,...r};return Se(this,"shape",s),s},checks:[]});return je(e,n)}function Pn(e,r){if(!He(r))throw new Error("Invalid input to safeExtend: expected a plain object");const t={...e._zod.def,get shape(){const o={...e._zod.def.shape,...r};return Se(this,"shape",o),o},checks:e._zod.def.checks};return je(e,t)}function Rn(e,r){const t=Ze(e._zod.def,{get shape(){const o={...e._zod.def.shape,...r._zod.def.shape};return Se(this,"shape",o),o},get catchall(){return r._zod.def.catchall},checks:[]});return je(e,t)}function Mn(e,r,t){const o=Ze(r._zod.def,{get shape(){const n=r._zod.def.shape,s={...n};if(t)for(const a in t){if(!(a in n))throw new Error(`Unrecognized key: "${a}"`);t[a]&&(s[a]=e?new e({type:"optional",innerType:n[a]}):n[a])}else for(const a in n)s[a]=e?new e({type:"optional",innerType:n[a]}):n[a];return Se(this,"shape",s),s},checks:[]});return je(r,o)}function Un(e,r,t){const o=Ze(r._zod.def,{get shape(){const n=r._zod.def.shape,s={...n};if(t)for(const a in t){if(!(a in s))throw new Error(`Unrecognized key: "${a}"`);t[a]&&(s[a]=new e({type:"nonoptional",innerType:n[a]}))}else for(const a in n)s[a]=new e({type:"nonoptional",innerType:n[a]});return Se(this,"shape",s),s},checks:[]});return je(r,o)}function De(e,r=0){if(e.aborted===!0)return!0;for(let t=r;t<e.issues.length;t++)if(e.issues[t]?.continue!==!0)return!0;return!1}function yo(e,r){return r.map(t=>{var o;return(o=t).path??(o.path=[]),t.path.unshift(e),t})}function or(e){return typeof e=="string"?e:e?.message}function Ie(e,r,t){const o={...e,path:e.path??[]};if(!e.message){const n=or(e.inst?._zod.def?.error?.(e))??or(r?.error?.(e))??or(t.customError?.(e))??or(t.localeError?.(e))??"Invalid input";o.message=n}return delete o.inst,delete o.continue,r?.reportInput||delete o.input,o}function rt(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}function Ye(...e){const[r,t,o]=e;return typeof r=="string"?{message:r,code:"custom",input:t,inst:o}:{...r}}const Fo=(e,r)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:r,enumerable:!1}),e.message=JSON.stringify(r,Pr,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},tt=m("$ZodError",Fo),Fr=m("$ZodError",Fo,{Parent:Error});function Bn(e,r=t=>t.message){const t={},o=[];for(const n of e.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(r(n))):o.push(r(n));return{formErrors:o,fieldErrors:t}}function Wn(e,r){const t=r||function(s){return s.message},o={_errors:[]},n=s=>{for(const a of s.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(l=>n({issues:l}));else if(a.code==="invalid_key")n({issues:a.issues});else if(a.code==="invalid_element")n({issues:a.issues});else if(a.path.length===0)o._errors.push(t(a));else{let l=o,p=0;for(;p<a.path.length;){const f=a.path[p];p===a.path.length-1?(l[f]=l[f]||{_errors:[]},l[f]._errors.push(t(a))):l[f]=l[f]||{_errors:[]},l=l[f],p++}}};return n(e),o}const wr=e=>(r,t,o,n)=>{const s=o?Object.assign(o,{async:!1}):{async:!1},a=r._zod.run({value:t,issues:[]},s);if(a instanceof Promise)throw new Le;if(a.issues.length){const l=new(n?.Err??e)(a.issues.map(p=>Ie(p,s,Ce())));throw xo(l,n?.callee),l}return a.value},qn=wr(Fr),jr=e=>async(r,t,o,n)=>{const s=o?Object.assign(o,{async:!0}):{async:!0};let a=r._zod.run({value:t,issues:[]},s);if(a instanceof Promise&&(a=await a),a.issues.length){const l=new(n?.Err??e)(a.issues.map(p=>Ie(p,s,Ce())));throw xo(l,n?.callee),l}return a.value},Gn=jr(Fr),kr=e=>(r,t,o)=>{const n=o?{...o,async:!1}:{async:!1},s=r._zod.run({value:t,issues:[]},n);if(s instanceof Promise)throw new Le;return s.issues.length?{success:!1,error:new(e??tt)(s.issues.map(a=>Ie(a,n,Ce())))}:{success:!0,data:s.value}},Hn=kr(Fr),Nr=e=>async(r,t,o)=>{const n=o?Object.assign(o,{async:!0}):{async:!0};let s=r._zod.run({value:t,issues:[]},n);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new e(s.issues.map(a=>Ie(a,n,Ce())))}:{success:!0,data:s.value}},Yn=Nr(Fr),Jn=e=>(r,t,o)=>{const n=o?Object.assign(o,{direction:"backward"}):{direction:"backward"};return wr(e)(r,t,n)},Kn=e=>(r,t,o)=>wr(e)(r,t,o),Xn=e=>async(r,t,o)=>{const n=o?Object.assign(o,{direction:"backward"}):{direction:"backward"};return jr(e)(r,t,n)},Qn=e=>async(r,t,o)=>jr(e)(r,t,o),es=e=>(r,t,o)=>{const n=o?Object.assign(o,{direction:"backward"}):{direction:"backward"};return kr(e)(r,t,n)},rs=e=>(r,t,o)=>kr(e)(r,t,o),ts=e=>async(r,t,o)=>{const n=o?Object.assign(o,{direction:"backward"}):{direction:"backward"};return Nr(e)(r,t,n)},os=e=>async(r,t,o)=>Nr(e)(r,t,o),ns=/^[cC][^\s-]{8,}$/,ss=/^[0-9a-z]+$/,is=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,as=/^[0-9a-vA-V]{20}$/,cs=/^[A-Za-z0-9]{27}$/,ls=/^[a-zA-Z0-9_-]{21}$/,us=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,ds=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Dt=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,ms=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,fs="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function hs(){return new RegExp(fs,"u")}const ps=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,vs=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,gs=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,bs=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,xs=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,wo=/^[A-Za-z0-9_-]*$/,_s=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,ys=/^\+(?:[0-9]){6,14}[0-9]$/,jo="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Fs=new RegExp(`^${jo}$`);function ko(e){const r="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof e.precision=="number"?e.precision===-1?`${r}`:e.precision===0?`${r}:[0-5]\\d`:`${r}:[0-5]\\d\\.\\d{${e.precision}}`:`${r}(?::[0-5]\\d(?:\\.\\d+)?)?`}function ws(e){return new RegExp(`^${ko(e)}$`)}function js(e){const r=ko({precision:e.precision}),t=["Z"];e.local&&t.push(""),e.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const o=`${r}(?:${t.join("|")})`;return new RegExp(`^${jo}T(?:${o})$`)}const ks=e=>{const r=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${r}$`)},Ns=/^-?\d+$/,zs=/^-?\d+(?:\.\d+)?/,Cs=/^(?:true|false)$/i,Is=/^[^A-Z]*$/,Ss=/^[^a-z]*$/,se=m("$ZodCheck",(e,r)=>{var t;e._zod??(e._zod={}),e._zod.def=r,(t=e._zod).onattach??(t.onattach=[])}),No={number:"number",bigint:"bigint",object:"date"},zo=m("$ZodCheckLessThan",(e,r)=>{se.init(e,r);const t=No[typeof r.value];e._zod.onattach.push(o=>{const n=o._zod.bag,s=(r.inclusive?n.maximum:n.exclusiveMaximum)??Number.POSITIVE_INFINITY;r.value<s&&(r.inclusive?n.maximum=r.value:n.exclusiveMaximum=r.value)}),e._zod.check=o=>{(r.inclusive?o.value<=r.value:o.value<r.value)||o.issues.push({origin:t,code:"too_big",maximum:r.value,input:o.value,inclusive:r.inclusive,inst:e,continue:!r.abort})}}),Co=m("$ZodCheckGreaterThan",(e,r)=>{se.init(e,r);const t=No[typeof r.value];e._zod.onattach.push(o=>{const n=o._zod.bag,s=(r.inclusive?n.minimum:n.exclusiveMinimum)??Number.NEGATIVE_INFINITY;r.value>s&&(r.inclusive?n.minimum=r.value:n.exclusiveMinimum=r.value)}),e._zod.check=o=>{(r.inclusive?o.value>=r.value:o.value>r.value)||o.issues.push({origin:t,code:"too_small",minimum:r.value,input:o.value,inclusive:r.inclusive,inst:e,continue:!r.abort})}}),Zs=m("$ZodCheckMultipleOf",(e,r)=>{se.init(e,r),e._zod.onattach.push(t=>{var o;(o=t._zod.bag).multipleOf??(o.multipleOf=r.value)}),e._zod.check=t=>{if(typeof t.value!=typeof r.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%r.value===BigInt(0):$n(t.value,r.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:r.value,input:t.value,inst:e,continue:!r.abort})}}),$s=m("$ZodCheckNumberFormat",(e,r)=>{se.init(e,r),r.format=r.format||"float64";const t=r.format?.includes("int"),o=t?"int":"number",[n,s]=Dn[r.format];e._zod.onattach.push(a=>{const l=a._zod.bag;l.format=r.format,l.minimum=n,l.maximum=s,t&&(l.pattern=Ns)}),e._zod.check=a=>{const l=a.value;if(t){if(!Number.isInteger(l)){a.issues.push({expected:o,format:r.format,code:"invalid_type",continue:!1,input:l,inst:e});return}if(!Number.isSafeInteger(l)){l>0?a.issues.push({input:l,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:o,continue:!r.abort}):a.issues.push({input:l,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:o,continue:!r.abort});return}}l<n&&a.issues.push({origin:"number",input:l,code:"too_small",minimum:n,inclusive:!0,inst:e,continue:!r.abort}),l>s&&a.issues.push({origin:"number",input:l,code:"too_big",maximum:s,inst:e})}}),As=m("$ZodCheckMaxLength",(e,r)=>{var t;se.init(e,r),(t=e._zod.def).when??(t.when=o=>{const n=o.value;return!Qr(n)&&n.length!==void 0}),e._zod.onattach.push(o=>{const n=o._zod.bag.maximum??Number.POSITIVE_INFINITY;r.maximum<n&&(o._zod.bag.maximum=r.maximum)}),e._zod.check=o=>{const n=o.value;if(n.length<=r.maximum)return;const a=rt(n);o.issues.push({origin:a,code:"too_big",maximum:r.maximum,inclusive:!0,input:n,inst:e,continue:!r.abort})}}),Es=m("$ZodCheckMinLength",(e,r)=>{var t;se.init(e,r),(t=e._zod.def).when??(t.when=o=>{const n=o.value;return!Qr(n)&&n.length!==void 0}),e._zod.onattach.push(o=>{const n=o._zod.bag.minimum??Number.NEGATIVE_INFINITY;r.minimum>n&&(o._zod.bag.minimum=r.minimum)}),e._zod.check=o=>{const n=o.value;if(n.length>=r.minimum)return;const a=rt(n);o.issues.push({origin:a,code:"too_small",minimum:r.minimum,inclusive:!0,input:n,inst:e,continue:!r.abort})}}),Vs=m("$ZodCheckLengthEquals",(e,r)=>{var t;se.init(e,r),(t=e._zod.def).when??(t.when=o=>{const n=o.value;return!Qr(n)&&n.length!==void 0}),e._zod.onattach.push(o=>{const n=o._zod.bag;n.minimum=r.length,n.maximum=r.length,n.length=r.length}),e._zod.check=o=>{const n=o.value,s=n.length;if(s===r.length)return;const a=rt(n),l=s>r.length;o.issues.push({origin:a,...l?{code:"too_big",maximum:r.length}:{code:"too_small",minimum:r.length},inclusive:!0,exact:!0,input:o.value,inst:e,continue:!r.abort})}}),zr=m("$ZodCheckStringFormat",(e,r)=>{var t,o;se.init(e,r),e._zod.onattach.push(n=>{const s=n._zod.bag;s.format=r.format,r.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(r.pattern))}),r.pattern?(t=e._zod).check??(t.check=n=>{r.pattern.lastIndex=0,!r.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:r.format,input:n.value,...r.pattern?{pattern:r.pattern.toString()}:{},inst:e,continue:!r.abort})}):(o=e._zod).check??(o.check=()=>{})}),Ds=m("$ZodCheckRegex",(e,r)=>{zr.init(e,r),e._zod.check=t=>{r.pattern.lastIndex=0,!r.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:r.pattern.toString(),inst:e,continue:!r.abort})}}),Ls=m("$ZodCheckLowerCase",(e,r)=>{r.pattern??(r.pattern=Is),zr.init(e,r)}),Ts=m("$ZodCheckUpperCase",(e,r)=>{r.pattern??(r.pattern=Ss),zr.init(e,r)}),Os=m("$ZodCheckIncludes",(e,r)=>{se.init(e,r);const t=Te(r.includes),o=new RegExp(typeof r.position=="number"?`^.{${r.position}}${t}`:t);r.pattern=o,e._zod.onattach.push(n=>{const s=n._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(o)}),e._zod.check=n=>{n.value.includes(r.includes,r.position)||n.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:r.includes,input:n.value,inst:e,continue:!r.abort})}}),Ps=m("$ZodCheckStartsWith",(e,r)=>{se.init(e,r);const t=new RegExp(`^${Te(r.prefix)}.*`);r.pattern??(r.pattern=t),e._zod.onattach.push(o=>{const n=o._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(t)}),e._zod.check=o=>{o.value.startsWith(r.prefix)||o.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:r.prefix,input:o.value,inst:e,continue:!r.abort})}}),Rs=m("$ZodCheckEndsWith",(e,r)=>{se.init(e,r);const t=new RegExp(`.*${Te(r.suffix)}$`);r.pattern??(r.pattern=t),e._zod.onattach.push(o=>{const n=o._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(t)}),e._zod.check=o=>{o.value.endsWith(r.suffix)||o.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:r.suffix,input:o.value,inst:e,continue:!r.abort})}}),Ms=m("$ZodCheckOverwrite",(e,r)=>{se.init(e,r),e._zod.check=t=>{t.value=r.tx(t.value)}});class Us{constructor(r=[]){this.content=[],this.indent=0,this&&(this.args=r)}indented(r){this.indent+=1,r(this),this.indent-=1}write(r){if(typeof r=="function"){r(this,{execution:"sync"}),r(this,{execution:"async"});return}const o=r.split(`
`).filter(a=>a),n=Math.min(...o.map(a=>a.length-a.trimStart().length)),s=o.map(a=>a.slice(n)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const r=Function,t=this?.args,n=[...(this?.content??[""]).map(s=>`  ${s}`)];return new r(...t,n.join(`
`))}}const Bs={major:4,minor:1,patch:11},q=m("$ZodType",(e,r)=>{var t;e??(e={}),e._zod.def=r,e._zod.bag=e._zod.bag||{},e._zod.version=Bs;const o=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&o.unshift(e);for(const n of o)for(const s of n._zod.onattach)s(e);if(o.length===0)(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{const n=(a,l,p)=>{let f=De(a),g;for(const w of l){if(w._zod.def.when){if(!w._zod.def.when(a))continue}else if(f)continue;const _=a.issues.length,Z=w._zod.check(a);if(Z instanceof Promise&&p?.async===!1)throw new Le;if(g||Z instanceof Promise)g=(g??Promise.resolve()).then(async()=>{await Z,a.issues.length!==_&&(f||(f=De(a,_)))});else{if(a.issues.length===_)continue;f||(f=De(a,_))}}return g?g.then(()=>a):a},s=(a,l,p)=>{if(De(a))return a.aborted=!0,a;const f=n(l,o,p);if(f instanceof Promise){if(p.async===!1)throw new Le;return f.then(g=>e._zod.parse(g,p))}return e._zod.parse(f,p)};e._zod.run=(a,l)=>{if(l.skipChecks)return e._zod.parse(a,l);if(l.direction==="backward"){const f=e._zod.parse({value:a.value,issues:[]},{...l,skipChecks:!0});return f instanceof Promise?f.then(g=>s(g,a,l)):s(f,a,l)}const p=e._zod.parse(a,l);if(p instanceof Promise){if(l.async===!1)throw new Le;return p.then(f=>n(f,o,l))}return n(p,o,l)}}e["~standard"]={validate:n=>{try{const s=Hn(e,n);return s.success?{value:s.data}:{issues:s.error?.issues}}catch{return Yn(e,n).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}}),ot=m("$ZodString",(e,r)=>{q.init(e,r),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??ks(e._zod.bag),e._zod.parse=(t,o)=>{if(r.coerce)try{t.value=String(t.value)}catch{}return typeof t.value=="string"||t.issues.push({expected:"string",code:"invalid_type",input:t.value,inst:e}),t}}),U=m("$ZodStringFormat",(e,r)=>{zr.init(e,r),ot.init(e,r)}),Ws=m("$ZodGUID",(e,r)=>{r.pattern??(r.pattern=ds),U.init(e,r)}),qs=m("$ZodUUID",(e,r)=>{if(r.version){const o={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[r.version];if(o===void 0)throw new Error(`Invalid UUID version: "${r.version}"`);r.pattern??(r.pattern=Dt(o))}else r.pattern??(r.pattern=Dt());U.init(e,r)}),Gs=m("$ZodEmail",(e,r)=>{r.pattern??(r.pattern=ms),U.init(e,r)}),Hs=m("$ZodURL",(e,r)=>{U.init(e,r),e._zod.check=t=>{try{const o=t.value.trim(),n=new URL(o);r.hostname&&(r.hostname.lastIndex=0,r.hostname.test(n.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:_s.source,input:t.value,inst:e,continue:!r.abort})),r.protocol&&(r.protocol.lastIndex=0,r.protocol.test(n.protocol.endsWith(":")?n.protocol.slice(0,-1):n.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:r.protocol.source,input:t.value,inst:e,continue:!r.abort})),r.normalize?t.value=n.href:t.value=o;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:e,continue:!r.abort})}}}),Ys=m("$ZodEmoji",(e,r)=>{r.pattern??(r.pattern=hs()),U.init(e,r)}),Js=m("$ZodNanoID",(e,r)=>{r.pattern??(r.pattern=ls),U.init(e,r)}),Ks=m("$ZodCUID",(e,r)=>{r.pattern??(r.pattern=ns),U.init(e,r)}),Xs=m("$ZodCUID2",(e,r)=>{r.pattern??(r.pattern=ss),U.init(e,r)}),Qs=m("$ZodULID",(e,r)=>{r.pattern??(r.pattern=is),U.init(e,r)}),ei=m("$ZodXID",(e,r)=>{r.pattern??(r.pattern=as),U.init(e,r)}),ri=m("$ZodKSUID",(e,r)=>{r.pattern??(r.pattern=cs),U.init(e,r)}),ti=m("$ZodISODateTime",(e,r)=>{r.pattern??(r.pattern=js(r)),U.init(e,r)}),oi=m("$ZodISODate",(e,r)=>{r.pattern??(r.pattern=Fs),U.init(e,r)}),ni=m("$ZodISOTime",(e,r)=>{r.pattern??(r.pattern=ws(r)),U.init(e,r)}),si=m("$ZodISODuration",(e,r)=>{r.pattern??(r.pattern=us),U.init(e,r)}),ii=m("$ZodIPv4",(e,r)=>{r.pattern??(r.pattern=ps),U.init(e,r),e._zod.onattach.push(t=>{const o=t._zod.bag;o.format="ipv4"})}),ai=m("$ZodIPv6",(e,r)=>{r.pattern??(r.pattern=vs),U.init(e,r),e._zod.onattach.push(t=>{const o=t._zod.bag;o.format="ipv6"}),e._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:e,continue:!r.abort})}}}),ci=m("$ZodCIDRv4",(e,r)=>{r.pattern??(r.pattern=gs),U.init(e,r)}),li=m("$ZodCIDRv6",(e,r)=>{r.pattern??(r.pattern=bs),U.init(e,r),e._zod.check=t=>{const o=t.value.split("/");try{if(o.length!==2)throw new Error;const[n,s]=o;if(!s)throw new Error;const a=Number(s);if(`${a}`!==s)throw new Error;if(a<0||a>128)throw new Error;new URL(`http://[${n}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:e,continue:!r.abort})}}});function Io(e){if(e==="")return!0;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}const ui=m("$ZodBase64",(e,r)=>{r.pattern??(r.pattern=xs),U.init(e,r),e._zod.onattach.push(t=>{t._zod.bag.contentEncoding="base64"}),e._zod.check=t=>{Io(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:e,continue:!r.abort})}});function di(e){if(!wo.test(e))return!1;const r=e.replace(/[-_]/g,o=>o==="-"?"+":"/"),t=r.padEnd(Math.ceil(r.length/4)*4,"=");return Io(t)}const mi=m("$ZodBase64URL",(e,r)=>{r.pattern??(r.pattern=wo),U.init(e,r),e._zod.onattach.push(t=>{t._zod.bag.contentEncoding="base64url"}),e._zod.check=t=>{di(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:e,continue:!r.abort})}}),fi=m("$ZodE164",(e,r)=>{r.pattern??(r.pattern=ys),U.init(e,r)});function hi(e,r=null){try{const t=e.split(".");if(t.length!==3)return!1;const[o]=t;if(!o)return!1;const n=JSON.parse(atob(o));return!("typ"in n&&n?.typ!=="JWT"||!n.alg||r&&(!("alg"in n)||n.alg!==r))}catch{return!1}}const pi=m("$ZodJWT",(e,r)=>{U.init(e,r),e._zod.check=t=>{hi(t.value,r.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:e,continue:!r.abort})}}),So=m("$ZodNumber",(e,r)=>{q.init(e,r),e._zod.pattern=e._zod.bag.pattern??zs,e._zod.parse=(t,o)=>{if(r.coerce)try{t.value=Number(t.value)}catch{}const n=t.value;if(typeof n=="number"&&!Number.isNaN(n)&&Number.isFinite(n))return t;const s=typeof n=="number"?Number.isNaN(n)?"NaN":Number.isFinite(n)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:n,inst:e,...s?{received:s}:{}}),t}}),vi=m("$ZodNumber",(e,r)=>{$s.init(e,r),So.init(e,r)}),gi=m("$ZodBoolean",(e,r)=>{q.init(e,r),e._zod.pattern=Cs,e._zod.parse=(t,o)=>{if(r.coerce)try{t.value=!!t.value}catch{}const n=t.value;return typeof n=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:n,inst:e}),t}}),bi=m("$ZodUnknown",(e,r)=>{q.init(e,r),e._zod.parse=t=>t}),xi=m("$ZodNever",(e,r)=>{q.init(e,r),e._zod.parse=(t,o)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:e}),t)});function Lt(e,r,t){e.issues.length&&r.issues.push(...yo(t,e.issues)),r.value[t]=e.value}const _i=m("$ZodArray",(e,r)=>{q.init(e,r),e._zod.parse=(t,o)=>{const n=t.value;if(!Array.isArray(n))return t.issues.push({expected:"array",code:"invalid_type",input:n,inst:e}),t;t.value=Array(n.length);const s=[];for(let a=0;a<n.length;a++){const l=n[a],p=r.element._zod.run({value:l,issues:[]},o);p instanceof Promise?s.push(p.then(f=>Lt(f,t,a))):Lt(p,t,a)}return s.length?Promise.all(s).then(()=>t):t}});function gr(e,r,t,o){e.issues.length&&r.issues.push(...yo(t,e.issues)),e.value===void 0?t in o&&(r.value[t]=void 0):r.value[t]=e.value}function Zo(e){const r=Object.keys(e.shape);for(const o of r)if(!e.shape?.[o]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${o}": expected a Zod schema`);const t=Vn(e.shape);return{...e,keys:r,keySet:new Set(r),numKeys:r.length,optionalKeys:new Set(t)}}function $o(e,r,t,o,n,s){const a=[],l=n.keySet,p=n.catchall._zod,f=p.def.type;for(const g of Object.keys(r)){if(l.has(g))continue;if(f==="never"){a.push(g);continue}const w=p.run({value:r[g],issues:[]},o);w instanceof Promise?e.push(w.then(_=>gr(_,t,g,r))):gr(w,t,g,r)}return a.length&&t.issues.push({code:"unrecognized_keys",keys:a,input:r,inst:s}),e.length?Promise.all(e).then(()=>t):t}const yi=m("$ZodObject",(e,r)=>{if(q.init(e,r),!Object.getOwnPropertyDescriptor(r,"shape")?.get){const l=r.shape;Object.defineProperty(r,"shape",{get:()=>{const p={...l};return Object.defineProperty(r,"shape",{value:p}),p}})}const o=Xr(()=>Zo(r));M(e._zod,"propValues",()=>{const l=r.shape,p={};for(const f in l){const g=l[f]._zod;if(g.values){p[f]??(p[f]=new Set);for(const w of g.values)p[f].add(w)}}return p});const n=vr,s=r.catchall;let a;e._zod.parse=(l,p)=>{a??(a=o.value);const f=l.value;if(!n(f))return l.issues.push({expected:"object",code:"invalid_type",input:f,inst:e}),l;l.value={};const g=[],w=a.shape;for(const _ of a.keys){const O=w[_]._zod.run({value:f[_],issues:[]},p);O instanceof Promise?g.push(O.then(E=>gr(E,l,_,f))):gr(O,l,_,f)}return s?$o(g,f,l,p,o.value,e):g.length?Promise.all(g).then(()=>l):l}}),Fi=m("$ZodObjectJIT",(e,r)=>{yi.init(e,r);const t=e._zod.parse,o=Xr(()=>Zo(r)),n=_=>{const Z=new Us(["shape","payload","ctx"]),O=o.value,E=N=>{const L=Vt(N);return`shape[${L}]._zod.run({ value: input[${L}], issues: [] }, ctx)`};Z.write("const input = payload.value;");const ee=Object.create(null);let ye=0;for(const N of O.keys)ee[N]=`key_${ye++}`;Z.write("const newResult = {};");for(const N of O.keys){const L=ee[N],$=Vt(N);Z.write(`const ${L} = ${E(N)};`),Z.write(`
        if (${L}.issues.length) {
          payload.issues = payload.issues.concat(${L}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        
        if (${L}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${L}.value;
        }
        
      `)}Z.write("payload.value = newResult;"),Z.write("return payload;");const k=Z.compile();return(N,L)=>k(_,N,L)};let s;const a=vr,l=!bo.jitless,f=l&&An.value,g=r.catchall;let w;e._zod.parse=(_,Z)=>{w??(w=o.value);const O=_.value;return a(O)?l&&f&&Z?.async===!1&&Z.jitless!==!0?(s||(s=n(r.shape)),_=s(_,Z),g?$o([],O,_,Z,w,e):_):t(_,Z):(_.issues.push({expected:"object",code:"invalid_type",input:O,inst:e}),_)}});function Tt(e,r,t,o){for(const s of e)if(s.issues.length===0)return r.value=s.value,r;const n=e.filter(s=>!De(s));return n.length===1?(r.value=n[0].value,n[0]):(r.issues.push({code:"invalid_union",input:r.value,inst:t,errors:e.map(s=>s.issues.map(a=>Ie(a,o,Ce())))}),r)}const wi=m("$ZodUnion",(e,r)=>{q.init(e,r),M(e._zod,"optin",()=>r.options.some(n=>n._zod.optin==="optional")?"optional":void 0),M(e._zod,"optout",()=>r.options.some(n=>n._zod.optout==="optional")?"optional":void 0),M(e._zod,"values",()=>{if(r.options.every(n=>n._zod.values))return new Set(r.options.flatMap(n=>Array.from(n._zod.values)))}),M(e._zod,"pattern",()=>{if(r.options.every(n=>n._zod.pattern)){const n=r.options.map(s=>s._zod.pattern);return new RegExp(`^(${n.map(s=>et(s.source)).join("|")})$`)}});const t=r.options.length===1,o=r.options[0]._zod.run;e._zod.parse=(n,s)=>{if(t)return o(n,s);let a=!1;const l=[];for(const p of r.options){const f=p._zod.run({value:n.value,issues:[]},s);if(f instanceof Promise)l.push(f),a=!0;else{if(f.issues.length===0)return f;l.push(f)}}return a?Promise.all(l).then(p=>Tt(p,n,e,s)):Tt(l,n,e,s)}}),ji=m("$ZodIntersection",(e,r)=>{q.init(e,r),e._zod.parse=(t,o)=>{const n=t.value,s=r.left._zod.run({value:n,issues:[]},o),a=r.right._zod.run({value:n,issues:[]},o);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([p,f])=>Ot(t,p,f)):Ot(t,s,a)}});function Rr(e,r){if(e===r)return{valid:!0,data:e};if(e instanceof Date&&r instanceof Date&&+e==+r)return{valid:!0,data:e};if(He(e)&&He(r)){const t=Object.keys(r),o=Object.keys(e).filter(s=>t.indexOf(s)!==-1),n={...e,...r};for(const s of o){const a=Rr(e[s],r[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};n[s]=a.data}return{valid:!0,data:n}}if(Array.isArray(e)&&Array.isArray(r)){if(e.length!==r.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let o=0;o<e.length;o++){const n=e[o],s=r[o],a=Rr(n,s);if(!a.valid)return{valid:!1,mergeErrorPath:[o,...a.mergeErrorPath]};t.push(a.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function Ot(e,r,t){if(r.issues.length&&e.issues.push(...r.issues),t.issues.length&&e.issues.push(...t.issues),De(e))return e;const o=Rr(r.value,t.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}const ki=m("$ZodEnum",(e,r)=>{q.init(e,r);const t=Zn(r.entries),o=new Set(t);e._zod.values=o,e._zod.pattern=new RegExp(`^(${t.filter(n=>En.has(typeof n)).map(n=>typeof n=="string"?Te(n):n.toString()).join("|")})$`),e._zod.parse=(n,s)=>{const a=n.value;return o.has(a)||n.issues.push({code:"invalid_value",values:t,input:a,inst:e}),n}}),Ni=m("$ZodLiteral",(e,r)=>{if(q.init(e,r),r.values.length===0)throw new Error("Cannot create literal schema with no valid values");e._zod.values=new Set(r.values),e._zod.pattern=new RegExp(`^(${r.values.map(t=>typeof t=="string"?Te(t):t?Te(t.toString()):String(t)).join("|")})$`),e._zod.parse=(t,o)=>{const n=t.value;return e._zod.values.has(n)||t.issues.push({code:"invalid_value",values:r.values,input:n,inst:e}),t}}),zi=m("$ZodTransform",(e,r)=>{q.init(e,r),e._zod.parse=(t,o)=>{if(o.direction==="backward")throw new go(e.constructor.name);const n=r.transform(t.value,t);if(o.async)return(n instanceof Promise?n:Promise.resolve(n)).then(a=>(t.value=a,t));if(n instanceof Promise)throw new Le;return t.value=n,t}});function Pt(e,r){return e.issues.length&&r===void 0?{issues:[],value:void 0}:e}const Ci=m("$ZodOptional",(e,r)=>{q.init(e,r),e._zod.optin="optional",e._zod.optout="optional",M(e._zod,"values",()=>r.innerType._zod.values?new Set([...r.innerType._zod.values,void 0]):void 0),M(e._zod,"pattern",()=>{const t=r.innerType._zod.pattern;return t?new RegExp(`^(${et(t.source)})?$`):void 0}),e._zod.parse=(t,o)=>{if(r.innerType._zod.optin==="optional"){const n=r.innerType._zod.run(t,o);return n instanceof Promise?n.then(s=>Pt(s,t.value)):Pt(n,t.value)}return t.value===void 0?t:r.innerType._zod.run(t,o)}}),Ii=m("$ZodNullable",(e,r)=>{q.init(e,r),M(e._zod,"optin",()=>r.innerType._zod.optin),M(e._zod,"optout",()=>r.innerType._zod.optout),M(e._zod,"pattern",()=>{const t=r.innerType._zod.pattern;return t?new RegExp(`^(${et(t.source)}|null)$`):void 0}),M(e._zod,"values",()=>r.innerType._zod.values?new Set([...r.innerType._zod.values,null]):void 0),e._zod.parse=(t,o)=>t.value===null?t:r.innerType._zod.run(t,o)}),Si=m("$ZodDefault",(e,r)=>{q.init(e,r),e._zod.optin="optional",M(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(t,o)=>{if(o.direction==="backward")return r.innerType._zod.run(t,o);if(t.value===void 0)return t.value=r.defaultValue,t;const n=r.innerType._zod.run(t,o);return n instanceof Promise?n.then(s=>Rt(s,r)):Rt(n,r)}});function Rt(e,r){return e.value===void 0&&(e.value=r.defaultValue),e}const Zi=m("$ZodPrefault",(e,r)=>{q.init(e,r),e._zod.optin="optional",M(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(t,o)=>(o.direction==="backward"||t.value===void 0&&(t.value=r.defaultValue),r.innerType._zod.run(t,o))}),$i=m("$ZodNonOptional",(e,r)=>{q.init(e,r),M(e._zod,"values",()=>{const t=r.innerType._zod.values;return t?new Set([...t].filter(o=>o!==void 0)):void 0}),e._zod.parse=(t,o)=>{const n=r.innerType._zod.run(t,o);return n instanceof Promise?n.then(s=>Mt(s,e)):Mt(n,e)}});function Mt(e,r){return!e.issues.length&&e.value===void 0&&e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:r}),e}const Ai=m("$ZodCatch",(e,r)=>{q.init(e,r),M(e._zod,"optin",()=>r.innerType._zod.optin),M(e._zod,"optout",()=>r.innerType._zod.optout),M(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(t,o)=>{if(o.direction==="backward")return r.innerType._zod.run(t,o);const n=r.innerType._zod.run(t,o);return n instanceof Promise?n.then(s=>(t.value=s.value,s.issues.length&&(t.value=r.catchValue({...t,error:{issues:s.issues.map(a=>Ie(a,o,Ce()))},input:t.value}),t.issues=[]),t)):(t.value=n.value,n.issues.length&&(t.value=r.catchValue({...t,error:{issues:n.issues.map(s=>Ie(s,o,Ce()))},input:t.value}),t.issues=[]),t)}}),Ei=m("$ZodPipe",(e,r)=>{q.init(e,r),M(e._zod,"values",()=>r.in._zod.values),M(e._zod,"optin",()=>r.in._zod.optin),M(e._zod,"optout",()=>r.out._zod.optout),M(e._zod,"propValues",()=>r.in._zod.propValues),e._zod.parse=(t,o)=>{if(o.direction==="backward"){const s=r.out._zod.run(t,o);return s instanceof Promise?s.then(a=>nr(a,r.in,o)):nr(s,r.in,o)}const n=r.in._zod.run(t,o);return n instanceof Promise?n.then(s=>nr(s,r.out,o)):nr(n,r.out,o)}});function nr(e,r,t){return e.issues.length?(e.aborted=!0,e):r._zod.run({value:e.value,issues:e.issues},t)}const Vi=m("$ZodReadonly",(e,r)=>{q.init(e,r),M(e._zod,"propValues",()=>r.innerType._zod.propValues),M(e._zod,"values",()=>r.innerType._zod.values),M(e._zod,"optin",()=>r.innerType._zod.optin),M(e._zod,"optout",()=>r.innerType._zod.optout),e._zod.parse=(t,o)=>{if(o.direction==="backward")return r.innerType._zod.run(t,o);const n=r.innerType._zod.run(t,o);return n instanceof Promise?n.then(Ut):Ut(n)}});function Ut(e){return e.value=Object.freeze(e.value),e}const Di=m("$ZodCustom",(e,r)=>{se.init(e,r),q.init(e,r),e._zod.parse=(t,o)=>t,e._zod.check=t=>{const o=t.value,n=r.fn(o);if(n instanceof Promise)return n.then(s=>Bt(s,t,o,e));Bt(n,t,o,e)}});function Bt(e,r,t,o){if(!e){const n={code:"custom",input:t,inst:o,path:[...o._zod.def.path??[]],continue:!o._zod.def.abort};o._zod.def.params&&(n.params=o._zod.def.params),r.issues.push(Ye(n))}}class Li{constructor(){this._map=new WeakMap,this._idmap=new Map}add(r,...t){const o=t[0];if(this._map.set(r,o),o&&typeof o=="object"&&"id"in o){if(this._idmap.has(o.id))throw new Error(`ID ${o.id} already exists in the registry`);this._idmap.set(o.id,r)}return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(r){const t=this._map.get(r);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(r),this}get(r){const t=r._zod.parent;if(t){const o={...this.get(t)??{}};delete o.id;const n={...o,...this._map.get(r)};return Object.keys(n).length?n:void 0}return this._map.get(r)}has(r){return this._map.has(r)}}function Ti(){return new Li}const sr=Ti();function Oi(e,r){return new e({type:"string",...y(r)})}function Pi(e,r){return new e({type:"string",format:"email",check:"string_format",abort:!1,...y(r)})}function Wt(e,r){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...y(r)})}function Ri(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...y(r)})}function Mi(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...y(r)})}function Ui(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...y(r)})}function Bi(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...y(r)})}function Wi(e,r){return new e({type:"string",format:"url",check:"string_format",abort:!1,...y(r)})}function qi(e,r){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...y(r)})}function Gi(e,r){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...y(r)})}function Hi(e,r){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...y(r)})}function Yi(e,r){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...y(r)})}function Ji(e,r){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...y(r)})}function Ki(e,r){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...y(r)})}function Xi(e,r){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...y(r)})}function Qi(e,r){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...y(r)})}function ea(e,r){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...y(r)})}function ra(e,r){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...y(r)})}function ta(e,r){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...y(r)})}function oa(e,r){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...y(r)})}function na(e,r){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...y(r)})}function sa(e,r){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...y(r)})}function ia(e,r){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...y(r)})}function aa(e,r){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...y(r)})}function ca(e,r){return new e({type:"string",format:"date",check:"string_format",...y(r)})}function la(e,r){return new e({type:"string",format:"time",check:"string_format",precision:null,...y(r)})}function ua(e,r){return new e({type:"string",format:"duration",check:"string_format",...y(r)})}function da(e,r){return new e({type:"number",checks:[],...y(r)})}function ma(e,r){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...y(r)})}function fa(e,r){return new e({type:"boolean",...y(r)})}function ha(e){return new e({type:"unknown"})}function pa(e,r){return new e({type:"never",...y(r)})}function qt(e,r){return new zo({check:"less_than",...y(r),value:e,inclusive:!1})}function Vr(e,r){return new zo({check:"less_than",...y(r),value:e,inclusive:!0})}function Gt(e,r){return new Co({check:"greater_than",...y(r),value:e,inclusive:!1})}function Dr(e,r){return new Co({check:"greater_than",...y(r),value:e,inclusive:!0})}function Ht(e,r){return new Zs({check:"multiple_of",...y(r),value:e})}function Ao(e,r){return new As({check:"max_length",...y(r),maximum:e})}function br(e,r){return new Es({check:"min_length",...y(r),minimum:e})}function Eo(e,r){return new Vs({check:"length_equals",...y(r),length:e})}function va(e,r){return new Ds({check:"string_format",format:"regex",...y(r),pattern:e})}function ga(e){return new Ls({check:"string_format",format:"lowercase",...y(e)})}function ba(e){return new Ts({check:"string_format",format:"uppercase",...y(e)})}function xa(e,r){return new Os({check:"string_format",format:"includes",...y(r),includes:e})}function _a(e,r){return new Ps({check:"string_format",format:"starts_with",...y(r),prefix:e})}function ya(e,r){return new Rs({check:"string_format",format:"ends_with",...y(r),suffix:e})}function Xe(e){return new Ms({check:"overwrite",tx:e})}function Fa(e){return Xe(r=>r.normalize(e))}function wa(){return Xe(e=>e.trim())}function ja(){return Xe(e=>e.toLowerCase())}function ka(){return Xe(e=>e.toUpperCase())}function Na(e,r,t){return new e({type:"array",element:r,...y(t)})}function za(e,r,t){return new e({type:"custom",check:"custom",fn:r,...y(t)})}function Ca(e){const r=Ia(t=>(t.addIssue=o=>{if(typeof o=="string")t.issues.push(Ye(o,t.value,r._zod.def));else{const n=o;n.fatal&&(n.continue=!1),n.code??(n.code="custom"),n.input??(n.input=t.value),n.inst??(n.inst=r),n.continue??(n.continue=!r._zod.def.abort),t.issues.push(Ye(n))}},e(t.value,t)));return r}function Ia(e,r){const t=new se({check:"custom",...y(r)});return t._zod.check=e,t}function Yt(e,r){try{var t=e()}catch(o){return r(o)}return t&&t.then?t.then(void 0,r):t}function Sa(e,r){for(var t={};e.length;){var o=e[0],n=o.code,s=o.message,a=o.path.join(".");if(!t[a])if("unionErrors"in o){var l=o.unionErrors[0].errors[0];t[a]={message:l.message,type:l.code}}else t[a]={message:s,type:n};if("unionErrors"in o&&o.unionErrors.forEach(function(g){return g.errors.forEach(function(w){return e.push(w)})}),r){var p=t[a].types,f=p&&p[o.code];t[a]=Yr(a,r,t,n,f?[].concat(f,o.message):o.message)}e.shift()}return t}function Za(e,r){for(var t={};e.length;){var o=e[0],n=o.code,s=o.message,a=o.path.join(".");if(!t[a])if(o.code==="invalid_union"&&o.errors.length>0){var l=o.errors[0][0];t[a]={message:l.message,type:l.code}}else t[a]={message:s,type:n};if(o.code==="invalid_union"&&o.errors.forEach(function(g){return g.forEach(function(w){return e.push(w)})}),r){var p=t[a].types,f=p&&p[o.code];t[a]=Yr(a,r,t,n,f?[].concat(f,o.message):o.message)}e.shift()}return t}function Qe(e,r,t){if(t===void 0&&(t={}),(function(o){return"_def"in o&&typeof o._def=="object"&&"typeName"in o._def})(e))return function(o,n,s){try{return Promise.resolve(Yt(function(){return Promise.resolve(e[t.mode==="sync"?"parse":"parseAsync"](o,r)).then(function(a){return s.shouldUseNativeValidation&&Or({},s),{errors:{},values:t.raw?Object.assign({},o):a}})},function(a){if((function(l){return Array.isArray(l?.issues)})(a))return{values:{},errors:$t(Sa(a.errors,!s.shouldUseNativeValidation&&s.criteriaMode==="all"),s)};throw a}))}catch(a){return Promise.reject(a)}};if((function(o){return"_zod"in o&&typeof o._zod=="object"})(e))return function(o,n,s){try{return Promise.resolve(Yt(function(){return Promise.resolve((t.mode==="sync"?qn:Gn)(e,o,r)).then(function(a){return s.shouldUseNativeValidation&&Or({},s),{errors:{},values:t.raw?Object.assign({},o):a}})},function(a){if((function(l){return l instanceof tt})(a))return{values:{},errors:$t(Za(a.issues,!s.shouldUseNativeValidation&&s.criteriaMode==="all"),s)};throw a}))}catch(a){return Promise.reject(a)}};throw new Error("Invalid input: not a Zod schema")}const $a=m("ZodISODateTime",(e,r)=>{ti.init(e,r),W.init(e,r)});function Aa(e){return aa($a,e)}const Ea=m("ZodISODate",(e,r)=>{oi.init(e,r),W.init(e,r)});function Va(e){return ca(Ea,e)}const Da=m("ZodISOTime",(e,r)=>{ni.init(e,r),W.init(e,r)});function La(e){return la(Da,e)}const Ta=m("ZodISODuration",(e,r)=>{si.init(e,r),W.init(e,r)});function Oa(e){return ua(Ta,e)}const Pa=(e,r)=>{tt.init(e,r),e.name="ZodError",Object.defineProperties(e,{format:{value:t=>Wn(e,t)},flatten:{value:t=>Bn(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,Pr,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,Pr,2)}},isEmpty:{get(){return e.issues.length===0}}})},ue=m("ZodError",Pa,{Parent:Error}),Ra=wr(ue),Ma=jr(ue),Ua=kr(ue),Ba=Nr(ue),Wa=Jn(ue),qa=Kn(ue),Ga=Xn(ue),Ha=Qn(ue),Ya=es(ue),Ja=rs(ue),Ka=ts(ue),Xa=os(ue),Y=m("ZodType",(e,r)=>(q.init(e,r),e.def=r,e.type=r.type,Object.defineProperty(e,"_def",{value:r}),e.check=(...t)=>e.clone(Ze(r,{checks:[...r.checks??[],...t.map(o=>typeof o=="function"?{_zod:{check:o,def:{check:"custom"},onattach:[]}}:o)]})),e.clone=(t,o)=>je(e,t,o),e.brand=()=>e,e.register=((t,o)=>(t.add(e,o),e)),e.parse=(t,o)=>Ra(e,t,o,{callee:e.parse}),e.safeParse=(t,o)=>Ua(e,t,o),e.parseAsync=async(t,o)=>Ma(e,t,o,{callee:e.parseAsync}),e.safeParseAsync=async(t,o)=>Ba(e,t,o),e.spa=e.safeParseAsync,e.encode=(t,o)=>Wa(e,t,o),e.decode=(t,o)=>qa(e,t,o),e.encodeAsync=async(t,o)=>Ga(e,t,o),e.decodeAsync=async(t,o)=>Ha(e,t,o),e.safeEncode=(t,o)=>Ya(e,t,o),e.safeDecode=(t,o)=>Ja(e,t,o),e.safeEncodeAsync=async(t,o)=>Ka(e,t,o),e.safeDecodeAsync=async(t,o)=>Xa(e,t,o),e.refine=(t,o)=>e.check(qc(t,o)),e.superRefine=t=>e.check(Gc(t)),e.overwrite=t=>e.check(Xe(t)),e.optional=()=>Qt(e),e.nullable=()=>eo(e),e.nullish=()=>Qt(eo(e)),e.nonoptional=t=>Oc(e,t),e.array=()=>Lo(e),e.or=t=>Nc([e,t]),e.and=t=>Cc(e,t),e.transform=t=>ro(e,Ac(t)),e.default=t=>Dc(e,t),e.prefault=t=>Tc(e,t),e.catch=t=>Rc(e,t),e.pipe=t=>ro(e,t),e.readonly=()=>Bc(e),e.describe=t=>{const o=e.clone();return sr.add(o,{description:t}),o},Object.defineProperty(e,"description",{get(){return sr.get(e)?.description},configurable:!0}),e.meta=(...t)=>{if(t.length===0)return sr.get(e);const o=e.clone();return sr.add(o,t[0]),o},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e)),Vo=m("_ZodString",(e,r)=>{ot.init(e,r),Y.init(e,r);const t=e._zod.bag;e.format=t.format??null,e.minLength=t.minimum??null,e.maxLength=t.maximum??null,e.regex=(...o)=>e.check(va(...o)),e.includes=(...o)=>e.check(xa(...o)),e.startsWith=(...o)=>e.check(_a(...o)),e.endsWith=(...o)=>e.check(ya(...o)),e.min=(...o)=>e.check(br(...o)),e.max=(...o)=>e.check(Ao(...o)),e.length=(...o)=>e.check(Eo(...o)),e.nonempty=(...o)=>e.check(br(1,...o)),e.lowercase=o=>e.check(ga(o)),e.uppercase=o=>e.check(ba(o)),e.trim=()=>e.check(wa()),e.normalize=(...o)=>e.check(Fa(...o)),e.toLowerCase=()=>e.check(ja()),e.toUpperCase=()=>e.check(ka())}),Qa=m("ZodString",(e,r)=>{ot.init(e,r),Vo.init(e,r),e.email=t=>e.check(Pi(ec,t)),e.url=t=>e.check(Wi(rc,t)),e.jwt=t=>e.check(ia(vc,t)),e.emoji=t=>e.check(qi(tc,t)),e.guid=t=>e.check(Wt(Jt,t)),e.uuid=t=>e.check(Ri(ir,t)),e.uuidv4=t=>e.check(Mi(ir,t)),e.uuidv6=t=>e.check(Ui(ir,t)),e.uuidv7=t=>e.check(Bi(ir,t)),e.nanoid=t=>e.check(Gi(oc,t)),e.guid=t=>e.check(Wt(Jt,t)),e.cuid=t=>e.check(Hi(nc,t)),e.cuid2=t=>e.check(Yi(sc,t)),e.ulid=t=>e.check(Ji(ic,t)),e.base64=t=>e.check(oa(fc,t)),e.base64url=t=>e.check(na(hc,t)),e.xid=t=>e.check(Ki(ac,t)),e.ksuid=t=>e.check(Xi(cc,t)),e.ipv4=t=>e.check(Qi(lc,t)),e.ipv6=t=>e.check(ea(uc,t)),e.cidrv4=t=>e.check(ra(dc,t)),e.cidrv6=t=>e.check(ta(mc,t)),e.e164=t=>e.check(sa(pc,t)),e.datetime=t=>e.check(Aa(t)),e.date=t=>e.check(Va(t)),e.time=t=>e.check(La(t)),e.duration=t=>e.check(Oa(t))});function B(e){return Oi(Qa,e)}const W=m("ZodStringFormat",(e,r)=>{U.init(e,r),Vo.init(e,r)}),ec=m("ZodEmail",(e,r)=>{Gs.init(e,r),W.init(e,r)}),Jt=m("ZodGUID",(e,r)=>{Ws.init(e,r),W.init(e,r)}),ir=m("ZodUUID",(e,r)=>{qs.init(e,r),W.init(e,r)}),rc=m("ZodURL",(e,r)=>{Hs.init(e,r),W.init(e,r)}),tc=m("ZodEmoji",(e,r)=>{Ys.init(e,r),W.init(e,r)}),oc=m("ZodNanoID",(e,r)=>{Js.init(e,r),W.init(e,r)}),nc=m("ZodCUID",(e,r)=>{Ks.init(e,r),W.init(e,r)}),sc=m("ZodCUID2",(e,r)=>{Xs.init(e,r),W.init(e,r)}),ic=m("ZodULID",(e,r)=>{Qs.init(e,r),W.init(e,r)}),ac=m("ZodXID",(e,r)=>{ei.init(e,r),W.init(e,r)}),cc=m("ZodKSUID",(e,r)=>{ri.init(e,r),W.init(e,r)}),lc=m("ZodIPv4",(e,r)=>{ii.init(e,r),W.init(e,r)}),uc=m("ZodIPv6",(e,r)=>{ai.init(e,r),W.init(e,r)}),dc=m("ZodCIDRv4",(e,r)=>{ci.init(e,r),W.init(e,r)}),mc=m("ZodCIDRv6",(e,r)=>{li.init(e,r),W.init(e,r)}),fc=m("ZodBase64",(e,r)=>{ui.init(e,r),W.init(e,r)}),hc=m("ZodBase64URL",(e,r)=>{mi.init(e,r),W.init(e,r)}),pc=m("ZodE164",(e,r)=>{fi.init(e,r),W.init(e,r)}),vc=m("ZodJWT",(e,r)=>{pi.init(e,r),W.init(e,r)}),Do=m("ZodNumber",(e,r)=>{So.init(e,r),Y.init(e,r),e.gt=(o,n)=>e.check(Gt(o,n)),e.gte=(o,n)=>e.check(Dr(o,n)),e.min=(o,n)=>e.check(Dr(o,n)),e.lt=(o,n)=>e.check(qt(o,n)),e.lte=(o,n)=>e.check(Vr(o,n)),e.max=(o,n)=>e.check(Vr(o,n)),e.int=o=>e.check(Kt(o)),e.safe=o=>e.check(Kt(o)),e.positive=o=>e.check(Gt(0,o)),e.nonnegative=o=>e.check(Dr(0,o)),e.negative=o=>e.check(qt(0,o)),e.nonpositive=o=>e.check(Vr(0,o)),e.multipleOf=(o,n)=>e.check(Ht(o,n)),e.step=(o,n)=>e.check(Ht(o,n)),e.finite=()=>e;const t=e._zod.bag;e.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),e.isFinite=!0,e.format=t.format??null});function gc(e){return da(Do,e)}const bc=m("ZodNumberFormat",(e,r)=>{vi.init(e,r),Do.init(e,r)});function Kt(e){return ma(bc,e)}const xc=m("ZodBoolean",(e,r)=>{gi.init(e,r),Y.init(e,r)});function Je(e){return fa(xc,e)}const _c=m("ZodUnknown",(e,r)=>{bi.init(e,r),Y.init(e,r)});function Xt(){return ha(_c)}const yc=m("ZodNever",(e,r)=>{xi.init(e,r),Y.init(e,r)});function Fc(e){return pa(yc,e)}const wc=m("ZodArray",(e,r)=>{_i.init(e,r),Y.init(e,r),e.element=r.element,e.min=(t,o)=>e.check(br(t,o)),e.nonempty=t=>e.check(br(1,t)),e.max=(t,o)=>e.check(Ao(t,o)),e.length=(t,o)=>e.check(Eo(t,o)),e.unwrap=()=>e.element});function Lo(e,r){return Na(wc,e,r)}const jc=m("ZodObject",(e,r)=>{Fi.init(e,r),Y.init(e,r),M(e,"shape",()=>r.shape),e.keyof=()=>Ic(Object.keys(e._zod.def.shape)),e.catchall=t=>e.clone({...e._zod.def,catchall:t}),e.passthrough=()=>e.clone({...e._zod.def,catchall:Xt()}),e.loose=()=>e.clone({...e._zod.def,catchall:Xt()}),e.strict=()=>e.clone({...e._zod.def,catchall:Fc()}),e.strip=()=>e.clone({...e._zod.def,catchall:void 0}),e.extend=t=>On(e,t),e.safeExtend=t=>Pn(e,t),e.merge=t=>Rn(e,t),e.pick=t=>Ln(e,t),e.omit=t=>Tn(e,t),e.partial=(...t)=>Mn(To,e,t[0]),e.required=(...t)=>Un(Oo,e,t[0])});function er(e,r){const t={type:"object",shape:e??{},...y(r)};return new jc(t)}const kc=m("ZodUnion",(e,r)=>{wi.init(e,r),Y.init(e,r),e.options=r.options});function Nc(e,r){return new kc({type:"union",options:e,...y(r)})}const zc=m("ZodIntersection",(e,r)=>{ji.init(e,r),Y.init(e,r)});function Cc(e,r){return new zc({type:"intersection",left:e,right:r})}const Mr=m("ZodEnum",(e,r)=>{ki.init(e,r),Y.init(e,r),e.enum=r.entries,e.options=Object.values(r.entries);const t=new Set(Object.keys(r.entries));e.extract=(o,n)=>{const s={};for(const a of o)if(t.has(a))s[a]=r.entries[a];else throw new Error(`Key ${a} not found in enum`);return new Mr({...r,checks:[],...y(n),entries:s})},e.exclude=(o,n)=>{const s={...r.entries};for(const a of o)if(t.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new Mr({...r,checks:[],...y(n),entries:s})}});function Ic(e,r){const t=Array.isArray(e)?Object.fromEntries(e.map(o=>[o,o])):e;return new Mr({type:"enum",entries:t,...y(r)})}const Sc=m("ZodLiteral",(e,r)=>{Ni.init(e,r),Y.init(e,r),e.values=new Set(r.values),Object.defineProperty(e,"value",{get(){if(r.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return r.values[0]}})});function Zc(e,r){return new Sc({type:"literal",values:Array.isArray(e)?e:[e],...y(r)})}const $c=m("ZodTransform",(e,r)=>{zi.init(e,r),Y.init(e,r),e._zod.parse=(t,o)=>{if(o.direction==="backward")throw new go(e.constructor.name);t.addIssue=s=>{if(typeof s=="string")t.issues.push(Ye(s,t.value,r));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=t.value),a.inst??(a.inst=e),t.issues.push(Ye(a))}};const n=r.transform(t.value,t);return n instanceof Promise?n.then(s=>(t.value=s,t)):(t.value=n,t)}});function Ac(e){return new $c({type:"transform",transform:e})}const To=m("ZodOptional",(e,r)=>{Ci.init(e,r),Y.init(e,r),e.unwrap=()=>e._zod.def.innerType});function Qt(e){return new To({type:"optional",innerType:e})}const Ec=m("ZodNullable",(e,r)=>{Ii.init(e,r),Y.init(e,r),e.unwrap=()=>e._zod.def.innerType});function eo(e){return new Ec({type:"nullable",innerType:e})}const Vc=m("ZodDefault",(e,r)=>{Si.init(e,r),Y.init(e,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function Dc(e,r){return new Vc({type:"default",innerType:e,get defaultValue(){return typeof r=="function"?r():_o(r)}})}const Lc=m("ZodPrefault",(e,r)=>{Zi.init(e,r),Y.init(e,r),e.unwrap=()=>e._zod.def.innerType});function Tc(e,r){return new Lc({type:"prefault",innerType:e,get defaultValue(){return typeof r=="function"?r():_o(r)}})}const Oo=m("ZodNonOptional",(e,r)=>{$i.init(e,r),Y.init(e,r),e.unwrap=()=>e._zod.def.innerType});function Oc(e,r){return new Oo({type:"nonoptional",innerType:e,...y(r)})}const Pc=m("ZodCatch",(e,r)=>{Ai.init(e,r),Y.init(e,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function Rc(e,r){return new Pc({type:"catch",innerType:e,catchValue:typeof r=="function"?r:()=>r})}const Mc=m("ZodPipe",(e,r)=>{Ei.init(e,r),Y.init(e,r),e.in=r.in,e.out=r.out});function ro(e,r){return new Mc({type:"pipe",in:e,out:r})}const Uc=m("ZodReadonly",(e,r)=>{Vi.init(e,r),Y.init(e,r),e.unwrap=()=>e._zod.def.innerType});function Bc(e){return new Uc({type:"readonly",innerType:e})}const Wc=m("ZodCustom",(e,r)=>{Di.init(e,r),Y.init(e,r)});function qc(e,r={}){return za(Wc,e,r)}function Gc(e){return Ca(e)}const $e=mn,Po=qe.createContext({}),C=({...e})=>i.jsx(Po.Provider,{value:{name:e.name},children:i.jsx(pn,{...e})}),Cr=()=>{const e=qe.useContext(Po),r=qe.useContext(Ro),{getFieldState:t}=yr(),o=co({name:e.name}),n=t(e.name,o);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:s}=r;return{id:s,name:e.name,formItemId:`${s}-form-item`,formDescriptionId:`${s}-form-item-description`,formMessageId:`${s}-form-item-message`,...n}},Ro=qe.createContext({});function I({className:e,...r}){const t=qe.useId();return i.jsx(Ro.Provider,{value:{id:t},children:i.jsx("div",{"data-slot":"form-item",className:xr("grid gap-2",e),...r})})}function S({className:e,...r}){const{error:t,formItemId:o}=Cr();return i.jsx(xe,{"data-slot":"form-label","data-error":!!t,className:xr("data-[error=true]:text-destructive",e),htmlFor:o,...r})}function A({...e}){const{error:r,formItemId:t,formDescriptionId:o,formMessageId:n}=Cr();return i.jsx(Xo,{"data-slot":"form-control",id:t,"aria-describedby":r?`${o} ${n}`:`${o}`,"aria-invalid":!!r,...e})}function le({className:e,...r}){const{formDescriptionId:t}=Cr();return i.jsx("p",{"data-slot":"form-description",id:t,className:xr("text-muted-foreground text-sm",e),...r})}function R({className:e,...r}){const{error:t,formMessageId:o}=Cr(),n=t?String(t?.message??""):r.children;return n?i.jsx("p",{"data-slot":"form-message",id:o,className:xr("text-destructive text-sm",e),...r,children:n}):null}I.__docgenInfo={description:"",methods:[],displayName:"FormItem"};S.__docgenInfo={description:"",methods:[],displayName:"FormLabel"};A.__docgenInfo={description:"",methods:[],displayName:"FormControl"};le.__docgenInfo={description:"",methods:[],displayName:"FormDescription"};R.__docgenInfo={description:"",methods:[],displayName:"FormMessage"};C.__docgenInfo={description:"",methods:[],displayName:"FormField"};const ql={title:"UI/Forms/Form",component:$e,parameters:{layout:"centered",docs:{description:{component:"React Hook Form과 Zod를 사용한 폼 컴포넌트입니다. 유효성 검사, 오류 처리, 다양한 입력 필드를 지원합니다."}}},tags:["autodocs"],argTypes:{}},Hc=er({name:B().min(2,{message:"이름은 최소 2자 이상이어야 합니다."}),email:B().email({message:"올바른 이메일 주소를 입력해주세요."}),message:B().min(10,{message:"메시지는 최소 10자 이상이어야 합니다."})}),ar={render:()=>{const e=Oe({resolver:Qe(Hc),defaultValues:{name:"",email:"",message:""}});function r(t){console.log(t),alert("폼이 성공적으로 제출되었습니다!")}return i.jsxs("div",{className:"w-full max-w-md space-y-4",children:[i.jsxs("div",{className:"text-center space-y-2",children:[i.jsx("h2",{className:"text-2xl font-bold",children:"연락처 폼"}),i.jsx("p",{className:"text-muted-foreground",children:"메시지를 남겨주세요"})]}),i.jsx($e,{...e,children:i.jsxs("form",{onSubmit:e.handleSubmit(r),className:"space-y-4",children:[i.jsx(C,{control:e.control,name:"name",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"이름"}),i.jsx(A,{children:i.jsx(K,{placeholder:"홍길동",...t})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"email",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"이메일"}),i.jsx(A,{children:i.jsx(K,{type:"email",placeholder:"hong@example.com",...t})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"message",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"메시지"}),i.jsx(A,{children:i.jsx(Ur,{placeholder:"메시지를 입력해주세요...",className:"resize-none",rows:4,...t})}),i.jsx(le,{children:"최소 10자 이상 입력해주세요."}),i.jsx(R,{})]})}),i.jsxs(we,{type:"submit",className:"w-full",children:[i.jsx(to,{className:"mr-2 h-4 w-4"}),"메시지 보내기"]})]})})]})}},Yc=er({username:B().min(3,{message:"사용자명은 최소 3자 이상이어야 합니다."}),email:B().email({message:"올바른 이메일 주소를 입력해주세요."}),password:B().min(8,{message:"비밀번호는 최소 8자 이상이어야 합니다."}),confirmPassword:B(),age:gc().min(18,{message:"18세 이상이어야 합니다."}).max(120),terms:Je().refine(e=>e===!0,{message:"이용약관에 동의해야 합니다."})}).refine(e=>e.password===e.confirmPassword,{message:"비밀번호가 일치하지 않습니다.",path:["confirmPassword"]}),cr={render:()=>{const e=Oe({resolver:Qe(Yc),defaultValues:{username:"",email:"",password:"",confirmPassword:"",age:18,terms:!1}});function r(t){console.log(t),alert("회원가입이 완료되었습니다!")}return i.jsxs("div",{className:"w-full max-w-md space-y-4",children:[i.jsxs("div",{className:"text-center space-y-2",children:[i.jsx("h2",{className:"text-2xl font-bold",children:"회원가입"}),i.jsx("p",{className:"text-muted-foreground",children:"새 계정을 생성하세요"})]}),i.jsx($e,{...e,children:i.jsxs("form",{onSubmit:e.handleSubmit(r),className:"space-y-4",children:[i.jsx(C,{control:e.control,name:"username",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"사용자명"}),i.jsx(A,{children:i.jsx(K,{placeholder:"username123",...t})}),i.jsx(le,{children:"다른 사용자들에게 표시될 이름입니다."}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"email",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"이메일"}),i.jsx(A,{children:i.jsx(K,{type:"email",placeholder:"user@example.com",...t})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"password",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"비밀번호"}),i.jsx(A,{children:i.jsx(K,{type:"password",placeholder:"********",...t})}),i.jsx(le,{children:"최소 8자 이상의 안전한 비밀번호를 사용하세요."}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"confirmPassword",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"비밀번호 확인"}),i.jsx(A,{children:i.jsx(K,{type:"password",placeholder:"********",...t})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"age",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"나이"}),i.jsx(A,{children:i.jsx(K,{type:"number",...t,onChange:o=>t.onChange(parseInt(o.target.value))})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"terms",render:({field:t})=>i.jsxs(I,{className:"flex flex-row items-start space-x-3 space-y-0",children:[i.jsx(A,{children:i.jsx(Ge,{checked:t.value,onCheckedChange:t.onChange})}),i.jsxs("div",{className:"space-y-1 leading-none",children:[i.jsx(S,{children:"이용약관 및 개인정보처리방침에 동의합니다."}),i.jsx(le,{children:"서비스 이용을 위해 동의가 필요합니다."}),i.jsx(R,{})]})]})}),i.jsxs(we,{type:"submit",className:"w-full",children:[i.jsx(oo,{className:"mr-2 h-4 w-4"}),"회원가입"]})]})})]})}},Jc=er({firstName:B().min(1,{message:"이름을 입력해주세요."}),lastName:B().min(1,{message:"성을 입력해주세요."}),bio:B().max(160).optional(),url:B().url().optional().or(Zc("")),location:B().optional(),notifications:Je(),marketing:Je()}),lr={render:()=>{const e=Oe({resolver:Qe(Jc),defaultValues:{firstName:"길동",lastName:"홍",bio:"안녕하세요! 저는 웹 개발자입니다.",url:"https://example.com",location:"서울, 대한민국",notifications:!0,marketing:!1}});function r(t){console.log(t),alert("프로필이 업데이트되었습니다!")}return i.jsxs("div",{className:"w-full max-w-2xl space-y-6",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx("h2",{className:"text-2xl font-bold",children:"프로필 설정"}),i.jsx("p",{className:"text-muted-foreground",children:"공개 프로필 정보를 관리하세요."})]}),i.jsx($e,{...e,children:i.jsxs("form",{onSubmit:e.handleSubmit(r),className:"space-y-6",children:[i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx(C,{control:e.control,name:"firstName",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"이름"}),i.jsx(A,{children:i.jsx(K,{placeholder:"길동",...t})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"lastName",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"성"}),i.jsx(A,{children:i.jsx(K,{placeholder:"홍",...t})}),i.jsx(R,{})]})})]}),i.jsx(C,{control:e.control,name:"bio",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"소개"}),i.jsx(A,{children:i.jsx(Ur,{placeholder:"자신을 소개해보세요...",className:"resize-none",...t})}),i.jsxs(le,{children:[t.value?.length||0,"/160"]}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"url",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"웹사이트"}),i.jsx(A,{children:i.jsx(K,{placeholder:"https://example.com",...t})}),i.jsx(le,{children:"개인 웹사이트나 포트폴리오 URL을 추가하세요."}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"location",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"위치"}),i.jsx(A,{children:i.jsx(K,{placeholder:"서울, 대한민국",...t})}),i.jsx(R,{})]})}),i.jsx(nn,{}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("h3",{className:"text-lg font-medium",children:"알림 설정"}),i.jsx(C,{control:e.control,name:"notifications",render:({field:t})=>i.jsxs(I,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[i.jsxs("div",{className:"space-y-0.5",children:[i.jsx(S,{className:"text-base",children:"이메일 알림"}),i.jsx(le,{children:"새로운 메시지와 업데이트에 대한 이메일을 받습니다."})]}),i.jsx(A,{children:i.jsx(ht,{checked:t.value,onCheckedChange:t.onChange})})]})}),i.jsx(C,{control:e.control,name:"marketing",render:({field:t})=>i.jsxs(I,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[i.jsxs("div",{className:"space-y-0.5",children:[i.jsx(S,{className:"text-base",children:"마케팅 이메일"}),i.jsx(le,{children:"제품 업데이트, 회사 소식 및 이벤트에 대한 이메일을 받습니다."})]}),i.jsx(A,{children:i.jsx(ht,{checked:t.value,onCheckedChange:t.onChange})})]})})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsxs(we,{type:"submit",children:[i.jsx(sn,{className:"mr-2 h-4 w-4"}),"저장하기"]}),i.jsx(we,{type:"button",variant:"outline",children:"취소"})]})]})})]})}},Kc=er({cardNumber:B().min(16,{message:"카드 번호를 정확히 입력해주세요."}),expiryDate:B().min(5,{message:"유효기간을 MM/YY 형식으로 입력해주세요."}),cvv:B().min(3,{message:"CVV는 3자리 숫자입니다."}),cardholderName:B().min(1,{message:"카드 소유자 이름을 입력해주세요."}),billingAddress:B().min(1,{message:"청구 주소를 입력해주세요."}),city:B().min(1,{message:"도시를 입력해주세요."}),postalCode:B().min(5,{message:"우편번호를 입력해주세요."}),saveCard:Je()}),ur={render:()=>{const e=Oe({resolver:Qe(Kc),defaultValues:{cardNumber:"",expiryDate:"",cvv:"",cardholderName:"",billingAddress:"",city:"",postalCode:"",saveCard:!1}});function r(t){console.log(t),alert("결제가 처리되었습니다!")}return i.jsxs("div",{className:"w-full max-w-lg space-y-6",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx("h2",{className:"text-2xl font-bold",children:"결제 정보"}),i.jsx("p",{className:"text-muted-foreground",children:"안전한 결제를 위해 정확한 정보를 입력해주세요."})]}),i.jsx($e,{...e,children:i.jsxs("form",{onSubmit:e.handleSubmit(r),className:"space-y-6",children:[i.jsxs(pt,{children:[i.jsx(vt,{children:i.jsxs(gt,{className:"flex items-center gap-2",children:[i.jsx(an,{className:"h-5 w-5"}),"카드 정보"]})}),i.jsxs(bt,{className:"space-y-4",children:[i.jsx(C,{control:e.control,name:"cardNumber",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"카드 번호"}),i.jsx(A,{children:i.jsx(K,{placeholder:"1234 5678 9012 3456",...t})}),i.jsx(R,{})]})}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx(C,{control:e.control,name:"expiryDate",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"유효기간"}),i.jsx(A,{children:i.jsx(K,{placeholder:"MM/YY",...t})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"cvv",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"CVV"}),i.jsx(A,{children:i.jsx(K,{placeholder:"123",...t})}),i.jsx(R,{})]})})]}),i.jsx(C,{control:e.control,name:"cardholderName",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"카드 소유자 이름"}),i.jsx(A,{children:i.jsx(K,{placeholder:"홍길동",...t})}),i.jsx(R,{})]})})]})]}),i.jsxs(pt,{children:[i.jsx(vt,{children:i.jsxs(gt,{className:"flex items-center gap-2",children:[i.jsx(cn,{className:"h-5 w-5"}),"청구 주소"]})}),i.jsxs(bt,{className:"space-y-4",children:[i.jsx(C,{control:e.control,name:"billingAddress",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"주소"}),i.jsx(A,{children:i.jsx(K,{placeholder:"서울시 강남구 테헤란로 123",...t})}),i.jsx(R,{})]})}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx(C,{control:e.control,name:"city",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"도시"}),i.jsx(A,{children:i.jsx(K,{placeholder:"서울",...t})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"postalCode",render:({field:t})=>i.jsxs(I,{children:[i.jsx(S,{children:"우편번호"}),i.jsx(A,{children:i.jsx(K,{placeholder:"12345",...t})}),i.jsx(R,{})]})})]})]})]}),i.jsx(C,{control:e.control,name:"saveCard",render:({field:t})=>i.jsxs(I,{className:"flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4",children:[i.jsx(A,{children:i.jsx(Ge,{checked:t.value,onCheckedChange:t.onChange})}),i.jsxs("div",{className:"space-y-1 leading-none",children:[i.jsx(S,{children:"다음 결제를 위해 카드 정보 저장"}),i.jsx(le,{children:"안전하게 암호화되어 저장됩니다."})]})]})}),i.jsxs(we,{type:"submit",className:"w-full",size:"lg",children:[i.jsx(ln,{className:"mr-2 h-4 w-4"}),"안전하게 결제하기"]})]})})]})}},Xc=er({satisfaction:B().min(1,{message:"만족도를 선택해주세요."}),recommendation:B().min(1,{message:"추천 의향을 선택해주세요."}),features:Lo(B()).min(1,{message:"최소 하나의 기능을 선택해주세요."}),improvement:B().min(10,{message:"최소 10자 이상 입력해주세요."}),newsletter:Je()}),dr={render:()=>{const e=Oe({resolver:Qe(Xc),defaultValues:{satisfaction:"",recommendation:"",features:[],improvement:"",newsletter:!1}}),r=[{id:"ui",label:"사용자 인터페이스"},{id:"performance",label:"성능"},{id:"reliability",label:"안정성"},{id:"support",label:"고객 지원"},{id:"pricing",label:"가격"},{id:"documentation",label:"문서화"}];function t(o){console.log(o),alert("설문조사가 제출되었습니다. 감사합니다!")}return i.jsxs("div",{className:"w-full max-w-2xl space-y-6",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx("h2",{className:"text-2xl font-bold",children:"고객 만족도 설문조사"}),i.jsx("p",{className:"text-muted-foreground",children:"귀중한 의견을 들려주세요. 더 나은 서비스를 위해 노력하겠습니다."})]}),i.jsx($e,{...e,children:i.jsxs("form",{onSubmit:e.handleSubmit(t),className:"space-y-6",children:[i.jsx(C,{control:e.control,name:"satisfaction",render:({field:o})=>i.jsxs(I,{className:"space-y-3",children:[i.jsx(S,{className:"text-base",children:"전반적인 만족도는 어떠신가요?"}),i.jsx(A,{children:i.jsxs(Qo,{onValueChange:o.onChange,defaultValue:o.value,className:"flex flex-col space-y-1",children:[i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Re,{value:"very-satisfied",id:"very-satisfied"}),i.jsx(xe,{htmlFor:"very-satisfied",children:"매우 만족"})]}),i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Re,{value:"satisfied",id:"satisfied"}),i.jsx(xe,{htmlFor:"satisfied",children:"만족"})]}),i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Re,{value:"neutral",id:"neutral"}),i.jsx(xe,{htmlFor:"neutral",children:"보통"})]}),i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Re,{value:"dissatisfied",id:"dissatisfied"}),i.jsx(xe,{htmlFor:"dissatisfied",children:"불만족"})]}),i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Re,{value:"very-dissatisfied",id:"very-dissatisfied"}),i.jsx(xe,{htmlFor:"very-dissatisfied",children:"매우 불만족"})]})]})}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"recommendation",render:({field:o})=>i.jsxs(I,{children:[i.jsx(S,{className:"text-base",children:"다른 사람에게 추천하실 의향이 있으신가요?"}),i.jsxs(en,{onValueChange:o.onChange,defaultValue:o.value,children:[i.jsx(A,{children:i.jsx(rn,{children:i.jsx(tn,{placeholder:"추천 의향을 선택해주세요"})})}),i.jsxs(on,{children:[i.jsx(Me,{value:"definitely",children:"적극 추천"}),i.jsx(Me,{value:"probably",children:"추천할 것 같음"}),i.jsx(Me,{value:"maybe",children:"모르겠음"}),i.jsx(Me,{value:"probably-not",children:"추천하지 않을 것 같음"}),i.jsx(Me,{value:"definitely-not",children:"절대 추천하지 않음"})]})]}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"features",render:()=>i.jsxs(I,{children:[i.jsx("div",{className:"mb-4",children:i.jsx(S,{className:"text-base",children:"가장 만족스러운 기능은 무엇인가요? (복수 선택 가능)"})}),r.map(o=>i.jsx(C,{control:e.control,name:"features",render:({field:n})=>i.jsxs(I,{className:"flex flex-row items-start space-x-3 space-y-0",children:[i.jsx(A,{children:i.jsx(Ge,{checked:n.value?.includes(o.id),onCheckedChange:s=>s?n.onChange([...n.value,o.id]):n.onChange(n.value?.filter(a=>a!==o.id))})}),i.jsx(S,{className:"font-normal",children:o.label})]},o.id)},o.id)),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"improvement",render:({field:o})=>i.jsxs(I,{children:[i.jsx(S,{className:"text-base",children:"개선이 필요한 부분이나 추가 의견이 있으시다면 알려주세요."}),i.jsx(A,{children:i.jsx(Ur,{placeholder:"개선 사항이나 추가 의견을 자유롭게 작성해주세요...",className:"resize-none",rows:4,...o})}),i.jsx(le,{children:"구체적인 의견일수록 도움이 됩니다."}),i.jsx(R,{})]})}),i.jsx(C,{control:e.control,name:"newsletter",render:({field:o})=>i.jsxs(I,{className:"flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4",children:[i.jsx(A,{children:i.jsx(Ge,{checked:o.value,onCheckedChange:o.onChange})}),i.jsxs("div",{className:"space-y-1 leading-none",children:[i.jsx(S,{children:"제품 업데이트 및 뉴스레터 구독"}),i.jsx(le,{children:"새로운 기능과 업데이트 소식을 이메일로 받아보세요."})]})]})}),i.jsxs(we,{type:"submit",className:"w-full",children:[i.jsx(to,{className:"mr-2 h-4 w-4"}),"설문조사 제출하기"]})]})})]})}},mr={render:()=>{const e=Oe({defaultValues:{email:"",password:"",rememberMe:!1}});function r(t){console.log(t),alert("접근성 데모 폼이 제출되었습니다!")}return i.jsxs("div",{className:"w-full max-w-md space-y-6",children:[i.jsxs("div",{className:"p-4 border rounded-lg",children:[i.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),i.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[i.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Shift+Tab)"}),i.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),i.jsx("li",{children:"• 오류 메시지 자동 안내"}),i.jsx("li",{children:"• 포커스 표시 및 관리"}),i.jsx("li",{children:"• 적절한 색상 대비"}),i.jsx("li",{children:"• 필수 필드 표시"})]})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx("h2",{className:"text-2xl font-bold",children:"로그인"}),i.jsx("p",{className:"text-muted-foreground",children:"계정에 접속하세요"})]}),i.jsx($e,{...e,children:i.jsxs("form",{onSubmit:e.handleSubmit(r),className:"space-y-4",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsxs(xe,{htmlFor:"email-demo",className:"required",children:["이메일 주소",i.jsx("span",{className:"text-red-500 ml-1","aria-label":"필수 항목",children:"*"})]}),i.jsx(K,{id:"email-demo",type:"email",placeholder:"user@example.com",required:!0,"aria-describedby":"email-help email-error",...e.register("email",{required:"이메일 주소를 입력해주세요.",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,message:"올바른 이메일 형식을 입력해주세요."}})}),i.jsx("div",{id:"email-help",className:"text-xs text-muted-foreground",children:"가입할 때 사용한 이메일 주소를 입력해주세요"}),e.formState.errors.email&&i.jsxs("div",{id:"email-error",className:"text-xs text-red-600 flex items-center gap-1",role:"alert","aria-live":"polite",children:[i.jsx(xt,{className:"h-3 w-3"}),e.formState.errors.email.message]})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsxs(xe,{htmlFor:"password-demo",className:"required",children:["비밀번호",i.jsx("span",{className:"text-red-500 ml-1","aria-label":"필수 항목",children:"*"})]}),i.jsx(K,{id:"password-demo",type:"password",placeholder:"비밀번호를 입력하세요",required:!0,"aria-describedby":"password-help password-error",...e.register("password",{required:"비밀번호를 입력해주세요.",minLength:{value:6,message:"비밀번호는 최소 6자 이상이어야 합니다."}})}),i.jsx("div",{id:"password-help",className:"text-xs text-muted-foreground",children:"최소 6자 이상의 비밀번호를 입력해주세요"}),e.formState.errors.password&&i.jsxs("div",{id:"password-error",className:"text-xs text-red-600 flex items-center gap-1",role:"alert","aria-live":"polite",children:[i.jsx(xt,{className:"h-3 w-3"}),e.formState.errors.password.message]})]}),i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Ge,{id:"remember-demo",...e.register("rememberMe"),"aria-describedby":"remember-help"}),i.jsx(xe,{htmlFor:"remember-demo",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"로그인 상태 유지"})]}),i.jsx("div",{id:"remember-help",className:"text-xs text-muted-foreground ml-6",children:"다음에 자동으로 로그인됩니다 (공용 컴퓨터에서는 사용하지 마세요)"}),i.jsxs(we,{type:"submit",className:"w-full","aria-describedby":"submit-help",children:[i.jsx(oo,{className:"mr-2 h-4 w-4"}),"로그인"]}),i.jsx("div",{id:"submit-help",className:"sr-only",children:"폼을 제출하려면 엔터를 누르거나 버튼을 클릭하세요"}),i.jsx("div",{className:"text-center",children:i.jsx(we,{variant:"link",size:"sm",children:"비밀번호를 잊으셨나요?"})})]})}),i.jsx("div",{className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab 키로 순서대로 이동, Shift+Tab으로 역순 이동, Enter로 제출"})]})},parameters:{docs:{description:{story:"완전한 접근성 지원을 보여주는 로그인 폼 데모입니다."}}}};ar.parameters={...ar.parameters,docs:{...ar.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: '',
        email: '',
        message: ''
      }
    });
    function onSubmit(values: z.infer<typeof contactSchema>) {
      console.log(values);
      alert('폼이 성공적으로 제출되었습니다!');
    }
    return <div className="w-full max-w-md space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">연락처 폼</h2>
          <p className="text-muted-foreground">메시지를 남겨주세요</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="name" render={({
            field
          }) => <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="email" render={({
            field
          }) => <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="hong@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="message" render={({
            field
          }) => <FormItem>
                  <FormLabel>메시지</FormLabel>
                  <FormControl>
                    <Textarea placeholder="메시지를 입력해주세요..." className="resize-none" rows={4} {...field} />
                  </FormControl>
                  <FormDescription>
                    최소 10자 이상 입력해주세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              메시지 보내기
            </Button>
          </form>
        </Form>
      </div>;
  }
}`,...ar.parameters?.docs?.source}}};cr.parameters={...cr.parameters,docs:{...cr.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof signupSchema>>({
      resolver: zodResolver(signupSchema),
      defaultValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: 18,
        terms: false
      }
    });
    function onSubmit(values: z.infer<typeof signupSchema>) {
      console.log(values);
      alert('회원가입이 완료되었습니다!');
    }
    return <div className="w-full max-w-md space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">회원가입</h2>
          <p className="text-muted-foreground">새 계정을 생성하세요</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="username" render={({
            field
          }) => <FormItem>
                  <FormLabel>사용자명</FormLabel>
                  <FormControl>
                    <Input placeholder="username123" {...field} />
                  </FormControl>
                  <FormDescription>
                    다른 사용자들에게 표시될 이름입니다.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="email" render={({
            field
          }) => <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="user@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="password" render={({
            field
          }) => <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>
                    최소 8자 이상의 안전한 비밀번호를 사용하세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="confirmPassword" render={({
            field
          }) => <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="age" render={({
            field
          }) => <FormItem>
                  <FormLabel>나이</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="terms" render={({
            field
          }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      이용약관 및 개인정보처리방침에 동의합니다.
                    </FormLabel>
                    <FormDescription>
                      서비스 이용을 위해 동의가 필요합니다.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>} />
            
            <Button type="submit" className="w-full">
              <User className="mr-2 h-4 w-4" />
              회원가입
            </Button>
          </form>
        </Form>
      </div>;
  }
}`,...cr.parameters?.docs?.source}}};lr.parameters={...lr.parameters,docs:{...lr.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof profileSchema>>({
      resolver: zodResolver(profileSchema),
      defaultValues: {
        firstName: '길동',
        lastName: '홍',
        bio: '안녕하세요! 저는 웹 개발자입니다.',
        url: 'https://example.com',
        location: '서울, 대한민국',
        notifications: true,
        marketing: false
      }
    });
    function onSubmit(values: z.infer<typeof profileSchema>) {
      console.log(values);
      alert('프로필이 업데이트되었습니다!');
    }
    return <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">프로필 설정</h2>
          <p className="text-muted-foreground">
            공개 프로필 정보를 관리하세요.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField control={form.control} name="firstName" render={({
              field
            }) => <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder="길동" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="lastName" render={({
              field
            }) => <FormItem>
                    <FormLabel>성</FormLabel>
                    <FormControl>
                      <Input placeholder="홍" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
            </div>
            
            <FormField control={form.control} name="bio" render={({
            field
          }) => <FormItem>
                  <FormLabel>소개</FormLabel>
                  <FormControl>
                    <Textarea placeholder="자신을 소개해보세요..." className="resize-none" {...field} />
                  </FormControl>
                  <FormDescription>
                    {field.value?.length || 0}/160
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="url" render={({
            field
          }) => <FormItem>
                  <FormLabel>웹사이트</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    개인 웹사이트나 포트폴리오 URL을 추가하세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="location" render={({
            field
          }) => <FormItem>
                  <FormLabel>위치</FormLabel>
                  <FormControl>
                    <Input placeholder="서울, 대한민국" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">알림 설정</h3>
              
              <FormField control={form.control} name="notifications" render={({
              field
            }) => <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        이메일 알림
                      </FormLabel>
                      <FormDescription>
                        새로운 메시지와 업데이트에 대한 이메일을 받습니다.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>} />
              
              <FormField control={form.control} name="marketing" render={({
              field
            }) => <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        마케팅 이메일
                      </FormLabel>
                      <FormDescription>
                        제품 업데이트, 회사 소식 및 이벤트에 대한 이메일을 받습니다.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>} />
            </div>
            
            <div className="flex gap-2">
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" />
                저장하기
              </Button>
              <Button type="button" variant="outline">
                취소
              </Button>
            </div>
          </form>
        </Form>
      </div>;
  }
}`,...lr.parameters?.docs?.source}}};ur.parameters={...ur.parameters,docs:{...ur.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof paymentSchema>>({
      resolver: zodResolver(paymentSchema),
      defaultValues: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
        billingAddress: '',
        city: '',
        postalCode: '',
        saveCard: false
      }
    });
    function onSubmit(values: z.infer<typeof paymentSchema>) {
      console.log(values);
      alert('결제가 처리되었습니다!');
    }
    return <div className="w-full max-w-lg space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">결제 정보</h2>
          <p className="text-muted-foreground">
            안전한 결제를 위해 정확한 정보를 입력해주세요.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  카드 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField control={form.control} name="cardNumber" render={({
                field
              }) => <FormItem>
                      <FormLabel>카드 번호</FormLabel>
                      <FormControl>
                        <Input placeholder="1234 5678 9012 3456" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField control={form.control} name="expiryDate" render={({
                  field
                }) => <FormItem>
                        <FormLabel>유효기간</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="cvv" render={({
                  field
                }) => <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input placeholder="123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </div>
                
                <FormField control={form.control} name="cardholderName" render={({
                field
              }) => <FormItem>
                      <FormLabel>카드 소유자 이름</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  청구 주소
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField control={form.control} name="billingAddress" render={({
                field
              }) => <FormItem>
                      <FormLabel>주소</FormLabel>
                      <FormControl>
                        <Input placeholder="서울시 강남구 테헤란로 123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField control={form.control} name="city" render={({
                  field
                }) => <FormItem>
                        <FormLabel>도시</FormLabel>
                        <FormControl>
                          <Input placeholder="서울" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="postalCode" render={({
                  field
                }) => <FormItem>
                        <FormLabel>우편번호</FormLabel>
                        <FormControl>
                          <Input placeholder="12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </div>
              </CardContent>
            </Card>
            
            <FormField control={form.control} name="saveCard" render={({
            field
          }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      다음 결제를 위해 카드 정보 저장
                    </FormLabel>
                    <FormDescription>
                      안전하게 암호화되어 저장됩니다.
                    </FormDescription>
                  </div>
                </FormItem>} />
            
            <Button type="submit" className="w-full" size="lg">
              <Lock className="mr-2 h-4 w-4" />
              안전하게 결제하기
            </Button>
          </form>
        </Form>
      </div>;
  }
}`,...ur.parameters?.docs?.source}}};dr.parameters={...dr.parameters,docs:{...dr.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof surveySchema>>({
      resolver: zodResolver(surveySchema),
      defaultValues: {
        satisfaction: '',
        recommendation: '',
        features: [],
        improvement: '',
        newsletter: false
      }
    });
    const features = [{
      id: 'ui',
      label: '사용자 인터페이스'
    }, {
      id: 'performance',
      label: '성능'
    }, {
      id: 'reliability',
      label: '안정성'
    }, {
      id: 'support',
      label: '고객 지원'
    }, {
      id: 'pricing',
      label: '가격'
    }, {
      id: 'documentation',
      label: '문서화'
    }];
    function onSubmit(values: z.infer<typeof surveySchema>) {
      console.log(values);
      alert('설문조사가 제출되었습니다. 감사합니다!');
    }
    return <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">고객 만족도 설문조사</h2>
          <p className="text-muted-foreground">
            귀중한 의견을 들려주세요. 더 나은 서비스를 위해 노력하겠습니다.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="satisfaction" render={({
            field
          }) => <FormItem className="space-y-3">
                  <FormLabel className="text-base">전반적인 만족도는 어떠신가요?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                        <Label htmlFor="very-satisfied">매우 만족</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="satisfied" id="satisfied" />
                        <Label htmlFor="satisfied">만족</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="neutral" id="neutral" />
                        <Label htmlFor="neutral">보통</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                        <Label htmlFor="dissatisfied">불만족</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" />
                        <Label htmlFor="very-dissatisfied">매우 불만족</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="recommendation" render={({
            field
          }) => <FormItem>
                  <FormLabel className="text-base">
                    다른 사람에게 추천하실 의향이 있으신가요?
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="추천 의향을 선택해주세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="definitely">적극 추천</SelectItem>
                      <SelectItem value="probably">추천할 것 같음</SelectItem>
                      <SelectItem value="maybe">모르겠음</SelectItem>
                      <SelectItem value="probably-not">추천하지 않을 것 같음</SelectItem>
                      <SelectItem value="definitely-not">절대 추천하지 않음</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="features" render={() => <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      가장 만족스러운 기능은 무엇인가요? (복수 선택 가능)
                    </FormLabel>
                  </div>
                  {features.map(item => <FormField key={item.id} control={form.control} name="features" render={({
              field
            }) => {
              return <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value?.includes(item.id)} onCheckedChange={checked => {
                    return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter(value => value !== item.id));
                  }} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>;
            }} />)}
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="improvement" render={({
            field
          }) => <FormItem>
                  <FormLabel className="text-base">
                    개선이 필요한 부분이나 추가 의견이 있으시다면 알려주세요.
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="개선 사항이나 추가 의견을 자유롭게 작성해주세요..." className="resize-none" rows={4} {...field} />
                  </FormControl>
                  <FormDescription>
                    구체적인 의견일수록 도움이 됩니다.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="newsletter" render={({
            field
          }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      제품 업데이트 및 뉴스레터 구독
                    </FormLabel>
                    <FormDescription>
                      새로운 기능과 업데이트 소식을 이메일로 받아보세요.
                    </FormDescription>
                  </div>
                </FormItem>} />
            
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              설문조사 제출하기
            </Button>
          </form>
        </Form>
      </div>;
  }
}`,...dr.parameters?.docs?.source}}};mr.parameters={...mr.parameters,docs:{...mr.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        email: '',
        password: '',
        rememberMe: false
      }
    });
    function onSubmit(values: any) {
      console.log(values);
      alert('접근성 데모 폼이 제출되었습니다!');
    }
    return <div className="w-full max-w-md space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Shift+Tab)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 오류 메시지 자동 안내</li>
            <li>• 포커스 표시 및 관리</li>
            <li>• 적절한 색상 대비</li>
            <li>• 필수 필드 표시</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">로그인</h2>
          <p className="text-muted-foreground">
            계정에 접속하세요
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-demo" className="required">
                이메일 주소
                <span className="text-red-500 ml-1" aria-label="필수 항목">*</span>
              </Label>
              <Input id="email-demo" type="email" placeholder="user@example.com" required aria-describedby="email-help email-error" {...form.register('email', {
              required: '이메일 주소를 입력해주세요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\\\.[A-Z]{2,}$/i,
                message: '올바른 이메일 형식을 입력해주세요.'
              }
            })} />
              <div id="email-help" className="text-xs text-muted-foreground">
                가입할 때 사용한 이메일 주소를 입력해주세요
              </div>
              {form.formState.errors.email && <div id="email-error" className="text-xs text-red-600 flex items-center gap-1" role="alert" aria-live="polite">
                  <AlertCircle className="h-3 w-3" />
                  {form.formState.errors.email.message}
                </div>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-demo" className="required">
                비밀번호
                <span className="text-red-500 ml-1" aria-label="필수 항목">*</span>
              </Label>
              <Input id="password-demo" type="password" placeholder="비밀번호를 입력하세요" required aria-describedby="password-help password-error" {...form.register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 6,
                message: '비밀번호는 최소 6자 이상이어야 합니다.'
              }
            })} />
              <div id="password-help" className="text-xs text-muted-foreground">
                최소 6자 이상의 비밀번호를 입력해주세요
              </div>
              {form.formState.errors.password && <div id="password-error" className="text-xs text-red-600 flex items-center gap-1" role="alert" aria-live="polite">
                  <AlertCircle className="h-3 w-3" />
                  {form.formState.errors.password.message}
                </div>}
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-demo" {...form.register('rememberMe')} aria-describedby="remember-help" />
              <Label htmlFor="remember-demo" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                로그인 상태 유지
              </Label>
            </div>
            <div id="remember-help" className="text-xs text-muted-foreground ml-6">
              다음에 자동으로 로그인됩니다 (공용 컴퓨터에서는 사용하지 마세요)
            </div>
            
            <Button type="submit" className="w-full" aria-describedby="submit-help">
              <User className="mr-2 h-4 w-4" />
              로그인
            </Button>
            <div id="submit-help" className="sr-only">
              폼을 제출하려면 엔터를 누르거나 버튼을 클릭하세요
            </div>
            
            <div className="text-center">
              <Button variant="link" size="sm">
                비밀번호를 잊으셨나요?
              </Button>
            </div>
          </form>
        </Form>
        
        <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab 키로 순서대로 이동, Shift+Tab으로 역순 이동, Enter로 제출
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 접근성 지원을 보여주는 로그인 폼 데모입니다.'
      }
    }
  }
}`,...mr.parameters?.docs?.source}}};export{mr as AccessibilityDemo,ar as Default,ur as PaymentForm,lr as ProfileSettings,cr as SignupForm,dr as SurveyForm,ql as default};
