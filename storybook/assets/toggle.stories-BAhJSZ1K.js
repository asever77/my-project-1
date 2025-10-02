import{j as e}from"./jsx-runtime-zcBydOHc.js";import{r as p}from"./iframe-f0y5nwCv.js";import{T as a,B as U,I as G,U as J}from"./toggle-Dz783vA-.js";import{C as d,a as c,b as n,c as h,d as o}from"./card-C4KhRH4Z.js";import{B as q}from"./badge-Clo-twS7.js";import{L as t}from"./label-BM3K1upj.js";import{S as C}from"./star-Cl5gcV0f.js";import{H as T}from"./heart-AyR4sxnz.js";import{B as S}from"./bookmark-C7smxgWN.js";import{M as F}from"./moon-q2c31CnF.js";import{S as L}from"./sun-CnvAHwZZ.js";import{E as g}from"./eye-C1H0YBcX.js";import{C as Q}from"./check-xiXrEZe3.js";import{X as Y}from"./x-CvGFKH4w.js";import{B as M}from"./bell-D-Gq-JeQ.js";import{B,a as z,M as k,b as H}from"./mic-BL_mAo_K.js";import{V as x}from"./volume-2-DDv8ED0-.js";import{V as v}from"./volume-x-DJqiCOSq.js";import{W as O}from"./wifi-CmdOgP6z.js";import{W as D,B as R}from"./wifi-off-B2xGIKde.js";import{M as E}from"./map-pin-CrECppIW.js";import{B as V}from"./battery-C2uFJcNG.js";import{P as w}from"./pause-CkvltQtk.js";import{P as y}from"./play-DeGg2-Lf.js";import{R as W,S as I}from"./shuffle-DsnGR9GQ.js";import{c as P}from"./createLucideIcon-D1NW3S5P.js";import{C as Z}from"./camera-CddJ7n8A.js";import{T as _}from"./type-CWrCiNEB.js";import{F as $}from"./file-text-CosDzJ2u.js";import{K as A}from"./keyboard-DYy4_BrQ.js";import"./index-BRAHi5Fr.js";import"./index-Bi2uafXz.js";import"./index-DtN1zOg8.js";import"./index-BOW4bzV5.js";import"./index-Bnc6pY_-.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M14.564 14.558a3 3 0 1 1-4.122-4.121",key:"1rnrzw"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175",key:"1x3arw"}],["path",{d:"M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344",key:"1i84u0"}]],X=P("camera-off",ee);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],K=P("maximize-2",se);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],le=P("minimize-2",ae),Ie={title:"UI/Base/Toggle",component:a,parameters:{layout:"centered",docs:{description:{component:"켜기/끄기 상태를 전환하는 토글 버튼 컴포넌트입니다. 다양한 크기와 스타일 변형을 지원합니다."}}},tags:["autodocs"],argTypes:{pressed:{description:"토글 상태 (눌림/안눌림)",control:"boolean"},variant:{description:"스타일 변형",control:"select",options:["default","outline"]},size:{description:"크기",control:"select",options:["default","sm","lg"]},disabled:{description:"비활성화 상태",control:"boolean"}}},u={render:()=>{const[s,m]=p.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"기본 토글"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{pressed:s,onPressedChange:m,"aria-label":"굵게 만들기",children:e.jsx(U,{className:"h-4 w-4"})}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:["상태: ",s?"활성":"비활성"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"text-sm font-medium",children:"다양한 크기"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm","aria-label":"작은 토글",children:e.jsx(C,{className:"h-3 w-3"})}),e.jsx(a,{size:"default","aria-label":"기본 토글",children:e.jsx(C,{className:"h-4 w-4"})}),e.jsx(a,{size:"lg","aria-label":"큰 토글",children:e.jsx(C,{className:"h-5 w-5"})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"text-sm font-medium",children:"스타일 변형"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"default","aria-label":"기본 스타일",children:e.jsx(T,{className:"h-4 w-4"})}),e.jsx(a,{variant:"outline","aria-label":"아웃라인 스타일",children:e.jsx(T,{className:"h-4 w-4"})}),e.jsx(a,{variant:"outline",pressed:!0,"aria-label":"눌린 아웃라인",children:e.jsx(T,{className:"h-4 w-4 fill-current"})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"text-sm font-medium",children:"비활성화 상태"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{disabled:!0,"aria-label":"비활성화됨",children:e.jsx(S,{className:"h-4 w-4"})}),e.jsx(a,{disabled:!0,pressed:!0,"aria-label":"눌린 상태로 비활성화됨",children:e.jsx(S,{className:"h-4 w-4 fill-current"})})]})]})]})]})}},N={render:()=>{const[s,m]=p.useState({bold:!1,italic:!1,underline:!1}),l=r=>{m(i=>({...i,[r]:!i[r]}))};return e.jsxs("div",{className:"w-full max-w-2xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"텍스트 서식 도구"}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"글꼴 서식"}),e.jsx(h,{children:"텍스트에 적용할 서식을 선택하세요"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{pressed:s.bold,onPressedChange:()=>l("bold"),"aria-label":"굵게","aria-pressed":s.bold,children:e.jsx(U,{className:"h-4 w-4"})}),e.jsx(a,{pressed:s.italic,onPressedChange:()=>l("italic"),"aria-label":"기울임","aria-pressed":s.italic,children:e.jsx(G,{className:"h-4 w-4"})}),e.jsx(a,{pressed:s.underline,onPressedChange:()=>l("underline"),"aria-label":"밑줄","aria-pressed":s.underline,children:e.jsx(J,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"mt-4 p-4 border rounded-lg bg-muted/30",children:[e.jsx("h4",{className:"font-medium mb-2",children:"미리보기"}),e.jsx("p",{className:"text-sm",style:{fontWeight:s.bold?"bold":"normal",fontStyle:s.italic?"italic":"normal",textDecoration:s.underline?"underline":"none"},children:"이 텍스트에 선택한 서식이 적용됩니다. 굵게, 기울임, 밑줄 효과를 실시간으로 확인할 수 있습니다."}),e.jsxs("div",{className:"mt-2 text-xs text-muted-foreground",children:["활성 서식: ",Object.entries(s).filter(([r,i])=>i).map(([r])=>r).join(", ")||"없음"]})]})]})]})]})}},f={render:()=>{const[s,m]=p.useState({darkMode:!1,notifications:!0,wifi:!0,bluetooth:!1,sound:!0,location:!1,autoSave:!0,powerSaver:!1}),l=r=>{m(i=>({...i,[r]:!i[r]}))};return e.jsxs("div",{className:"w-full max-w-3xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"시스템 설정"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"화면 설정"}),e.jsx(h,{children:"디스플레이와 테마 설정"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.darkMode?e.jsx(F,{className:"h-4 w-4"}):e.jsx(L,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"dark-mode",children:"다크 모드"})]}),e.jsx(a,{id:"dark-mode",pressed:s.darkMode,onPressedChange:()=>l("darkMode"),"aria-label":"다크 모드 전환",children:s.darkMode?e.jsx(F,{className:"h-4 w-4"}):e.jsx(L,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"auto-save",children:"자동 저장"})]}),e.jsx(a,{id:"auto-save",pressed:s.autoSave,onPressedChange:()=>l("autoSave"),"aria-label":"자동 저장 전환",variant:"outline",children:s.autoSave?e.jsx(Q,{className:"h-4 w-4"}):e.jsx(Y,{className:"h-4 w-4"})})]})]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"알림 설정"}),e.jsx(h,{children:"알림과 사운드 설정"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.notifications?e.jsx(M,{className:"h-4 w-4"}):e.jsx(B,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"notifications",children:"알림"})]}),e.jsx(a,{id:"notifications",pressed:s.notifications,onPressedChange:()=>l("notifications"),"aria-label":"알림 전환",size:"sm",children:s.notifications?e.jsx(M,{className:"h-3 w-3"}):e.jsx(B,{className:"h-3 w-3"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.sound?e.jsx(x,{className:"h-4 w-4"}):e.jsx(v,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"sound",children:"소리"})]}),e.jsx(a,{id:"sound",pressed:s.sound,onPressedChange:()=>l("sound"),"aria-label":"소리 전환",size:"sm",children:s.sound?e.jsx(x,{className:"h-3 w-3"}):e.jsx(v,{className:"h-3 w-3"})})]})]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"연결 설정"}),e.jsx(h,{children:"무선 연결 및 네트워크"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.wifi?e.jsx(O,{className:"h-4 w-4"}):e.jsx(D,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"wifi",children:"Wi-Fi"})]}),e.jsx(a,{id:"wifi",pressed:s.wifi,onPressedChange:()=>l("wifi"),"aria-label":"Wi-Fi 전환",children:s.wifi?e.jsx(O,{className:"h-4 w-4"}):e.jsx(D,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(z,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"bluetooth",children:"Bluetooth"})]}),e.jsx(a,{id:"bluetooth",pressed:s.bluetooth,onPressedChange:()=>l("bluetooth"),"aria-label":"Bluetooth 전환",variant:"outline",children:e.jsx(z,{className:"h-4 w-4"})})]})]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"개인정보 설정"}),e.jsx(h,{children:"위치 및 보안 설정"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(E,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"location",children:"위치 서비스"})]}),e.jsx(a,{id:"location",pressed:s.location,onPressedChange:()=>l("location"),"aria-label":"위치 서비스 전환",size:"lg",children:e.jsx(E,{className:"h-5 w-5"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.powerSaver?e.jsx(R,{className:"h-4 w-4"}):e.jsx(V,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"power-saver",children:"절전 모드"})]}),e.jsx(a,{id:"power-saver",pressed:s.powerSaver,onPressedChange:()=>l("powerSaver"),"aria-label":"절전 모드 전환",size:"lg",children:s.powerSaver?e.jsx(R,{className:"h-5 w-5"}):e.jsx(V,{className:"h-5 w-5"})})]})]})]})]}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(n,{children:"설정 요약"})}),e.jsx(o,{children:e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:Object.entries(s).map(([r,i])=>e.jsx("div",{className:"text-center",children:e.jsxs(q,{variant:i?"default":"secondary",className:"w-full",children:[r,": ",i?"켜짐":"꺼짐"]})},r))})})]})]})}},b={render:()=>{const[s,m]=p.useState({playing:!1,muted:!1,recording:!1,camera:!1,microphone:!1,repeat:!1,shuffle:!1,fullscreen:!1}),l=r=>{m(i=>({...i,[r]:!i[r]}))};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"미디어 컨트롤"}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"동영상 플레이어"}),e.jsx(h,{children:"재생, 녹화, 설정 등 모든 미디어 기능을 제어하세요"})]}),e.jsxs(o,{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"재생 컨트롤"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{pressed:s.playing,onPressedChange:()=>l("playing"),"aria-label":s.playing?"일시정지":"재생",size:"lg",children:s.playing?e.jsx(w,{className:"h-5 w-5"}):e.jsx(y,{className:"h-5 w-5"})}),e.jsx(a,{pressed:s.muted,onPressedChange:()=>l("muted"),"aria-label":s.muted?"음소거 해제":"음소거",variant:"outline",children:s.muted?e.jsx(v,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"})}),e.jsx(a,{pressed:s.repeat,onPressedChange:()=>l("repeat"),"aria-label":"반복 재생",variant:"outline",size:"sm",children:e.jsx(W,{className:"h-3 w-3"})}),e.jsx(a,{pressed:s.shuffle,onPressedChange:()=>l("shuffle"),"aria-label":"셔플",variant:"outline",size:"sm",children:e.jsx(I,{className:"h-3 w-3"})}),e.jsx(a,{pressed:s.fullscreen,onPressedChange:()=>l("fullscreen"),"aria-label":"전체화면",variant:"outline",children:s.fullscreen?e.jsx(le,{className:"h-4 w-4"}):e.jsx(K,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"녹화 및 스트리밍"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{pressed:s.recording,onPressedChange:()=>l("recording"),"aria-label":s.recording?"녹화 중지":"녹화 시작",variant:s.recording?"default":"outline",className:s.recording?"bg-red-500 hover:bg-red-600":"",children:e.jsx("div",{className:`h-3 w-3 rounded-full ${s.recording?"bg-white":"bg-red-500"}`})}),e.jsx(a,{pressed:s.camera,onPressedChange:()=>l("camera"),"aria-label":s.camera?"카메라 끄기":"카메라 켜기",variant:"outline",children:s.camera?e.jsx(Z,{className:"h-4 w-4"}):e.jsx(X,{className:"h-4 w-4"})}),e.jsx(a,{pressed:s.microphone,onPressedChange:()=>l("microphone"),"aria-label":s.microphone?"마이크 끄기":"마이크 켜기",variant:"outline",children:s.microphone?e.jsx(k,{className:"h-4 w-4"}):e.jsx(H,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-muted/30 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-3",children:"현재 상태"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s.playing?"bg-green-500":"bg-gray-400"}`}),e.jsxs("span",{className:"text-sm",children:["재생: ",s.playing?"중":"정지"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s.recording?"bg-red-500":"bg-gray-400"}`}),e.jsxs("span",{className:"text-sm",children:["녹화: ",s.recording?"중":"대기"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s.camera?"bg-blue-500":"bg-gray-400"}`}),e.jsxs("span",{className:"text-sm",children:["카메라: ",s.camera?"켜짐":"꺼짐"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s.microphone?"bg-orange-500":"bg-gray-400"}`}),e.jsxs("span",{className:"text-sm",children:["마이크: ",s.microphone?"켜짐":"꺼짐"]})]})]})]})]})]}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(n,{children:"플레이어 미리보기"})}),e.jsx(o,{children:e.jsxs("div",{className:"aspect-video bg-black rounded-lg flex items-center justify-center relative",children:[e.jsx("div",{className:"text-white text-center",children:s.playing?e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto",children:e.jsx(w,{className:"h-6 w-6"})}),e.jsx("p",{children:"재생 중..."})]}):e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto",children:e.jsx(y,{className:"h-6 w-6 ml-1"})}),e.jsx("p",{children:"일시정지됨"})]})}),e.jsxs("div",{className:"absolute top-4 right-4 flex gap-2",children:[s.recording&&e.jsx("div",{className:"w-6 h-6 bg-red-500 rounded-full flex items-center justify-center",children:e.jsx("div",{className:"w-3 h-3 bg-white rounded-full"})}),s.muted&&e.jsx(v,{className:"w-5 h-5 text-white/80"}),!s.camera&&e.jsx(X,{className:"w-5 h-5 text-white/80"}),!s.microphone&&e.jsx(H,{className:"w-5 h-5 text-white/80"})]}),e.jsxs("div",{className:"absolute bottom-4 left-4 flex gap-2",children:[s.repeat&&e.jsx(W,{className:"w-4 h-4 text-white/80"}),s.shuffle&&e.jsx(I,{className:"w-4 h-4 text-white/80"}),s.fullscreen&&e.jsx(K,{className:"w-4 h-4 text-white/80"})]})]})})]})]})}},j={render:()=>{const[s,m]=p.useState({voiceControl:!1,highContrast:!1,largeText:!1,screenReader:!0,keyboardNav:!0,reducedMotion:!1,autoplay:!1,captions:!0}),l=r=>{m(i=>({...i,[r]:!i[r]}))};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 완전 지원 (Tab, Enter, Space)"}),e.jsx("li",{children:"• 스크린 리더 완전 호환성 및 ARIA 속성"}),e.jsx("li",{children:"• 토글 상태의 명확한 시각적 및 음성 피드백"}),e.jsx("li",{children:"• 적절한 색상 대비와 포커스 표시"}),e.jsx("li",{children:"• 상태 변경 시 실시간 안내 (aria-live)"})]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsxs(n,{className:"flex items-center gap-2",children:[e.jsx(g,{className:"h-5 w-5"}),"접근성 적용 토글"]}),e.jsx(h,{children:"모든 사용자가 쉽게 이용할 수 있도록 설계된 토글 컴포넌트입니다"})]}),e.jsxs(o,{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"시각 접근성 기능"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"high-contrast",children:"고대비 모드"})]}),e.jsx(a,{id:"high-contrast",pressed:s.highContrast,onPressedChange:()=>l("highContrast"),"aria-label":"고대비 모드 전환","aria-describedby":"high-contrast-desc",children:e.jsx(g,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"high-contrast-desc",className:"sr-only",children:"고대비 모드를 활성화하여 텍스트와 배경 간의 대비를 높입니다"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(_,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"large-text",children:"큰 텍스트"})]}),e.jsx(a,{id:"large-text",pressed:s.largeText,onPressedChange:()=>l("largeText"),"aria-label":"큰 텍스트 모드 전환","aria-describedby":"large-text-desc",variant:"outline",children:e.jsx(_,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"large-text-desc",className:"sr-only",children:"모든 텍스트 크기를 확대하여 가독성을 향상시킵니다"})]})]}),e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"청각 접근성 기능"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"screen-reader",children:"스크린 리더"})]}),e.jsx(a,{id:"screen-reader",pressed:s.screenReader,onPressedChange:()=>l("screenReader"),"aria-label":"스크린 리더 지원 전환","aria-describedby":"screen-reader-desc",children:e.jsx(x,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"screen-reader-desc",className:"sr-only",children:"스크린 리더 사용자를 위한 음성 안내 기능을 활성화합니다"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx($,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"captions",children:"자막 표시"})]}),e.jsx(a,{id:"captions",pressed:s.captions,onPressedChange:()=>l("captions"),"aria-label":"자막 표시 전환","aria-describedby":"captions-desc",variant:"outline",children:e.jsx($,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"captions-desc",className:"sr-only",children:"동영상 및 오디오 콘텐츠에 자막을 표시합니다"})]})]}),e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"운동 접근성 기능"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"keyboard-nav",children:"키보드 내비게이션"})]}),e.jsx(a,{id:"keyboard-nav",pressed:s.keyboardNav,onPressedChange:()=>l("keyboardNav"),"aria-label":"키보드 내비게이션 전환","aria-describedby":"keyboard-nav-desc",children:e.jsx(A,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"keyboard-nav-desc",className:"sr-only",children:"마우스 없이 키보드만으로 모든 기능을 사용할 수 있습니다"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(k,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"voice-control",children:"음성 제어"})]}),e.jsx(a,{id:"voice-control",pressed:s.voiceControl,onPressedChange:()=>l("voiceControl"),"aria-label":"음성 제어 전환","aria-describedby":"voice-control-desc",variant:"outline",children:e.jsx(k,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"voice-control-desc",className:"sr-only",children:"음성 명령으로 인터페이스를 제어할 수 있습니다"})]})]}),e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"감각 민감성 기능"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"reduced-motion",children:"애니메이션 감소"})]}),e.jsx(a,{id:"reduced-motion",pressed:s.reducedMotion,onPressedChange:()=>l("reducedMotion"),"aria-label":"애니메이션 감소 전환","aria-describedby":"reduced-motion-desc",children:e.jsx(w,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"reduced-motion-desc",className:"sr-only",children:"움직임에 민감한 사용자를 위해 애니메이션을 최소화합니다"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"autoplay",children:"자동 재생 방지"})]}),e.jsx(a,{id:"autoplay",pressed:s.autoplay,onPressedChange:()=>l("autoplay"),"aria-label":"자동 재생 방지 전환","aria-describedby":"autoplay-desc",variant:"outline",children:e.jsx(y,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"autoplay-desc",className:"sr-only",children:"미디어 콘텐츠의 자동 재생을 방지합니다"})]})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg","aria-live":"polite","aria-label":"접근성 설정 상태",children:[e.jsx("h4",{className:"font-medium mb-2",children:"현재 활성화된 접근성 기능"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[Object.entries(s).filter(([r,i])=>i).map(([r,i])=>e.jsxs(q,{variant:"default",children:[r==="voiceControl"&&"음성 제어",r==="highContrast"&&"고대비 모드",r==="largeText"&&"큰 텍스트",r==="screenReader"&&"스크린 리더",r==="keyboardNav"&&"키보드 내비게이션",r==="reducedMotion"&&"애니메이션 감소",r==="autoplay"&&"자동 재생 방지",r==="captions"&&"자막 표시"]},r)),Object.values(s).every(r=>!r)&&e.jsx("span",{className:"text-muted-foreground",children:"활성화된 기능이 없습니다"})]})]}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(n,{children:"토글 접근성 가이드라인"})}),e.jsx(o,{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-green-600",children:"✅ 권장사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"명확한 레이블과 설명"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"적절한 ARIA 상태 속성"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"키보드 접근 가능"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"상태 변경 실시간 안내"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"충분한 클릭 영역 (44px 이상)"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-orange-600",children:"⚠️ 주의사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"색상만으로 상태 구분 금지"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"상태 변경 시 예상치 못한 포커스 이동"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"중요한 기능의 의도치 않은 활성화"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"접근성 기능 끄기 어려움"})]})]})]})]})})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(g,{className:"h-5 w-5 text-blue-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-900",children:"키보드 사용법"}),e.jsxs("div",{className:"text-sm text-blue-800 mt-2 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Tab"}),": 다음 토글로 이동"]}),e.jsxs("p",{children:["• ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Shift + Tab"}),": 이전 토글로 이동"]}),e.jsxs("p",{children:["• ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Space"})," 또는 ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Enter"}),": 토글 활성화/비활성화"]}),e.jsxs("p",{children:["• ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Esc"}),": 포커스 해제"]})]})]})]})})]})},parameters:{docs:{description:{story:"토글 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다."}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isPressed, setIsPressed] = useState(false);
    return <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">기본 토글</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Toggle pressed={isPressed} onPressedChange={setIsPressed} aria-label="굵게 만들기">
              <Bold className="h-4 w-4" />
            </Toggle>
            <span className="text-sm text-muted-foreground">
              상태: {isPressed ? '활성' : '비활성'}
            </span>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">다양한 크기</Label>
            <div className="flex items-center gap-2">
              <Toggle size="sm" aria-label="작은 토글">
                <Star className="h-3 w-3" />
              </Toggle>
              <Toggle size="default" aria-label="기본 토글">
                <Star className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" aria-label="큰 토글">
                <Star className="h-5 w-5" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">스타일 변형</Label>
            <div className="flex items-center gap-2">
              <Toggle variant="default" aria-label="기본 스타일">
                <Heart className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="아웃라인 스타일">
                <Heart className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" pressed aria-label="눌린 아웃라인">
                <Heart className="h-4 w-4 fill-current" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">비활성화 상태</Label>
            <div className="flex items-center gap-2">
              <Toggle disabled aria-label="비활성화됨">
                <Bookmark className="h-4 w-4" />
              </Toggle>
              <Toggle disabled pressed aria-label="눌린 상태로 비활성화됨">
                <Bookmark className="h-4 w-4 fill-current" />
              </Toggle>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formatting, setFormatting] = useState({
      bold: false,
      italic: false,
      underline: false
    });
    const toggleFormat = (format: keyof typeof formatting) => {
      setFormatting(prev => ({
        ...prev,
        [format]: !prev[format]
      }));
    };
    return <div className="w-full max-w-2xl space-y-6">
        <h3 className="text-lg font-semibold mb-4">텍스트 서식 도구</h3>
        
        <Card>
          <CardHeader>
            <CardTitle>글꼴 서식</CardTitle>
            <CardDescription>
              텍스트에 적용할 서식을 선택하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Toggle pressed={formatting.bold} onPressedChange={() => toggleFormat('bold')} aria-label="굵게" aria-pressed={formatting.bold}>
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle pressed={formatting.italic} onPressedChange={() => toggleFormat('italic')} aria-label="기울임" aria-pressed={formatting.italic}>
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle pressed={formatting.underline} onPressedChange={() => toggleFormat('underline')} aria-label="밑줄" aria-pressed={formatting.underline}>
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
            
            <div className="mt-4 p-4 border rounded-lg bg-muted/30">
              <h4 className="font-medium mb-2">미리보기</h4>
              <p className="text-sm" style={{
              fontWeight: formatting.bold ? 'bold' : 'normal',
              fontStyle: formatting.italic ? 'italic' : 'normal',
              textDecoration: formatting.underline ? 'underline' : 'none'
            }}>
                이 텍스트에 선택한 서식이 적용됩니다. 
                굵게, 기울임, 밑줄 효과를 실시간으로 확인할 수 있습니다.
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                활성 서식: {Object.entries(formatting).filter(([_, value]) => value).map(([key]) => key).join(', ') || '없음'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  }
}`,...N.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      darkMode: false,
      notifications: true,
      wifi: true,
      bluetooth: false,
      sound: true,
      location: false,
      autoSave: true,
      powerSaver: false
    });
    const toggleSetting = (setting: keyof typeof settings) => {
      setSettings(prev => ({
        ...prev,
        [setting]: !prev[setting]
      }));
    };
    return <div className="w-full max-w-3xl space-y-6">
        <h3 className="text-lg font-semibold mb-4">시스템 설정</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 화면 설정 */}
          <Card>
            <CardHeader>
              <CardTitle>화면 설정</CardTitle>
              <CardDescription>디스플레이와 테마 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <Label htmlFor="dark-mode">다크 모드</Label>
                </div>
                <Toggle id="dark-mode" pressed={settings.darkMode} onPressedChange={() => toggleSetting('darkMode')} aria-label="다크 모드 전환">
                  {settings.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="h-4 w-4" />
                  <Label htmlFor="auto-save">자동 저장</Label>
                </div>
                <Toggle id="auto-save" pressed={settings.autoSave} onPressedChange={() => toggleSetting('autoSave')} aria-label="자동 저장 전환" variant="outline">
                  {settings.autoSave ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </Toggle>
              </div>
            </CardContent>
          </Card>
          
          {/* 알림 설정 */}
          <Card>
            <CardHeader>
              <CardTitle>알림 설정</CardTitle>
              <CardDescription>알림과 사운드 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.notifications ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                  <Label htmlFor="notifications">알림</Label>
                </div>
                <Toggle id="notifications" pressed={settings.notifications} onPressedChange={() => toggleSetting('notifications')} aria-label="알림 전환" size="sm">
                  {settings.notifications ? <Bell className="h-3 w-3" /> : <BellOff className="h-3 w-3" />}
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.sound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                  <Label htmlFor="sound">소리</Label>
                </div>
                <Toggle id="sound" pressed={settings.sound} onPressedChange={() => toggleSetting('sound')} aria-label="소리 전환" size="sm">
                  {settings.sound ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
                </Toggle>
              </div>
            </CardContent>
          </Card>
          
          {/* 연결 설정 */}
          <Card>
            <CardHeader>
              <CardTitle>연결 설정</CardTitle>
              <CardDescription>무선 연결 및 네트워크</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.wifi ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
                  <Label htmlFor="wifi">Wi-Fi</Label>
                </div>
                <Toggle id="wifi" pressed={settings.wifi} onPressedChange={() => toggleSetting('wifi')} aria-label="Wi-Fi 전환">
                  {settings.wifi ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bluetooth className="h-4 w-4" />
                  <Label htmlFor="bluetooth">Bluetooth</Label>
                </div>
                <Toggle id="bluetooth" pressed={settings.bluetooth} onPressedChange={() => toggleSetting('bluetooth')} aria-label="Bluetooth 전환" variant="outline">
                  <Bluetooth className="h-4 w-4" />
                </Toggle>
              </div>
            </CardContent>
          </Card>
          
          {/* 개인정보 설정 */}
          <Card>
            <CardHeader>
              <CardTitle>개인정보 설정</CardTitle>
              <CardDescription>위치 및 보안 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <Label htmlFor="location">위치 서비스</Label>
                </div>
                <Toggle id="location" pressed={settings.location} onPressedChange={() => toggleSetting('location')} aria-label="위치 서비스 전환" size="lg">
                  <MapPin className="h-5 w-5" />
                </Toggle>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.powerSaver ? <BatteryLow className="h-4 w-4" /> : <Battery className="h-4 w-4" />}
                  <Label htmlFor="power-saver">절전 모드</Label>
                </div>
                <Toggle id="power-saver" pressed={settings.powerSaver} onPressedChange={() => toggleSetting('powerSaver')} aria-label="절전 모드 전환" size="lg">
                  {settings.powerSaver ? <BatteryLow className="h-5 w-5" /> : <Battery className="h-5 w-5" />}
                </Toggle>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* 설정 요약 */}
        <Card>
          <CardHeader>
            <CardTitle>설정 요약</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(settings).map(([key, value]) => <div key={key} className="text-center">
                  <Badge variant={value ? "default" : "secondary"} className="w-full">
                    {key}: {value ? '켜짐' : '꺼짐'}
                  </Badge>
                </div>)}
            </div>
          </CardContent>
        </Card>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [controls, setControls] = useState({
      playing: false,
      muted: false,
      recording: false,
      camera: false,
      microphone: false,
      repeat: false,
      shuffle: false,
      fullscreen: false
    });
    const toggleControl = (control: keyof typeof controls) => {
      setControls(prev => ({
        ...prev,
        [control]: !prev[control]
      }));
    };
    return <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-lg font-semibold mb-4">미디어 컨트롤</h3>
        
        <Card>
          <CardHeader>
            <CardTitle>동영상 플레이어</CardTitle>
            <CardDescription>
              재생, 녹화, 설정 등 모든 미디어 기능을 제어하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 기본 재생 컨트롤 */}
            <div>
              <Label className="text-sm font-medium mb-3 block">재생 컨트롤</Label>
              <div className="flex items-center gap-3">
                <Toggle pressed={controls.playing} onPressedChange={() => toggleControl('playing')} aria-label={controls.playing ? "일시정지" : "재생"} size="lg">
                  {controls.playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Toggle>
                
                <Toggle pressed={controls.muted} onPressedChange={() => toggleControl('muted')} aria-label={controls.muted ? "음소거 해제" : "음소거"} variant="outline">
                  {controls.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Toggle>
                
                <Toggle pressed={controls.repeat} onPressedChange={() => toggleControl('repeat')} aria-label="반복 재생" variant="outline" size="sm">
                  <Repeat className="h-3 w-3" />
                </Toggle>
                
                <Toggle pressed={controls.shuffle} onPressedChange={() => toggleControl('shuffle')} aria-label="셔플" variant="outline" size="sm">
                  <Shuffle className="h-3 w-3" />
                </Toggle>
                
                <Toggle pressed={controls.fullscreen} onPressedChange={() => toggleControl('fullscreen')} aria-label="전체화면" variant="outline">
                  {controls.fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Toggle>
              </div>
            </div>
            
            {/* 녹화 컨트롤 */}
            <div>
              <Label className="text-sm font-medium mb-3 block">녹화 및 스트리밍</Label>
              <div className="flex items-center gap-3">
                <Toggle pressed={controls.recording} onPressedChange={() => toggleControl('recording')} aria-label={controls.recording ? "녹화 중지" : "녹화 시작"} variant={controls.recording ? "default" : "outline"} className={controls.recording ? "bg-red-500 hover:bg-red-600" : ""}>
                  <div className={\`h-3 w-3 rounded-full \${controls.recording ? 'bg-white' : 'bg-red-500'}\`} />
                </Toggle>
                
                <Toggle pressed={controls.camera} onPressedChange={() => toggleControl('camera')} aria-label={controls.camera ? "카메라 끄기" : "카메라 켜기"} variant="outline">
                  {controls.camera ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}
                </Toggle>
                
                <Toggle pressed={controls.microphone} onPressedChange={() => toggleControl('microphone')} aria-label={controls.microphone ? "마이크 끄기" : "마이크 켜기"} variant="outline">
                  {controls.microphone ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                </Toggle>
              </div>
            </div>
            
            {/* 상태 표시 */}
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium mb-3">현재 상태</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center gap-2">
                  <div className={\`w-2 h-2 rounded-full \${controls.playing ? 'bg-green-500' : 'bg-gray-400'}\`} />
                  <span className="text-sm">재생: {controls.playing ? '중' : '정지'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={\`w-2 h-2 rounded-full \${controls.recording ? 'bg-red-500' : 'bg-gray-400'}\`} />
                  <span className="text-sm">녹화: {controls.recording ? '중' : '대기'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={\`w-2 h-2 rounded-full \${controls.camera ? 'bg-blue-500' : 'bg-gray-400'}\`} />
                  <span className="text-sm">카메라: {controls.camera ? '켜짐' : '꺼짐'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={\`w-2 h-2 rounded-full \${controls.microphone ? 'bg-orange-500' : 'bg-gray-400'}\`} />
                  <span className="text-sm">마이크: {controls.microphone ? '켜짐' : '꺼짐'}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* 가상 플레이어 미리보기 */}
        <Card>
          <CardHeader>
            <CardTitle>플레이어 미리보기</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative">
              <div className="text-white text-center">
                {controls.playing ? <div className="space-y-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Pause className="h-6 w-6" />
                    </div>
                    <p>재생 중...</p>
                  </div> : <div className="space-y-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Play className="h-6 w-6 ml-1" />
                    </div>
                    <p>일시정지됨</p>
                  </div>}
              </div>
              
              {/* 상태 표시 아이콘들 */}
              <div className="absolute top-4 right-4 flex gap-2">
                {controls.recording && <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>}
                {controls.muted && <VolumeX className="w-5 h-5 text-white/80" />}
                {!controls.camera && <CameraOff className="w-5 h-5 text-white/80" />}
                {!controls.microphone && <MicOff className="w-5 h-5 text-white/80" />}
              </div>
              
              {/* 재생 옵션 표시 */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {controls.repeat && <Repeat className="w-4 h-4 text-white/80" />}
                {controls.shuffle && <Shuffle className="w-4 h-4 text-white/80" />}
                {controls.fullscreen && <Maximize2 className="w-4 h-4 text-white/80" />}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [features, setFeatures] = useState({
      voiceControl: false,
      highContrast: false,
      largeText: false,
      screenReader: true,
      keyboardNav: true,
      reducedMotion: false,
      autoplay: false,
      captions: true
    });
    const toggleFeature = (feature: keyof typeof features) => {
      setFeatures(prev => ({
        ...prev,
        [feature]: !prev[feature]
      }));
    };
    return <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 완전 지원 (Tab, Enter, Space)</li>
            <li>• 스크린 리더 완전 호환성 및 ARIA 속성</li>
            <li>• 토글 상태의 명확한 시각적 및 음성 피드백</li>
            <li>• 적절한 색상 대비와 포커스 표시</li>
            <li>• 상태 변경 시 실시간 안내 (aria-live)</li>
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              접근성 적용 토글
            </CardTitle>
            <CardDescription>
              모든 사용자가 쉽게 이용할 수 있도록 설계된 토글 컴포넌트입니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 시각 접근성 */}
            <div>
              <Label className="text-sm font-medium mb-3 block">시각 접근성 기능</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Eye className="h-4 w-4" />
                    <Label htmlFor="high-contrast">고대비 모드</Label>
                  </div>
                  <Toggle id="high-contrast" pressed={features.highContrast} onPressedChange={() => toggleFeature('highContrast')} aria-label="고대비 모드 전환" aria-describedby="high-contrast-desc">
                    <Eye className="h-4 w-4" />
                  </Toggle>
                </div>
                <p id="high-contrast-desc" className="sr-only">
                  고대비 모드를 활성화하여 텍스트와 배경 간의 대비를 높입니다
                </p>
                
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Type className="h-4 w-4" />
                    <Label htmlFor="large-text">큰 텍스트</Label>
                  </div>
                  <Toggle id="large-text" pressed={features.largeText} onPressedChange={() => toggleFeature('largeText')} aria-label="큰 텍스트 모드 전환" aria-describedby="large-text-desc" variant="outline">
                    <Type className="h-4 w-4" />
                  </Toggle>
                </div>
                <p id="large-text-desc" className="sr-only">
                  모든 텍스트 크기를 확대하여 가독성을 향상시킵니다
                </p>
              </div>
            </div>
            
            {/* 청각 접근성 */}
            <div>
              <Label className="text-sm font-medium mb-3 block">청각 접근성 기능</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-4 w-4" />
                    <Label htmlFor="screen-reader">스크린 리더</Label>
                  </div>
                  <Toggle id="screen-reader" pressed={features.screenReader} onPressedChange={() => toggleFeature('screenReader')} aria-label="스크린 리더 지원 전환" aria-describedby="screen-reader-desc">
                    <Volume2 className="h-4 w-4" />
                  </Toggle>
                </div>
                <p id="screen-reader-desc" className="sr-only">
                  스크린 리더 사용자를 위한 음성 안내 기능을 활성화합니다
                </p>
                
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4" />
                    <Label htmlFor="captions">자막 표시</Label>
                  </div>
                  <Toggle id="captions" pressed={features.captions} onPressedChange={() => toggleFeature('captions')} aria-label="자막 표시 전환" aria-describedby="captions-desc" variant="outline">
                    <FileText className="h-4 w-4" />
                  </Toggle>
                </div>
                <p id="captions-desc" className="sr-only">
                  동영상 및 오디오 콘텐츠에 자막을 표시합니다
                </p>
              </div>
            </div>
            
            {/* 운동 접근성 */}
            <div>
              <Label className="text-sm font-medium mb-3 block">운동 접근성 기능</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Keyboard className="h-4 w-4" />
                    <Label htmlFor="keyboard-nav">키보드 내비게이션</Label>
                  </div>
                  <Toggle id="keyboard-nav" pressed={features.keyboardNav} onPressedChange={() => toggleFeature('keyboardNav')} aria-label="키보드 내비게이션 전환" aria-describedby="keyboard-nav-desc">
                    <Keyboard className="h-4 w-4" />
                  </Toggle>
                </div>
                <p id="keyboard-nav-desc" className="sr-only">
                  마우스 없이 키보드만으로 모든 기능을 사용할 수 있습니다
                </p>
                
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Mic className="h-4 w-4" />
                    <Label htmlFor="voice-control">음성 제어</Label>
                  </div>
                  <Toggle id="voice-control" pressed={features.voiceControl} onPressedChange={() => toggleFeature('voiceControl')} aria-label="음성 제어 전환" aria-describedby="voice-control-desc" variant="outline">
                    <Mic className="h-4 w-4" />
                  </Toggle>
                </div>
                <p id="voice-control-desc" className="sr-only">
                  음성 명령으로 인터페이스를 제어할 수 있습니다
                </p>
              </div>
            </div>
            
            {/* 감각 민감성 */}
            <div>
              <Label className="text-sm font-medium mb-3 block">감각 민감성 기능</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Pause className="h-4 w-4" />
                    <Label htmlFor="reduced-motion">애니메이션 감소</Label>
                  </div>
                  <Toggle id="reduced-motion" pressed={features.reducedMotion} onPressedChange={() => toggleFeature('reducedMotion')} aria-label="애니메이션 감소 전환" aria-describedby="reduced-motion-desc">
                    <Pause className="h-4 w-4" />
                  </Toggle>
                </div>
                <p id="reduced-motion-desc" className="sr-only">
                  움직임에 민감한 사용자를 위해 애니메이션을 최소화합니다
                </p>
                
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Play className="h-4 w-4" />
                    <Label htmlFor="autoplay">자동 재생 방지</Label>
                  </div>
                  <Toggle id="autoplay" pressed={features.autoplay} onPressedChange={() => toggleFeature('autoplay')} aria-label="자동 재생 방지 전환" aria-describedby="autoplay-desc" variant="outline">
                    <Play className="h-4 w-4" />
                  </Toggle>
                </div>
                <p id="autoplay-desc" className="sr-only">
                  미디어 콘텐츠의 자동 재생을 방지합니다
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 실시간 피드백 */}
        <div className="p-4 border rounded-lg" aria-live="polite" aria-label="접근성 설정 상태">
          <h4 className="font-medium mb-2">현재 활성화된 접근성 기능</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(features).filter(([_, enabled]) => enabled).map(([feature, _]) => <Badge key={feature} variant="default">
                  {feature === 'voiceControl' && '음성 제어'}
                  {feature === 'highContrast' && '고대비 모드'}
                  {feature === 'largeText' && '큰 텍스트'}
                  {feature === 'screenReader' && '스크린 리더'}
                  {feature === 'keyboardNav' && '키보드 내비게이션'}
                  {feature === 'reducedMotion' && '애니메이션 감소'}
                  {feature === 'autoplay' && '자동 재생 방지'}
                  {feature === 'captions' && '자막 표시'}
                </Badge>)}
            {Object.values(features).every(value => !value) && <span className="text-muted-foreground">활성화된 기능이 없습니다</span>}
          </div>
        </div>

        {/* 접근성 가이드라인 */}
        <Card>
          <CardHeader>
            <CardTitle>토글 접근성 가이드라인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>명확한 레이블과 설명</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 ARIA 상태 속성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>키보드 접근 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>상태 변경 실시간 안내</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>충분한 클릭 영역 (44px 이상)</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>색상만으로 상태 구분 금지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>상태 변경 시 예상치 못한 포커스 이동</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>중요한 기능의 의도치 않은 활성화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>접근성 기능 끄기 어려움</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900">키보드 사용법</h5>
              <div className="text-sm text-blue-800 mt-2 space-y-1">
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Tab</kbd>: 다음 토글로 이동</p>
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Shift + Tab</kbd>: 이전 토글로 이동</p>
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Space</kbd> 또는 <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Enter</kbd>: 토글 활성화/비활성화</p>
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Esc</kbd>: 포커스 해제</p>
              </div>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '토글 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};export{j as AccessibilityDemo,u as Default,b as MediaControls,f as SystemSettings,N as TextFormatting,Ie as default};
