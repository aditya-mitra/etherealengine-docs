"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[62159],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>C});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),m=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(t),u=r,C=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return t?o.createElement(C,i(i({ref:n},l),{},{components:t})):o.createElement(C,i({ref:n},l))}));function C(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86278:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var o=t(87462),r=(t(67294),t(3905));const a={id:"scene_components_NameComponent",title:"Module: scene/components/NameComponent",sidebar_label:"scene/components/NameComponent",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"API/engine/modules/scene_components_NameComponent",id:"API/engine/modules/scene_components_NameComponent",title:"Module: scene/components/NameComponent",description:"Variables",source:"@site/docs/API/engine/modules/scene_components_NameComponent.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_components_NameComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_components_NameComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_components_NameComponent",title:"Module: scene/components/NameComponent",sidebar_label:"scene/components/NameComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/components/MountPointComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_components_MountPointComponent"},next:{title:"scene/components/OceanComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_components_OceanComponent"}},s={},m=[{value:"Variables",id:"variables",level:2},{value:"NameComponent",id:"namecomponent",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:m},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"namecomponent"},"NameComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"NameComponent"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesByName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"State"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),"[]",">",", {}",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = 'NameComponent'; ",(0,r.kt)("inlineCode",{parentName:"p"},"onInit"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"onRemove"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", {}",">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"onSet"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", {}",">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"name?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  } & ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<{}",">"," & ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_ComponentFunctions.Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", {}, ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/scene/components/NameComponent.ts#L6"},"packages/engine/src/scene/components/NameComponent.ts:6")))}d.isMDXComponent=!0}}]);