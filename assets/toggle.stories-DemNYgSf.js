import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{r as p}from"./iframe-BdMZbwUm.js";import{T as a,B as U,I as G,U as J}from"./toggle-C1-Ds3La.js";import{C as d,a as c,b as n,c as h,d as o}from"./card-BgCPKrWA.js";import{B as q}from"./badge-B3XW2gOL.js";import{L as t}from"./label-DOMLoIND.js";import{S as C}from"./star-C0TOQxsF.js";import{H as T}from"./heart-BFGUhVwJ.js";import{B as S}from"./bookmark-BY9QLeCX.js";import{M as F}from"./moon-PJeOy8o_.js";import{S as L}from"./sun-Bs2gpW7y.js";import{E as g}from"./eye-Ch3FN2Wj.js";import{C as Q}from"./check-KbtGvtZf.js";import{X as Y}from"./x-BlIlgLCT.js";import{B as M}from"./bell-D52r2PyL.js";import{B,a as z,M as k,b as H}from"./mic-BilP2Ry6.js";import{V as x}from"./volume-2-BaEWJYUI.js";import{V as v}from"./volume-x-CT_Q9iZv.js";import{W as O}from"./wifi-DwfgyjwB.js";import{W as D,B as R}from"./wifi-off-RHq4hSPk.js";import{M as E}from"./map-pin-CqvT8KEt.js";import{B as V}from"./battery-iHbsW3pV.js";import{P as w}from"./pause-H8-UOUkr.js";import{P as y}from"./play-xKUj77R-.js";import{R as W,S as I}from"./shuffle-4iDeAuO2.js";import{c as P}from"./createLucideIcon-CdHLrrBb.js";import{C as Z}from"./camera-COarpcgO.js";import{T as _}from"./type-DnJdXaPb.js";import{F as $}from"./file-text-DmRPTJWd.js";import{K as A}from"./keyboard-Bocrq9S2.js";import"./index-CQPQ-BqZ.js";import"./index-BbsuTJMv.js";import"./index-BMTS4V62.js";import"./index-RnXzWidx.js";import"./index-COOYaFQ0.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";/**
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
 */const ae=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],re=P("minimize-2",ae),Ie={title:"UI/Base/Toggle",component:a,parameters:{layout:"centered",docs:{description:{component:"켜기/끄기 상태를 전환하는 토글 버튼 컴포넌트입니다. 다양한 크기와 스타일 변형을 지원합니다."}}},tags:["autodocs"],argTypes:{pressed:{description:"토글 상태 (눌림/안눌림)",control:"boolean"},variant:{description:"스타일 변형",control:"select",options:["default","outline"]},size:{description:"크기",control:"select",options:["default","sm","lg"]},disabled:{description:"비활성화 상태",control:"boolean"}}},u={render:()=>{const[s,m]=p.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"기본 토글"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{pressed:s,onPressedChange:m,"aria-label":"굵게 만들기",children:e.jsx(U,{className:"h-4 w-4"})}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:["상태: ",s?"활성":"비활성"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"text-sm font-medium",children:"다양한 크기"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm","aria-label":"작은 토글",children:e.jsx(C,{className:"h-3 w-3"})}),e.jsx(a,{size:"default","aria-label":"기본 토글",children:e.jsx(C,{className:"h-4 w-4"})}),e.jsx(a,{size:"lg","aria-label":"큰 토글",children:e.jsx(C,{className:"h-5 w-5"})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"text-sm font-medium",children:"스타일 변형"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"default","aria-label":"기본 스타일",children:e.jsx(T,{className:"h-4 w-4"})}),e.jsx(a,{variant:"outline","aria-label":"아웃라인 스타일",children:e.jsx(T,{className:"h-4 w-4"})}),e.jsx(a,{variant:"outline",pressed:!0,"aria-label":"눌린 아웃라인",children:e.jsx(T,{className:"h-4 w-4 fill-current"})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"text-sm font-medium",children:"비활성화 상태"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{disabled:!0,"aria-label":"비활성화됨",children:e.jsx(S,{className:"h-4 w-4"})}),e.jsx(a,{disabled:!0,pressed:!0,"aria-label":"눌린 상태로 비활성화됨",children:e.jsx(S,{className:"h-4 w-4 fill-current"})})]})]})]})]})}},N={render:()=>{const[s,m]=p.useState({bold:!1,italic:!1,underline:!1}),r=l=>{m(i=>({...i,[l]:!i[l]}))};return e.jsxs("div",{className:"w-full max-w-2xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"텍스트 서식 도구"}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"글꼴 서식"}),e.jsx(h,{children:"텍스트에 적용할 서식을 선택하세요"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{pressed:s.bold,onPressedChange:()=>r("bold"),"aria-label":"굵게","aria-pressed":s.bold,children:e.jsx(U,{className:"h-4 w-4"})}),e.jsx(a,{pressed:s.italic,onPressedChange:()=>r("italic"),"aria-label":"기울임","aria-pressed":s.italic,children:e.jsx(G,{className:"h-4 w-4"})}),e.jsx(a,{pressed:s.underline,onPressedChange:()=>r("underline"),"aria-label":"밑줄","aria-pressed":s.underline,children:e.jsx(J,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"mt-4 p-4 border rounded-lg bg-muted/30",children:[e.jsx("h4",{className:"font-medium mb-2",children:"미리보기"}),e.jsx("p",{className:"text-sm",style:{fontWeight:s.bold?"bold":"normal",fontStyle:s.italic?"italic":"normal",textDecoration:s.underline?"underline":"none"},children:"이 텍스트에 선택한 서식이 적용됩니다. 굵게, 기울임, 밑줄 효과를 실시간으로 확인할 수 있습니다."}),e.jsxs("div",{className:"mt-2 text-xs text-muted-foreground",children:["활성 서식: ",Object.entries(s).filter(([l,i])=>i).map(([l])=>l).join(", ")||"없음"]})]})]})]})]})}},f={render:()=>{const[s,m]=p.useState({darkMode:!1,notifications:!0,wifi:!0,bluetooth:!1,sound:!0,location:!1,autoSave:!0,powerSaver:!1}),r=l=>{m(i=>({...i,[l]:!i[l]}))};return e.jsxs("div",{className:"w-full max-w-3xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"시스템 설정"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"화면 설정"}),e.jsx(h,{children:"디스플레이와 테마 설정"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.darkMode?e.jsx(F,{className:"h-4 w-4"}):e.jsx(L,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"dark-mode",children:"다크 모드"})]}),e.jsx(a,{id:"dark-mode",pressed:s.darkMode,onPressedChange:()=>r("darkMode"),"aria-label":"다크 모드 전환",children:s.darkMode?e.jsx(F,{className:"h-4 w-4"}):e.jsx(L,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"auto-save",children:"자동 저장"})]}),e.jsx(a,{id:"auto-save",pressed:s.autoSave,onPressedChange:()=>r("autoSave"),"aria-label":"자동 저장 전환",variant:"outline",children:s.autoSave?e.jsx(Q,{className:"h-4 w-4"}):e.jsx(Y,{className:"h-4 w-4"})})]})]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"알림 설정"}),e.jsx(h,{children:"알림과 사운드 설정"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.notifications?e.jsx(M,{className:"h-4 w-4"}):e.jsx(B,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"notifications",children:"알림"})]}),e.jsx(a,{id:"notifications",pressed:s.notifications,onPressedChange:()=>r("notifications"),"aria-label":"알림 전환",size:"sm",children:s.notifications?e.jsx(M,{className:"h-3 w-3"}):e.jsx(B,{className:"h-3 w-3"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.sound?e.jsx(x,{className:"h-4 w-4"}):e.jsx(v,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"sound",children:"소리"})]}),e.jsx(a,{id:"sound",pressed:s.sound,onPressedChange:()=>r("sound"),"aria-label":"소리 전환",size:"sm",children:s.sound?e.jsx(x,{className:"h-3 w-3"}):e.jsx(v,{className:"h-3 w-3"})})]})]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"연결 설정"}),e.jsx(h,{children:"무선 연결 및 네트워크"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.wifi?e.jsx(O,{className:"h-4 w-4"}):e.jsx(D,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"wifi",children:"Wi-Fi"})]}),e.jsx(a,{id:"wifi",pressed:s.wifi,onPressedChange:()=>r("wifi"),"aria-label":"Wi-Fi 전환",children:s.wifi?e.jsx(O,{className:"h-4 w-4"}):e.jsx(D,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(z,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"bluetooth",children:"Bluetooth"})]}),e.jsx(a,{id:"bluetooth",pressed:s.bluetooth,onPressedChange:()=>r("bluetooth"),"aria-label":"Bluetooth 전환",variant:"outline",children:e.jsx(z,{className:"h-4 w-4"})})]})]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"개인정보 설정"}),e.jsx(h,{children:"위치 및 보안 설정"})]}),e.jsxs(o,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(E,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"location",children:"위치 서비스"})]}),e.jsx(a,{id:"location",pressed:s.location,onPressedChange:()=>r("location"),"aria-label":"위치 서비스 전환",size:"lg",children:e.jsx(E,{className:"h-5 w-5"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.powerSaver?e.jsx(R,{className:"h-4 w-4"}):e.jsx(V,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"power-saver",children:"절전 모드"})]}),e.jsx(a,{id:"power-saver",pressed:s.powerSaver,onPressedChange:()=>r("powerSaver"),"aria-label":"절전 모드 전환",size:"lg",children:s.powerSaver?e.jsx(R,{className:"h-5 w-5"}):e.jsx(V,{className:"h-5 w-5"})})]})]})]})]}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(n,{children:"설정 요약"})}),e.jsx(o,{children:e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:Object.entries(s).map(([l,i])=>e.jsx("div",{className:"text-center",children:e.jsxs(q,{variant:i?"default":"secondary",className:"w-full",children:[l,": ",i?"켜짐":"꺼짐"]})},l))})})]})]})}},b={render:()=>{const[s,m]=p.useState({playing:!1,muted:!1,recording:!1,camera:!1,microphone:!1,repeat:!1,shuffle:!1,fullscreen:!1}),r=l=>{m(i=>({...i,[l]:!i[l]}))};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"미디어 컨트롤"}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"동영상 플레이어"}),e.jsx(h,{children:"재생, 녹화, 설정 등 모든 미디어 기능을 제어하세요"})]}),e.jsxs(o,{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"재생 컨트롤"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{pressed:s.playing,onPressedChange:()=>r("playing"),"aria-label":s.playing?"일시정지":"재생",size:"lg",children:s.playing?e.jsx(w,{className:"h-5 w-5"}):e.jsx(y,{className:"h-5 w-5"})}),e.jsx(a,{pressed:s.muted,onPressedChange:()=>r("muted"),"aria-label":s.muted?"음소거 해제":"음소거",variant:"outline",children:s.muted?e.jsx(v,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"})}),e.jsx(a,{pressed:s.repeat,onPressedChange:()=>r("repeat"),"aria-label":"반복 재생",variant:"outline",size:"sm",children:e.jsx(W,{className:"h-3 w-3"})}),e.jsx(a,{pressed:s.shuffle,onPressedChange:()=>r("shuffle"),"aria-label":"셔플",variant:"outline",size:"sm",children:e.jsx(I,{className:"h-3 w-3"})}),e.jsx(a,{pressed:s.fullscreen,onPressedChange:()=>r("fullscreen"),"aria-label":"전체화면",variant:"outline",children:s.fullscreen?e.jsx(re,{className:"h-4 w-4"}):e.jsx(K,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"녹화 및 스트리밍"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{pressed:s.recording,onPressedChange:()=>r("recording"),"aria-label":s.recording?"녹화 중지":"녹화 시작",variant:s.recording?"default":"outline",className:s.recording?"bg-red-500 hover:bg-red-600":"",children:e.jsx("div",{className:`h-3 w-3 rounded-full ${s.recording?"bg-white":"bg-red-500"}`})}),e.jsx(a,{pressed:s.camera,onPressedChange:()=>r("camera"),"aria-label":s.camera?"카메라 끄기":"카메라 켜기",variant:"outline",children:s.camera?e.jsx(Z,{className:"h-4 w-4"}):e.jsx(X,{className:"h-4 w-4"})}),e.jsx(a,{pressed:s.microphone,onPressedChange:()=>r("microphone"),"aria-label":s.microphone?"마이크 끄기":"마이크 켜기",variant:"outline",children:s.microphone?e.jsx(k,{className:"h-4 w-4"}):e.jsx(H,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-muted/30 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-3",children:"현재 상태"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s.playing?"bg-green-500":"bg-gray-400"}`}),e.jsxs("span",{className:"text-sm",children:["재생: ",s.playing?"중":"정지"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s.recording?"bg-red-500":"bg-gray-400"}`}),e.jsxs("span",{className:"text-sm",children:["녹화: ",s.recording?"중":"대기"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s.camera?"bg-blue-500":"bg-gray-400"}`}),e.jsxs("span",{className:"text-sm",children:["카메라: ",s.camera?"켜짐":"꺼짐"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${s.microphone?"bg-orange-500":"bg-gray-400"}`}),e.jsxs("span",{className:"text-sm",children:["마이크: ",s.microphone?"켜짐":"꺼짐"]})]})]})]})]})]}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(n,{children:"플레이어 미리보기"})}),e.jsx(o,{children:e.jsxs("div",{className:"aspect-video bg-black rounded-lg flex items-center justify-center relative",children:[e.jsx("div",{className:"text-white text-center",children:s.playing?e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto",children:e.jsx(w,{className:"h-6 w-6"})}),e.jsx("p",{children:"재생 중..."})]}):e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto",children:e.jsx(y,{className:"h-6 w-6 ml-1"})}),e.jsx("p",{children:"일시정지됨"})]})}),e.jsxs("div",{className:"absolute top-4 right-4 flex gap-2",children:[s.recording&&e.jsx("div",{className:"w-6 h-6 bg-red-500 rounded-full flex items-center justify-center",children:e.jsx("div",{className:"w-3 h-3 bg-white rounded-full"})}),s.muted&&e.jsx(v,{className:"w-5 h-5 text-white/80"}),!s.camera&&e.jsx(X,{className:"w-5 h-5 text-white/80"}),!s.microphone&&e.jsx(H,{className:"w-5 h-5 text-white/80"})]}),e.jsxs("div",{className:"absolute bottom-4 left-4 flex gap-2",children:[s.repeat&&e.jsx(W,{className:"w-4 h-4 text-white/80"}),s.shuffle&&e.jsx(I,{className:"w-4 h-4 text-white/80"}),s.fullscreen&&e.jsx(K,{className:"w-4 h-4 text-white/80"})]})]})})]})]})}},j={render:()=>{const[s,m]=p.useState({voiceControl:!1,highContrast:!1,largeText:!1,screenReader:!0,keyboardNav:!0,reducedMotion:!1,autoplay:!1,captions:!0}),r=l=>{m(i=>({...i,[l]:!i[l]}))};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 완전 지원 (Tab, Enter, Space)"}),e.jsx("li",{children:"• 스크린 리더 완전 호환성 및 ARIA 속성"}),e.jsx("li",{children:"• 토글 상태의 명확한 시각적 및 음성 피드백"}),e.jsx("li",{children:"• 적절한 색상 대비와 포커스 표시"}),e.jsx("li",{children:"• 상태 변경 시 실시간 안내 (aria-live)"})]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsxs(n,{className:"flex items-center gap-2",children:[e.jsx(g,{className:"h-5 w-5"}),"접근성 적용 토글"]}),e.jsx(h,{children:"모든 사용자가 쉽게 이용할 수 있도록 설계된 토글 컴포넌트입니다"})]}),e.jsxs(o,{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"시각 접근성 기능"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"high-contrast",children:"고대비 모드"})]}),e.jsx(a,{id:"high-contrast",pressed:s.highContrast,onPressedChange:()=>r("highContrast"),"aria-label":"고대비 모드 전환","aria-describedby":"high-contrast-desc",children:e.jsx(g,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"high-contrast-desc",className:"sr-only",children:"고대비 모드를 활성화하여 텍스트와 배경 간의 대비를 높입니다"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(_,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"large-text",children:"큰 텍스트"})]}),e.jsx(a,{id:"large-text",pressed:s.largeText,onPressedChange:()=>r("largeText"),"aria-label":"큰 텍스트 모드 전환","aria-describedby":"large-text-desc",variant:"outline",children:e.jsx(_,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"large-text-desc",className:"sr-only",children:"모든 텍스트 크기를 확대하여 가독성을 향상시킵니다"})]})]}),e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"청각 접근성 기능"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"screen-reader",children:"스크린 리더"})]}),e.jsx(a,{id:"screen-reader",pressed:s.screenReader,onPressedChange:()=>r("screenReader"),"aria-label":"스크린 리더 지원 전환","aria-describedby":"screen-reader-desc",children:e.jsx(x,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"screen-reader-desc",className:"sr-only",children:"스크린 리더 사용자를 위한 음성 안내 기능을 활성화합니다"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx($,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"captions",children:"자막 표시"})]}),e.jsx(a,{id:"captions",pressed:s.captions,onPressedChange:()=>r("captions"),"aria-label":"자막 표시 전환","aria-describedby":"captions-desc",variant:"outline",children:e.jsx($,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"captions-desc",className:"sr-only",children:"동영상 및 오디오 콘텐츠에 자막을 표시합니다"})]})]}),e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"운동 접근성 기능"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"keyboard-nav",children:"키보드 내비게이션"})]}),e.jsx(a,{id:"keyboard-nav",pressed:s.keyboardNav,onPressedChange:()=>r("keyboardNav"),"aria-label":"키보드 내비게이션 전환","aria-describedby":"keyboard-nav-desc",children:e.jsx(A,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"keyboard-nav-desc",className:"sr-only",children:"마우스 없이 키보드만으로 모든 기능을 사용할 수 있습니다"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(k,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"voice-control",children:"음성 제어"})]}),e.jsx(a,{id:"voice-control",pressed:s.voiceControl,onPressedChange:()=>r("voiceControl"),"aria-label":"음성 제어 전환","aria-describedby":"voice-control-desc",variant:"outline",children:e.jsx(k,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"voice-control-desc",className:"sr-only",children:"음성 명령으로 인터페이스를 제어할 수 있습니다"})]})]}),e.jsxs("div",{children:[e.jsx(t,{className:"text-sm font-medium mb-3 block",children:"감각 민감성 기능"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"reduced-motion",children:"애니메이션 감소"})]}),e.jsx(a,{id:"reduced-motion",pressed:s.reducedMotion,onPressedChange:()=>r("reducedMotion"),"aria-label":"애니메이션 감소 전환","aria-describedby":"reduced-motion-desc",children:e.jsx(w,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"reduced-motion-desc",className:"sr-only",children:"움직임에 민감한 사용자를 위해 애니메이션을 최소화합니다"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(t,{htmlFor:"autoplay",children:"자동 재생 방지"})]}),e.jsx(a,{id:"autoplay",pressed:s.autoplay,onPressedChange:()=>r("autoplay"),"aria-label":"자동 재생 방지 전환","aria-describedby":"autoplay-desc",variant:"outline",children:e.jsx(y,{className:"h-4 w-4"})})]}),e.jsx("p",{id:"autoplay-desc",className:"sr-only",children:"미디어 콘텐츠의 자동 재생을 방지합니다"})]})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg","aria-live":"polite","aria-label":"접근성 설정 상태",children:[e.jsx("h4",{className:"font-medium mb-2",children:"현재 활성화된 접근성 기능"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[Object.entries(s).filter(([l,i])=>i).map(([l,i])=>e.jsxs(q,{variant:"default",children:[l==="voiceControl"&&"음성 제어",l==="highContrast"&&"고대비 모드",l==="largeText"&&"큰 텍스트",l==="screenReader"&&"스크린 리더",l==="keyboardNav"&&"키보드 내비게이션",l==="reducedMotion"&&"애니메이션 감소",l==="autoplay"&&"자동 재생 방지",l==="captions"&&"자막 표시"]},l)),Object.values(s).every(l=>!l)&&e.jsx("span",{className:"text-muted-foreground",children:"활성화된 기능이 없습니다"})]})]}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(n,{children:"토글 접근성 가이드라인"})}),e.jsx(o,{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-green-600",children:"✅ 권장사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"명확한 레이블과 설명"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"적절한 ARIA 상태 속성"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"키보드 접근 가능"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"상태 변경 실시간 안내"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"충분한 클릭 영역 (44px 이상)"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-orange-600",children:"⚠️ 주의사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"색상만으로 상태 구분 금지"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"상태 변경 시 예상치 못한 포커스 이동"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"중요한 기능의 의도치 않은 활성화"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"접근성 기능 끄기 어려움"})]})]})]})]})})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(g,{className:"h-5 w-5 text-blue-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-900",children:"키보드 사용법"}),e.jsxs("div",{className:"text-sm text-blue-800 mt-2 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Tab"}),": 다음 토글로 이동"]}),e.jsxs("p",{children:["• ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Shift + Tab"}),": 이전 토글로 이동"]}),e.jsxs("p",{children:["• ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Space"})," 또는 ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Enter"}),": 토글 활성화/비활성화"]}),e.jsxs("p",{children:["• ",e.jsx("kbd",{className:"px-1 py-0.5 bg-blue-200 rounded text-xs",children:"Esc"}),": 포커스 해제"]})]})]})]})})]})},parameters:{docs:{description:{story:"토글 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다."}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isPressed, setIsPressed] = useState(false);
    return <div className="space-y-4">\r
        <h3 className="text-lg font-semibold mb-4">기본 토글</h3>\r
        <div className="space-y-6">\r
          <div className="flex items-center gap-4">\r
            <Toggle pressed={isPressed} onPressedChange={setIsPressed} aria-label="굵게 만들기">\r
              <Bold className="h-4 w-4" />\r
            </Toggle>\r
            <span className="text-sm text-muted-foreground">\r
              상태: {isPressed ? '활성' : '비활성'}\r
            </span>\r
          </div>\r
