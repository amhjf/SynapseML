(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9615],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||s;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},887:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o=["components"],i={title:"Regression - Flight Delays",hide_title:!0,status:"stable",name:"Regression - Flight Delays"},l=void 0,p={unversionedId:"examples/regression/Regression - Flight Delays",id:"examples/regression/Regression - Flight Delays",isDocsHomePage:!1,title:"Regression - Flight Delays",description:"Regression - Flight Delays",source:"@site/docs/examples/regression/Regression - Flight Delays.md",sourceDirName:"examples/regression",slug:"/examples/regression/Regression - Flight Delays",permalink:"/docs/next/examples/regression/Regression - Flight Delays",version:"current",frontMatter:{title:"Regression - Flight Delays",hide_title:!0,status:"stable",name:"Regression - Flight Delays"},sidebar:"docs",previous:{title:"Regression - Flight Delays with DataCleaning",permalink:"/docs/next/examples/regression/Regression - Flight Delays with DataCleaning"},next:{title:"Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",permalink:"/docs/next/examples/regression/Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor"}},c=[{value:"Regression - Flight Delays",id:"regression---flight-delays",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"regression---flight-delays"},"Regression - Flight Delays"),(0,s.kt)("p",null,"In this example, we run a linear regression on the ",(0,s.kt)("em",{parentName:"p"},"Flight Delay")," dataset to predict the delay times."),(0,s.kt)("p",null,"We demonstrate how to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"TrainRegressor")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"ComputePerInstanceStatistics")," APIs."),(0,s.kt)("p",null,"First, import the packages."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import os\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport pandas as pd\nimport synapse.ml\n")),(0,s.kt)("p",null,"Next, import the CSV dataset."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'flightDelay = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/On_Time_Performance_2012_9.parquet")\n# print some basic info\nprint("records read: " + str(flightDelay.count()))\nprint("Schema: ")\nflightDelay.printSchema()\nflightDelay.limit(10).toPandas()\n')),(0,s.kt)("p",null,"Split the dataset into train and test sets."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"train,test = flightDelay.randomSplit([0.75, 0.25])\n")),(0,s.kt)("p",null,"Train a regressor on dataset with ",(0,s.kt)("inlineCode",{parentName:"p"},"l-bfgs"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import TrainRegressor, TrainedRegressorModel\nfrom pyspark.ml.regression import LinearRegression\nfrom pyspark.ml.feature import StringIndexer\n# Convert columns to categorical\ncatCols = ["Carrier", "DepTimeBlk", "ArrTimeBlk"]\ntrainCat = train\ntestCat = test\nfor catCol in catCols:\n    simodel = StringIndexer(inputCol=catCol, outputCol=catCol + "Tmp").fit(train)\n    trainCat = simodel.transform(trainCat).drop(catCol).withColumnRenamed(catCol + "Tmp", catCol)\n    testCat = simodel.transform(testCat).drop(catCol).withColumnRenamed(catCol + "Tmp", catCol)\nlr = LinearRegression().setRegParam(0.1).setElasticNetParam(0.3)\nmodel = TrainRegressor(model=lr, labelCol="ArrDelay").fit(trainCat)\n')),(0,s.kt)("p",null,"Save, load, or Score the regressor on the test data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'if os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    model_name = "/models/flightDelayModel.mml"\nelse:\n    model_name = "dbfs:/flightDelayModel.mml"\n\nmodel.write().overwrite().save(model_name)\nflightDelayModel = TrainedRegressorModel.load(model_name)\n\nscoredData = flightDelayModel.transform(testCat)\nscoredData.limit(10).toPandas()\n')),(0,s.kt)("p",null,"Compute model metrics against the entire scored dataset"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\nmetrics = ComputeModelStatistics().transform(scoredData)\nmetrics.toPandas()\n")),(0,s.kt)("p",null,"Finally, compute and show per-instance statistics, demonstrating the usage\nof ",(0,s.kt)("inlineCode",{parentName:"p"},"ComputePerInstanceStatistics"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputePerInstanceStatistics\nevalPerInstance = ComputePerInstanceStatistics().transform(scoredData)\nevalPerInstance.select("ArrDelay", "Scores", "L1_loss", "L2_loss").limit(10).toPandas()\n')))}u.isMDXComponent=!0}}]);