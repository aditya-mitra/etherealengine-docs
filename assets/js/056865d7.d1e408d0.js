"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[45534],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>f});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(i),g=r,f=p["".concat(s,".").concat(g)]||p[g]||c[g]||l;return i?t.createElement(f,a(a({ref:n},u),{},{components:i})):t.createElement(f,a({ref:n},u))}));function f(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var d=2;d<l;d++)a[d]=i[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},66934:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=i(87462),r=(i(67294),i(3905));const l={id:"initializeEngine",title:"Module: initializeEngine",sidebar_label:"initializeEngine",sidebar_position:0,custom_edit_url:null},a=void 0,o={unversionedId:"API/engine/modules/initializeEngine",id:"API/engine/modules/initializeEngine",title:"Module: initializeEngine",description:"Functions",source:"@site/docs/API/engine/modules/initializeEngine.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/initializeEngine",permalink:"/etherealengine-docs/docs/API/engine/modules/initializeEngine",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"initializeEngine",title:"Module: initializeEngine",sidebar_label:"initializeEngine",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ecs/functions/getSceneMetadataChanges",permalink:"/etherealengine-docs/docs/API/engine/modules/ecs_functions_getSceneMetadataChanges"},next:{title:"input/InputModule",permalink:"/etherealengine-docs/docs/API/engine/modules/input_InputModule"}},s={},d=[{value:"Functions",id:"functions",level:2},{value:"createEngine",id:"createengine",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"initializeBrowser",id:"initializebrowser",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"initializeNode",id:"initializenode",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"setupEngineActionSystems",id:"setupengineactionsystems",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],u={toc:d},p="wrapper";function c(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"createengine"},"createEngine"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createEngine"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Creates a new instance of the engine and engine renderer. This initializes all properties and state for the engine,\nadds action receptors and creates a new world."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/initializeEngine.ts#L24"},"packages/engine/src/initializeEngine.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initializebrowser"},"initializeBrowser"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initializeBrowser"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"initializeBrowser"),(0,r.kt)("p",null,"initializes everything for the browser context"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/initializeEngine.ts#L59"},"packages/engine/src/initializeEngine.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initializenode"},"initializeNode"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initializeNode"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"initializeNode"),(0,r.kt)("p",null,"initializes everything for the node context"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/initializeEngine.ts#L101"},"packages/engine/src/initializeEngine.ts:101")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setupengineactionsystems"},"setupEngineActionSystems"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setupEngineActionSystems"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/initializeEngine.ts#L35"},"packages/engine/src/initializeEngine.ts:35")))}c.isMDXComponent=!0}}]);