(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{474:function(e,t,n){"use strict";var r=n(475),o=n.n(r),c=n(7),h=n(25),d=n.n(h);class l extends o.a{constructor(e,t){var n,a;if(super(),n=this,this._handleMessage=e=>{if(this._injectedProvider&&e.source===window||e.origin===this._providerUrl.origin&&e.source===this._popup)if("connected"===e.data.method){const t=new c.c(e.data.params.publicKey);this._publicKey&&this._publicKey.equals(t)||(this._publicKey&&!this._publicKey.equals(t)&&this._handleDisconnect(),this._publicKey=t,this._autoApprove=!!e.data.params.autoApprove,this.emit("connect",this._publicKey))}else if("disconnected"===e.data.method)this._handleDisconnect();else if((e.data.result||e.data.error)&&this._responsePromises.has(e.data.id)){const[t,n]=this._responsePromises.get(e.data.id);e.data.result?t(e.data.result):n(new Error(e.data.error))}},this._handleConnect=()=>(this._handlerAdded||(this._handlerAdded=!0,window.addEventListener("message",this._handleMessage),window.addEventListener("beforeunload",this.disconnect)),this._injectedProvider?new Promise(e=>{this._sendRequest("connect",{}),e()}):(window.name="parent",this._popup=window.open(this._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(e=>{this.once("connect",e)}))),this._handleDisconnect=()=>{this._handlerAdded&&(this._handlerAdded=!1,window.removeEventListener("message",this._handleMessage),window.removeEventListener("beforeunload",this.disconnect)),this._publicKey&&(this._publicKey=null,this.emit("disconnect")),this._responsePromises.forEach(([e,t],n)=>{this._responsePromises.delete(n),t("Wallet disconnected")})},this._sendRequest=async function(e,t){if("connect"!==e&&!n.connected)throw new Error("Wallet not connected");const r=n._nextRequestId;return++n._nextRequestId,new Promise((o,c)=>{n._responsePromises.set(r,[o,c]),n._injectedProvider?n._injectedProvider.postMessage({jsonrpc:"2.0",id:r,method:e,params:{network:n._network,...t}}):(n._popup.postMessage({jsonrpc:"2.0",id:r,method:e,params:t},n._providerUrl.origin),n.autoApprove||n._popup.focus())})},this.connect=()=>(this._popup&&this._popup.close(),this._handleConnect()),this.disconnect=async function(){n._injectedProvider&&await n._sendRequest("disconnect",{}),n._popup&&n._popup.close(),n._handleDisconnect()},this.sign=async function(data,e){if(!(data instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");const t=await n._sendRequest("sign",{data:data,display:e});return{signature:d.a.decode(t.signature),publicKey:new c.c(t.publicKey)}},this.signTransaction=async function(e){const t=await n._sendRequest("signTransaction",{message:d.a.encode(e.serializeMessage())}),r=d.a.decode(t.signature),o=new c.c(t.publicKey);return e.addSignature(o,r),e},this.signAllTransactions=async function(e){const t=await n._sendRequest("signAllTransactions",{messages:e.map(e=>d.a.encode(e.serializeMessage()))}),r=t.signatures.map(s=>d.a.decode(s)),o=new c.c(t.publicKey);return e=e.map((e,t)=>(e.addSignature(o,r[t]),e))},function(a){return"object"==typeof a&&null!==a}(a=e)&&function(a){return"function"==typeof a}(a.postMessage))this._injectedProvider=e;else{if(!function(a){return"string"==typeof a}(e))throw new Error("provider parameter must be an injected provider or a URL string.");this._providerUrl=new URL(e),this._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:t}).toString()}this._network=t,this._publicKey=null,this._autoApprove=!1,this._popup=null,this._handlerAdded=!1,this._nextRequestId=1,this._responsePromises=new Map}get publicKey(){return this._publicKey}get connected(){return null!==this._publicKey}get autoApprove(){return this._autoApprove}}t.a=l},475:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o="~";function c(){}function h(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function d(e,t,n,r,c){if("function"!=typeof n)throw new TypeError("The listener must be a function");var d=new h(n,r||e,c),l=o?o+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],d]:e._events[l].push(d):(e._events[l]=d,e._eventsCount++),e}function l(e,t){0==--e._eventsCount?e._events=new c:delete e._events[t]}function _(){this._events=new c,this._eventsCount=0}Object.create&&(c.prototype=Object.create(null),(new c).__proto__||(o=!1)),_.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},_.prototype.listeners=function(e){var t=o?o+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,c=new Array(r);i<r;i++)c[i]=n[i].fn;return c},_.prototype.listenerCount=function(e){var t=o?o+e:e,n=this._events[t];return n?n.fn?1:n.length:0},_.prototype.emit=function(e,t,n,r,c,h){var d=o?o+e:e;if(!this._events[d])return!1;var l,i,_=this._events[d],f=arguments.length;if(_.fn){switch(_.once&&this.removeListener(e,_.fn,void 0,!0),f){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,t),!0;case 3:return _.fn.call(_.context,t,n),!0;case 4:return _.fn.call(_.context,t,n,r),!0;case 5:return _.fn.call(_.context,t,n,r,c),!0;case 6:return _.fn.call(_.context,t,n,r,c,h),!0}for(i=1,l=new Array(f-1);i<f;i++)l[i-1]=arguments[i];_.fn.apply(_.context,l)}else{var v,w=_.length;for(i=0;i<w;i++)switch(_[i].once&&this.removeListener(e,_[i].fn,void 0,!0),f){case 1:_[i].fn.call(_[i].context);break;case 2:_[i].fn.call(_[i].context,t);break;case 3:_[i].fn.call(_[i].context,t,n);break;case 4:_[i].fn.call(_[i].context,t,n,r);break;default:if(!l)for(v=1,l=new Array(f-1);v<f;v++)l[v-1]=arguments[v];_[i].fn.apply(_[i].context,l)}}return!0},_.prototype.on=function(e,t,n){return d(this,e,t,n,!1)},_.prototype.once=function(e,t,n){return d(this,e,t,n,!0)},_.prototype.removeListener=function(e,t,n,r){var c=o?o+e:e;if(!this._events[c])return this;if(!t)return l(this,c),this;var h=this._events[c];if(h.fn)h.fn!==t||r&&!h.once||n&&h.context!==n||l(this,c);else{for(var i=0,d=[],_=h.length;i<_;i++)(h[i].fn!==t||r&&!h[i].once||n&&h[i].context!==n)&&d.push(h[i]);d.length?this._events[c]=1===d.length?d[0]:d:l(this,c)}return this},_.prototype.removeAllListeners=function(e){var t;return e?(t=o?o+e:e,this._events[t]&&l(this,t)):(this._events=new c,this._eventsCount=0),this},_.prototype.off=_.prototype.removeListener,_.prototype.addListener=_.prototype.on,_.prefixed=o,_.EventEmitter=_,e.exports=_}}]);