(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9058],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1332:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5386:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),o=n(8578);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),c="tabItem_2kG2",i="tabItemActive_3NDg";var s=37,u=39;var m=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=a(),b=f.tabGroupChoices,y=f.setTabGroupChoices,v=(0,r.useState)(o),g=v[0],h=v[1],N=r.Children.toArray(e.children),O=[];if(null!=p){var _=b[p];null!=_&&_!==g&&m.some((function(e){return e.value===_}))&&h(_)}var k=function(e){var t=e.currentTarget,n=O.indexOf(t),r=m[n].value;h(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,o,a,l,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,l=window,c=l.innerHeight,s=l.innerWidth,n>=0&&a<=s&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case s:var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":g===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:k,onClick:k},n)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},8578:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},1989:function(e,t,n){"use strict";var r=n(7294),o=n(2263);t.Z=function(e){var t=e.className,n=e.py,a=e.scala,l=e.sourceLink,c=(0,o.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+c+"/pyspark/"+n,s="https://mmlspark.blob.core.windows.net/docs/"+c+"/scala/"+a;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:i},t)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:s},t)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:l},t)))))}},6163:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return b}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=n(5386),c=n(1332),i=n(1989),s=["components"],u={},m=void 0,p={unversionedId:"documentation/transformers/deep_learning/_ONNXModel",id:"documentation/transformers/deep_learning/_ONNXModel",isDocsHomePage:!1,title:"_ONNXModel",description:"\x3c!--",source:"@site/docs/documentation/transformers/deep_learning/_ONNXModel.md",sourceDirName:"documentation/transformers/deep_learning",slug:"/documentation/transformers/deep_learning/_ONNXModel",permalink:"/docs/next/documentation/transformers/deep_learning/_ONNXModel",version:"current",frontMatter:{}},d=[{value:"ONNXModel",id:"onnxmodel",children:[]}],f={toc:d};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"onnxmodel"},"ONNXModel"),(0,a.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import synapse.ml\nfrom synapse.ml.onnx import ONNXModel\n\nmodel_path = "PUT_YOUR_MODEL_PATH"\nonnx_ml = (ONNXModel()\n            .setModelLocation(model_path)\n            .setFeedDict({"float_input": "features"})\n            .setFetchDict({"prediction": "output_label", "rawProbability": "output_probability"})\n'))),(0,a.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.onnx._\n\nval model_path = "PUT_YOUR_MODEL_PATH"\nval onnx_ml = new ONNXModel()\n                  .setModelLocation(model_path)\n                  .setFeedDict(Map("float_input" -> "features"))\n                  .setFetchDict(Map("prediction" -> "output_label", "rawProbability" -> "output_probability"))\n')))),(0,a.kt)(i.Z,{className:"ONNXModel",py:"mmlspark.onnx.html#module-mmlspark.onnx.ONNXModel",scala:"com/microsoft/azure/synapse/ml/onnx/ONNXModel.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/deep-learning/src/main/scala/com/microsoft/azure/synapse/ml/onnx/ONNXModel.scala",mdxType:"DocTable"}))}b.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);