\r
          <div className="space-y-2">\r
            <Label className="text-sm font-medium">다양한 크기</Label>\r
            <div className="flex items-center gap-2">\r
              <Toggle size="sm" aria-label="작은 토글">\r
                <Star className="h-3 w-3" />\r
              </Toggle>\r
              <Toggle size="default" aria-label="기본 토글">\r
                <Star className="h-4 w-4" />\r
              </Toggle>\r
              <Toggle size="lg" aria-label="큰 토글">\r
                <Star className="h-5 w-5" />\r
              </Toggle>\r
            </div>\r
          </div>\r
\r
          <div className="space-y-2">\r
            <Label className="text-sm font-medium">스타일 변형</Label>\r
            <div className="flex items-center gap-2">\r
              <Toggle variant="default" aria-label="기본 스타일">\r
                <Heart className="h-4 w-4" />\r
              </Toggle>\r
              <Toggle variant="outline" aria-label="아웃라인 스타일">\r
                <Heart className="h-4 w-4" />\r
              </Toggle>\r
              <Toggle variant="outline" pressed aria-label="눌린 아웃라인">\r
                <Heart className="h-4 w-4 fill-current" />\r
              </Toggle>\r
            </div>\r
          </div>\r
\r
          <div className="space-y-2">\r
            <Label className="text-sm font-medium">비활성화 상태</Label>\r
            <div className="flex items-center gap-2">\r
              <Toggle disabled aria-label="비활성화됨">\r
                <Bookmark className="h-4 w-4" />\r
              </Toggle>\r
              <Toggle disabled pressed aria-label="눌린 상태로 비활성화됨">\r
                <Bookmark className="h-4 w-4 fill-current" />\r
              </Toggle>\r
            </div>\r
          </div>\r
        </div>\r
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
    return <div className="w-full max-w-2xl space-y-6">\r
        <h3 className="text-lg font-semibold mb-4">텍스트 서식 도구</h3>\r
        \r
        <Card>\r
          <CardHeader>\r
            <CardTitle>글꼴 서식</CardTitle>\r
            <CardDescription>\r
              텍스트에 적용할 서식을 선택하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-4">\r
            <div className="flex items-center gap-2">\r
              <Toggle pressed={formatting.bold} onPressedChange={() => toggleFormat('bold')} aria-label="굵게" aria-pressed={formatting.bold}>\r
                <Bold className="h-4 w-4" />\r
              </Toggle>\r
              <Toggle pressed={formatting.italic} onPressedChange={() => toggleFormat('italic')} aria-label="기울임" aria-pressed={formatting.italic}>\r
                <Italic className="h-4 w-4" />\r
              </Toggle>\r
              <Toggle pressed={formatting.underline} onPressedChange={() => toggleFormat('underline')} aria-label="밑줄" aria-pressed={formatting.underline}>\r
                <Underline className="h-4 w-4" />\r
              </Toggle>\r
            </div>\r
            \r
            <div className="mt-4 p-4 border rounded-lg bg-muted/30">\r
              <h4 className="font-medium mb-2">미리보기</h4>\r
              <p className="text-sm" style={{
              fontWeight: formatting.bold ? 'bold' : 'normal',
              fontStyle: formatting.italic ? 'italic' : 'normal',
              textDecoration: formatting.underline ? 'underline' : 'none'
            }}>\r
                이 텍스트에 선택한 서식이 적용됩니다. \r
                굵게, 기울임, 밑줄 효과를 실시간으로 확인할 수 있습니다.\r
              </p>\r
              <div className="mt-2 text-xs text-muted-foreground">\r
                활성 서식: {Object.entries(formatting).filter(([_, value]) => value).map(([key]) => key).join(', ') || '없음'}\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
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
    return <div className="w-full max-w-3xl space-y-6">\r
        <h3 className="text-lg font-semibold mb-4">시스템 설정</h3>\r
        \r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
          {/* 화면 설정 */}\r
          <Card>\r
            <CardHeader>\r
              <CardTitle>화면 설정</CardTitle>\r
              <CardDescription>디스플레이와 테마 설정</CardDescription>\r
            </CardHeader>\r
            <CardContent className="space-y-4">\r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-3">\r
                  {settings.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}\r
                  <Label htmlFor="dark-mode">다크 모드</Label>\r
                </div>\r
                <Toggle id="dark-mode" pressed={settings.darkMode} onPressedChange={() => toggleSetting('darkMode')} aria-label="다크 모드 전환">\r
                  {settings.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}\r
                </Toggle>\r
              </div>\r
              \r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-3">\r
                  <Eye className="h-4 w-4" />\r
                  <Label htmlFor="auto-save">자동 저장</Label>\r
                </div>\r
                <Toggle id="auto-save" pressed={settings.autoSave} onPressedChange={() => toggleSetting('autoSave')} aria-label="자동 저장 전환" variant="outline">\r
                  {settings.autoSave ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}\r
                </Toggle>\r
              </div>\r
            </CardContent>\r
          </Card>\r
          \r
          {/* 알림 설정 */}\r
          <Card>\r
            <CardHeader>\r
              <CardTitle>알림 설정</CardTitle>\r
              <CardDescription>알림과 사운드 설정</CardDescription>\r
            </CardHeader>\r
            <CardContent className="space-y-4">\r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-3">\r
                  {settings.notifications ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}\r
                  <Label htmlFor="notifications">알림</Label>\r
                </div>\r
                <Toggle id="notifications" pressed={settings.notifications} onPressedChange={() => toggleSetting('notifications')} aria-label="알림 전환" size="sm">\r
                  {settings.notifications ? <Bell className="h-3 w-3" /> : <BellOff className="h-3 w-3" />}\r
                </Toggle>\r
              </div>\r
              \r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-3">\r
                  {settings.sound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}\r
                  <Label htmlFor="sound">소리</Label>\r
                </div>\r
                <Toggle id="sound" pressed={settings.sound} onPressedChange={() => toggleSetting('sound')} aria-label="소리 전환" size="sm">\r
                  {settings.sound ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}\r
                </Toggle>\r
              </div>\r
            </CardContent>\r
          </Card>\r
          \r
          {/* 연결 설정 */}\r
          <Card>\r
            <CardHeader>\r
              <CardTitle>연결 설정</CardTitle>\r
              <CardDescription>무선 연결 및 네트워크</CardDescription>\r
            </CardHeader>\r
            <CardContent className="space-y-4">\r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-3">\r
                  {settings.wifi ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}\r
                  <Label htmlFor="wifi">Wi-Fi</Label>\r
                </div>\r
                <Toggle id="wifi" pressed={settings.wifi} onPressedChange={() => toggleSetting('wifi')} aria-label="Wi-Fi 전환">\r
                  {settings.wifi ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}\r
                </Toggle>\r
              </div>\r
              \r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-3">\r
                  <Bluetooth className="h-4 w-4" />\r
                  <Label htmlFor="bluetooth">Bluetooth</Label>\r
                </div>\r
                <Toggle id="bluetooth" pressed={settings.bluetooth} onPressedChange={() => toggleSetting('bluetooth')} aria-label="Bluetooth 전환" variant="outline">\r
                  <Bluetooth className="h-4 w-4" />\r
                </Toggle>\r
              </div>\r
            </CardContent>\r
          </Card>\r
          \r
          {/* 개인정보 설정 */}\r
          <Card>\r
            <CardHeader>\r
              <CardTitle>개인정보 설정</CardTitle>\r
              <CardDescription>위치 및 보안 설정</CardDescription>\r
            </CardHeader>\r
            <CardContent className="space-y-4">\r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-3">\r
                  <MapPin className="h-4 w-4" />\r
                  <Label htmlFor="location">위치 서비스</Label>\r
                </div>\r
                <Toggle id="location" pressed={settings.location} onPressedChange={() => toggleSetting('location')} aria-label="위치 서비스 전환" size="lg">\r
                  <MapPin className="h-5 w-5" />\r
                </Toggle>\r
              </div>\r
              \r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-3">\r
                  {settings.powerSaver ? <BatteryLow className="h-4 w-4" /> : <Battery className="h-4 w-4" />}\r
                  <Label htmlFor="power-saver">절전 모드</Label>\r
                </div>\r
                <Toggle id="power-saver" pressed={settings.powerSaver} onPressedChange={() => toggleSetting('powerSaver')} aria-label="절전 모드 전환" size="lg">\r
                  {settings.powerSaver ? <BatteryLow className="h-5 w-5" /> : <Battery className="h-5 w-5" />}\r
                </Toggle>\r
              </div>\r
            </CardContent>\r
          </Card>\r
        </div>\r
        \r
        {/* 설정 요약 */}\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>설정 요약</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">\r
              {Object.entries(settings).map(([key, value]) => <div key={key} className="text-center">\r
                  <Badge variant={value ? "default" : "secondary"} className="w-full">\r
                    {key}: {value ? '켜짐' : '꺼짐'}\r
                  </Badge>\r
                </div>)}\r
            </div>\r
          </CardContent>\r
        </Card>\r
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
    return <div className="w-full max-w-4xl space-y-6">\r
        <h3 className="text-lg font-semibold mb-4">미디어 컨트롤</h3>\r
        \r
        <Card>\r
          <CardHeader>\r
            <CardTitle>동영상 플레이어</CardTitle>\r
            <CardDescription>\r
              재생, 녹화, 설정 등 모든 미디어 기능을 제어하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-6">\r
            {/* 기본 재생 컨트롤 */}\r
            <div>\r
              <Label className="text-sm font-medium mb-3 block">재생 컨트롤</Label>\r
              <div className="flex items-center gap-3">\r
                <Toggle pressed={controls.playing} onPressedChange={() => toggleControl('playing')} aria-label={controls.playing ? "일시정지" : "재생"} size="lg">\r
                  {controls.playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}\r
                </Toggle>\r
                \r
                <Toggle pressed={controls.muted} onPressedChange={() => toggleControl('muted')} aria-label={controls.muted ? "음소거 해제" : "음소거"} variant="outline">\r
                  {controls.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}\r
                </Toggle>\r
                \r
                <Toggle pressed={controls.repeat} onPressedChange={() => toggleControl('repeat')} aria-label="반복 재생" variant="outline" size="sm">\r
                  <Repeat className="h-3 w-3" />\r
                </Toggle>\r
                \r
                <Toggle pressed={controls.shuffle} onPressedChange={() => toggleControl('shuffle')} aria-label="셔플" variant="outline" size="sm">\r
                  <Shuffle className="h-3 w-3" />\r
                </Toggle>\r
                \r
                <Toggle pressed={controls.fullscreen} onPressedChange={() => toggleControl('fullscreen')} aria-label="전체화면" variant="outline">\r
                  {controls.fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}\r
                </Toggle>\r
              </div>\r
            </div>\r
            \r
            {/* 녹화 컨트롤 */}\r
            <div>\r
              <Label className="text-sm font-medium mb-3 block">녹화 및 스트리밍</Label>\r
              <div className="flex items-center gap-3">\r
                <Toggle pressed={controls.recording} onPressedChange={() => toggleControl('recording')} aria-label={controls.recording ? "녹화 중지" : "녹화 시작"} variant={controls.recording ? "default" : "outline"} className={controls.recording ? "bg-red-500 hover:bg-red-600" : ""}>\r
                  <div className={\`h-3 w-3 rounded-full \${controls.recording ? 'bg-white' : 'bg-red-500'}\`} />\r
                </Toggle>\r
                \r
                <Toggle pressed={controls.camera} onPressedChange={() => toggleControl('camera')} aria-label={controls.camera ? "카메라 끄기" : "카메라 켜기"} variant="outline">\r
                  {controls.camera ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}\r
                </Toggle>\r
                \r
                <Toggle pressed={controls.microphone} onPressedChange={() => toggleControl('microphone')} aria-label={controls.microphone ? "마이크 끄기" : "마이크 켜기"} variant="outline">\r
                  {controls.microphone ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}\r
                </Toggle>\r
              </div>\r
            </div>\r
            \r
            {/* 상태 표시 */}\r
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">\r
              <h4 className="font-medium mb-3">현재 상태</h4>\r
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">\r
                <div className="flex items-center gap-2">\r
                  <div className={\`w-2 h-2 rounded-full \${controls.playing ? 'bg-green-500' : 'bg-gray-400'}\`} />\r
                  <span className="text-sm">재생: {controls.playing ? '중' : '정지'}</span>\r
                </div>\r
                <div className="flex items-center gap-2">\r
                  <div className={\`w-2 h-2 rounded-full \${controls.recording ? 'bg-red-500' : 'bg-gray-400'}\`} />\r
                  <span className="text-sm">녹화: {controls.recording ? '중' : '대기'}</span>\r
                </div>\r
                <div className="flex items-center gap-2">\r
                  <div className={\`w-2 h-2 rounded-full \${controls.camera ? 'bg-blue-500' : 'bg-gray-400'}\`} />\r
                  <span className="text-sm">카메라: {controls.camera ? '켜짐' : '꺼짐'}</span>\r
                </div>\r
                <div className="flex items-center gap-2">\r
                  <div className={\`w-2 h-2 rounded-full \${controls.microphone ? 'bg-orange-500' : 'bg-gray-400'}\`} />\r
                  <span className="text-sm">마이크: {controls.microphone ? '켜짐' : '꺼짐'}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
        \r
        {/* 가상 플레이어 미리보기 */}\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>플레이어 미리보기</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative">\r
              <div className="text-white text-center">\r
                {controls.playing ? <div className="space-y-2">\r
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">\r
                      <Pause className="h-6 w-6" />\r
                    </div>\r
                    <p>재생 중...</p>\r
                  </div> : <div className="space-y-2">\r
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">\r
                      <Play className="h-6 w-6 ml-1" />\r
                    </div>\r
                    <p>일시정지됨</p>\r
                  </div>}\r
              </div>\r
              \r
              {/* 상태 표시 아이콘들 */}\r
              <div className="absolute top-4 right-4 flex gap-2">\r
                {controls.recording && <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">\r
                    <div className="w-3 h-3 bg-white rounded-full" />\r
                  </div>}\r
                {controls.muted && <VolumeX className="w-5 h-5 text-white/80" />}\r
                {!controls.camera && <CameraOff className="w-5 h-5 text-white/80" />}\r
                {!controls.microphone && <MicOff className="w-5 h-5 text-white/80" />}\r
              </div>\r
              \r
              {/* 재생 옵션 표시 */}\r
              <div className="absolute bottom-4 left-4 flex gap-2">\r
                {controls.repeat && <Repeat className="w-4 h-4 text-white/80" />}\r
                {controls.shuffle && <Shuffle className="w-4 h-4 text-white/80" />}\r
                {controls.fullscreen && <Maximize2 className="w-4 h-4 text-white/80" />}\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
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
    return <div className="w-full max-w-4xl space-y-6">\r
        <div className="p-4 border rounded-lg">\r
          <h3 className="font-semibold mb-2">접근성 기능</h3>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>• 키보드 내비게이션 완전 지원 (Tab, Enter, Space)</li>\r
            <li>• 스크린 리더 완전 호환성 및 ARIA 속성</li>\r
            <li>• 토글 상태의 명확한 시각적 및 음성 피드백</li>\r
            <li>• 적절한 색상 대비와 포커스 표시</li>\r
            <li>• 상태 변경 시 실시간 안내 (aria-live)</li>\r
          </ul>\r
        </div>\r
\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Eye className="h-5 w-5" />\r
              접근성 적용 토글\r
            </CardTitle>\r
            <CardDescription>\r
              모든 사용자가 쉽게 이용할 수 있도록 설계된 토글 컴포넌트입니다\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-6">\r
            {/* 시각 접근성 */}\r
            <div>\r
              <Label className="text-sm font-medium mb-3 block">시각 접근성 기능</Label>\r
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
                <div className="flex items-center justify-between p-3 border rounded">\r
                  <div className="flex items-center gap-3">\r
                    <Eye className="h-4 w-4" />\r
                    <Label htmlFor="high-contrast">고대비 모드</Label>\r
                  </div>\r
                  <Toggle id="high-contrast" pressed={features.highContrast} onPressedChange={() => toggleFeature('highContrast')} aria-label="고대비 모드 전환" aria-describedby="high-contrast-desc">\r
                    <Eye className="h-4 w-4" />\r
                  </Toggle>\r
                </div>\r
                <p id="high-contrast-desc" className="sr-only">\r
                  고대비 모드를 활성화하여 텍스트와 배경 간의 대비를 높입니다\r
                </p>\r
                \r
                <div className="flex items-center justify-between p-3 border rounded">\r
                  <div className="flex items-center gap-3">\r
                    <Type className="h-4 w-4" />\r
                    <Label htmlFor="large-text">큰 텍스트</Label>\r
                  </div>\r
                  <Toggle id="large-text" pressed={features.largeText} onPressedChange={() => toggleFeature('largeText')} aria-label="큰 텍스트 모드 전환" aria-describedby="large-text-desc" variant="outline">\r
                    <Type className="h-4 w-4" />\r
                  </Toggle>\r
                </div>\r
                <p id="large-text-desc" className="sr-only">\r
                  모든 텍스트 크기를 확대하여 가독성을 향상시킵니다\r
                </p>\r
              </div>\r
            </div>\r
            \r
            {/* 청각 접근성 */}\r
            <div>\r
              <Label className="text-sm font-medium mb-3 block">청각 접근성 기능</Label>\r
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
                <div className="flex items-center justify-between p-3 border rounded">\r
                  <div className="flex items-center gap-3">\r
                    <Volume2 className="h-4 w-4" />\r
                    <Label htmlFor="screen-reader">스크린 리더</Label>\r
                  </div>\r
                  <Toggle id="screen-reader" pressed={features.screenReader} onPressedChange={() => toggleFeature('screenReader')} aria-label="스크린 리더 지원 전환" aria-describedby="screen-reader-desc">\r
                    <Volume2 className="h-4 w-4" />\r
                  </Toggle>\r
                </div>\r
                <p id="screen-reader-desc" className="sr-only">\r
                  스크린 리더 사용자를 위한 음성 안내 기능을 활성화합니다\r
                </p>\r
                \r
                <div className="flex items-center justify-between p-3 border rounded">\r
                  <div className="flex items-center gap-3">\r
                    <FileText className="h-4 w-4" />\r
                    <Label htmlFor="captions">자막 표시</Label>\r
                  </div>\r
                  <Toggle id="captions" pressed={features.captions} onPressedChange={() => toggleFeature('captions')} aria-label="자막 표시 전환" aria-describedby="captions-desc" variant="outline">\r
                    <FileText className="h-4 w-4" />\r
                  </Toggle>\r
                </div>\r
                <p id="captions-desc" className="sr-only">\r
                  동영상 및 오디오 콘텐츠에 자막을 표시합니다\r
                </p>\r
              </div>\r
            </div>\r
            \r
            {/* 운동 접근성 */}\r
            <div>\r
              <Label className="text-sm font-medium mb-3 block">운동 접근성 기능</Label>\r
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
                <div className="flex items-center justify-between p-3 border rounded">\r
                  <div className="flex items-center gap-3">\r
                    <Keyboard className="h-4 w-4" />\r
                    <Label htmlFor="keyboard-nav">키보드 내비게이션</Label>\r
                  </div>\r
                  <Toggle id="keyboard-nav" pressed={features.keyboardNav} onPressedChange={() => toggleFeature('keyboardNav')} aria-label="키보드 내비게이션 전환" aria-describedby="keyboard-nav-desc">\r
                    <Keyboard className="h-4 w-4" />\r
                  </Toggle>\r
                </div>\r
                <p id="keyboard-nav-desc" className="sr-only">\r
                  마우스 없이 키보드만으로 모든 기능을 사용할 수 있습니다\r
                </p>\r
                \r
                <div className="flex items-center justify-between p-3 border rounded">\r
                  <div className="flex items-center gap-3">\r
                    <Mic className="h-4 w-4" />\r
                    <Label htmlFor="voice-control">음성 제어</Label>\r
                  </div>\r
                  <Toggle id="voice-control" pressed={features.voiceControl} onPressedChange={() => toggleFeature('voiceControl')} aria-label="음성 제어 전환" aria-describedby="voice-control-desc" variant="outline">\r
                    <Mic className="h-4 w-4" />\r
                  </Toggle>\r
                </div>\r
                <p id="voice-control-desc" className="sr-only">\r
                  음성 명령으로 인터페이스를 제어할 수 있습니다\r
                </p>\r
              </div>\r
            </div>\r
            \r
            {/* 감각 민감성 */}\r
            <div>\r
              <Label className="text-sm font-medium mb-3 block">감각 민감성 기능</Label>\r
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
                <div className="flex items-center justify-between p-3 border rounded">\r
                  <div className="flex items-center gap-3">\r
                    <Pause className="h-4 w-4" />\r
                    <Label htmlFor="reduced-motion">애니메이션 감소</Label>\r
                  </div>\r
                  <Toggle id="reduced-motion" pressed={features.reducedMotion} onPressedChange={() => toggleFeature('reducedMotion')} aria-label="애니메이션 감소 전환" aria-describedby="reduced-motion-desc">\r
                    <Pause className="h-4 w-4" />\r
                  </Toggle>\r
                </div>\r
                <p id="reduced-motion-desc" className="sr-only">\r
                  움직임에 민감한 사용자를 위해 애니메이션을 최소화합니다\r
                </p>\r
                \r
                <div className="flex items-center justify-between p-3 border rounded">\r
                  <div className="flex items-center gap-3">\r
                    <Play className="h-4 w-4" />\r
                    <Label htmlFor="autoplay">자동 재생 방지</Label>\r
                  </div>\r
                  <Toggle id="autoplay" pressed={features.autoplay} onPressedChange={() => toggleFeature('autoplay')} aria-label="자동 재생 방지 전환" aria-describedby="autoplay-desc" variant="outline">\r
                    <Play className="h-4 w-4" />\r
                  </Toggle>\r
                </div>\r
                <p id="autoplay-desc" className="sr-only">\r
                  미디어 콘텐츠의 자동 재생을 방지합니다\r
                </p>\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
\r
        {/* 실시간 피드백 */}\r
        <div className="p-4 border rounded-lg" aria-live="polite" aria-label="접근성 설정 상태">\r
          <h4 className="font-medium mb-2">현재 활성화된 접근성 기능</h4>\r
          <div className="flex flex-wrap gap-2">\r
            {Object.entries(features).filter(([_, enabled]) => enabled).map(([feature, _]) => <Badge key={feature} variant="default">\r
                  {feature === 'voiceControl' && '음성 제어'}\r
                  {feature === 'highContrast' && '고대비 모드'}\r
                  {feature === 'largeText' && '큰 텍스트'}\r
                  {feature === 'screenReader' && '스크린 리더'}\r
                  {feature === 'keyboardNav' && '키보드 내비게이션'}\r
                  {feature === 'reducedMotion' && '애니메이션 감소'}\r
                  {feature === 'autoplay' && '자동 재생 방지'}\r
                  {feature === 'captions' && '자막 표시'}\r
                </Badge>)}\r
            {Object.values(features).every(value => !value) && <span className="text-muted-foreground">활성화된 기능이 없습니다</span>}\r
          </div>\r
        </div>\r
\r
        {/* 접근성 가이드라인 */}\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>토글 접근성 가이드라인</CardTitle>\r
          </CardHeader>\r
          <CardContent className="space-y-4">\r
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
              <div className="space-y-3">\r
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>\r
                <ul className="text-sm space-y-2">\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>명확한 레이블과 설명</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>적절한 ARIA 상태 속성</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>키보드 접근 가능</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>상태 변경 실시간 안내</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>충분한 클릭 영역 (44px 이상)</span>\r
                  </li>\r
                </ul>\r
              </div>\r
              \r
              <div className="space-y-3">\r
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>\r
                <ul className="text-sm space-y-2">\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>색상만으로 상태 구분 금지</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>상태 변경 시 예상치 못한 포커스 이동</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>중요한 기능의 의도치 않은 활성화</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>접근성 기능 끄기 어려움</span>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
\r
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">\r
          <div className="flex items-start gap-2">\r
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />\r
            <div>\r
              <h5 className="font-medium text-blue-900">키보드 사용법</h5>\r
              <div className="text-sm text-blue-800 mt-2 space-y-1">\r
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Tab</kbd>: 다음 토글로 이동</p>\r
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Shift + Tab</kbd>: 이전 토글로 이동</p>\r
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Space</kbd> 또는 <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Enter</kbd>: 토글 활성화/비활성화</p>\r
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Esc</kbd>: 포커스 해제</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
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
