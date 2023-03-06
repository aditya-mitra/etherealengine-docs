"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[38449],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},C=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=s(t),C=o,k=d["".concat(l,".").concat(C)]||d[C]||c[C]||p;return t?i.createElement(k,a(a({ref:n},m),{},{components:t})):i.createElement(k,a({ref:n},m))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=C;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[d]="string"==typeof e?e:o,a[1]=r;for(var s=2;s<p;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}C.displayName="MDXCreateElement"},57704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>r,toc:()=>s});var i=t(87462),o=(t(67294),t(3905));const p={id:"scene_components_SpawnPointComponent",title:"Module: scene/components/SpawnPointComponent",sidebar_label:"scene/components/SpawnPointComponent",sidebar_position:0,custom_edit_url:null},a=void 0,r={unversionedId:"API/engine/modules/scene_components_SpawnPointComponent",id:"API/engine/modules/scene_components_SpawnPointComponent",title:"Module: scene/components/SpawnPointComponent",description:"Variables",source:"@site/docs/API/engine/modules/scene_components_SpawnPointComponent.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_components_SpawnPointComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_components_SpawnPointComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_components_SpawnPointComponent",title:"Module: scene/components/SpawnPointComponent",sidebar_label:"scene/components/SpawnPointComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/components/SkyboxComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_components_SkyboxComponent"},next:{title:"scene/components/SplineComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_components_SplineComponent"}},l={},s=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_SPAWN_POINT",id:"scene_component_spawn_point",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SpawnPointComponent",id:"spawnpointcomponent",level:3},{value:"Defined in",id:"defined-in-1",level:4}],m={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"scene_component_spawn_point"},"SCENE","_","COMPONENT","_","SPAWN","_","POINT"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","SPAWN","_","POINT"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"spawn-point"')),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/scene/components/SpawnPointComponent.ts#L73"},"packages/engine/src/scene/components/SpawnPointComponent.ts:73")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"spawnpointcomponent"},"SpawnPointComponent"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"SpawnPointComponent"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = 'SpawnPointComponent'; ",(0,o.kt)("inlineCode",{parentName:"p"},"onInit"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<{}",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),") => { ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Scene")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helperBox"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxHelper")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[]  } ; ",(0,o.kt)("inlineCode",{parentName:"p"},"onRemove"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Scene")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helperBox"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxHelper")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[]  }, {}",">",") => ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"onSet"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Scene")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helperBox"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxHelper")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[]  }, {}",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"DeepReadonlyObject"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Scene")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helperBox"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxHelper")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[]  }",">",">",") => ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"reactor"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_EntityFunctions.EntityReactorProps"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityReactorProps")),") => ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"toJSON"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Scene")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helperBox"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxHelper")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[]  }, {}",">",") => { ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[] = component.permissionedUsers.value }  } & ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<{}",">"," & ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_ComponentFunctions.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Scene")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helperBox"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxHelper")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[]  }, {}, { ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[] = component.permissionedUsers.value }, ",(0,o.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"DeepReadonlyObject"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Scene")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helperBox"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxHelper")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionedUsers"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UserId"),"[]  }",">",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/scene/components/SpawnPointComponent.ts#L17"},"packages/engine/src/scene/components/SpawnPointComponent.ts:17")))}c.isMDXComponent=!0}}]);