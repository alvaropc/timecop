webpackJsonp([1],{"/626":function(t,e){},0:function(t,e){},"3TcT":function(t,e){},"4Wrh":function(t,e){},"5pe+":function(t,e){t.exports={engine:"LSTM",future:[{step:60,value:.29254696},{step:61,value:.30527017},{step:62,value:.5490317},{step:63,value:.5490317},{step:64,value:.9978835}],mae:.22013833704921934,mse:.09056021235159503,past:[{anomaly_score:0,expected_value:.6088896989822388,mae:.22013833704921934,mse:.09056021235159503,real_value:.1428571492433548,rmse:.3009322388040122,step:25}],present_alerts:[{anomaly_score:0,expected_value:.6088896989822388,mae:.22013833704921934,mse:.09056021235159503,real_value:.1428571492433548,rmse:.3009322388040122}],present_status:"TRUE",rmse:.3009322388040122}},"6DHi":function(t,e){},"6nfk":function(t,e){},"6q4l":function(t,e){},"8b0c":function(t,e){t.exports={engine:"Autoarima",future:[{step:126,value:31423.05078125},{step:127,value:26860.919921875},{step:128,value:25226.453125},{step:129,value:28546.376953125},{step:130,value:32843.1640625}],mae:2787.6362557772313,mse:14337028.744894866,past:[{anomaly_score:1,"expected value":35203.84230904736,mae:2787.6362557772313,mse:14337028.744894866,real_value:24878,rmse:3786.426910016205,step:91},{anomaly_score:.514486972675276,"expected value":34634.228493380935,mae:2787.6362557772313,mse:14337028.744894866,real_value:25517,rmse:3786.426910016205,step:103},{anomaly_score:0,"expected value":33336.48826982387,mae:2787.6362557772313,mse:14337028.744894866,real_value:25500,rmse:3786.426910016205,step:115},{anomaly_score:.4557352672564709,"expected value":23712.025301814636,mae:2787.6362557772313,mse:14337028.744894866,real_value:32683,rmse:3786.426910016205,step:123}],present_alerts:[],present_status:"FALSE",rmse:3786.426910016205}},"90VL":function(t,e){},FbEL:function(t,e){},"HNa/":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("/5sW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("div",[e("v-btn",{attrs:{to:"/",flat:"",color:"green"}},[this._v("univariate")]),this._v(" "),e("v-btn",{attrs:{to:"/multivariate",flat:"",color:"green"}},[this._v("multivariate")])],1),this._v(" "),e("v-content",[e("router-view")],1)],1)},staticRenderFns:[]},n=i("VU/8")({name:"App"},a,!1,null,null,null).exports,s=i("/ocq"),o=i("8b0c"),l=i.n(o),h={props:{dataSet:null,height:{type:Number,default:500},marginLeft:{type:Number,default:40},marginTop:{type:Number,default:40},marginRight:{type:Number,default:20},marginBottom:{type:Number,default:30},padding:{type:Number,default:12}},data:function(){return{width:null,chartWidth:1e3,chartHeight:400,total:[],toPredict:[],prediction:[],anomalies:[]}},mounted:function(){this.width=this.$el.clientWidth,this.chartWidth=this.width-(this.marginLeft+this.marginRight),this.chartHeight=this.height-(this.marginTop+this.marginBottom)},methods:{processData:function(t){for(var e=0;e<t.toPredict.length;e++)this.toPredict.push({x:e,y:t.toPredict[e]}),this.total.push({x:e,y:t.toPredict[e]});this.toPredict.push({x:t.toPredict.length,y:t.prediction.future[0].value});for(var i=0;i<t.prediction.future.length;i++)this.prediction.push({x:t.prediction.future[i].step,y:t.prediction.future[i].value}),this.total.push({x:t.prediction.future[i].step,y:t.prediction.future[i].value});for(var r=0;r<t.prediction.past.length;r++){var a=this.$toXPixel(t.prediction.past[r].step,0,this.total.length-1,this.chartWidth);this.anomalies.push(a)}},reset:function(){this.total=[],this.toPredict=[],this.prediction=[],this.anomalies=[]}},watch:{dataSet:{handler:function(t){var e=this;t.toPredict&&t.prediction&&this.$nextTick(function(){e.reset(),e.processData(t)})},immediate:!0}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{attrs:{xs12:""}},[i("svg",{staticClass:"grey darken-3",attrs:{width:t.width,height:t.height}},[i("g",{attrs:{transform:"translate("+t.marginLeft+", "+t.marginTop+")"}},[i("c-path",{attrs:{rangeX:[0,t.total.length-1],dataset:t.total,column:"y",height:t.chartHeight,width:t.chartWidth}}),t._v(" "),t.total.length>0?i("c-path",{attrs:{transform:"translate("+t.$toXPixel(t.toPredict.length-1,0,t.total.length-1,t.chartWidth)+", 0)",color:"yellow",rangeX:[0,t.total.length-1],rangeY:[t.$getMin(t.total,"y"),t.$getMax(t.total,"y")],dataset:t.prediction,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e(),t._v(" "),t._l(t.anomalies,function(e,r){return i("line",{key:r,attrs:{x1:e,y1:"0",x2:e,y2:t.chartHeight,"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"1.5",stroke:"red"}})}),t._v(" "),i("x-axis",{attrs:{range:[0,t.total.length-1],ticks:10,fixed:1,height:t.chartHeight,width:t.chartWidth}}),t._v(" "),i("y-axis",{attrs:{range:[t.$getMin(t.total,"y"),t.$getMax(t.total,"y")],ticks:5,fixed:1,height:t.chartHeight,label:"Units"}})],2)])])},staticRenderFns:[]};var u={components:{lineChart:i("VU/8")(h,c,!1,function(t){i("6q4l")},null,null).exports},data:function(){return{url:"http://54.93.223.206:9999/univariate/get",dataSet:"",response:"",toGraph:{},loading:!1,errorDialog:{value:!1,text:""}}},methods:{getUrl:function(){var t=this;this.loading=!0;var e=JSON.parse(this.dataSet);this.$http.post(this.url,e).then(function(i){t.response=JSON.parse(i.bodyText),t.toGraph={toPredict:e.data,prediction:t.response},t.loading=!1}).catch(function(e){t.loading=!1,t.errorDialog.value=!0,t.errorDialog.text=e,console.log(e)})},simulateResult:function(){this.response=l.a;var t=JSON.parse(this.dataSet);this.toGraph={toPredict:t.data,prediction:this.response}}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":"",fluid:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs8:""}},[i("v-card",{staticClass:"transparent",attrs:{flat:""}},[i("v-text-field",{attrs:{label:"url",outline:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),i("v-textarea",{attrs:{label:"Data to process",outline:""},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getUrl(e):null}},model:{value:t.dataSet,callback:function(e){t.dataSet=e},expression:"dataSet"}}),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"green",flat:""},on:{click:t.getUrl}},[t._v("\n            submit\n            "),i("v-icon",{attrs:{right:""}},[t._v("send")])],1)],1)],1),t._v(" "),i("line-chart",{attrs:{dataSet:t.toGraph,height:350,marginLeft:70}})],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("pre",[t._v(t._s(t.response))])])],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("v-card",[i("v-card-text",[t._v("\n        Processing...\n        "),i("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:""}})],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"500"},model:{value:t.errorDialog.value,callback:function(e){t.$set(t.errorDialog,"value",e)},expression:"errorDialog.value"}},[i("v-card",{attrs:{color:"red",dark:""}},[i("v-card-text",[i("pre",[t._v(t._s(t.errorDialog.text))])]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.errorDialog.value=!1}}},[t._v("ok")])],1)],1)],1)],1)},staticRenderFns:[]},p=i("VU/8")(u,d,!1,null,null,null).exports,g=i("5pe+"),v=i.n(g),f={props:{dataSet:null,height:{type:Number,default:500},marginLeft:{type:Number,default:40},marginTop:{type:Number,default:40},marginRight:{type:Number,default:20},marginBottom:{type:Number,default:30},padding:{type:Number,default:12}},data:function(){return{width:null,chartWidth:1e3,chartHeight:400,total:[],toPredict:[],prediction:[],timeSeries:[],anomalies:[],globalMaxY:0,globalMinY:0,isActive:{toPredict:!0,prediction:!0}}},mounted:function(){this.width=this.$el.clientWidth,this.chartWidth=this.width-(this.marginLeft+this.marginRight),this.chartHeight=this.height-(this.marginTop+this.marginBottom)},methods:{processData:function(t){for(var e=[],i=0;i<t.toPredict.length;i++)this.toPredict.push({x:i,y:t.toPredict[i]}),this.total.push({x:i,y:t.toPredict[i]}),e.push({v:t.toPredict[i]});this.toPredict.push({x:t.toPredict.length,y:t.prediction.future[0].value});for(var r=0;r<t.prediction.future.length;r++)this.prediction.push({x:t.prediction.future[r].step,y:t.prediction.future[r].value}),this.total.push({x:t.prediction.future[r].step,y:t.prediction.future[r].value}),e.push({v:t.prediction.future[r].value});for(var a=0;a<t.timeSeries.length;a++){this.$set(this.timeSeries,a,[]);for(var n=0;n<t.timeSeries[a].data.length;n++)this.timeSeries[a].push({x:n,y:t.timeSeries[a].data[n]}),e.push({v:t.timeSeries[a].data[n]});this.$set(this.isActive,a,!0)}this.globalMaxY=this.$getMax(e,"v"),this.globalMinY=this.$getMin(e,"v");for(var s=0;s<t.prediction.past.length;s++){var o=this.$toXPixel(t.prediction.past[s].step,0,this.total.length,this.chartWidth);this.anomalies.push(o)}},reset:function(){this.total=[],this.toPredict=[],this.prediction=[],this.anomalies=[]}},watch:{dataSet:{handler:function(t){var e=this;t.toPredict&&t.prediction&&this.$nextTick(function(){e.reset(),e.processData(t)})},immediate:!0}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{attrs:{xs12:""}},[i("v-layout",{attrs:{xs12:"",row:""}},[t.toPredict.length>0?i("v-checkbox",{attrs:{label:"Main"},model:{value:t.isActive.toPredict,callback:function(e){t.$set(t.isActive,"toPredict",e)},expression:"isActive.toPredict"}}):t._e(),t._v(" "),t.prediction.length>0?i("v-checkbox",{attrs:{label:"Prediction"},model:{value:t.isActive.prediction,callback:function(e){t.$set(t.isActive,"prediction",e)},expression:"isActive.prediction"}}):t._e(),t._v(" "),t._l(t.timeSeries,function(e,r){return i("v-checkbox",{key:r,attrs:{label:"timeSerie-"+r},model:{value:t.isActive[r],callback:function(e){t.$set(t.isActive,r,e)},expression:"isActive[i]"}})})],2),t._v(" "),i("svg",{staticClass:"grey darken-3",attrs:{width:t.width,height:t.height}},[i("g",{attrs:{transform:"translate("+t.marginLeft+", "+t.marginTop+")"}},[t.isActive.toPredict?i("c-path",{attrs:{rangeX:[0,t.total.length-1],dataset:t.toPredict,strokeWidth:"4",column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e(),t._v(" "),t.total.length>0&&t.isActive.prediction?i("c-path",{attrs:{transform:"translate("+t.$toXPixel(t.toPredict.length-1,0,t.total.length-1,t.chartWidth)+", 0)",color:"yellow",strokeWidth:"4",rangeX:[0,t.total.length-1],rangeY:[t.$getMin(t.total,"y"),t.$getMax(t.total,"y")],dataset:t.prediction,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e(),t._v(" "),t._l(t.timeSeries,function(e,r){return t.isActive[r]?i("c-path",{key:r,attrs:{color:"#ffbf8bb8",rangeX:[0,t.total.length-1],dataset:e,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e()}),t._v(" "),t._l(t.anomalies,function(e,r){return i("line",{key:"mark"+r,attrs:{x1:e,y1:"0",x2:e,y2:t.chartHeight,"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"1.5",stroke:"red"}})}),t._v(" "),i("x-axis",{attrs:{range:[0,t.total.length-1],ticks:10,fixed:1,height:t.chartHeight,width:t.chartWidth}}),t._v(" "),i("y-axis",{attrs:{range:[t.globalMinY,t.globalMaxY],ticks:5,fixed:1,height:t.chartHeight,label:"Units"}})],2)])],1)},staticRenderFns:[]};var x={components:{lineChart:i("VU/8")(f,m,!1,function(t){i("TbPc")},null,null).exports},data:function(){return{url:"http://54.93.223.206:9999/multivariate/get",dataSet:"",response:"",toGraph:{},loading:!1,errorDialog:{value:!1,text:""}}},methods:{getUrl:function(){var t=this;this.loading=!0;var e=JSON.parse(this.dataSet);this.$http.post(this.url,e).then(function(i){t.response=v.a,t.toGraph={toPredict:e.main,prediction:t.response,timeSeries:e.timeseries},t.loading=!1}).catch(function(e){t.loading=!1,t.errorDialog.value=!0,t.errorDialog.text=e,console.log(e)})},simulateResult:function(t){this.response=v.a;var e=JSON.parse(t);this.toGraph={toPredict:e.main,prediction:this.response,timeSeries:e.timeseries}}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":"",fluid:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs8:""}},[i("v-card",{staticClass:"transparent",attrs:{flat:""}},[i("v-text-field",{attrs:{label:"url",outline:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),i("v-textarea",{attrs:{label:"Data to process",outline:""},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getUrl(e):null}},model:{value:t.dataSet,callback:function(e){t.dataSet=e},expression:"dataSet"}}),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"green",flat:""},on:{click:t.getUrl}},[t._v("\n            submit\n            "),i("v-icon",{attrs:{right:""}},[t._v("send")])],1)],1)],1),t._v(" "),i("line-chart",{attrs:{dataSet:t.toGraph,height:350,marginLeft:70}})],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("pre",[t._v(t._s(t.response))])])],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("v-card",[i("v-card-text",[t._v("\n        Processing...\n        "),i("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:""}})],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"500"},model:{value:t.errorDialog.value,callback:function(e){t.$set(t.errorDialog,"value",e)},expression:"errorDialog.value"}},[i("v-card",{attrs:{color:"red",dark:""}},[i("v-card-text",[i("pre",[t._v(t._s(t.errorDialog.text))])]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.errorDialog.value=!1}}},[t._v("ok")])],1)],1)],1)],1)},staticRenderFns:[]},_=i("VU/8")(x,y,!1,null,null,null).exports;r.default.use(s.a);var k=new s.a({routes:[{path:"/",name:"univariate",component:p},{path:"/multivariate",name:"multivariate",component:_}]}),b=i("8+8L"),w={name:"y-axis",props:{range:{type:Array,required:!0},ticks:{type:Number},height:{type:Number,required:!0},label:{type:String},fixed:{type:Number}},computed:{ticksList:function(){if(this.range&&this.range.length>0){var t=[],e=this.range[0],i=(this.range[1]-e)/(this.ticks-1),r=0;t.push(0);for(var a=1;a<this.ticks;a++)t.push(this.fixed?(r+=i).toFixed(this.fixed):r+=i);return t.reverse()}}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{"text-anchor":"end",fill:"white",stroke:"white","stroke-width":"1"}},[i("line",{attrs:{y1:t.height}}),t._v(" "),t._l(t.ticksList,function(e,r){return i("g",{key:"tick"+r,attrs:{transform:"translate(0, "+r*(t.height/(t.ticksList.length-1))+")"}},[i("line",{attrs:{x2:"-6"}}),t._v(" "),i("text",{attrs:{"stroke-width":"0.1",x:"-9",dy:"0.32em"}},[t._v(t._s(e))])])}),t._v(" "),i("text",{attrs:{transform:"rotate(-90)",y:"6",dy:"0.71em","stroke-width":"0.1"}},[t._v(t._s(t.label))])],2)},staticRenderFns:[]},$=i("VU/8")(w,P,!1,null,null,null).exports,S={name:"x-axis",props:{range:{type:Array,required:!0},ticks:{type:Number},height:{type:Number,required:!0},width:{type:Number,required:!0},fixed:{type:Number}},computed:{ticksList:function(){if(this.range&&this.range.length>0){var t=[],e=this.range[0],i=(this.range[1]-e)/(this.ticks-1),r=0;t.push(0);for(var a=1;a<this.ticks;a++)t.push(this.fixed?(r+=i).toFixed(this.fixed):r+=i);return t}}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{"text-anchor":"middle",fill:"white",stroke:"white","stroke-width":"1",transform:"translate(0, "+t.height+")"}},[i("line",{attrs:{x2:t.width}}),t._v(" "),t._l(t.ticksList,function(e,r){return i("g",{key:"tick"+r,attrs:{transform:"translate("+r*(t.width/(t.ticksList.length-1))+", 0)"}},[i("line",{attrs:{y2:"6"}}),t._v(" "),i("text",{attrs:{"stroke-width":"0.1",y:"9",dy:"0.71em"}},[t._v(t._s(e))])])})],2)},staticRenderFns:[]},M=i("VU/8")(S,N,!1,null,null,null).exports,A={name:"bars",props:{dataset:{type:Array,required:!0},column:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0}},computed:{list:function(){for(var t=[],e=this.$getMax(this.dataset,this.column),i=this.$getMin(this.dataset,this.column),r=0;r<this.dataset.length;r++)t.push({d:this.dataset[r][this.column],v:this.$toYPixel(this.dataset[r][this.column],i,e,this.height)});return t}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",t._l(t.list,function(e,r){return i("rect",{key:r,attrs:{x:r*(t.width/t.list.length),y:e.v,width:30,height:t.height-e.v,fill:"green"}})}))},staticRenderFns:[]},W=i("VU/8")(A,D,!1,null,null,null).exports,H={name:"cPath",props:{dataset:{type:Array,required:!0},column:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0},color:{type:String,default:"steelblue"},strokeWidth:{type:String,default:"1.5"},rangeY:{type:Array},rangeX:{type:Array}},computed:{points:function(){if(this.dataset&&this.dataset.length>0){for(var t=this.rangeY?this.rangeY[0]:this.$getMin(this.dataset,this.column),e=this.rangeY?this.rangeY[1]:this.$getMax(this.dataset,this.column),i=this.rangeX?this.rangeX[0]:0,r=this.rangeX?this.rangeX[1]:this.dataset.length,a=[],n=[],s=0;s<this.dataset.length;s++)a.push(this.$toXPixel(s,i,r,this.width)),n.push(this.$toYPixel(this.dataset[s][this.column],t,e,this.height));a.reverse(),n.reverse();for(var o="M"+a[0]+" "+n[0],l=1;l<this.dataset.length;l++)o+=" L"+a[l]+" "+n[l]+" ";return o}}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{fill:"none",stroke:this.color,"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":this.strokeWidth,d:this.points}})])},staticRenderFns:[]},L=i("VU/8")(H,V,!1,null,null,null).exports,U={install:function(t){t.prototype.$getMax=function(t,e){for(var i=0,r=0;r<t.length;r++)i=t[r][e]>i?t[r][e]:i;return i},t.prototype.$getMin=function(t,e){for(var i=0,r=0;r<t.length;r++)i=t[r][e]<i?t[r][e]:i;return i},t.prototype.$toYPixel=function(t,e,i,r){return r-(t-e)/(i-e)*r},t.prototype.$toXPixel=function(t,e,i,r){return(t-e)/(i-e)*r},t.component($.name,$),t.component(M.name,M),t.component(W.name,W),t.component(L.name,L)}},q=i("M+UZ"),R=i.n(q),T=i("IcMm"),X=i.n(T),Y=i("7Q1V"),F=i.n(Y),E=i("7M7f"),C=i.n(E),G=i("JUsQ"),O=i.n(G),J=i("/yi5"),B=i.n(J),j=i("iAJc"),Z=i.n(j),Q=i("pqui"),z=i.n(Q),I=i("MPXs"),K=i.n(I),tt=i("f/u0"),et=i.n(tt),it=i("z8aH"),rt=i.n(it),at=i("6VHA"),nt=i.n(at);i("s6ZO");r.default.use(R.a,{components:{VApp:X.a,VBtn:F.a,VIcon:C.a,VGrid:O.a,VTextField:B.a,VTextarea:Z.a,VProgressLinear:z.a,VDialog:K.a,VCard:et.a,VCheckbox:rt.a,transitions:nt.a}}),r.default.config.productionTip=!1,r.default.use(b.a),r.default.use(U),r.default.http.headers.common["content-type"]="application/json",new r.default({el:"#app",router:k,render:function(t){return t(n)}})},NOHZ:function(t,e){},P0ba:function(t,e){},R681:function(t,e){},RGFK:function(t,e){},TbPc:function(t,e){},XC5Q:function(t,e){},acBN:function(t,e){},"q/9b":function(t,e){},rzhv:function(t,e){},s6ZO:function(t,e){},uKc5:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ced8118b0513b2b5d759.js.map