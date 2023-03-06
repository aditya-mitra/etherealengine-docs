"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[42042],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,k=s["".concat(l,".").concat(c)]||s[c]||m[c]||a;return t?i.createElement(k,o(o({ref:n},u),{},{components:t})):i.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},48301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const a={id:"input_InputModule",title:"Module: input/InputModule",sidebar_label:"input/InputModule",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"API/engine/modules/input_InputModule",id:"API/engine/modules/input_InputModule",title:"Module: input/InputModule",description:"Functions",source:"@site/docs/API/engine/modules/input_InputModule.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/input_InputModule",permalink:"/etherealengine-docs/docs/API/engine/modules/input_InputModule",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"input_InputModule",title:"Module: input/InputModule",sidebar_label:"input/InputModule",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"initializeEngine",permalink:"/etherealengine-docs/docs/API/engine/modules/initializeEngine"},next:{title:"input/InputState",permalink:"/etherealengine-docs/docs/API/engine/modules/input_InputState"}},l={},d=[{value:"Functions",id:"functions",level:2},{value:"InputModule",id:"inputmodule",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:d},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"inputmodule"},"InputModule"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"InputModule"),"(): ({ ",(0,r.kt)("inlineCode",{parentName:"p"},"systemLoader"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }",">"," = ClientInputSystem }",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"UPDATE_EARLY"')," = SystemUpdateType.UPDATE","_","EARLY; ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = 'xre.engine.ClientInputSystem' } ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"systemLoader"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }",">"," = ButtonSystem }",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"POST_RENDER"')," = SystemUpdateType.POST","_","RENDER; ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = 'xre.engine.ButtonSystem' })[]"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"({ ",(0,r.kt)("inlineCode",{parentName:"p"},"systemLoader"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }",">"," = ClientInputSystem }",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"UPDATE_EARLY"')," = SystemUpdateType.UPDATE","_","EARLY; ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = 'xre.engine.ClientInputSystem' } ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"systemLoader"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,r.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }",">"," = ButtonSystem }",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"POST_RENDER"')," = SystemUpdateType.POST","_","RENDER; ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = 'xre.engine.ButtonSystem' })[]"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/input/InputModule.ts#L5"},"packages/engine/src/input/InputModule.ts:5")))}m.isMDXComponent=!0}}]);