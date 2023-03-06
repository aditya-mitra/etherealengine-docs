"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[40987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,c=m["".concat(d,".").concat(u)]||m[u]||k[u]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={id:"interaction_systems_EquippableSystem",title:"Module: interaction/systems/EquippableSystem",sidebar_label:"interaction/systems/EquippableSystem",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"API/engine/modules/interaction_systems_EquippableSystem",id:"API/engine/modules/interaction_systems_EquippableSystem",title:"Module: interaction/systems/EquippableSystem",description:"Variables",source:"@site/docs/API/engine/modules/interaction_systems_EquippableSystem.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/interaction_systems_EquippableSystem",permalink:"/etherealengine-docs/docs/API/engine/modules/interaction_systems_EquippableSystem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"interaction_systems_EquippableSystem",title:"Module: interaction/systems/EquippableSystem",sidebar_label:"interaction/systems/EquippableSystem",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"interaction/functions/mediaControlsUI",permalink:"/etherealengine-docs/docs/API/engine/modules/interaction_functions_mediaControlsUI"},next:{title:"interaction/systems/InteractiveSystem",permalink:"/etherealengine-docs/docs/API/engine/modules/interaction_systems_InteractiveSystem"}},d={},o=[{value:"Variables",id:"variables",level:2},{value:"equippableInteractMessage",id:"equippableinteractmessage",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"equipperQueryAll",id:"equipperqueryall",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"equipperQueryExit",id:"equipperqueryexit",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"setEquippedObjectReceptor",id:"setequippedobjectreceptor",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"transferAuthorityOfObjectReceptor",id:"transferauthorityofobjectreceptor",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4}],s={toc:o},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"equippableinteractmessage"},"equippableInteractMessage"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"equippableInteractMessage"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"Equip"')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"todo"))," refactor this into i18n and configurable"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/systems/EquippableSystem.ts#L157"},"packages/engine/src/interaction/systems/EquippableSystem.ts:157")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"default"},"default"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"default"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }",">"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }",">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/systems/EquippableSystem.ts#L159"},"packages/engine/src/interaction/systems/EquippableSystem.ts:159")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equipperqueryall"},"equipperQueryAll"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"equipperQueryAll"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"equipperEntity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"world?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"equipperEntity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/systems/EquippableSystem.ts#L97"},"packages/engine/src/interaction/systems/EquippableSystem.ts:97")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equipperqueryexit"},"equipperQueryExit"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"equipperQueryExit"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"world?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/systems/EquippableSystem.ts#L112"},"packages/engine/src/interaction/systems/EquippableSystem.ts:112")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setequippedobjectreceptor"},"setEquippedObjectReceptor"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setEquippedObjectReceptor"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"world?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"$cache"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," = true; ",(0,r.kt)("inlineCode",{parentName:"td"},"$topic"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Topic")," = NetworkTopics.world; ",(0,r.kt)("inlineCode",{parentName:"td"},"attachmentPoint"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"none"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"right"'),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"equip"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),">"," = matches.boolean; ",(0,r.kt)("inlineCode",{parentName:"td"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Object"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.SET","_","EQUIPPED","_","OBJECT' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/systems/EquippableSystem.ts#L45"},"packages/engine/src/interaction/systems/EquippableSystem.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transferauthorityofobjectreceptor"},"transferAuthorityOfObjectReceptor"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"transferAuthorityOfObjectReceptor"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"world?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"$topic"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Topic")," = NetworkTopics.world; ",(0,r.kt)("inlineCode",{parentName:"td"},"networkId"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"NetworkId"),">"," = matchesNetworkId; ",(0,r.kt)("inlineCode",{parentName:"td"},"newAuthority"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PeerID"),">"," = matchesPeerID; ",(0,r.kt)("inlineCode",{parentName:"td"},"ownerId"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UserId"),">"," = matchesUserId; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.TRANSFER","_","AUTHORITY","_","OF","_","OBJECT' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/interaction/systems/EquippableSystem.ts#L75"},"packages/engine/src/interaction/systems/EquippableSystem.ts:75")))}k.isMDXComponent=!0}}]);