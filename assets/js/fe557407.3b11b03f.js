"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[70418],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),l=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||s;return t?i.createElement(m,o(o({ref:n},u),{},{components:t})):i.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(87462),r=(t(67294),t(3905));const s={id:"ecs_functions_SystemFunctions.SystemDefintion",title:"Interface: SystemDefintion",sidebar_label:"SystemDefintion",custom_edit_url:null},o=void 0,c={unversionedId:"API/engine/interfaces/ecs_functions_SystemFunctions.SystemDefintion",id:"API/engine/interfaces/ecs_functions_SystemFunctions.SystemDefintion",title:"Interface: SystemDefintion",description:"ecs/functions/SystemFunctions.SystemDefintion",source:"@site/docs/API/engine/interfaces/ecs_functions_SystemFunctions.SystemDefintion.md",sourceDirName:"API/engine/interfaces",slug:"/API/engine/interfaces/ecs_functions_SystemFunctions.SystemDefintion",permalink:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_SystemFunctions.SystemDefintion",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ecs_functions_SystemFunctions.SystemDefintion",title:"Interface: SystemDefintion",sidebar_label:"SystemDefintion",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"EntityReactorRoot",permalink:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_EntityFunctions.EntityReactorRoot"},next:{title:"SystemInstance",permalink:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_SystemFunctions.SystemInstance"}},a={},l=[{value:"Properties",id:"properties",level:2},{value:"subsystems",id:"subsystems",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"cleanup",id:"cleanup",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"execute",id:"execute",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_functions_SystemFunctions"},"ecs/functions/SystemFunctions"),".SystemDefintion"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"subsystems"},"subsystems"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"subsystems"),": ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_functions_SystemFunctions#systemloader"},(0,r.kt)("inlineCode",{parentName:"a"},"SystemLoader")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/SystemFunctions.tsx#L25"},"packages/engine/src/ecs/functions/SystemFunctions.tsx:25")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"cleanup"},"cleanup"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"cleanup"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/SystemFunctions.tsx#L24"},"packages/engine/src/ecs/functions/SystemFunctions.tsx:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"execute"},"execute"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"execute"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/SystemFunctions.tsx#L23"},"packages/engine/src/ecs/functions/SystemFunctions.tsx:23")))}d.isMDXComponent=!0}}]);