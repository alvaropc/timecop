webpackJsonp([1],{"/626":function(t,e){},0:function(t,e){},"3TcT":function(t,e){},"4Wrh":function(t,e){},"5pe+":function(t,e){t.exports={engine:"LSTM",future:[{step:60,value:.29254696},{step:61,value:.30527017},{step:62,value:.5490317},{step:63,value:.5490317},{step:64,value:.9978835}],mae:.22013833704921934,mse:.09056021235159503,past:[{anomaly_score:0,expected_value:.6088896989822388,mae:.22013833704921934,mse:.09056021235159503,real_value:.1428571492433548,rmse:.3009322388040122,step:25}],present_alerts:[{anomaly_score:0,expected_value:.6088896989822388,mae:.22013833704921934,mse:.09056021235159503,real_value:.1428571492433548,rmse:.3009322388040122}],present_status:"TRUE",rmse:.3009322388040122}},"6DHi":function(t,e){},"6nfk":function(t,e){},"8b0c":function(t,e){t.exports={engine:"Holtwinters",future:[{step:200,value:1.2298099994659424},{step:201,value:1.229854941368103},{step:202,value:1.229854941368103},{step:203,value:1.2298699617385864},{step:204,value:1.2298699617385864}],mae:.00012966666666665758,mse:2.7358333333326278e-8,past:[{anomaly_score:1,"expected value":1.22994,mae:.00012966666666665758,mse:2.7358333333326278e-8,real_value:1.23023,rmse:.00016540354691881997,step:171},{anomaly_score:.3333333333358011,"expected value":1.22994,mae:.00012966666666665758,mse:2.7358333333326278e-8,real_value:1.23021,rmse:.00016540354691881997,step:172},{anomaly_score:0,"expected value":1.22994,mae:.00012966666666665758,mse:2.7358333333326278e-8,real_value:1.2302,rmse:.00016540354691881997,step:195},{anomaly_score:0,"expected value":1.22994,mae:.00012966666666665758,mse:2.7358333333326278e-8,real_value:1.2302,rmse:.00016540354691881997,step:196},{anomaly_score:0,"expected value":1.22994,mae:.00012966666666665758,mse:2.7358333333326278e-8,real_value:1.2302,rmse:.00016540354691881997,step:197},{anomaly_score:0,"expected value":1.22994,mae:.00012966666666665758,mse:2.7358333333326278e-8,real_value:1.2302,rmse:.00016540354691881997,step:198}],present_alerts:[],present_status:"FALSE",rmse:.00016540354691881997}},"90VL":function(t,e){},FbEL:function(t,e){},"HNa/":function(t,e){},N8aR:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("/5sW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-toolbar",{attrs:{dense:""}},[e("img",{staticClass:"pa-1",attrs:{src:"static/img/logo.svg",height:"80%",alt:"Time Cop"}}),this._v(" "),e("v-spacer"),this._v(" "),e("v-btn",{attrs:{to:"/",flat:"",color:"blue"}},[this._v("univariate")]),this._v(" "),e("v-btn",{attrs:{to:"/multivariate",flat:"",color:"blue"}},[this._v("multivariate")])],1),this._v(" "),e("v-content",[e("router-view")],1)],1)},staticRenderFns:[]},n=i("VU/8")({name:"App"},r,!1,null,null,null).exports,s=i("/ocq"),o=i("8b0c"),l=i.n(o),h={props:{real:null,dataSet:null,height:{type:Number,default:500},marginLeft:{type:Number,default:40},marginTop:{type:Number,default:40},marginRight:{type:Number,default:20},marginBottom:{type:Number,default:30},padding:{type:Number,default:12}},data:function(){return{width:null,chartWidth:1e3,chartHeight:400,total:[],toPredict:[],prediction:[],zoomMin:0,zoomMax:100,panEnabled:!1,offsetX:0,globalMax:-1e11,globalMin:1e11}},mounted:function(){this.width=this.$el.clientWidth,this.chartWidth=this.width-(this.marginLeft+this.marginRight),this.chartHeight=this.height-(this.marginTop+this.marginBottom)},methods:{processData:function(t){for(var e=0;e<t.toPredict.length;e++)this.toPredict.push({x:e,y:t.toPredict[e]}),this.total.push({x:e,y:t.toPredict[e]}),this.globalMax=this.globalMax>t.toPredict[e]?this.globalMax:t.toPredict[e],this.globalMin=this.globalMin<t.toPredict[e]?this.globalMin:t.toPredict[e];this.toPredict.push({x:t.toPredict.length,y:t.prediction.future[0].value});for(var i=0;i<t.prediction.future.length;i++)this.prediction.push({x:t.prediction.future[i].step,y:t.prediction.future[i].value}),this.total.push({x:t.prediction.future[i].step,y:t.prediction.future[i].value}),this.globalMax=this.globalMax>t.prediction.future[i].value?this.globalMax:t.prediction.future[i].value,this.globalMin=this.globalMin<t.prediction.future[i].value?this.globalMin:t.prediction.future[i].value;if(this.real&&this.real.length>0)for(var a=0;a<this.real.length;a++)this.globalMax=this.globalMax>this.real[a].y?this.globalMax:this.real[a].y,this.globalMin=this.globalMin<this.real[a].y?this.globalMin:this.real[a].y;this.zoomMax=this.total.length-1},zoom:function(t){this.zoomMin&&this.zoomMax>=3e3?(this.zoomMin=0,this.zoomMax=this.total.length-1):(this.zoomMin+=.02*t.wheelDelta,this.zoomMax+=.02*-t.wheelDelta)},pan:function(t){this.panEnabled&&(this.offsetX+=-t.movementX)},reset:function(){this.total=[],this.toPredict=[],this.prediction=[],this.globalMax=-1e11,this.globalMin=1e11}},watch:{dataSet:{handler:function(t){var e=this;t.toPredict&&t.prediction&&this.$nextTick(function(){e.reset(),e.processData(t)})},immediate:!0}},computed:{anomalies:function(){var t=this.dataSet;if(t.toPredict){for(var e=[],i=0;i<t.prediction.past.length;i++){var a=this.$toXPixel(t.prediction.past[i].step,this.zoomMin,this.zoomMax,this.chartWidth);e.push(a)}return e}}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{attrs:{xs12:""}},[i("svg",{staticClass:"grey darken-3",attrs:{width:t.width,height:t.height},on:{mousewheel:function(e){return e.preventDefault(),t.zoom(e)},mousedown:function(e){if(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return null;t.panEnabled=!0},mouseup:function(e){t.panEnabled=!1},mousemove:t.pan}},[t.dataSet.toPredict&&t.dataSet.prediction?i("g",{attrs:{transform:"translate("+t.marginLeft+", "+t.marginTop+")"}},[i("defs",[i("clipPath",{attrs:{id:"clip-rect"}},[i("rect",{attrs:{width:t.chartWidth,height:t.height,y:-this.marginTop}})])]),t._v(" "),i("g",{attrs:{"clip-path":"url(#clip-rect)"}},[i("c-path",{attrs:{transform:"translate("+-t.offsetX+" 0)",rangeX:[t.zoomMin,t.zoomMax],color:"green",strokeWidth:"4",rangeY:[t.globalMin,t.globalMax],dataset:t.real,column:"y",height:t.chartHeight,width:t.chartWidth}}),t._v(" "),i("c-path",{attrs:{transform:"translate("+-t.offsetX+" 0)",rangeX:[t.zoomMin,t.zoomMax],rangeY:[t.globalMin,t.globalMax],dataset:t.total,column:"y",height:t.chartHeight,width:t.chartWidth}}),t._v(" "),t.total.length>0?i("c-path",{attrs:{transform:"translate("+(t.$toXPixel(t.toPredict.length-1+t.zoomMin,t.zoomMin,t.zoomMax,t.chartWidth)-t.offsetX)+", 0)",color:"yellow",rangeX:[t.zoomMin,t.zoomMax],rangeY:[t.globalMin,t.globalMax],dataset:t.prediction,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e(),t._v(" "),t._l(t.anomalies,function(e,a){return i("line",{key:a,attrs:{x1:e-t.offsetX,y1:"0",x2:e-t.offsetX,y2:t.chartHeight,"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"1.5",stroke:"red"}})}),t._v(" "),i("x-axis",{attrs:{transform:"translate("+-t.offsetX+" "+t.chartHeight+")",range:[t.zoomMin,t.zoomMax],dataset:t.total,x:"x",ticks:25,fixed:1,height:t.chartHeight,width:t.chartWidth,label:"minutos"}})],2),t._v(" "),i("y-axis",{attrs:{range:[t.globalMin,t.globalMax],ticks:5,fixed:1,height:t.chartHeight,label:"Units"}})],1):t._e()])])},staticRenderFns:[]};var u={components:{lineChart:i("VU/8")(h,c,!1,function(t){i("R7zp")},null,null).exports},data:function(){return{url:"http://52.59.213.240:9999/univariate/get",dataSet:"",response:"",toGraph:{},toGraphReal:[],loading:!1,errorDialog:{value:!1,text:""},rules:{isValidJSON:function(t){try{JSON.parse(t)}catch(t){return"Data is not a valid json"}return!0}}}},methods:{getUrl:function(){var t=this;this.loading=!0;var e=JSON.parse(this.dataSet);this.$http.post(this.url,e).then(function(i){t.response=JSON.parse(i.bodyText),t.toGraph={toPredict:e.data,prediction:t.response},t.loading=!1}).catch(function(e){t.loading=!1,t.errorDialog.value=!0,t.errorDialog.text=e,console.log(e)})},simulateResult:function(){this.response=l.a;var t=JSON.parse(this.dataSet);this.toGraph={toPredict:t.data,prediction:this.response}},validateJSON:function(t){try{JSON.parse(t)}catch(t){return!1}return!0}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":"",fluid:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs8:""}},[i("v-card",{staticClass:"transparent",attrs:{flat:""}},[i("v-text-field",{attrs:{label:"url",outline:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),i("v-textarea",{attrs:{rules:[t.rules.isValidJSON],label:"Data to process",outline:""},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getUrl(e):null}},model:{value:t.dataSet,callback:function(e){t.dataSet=e},expression:"dataSet"}}),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"green",flat:""},on:{click:t.getUrl}},[t._v("\n            submit\n            "),i("v-icon",{attrs:{right:""}},[t._v("send")])],1)],1)],1),t._v(" "),i("line-chart",{attrs:{dataSet:t.toGraph,height:350,marginLeft:70}})],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("pre",[t._v(t._s(t.response))])])],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("v-card",[i("v-card-text",[t._v("\n        Processing... this may take a while\n        "),i("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:""}})],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"500"},model:{value:t.errorDialog.value,callback:function(e){t.$set(t.errorDialog,"value",e)},expression:"errorDialog.value"}},[i("v-card",{attrs:{color:"red",dark:""}},[i("v-card-text",[i("pre",[t._v(t._s(t.errorDialog.text))])]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.errorDialog.value=!1}}},[t._v("ok")])],1)],1)],1)],1)},staticRenderFns:[]},p=i("VU/8")(u,d,!1,null,null,null).exports,g=i("5pe+"),v=i.n(g),m={props:{dataSet:null,height:{type:Number,default:500},marginLeft:{type:Number,default:40},marginTop:{type:Number,default:40},marginRight:{type:Number,default:20},marginBottom:{type:Number,default:30},padding:{type:Number,default:12}},data:function(){return{width:null,chartWidth:1e3,chartHeight:400,total:[],toPredict:[],prediction:[],timeSeries:[],anomalies:[],globalMaxY:-1e11,globalMinY:1e11,isActive:{toPredict:!0,prediction:!0}}},mounted:function(){this.width=this.$el.clientWidth,this.chartWidth=this.width-(this.marginLeft+this.marginRight),this.chartHeight=this.height-(this.marginTop+this.marginBottom)},methods:{processData:function(t){for(var e=[],i=0;i<t.toPredict.length;i++)this.toPredict.push({x:i,y:t.toPredict[i]}),this.total.push({x:i,y:t.toPredict[i]}),e.push({v:t.toPredict[i]});this.toPredict.push({x:t.toPredict.length,y:t.prediction.future[0].value});for(var a=0;a<t.prediction.future.length;a++)this.prediction.push({x:t.prediction.future[a].step,y:t.prediction.future[a].value}),this.total.push({x:t.prediction.future[a].step,y:t.prediction.future[a].value}),e.push({v:t.prediction.future[a].value});for(var r=0;r<t.timeSeries.length;r++){this.$set(this.timeSeries,r,[]);for(var n=0;n<t.timeSeries[r].data.length;n++)this.timeSeries[r].push({x:n,y:t.timeSeries[r].data[n]}),e.push({v:t.timeSeries[r].data[n]});this.$set(this.isActive,r,!0)}this.globalMaxY=this.$getMax(e,"v"),this.globalMinY=this.$getMin(e,"v");for(var s=0;s<t.prediction.past.length;s++){var o=this.$toXPixel(t.prediction.past[s].step,0,this.total.length,this.chartWidth);this.anomalies.push(o)}},reset:function(){this.total=[],this.toPredict=[],this.prediction=[],this.anomalies=[],this.globalMaxY=-1e11,this.globalMinY=1e11}},watch:{dataSet:{handler:function(t){var e=this;t.toPredict&&t.prediction&&this.$nextTick(function(){e.reset(),e.processData(t)})},immediate:!0}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{attrs:{xs12:""}},[i("v-layout",{attrs:{xs12:"",row:""}},[t.toPredict.length>0?i("v-checkbox",{attrs:{label:"Main"},model:{value:t.isActive.toPredict,callback:function(e){t.$set(t.isActive,"toPredict",e)},expression:"isActive.toPredict"}}):t._e(),t._v(" "),t.prediction.length>0?i("v-checkbox",{attrs:{label:"Prediction"},model:{value:t.isActive.prediction,callback:function(e){t.$set(t.isActive,"prediction",e)},expression:"isActive.prediction"}}):t._e(),t._v(" "),t._l(t.timeSeries,function(e,a){return i("v-checkbox",{key:a,attrs:{label:"timeSerie-"+a},model:{value:t.isActive[a],callback:function(e){t.$set(t.isActive,a,e)},expression:"isActive[i]"}})})],2),t._v(" "),i("svg",{staticClass:"grey darken-3",attrs:{width:t.width,height:t.height}},[i("g",{attrs:{transform:"translate("+t.marginLeft+", "+t.marginTop+")"}},[t.isActive.toPredict?i("c-path",{attrs:{rangeX:[0,t.total.length-1],dataset:t.toPredict,strokeWidth:"4",column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e(),t._v(" "),t.total.length>0&&t.isActive.prediction?i("c-path",{attrs:{transform:"translate("+t.$toXPixel(t.toPredict.length-1,0,t.total.length-1,t.chartWidth)+", 0)",color:"yellow",strokeWidth:"4",rangeX:[0,t.total.length-1],rangeY:[t.$getMin(t.total,"y"),t.$getMax(t.total,"y")],dataset:t.prediction,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e(),t._v(" "),t._l(t.timeSeries,function(e,a){return t.isActive[a]?i("c-path",{key:a,attrs:{color:"#ffbf8bb8",rangeX:[0,t.total.length-1],dataset:e,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e()}),t._v(" "),t._l(t.anomalies,function(e,a){return i("line",{key:"mark"+a,attrs:{x1:e,y1:"0",x2:e,y2:t.chartHeight,"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"1.5",stroke:"red"}})}),t._v(" "),i("x-axis",{attrs:{range:[0,t.total.length-1],ticks:10,fixed:1,height:t.chartHeight,width:t.chartWidth}}),t._v(" "),i("y-axis",{attrs:{range:[t.globalMinY,t.globalMaxY],ticks:5,fixed:1,height:t.chartHeight,label:"Units"}})],2)])],1)},staticRenderFns:[]};var x={components:{lineChart:i("VU/8")(m,f,!1,function(t){i("N8aR")},null,null).exports},data:function(){return{url:"http://54.93.223.206:9999/multivariate/get",dataSet:"",response:"",toGraph:{},loading:!1,errorDialog:{value:!1,text:""},rules:{isValidJSON:function(t){try{JSON.parse(t)}catch(t){return"Data is not a valid json"}return!0}}}},methods:{getUrl:function(){var t=this;this.loading=!0;var e=JSON.parse(this.dataSet);this.$http.post(this.url,e).then(function(i){t.response=v.a,t.toGraph={toPredict:e.main,prediction:t.response,timeSeries:e.timeseries},t.loading=!1}).catch(function(e){t.loading=!1,t.errorDialog.value=!0,t.errorDialog.text=e,console.log(e)})},simulateResult:function(t){this.response=v.a;var e=JSON.parse(t);this.toGraph={toPredict:e.main,prediction:this.response,timeSeries:e.timeseries}},validateJSON:function(t){try{JSON.parse(t)}catch(t){return!1}return!0}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":"",fluid:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs8:""}},[i("v-card",{staticClass:"transparent",attrs:{flat:""}},[i("v-text-field",{attrs:{label:"url",outline:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),i("v-textarea",{attrs:{"auto-grow":"",rules:[t.rules.isValidJSON],label:"Data to process",outline:""},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getUrl(e):null}},model:{value:t.dataSet,callback:function(e){t.dataSet=e},expression:"dataSet"}}),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"green",flat:""},on:{click:t.getUrl}},[t._v("\n            submit\n            "),i("v-icon",{attrs:{right:""}},[t._v("send")])],1)],1)],1),t._v(" "),i("line-chart",{attrs:{dataSet:t.toGraph,height:350,marginLeft:70}})],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("pre",[t._v(t._s(t.response))])])],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("v-card",[i("v-card-text",[t._v("\n        Processing...\n        "),i("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:""}})],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"500"},model:{value:t.errorDialog.value,callback:function(e){t.$set(t.errorDialog,"value",e)},expression:"errorDialog.value"}},[i("v-card",{attrs:{color:"red",dark:""}},[i("v-card-text",[i("pre",[t._v(t._s(t.errorDialog.text))])]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.errorDialog.value=!1}}},[t._v("ok")])],1)],1)],1)],1)},staticRenderFns:[]},_=i("VU/8")(x,y,!1,null,null,null).exports;a.default.use(s.a);var b=new s.a({routes:[{path:"/",name:"univariate",component:p},{path:"/multivariate",name:"multivariate",component:_}]}),k=i("8+8L"),M={name:"y-axis",props:{range:{type:Array,required:!0},ticks:{type:Number},height:{type:Number,required:!0},label:{type:String},fixed:{type:Number}},computed:{ticksList:function(){if(this.range&&this.range.length>0){var t=[],e=this.range[0],i=(this.range[1]-e)/(this.ticks-1),a=e;t.push(this.fixed?e.toFixed(this.fixed):e);for(var r=1;r<this.ticks;r++)t.push(this.fixed?(a+=i).toFixed(this.fixed):a+=i);return t.reverse()}}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{"text-anchor":"end",fill:"white",stroke:"white","stroke-width":"1"}},[i("line",{attrs:{y1:t.height}}),t._v(" "),t._l(t.ticksList,function(e,a){return i("g",{key:"tick"+a,attrs:{transform:"translate(0, "+a*(t.height/(t.ticksList.length-1))+")"}},[i("line",{attrs:{x2:"-6"}}),t._v(" "),i("text",{attrs:{"stroke-width":"0.1",x:"-9",dy:"0.32em"}},[t._v(t._s(e))])])}),t._v(" "),i("text",{attrs:{transform:"rotate(-90)",y:"6",dy:"0.71em","stroke-width":"0.1"}},[t._v(t._s(t.label))])],2)},staticRenderFns:[]},P=i("VU/8")(M,w,!1,null,null,null).exports,S={name:"x-axis",props:{dataset:{type:Array,required:!0},range:{type:Array},x:{type:String},ticks:{type:Number},height:{type:Number,required:!0},width:{type:Number,required:!0},label:{type:String},fixed:{type:Number}},computed:{ticksList:function(){if(this.dataset&&this.dataset.length>0){for(var t=this.range?this.range[0]:this.$getMin(this.dataset,this.x),e=this.range?this.range[1]:this.$getMax(this.dataset,this.x),i=[],a=0;a<this.dataset.length;a++)i.push({position:this.$toXPixel(this.dataset[a][this.x],t,e,this.width)});for(var r=0;r<this.dataset.length;r+=Math.round(this.dataset.length/this.ticks))i[r].value=this.dataset[r][this.x];return i.reverse()}}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{"text-anchor":"middle",fill:"white",stroke:"white","stroke-width":"1",transform:"translate(0, "+t.height+")"}},[t.ticksList&&t.ticksList.length>0?i("line",{attrs:{x1:t.ticksList[0].position,x2:t.ticksList[t.ticksList.length-1].position}}):t._e(),t._v(" "),t._l(t.ticksList,function(e,a){return i("g",{key:"tick"+a,attrs:{transform:"translate("+e.position+", 0)"}},[i("line",{attrs:{y2:"6"}}),t._v(" "),i("text",{attrs:{"stroke-width":"0.1",y:"9",dy:"0.71em"}},[t._v(t._s(e.value))])])}),t._v(" "),i("text",{attrs:{x:t.width,y:"-25",dx:"-0.71em",dy:"0.71em","stroke-width":"0.1"}},[t._v(t._s(t.label))])],2)},staticRenderFns:[]},$=i("VU/8")(S,N,!1,null,null,null).exports,X={name:"bars",props:{dataset:{type:Array,required:!0},column:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0}},computed:{list:function(){for(var t=[],e=this.$getMax(this.dataset,this.column),i=this.$getMin(this.dataset,this.column),a=0;a<this.dataset.length;a++)t.push({d:this.dataset[a][this.column],v:this.$toYPixel(this.dataset[a][this.column],i,e,this.height)});return t}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",t._l(t.list,function(e,a){return i("rect",{key:a,attrs:{x:a*(t.width/t.list.length),y:e.v,width:30,height:t.height-e.v,fill:"green"}})}))},staticRenderFns:[]},z=i("VU/8")(X,D,!1,null,null,null).exports,V={name:"cPath",props:{dataset:{type:Array,required:!0},column:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0},color:{type:String,default:"steelblue"},strokeWidth:{type:String,default:"1.5"},rangeY:{type:Array},rangeX:{type:Array}},computed:{points:function(){if(this.dataset&&this.dataset.length>0){for(var t=this.rangeY?this.rangeY[0]:this.$getMin(this.dataset,this.column),e=this.rangeY?this.rangeY[1]:this.$getMax(this.dataset,this.column),i=this.rangeX?this.rangeX[0]:0,a=this.rangeX?this.rangeX[1]:this.dataset.length,r=[],n=[],s=0;s<this.dataset.length;s++)r.push(this.$toXPixel(s,i,a,this.width)),n.push(this.$toYPixel(this.dataset[s][this.column],t,e,this.height));r.reverse(),n.reverse();for(var o="M"+r[0]+" "+n[0],l=1;l<this.dataset.length;l++)o+=" L"+r[l]+" "+n[l]+" ";return o}}}},A={render:function(){var t=this.$createElement;return(this._self._c||t)("path",{attrs:{fill:"none",stroke:this.color,"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":this.strokeWidth,d:this.points}})},staticRenderFns:[]},W=i("VU/8")(V,A,!1,null,null,null).exports,H={install:function(t){t.prototype.$getMax=function(t,e){for(var i=0,a=0;a<t.length;a++)i=t[a][e]>i?t[a][e]:i;return i},t.prototype.$getMin=function(t,e){for(var i=1e11,a=0;a<t.length;a++)i=t[a][e]<i?t[a][e]:i;return i},t.prototype.$toYPixel=function(t,e,i,a){return a-(t-e)/(i-e)*a},t.prototype.$toXPixel=function(t,e,i,a){return(t-e)/(i-e)*a},t.component(P.name,P),t.component($.name,$),t.component(z.name,z),t.component(W.name,W)}},L=i("M+UZ"),R=i.n(L),U=i("IcMm"),Y=i.n(U),O=i("7Q1V"),T=i.n(O),E=i("7M7f"),J=i.n(E),q=i("JUsQ"),C=i.n(q),F=i("/yi5"),G=i.n(F),j=i("iAJc"),B=i.n(j),K=i("pqui"),Z=i.n(K),Q=i("MPXs"),I=i.n(Q),tt=i("f/u0"),et=i.n(tt),it=i("z8aH"),at=i.n(it),rt=i("+9ps"),nt=i.n(rt),st=i("6VHA"),ot=i.n(st);i("s6ZO");a.default.use(R.a,{components:{VApp:Y.a,VBtn:T.a,VIcon:J.a,VGrid:C.a,VTextField:G.a,VTextarea:B.a,VProgressLinear:Z.a,VDialog:I.a,VCard:et.a,VCheckbox:at.a,VToolbar:nt.a,transitions:ot.a}}),a.default.config.productionTip=!1,a.default.use(k.a),a.default.use(H),a.default.http.headers.common["content-type"]="application/json",new a.default({el:"#app",router:b,render:function(t){return t(n)}})},NOHZ:function(t,e){},P0ba:function(t,e){},R681:function(t,e){},R7zp:function(t,e){},RGFK:function(t,e){},"X05+":function(t,e){},XC5Q:function(t,e){},acBN:function(t,e){},"q/9b":function(t,e){},rzhv:function(t,e){},s6ZO:function(t,e){},uKc5:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.12536d208fc458c41976.js.map