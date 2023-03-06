"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[43915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(r),f=a,g=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"util_getGitData.GitConfigData",title:"Interface: GitConfigData",sidebar_label:"GitConfigData",custom_edit_url:null},l=void 0,o={unversionedId:"API/server-core/interfaces/util_getGitData.GitConfigData",id:"API/server-core/interfaces/util_getGitData.GitConfigData",title:"Interface: GitConfigData",description:"util/getGitData.GitConfigData",source:"@site/docs/API/server-core/interfaces/util_getGitData.GitConfigData.md",sourceDirName:"API/server-core/interfaces",slug:"/API/server-core/interfaces/util_getGitData.GitConfigData",permalink:"/etherealengine-docs/docs/API/server-core/interfaces/util_getGitData.GitConfigData",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"util_getGitData.GitConfigData",title:"Interface: GitConfigData",sidebar_label:"GitConfigData",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"UserParams",permalink:"/etherealengine-docs/docs/API/server-core/interfaces/user_user_user_class.UserParams"},next:{title:"ServerAddress",permalink:"/etherealengine-docs/docs/API/server-core/interfaces/util_get_local_server_ip.ServerAddress"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"branch",id:"branch",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"core",id:"core",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"remote",id:"remote",level:3},{value:"Index signature",id:"index-signature-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:d},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/server-core/modules/util_getGitData"},"util/getGitData"),".GitConfigData"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"branch"},"branch"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"branch"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"index-signature"},"Index signature"),(0,a.kt)("p",null,"\u25aa ","[branch: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"]",": { ",(0,a.kt)("inlineCode",{parentName:"p"},"merge"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/server-core/src/util/getGitData.ts#L22"},"packages/server-core/src/util/getGitData.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"core"},"core"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"core"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bare")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"filemode")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"logallrefupdates")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"repositoryformatversion")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/server-core/src/util/getGitData.ts#L10"},"packages/server-core/src/util/getGitData.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"remote"},"remote"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"remote"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"index-signature-1"},"Index signature"),(0,a.kt)("p",null,"\u25aa ","[remote: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"]",": { ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/server-core/src/util/getGitData.ts#L16"},"packages/server-core/src/util/getGitData.ts:16")))}u.isMDXComponent=!0}}]);