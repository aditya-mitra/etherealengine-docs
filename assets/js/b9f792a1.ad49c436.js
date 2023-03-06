"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[57981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(o,".").concat(u)]||c[u]||h[u]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[c]="string"==typeof e?e:a,i[1]=d;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={id:"xr_XRHandMeshModel.XRHandMeshModel",title:"Class: XRHandMeshModel",sidebar_label:"XRHandMeshModel",custom_edit_url:null},i=void 0,d={unversionedId:"API/engine/classes/xr_XRHandMeshModel.XRHandMeshModel",id:"API/engine/classes/xr_XRHandMeshModel.XRHandMeshModel",title:"Class: XRHandMeshModel",description:"xr/XRHandMeshModel.XRHandMeshModel",source:"@site/docs/API/engine/classes/xr_XRHandMeshModel.XRHandMeshModel.md",sourceDirName:"API/engine/classes",slug:"/API/engine/classes/xr_XRHandMeshModel.XRHandMeshModel",permalink:"/etherealengine-docs/docs/API/engine/classes/xr_XRHandMeshModel.XRHandMeshModel",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"xr_XRHandMeshModel.XRHandMeshModel",title:"Class: XRHandMeshModel",sidebar_label:"XRHandMeshModel",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"PersistentAnchorActions",permalink:"/etherealengine-docs/docs/API/engine/classes/xr_XRAnchorComponents.PersistentAnchorActions"},next:{title:"XRAction",permalink:"/etherealengine-docs/docs/API/engine/classes/xr_XRState.XRAction"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"bones",id:"bones",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"controller",id:"controller",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"handedness",id:"handedness",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"updateMatrixWorld",id:"updatematrixworld",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"updateMesh",id:"updatemesh",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4}],p={toc:s},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/xr_XRHandMeshModel"},"xr/XRHandMeshModel"),".XRHandMeshModel"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Object3D")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"XRHandMeshModel"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new XRHandMeshModel"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"controller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"model"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"handedness"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"controller")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Group"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"model")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object3D"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"Event"),">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"handedness")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Object3D.constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/xr/XRHandMeshModel.ts#L12"},"packages/engine/src/xr/XRHandMeshModel.ts:12")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"bones"},"bones"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bones"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/xr/XRHandMeshModel.ts#L9"},"packages/engine/src/xr/XRHandMeshModel.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"controller"},"controller"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"controller"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Group")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/xr/XRHandMeshModel.ts#L8"},"packages/engine/src/xr/XRHandMeshModel.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"handedness"},"handedness"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"handedness"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/xr/XRHandMeshModel.ts#L10"},"packages/engine/src/xr/XRHandMeshModel.ts:10")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"updatematrixworld"},"updateMatrixWorld"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"updateMatrixWorld"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"force?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"force?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,"Object3D.updateMatrixWorld"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/xr/XRHandMeshModel.ts#L65"},"packages/engine/src/xr/XRHandMeshModel.ts:65")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updatemesh"},"updateMesh"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"updateMesh"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/xr/XRHandMeshModel.ts#L41"},"packages/engine/src/xr/XRHandMeshModel.ts:41")))}h.isMDXComponent=!0}}]);