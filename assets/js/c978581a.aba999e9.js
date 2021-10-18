(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[3078],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return h}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||s;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9194:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=t(2122),a=t(9756),s=(t(7294),t(3905)),o=["components"],i={title:"AzureSearchIndex - Met Artworks",hide_title:!0,status:"stable",url_path:"examples/AzureSearchIndex - Met Artworks",name:"AzureSearchIndex - Met Artworks"},c=void 0,l={unversionedId:"examples/AzureSearchIndex - Met Artworks",id:"version-0.9.1/examples/AzureSearchIndex - Met Artworks",isDocsHomePage:!1,title:"AzureSearchIndex - Met Artworks",description:"Creating a searchable Art Database with The MET's open-access collection",source:"@site/versioned_docs/version-0.9.1/examples/AzureSearchIndex - Met Artworks.md",sourceDirName:"examples",slug:"/examples/AzureSearchIndex - Met Artworks",permalink:"/docs/examples/AzureSearchIndex - Met Artworks",version:"0.9.1",frontMatter:{title:"AzureSearchIndex - Met Artworks",hide_title:!0,status:"stable",url_path:"examples/AzureSearchIndex - Met Artworks",name:"AzureSearchIndex - Met Artworks"},sidebar:"version-0.9.1/docs",previous:{title:"About",permalink:"/docs/examples/about"},next:{title:"ConditionalKNN - Exploring Art Across Cultures",permalink:"/docs/examples/ConditionalKNN - Exploring Art Across Cultures"}},p=[],u={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,"Creating a searchable Art Database with The MET's open-access collection"),(0,s.kt)("p",null,"In this example, we show how you can enrich data using Cognitive Skills and write to an Azure Search Index using SynapseML. We use a subset of The MET's open-access collection and enrich it by passing it through 'Describe Image' and a custom 'Image Similarity' skill. The results are then written to a searchable index."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import os, sys, time, json, requests\nfrom pyspark.ml import Transformer, Estimator, Pipeline\nfrom pyspark.ml.feature import SQLTransformer\nfrom pyspark.sql.functions import lit, udf, col, split\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'if os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.mssparkutils.credentials import getSecret\n    os.environ[\'VISION_API_KEY\'] = getSecret("mmlspark-keys", "mmlspark-cs-key")\n    os.environ[\'AZURE_SEARCH_KEY\'] = getSecret("mmlspark-keys", "mmlspark-azure-search-key")\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"VISION_API_KEY = os.environ['VISION_API_KEY']\nAZURE_SEARCH_KEY = os.environ['AZURE_SEARCH_KEY']\nsearch_service = \"mmlspark-azure-search\"\nsearch_index = \"test\"\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read\\\n  .format("csv")\\\n  .option("header", True)\\\n  .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/metartworks_sample.csv")\\\n  .withColumn("searchAction", lit("upload"))\\\n  .withColumn("Neighbors", split(col("Neighbors"), ",").cast("array<string>"))\\\n  .withColumn("Tags", split(col("Tags"), ",").cast("array<string>"))\\\n  .limit(25)\n')),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/CognitiveSearchHyperscale/MetArtworkSamples.png",width:"800"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import AnalyzeImage\n\nfrom synapse.ml.stages import SelectColumns\n\n\n\n#define pipeline\n\ndescribeImage = (AnalyzeImage()\n\n  .setSubscriptionKey(VISION_API_KEY)\n\n  .setLocation("eastus")\n\n  .setImageUrlCol("PrimaryImageUrl")\n\n  .setOutputCol("RawImageDescription")\n\n  .setErrorCol("Errors")\n\n  .setVisualFeatures(["Categories", "Description", "Faces", "ImageType", "Color", "Adult"])\n\n  .setConcurrency(5))\n\n\n\ndf2 = describeImage.transform(data)\\\n\n  .select("*", "RawImageDescription.*").drop("Errors", "RawImageDescription")\n')),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/CognitiveSearchHyperscale/MetArtworksProcessed.png",width:"800"}),(0,s.kt)("p",null,"Before writing the results to a Search Index, you must define a schema which must specify the name, type, and attributes of each field in your index. Refer ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/search/search-what-is-an-index"},"Create a basic index in Azure Search")," for more information."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ndf2.writeToAzureSearch(\n\n  subscriptionKey=AZURE_SEARCH_KEY,\n\n  actionCol="searchAction",\n\n  serviceName=search_service,\n\n  indexName=search_index,\n\n  keyCol="ObjectID")\n')),(0,s.kt)("p",null,"The Search Index can be queried using the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/rest/api/searchservice/"},"Azure Search REST API")," by sending GET or POST requests and specifying query parameters that give the criteria for selecting matching documents. For more information on querying refer ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/searchservice/Search-Documents"},"Query your Azure Search index using the REST API")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'url = \'https://{}.search.windows.net/indexes/{}/docs/search?api-version=2019-05-06\'.format(search_service, search_index)\nrequests.post(url, json={"search": "Glass"}, headers = {"api-key": AZURE_SEARCH_KEY}).json()\n')))}m.isMDXComponent=!0}}]);