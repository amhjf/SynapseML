(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[991,4225],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1332:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5386:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),o=n(8578);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),i="tabItem_2kG2",s="tabItemActive_3NDg";var c=37,u=39;var m=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,m=e.values,d=e.groupId,p=e.className,f=a(),v=f.tabGroupChoices,b=f.setTabGroupChoices,y=(0,r.useState)(o),g=y[0],N=y[1],_=r.Children.toArray(e.children),h=[];if(null!=d){var O=v[d];null!=O&&O!==g&&m.some((function(e){return e.value===O}))&&N(O)}var k=function(e){var t=e.currentTarget,n=h.indexOf(t),r=m[n].value;N(r),null!=d&&(b(d,r),setTimeout((function(){var e,n,r,o,a,l,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&a<=c&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=h.indexOf(e.target)+1;n=h[r]||h[0];break;case c:var o=h.indexOf(e.target)-1;n=h[o]||h[h.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},p)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:x,onFocus:k,onClick:k},n)}))),t?(0,r.cloneElement)(_.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},_.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},8578:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},1989:function(e,t,n){"use strict";var r=n(7294),o=n(2263);t.Z=function(e){var t=e.className,n=e.py,a=e.scala,l=e.sourceLink,i=(0,o.Z)().siteConfig.customFields.version,s="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+n,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+a;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:s},t)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:c},t)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:l},t)))))}},2895:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return v}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=n(5386),i=n(1332),s=n(1989),c=["components"],u={},m=void 0,d={unversionedId:"documentation/transformers/deep_learning/_ONNXModel",id:"version-0.9.1/documentation/transformers/deep_learning/_ONNXModel",isDocsHomePage:!1,title:"_ONNXModel",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.1/documentation/transformers/deep_learning/_ONNXModel.md",sourceDirName:"documentation/transformers/deep_learning",slug:"/documentation/transformers/deep_learning/_ONNXModel",permalink:"/docs/documentation/transformers/deep_learning/_ONNXModel",version:"0.9.1",frontMatter:{}},p=[{value:"ONNXModel",id:"onnxmodel",children:[]}],f={toc:p};function v(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"onnxmodel"},"ONNXModel"),(0,a.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import synapse.ml\nfrom synapse.ml.onnx import ONNXModel\n\nmodel_path = "PUT_YOUR_MODEL_PATH"\nonnx_ml = (ONNXModel()\n            .setModelLocation(model_path)\n            .setFeedDict({"float_input": "features"})\n            .setFetchDict({"prediction": "output_label", "rawProbability": "output_probability"})\n'))),(0,a.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.onnx._\n\nval model_path = "PUT_YOUR_MODEL_PATH"\nval onnx_ml = new ONNXModel()\n                  .setModelLocation(model_path)\n                  .setFeedDict(Map("float_input" -> "features"))\n                  .setFetchDict(Map("prediction" -> "output_label", "rawProbability" -> "output_probability"))\n')))),(0,a.kt)(s.Z,{className:"ONNXModel",py:"mmlspark.onnx.html#module-mmlspark.onnx.ONNXModel",scala:"com/microsoft/azure/synapse/ml/onnx/ONNXModel.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/deep-learning/src/main/scala/com/microsoft/azure/synapse/ml/onnx/ONNXModel.scala",mdxType:"DocTable"}))}v.isMDXComponent=!0},3473:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=n(2895),i=["components"],s={title:"Deep Learning",sidebar_label:"Deep Learning"},c=void 0,u={unversionedId:"documentation/transformers/transformers_deep_learning",id:"version-0.9.1/documentation/transformers/transformers_deep_learning",isDocsHomePage:!1,title:"Deep Learning",description:"export const toc = [...ONNXModelTOC]",source:"@site/versioned_docs/version-0.9.1/documentation/transformers/transformers_deep_learning.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/transformers_deep_learning",permalink:"/docs/documentation/transformers/transformers_deep_learning",version:"0.9.1",frontMatter:{title:"Deep Learning",sidebar_label:"Deep Learning"},sidebar:"version-0.9.1/docs",previous:{title:"Vowpal Wabbit",permalink:"/docs/documentation/transformers/transformers_vw"},next:{title:"Core",permalink:"/docs/documentation/estimators/estimators_core"}},m=[].concat(l.toc),d={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.default,{mdxType:"ONNXModel"}))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);