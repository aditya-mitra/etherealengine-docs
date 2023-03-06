"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[84714],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,v=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(v,o(o({ref:r},c),{},{components:t})):n.createElement(v,o({ref:r},c))}));function v(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var s=t.length,o=new Array(s);o[0]=m;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[u]="string"==typeof e?e:l,o[1]=a;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13778:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=t(87462),l=(t(67294),t(3905));const s={id:"cluster_server_logs_server_logs_helper",title:"Module: cluster/server-logs/server-logs-helper",sidebar_label:"cluster/server-logs/server-logs-helper",sidebar_position:0,custom_edit_url:null},o=void 0,a={unversionedId:"API/server-core/modules/cluster_server_logs_server_logs_helper",id:"API/server-core/modules/cluster_server_logs_server_logs_helper",title:"Module: cluster/server-logs/server-logs-helper",description:"Functions",source:"@site/docs/API/server-core/modules/cluster_server_logs_server_logs_helper.md",sourceDirName:"API/server-core/modules",slug:"/API/server-core/modules/cluster_server_logs_server_logs_helper",permalink:"/etherealengine-docs/docs/API/server-core/modules/cluster_server_logs_server_logs_helper",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"cluster_server_logs_server_logs_helper",title:"Module: cluster/server-logs/server-logs-helper",sidebar_label:"cluster/server-logs/server-logs-helper",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"cluster/server-info/server-info-helper",permalink:"/etherealengine-docs/docs/API/server-core/modules/cluster_server_info_server_info_helper"},next:{title:"cluster/services",permalink:"/etherealengine-docs/docs/API/server-core/modules/cluster_services"}},i={},p=[{value:"Functions",id:"functions",level:2},{value:"getServerLogs",id:"getserverlogs",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,l.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"getserverlogs"},"getServerLogs"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getServerLogs"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"podName"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"containerName"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"app"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"podName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"containerName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"app")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/server-core/src/cluster/server-logs/server-logs-helper.ts#L7"},"packages/server-core/src/cluster/server-logs/server-logs-helper.ts:7")))}d.isMDXComponent=!0}}]);