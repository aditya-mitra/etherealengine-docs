"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[3982],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(a),m=n,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={id:"media_upload_asset_upload_asset_service",title:"Module: media/upload-asset/upload-asset.service",sidebar_label:"media/upload-asset/upload-asset.service",custom_edit_url:null},l=void 0,s={unversionedId:"API/server-core/modules/media_upload_asset_upload_asset_service",id:"API/server-core/modules/media_upload_asset_upload_asset_service",title:"Module: media/upload-asset/upload-asset.service",description:"Interfaces",source:"@site/docs/API/server-core/modules/media_upload_asset_upload_asset_service.md",sourceDirName:"API/server-core/modules",slug:"/API/server-core/modules/media_upload_asset_upload_asset_service",permalink:"/etherealengine-docs/docs/API/server-core/modules/media_upload_asset_upload_asset_service",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"media_upload_asset_upload_asset_service",title:"Module: media/upload-asset/upload-asset.service",sidebar_label:"media/upload-asset/upload-asset.service",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"media/upload-asset/upload-asset.hooks",permalink:"/etherealengine-docs/docs/API/server-core/modules/media_upload_asset_upload_asset_hooks"},next:{title:"networking/instance-attendance/instance-attendance.class",permalink:"/etherealengine-docs/docs/API/server-core/modules/networking_instance_attendance_instance_attendance_class"}},d={},o=[{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"addGenericAssetToS3AndStaticResources",id:"addgenericassettos3andstaticresources",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:o},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"interfaces"},"Interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/etherealengine-docs/docs/API/server-core/interfaces/media_upload_asset_upload_asset_service.UploadParams"},"UploadParams"))),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"addgenericassettos3andstaticresources"},"addGenericAssetToS3AndStaticResources"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addGenericAssetToS3AndStaticResources"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"mimeType"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"storageProviderName?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"StaticResourceInterface"),">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"app")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Application"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"file")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Buffer"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"mimeType")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"args")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"AdminAssetUploadArgumentsType"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"storageProviderName?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"StaticResourceInterface"),">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/server-core/src/media/upload-asset/upload-asset.service.ts#L35"},"packages/server-core/src/media/upload-asset/upload-asset.service.ts:35")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"default"},"default"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"default"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"app"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"app")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/server-core/src/media/upload-asset/upload-asset.service.ts#L130"},"packages/server-core/src/media/upload-asset/upload-asset.service.ts:130")))}u.isMDXComponent=!0}}]);