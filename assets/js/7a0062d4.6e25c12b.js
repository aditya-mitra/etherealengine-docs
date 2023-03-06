"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[1378],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,v=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(v,i(i({ref:n},d),{},{components:t})):a.createElement(v,i({ref:n},d))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={id:"avatar_components_AvatarTeleportComponent",title:"Module: avatar/components/AvatarTeleportComponent",sidebar_label:"avatar/components/AvatarTeleportComponent",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"API/engine/modules/avatar_components_AvatarTeleportComponent",id:"API/engine/modules/avatar_components_AvatarTeleportComponent",title:"Module: avatar/components/AvatarTeleportComponent",description:"Variables",source:"@site/docs/API/engine/modules/avatar_components_AvatarTeleportComponent.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/avatar_components_AvatarTeleportComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/avatar_components_AvatarTeleportComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_components_AvatarTeleportComponent",title:"Module: avatar/components/AvatarTeleportComponent",sidebar_label:"avatar/components/AvatarTeleportComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"avatar/components/AvatarPendingComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/avatar_components_AvatarPendingComponent"},next:{title:"avatar/components/FlyControlComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/avatar_components_FlyControlComponent"}},l={},s=[{value:"Variables",id:"variables",level:2},{value:"AvatarTeleportComponent",id:"avatarteleportcomponent",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"avatarteleportcomponent"},"AvatarTeleportComponent"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"AvatarTeleportComponent"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = 'AvatarTeleportComponent'; ",(0,o.kt)("inlineCode",{parentName:"p"},"onInit"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<{}",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),") => { ",(0,o.kt)("inlineCode",{parentName:"p"},"side"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"XRHandedness"),"  } ; ",(0,o.kt)("inlineCode",{parentName:"p"},"onSet"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"side"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"XRHandedness"),"  }, {}",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"DeepReadonlyObject"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"side"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"XRHandedness"),"  }",">",">",") => ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"toJSON"),": () => { ",(0,o.kt)("inlineCode",{parentName:"p"},"side"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"XRHandedness"),"  }  } & ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<{}",">"," & ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_ComponentFunctions.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"side"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"XRHandedness"),"  }, {}, { ",(0,o.kt)("inlineCode",{parentName:"p"},"side"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"XRHandedness"),"  }, ",(0,o.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"DeepReadonlyObject"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"side"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"XRHandedness"),"  }",">",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/avatar/components/AvatarTeleportComponent.ts#L3"},"packages/engine/src/avatar/components/AvatarTeleportComponent.ts:3")))}c.isMDXComponent=!0}}]);