"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[5953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,f=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9946:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"bmd-application",title:"Bone mineral density estimation"},o="Bone mineral density estimation",s={type:"mdx",permalink:"/case-studies/vertebra/bmd-application",source:"@site/src/pages/case-studies/vertebra/bmd-application.md"},c=[{value:"Estimating the trabecular region",id:"estimating-the-trabecular-region",children:[]},{value:"Bone mineral density estimation",id:"bone-mineral-density-estimation-1",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bone-mineral-density-estimation"},"Bone mineral density estimation"),(0,a.kt)("p",null,"The final part of this case study consists of transfering a template, that defines the trabecular region of the vertebra, to the specific anatomy and use this region for estimating the\nbone mineral density. "),(0,a.kt)("h3",{id:"estimating-the-trabecular-region"},"Estimating the trabecular region"),(0,a.kt)("p",null,"As part of the data preparation, we have annotated the trabecular region in our reference mesh, which we used for building the shape and intensity model. The result of the contour fitting is\na warp of the reference mesh to the vertebra shape with the given contour. Estimating\nthe trabecular region in the reconstructed shape can therefore be done by warping the annotated\nregion along with the reference mesh. "),(0,a.kt)("h3",{id:"bone-mineral-density-estimation-1"},"Bone mineral density estimation"),(0,a.kt)("p",null,"Assuming that the intensity model was successfully fitted, we have now the correct intensities for the target vertebra defined on the annotated trabecular region. The estimation of the bone\nmineral density is then performed by computing the mean intensity over this region. "),(0,a.kt)("p",null,"The code for performing this operation is given in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shape-the-world/vertebra-case-study/blob/main/src/main/scala/bmd/BMDMeasurement.scala"},"BMDMeasurement.scala"),"."))}p.isMDXComponent=!0}}]);