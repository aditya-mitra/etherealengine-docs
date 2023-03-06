"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[6432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),v=i,k=s["".concat(d,".").concat(v)]||s[v]||m[v]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},47404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"src_admin_services_ServerInfoService",title:"Module: src/admin/services/ServerInfoService",sidebar_label:"src/admin/services/ServerInfoService",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"API/client-core/modules/src_admin_services_ServerInfoService",id:"API/client-core/modules/src_admin_services_ServerInfoService",title:"Module: src/admin/services/ServerInfoService",description:"Classes",source:"@site/docs/API/client-core/modules/src_admin_services_ServerInfoService.md",sourceDirName:"API/client-core/modules",slug:"/API/client-core/modules/src_admin_services_ServerInfoService",permalink:"/etherealengine-docs/docs/API/client-core/modules/src_admin_services_ServerInfoService",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_admin_services_ServerInfoService",title:"Module: src/admin/services/ServerInfoService",sidebar_label:"src/admin/services/ServerInfoService",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/admin/services/ScopeTypeService",permalink:"/etherealengine-docs/docs/API/client-core/modules/src_admin_services_ScopeTypeService"},next:{title:"src/admin/services/ServerLogsService",permalink:"/etherealengine-docs/docs/API/client-core/modules/src_admin_services_ServerLogsService"}},d={},p=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"AdminServerInfoReceptors",id:"adminserverinforeceptors",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"ServerInfoService",id:"serverinfoservice",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"accessServerInfoState",id:"accessserverinfostate",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useServerInfoState",id:"useserverinfostate",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/etherealengine-docs/docs/API/client-core/classes/src_admin_services_ServerInfoService.AdminServerInfoActions"},"AdminServerInfoActions"))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"adminserverinforeceptors"},"AdminServerInfoReceptors"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"AdminServerInfoReceptors"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fetchServerInfoRequestedReceptor")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"xre.client.AdminServerInfo.FETCH_SERVER_INFO_REQUESTED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fetchServerInfoRetrievedReceptor")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"ServerInfoInterface"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"xre.client.AdminServerInfo.FETCH_SERVER_INFO_RETRIEVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serverInfoPodRemovedReceptor")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"action"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"xre.client.AdminLocation.SERVER_INFO_POD_REMOVED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/client-core/src/admin/services/ServerInfoService.ts#L51"},"packages/client-core/src/admin/services/ServerInfoService.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serverinfoservice"},"ServerInfoService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"ServerInfoService"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fetchServerInfo")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"void"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"removePod")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"podName"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"void"),">")))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/client-core/src/admin/services/ServerInfoService.ts#L62"},"packages/client-core/src/admin/services/ServerInfoService.ts:62")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"accessserverinfostate"},"accessServerInfoState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"accessServerInfoState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"fetched"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieving"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"servers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerInfoInterface"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"updateNeeded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true }, {}",">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"fetched"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieving"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"servers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerInfoInterface"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"updateNeeded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true }, {}",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/client-core/src/admin/services/ServerInfoService.ts#L57"},"packages/client-core/src/admin/services/ServerInfoService.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useserverinfostate"},"useServerInfoState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useServerInfoState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"fetched"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieving"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"servers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerInfoInterface"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"updateNeeded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true }, {}",">"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"fetched"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieving"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"servers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerInfoInterface"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"updateNeeded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true }, {}",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/client-core/src/admin/services/ServerInfoService.ts#L59"},"packages/client-core/src/admin/services/ServerInfoService.ts:59")))}m.isMDXComponent=!0}}]);