"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[10426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,k=s["".concat(d,".").concat(u)]||s[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"avatar_AnimationSystem",title:"Module: avatar/AnimationSystem",sidebar_label:"avatar/AnimationSystem",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"API/engine/modules/avatar_AnimationSystem",id:"API/engine/modules/avatar_AnimationSystem",title:"Module: avatar/AnimationSystem",description:"Functions",source:"@site/docs/API/engine/modules/avatar_AnimationSystem.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/avatar_AnimationSystem",permalink:"/etherealengine-docs/docs/API/engine/modules/avatar_AnimationSystem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_AnimationSystem",title:"Module: avatar/AnimationSystem",sidebar_label:"avatar/AnimationSystem",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"avatar/AnimationManager",permalink:"/etherealengine-docs/docs/API/engine/modules/avatar_AnimationManager"},next:{title:"avatar/AvatarAnimationSystem",permalink:"/etherealengine-docs/docs/API/engine/modules/avatar_AvatarAnimationSystem"}},d={},p=[{value:"Functions",id:"functions",level:2},{value:"animationActionReceptor",id:"animationactionreceptor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],m={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"animationactionreceptor"},"animationActionReceptor"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"animationActionReceptor"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"world?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"$cache"),": { ",(0,r.kt)("inlineCode",{parentName:"td"},"removePrevious"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," = true } ; ",(0,r.kt)("inlineCode",{parentName:"td"},"$topic"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Topic")," = NetworkTopics.world; ",(0,r.kt)("inlineCode",{parentName:"td"},"newStateName"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"," = matches.string; ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Object"),">",">"," = matchesWeightsParameters; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.AVATAR","_","ANIMATION' }",">",">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/avatar/AnimationSystem.ts#L20"},"packages/engine/src/avatar/AnimationSystem.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"default"},"default"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"default"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"subsystems"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),"[] = [] }",">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"subsystems"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),"[] = [] }",">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/avatar/AnimationSystem.ts#L37"},"packages/engine/src/avatar/AnimationSystem.ts:37")))}c.isMDXComponent=!0}}]);