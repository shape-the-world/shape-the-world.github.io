"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[5953],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5882:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"bmd-application",title:"Bone mineral density estimation"},s="Bone mineral density estimation",l={type:"mdx",permalink:"/case-studies/vertebra/bmd-application",source:"@site/src/pages/case-studies/vertebra/bmd-application.md"},u=[{value:"Estimating the trabecular region",id:"estimating-the-trabecular-region",children:[],level:3},{value:"Bone mineral density estimation",id:"bone-mineral-density-estimation-1",children:[],level:3}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bone-mineral-density-estimation"},"Bone mineral density estimation"),(0,a.kt)("p",null,"The final part of this case study consists of transfering a template, that defines the trabecular region of the vertebra, to the specific anatomy and use this region for estimating the\nbone mineral density. "),(0,a.kt)("h3",{id:"estimating-the-trabecular-region"},"Estimating the trabecular region"),(0,a.kt)("p",null,"As part of the data preparation, we have annotated the trabecular region in our reference mesh, which we used for building the shape and intensity model. The result of the contour fitting is\na warp of the reference mesh to the vertebra shape with the given contour. Estimating\nthe trabecular region in the reconstructed shape can therefore be done by warping the annotated\nregion along with the reference mesh. "),(0,a.kt)("h3",{id:"bone-mineral-density-estimation-1"},"Bone mineral density estimation"),(0,a.kt)("p",null,"Assuming that the intensity model was successfully fitted, we have now the correct intensities for the target vertebra defined on the annotated trabecular region. The estimation of the bone\nmineral density is then performed by computing the mean intensity over this region. "),(0,a.kt)("p",null,"The code for performing this operation is given in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shape-the-world/vertebra-case-study/blob/main/src/main/scala/bmd/BMDMeasurement.scala"},"BMDMeasurement.scala"),"."))}m.isMDXComponent=!0}}]);