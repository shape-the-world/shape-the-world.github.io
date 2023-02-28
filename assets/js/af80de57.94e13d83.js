"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[2039],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),u=i,g=h["".concat(o,".").concat(u)]||h[u]||c[u]||r;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2377:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>l,toc:()=>o,default:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={id:"pipeline-and-data-management",title:"Pipeline and data management"},s="Pipeline and data managementt",l={type:"mdx",permalink:"/case-studies/vertebra/pipeline-and-data-management",source:"@site/src/pages/case-studies/vertebra/pipeline-and-data-management.md"},o=[{value:"Data management",id:"data-management",children:[{value:"Data repository",id:"data-repository",children:[]}]},{value:"Errorhandling,  Logging and Debugging",id:"errorhandling--logging-and-debugging",children:[]}],d={toc:o};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipeline-and-data-managementt"},"Pipeline and data managementt"),(0,i.kt)("h2",{id:"data-management"},"Data management"),(0,i.kt)("p",null,"Data plays a crucial role in shape modelling applications. The shape is learned from\na set of tetrahedral or triangle meshes and the intensity distribution is usally estimated\nfrom a set of images. The data itself usually goes through several differnet stages. It needs to be landmarked, aligned and brought into correspondence. Depending on the application, additional steps might be needed. "),(0,i.kt)("p",null,"Although all the steps in data handling are, in principle, straight-forward, it has shown in practice shape modelling pipelines quickly become messy and difficult\nto maintain when data is handled ad-hoc. We therefore start this case study with discussing an approach for data handling in shape modelling applications. "),(0,i.kt)("h3",{id:"data-repository"},"Data repository"),(0,i.kt)("p",null,"The core idea is the following: "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Data should never be explicitly referred to by its filename or URI. Rather, it is accessed through a data repository, using an abstract identifier (case-id) and processing stage to identify the data.  ")),(0,i.kt)("p",null,"This simple principle ensures that all information on how the data is stored and used is\nstored in a single place, namely the data repository. In our pipeline, the data repository is represented by a Scala ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," (an inteface), which defines how we\ncan interact with the data, plus a concrete implementation, which provides the concrete\nmapping to the datasets, as they are physically stored in the filesystem or the database. "),(0,i.kt)("p",null,"The DataRepository class looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait DataRepository {\n\n  def caseIds: Seq[CaseId]\n\n  ... \n\n  def triangleMesh(stage: Stage, id: CaseId): Try[TriangleMesh[_3D]]\n  def saveTriangleMesh(stage: Stage, id: CaseId, mesh: TriangleMesh[_3D]): Try[Unit]\n\n  def tetrahedralMesh(stage: Stage, id: CaseId): Try[TetrahedralMesh[_3D]]\n  def saveTetrahedralMesh(stage: Stage, id: CaseId, mesh: TetrahedralMesh[_3D]): Try[Unit]\n\n  def landmarks(stage: Stage, id: CaseId): Try[Seq[Landmark[_3D]]]\n\n  ...\n}\n")),(0,i.kt)("p",null,"(See the code on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shape-the-world/vertebra-case-study/blob/main/src/main/scala/data/DataRepository.scala"},"Github")," for more details.)"),(0,i.kt)("p",null,"We see that data is accessed by specifying its ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," it is in.\nThe id is just an identifier for each dataset. Typically, this id is\npart of the filename of the dataset. The stage instead, refers to the processing stage\nof the data. In a typical shape modelling application, we are distinguishing the folowing\nstages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initial: The raw data as we get it from a database"),(0,i.kt)("li",{parentName:"ul"},"Aligned: All the data have been aligned to a common reference coordinate system, which is typically determined using a dataset as a reference and aligning all the data to it using e.g. procrustes alignment. "),(0,i.kt)("li",{parentName:"ul"},"Registered: The meshes are in correspondence with a reference mesh, that was selected.")),(0,i.kt)("p",null,"In code, the stage is defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait Stage\ncase object Initial extends Stage \ncase object Aligned extends Stage \ncase class Registered(level: ResolutionLevel) extends Stage\n")),(0,i.kt)("p",null,"We see that for the stage ",(0,i.kt)("inlineCode",{parentName:"p"},"Registered")," we also distinguish between different resolution levels of the reference mesh. This is useful when we want to build\nmodels on different resolution levels. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DataRepository")," is just an interface. There can be several concrete implementations of it. As part of the pipeline, we provide the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shape-the-world/vertebra-case-study/blob/main/src/main/scala/data/DirectoryBasedDataRepository.scala"},"DirectoryBasedDataRepository"),", which provides a concrete implementation, which assumes that the\ndata are stored on the filesystem. It presupposes a special directory organisation. The implementation therefore also directly serves as documentation\nabout how the data is organized. "),(0,i.kt)("h2",{id:"errorhandling--logging-and-debugging"},"Errorhandling,  Logging and Debugging"),(0,i.kt)("p",null,"We see in the above code snippets that the functions to load the data do not simply return the dataset, such as a ",(0,i.kt)("inlineCode",{parentName:"p"},"TriangleMesh[_3D]"),", but rather a ",(0,i.kt)("inlineCode",{parentName:"p"},"Try[TriangleMesh[_3D]]"),". Wrapping all the data in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Try")," makes it possible to\ndo principled error handling from within the pipeline. While this has some upfront cost in developing the pipeline, it will make life easier when running the pipeline. In a similar spirit, we use a logging framework to produce output from our simulation. "),(0,i.kt)("p",null,"When developing the pipeline it is important that we can visually assess the output. Our code therefore makes extensive use of  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/unibas-gravis/scalismo-ui"},"Scalismo-ui")," for visualizing the datasets, the processes and the results. The GUI that does the visualization is started using "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val ui = ScalismoUI()\n")),(0,i.kt)("p",null,"Once the pipeline is stable and we would like to run it on a server, we can simply replace that call with "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val ui = ScalismoUIHeadless()\n")),(0,i.kt)("p",null,"This will supress any debugging output."))}p.isMDXComponent=!0}}]);