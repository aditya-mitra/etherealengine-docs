"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[67038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=i,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"ecs_functions_ComponentFunctions.Component",title:"Interface: Component<ComponentType, Schema, JSON, SetJSON, ErrorTypes>",sidebar_label:"Component",custom_edit_url:null},o=void 0,l={unversionedId:"API/engine/interfaces/ecs_functions_ComponentFunctions.Component",id:"API/engine/interfaces/ecs_functions_ComponentFunctions.Component",title:"Interface: Component<ComponentType, Schema, JSON, SetJSON, ErrorTypes>",description:"ecs/functions/ComponentFunctions.Component",source:"@site/docs/API/engine/interfaces/ecs_functions_ComponentFunctions.Component.md",sourceDirName:"API/engine/interfaces",slug:"/API/engine/interfaces/ecs_functions_ComponentFunctions.Component",permalink:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_ComponentFunctions.Component",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ecs_functions_ComponentFunctions.Component",title:"Interface: Component<ComponentType, Schema, JSON, SetJSON, ErrorTypes>",sidebar_label:"Component",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ProxyExtensions",permalink:"/etherealengine-docs/docs/API/engine/interfaces/common_proxies_createThreejsProxy.ProxyExtensions"},next:{title:"ComponentPartial",permalink:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_ComponentFunctions.ComponentPartial"}},p={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"errors",id:"errors",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"existenceMap",id:"existencemap",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"isComponent",id:"iscomponent",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"reactor",id:"reactor",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"reactorMap",id:"reactormap",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"stateMap",id:"statemap",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"valueMap",id:"valuemap",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"onInit",id:"oninit",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"onRemove",id:"onremove",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"onSet",id:"onset",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-12",level:4}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_functions_ComponentFunctions"},"ecs/functions/ComponentFunctions"),".Component"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ComponentType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Schema")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"bitECS.ISchema")," = {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"JSON")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ComponentType"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SetJSON")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialIfObject"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"DeepReadonly"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"JSON"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ErrorTypes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"errors"},"errors"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"errors"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorTypes"),"[]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L76"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:76")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"existencemap"},"existenceMap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"existenceMap"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">",", {}",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L73"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iscomponent"},"isComponent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isComponent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L60"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L61"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reactor"},"reactor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"reactor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"HookableFunction"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"FC"),"<",(0,i.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_EntityFunctions.EntityReactorProps"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityReactorProps")),">",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L71"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reactormap"},"reactorMap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"reactorMap"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,i.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_EntityFunctions.EntityReactorRoot"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityReactorRoot")),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L72"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schema"},"schema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"schema"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L62"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"statemap"},"stateMap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stateMap"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),", {}",">",">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L74"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"valuemap"},"valueMap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"valueMap"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L75"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:75")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"oninit"},"onInit"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onInit"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"this"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"OnInitValidateNotState"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"this")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ComponentType"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Schema"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"world")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"OnInitValidateNotState"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),">"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L63"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onremove"},"onRemove"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onRemove"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"component")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"State"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ComponentType"),", {}",">")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L70"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onset"},"onSet"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onSet"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"json?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"component")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"State"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ComponentType"),", {}",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"json?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SetJSON"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L69"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tojson"},"toJSON"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toJSON"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"component")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"State"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ComponentType"),", {}",">")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JSON")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/ecs/functions/ComponentFunctions.ts#L68"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:68")))}c.isMDXComponent=!0}}]);