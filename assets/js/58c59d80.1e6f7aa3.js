"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[7869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),h=i(a),d=r,u=h["".concat(o,".").concat(d)]||h[d]||c[d]||s;return a?n.createElement(u,p(p({ref:t},l),{},{components:a})):n.createElement(u,p({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=h;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,p[1]=m;for(var i=2;i<s;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},691:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>m,toc:()=>o,default:()=>l});var n=a(7462),r=(a(7294),a(3905));const s={id:"toy-problem-introduction",title:"Introducing the toy problem"},p="A toy problem: Inference on hand shapes",m={type:"mdx",permalink:"/courses/big-data-africa/toy-problem-introduction",source:"@site/src/pages/courses/big-data-africa/toy-problem-introduction.md"},o=[{value:"The simplest shape model of a hand",id:"the-simplest-shape-model-of-a-hand",children:[]},{value:"Task and goals",id:"task-and-goals",children:[]}],i={toc:o};function l(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a-toy-problem-inference-on-hand-shapes"},"A toy problem: Inference on hand shapes"),(0,r.kt)("p",null,"Before we approach the real problem of 3D reconstruction of vertebra shapes from 2D contours,\nwe introduce all the relevant techniques on a toy problem. This will allow us to experiment with and understand the main concepts on a simple task, which can be easily understood, visualized and debugged.\nThe task is also simple from a mathematical point of view: We will work on a simple linear regression model with one dependent variable. While this may sound overly simplistic, it turns out that our final application will have exactly the same structure. "),(0,r.kt)("h3",{id:"the-simplest-shape-model-of-a-hand"},"The simplest shape model of a hand"),(0,r.kt)("p",null,"Our toy problem is the simplest example of a shape model. A very rough approximation of a hand shape\ncan be obtained from only two measurements: The length ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"l")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"l")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l")))))," of the hand and the span ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," of the hand\n(see Figure 1). "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"hand-measurements",src:a(8550).Z})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("b",null," Figure 1: A simple shape model from length and span"))))),(0,r.kt)("p",null,"Although this does not capure details in shape variation, it is sufficient to roughly characterize the shapes. "),(0,r.kt)("p",null,"We have measured the length and the span on 233 individuals. The following scatterplot shows these measurements. We see that there is clearly a correlation between length and span. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"hand-measurements",src:a(4213).Z})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("b",null," Figure 1: Measuremnts"))))),(0,r.kt)("p",null,"A histogram of length and span shows an approximation of the distribution of the marginals ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"l")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"l")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"))))),". "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("img",{alt:"hand-measurements",src:a(8629).Z})),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("img",{alt:"hand-measurements",src:a(6799).Z})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null," Figure 2: The marginal distribution of length and span")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"task-and-goals"},"Task and goals"),(0,r.kt)("p",null,"In this project we will run through a typical inference task on this data replicating the steps of the Bayesian workflow. In a first step we model a prior for the length and perform prior-predictive step. We then\nextend this simple model to a regression model, where the length is the predictor for the span. Also in this step we perform prior predictive checks to assess the implications of our prior assumptions.\nIn the next step we fit the model to given data, first using fake-date simulation and in a later step using the real data. We then perform posterior-predictive checks and evaluate our model."))}l.isMDXComponent=!0},8550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hand-measurements-f2c0c1db1c4aafda1aa65a782e97c0c1.png"},4213:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hand-scatter-e06f62720fa10c554b89cc5bd31a3706.png"},8629:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/length-distribution-9740c4390255d9a069248bd6c5e95e03.png"},6799:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/span-distribution-f9851cb33c0e0f42a5844427b3580df2.png"}}]);