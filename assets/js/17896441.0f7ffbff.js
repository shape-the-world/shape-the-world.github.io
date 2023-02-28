"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[7918],{7313:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(7294),l=a(6010),s=a(907),i=a(3783),r=a(6742),o=a(4973);const c=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=a(2263),m=a(3018);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,d.Z)(),{pluginId:l}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,m.J)(l),{latestDocSuggestion:r,latestVersionSuggestion:o}=(0,s.Jo)(l),c=r??(u=o).docs.find((e=>e.id===u.mainDocId));var u;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:o.label,to:c.path,onClick:()=>i(o.name)})))}const E=function(e){let{versionMetadata:t}=e;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(p,{versionMetadata:t})};var b=a(1217);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement(n.Fragment,null,n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(571);const L="tocCollapsible_1PrD",Z="tocCollapsibleButton_2O1e",k="tocCollapsibleContent_2Ydz",T="tocCollapsibleExpanded_3GYr";function U(e){let{toc:t,className:a}=e;const{collapsed:s,toggleCollapsed:i}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(L,{[T]:!s},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",Z),onClick:i},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:k,collapsed:s},n.createElement(N.r,{toc:t})))}var C=a(6146),y=a(6159);const w="docItemContainer_33ec",A="lastUpdated_3DPF",B="docItemCol_3FnS",x="tocMobile_3Hoh";const I=function(e){const{content:t,versionMetadata:a}=e,{metadata:r,frontMatter:o}=t,{image:d,keywords:m,hide_title:u,hide_table_of_contents:h}=o,{description:v,title:p,editUrl:g,lastUpdatedAt:f,formattedLastUpdatedAt:L,lastUpdatedBy:Z}=r,{pluginId:k}=(0,s.gA)({failfast:!0}),T=(0,s.gB)(k).length>1,I=!u&&void 0===t.contentTitle,M=(0,i.Z)(),D=!h&&t.toc&&t.toc.length>0,S=D&&("desktop"===M||"ssr"===M);return n.createElement(n.Fragment,null,n.createElement(b.Z,{title:p,description:v,keywords:m,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[B]:!h})},n.createElement(E,{versionMetadata:a}),n.createElement("div",{className:w},n.createElement("article",null,T&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",a.label),D&&n.createElement(U,{toc:t.toc,className:x}),n.createElement("div",{className:"markdown"},I&&n.createElement(y.N,null,p),n.createElement(t,null)),(g||f||Z)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},g&&n.createElement(C.Z,{editUrl:g})),n.createElement("div",{className:(0,l.Z)("col",A)},(f||Z)&&n.createElement(_,{lastUpdatedAt:f,formattedLastUpdatedAt:L,lastUpdatedBy:Z})))),n.createElement(c,{metadata:r}))),S&&n.createElement("div",{className:"col col--3"},n.createElement(N.Z,{toc:t.toc}))))}},6146:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(4973),s=a(7462),i=a(6010);const r="iconEdit_2_ui",o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(r,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),s=a(6010),i=a(4973),r=a(3018);const o="enhancedAnchor_2LWZ",c="h1Heading_27L5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0,className:c}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...n}=e;const{navbar:{hideOnScroll:c}}=(0,r.LU)();return a?l.createElement(t,n,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,s.Z)("anchor",{[o]:!c}),id:a}),n.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,n)});var t}},571:(e,t,a)=>{a.d(t,{r:()=>o,Z:()=>c});var n=a(7294),l=a(6010);const s=function(e,t,a){const[l,s]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const r=document.getElementsByClassName(e);for(;a<r.length&&!i;){const e=r[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),s(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",r="table-of-contents__link";function o(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:r,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))))):null}const c=function(e){let{toc:t}=e;return s(r,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);