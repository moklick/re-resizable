(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(module,exports,__webpack_require__){__webpack_require__(157),__webpack_require__(235),module.exports=__webpack_require__(236)},236:function(module,exports,__webpack_require__){"use strict";(function(module){__webpack_require__(44),__webpack_require__(45),__webpack_require__(43),__webpack_require__(58);var _react=__webpack_require__(60),req=__webpack_require__(355);(0,_react.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}).call(this,__webpack_require__(27)(module))},355:function(module,exports,__webpack_require__){var map={"./auto.stories.tsx":356,"./snap.stories.tsx":359,"./vwvh.stories.tsx":360};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=355},356:function(module,exports,__webpack_require__){"use strict";(function(module){var React=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,newObj}(__webpack_require__(22)),_src=__webpack_require__(90),_react2=__webpack_require__(60),_style=__webpack_require__(91);(0,_react2.storiesOf)("auto",module).add("default",()=>React.createElement(_src.Resizable,{style:_style.style},"001"))}).call(this,__webpack_require__(27)(module))},357:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Resizer=function Resizer(props){return React.createElement("div",{className:props.className||"",style:{position:"absolute",userSelect:"none",...styles[props.direction],...props.replaceStyles||{}},onMouseDown:e=>{props.onResizeStart(e,props.direction)},onTouchStart:e=>{props.onResizeStart(e,props.direction)}},props.children)};var React=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,newObj}(__webpack_require__(22));const styles={top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}}},359:function(module,exports,__webpack_require__){"use strict";(function(module){var React=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,newObj}(__webpack_require__(22)),_src=__webpack_require__(90),_react2=__webpack_require__(60),_style=__webpack_require__(91);(0,_react2.storiesOf)("snapping",module).add("absolute",()=>React.createElement(_src.Resizable,{style:_style.style,snap:{x:[100,300,450],y:[100,300,450]},snapGap:20,defaultSize:{width:50,height:50}},"001")).add("grid",()=>React.createElement(_src.Resizable,{style:_style.style,grid:[100,100],snapGap:20,defaultSize:{width:50,height:50}},"001"))}).call(this,__webpack_require__(27)(module))},360:function(module,exports,__webpack_require__){"use strict";(function(module){var React=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,newObj}(__webpack_require__(22)),_src=__webpack_require__(90),_react2=__webpack_require__(60),_style=__webpack_require__(91);(0,_react2.storiesOf)("vw vh",module).add("vw",()=>React.createElement(_src.Resizable,{style:_style.style,defaultSize:{width:"50vw",height:"50vw"}},"001")).add("vh",()=>React.createElement(_src.Resizable,{style:_style.style,defaultSize:{width:"50vh",height:"50vh"}},"001"))}).call(this,__webpack_require__(27)(module))},90:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Resizable=void 0;var React=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,newObj}(__webpack_require__(22)),_resizer=__webpack_require__(357),_fastMemoize=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(358));function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const DEFAULT_SIZE={width:"auto",height:"auto"},clamp=(0,_fastMemoize.default)((n,min,max)=>Math.max(Math.min(n,max),min)),snap=(0,_fastMemoize.default)((n,size)=>Math.round(n/size)*size),hasDirection=(0,_fastMemoize.default)((dir,target)=>new RegExp(dir,"i").test(target)),findClosestSnap=(0,_fastMemoize.default)((n,snapArray,snapGap=0)=>{const closestGapIndex=snapArray.reduce((prev,curr,index)=>Math.abs(curr-n)<Math.abs(snapArray[prev]-n)?index:prev,0),gap=Math.abs(snapArray[closestGapIndex]-n);return 0===snapGap||gap<snapGap?snapArray[closestGapIndex]:n}),endsWith=(0,_fastMemoize.default)((str,searchStr)=>str.substr(str.length-searchStr.length,searchStr.length)===searchStr),getStringSize=(0,_fastMemoize.default)(n=>"auto"===(n=n.toString())?n:endsWith(n,"px")?n:endsWith(n,"%")?n:endsWith(n,"vh")?n:endsWith(n,"vw")?n:endsWith(n,"vmax")?n:endsWith(n,"vmin")?n:`${n}px`),calculateNewMax=(0,_fastMemoize.default)((parentSize,maxWidth,maxHeight,minWidth,minHeight)=>{if(maxWidth&&"string"==typeof maxWidth&&endsWith(maxWidth,"%")){const ratio=Number(maxWidth.replace("%",""))/100;maxWidth=parentSize.width*ratio}if(maxHeight&&"string"==typeof maxHeight&&endsWith(maxHeight,"%")){const ratio=Number(maxHeight.replace("%",""))/100;maxHeight=parentSize.height*ratio}if(minWidth&&"string"==typeof minWidth&&endsWith(minWidth,"%")){const ratio=Number(minWidth.replace("%",""))/100;minWidth=parentSize.width*ratio}if(minHeight&&"string"==typeof minHeight&&endsWith(minHeight,"%")){const ratio=Number(minHeight.replace("%",""))/100;minHeight=parentSize.height*ratio}return{maxWidth:void 0===maxWidth?void 0:Number(maxWidth),maxHeight:void 0===maxHeight?void 0:Number(maxHeight),minWidth:void 0===minWidth?void 0:Number(minWidth),minHeight:void 0===minHeight?void 0:Number(minHeight)}}),definedProps=["style","className","grid","snap","bounds","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],baseClassName="__resizable_base__";class Resizable extends React.Component{get parentNode(){return this.resizable?this.resizable.parentNode:null}get propsSize(){return this.props.size||this.props.defaultSize||DEFAULT_SIZE}get base(){const parent=this.parentNode;if(!parent)return;const children=[].slice.call(parent.children);for(const n of children)if(n instanceof HTMLElement&&n.classList.contains(baseClassName))return n}get size(){let width=0,height=0;if("undefined"!=typeof window&&this.resizable){const orgWidth=this.resizable.offsetWidth,orgHeight=this.resizable.offsetHeight,orgPosition=this.resizable.style.position;"relative"!==orgPosition&&(this.resizable.style.position="relative"),width="auto"!==this.resizable.style.width?this.resizable.offsetWidth:orgWidth,height="auto"!==this.resizable.style.height?this.resizable.offsetHeight:orgHeight,this.resizable.style.position=orgPosition}return{width:width,height:height}}get sizeStyle(){const{size:size}=this.props,getSize=key=>{if(void 0===this.state[key]||"auto"===this.state[key])return"auto";if(this.propsSize&&this.propsSize[key]&&endsWith(this.propsSize[key].toString(),"%")){if(endsWith(this.state[key].toString(),"%"))return this.state[key].toString();const parentSize=this.getParentSize();return`${Number(this.state[key].toString().replace("px",""))/parentSize[key]*100}%`}return getStringSize(this.state[key])};return{width:size&&void 0!==size.width&&!this.state.isResizing?getStringSize(size.width):getSize("width"),height:size&&void 0!==size.height&&!this.state.isResizing?getStringSize(size.height):getSize("height")}}constructor(props){super(props),_defineProperty(this,"ratio",1),_defineProperty(this,"resizable",null),_defineProperty(this,"extendsProps",{}),_defineProperty(this,"parentLeft",0),_defineProperty(this,"parentTop",0),_defineProperty(this,"resizableLeft",0),_defineProperty(this,"resizableTop",0),_defineProperty(this,"targetLeft",0),_defineProperty(this,"targetTop",0),this.state={isResizing:!1,resizeCursor:"auto",width:void 0===(this.propsSize&&this.propsSize.width)?"auto":this.propsSize&&this.propsSize.width,height:void 0===(this.propsSize&&this.propsSize.height)?"auto":this.propsSize&&this.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0}},this.updateExtendsProps(props),this.onResizeStart=this.onResizeStart.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),"undefined"!=typeof window&&(window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseleave",this.onMouseUp),window.addEventListener("touchmove",this.onMouseMove),window.addEventListener("touchend",this.onMouseUp))}updateExtendsProps(props){this.extendsProps=Object.keys(props).reduce((acc,key)=>-1!==definedProps.indexOf(key)?acc:(acc[key]=props[key],acc),{})}getParentSize(){if(!this.base||!this.parentNode)return{width:window.innerWidth,height:window.innerHeight};let wrapChanged=!1;const wrap=this.parentNode.style.flexWrap,minWidth=this.base.style.minWidth;"wrap"!==wrap&&(wrapChanged=!0,this.parentNode.style.flexWrap="wrap"),this.base.style.position="relative",this.base.style.minWidth="100%";const size={width:this.base.offsetWidth,height:this.base.offsetHeight};return this.base.style.position="absolute",wrapChanged&&(this.parentNode.style.flexWrap=wrap),this.base.style.minWidth=minWidth,size}componentDidMount(){this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height});const parent=this.parentNode;if(!(parent instanceof HTMLElement))return;if(this.base)return;const element=document.createElement("div");element.style.width="100%",element.style.height="100%",element.style.position="absolute",element.style.transform="scale(0, 0)",element.style.left="0",element.style.flex="0",element.classList?element.classList.add(baseClassName):element.className+=baseClassName,parent.appendChild(element)}componentWillReceiveProps(next){this.updateExtendsProps(next)}componentWillUnmount(){if("undefined"!=typeof window){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseleave",this.onMouseUp),window.removeEventListener("touchmove",this.onMouseMove),window.removeEventListener("touchend",this.onMouseUp);const parent=this.parentNode;if(!this.base||!parent)return;if(!(parent instanceof HTMLElement&&this.base instanceof Node))return;parent.removeChild(this.base)}}createSizeForCssProperty(newSize,kind){const propsSize=this.propsSize&&this.propsSize[kind];return"auto"!==this.state[kind]||this.state.original[kind]!==newSize||void 0!==propsSize&&"auto"!==propsSize?newSize:"auto"}calculateNewMaxFromBoundary(maxWidth,maxHeight){if("parent"===this.props.bounds){const parent=this.parentNode;if(parent instanceof HTMLElement){const boundWidth=parent.offsetWidth+(this.parentLeft-this.resizableLeft),boundHeight=parent.offsetHeight+(this.parentTop-this.resizableTop);maxWidth=maxWidth&&maxWidth<boundWidth?maxWidth:boundWidth,maxHeight=maxHeight&&maxHeight<boundHeight?maxHeight:boundHeight}}else if("window"===this.props.bounds){if("undefined"!=typeof window){const boundWidth=window.innerWidth-this.resizableLeft,boundHeight=window.innerHeight-this.resizableTop;maxWidth=maxWidth&&maxWidth<boundWidth?maxWidth:boundWidth,maxHeight=maxHeight&&maxHeight<boundHeight?maxHeight:boundHeight}}else if(this.props.bounds instanceof HTMLElement){const boundWidth=this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),boundHeight=this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop);maxWidth=maxWidth&&maxWidth<boundWidth?maxWidth:boundWidth,maxHeight=maxHeight&&maxHeight<boundHeight?maxHeight:boundHeight}return{maxWidth:maxWidth,maxHeight:maxHeight}}calculateNewSizeFromDirection(clientX,clientY){const scale=this.props.scale||1,resizeRatio=this.props.resizeRatio||1,{direction:direction,original:original}=this.state,{lockAspectRatio:lockAspectRatio,lockAspectRatioExtraHeight:lockAspectRatioExtraHeight,lockAspectRatioExtraWidth:lockAspectRatioExtraWidth}=this.props;let newWidth=original.width,newHeight=original.height;return hasDirection("right",direction)&&(newWidth=original.width+(clientX-original.x)*resizeRatio/scale,lockAspectRatio&&(newHeight=(newWidth-lockAspectRatioExtraWidth)/this.ratio+lockAspectRatioExtraHeight)),hasDirection("left",direction)&&(newWidth=original.width-(clientX-original.x)*resizeRatio/scale,lockAspectRatio&&(newHeight=(newWidth-lockAspectRatioExtraWidth)/this.ratio+lockAspectRatioExtraHeight)),hasDirection("bottom",direction)&&(newHeight=original.height+(clientY-original.y)*resizeRatio/scale,lockAspectRatio&&(newWidth=(newHeight-lockAspectRatioExtraHeight)*this.ratio+lockAspectRatioExtraWidth)),hasDirection("top",direction)&&(newHeight=original.height-(clientY-original.y)*resizeRatio/scale,lockAspectRatio&&(newWidth=(newHeight-lockAspectRatioExtraHeight)*this.ratio+lockAspectRatioExtraWidth)),{newWidth:newWidth,newHeight:newHeight}}calculateNewSizeFromAspectRatio(newWidth,newHeight,max,min){const{lockAspectRatio:lockAspectRatio,lockAspectRatioExtraHeight:lockAspectRatioExtraHeight,lockAspectRatioExtraWidth:lockAspectRatioExtraWidth}=this.props,computedMinWidth=void 0===min.width?10:min.width,computedMaxWidth=void 0===max.width||max.width<0?newWidth:max.width,computedMinHeight=void 0===min.height?10:min.height,computedMaxHeight=void 0===max.height||max.height<0?newHeight:max.height;if(lockAspectRatio){const extraMinWidth=(computedMinHeight-lockAspectRatioExtraHeight)*this.ratio+lockAspectRatioExtraWidth,extraMaxWidth=(computedMaxHeight-lockAspectRatioExtraHeight)*this.ratio+lockAspectRatioExtraWidth,extraMinHeight=(computedMinWidth-lockAspectRatioExtraWidth)/this.ratio+lockAspectRatioExtraHeight,extraMaxHeight=(computedMaxWidth-lockAspectRatioExtraWidth)/this.ratio+lockAspectRatioExtraHeight,lockedMinWidth=Math.max(computedMinWidth,extraMinWidth),lockedMaxWidth=Math.min(computedMaxWidth,extraMaxWidth),lockedMinHeight=Math.max(computedMinHeight,extraMinHeight),lockedMaxHeight=Math.min(computedMaxHeight,extraMaxHeight);newWidth=clamp(newWidth,lockedMinWidth,lockedMaxWidth),newHeight=clamp(newHeight,lockedMinHeight,lockedMaxHeight)}else newWidth=clamp(newWidth,computedMinWidth,computedMaxWidth),newHeight=clamp(newHeight,computedMinHeight,computedMaxHeight);return{newWidth:newWidth,newHeight:newHeight}}setBoundingClientRect(){if("parent"===this.props.bounds){const parent=this.parentNode;if(parent instanceof HTMLElement){const parentRect=parent.getBoundingClientRect();this.parentLeft=parentRect.left,this.parentTop=parentRect.top}}if(this.props.bounds instanceof HTMLElement){const targetRect=this.props.bounds.getBoundingClientRect();this.targetLeft=targetRect.left,this.targetTop=targetRect.top}if(this.resizable){const{left:left,top:top}=this.resizable.getBoundingClientRect();this.resizableLeft=left,this.resizableTop=top}}onResizeStart(event,direction){let clientX=0,clientY=0;if(event.nativeEvent instanceof MouseEvent){if(clientX=event.nativeEvent.clientX,clientY=event.nativeEvent.clientY,3===event.nativeEvent.which)return}else event.nativeEvent instanceof TouchEvent&&(clientX=event.nativeEvent.touches[0].clientX,clientY=event.nativeEvent.touches[0].clientY);this.props.onResizeStart&&this.resizable&&this.props.onResizeStart(event,direction,this.resizable),this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height,this.setBoundingClientRect(),this.setState({original:{x:clientX,y:clientY,width:this.size.width,height:this.size.height},isResizing:!0,resizeCursor:window.getComputedStyle(event.target).cursor||"auto",direction:direction})}onMouseMove(event){if(!this.state.isResizing||!this.resizable)return;let{maxWidth:maxWidth,maxHeight:maxHeight,minWidth:minWidth,minHeight:minHeight}=this.props;const clientX=event instanceof MouseEvent?event.clientX:event.touches[0].clientX,clientY=event instanceof MouseEvent?event.clientY:event.touches[0].clientY,{direction:direction,original:original,width:width,height:height}=this.state,parentSize=this.getParentSize(),max=calculateNewMax(parentSize,maxWidth,maxHeight,minWidth,minHeight);maxWidth=max.maxWidth,maxHeight=max.maxHeight,minWidth=max.minWidth,minHeight=max.minHeight;let{newHeight:newHeight,newWidth:newWidth}=this.calculateNewSizeFromDirection(clientX,clientY);const boundaryMax=this.calculateNewMaxFromBoundary(maxWidth,maxHeight),newSize=this.calculateNewSizeFromAspectRatio(newWidth,newHeight,{width:boundaryMax.maxWidth,height:boundaryMax.maxHeight},{width:minWidth,height:minHeight});if(newWidth=newSize.newWidth,newHeight=newSize.newHeight,this.props.grid){const newGridWidth=snap(newWidth,this.props.grid[0]),newGridHeight=snap(newHeight,this.props.grid[1]);newWidth=0===this.props.snapGap||Math.abs(newGridWidth-newWidth)<=this.props.snapGap?newGridWidth:newWidth,newHeight=0===this.props.snapGap||Math.abs(newGridHeight-newHeight)<=this.props.snapGap?newGridHeight:newHeight}this.props.snap&&this.props.snap.x&&(newWidth=findClosestSnap(newWidth,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(newHeight=findClosestSnap(newHeight,this.props.snap.y,this.props.snapGap));const delta={width:newWidth-original.width,height:newHeight-original.height};if(width&&"string"==typeof width)if(endsWith(width,"%")){newWidth=`${newWidth/parentSize.width*100}%`}else if(endsWith(width,"vw")){newWidth=`${newWidth/window.innerWidth*100}vw`}else if(endsWith(width,"vh")){newWidth=`${newWidth/window.innerHeight*100}vh`}if(height&&"string"==typeof height)if(endsWith(height,"%")){newHeight=`${newHeight/parentSize.height*100}%`}else if(endsWith(height,"vw")){newHeight=`${newHeight/window.innerWidth*100}vw`}else if(endsWith(height,"vh")){newHeight=`${newHeight/window.innerHeight*100}vh`}this.setState({width:this.createSizeForCssProperty(newWidth,"width"),height:this.createSizeForCssProperty(newHeight,"height")}),this.props.onResize&&this.props.onResize(event,direction,this.resizable,delta)}onMouseUp(event){const{isResizing:isResizing,direction:direction,original:original}=this.state;if(!isResizing||!this.resizable)return;const delta={width:this.size.width-original.width,height:this.size.height-original.height};this.props.onResizeStop&&this.props.onResizeStop(event,direction,this.resizable,delta),this.props.size&&this.setState(this.props.size),this.setState({isResizing:!1,resizeCursor:"auto"})}updateSize(size){this.setState({width:size.width,height:size.height})}renderResizer(){const{enable:enable,handleStyles:handleStyles,handleClasses:handleClasses,handleWrapperStyle:handleWrapperStyle,handleWrapperClass:handleWrapperClass,handleComponent:handleComponent}=this.props;if(!enable)return null;const resizers=Object.keys(enable).map(dir=>!1!==enable[dir]?React.createElement(_resizer.Resizer,{key:dir,direction:dir,onResizeStart:this.onResizeStart,replaceStyles:handleStyles&&handleStyles[dir],className:handleClasses&&handleClasses[dir]},handleComponent&&handleComponent[dir]?handleComponent[dir]:null):null);return React.createElement("span",{className:handleWrapperClass,style:handleWrapperStyle},resizers)}render(){return React.createElement("div",_extends({ref:c=>{c&&(this.resizable=c)},style:{position:"relative",userSelect:this.state.isResizing?"none":"auto",...this.props.style,...this.sizeStyle,maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box"},className:this.props.className},this.extendsProps),this.state.isResizing&&React.createElement("div",{style:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:`${this.state.resizeCursor||"auto"}`,opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"}}),this.props.children,this.renderResizer())}}exports.Resizable=Resizable,_defineProperty(Resizable,"defaultProps",{onResizeStart:()=>{},onResize:()=>{},onResizeStop:()=>{},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0})},91:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.style=void 0;exports.style={display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px #ddd",background:"#f0f0f0"}}},[[156,1,2]]]);
//# sourceMappingURL=main.1571020ea55053ca8048.bundle.js.map