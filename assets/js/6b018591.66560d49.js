(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[2610],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||s;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1332:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5386:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7294),r=n(8578);var s=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_2kG2",i="tabItemActive_3NDg";var c=37,u=39;var m=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,m=e.values,p=e.groupId,f=e.className,d=s(),y=d.tabGroupChoices,b=d.setTabGroupChoices,h=(0,a.useState)(r),g=h[0],v=h[1],w=a.Children.toArray(e.children),k=[];if(null!=p){var T=y[p];null!=T&&T!==g&&m.some((function(e){return e.value===T}))&&v(T)}var C=function(e){var t=e.currentTarget,n=k.indexOf(t),a=m[n].value;v(a),null!=p&&(b(p,a),setTimeout((function(){var e,n,a,r,s,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&s<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},I=function(e){var t,n;switch(e.keyCode){case u:var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case c:var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:I,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},8578:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},1989:function(e,t,n){"use strict";var a=n(7294),r=n(2263);t.Z=function(e){var t=e.className,n=e.py,s=e.scala,o=e.sourceLink,l=(0,r.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+l+"/pyspark/"+n,c="https://mmlspark.blob.core.windows.net/docs/"+l+"/scala/"+s;return a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Python API: "),a.createElement("a",{href:i},t)),a.createElement("td",null,a.createElement("strong",null,"Scala API: "),a.createElement("a",{href:c},t)),a.createElement("td",null,a.createElement("strong",null,"Source: "),a.createElement("a",{href:o},t)))))}},7435:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return f},default:function(){return y}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=n(5386),l=n(1332),i=n(1989),c=["components"],u={},m=void 0,p={unversionedId:"documentation/estimators/core/_Stages",id:"version-0.9.1/documentation/estimators/core/_Stages",isDocsHomePage:!1,title:"_Stages",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.1/documentation/estimators/core/_Stages.md",sourceDirName:"documentation/estimators/core",slug:"/documentation/estimators/core/_Stages",permalink:"/docs/documentation/estimators/core/_Stages",version:"0.9.1",frontMatter:{}},f=[{value:"Stages",id:"stages",children:[{value:"ClassBalancer",id:"classbalancer",children:[]},{value:"MultiColumnAdapter",id:"multicolumnadapter",children:[]},{value:"Timer",id:"timer",children:[]}]}],d={toc:f};function y(e){var t=e.components,n=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"stages"},"Stages"),(0,s.kt)("h3",{id:"classbalancer"},"ClassBalancer"),(0,s.kt)(o.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.stages import *\n\ndf = (spark.createDataFrame([\n      (0, 1.0, "Hi I"),\n      (1, 1.0, "I wish for snow today"),\n      (2, 2.0, "I wish for snow today"),\n      (3, 2.0, "I wish for snow today"),\n      (4, 2.0, "I wish for snow today"),\n      (5, 2.0, "I wish for snow today"),\n      (6, 0.0, "I wish for snow today"),\n      (7, 1.0, "I wish for snow today"),\n      (8, 0.0, "we Cant go to the park, because of the snow!"),\n      (9, 2.0, "")\n      ], ["index", "label", "sentence"]))\n\ncb = ClassBalancer().setInputCol("label")\n\ndisplay(cb.fit(df).transform(df))\n'))),(0,s.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.stages._\n\nval df = Seq(\n      (0, 1.0, "Hi I"),\n      (1, 1.0, "I wish for snow today"),\n      (2, 2.0, "I wish for snow today"),\n      (3, 2.0, "I wish for snow today"),\n      (4, 2.0, "I wish for snow today"),\n      (5, 2.0, "I wish for snow today"),\n      (6, 0.0, "I wish for snow today"),\n      (7, 1.0, "I wish for snow today"),\n      (8, 0.0, "we Cant go to the park, because of the snow!"),\n      (9, 2.0, "")).toDF("index", "label", "sentence")\n\nval cb = new ClassBalancer().setInputCol("label")\n\ndisplay(cb.fit(df).transform(df))\n')))),(0,s.kt)(i.Z,{className:"ClassBalancer",py:"synapse.ml.stages.html#module-synapse.ml.stages.ClassBalancer",scala:"com/microsoft/azure/synapse/ml/stages/ClassBalancer.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/stages/ClassBalancer.scala",mdxType:"DocTable"}),(0,s.kt)("h3",{id:"multicolumnadapter"},"MultiColumnAdapter"),(0,s.kt)(o.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.stages import *\nfrom pyspark.ml.feature import Tokenizer\n\ndf = (spark.createDataFrame([\n        (0, "This is a test", "this is one too"),\n        (1, "could be a test", "bar"),\n        (2, "foo", "bar"),\n        (3, "foo", "maybe not")\n      ], ["label", "words1", "words2"]))\n\nstage1 = Tokenizer()\nmca = (MultiColumnAdapter()\n        .setBaseStage(stage1)\n        .setInputCols(["words1",  "words2"])\n        .setOutputCols(["output1", "output2"]))\n\ndisplay(mca.fit(df).transform(df))\n'))),(0,s.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.stages._\nimport org.apache.spark.ml.feature.Tokenizer\n\nval df = (Seq(\n    (0, "This is a test", "this is one too"),\n    (1, "could be a test", "bar"),\n    (2, "foo", "bar"),\n    (3, "foo", "maybe not"))\n    .toDF("label", "words1", "words2"))\n\nval stage1 = new Tokenizer()\nval mca = (new MultiColumnAdapter()\n        .setBaseStage(stage1)\n        .setInputCols(Array[String]("words1",  "words2"))\n        .setOutputCols(Array[String]("output1", "output2")))\n\ndisplay(mca.fit(df).transform(df))\n')))),(0,s.kt)(i.Z,{className:"MultiColumnAdapter",py:"synapse.ml.stages.html#module-synapse.ml.stages.MultiColumnAdapter",scala:"com/microsoft/azure/synapse/ml/stages/MultiColumnAdapter.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/stages/MultiColumnAdapter.scala",mdxType:"DocTable"}),(0,s.kt)("h3",{id:"timer"},"Timer"),(0,s.kt)(o.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.stages import *\nfrom pyspark.ml.feature import *\n\ndf = (spark.createDataFrame([\n        (0, "Hi I"),\n        (1, "I wish for snow today"),\n        (2, "we Cant go to the park, because of the snow!"),\n        (3, "")\n      ], ["label", "sentence"]))\n\ntok = (Tokenizer()\n      .setInputCol("sentence")\n      .setOutputCol("tokens"))\n\ndf2 = Timer().setStage(tok).fit(df).transform(df)\n\ndf3 = HashingTF().setInputCol("tokens").setOutputCol("hash").transform(df2)\n\nidf = IDF().setInputCol("hash").setOutputCol("idf")\ntimer = Timer().setStage(idf)\n\ndisplay(timer.fit(df3).transform(df3))\n'))),(0,s.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.stages._\nimport org.apache.spark.ml.feature._\n\nval df = (Seq(\n    (0, "Hi I"),\n    (1, "I wish for snow today"),\n    (2, "we Cant go to the park, because of the snow!"),\n    (3, "")\n  ).toDF("label", "sentence"))\n\nval tok = (new Tokenizer()\n      .setInputCol("sentence")\n      .setOutputCol("tokens"))\n\nval df2 = new Timer().setStage(tok).fit(df).transform(df)\n\nval df3 = new HashingTF().setInputCol("tokens").setOutputCol("hash").transform(df2)\n\nval idf = new IDF().setInputCol("hash").setOutputCol("idf")\nval timer = new Timer().setStage(idf)\n\ndisplay(timer.fit(df3).transform(df3))\n')))),(0,s.kt)(i.Z,{className:"Timer",py:"synapse.ml.stages.html#module-synapse.ml.stages.Timer",scala:"com/microsoft/azure/synapse/ml/stages/Timer.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/stages/Timer.scala",mdxType:"DocTable"}))}y.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);