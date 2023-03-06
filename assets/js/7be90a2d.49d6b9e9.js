"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[78157],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),f=l,k=c["".concat(o,".").concat(f)]||c[f]||u[f]||a;return t?r.createElement(k,d(d({ref:n},p),{},{components:t})):r.createElement(k,d({ref:n},p))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,d=new Array(a);d[0]=f;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[c]="string"==typeof e?e:l,d[1]=i;for(var s=2;s<a;s++)d[s]=t[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const a={id:"renderer_effects_blending_BlendMode.BlendMode",title:"Class: BlendMode",sidebar_label:"BlendMode",custom_edit_url:null},d=void 0,i={unversionedId:"API/engine/classes/renderer_effects_blending_BlendMode.BlendMode",id:"API/engine/classes/renderer_effects_blending_BlendMode.BlendMode",title:"Class: BlendMode",description:"renderer/effects/blending/BlendMode.BlendMode",source:"@site/docs/API/engine/classes/renderer_effects_blending_BlendMode.BlendMode.md",sourceDirName:"API/engine/classes",slug:"/API/engine/classes/renderer_effects_blending_BlendMode.BlendMode",permalink:"/etherealengine-docs/docs/API/engine/classes/renderer_effects_blending_BlendMode.BlendMode",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_BlendMode.BlendMode",title:"Class: BlendMode",sidebar_label:"BlendMode",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"LinearTosRGBEffect",permalink:"/etherealengine-docs/docs/API/engine/classes/renderer_effects_LinearTosRGBEffect.LinearTosRGBEffect"},next:{title:"Clouds",permalink:"/etherealengine-docs/docs/API/engine/classes/scene_classes_Clouds.Clouds"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"blendFunction",id:"blendfunction",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"opacity",id:"opacity",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"getBlendFunction",id:"getblendfunction",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getShaderCode",id:"getshadercode",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"setBlendFunction",id:"setblendfunction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/etherealengine-docs/docs/API/engine/modules/renderer_effects_blending_BlendMode"},"renderer/effects/blending/BlendMode"),".BlendMode"),(0,l.kt)("p",null,"A blend mode."),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"EventDispatcher")),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"BlendMode"))))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new BlendMode"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"blendFunction"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"opacity?"),")"),(0,l.kt)("p",null,"Constructs a new blend mode."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"blendFunction")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The blend function to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"opacity")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"1.0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The opacity of the color that will be blended with the base color.")))),(0,l.kt)("h4",{id:"overrides"},"Overrides"),(0,l.kt)("p",null,"EventDispatcher.constructor"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/renderer/effects/blending/BlendMode.ts#L66"},"packages/engine/src/renderer/effects/blending/BlendMode.ts:66")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"blendfunction"},"blendFunction"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"blendFunction"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/renderer/effects/blending/BlendMode.ts#L57"},"packages/engine/src/renderer/effects/blending/BlendMode.ts:57")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"opacity"},"opacity"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"opacity"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Uniform")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/renderer/effects/blending/BlendMode.ts#L58"},"packages/engine/src/renderer/effects/blending/BlendMode.ts:58")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"getblendfunction"},"getBlendFunction"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getBlendFunction"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("p",null,"Returns the blend function."),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("p",null,"The blend function."),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/renderer/effects/blending/BlendMode.ts#L93"},"packages/engine/src/renderer/effects/blending/BlendMode.ts:93")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getshadercode"},"getShaderCode"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getShaderCode"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Returns the blend function shader code."),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The blend function shader code."),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/renderer/effects/blending/BlendMode.ts#L114"},"packages/engine/src/renderer/effects/blending/BlendMode.ts:114")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"setblendfunction"},"setBlendFunction"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"setBlendFunction"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"blendFunction"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Sets the blend function."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"blendFunction")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The blend function.")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/renderer/effects/blending/BlendMode.ts#L103"},"packages/engine/src/renderer/effects/blending/BlendMode.ts:103")))}u.isMDXComponent=!0}}]);