"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[11363],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=o,k=s["".concat(l,".").concat(u)]||s[u]||c[u]||a;return t?i.createElement(k,r(r({ref:n},m),{},{components:t})):i.createElement(k,r({ref:n},m))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:o,r[1]=p;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var i=t(87462),o=(t(67294),t(3905));const a={id:"interaction_components_BoundingBoxComponents",title:"Module: interaction/components/BoundingBoxComponents",sidebar_label:"interaction/components/BoundingBoxComponents",sidebar_position:0,custom_edit_url:null},r=void 0,p={unversionedId:"API/engine/modules/interaction_components_BoundingBoxComponents",id:"API/engine/modules/interaction_components_BoundingBoxComponents",title:"Module: interaction/components/BoundingBoxComponents",description:"Variables",source:"@site/docs/API/engine/modules/interaction_components_BoundingBoxComponents.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/interaction_components_BoundingBoxComponents",permalink:"/etherealengine-docs/docs/API/engine/modules/interaction_components_BoundingBoxComponents",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"interaction_components_BoundingBoxComponents",title:"Module: interaction/components/BoundingBoxComponents",sidebar_label:"interaction/components/BoundingBoxComponents",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"interaction/InteractionModule",permalink:"/etherealengine-docs/docs/API/engine/modules/interaction_InteractionModule"},next:{title:"interaction/components/EquippableComponent",permalink:"/etherealengine-docs/docs/API/engine/modules/interaction_components_EquippableComponent"}},l={},d=[{value:"Variables",id:"variables",level:2},{value:"BoundingBoxComponent",id:"boundingboxcomponent",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"BoundingBoxDynamicTag",id:"boundingboxdynamictag",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"setBoundingBoxComponent",id:"setboundingboxcomponent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"setBoundingBoxDynamicTag",id:"setboundingboxdynamictag",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:d},s="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"boundingboxcomponent"},"BoundingBoxComponent"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"BoundingBoxComponent"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = 'BoundingBoxComponent'; ",(0,o.kt)("inlineCode",{parentName:"p"},"onInit"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<{}",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),") => { ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  } ; ",(0,o.kt)("inlineCode",{parentName:"p"},"onRemove"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  }, {}",">",") => ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"onSet"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  }, {}",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"DeepReadonlyObject"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  }",">",">",") => ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"reactor"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_EntityFunctions.EntityReactorProps"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityReactorProps")),") => ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"  } & ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<{}",">"," & ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_ComponentFunctions.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  }, {}, { ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  }, ",(0,o.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"DeepReadonlyObject"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  }",">",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/components/BoundingBoxComponents.ts#L21"},"packages/engine/src/interaction/components/BoundingBoxComponents.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"boundingboxdynamictag"},"BoundingBoxDynamicTag"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"BoundingBoxDynamicTag"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = 'BoundingBoxDynamicTag' } & ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<{}",">"," & ",(0,o.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/interfaces/ecs_functions_ComponentFunctions.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", {}, ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/components/BoundingBoxComponents.ts#L66"},"packages/engine/src/interaction/components/BoundingBoxComponents.ts:66")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"setboundingboxcomponent"},"setBoundingBoxComponent"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"setBoundingBoxComponent"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ","|"," { ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  }"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")," ","|"," { ",(0,o.kt)("inlineCode",{parentName:"p"},"box"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Box3Helper"),"  }"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/components/BoundingBoxComponents.ts#L68"},"packages/engine/src/interaction/components/BoundingBoxComponents.ts:68")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setboundingboxdynamictag"},"setBoundingBoxDynamicTag"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"setBoundingBoxDynamicTag"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/components/BoundingBoxComponents.ts#L73"},"packages/engine/src/interaction/components/BoundingBoxComponents.ts:73")))}c.isMDXComponent=!0}}]);