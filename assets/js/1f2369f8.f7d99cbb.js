"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[5546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},i="Writing Good Tests",o={unversionedId:"testing/test_driven_development",id:"testing/test_driven_development",title:"Writing Good Tests",description:"Now that our code has been thoughtfully organized into stateless functions we can easily put them to the test with three simple steps:",source:"@site/docs/4_testing/3_test_driven_development.md",sourceDirName:"4_testing",slug:"/testing/test_driven_development",permalink:"/etherealengine-docs/docs/testing/test_driven_development",draft:!1,editUrl:"https://github.com/etherealengine/etherealengine-docs/docs/4_testing/3_test_driven_development.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing Reasonable & Testable Code",permalink:"/etherealengine-docs/docs/testing/reasonable_code"},next:{title:"Debugging",permalink:"/etherealengine-docs/docs/testing/debugging"}},l={},c=[{value:"Test-Driven Development (source)",id:"test-driven-development-source",level:2},{value:"Antipatterns",id:"antipatterns",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-good-tests"},"Writing Good Tests"),(0,r.kt)("p",null,"Now that our code has been thoughtfully organized into stateless functions we can easily put them to the test with three simple steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mock"),(0,r.kt)("li",{parentName:"ol"},"Run"),(0,r.kt)("li",{parentName:"ol"},"Assert")),(0,r.kt)("p",null,"First, mock up data for the input parameters."),(0,r.kt)("p",null,"Then, run the function with the input data to produce an output."),(0,r.kt)("p",null,"Finally, assert that the output is correct."),(0,r.kt)("h2",{id:"test-driven-development-source"},"Test-Driven Development (",(0,r.kt)("a",{parentName:"h2",href:"https://en.wikipedia.org/wiki/Test-driven_development"},"source"),")"),(0,r.kt)("p",null,"Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later. "),(0,r.kt)("p",null,"This methodology is extremely useful and productive, because it means that your code will ",(0,r.kt)("em",{parentName:"p"},"always")," have test coverage. Not only that, but you can save time by ensuring that the feature is working simply by virtue of the tests passing, instead of having to run the entire software to see whether or not the feature or module in question is functioning correctly."),(0,r.kt)("p",null,"The following sequence is based on the book Test-Driven Development by Example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a test"),(0,r.kt)("p",{parentName:"li"},"The adding of a new feature begins by writing a test that passes if and ",(0,r.kt)("em",{parentName:"p"},"only")," if the feature's specifications are met. The developer can discover these specifications by asking about use cases and user stories. A key benefit of test-driven development is that it makes the developer focus on requirements before writing code. This is in contrast with the usual practice, where unit tests are only written after code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run all tests. The new test should fail for expected reasons"),(0,r.kt)("p",{parentName:"li"},"This shows that new code is actually needed for the desired feature. It validates that the test harness is working correctly. It rules out the possibility that the new test is flawed and will always pass.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the simplest code that passes the new test"),(0,r.kt)("p",{parentName:"li"},"Inelegant or hard code is acceptable, as long as it passes the test. The code will be honed anyway in Step 5. No code should be added beyond the tested functionality.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All tests should now pass"),(0,r.kt)("p",{parentName:"li"},"If any fail, the new code must be revised until they pass. This ensures the new code meets the test requirements and does not break existing features.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refactor as needed, using tests after each refactor to ensure that functionality is preserved"),(0,r.kt)("p",{parentName:"li"},"Code is refactored for readability and maintainability. In particular, hard-coded test data should be removed. Running the test suite after each refactor helps ensure that no existing functionality is broken."),(0,r.kt)("p",{parentName:"li"},"Examples of refactoring:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"moving code to where it most logically belongs"),(0,r.kt)("li",{parentName:"ul"},"removing duplicate code"),(0,r.kt)("li",{parentName:"ul"},"making names self-documenting"),(0,r.kt)("li",{parentName:"ul"},"splitting methods into smaller pieces"),(0,r.kt)("li",{parentName:"ul"},"re-arranging inheritance hierarchies")))),(0,r.kt)("p",null,"The cycle above is repeated for each new piece of functionality. Tests should be small and incremental, and commits made often. That way, if new code fails some tests, the programmer can simply undo or revert rather than debug excessively. When using external libraries, it is important not to write tests that are so small as to effectively test merely the library itself, unless there is some reason to believe that the library is buggy or not feature-rich enough to serve all the needs of the software under development."),(0,r.kt)("h3",{id:"antipatterns"},"Antipatterns"),(0,r.kt)("p",null,'Practices to avoid, or "anti-patterns"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Having test cases depend on system state manipulated from previously executed test cases (i.e., you should always start a unit test from a known and pre-configured state)."),(0,r.kt)("li",{parentName:"ul"},"Dependencies between test cases. A test suite where test cases are dependent upon each other is brittle and complex. Execution order should not be presumed. Basic refactoring of the initial test cases or structure of the UUT causes a spiral of increasingly pervasive impacts in associated tests."),(0,r.kt)("li",{parentName:"ul"},"Interdependent tests. Interdependent tests can cause cascading false negatives. A failure in an early test case breaks a later test case even if no actual fault exists in the UUT, increasing defect analysis and debug efforts."),(0,r.kt)("li",{parentName:"ul"},"Testing precise execution behavior timing or performance."),(0,r.kt)("li",{parentName:"ul"},'Building "all-knowing oracles". An oracle that inspects more than necessary is more expensive and brittle over time. This very common error is dangerous because it causes a subtle but pervasive time sink across the complex project.'),(0,r.kt)("li",{parentName:"ul"},"Testing implementation details."),(0,r.kt)("li",{parentName:"ul"},"Slow running tests.")))}d.isMDXComponent=!0}}]);