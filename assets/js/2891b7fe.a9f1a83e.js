"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[57267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,N=s["".concat(l,".").concat(k)]||s[k]||c[k]||i;return n?a.createElement(N,o(o({ref:t},m),{},{components:n})):a.createElement(N,o({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"src_logger",title:"Module: src/logger",sidebar_label:"src/logger",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"API/common/modules/src_logger",id:"API/common/modules/src_logger",title:"Module: src/logger",description:"Variables",source:"@site/docs/API/common/modules/src_logger.md",sourceDirName:"API/common/modules",slug:"/API/common/modules/src_logger",permalink:"/etherealengine-docs/docs/API/common/modules/src_logger",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_logger",title:"Module: src/logger",sidebar_label:"src/logger",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/interfaces/WebXrNative",permalink:"/etherealengine-docs/docs/API/common/modules/src_interfaces_WebXrNative"},next:{title:"src/types",permalink:"/etherealengine-docs/docs/API/common/modules/src_types"}},l={},p=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}],m={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"default"},"default"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"A logger class (similar to the one provided by Pino.js) to replace\nconsole.log() usage on the client side."),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"child")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"opts"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => { ",(0,r.kt)("inlineCode",{parentName:"td"},"debug"),": (...",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),"(",(0,r.kt)("inlineCode",{parentName:"td"},"message?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ...",(0,r.kt)("inlineCode",{parentName:"td"},"optionalParams"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")," = console.debug; ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),": (...",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),"(",(0,r.kt)("inlineCode",{parentName:"td"},"message?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ...",(0,r.kt)("inlineCode",{parentName:"td"},"optionalParams"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")," = console.error; ",(0,r.kt)("inlineCode",{parentName:"td"},"fatal"),": (...",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),"(",(0,r.kt)("inlineCode",{parentName:"td"},"message?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ...",(0,r.kt)("inlineCode",{parentName:"td"},"optionalParams"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")," = console.error; ",(0,r.kt)("inlineCode",{parentName:"td"},"info"),": (...",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),"(",(0,r.kt)("inlineCode",{parentName:"td"},"message?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ...",(0,r.kt)("inlineCode",{parentName:"td"},"optionalParams"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")," = console.info; ",(0,r.kt)("inlineCode",{parentName:"td"},"warn"),": (...",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),"(",(0,r.kt)("inlineCode",{parentName:"td"},"message?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ...",(0,r.kt)("inlineCode",{parentName:"td"},"optionalParams"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")," = console.warn }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"debug")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fatal")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"info")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"warn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/common/src/logger.ts#L39"},"packages/common/src/logger.ts:39")))}c.isMDXComponent=!0}}]);