(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4376],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6742:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(9756),a=r(7294),o=r(3727),i=r(2263),s=r(3919),l=r(412),c=(0,a.createContext)({collectLink:function(){}}),u=r(4996),p=r(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,r,f=e.isNavLink,m=e.to,b=e.href,v=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,y=void 0===k||k,w=(0,n.Z)(e,d),S=(0,i.Z)().siteConfig,M=S.trailingSlash,x=S.baseUrl,L=(0,u.C)().withBaseUrl,E=(0,a.useContext)(c),_=m||b,O=(0,s.Z)(_),N=null==_?void 0:_.replace("pathname://",""),P=void 0!==N?(r=N,y&&function(e){return e.startsWith("/")}(r)?L(r):r):void 0;P&&O&&(P=(0,p.applyTrailingSlash)(P,{trailingSlash:M,baseUrl:x}));var T,C=(0,a.useRef)(!1),j=f?o.OL:o.rU,I=l.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!I&&O&&null!=P&&window.docusaurus.prefetch(P),function(){I&&T&&T.disconnect()}}),[P,I,O]);var Z=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,U=!P||!O||Z;return P&&O&&!Z&&!h&&E.collectLink(P),U?a.createElement("a",Object.assign({href:P},_&&!O&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(j,Object.assign({},w,{onMouseEnter:function(){C.current||null==P||(window.docusaurus.preload(P),C.current=!0)},innerRef:function(e){var t,r;I&&e&&O&&(t=e,r=function(){null!=P&&window.docusaurus.prefetch(P)},(T=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),r())}))}))).observe(t))},to:P||""},f&&{isActive:g,activeClassName:v}))}},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(2263),a=r(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(s)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===n?o:(a=o,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var o=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},180:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(2122),a=r(7294),o=(r(6742),"layout_grid_row_zgGT"),i="feature_card_1Zdz",s="card_3sVm",l="card__image_2QCo",c="card__body_14k7",u="card__footer_1-4V",p=[{src:"/img/notebooks/cog_services_on_spark_2.svg",title:"The Cognitive Services on Spark",body:"Leverage the Microsoft Cognitive Services at unprecedented scales in your existing SparkML pipelines.",footer:"Read the Paper",burl:"https://arxiv.org/abs/1810.08744"},{src:"/img/notebooks/SparkServing3.svg",title:"Stress Free Serving",body:"Spark is well known for it's ability to switch between batch and streaming workloads by modifying a single line.       We push this concept even further and enable distributed web services with the same API as batch and streaming workloads.",footer:"Learn More",burl:"notebooks/Spark%20Serving/about"},{src:"/img/notebooks/decision_tree_recolor.png",title:"Lightning Fast Gradient Boosting",body:"MMLSpark adds GPU enabled gradient boosted machines from the popular framework LightGBM.     Users can mix and match frameworks in a single distributed environment and API.",footer:"Try an Example",burl:"notebooks/LightGBM/LightGBM%20-%20Overview"},{src:"/img/notebooks/vw-blue-dark-orange.svg",title:"Fast and Sparse Text Analytics",body:"Vowpal Wabbit on Spark enables new classes of workloads in scalable and performant text analytics",footer:"Try an Example",burl:"notebooks/Vowpal%20Wabbit/Vowpal%20Wabbit%20-%20Overview"},{src:"/img/notebooks/microservice_recolor.png",title:"Distributed Microservices",body:"MMLSpark provides powerful and idiomatic tools to communicate with any HTTP endpoint service using Spark.     Users can now use Spark as a elastic micro-service orchestrator.",footer:"Learn More",burl:"notebooks/HTTP/about"},{src:"/img/notebooks/LIME-1.svg",title:"Large Scale Model Interpretability",body:"Understand any image classifier with a distributed implementation of Local Interpretable Model Agnostic Explanations (LIME).",footer:"Try an Example",burl:"notebooks/Model%20Interpretation/ModelInterpretation%20-%20Snow%20Leopard%20Detection"},{src:"/img/notebooks/cntk-1.svg",title:"Scalable Deep Learning",body:"MMLSpark integrates the distributed computing framework Apache Spark with the flexible deep learning framework CNTK.     Enabling deep learning at unprecedented scales.",footer:"Read the Paper",burl:"https://arxiv.org/abs/1804.04031"},{src:"/img/multilingual.svg",title:"Broad Language Support",body:"MMLSpark's API spans Scala, Python, Java, R, .NET and C# so you can integrate with any ecosystem.",footer:"Try our PySpark Examples",burl:"notebooks/about"}];function d(e){var t=e.src,r=e.title,n=e.body,o=e.footer,p=e.burl;return a.createElement("div",{class:i},a.createElement("div",{class:s},a.createElement("div",{class:l},a.createElement("img",{src:t,alt:"Image alt text",title:"Logo Title Text 1",height:"200"})),a.createElement("div",{class:c},a.createElement("h4",null,r),a.createElement("small",null,n)),a.createElement("div",{class:u},a.createElement("a",{class:"button button--primary button--block",href:p},o))))}var f=function(){return p.forEach,p&&p.length&&a.createElement("div",{className:o},p.map((function(e,t){return a.createElement(d,(0,n.Z)({key:t},e))})))}},3829:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(2263),o=r(6742),i="notebookCard_2Dlb";var s=function(e){var t=e.url;return n.createElement(o.Z,{to:"/docs/"+t.url_path,className:i},n.createElement("strong",null,t.name))};var l=function(){return(0,a.Z)().siteConfig.customFields.examples.map((function(e){return n.createElement(s,{url:e})}))}},6463:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return f},default:function(){return b}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=r(6742),s=r(3829),l=r(180),c=["components"],u={title:"SynapseML",sidebar_label:"Introduction",hide_title:!0},p=void 0,d={unversionedId:"about",id:"version-0.9.1/about",isDocsHomePage:!1,title:"SynapseML",description:"SynapseML is an ecosystem of tools aimed towards expanding the distributed computing framework",source:"@site/versioned_docs/version-0.9.1/about.md",sourceDirName:".",slug:"/about",permalink:"/docs/about",version:"0.9.1",frontMatter:{title:"SynapseML",sidebar_label:"Introduction",hide_title:!0},sidebar:"version-0.9.1/docs",next:{title:"Installation",permalink:"/docs/getting_started/installation"}},f=[{value:"Examples",id:"examples",children:[]},{value:"Explore our Features",id:"explore-our-features",children:[]},{value:"Papers",id:"papers",children:[]}],m={toc:f};function b(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{src:"/img/logo.svg"})),(0,o.kt)("h1",{id:"synapseml"},"SynapseML"),(0,o.kt)("p",null,"SynapseML is an ecosystem of tools aimed towards expanding the distributed computing framework\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/spark"},"Apache Spark")," in several new directions.\nSynapseML adds many deep learning and data science tools to the Spark ecosystem,\nincluding seamless integration of Spark Machine Learning pipelines with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/CNTK"},"Microsoft Cognitive Toolkit\n(CNTK)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/LightGBM"},"LightGBM")," and\n",(0,o.kt)("a",{parentName:"p",href:"http://www.opencv.org/"},"OpenCV"),". These tools enable powerful and highly-scalable predictive and analytical models\nfor a variety of datasources."),(0,o.kt)("p",null,"SynapseML also brings new networking capabilities to the Spark Ecosystem. With the HTTP on Spark project, users\ncan embed ",(0,o.kt)("strong",{parentName:"p"},"any")," web service into their SparkML models. In this vein, SynapseML provides easy to use\nSparkML transformers for a wide variety of ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/cognitive-services/"},"Microsoft Cognitive Services"),". For production grade deployment, the Spark Serving project enables high throughput,\nsub-millisecond latency web services, backed by your Spark cluster."),(0,o.kt)("p",null,"SynapseML requires Scala 2.12, Spark 3.0+, and Python 3.6+.\nSee the API documentation ",(0,o.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/0.9.1/scala/index.html#package"},"for\nScala")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/0.9.1/pyspark/index.html"},"for\nPySpark"),"."),(0,o.kt)(i.Z,{to:"/docs/getting_started/installation",className:"button button--lg button--outline button--block button--primary",mdxType:"Link"},"Get Started"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(s.Z,{mdxType:"NotebookExamples"}),(0,o.kt)("h2",{id:"explore-our-features"},"Explore our Features"),(0,o.kt)(l.Z,{mdxType:"FeatureCards"}),(0,o.kt)("h2",{id:"papers"},"Papers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2009.08044"},"Large Scale Intelligent Microservices"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2007.07177"},"Conditional Image Retrieval"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1810.08744"},"SynapseML: Unifying Machine Learning Ecosystems at Massive Scales"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1804.04031"},"Flexible and Scalable Deep Learning with MMLSpark")))))}b.isMDXComponent=!0}}]);