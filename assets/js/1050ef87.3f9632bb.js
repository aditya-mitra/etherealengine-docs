"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[55006],{3905:(t,e,n)=>{n.d(e,{Zo:()=>f,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},f=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,f=s(t,["components","mdxType","originalType","parentName"]),c=d(n),p=r,u=c["".concat(l,".").concat(p)]||c[p]||g[p]||i;return n?a.createElement(u,o(o({ref:e},f),{},{components:n})):a.createElement(u,o({ref:e},f))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57171:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"renderer_effects_glsl_antialiasing_fxaa_frag",title:"Module: renderer/effects/glsl/antialiasing/fxaa.frag",sidebar_label:"renderer/effects/glsl/antialiasing/fxaa.frag",custom_edit_url:null},o=void 0,s={unversionedId:"API/engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag",id:"API/engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag",title:"Module: renderer/effects/glsl/antialiasing/fxaa.frag",description:"Variables",source:"@site/docs/API/engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag",permalink:"/etherealengine-docs/docs/API/engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_glsl_antialiasing_fxaa_frag",title:"Module: renderer/effects/glsl/antialiasing/fxaa.frag",sidebar_label:"renderer/effects/glsl/antialiasing/fxaa.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/blending/glsl/subtract/shader.frag",permalink:"/etherealengine-docs/docs/API/engine/modules/renderer_effects_blending_glsl_subtract_shader_frag"},next:{title:"renderer/effects/glsl/linear-to-srgb/shader.frag",permalink:"/etherealengine-docs/docs/API/engine/modules/renderer_effects_glsl_linear_to_srgb_shader_frag"}},l={},d=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],f={toc:d},c="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"default"},"default"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"\"\\n\\tprecision highp float;\\n\\tuniform sampler2D tDiffuse;\\n\\tuniform vec2 resolution;\\n\\t// varying vec2 vUv;\\n\\t// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)\\n\\t//----------------------------------------------------------------------------------\\n\\t// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag\\n\\t// SDK Version: v3.00\\n\\t// Email:       gameworks@nvidia.com\\n\\t// Site:        http://developer.nvidia.com/\\n\\t//\\n\\t// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.\\n\\t//\\n\\t// Redistribution and use in source and binary forms, with or without\\n\\t// modification, are permitted provided that the following conditions\\n\\t// are met:\\n\\t//  * Redistributions of source code must retain the above copyright\\n\\t//    notice, this list of conditions and the following disclaimer.\\n\\t//  * Redistributions in binary form must reproduce the above copyright\\n\\t//    notice, this list of conditions and the following disclaimer in the\\n\\t//    documentation and/or other materials provided with the distribution.\\n\\t//  * Neither the name of NVIDIA CORPORATION nor the names of its\\n\\t//    contributors may be used to endorse or promote products derived\\n\\t//    from this software without specific prior written permission.\\n\\t//\\n\\t// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY\\n\\t// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\\n\\t// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\n\\t// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR\\n\\t// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\\n\\t// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\\n\\t// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\\n\\t// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\\n\\t// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\\n\\t// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\\n\\t// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\\n\\t//\\n\\t//----------------------------------------------------------------------------------\\n\\t#ifndef FXAA_DISCARD\\n\\t\\t\\t//\\n\\t\\t\\t// Only valid for PC OpenGL currently.\\n\\t\\t\\t// Probably will not work when FXAA_GREEN_AS_LUMA = 1.\\n\\t\\t\\t//\\n\\t\\t\\t// 1 = Use discard on pixels which don't need AA.\\n\\t\\t\\t//     For APIs which enable concurrent TEX+ROP from same surface.\\n\\t\\t\\t// 0 = Return unchanged color on pixels which don't need AA.\\n\\t\\t\\t//\\n\\t\\t\\t#define FXAA_DISCARD 0\\n\\t#endif\\n\\t/*--------------------------------------------------------------------------*/\\n\\t#define FxaaTexTop(t, p) texture2D(t, p, -100.0)\\n\\t#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)\\n\\t/*--------------------------------------------------------------------------*/\\n\\t#define NUM_SAMPLES 5\\n\\t// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha\\n\\tfloat contrast( vec4 a, vec4 b ) {\\n\\t\\t\\tvec4 diff = abs( a - b );\\n\\t\\t\\treturn max( max( max( diff.r, diff.g ), diff.b ), diff.a );\\n\\t}\\n\\t/*============================================================================\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tFXAA3 QUALITY - PC\\n\\t============================================================================*/\\n\\t/*--------------------------------------------------------------------------*/\\n\\tvec4 FxaaPixelShader(\\n\\t\\t\\tvec2 posM,\\n\\t\\t\\tsampler2D tex,\\n\\t\\t\\tvec2 fxaaQualityRcpFrame,\\n\\t\\t\\tfloat fxaaQualityEdgeThreshold,\\n\\t\\t\\tfloat fxaaQualityinvEdgeThreshold\\n\\t) {\\n\\t\\t\\tvec4 rgbaM = FxaaTexTop(tex, posM);\\n\\t\\t\\tvec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);\\n\\t\\t\\tvec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);\\n\\t\\t\\tvec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);\\n\\t\\t\\tvec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);\\n\\t\\t\\t// . S .\\n\\t\\t\\t// W M E\\n\\t\\t\\t// . N .\\n\\t\\t\\tbool earlyExit = max( max( max(\\n\\t\\t\\t\\t\\tcontrast( rgbaM, rgbaN ),\\n\\t\\t\\t\\t\\tcontrast( rgbaM, rgbaS ) ),\\n\\t\\t\\t\\t\\tcontrast( rgbaM, rgbaE ) ),\\n\\t\\t\\t\\t\\tcontrast( rgbaM, rgbaW ) )\\n\\t\\t\\t\\t\\t< fxaaQualityEdgeThreshold;\\n\\t\\t\\t// . 0 .\\n\\t\\t\\t// 0 0 0\\n\\t\\t\\t// . 0 .\\n\\t\\t\\t#if (FXAA_DISCARD == 1)\\n\\t\\t\\t\\t\\tif(earlyExit) FxaaDiscard;\\n\\t\\t\\t#else\\n\\t\\t\\t\\t\\tif(earlyExit) return rgbaM;\\n\\t\\t\\t#endif\\n\\t\\t\\tfloat contrastN = contrast( rgbaM, rgbaN );\\n\\t\\t\\tfloat contrastS = contrast( rgbaM, rgbaS );\\n\\t\\t\\tfloat contrastE = contrast( rgbaM, rgbaE );\\n\\t\\t\\tfloat contrastW = contrast( rgbaM, rgbaW );\\n\\t\\t\\tfloat relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );\\n\\t\\t\\trelativeVContrast *= fxaaQualityinvEdgeThreshold;\\n\\t\\t\\tbool horzSpan = relativeVContrast > 0.;\\n\\t\\t\\t// . 1 .\\n\\t\\t\\t// 0 0 0\\n\\t\\t\\t// . 1 .\\n\\t\\t\\t// 45 deg edge detection and corners of objects, aka V/H contrast is too similar\\n\\t\\t\\tif( abs( relativeVContrast ) < .3 ) {\\n\\t\\t\\t\\t\\t// locate the edge\\n\\t\\t\\t\\t\\tvec2 dirToEdge;\\n\\t\\t\\t\\t\\tdirToEdge.x = contrastE > contrastW ? 1. : -1.;\\n\\t\\t\\t\\t\\tdirToEdge.y = contrastS > contrastN ? 1. : -1.;\\n\\t\\t\\t\\t\\t// . 2 .      . 1 .\\n\\t\\t\\t\\t\\t// 1 0 2  ~=  0 0 1\\n\\t\\t\\t\\t\\t// . 1 .      . 0 .\\n\\t\\t\\t\\t\\t// tap 2 pixels and see which ones are \\\"outside\\\" the edge, to\\n\\t\\t\\t\\t\\t// determine if the edge is vertical or horizontal\\n\\t\\t\\t\\t\\tvec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);\\n\\t\\t\\t\\t\\tfloat matchAlongH = contrast( rgbaM, rgbaAlongH );\\n\\t\\t\\t\\t\\t// . 1 .\\n\\t\\t\\t\\t\\t// 0 0 1\\n\\t\\t\\t\\t\\t// . 0 H\\n\\t\\t\\t\\t\\tvec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);\\n\\t\\t\\t\\t\\tfloat matchAlongV = contrast( rgbaM, rgbaAlongV );\\n\\t\\t\\t\\t\\t// V 1 .\\n\\t\\t\\t\\t\\t// 0 0 1\\n\\t\\t\\t\\t\\t// . 0 .\\n\\t\\t\\t\\t\\trelativeVContrast = matchAlongV - matchAlongH;\\n\\t\\t\\t\\t\\trelativeVContrast *= fxaaQualityinvEdgeThreshold;\\n\\t\\t\\t\\t\\tif( abs( relativeVContrast ) < .3 ) { // 45 deg edge\\n\\t\\t\\t\\t\\t\\t\\t// 1 1 .\\n\\t\\t\\t\\t\\t\\t\\t// 0 0 1\\n\\t\\t\\t\\t\\t\\t\\t// . 0 1\\n\\t\\t\\t\\t\\t\\t\\t// do a simple blur\\n\\t\\t\\t\\t\\t\\t\\treturn mix(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\trgbaM,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t(rgbaN + rgbaS + rgbaE + rgbaW) * .25,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t.4\\n\\t\\t\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\thorzSpan = relativeVContrast > 0.;\\n\\t\\t\\t}\\n\\t\\t\\tif(!horzSpan) rgbaN = rgbaW;\\n\\t\\t\\tif(!horzSpan) rgbaS = rgbaE;\\n\\t\\t\\t// . 0 .      1\\n\\t\\t\\t// 1 0 1  ->  0\\n\\t\\t\\t// . 0 .      1\\n\\t\\t\\tbool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );\\n\\t\\t\\tif(!pairN) rgbaN = rgbaS;\\n\\t\\t\\tvec2 offNP;\\n\\t\\t\\toffNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;\\n\\t\\t\\toffNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;\\n\\t\\t\\tbool doneN = false;\\n\\t\\t\\tbool doneP = false;\\n\\t\\t\\tfloat nDist = 0.;\\n\\t\\t\\tfloat pDist = 0.;\\n\\t\\t\\tvec2 posN = posM;\\n\\t\\t\\tvec2 posP = posM;\\n\\t\\t\\tint iterationsUsed = 0;\\n\\t\\t\\tint iterationsUsedN = 0;\\n\\t\\t\\tint iterationsUsedP = 0;\\n\\t\\t\\tfor( int i = 0; i < NUM_SAMPLES; i++ ) {\\n\\t\\t\\t\\t\\titerationsUsed = i;\\n\\t\\t\\t\\t\\tfloat increment = float(i + 1);\\n\\t\\t\\t\\t\\tif(!doneN) {\\n\\t\\t\\t\\t\\t\\t\\tnDist += increment;\\n\\t\\t\\t\\t\\t\\t\\tposN = posM + offNP * nDist;\\n\\t\\t\\t\\t\\t\\t\\tvec4 rgbaEndN = FxaaTexTop(tex, posN.xy);\\n\\t\\t\\t\\t\\t\\t\\tdoneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );\\n\\t\\t\\t\\t\\t\\t\\titerationsUsedN = i;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\tif(!doneP) {\\n\\t\\t\\t\\t\\t\\t\\tpDist += increment;\\n\\t\\t\\t\\t\\t\\t\\tposP = posM - offNP * pDist;\\n\\t\\t\\t\\t\\t\\t\\tvec4 rgbaEndP = FxaaTexTop(tex, posP.xy);\\n\\t\\t\\t\\t\\t\\t\\tdoneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );\\n\\t\\t\\t\\t\\t\\t\\titerationsUsedP = i;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\tif(doneN || doneP) break;\\n\\t\\t\\t}\\n\\t\\t\\tif ( !doneP && !doneN ) return rgbaM; // failed to find end of edge\\n\\t\\t\\tfloat dist = min(\\n\\t\\t\\t\\t\\tdoneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,\\n\\t\\t\\t\\t\\tdoneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.\\n\\t\\t\\t);\\n\\t\\t\\t// hacky way of reduces blurriness of mostly diagonal edges\\n\\t\\t\\t// but reduces AA quality\\n\\t\\t\\tdist = pow(dist, .5);\\n\\t\\t\\tdist = 1. - dist;\\n\\t\\t\\treturn mix(\\n\\t\\t\\t\\t\\trgbaM,\\n\\t\\t\\t\\t\\trgbaN,\\n\\t\\t\\t\\t\\tdist * .5\\n\\t\\t\\t);\\n\\t}\\n\\tvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\\n\\t\\t\\tconst float edgeDetectionQuality = .2;\\n\\t\\t\\tconst float invEdgeDetectionQuality = 1. / edgeDetectionQuality;\\n\\t\\t\\toutputColor = FxaaPixelShader(\\n\\t\\t\\t\\t\\tuv,\\n\\t\\t\\t\\t\\ttDiffuse,\\n\\t\\t\\t\\t\\tresolution,\\n\\t\\t\\t\\t\\tedgeDetectionQuality, // [0,1] contrast needed, otherwise early discard\\n\\t\\t\\t\\t\\tinvEdgeDetectionQuality\\n\\t\\t\\t);\\n\\t}\\n\"")),(0,r.kt)("p",null,"NVIDIA FXAA by Timothy Lottes\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf"},"https://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WebGL port by @supereggbert\n",(0,r.kt)("a",{parentName:"li",href:"http://www.glge.org/demos/fxaa/"},"http://www.glge.org/demos/fxaa/"),"\nFurther improved by Daniel Sturk\nFurther modified by Josh Field to work with 'postprocessing' library")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/etherealengine/blob/6d0095c/packages/engine/src/renderer/effects/glsl/antialiasing/fxaa.frag.ts#L14"},"packages/engine/src/renderer/effects/glsl/antialiasing/fxaa.frag.ts:14")))}g.isMDXComponent=!0}}]);