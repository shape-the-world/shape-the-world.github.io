"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[7642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3469:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>l,toc:()=>s,default:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={id:"part3",title:"Probablistic fitting"},o="Fitting probabilistic models",l={type:"mdx",permalink:"/courses/big-data-africa/part3",source:"@site/src/pages/courses/big-data-africa/part3.md"},s=[{value:"Contents:",id:"contents",children:[]},{value:"Learning goals",id:"learning-goals",children:[]},{value:"Reading",id:"reading",children:[]}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fitting-probabilistic-models"},"Fitting probabilistic models"),(0,n.kt)("p",null,"In this part of the course we look at the problem of model fitting using Markov Chain Monte Carlo methods.\nWe discuss the basic concept and apply it to our toy problem. We will see the value of fake data simulations and\nhow they help us to assess whether the computational procedures yield a faithful approximation of the true posterior. "),(0,n.kt)("h3",{id:"contents"},"Contents:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fitting and Metropolis-Hastings (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/shape-the-world/big-data-africa-23/raw/main/slides/metropolis-hastings.pdf"},"Slides"),")"),(0,n.kt)("li",{parentName:"ul"},"The Metropolis-Hastings algorithm (",(0,n.kt)("a",{parentName:"li",href:"https://bdas2023-s05.idia.ac.za/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fshape-the-world%2Fbig-data-africa-23&urlpath=retro%2Ftree%2Fbig-data-africa-23%2Fnotebooks%2Fmetropolis-hastings.ipynb&branch=main"},"Jupyter-Notebook"),")"),(0,n.kt)("li",{parentName:"ul"},"Practice: Model-fitting using Metropolis-Hastings (toy problem) (",(0,n.kt)("a",{parentName:"li",href:"https://bdas2023-s05.idia.ac.za/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fshape-the-world%2Fbig-data-africa-23&urlpath=retro%2Ftree%2Fbig-data-africa-23%2Fnotebooks%2Ffitting-basics.ipynb&branch=main"},"Jupyter-Notebook"),")")),(0,n.kt)("h3",{id:"learning-goals"},"Learning goals"),(0,n.kt)("p",null,"The participants"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"understand the main ideas behind Monte-Carlo sampling and the Metropolis-Hastings algorithm."),(0,n.kt)("li",{parentName:"ul"},"understand the building blocks for sampling in Scalismo and can adapt them to solve bigger problems."),(0,n.kt)("li",{parentName:"ul"},"can do fake data simulations to diagnose fitting problems. "),(0,n.kt)("li",{parentName:"ul"},"know some techniques to assess the quality of the posterior approximation."),(0,n.kt)("li",{parentName:"ul"},"know some techniques to assess the model quality.")),(0,n.kt)("h3",{id:"reading"},"Reading"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Gelman, Andrew, et al. "Bayesian workflow." arXiv preprint arXiv:2011.01808 (2020) ',(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2011.01808"},"(pdf)"),", Pages 12 - 30.")))}c.isMDXComponent=!0}}]);