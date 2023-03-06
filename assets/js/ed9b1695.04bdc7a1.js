"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[44991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),N=r,c=m["".concat(l,".").concat(N)]||m[N]||k[N]||i;return n?a.createElement(c,d(d({ref:t},p),{},{components:n})):a.createElement(c,d({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=N;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,d[1]=o;for(var s=2;s<i;s++)d[s]=n[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},5340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"scene_functions_loaders_PrefabComponentFunctions",title:"Module: scene/functions/loaders/PrefabComponentFunctions",sidebar_label:"scene/functions/loaders/PrefabComponentFunctions",sidebar_position:0,custom_edit_url:null},d=void 0,o={unversionedId:"API/engine/modules/scene_functions_loaders_PrefabComponentFunctions",id:"API/engine/modules/scene_functions_loaders_PrefabComponentFunctions",title:"Module: scene/functions/loaders/PrefabComponentFunctions",description:"Functions",source:"@site/docs/API/engine/modules/scene_functions_loaders_PrefabComponentFunctions.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_functions_loaders_PrefabComponentFunctions",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_functions_loaders_PrefabComponentFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_PrefabComponentFunctions",title:"Module: scene/functions/loaders/PrefabComponentFunctions",sidebar_label:"scene/functions/loaders/PrefabComponentFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/PortalFunctions",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_functions_loaders_PortalFunctions"},next:{title:"scene/functions/loaders/SkyboxFunctions",permalink:"/etherealengine-docs/docs/API/engine/modules/scene_functions_loaders_SkyboxFunctions"}},l={},s=[{value:"Functions",id:"functions",level:2},{value:"deserializePrefab",id:"deserializeprefab",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"loadPrefab",id:"loadprefab",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"unloadPrefab",id:"unloadprefab",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:s},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"deserializeprefab"},"deserializePrefab"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deserializePrefab"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/scene/functions/loaders/PrefabComponentFunctions.ts#L68"},"packages/engine/src/scene/functions/loaders/PrefabComponentFunctions.ts:68")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loadprefab"},"loadPrefab"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"loadPrefab"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"loader?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AssetLoader"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.assetLoadCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadingArgs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"assetType"),": ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/enums/assets_enum_AssetType.AssetType"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetType")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"onLoad"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"response"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),") => (",(0,r.kt)("inlineCode",{parentName:"td"},"asset"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"void"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.getAbsolutePath")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.getAssetClass")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"assetFileName"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/enums/assets_enum_AssetClass.AssetClass"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetClass"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.getAssetType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"assetFileName"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/enums/assets_enum_AssetType.AssetType"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetType"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.getLoader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"assetType"),": ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/enums/assets_enum_AssetType.AssetType"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetType")),") => ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/assets_loaders_tga_TGALoader.TGALoader"},(0,r.kt)("inlineCode",{parentName:"a"},"TGALoader"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"FileLoader")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/assets_classes_XRELoader.XRELoader"},(0,r.kt)("inlineCode",{parentName:"a"},"XRELoader"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/assets_loaders_gltf_GLTFLoader.GLTFLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"GLTFLoader"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/assets_loaders_usdz_USDZLoader.USDZLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"USDZLoader"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/classes/assets_loaders_fbx_FBXLoader.FBXLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"FBXLoader"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"TextureLoader")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"AudioLoader")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"td"},"load"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"src"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"onLoad"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"result"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")," = loadVideoTexture }"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.handleLODs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"asset"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Object3D"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Event"),">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Object3D"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Event"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.isSupported")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"assetFileName"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.load")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"_url"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadingArgs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"onLoad"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"response"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"onProgress"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"request"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"ProgressEvent"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget"),">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"onError"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Error")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ErrorEvent"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.loadAsync")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadingArgs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"onProgress"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"request"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"ProgressEvent"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget"),">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.loaders")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loader.processModelAsset")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"asset"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Mesh"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Material"),"[]",">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadingArgs"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/scene/functions/loaders/PrefabComponentFunctions.ts#L44"},"packages/engine/src/scene/functions/loaders/PrefabComponentFunctions.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unloadprefab"},"unloadPrefab"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unloadPrefab"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/etherealengine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/scene/functions/loaders/PrefabComponentFunctions.ts#L17"},"packages/engine/src/scene/functions/loaders/PrefabComponentFunctions.ts:17")))}k.isMDXComponent=!0}}]);