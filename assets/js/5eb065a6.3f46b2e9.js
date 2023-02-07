"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[1639],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6845:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"part4",title:"Shape model fitting to 2D contours"},c="3D from 2D Reconstruction of Vertebra on Fake data",u={type:"mdx",permalink:"/courses/big-data-africa/part4",source:"@site/src/pages/courses/big-data-africa/part4.md"},s=[{value:"Contents:",id:"contents",children:[{value:"Learning goals",id:"learning-goals",children:[],level:4}],level:3},{value:"Reading",id:"reading",children:[],level:3}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3d-from-2d-reconstruction-of-vertebra-on-fake-data"},"3D from 2D Reconstruction of Vertebra on Fake data"),(0,o.kt)("p",null,"In this part we apply Markov Chain Monte Carlo fitting for 3D from 2D reconstruction.\nWe start by using simulated contours, which we know the model can explain, and use this data\nto calibrate our method and to detect computational problems. Once the pipeline is up and running we\nrun it on real data. "),(0,o.kt)("h3",{id:"contents"},"Contents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fitting shape models as Bayesian regression (",(0,o.kt)("a",{parentName:"li",href:"/courses/big-data-africa/fitting-as-regression"},"Article"),")"),(0,o.kt)("li",{parentName:"ul"},"3D from 2D reconstruction of vertebra shapes on simulated data (",(0,o.kt)("a",{parentName:"li",href:"https://bdas2023-s05.idia.ac.za/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fshape-the-world%2Fbig-data-africa-23&urlpath=retro%2Ftree%2Fbig-data-africa-23%2Fnotebooks%2Fshape-fitting.ipynb&branch=main"},"Jupyter-Notebook"),")")),(0,o.kt)("h4",{id:"learning-goals"},"Learning goals"),(0,o.kt)("p",null,"The participants"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand shape model fitting as a regression problem."),(0,o.kt)("li",{parentName:"ul"},"can fit their shape model of the vertebra to simulated 2d contours."),(0,o.kt)("li",{parentName:"ul"},"can use simulated data to evaluate and assess fitting problems."),(0,o.kt)("li",{parentName:"ul"},"can assess the limitations of the model."),(0,o.kt)("li",{parentName:"ul"},"know how to extend the model to include pose and rendering parameters.")),(0,o.kt)("h3",{id:"reading"},"Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Gelman, Andrew, et al. "Bayesian workflow." arXiv preprint arXiv:2011.01808 (2020) ',(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2011.01808"},"(pdf)"),", Pages 12 - 30.")))}d.isMDXComponent=!0}}]);