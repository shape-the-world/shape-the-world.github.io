"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[5776],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5059:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"part2",title:"Modelling shapes"},p="Modelling of vertebra shapes",s={type:"mdx",permalink:"/courses/big-data-africa/part2",source:"@site/src/pages/courses/big-data-africa/part2.md"},c=[{value:"Contents:",id:"contents",children:[],level:3},{value:"Learning goals",id:"learning-goals",children:[],level:3},{value:"Reading",id:"reading",children:[],level:3}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modelling-of-vertebra-shapes"},"Modelling of vertebra shapes"),(0,o.kt)("p",null,"In this part of the project we apply the steps that we performed for our toy example to\na generative model of 2D contours of 3D shapes. Equally important, we assess the expressive power and limitations of our model though prior-predictive checks."),(0,o.kt)("h3",{id:"contents"},"Contents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modelling shapes (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shape-the-world/big-data-africa-23/raw/main/slides/shape-modelling.pdf"},"Slides"),")"),(0,o.kt)("li",{parentName:"ul"},"Generative modelling vertebra shapes and contours (",(0,o.kt)("a",{parentName:"li",href:"https://bdas2023-s05.idia.ac.za/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fshape-the-world%2Fbig-data-africa-23&urlpath=retro%2Ftree%2Fbig-data-africa-23%2Fnotebooks%2Fshape-modelling.ipynb&branch=main"},"Jupyter-Notebook"),")")),(0,o.kt)("h3",{id:"learning-goals"},"Learning goals"),(0,o.kt)("p",null,"The participants"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"understand shape models as a probability distribution."),(0,o.kt)("li",{parentName:"ul"},"can visualize samples from the shape model and know how to perform predictive checks to assess model quality."),(0,o.kt)("li",{parentName:"ul"},"can perform predictive checks for the derived shape and contour model and can assess the model quality and impact of the prior distributions. ")),(0,o.kt)("h3",{id:"reading"},"Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Gelman, Andrew, et al. "Bayesian workflow." arXiv preprint arXiv:2011.01808 (2020) ',(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2011.01808"},"(pdf)"),", Pages 1 - 11.")))}d.isMDXComponent=!0}}]);