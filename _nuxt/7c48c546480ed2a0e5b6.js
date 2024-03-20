(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1046:function(r,e,t){"use strict";t.r(e),t.d(e,"TransactionTypes",(function(){return X})),t.d(e,"computeAddress",(function(){return $})),t.d(e,"recoverAddress",(function(){return J})),t.d(e,"accessListify",(function(){return Q})),t.d(e,"serialize",(function(){return nr})),t.d(e,"parse",(function(){return sr}));var n=t(67),o=t(99);let c=!1,l=!1;const E={debug:1,default:2,info:2,warning:3,error:4,off:5};let h=E.default,f=null;const N=function(){try{const r=[];if(["NFD","NFC","NFKD","NFKC"].forEach(form=>{try{if("test"!=="test".normalize(form))throw new Error("bad normalize")}catch(e){r.push(form)}}),r.length)throw new Error("missing "+r.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(r){return r.message}return null}();var m,R;!function(r){r.DEBUG="DEBUG",r.INFO="INFO",r.WARNING="WARNING",r.ERROR="ERROR",r.OFF="OFF"}(m||(m={})),function(r){r.UNKNOWN_ERROR="UNKNOWN_ERROR",r.NOT_IMPLEMENTED="NOT_IMPLEMENTED",r.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",r.NETWORK_ERROR="NETWORK_ERROR",r.SERVER_ERROR="SERVER_ERROR",r.TIMEOUT="TIMEOUT",r.BUFFER_OVERRUN="BUFFER_OVERRUN",r.NUMERIC_FAULT="NUMERIC_FAULT",r.MISSING_NEW="MISSING_NEW",r.INVALID_ARGUMENT="INVALID_ARGUMENT",r.MISSING_ARGUMENT="MISSING_ARGUMENT",r.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",r.CALL_EXCEPTION="CALL_EXCEPTION",r.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",r.NONCE_EXPIRED="NONCE_EXPIRED",r.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",r.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",r.TRANSACTION_REPLACED="TRANSACTION_REPLACED",r.ACTION_REJECTED="ACTION_REJECTED"}(R||(R={}));const I="0123456789abcdef";class v{constructor(r){Object.defineProperty(this,"version",{enumerable:!0,value:r,writable:!1})}_log(r,e){const t=r.toLowerCase();null==E[t]&&this.throwArgumentError("invalid log level name","logLevel",r),h>E[t]||console.log.apply(console,e)}debug(...r){this._log(v.levels.DEBUG,r)}info(...r){this._log(v.levels.INFO,r)}warn(...r){this._log(v.levels.WARNING,r)}makeError(r,code,e){if(l)return this.makeError("censored error",code,{});code||(code=v.errors.UNKNOWN_ERROR),e||(e={});const t=[];Object.keys(e).forEach(r=>{const n=e[r];try{if(n instanceof Uint8Array){let e="";for(let i=0;i<n.length;i++)e+=I[n[i]>>4],e+=I[15&n[i]];t.push(r+"=Uint8Array(0x"+e+")")}else t.push(r+"="+JSON.stringify(n))}catch(n){t.push(r+"="+JSON.stringify(e[r].toString()))}}),t.push(`code=${code}`),t.push(`version=${this.version}`);const n=r;let o="";switch(code){case R.NUMERIC_FAULT:{o="NUMERIC_FAULT";const e=r;switch(e){case"overflow":case"underflow":case"division-by-zero":o+="-"+e;break;case"negative-power":case"negative-width":o+="-unsupported";break;case"unbound-bitwise-result":o+="-unbound-result"}break}case R.CALL_EXCEPTION:case R.INSUFFICIENT_FUNDS:case R.MISSING_NEW:case R.NONCE_EXPIRED:case R.REPLACEMENT_UNDERPRICED:case R.TRANSACTION_REPLACED:case R.UNPREDICTABLE_GAS_LIMIT:o=code}o&&(r+=" [ See: https://links.ethers.org/v5-errors-"+o+" ]"),t.length&&(r+=" ("+t.join(", ")+")");const c=new Error(r);return c.reason=n,c.code=code,Object.keys(e).forEach((function(r){c[r]=e[r]})),c}throwError(r,code,e){throw this.makeError(r,code,e)}throwArgumentError(r,e,t){return this.throwError(r,v.errors.INVALID_ARGUMENT,{argument:e,value:t})}assert(r,e,code,t){r||this.throwError(e,code,t)}assertArgument(r,e,t,n){r||this.throwArgumentError(e,t,n)}checkNormalize(r){null==r&&(r="platform missing String.prototype.normalize"),N&&this.throwError("platform missing String.prototype.normalize",v.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:N})}checkSafeUint53(r,e){"number"==typeof r&&(null==e&&(e="value not safe"),(r<0||r>=9007199254740991)&&this.throwError(e,v.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:r}),r%1&&this.throwError(e,v.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:r}))}checkArgumentCount(r,e,t){t=t?": "+t:"",r<e&&this.throwError("missing argument"+t,v.errors.MISSING_ARGUMENT,{count:r,expectedCount:e}),r>e&&this.throwError("too many arguments"+t,v.errors.UNEXPECTED_ARGUMENT,{count:r,expectedCount:e})}checkNew(r,e){r!==Object&&null!=r||this.throwError("missing new",v.errors.MISSING_NEW,{name:e.name})}checkAbstract(r,e){r===e?this.throwError("cannot instantiate abstract class "+JSON.stringify(e.name)+" directly; use a sub-class",v.errors.UNSUPPORTED_OPERATION,{name:r.name,operation:"new"}):r!==Object&&null!=r||this.throwError("missing new",v.errors.MISSING_NEW,{name:e.name})}static globalLogger(){return f||(f=new v("logger/5.7.0")),f}static setCensorship(r,e){if(!r&&e&&this.globalLogger().throwError("cannot permanently disable censorship",v.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),c){if(!r)return;this.globalLogger().throwError("error censorship permanent",v.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}l=!!r,c=!!e}static setLogLevel(r){const e=E[r.toLowerCase()];null!=e?h=e:v.globalLogger().warn("invalid log level - "+r)}static from(r){return new v(r)}}v.errors=R,v.levels=m;const A=new v("bytes/5.7.0");function d(r){return!!r.toHexString}function O(r){return r.slice||(r.slice=function(){const e=Array.prototype.slice.call(arguments);return O(new Uint8Array(Array.prototype.slice.apply(r,e)))}),r}function y(r){return w(r)&&!(r.length%2)||_(r)}function U(r){return"number"==typeof r&&r==r&&r%1==0}function _(r){if(null==r)return!1;if(r.constructor===Uint8Array)return!0;if("string"==typeof r)return!1;if(!U(r.length)||r.length<0)return!1;for(let i=0;i<r.length;i++){const e=r[i];if(!U(e)||e<0||e>=256)return!1}return!0}function P(r,e){if(e||(e={}),"number"==typeof r){A.checkSafeUint53(r,"invalid arrayify value");const e=[];for(;r;)e.unshift(255&r),r=parseInt(String(r/256));return 0===e.length&&e.push(0),O(new Uint8Array(e))}if(e.allowMissingPrefix&&"string"==typeof r&&"0x"!==r.substring(0,2)&&(r="0x"+r),d(r)&&(r=r.toHexString()),w(r)){let t=r.substring(2);t.length%2&&("left"===e.hexPad?t="0"+t:"right"===e.hexPad?t+="0":A.throwArgumentError("hex data is odd-length","value",r));const n=[];for(let i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));return O(new Uint8Array(n))}return _(r)?O(new Uint8Array(r)):A.throwArgumentError("invalid arrayify value","value",r)}function T(r){let e=P(r);if(0===e.length)return e;let t=0;for(;t<e.length&&0===e[t];)t++;return t&&(e=e.slice(t)),e}function w(r,e){return!("string"!=typeof r||!r.match(/^0x[0-9A-Fa-f]*$/))&&(!e||r.length===2+2*e)}function C(r,e){if(e||(e={}),"number"==typeof r){A.checkSafeUint53(r,"invalid hexlify value");let e="";for(;r;)e="0123456789abcdef"[15&r]+e,r=Math.floor(r/16);return e.length?(e.length%2&&(e="0"+e),"0x"+e):"0x00"}if("bigint"==typeof r)return(r=r.toString(16)).length%2?"0x0"+r:"0x"+r;if(e.allowMissingPrefix&&"string"==typeof r&&"0x"!==r.substring(0,2)&&(r="0x"+r),d(r))return r.toHexString();if(w(r))return r.length%2&&("left"===e.hexPad?r="0x0"+r.substring(2):"right"===e.hexPad?r+="0":A.throwArgumentError("hex data is odd-length","value",r)),r.toLowerCase();if(_(r)){let e="0x";for(let i=0;i<r.length;i++){let t=r[i];e+="0123456789abcdef"[(240&t)>>4]+"0123456789abcdef"[15&t]}return e}return A.throwArgumentError("invalid hexlify value","value",r)}function S(data,r,e){return"string"!=typeof data?data=C(data):(!w(data)||data.length%2)&&A.throwArgumentError("invalid hexData","value",data),r=2+2*r,null!=e?"0x"+data.substring(r,2+2*e):"0x"+data.substring(r)}function L(r){let e="0x";return r.forEach(r=>{e+=C(r).substring(2)}),e}function D(r,e){for("string"!=typeof r?r=C(r):w(r)||A.throwArgumentError("invalid hex string","value",r),r.length>2*e+2&&A.throwArgumentError("value out of range","value",arguments[1]);r.length<2*e+2;)r="0x0"+r.substring(2);return r}function F(r){const e={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(y(r)){let t=P(r);64===t.length?(e.v=27+(t[32]>>7),t[32]&=127,e.r=C(t.slice(0,32)),e.s=C(t.slice(32,64))):65===t.length?(e.r=C(t.slice(0,32)),e.s=C(t.slice(32,64)),e.v=t[64]):A.throwArgumentError("invalid signature string","signature",r),e.v<27&&(0===e.v||1===e.v?e.v+=27:A.throwArgumentError("signature invalid v byte","signature",r)),e.recoveryParam=1-e.v%2,e.recoveryParam&&(t[32]|=128),e._vs=C(t.slice(32,64))}else{if(e.r=r.r,e.s=r.s,e.v=r.v,e.recoveryParam=r.recoveryParam,e._vs=r._vs,null!=e._vs){const t=function(r,e){(r=P(r)).length>e&&A.throwArgumentError("value out of range","value",arguments[0]);const t=new Uint8Array(e);return t.set(r,e-r.length),O(t)}(P(e._vs),32);e._vs=C(t);const n=t[0]>=128?1:0;null==e.recoveryParam?e.recoveryParam=n:e.recoveryParam!==n&&A.throwArgumentError("signature recoveryParam mismatch _vs","signature",r),t[0]&=127;const s=C(t);null==e.s?e.s=s:e.s!==s&&A.throwArgumentError("signature v mismatch _vs","signature",r)}if(null==e.recoveryParam)null==e.v?A.throwArgumentError("signature missing v and recoveryParam","signature",r):0===e.v||1===e.v?e.recoveryParam=e.v:e.recoveryParam=1-e.v%2;else if(null==e.v)e.v=27+e.recoveryParam;else{const t=0===e.v||1===e.v?e.v:1-e.v%2;e.recoveryParam!==t&&A.throwArgumentError("signature recoveryParam mismatch v","signature",r)}null!=e.r&&w(e.r)?e.r=D(e.r,32):A.throwArgumentError("signature missing or invalid r","signature",r),null!=e.s&&w(e.s)?e.s=D(e.s,32):A.throwArgumentError("signature missing or invalid s","signature",r);const t=P(e.s);t[0]>=128&&A.throwArgumentError("signature s out of range","signature",r),e.recoveryParam&&(t[0]|=128);const n=C(t);e._vs&&(w(e._vs)||A.throwArgumentError("signature invalid _vs","signature",r),e._vs=D(e._vs,32)),null==e._vs?e._vs=n:e._vs!==n&&A.throwArgumentError("signature _vs mismatch v and s","signature",r)}return e.yParityAndS=e._vs,e.compact=e.r+e.yParityAndS.substring(2),e}var x=t(1051),M=t(43),G=t(22),k=t(68),j=t(312);const W=new v("transactions/5.7.0");var X;function K(r){return"0x"===r?null:Object(n.a)(r)}function z(r){return"0x"===r?x.d:o.a.from(r)}!function(r){r[r.legacy=0]="legacy",r[r.eip2930=1]="eip2930",r[r.eip1559=2]="eip1559"}(X||(X={}));const V=[{name:"nonce",maxLength:32,numeric:!0},{name:"gasPrice",maxLength:32,numeric:!0},{name:"gasLimit",maxLength:32,numeric:!0},{name:"to",length:20},{name:"value",maxLength:32,numeric:!0},{name:"data"}],B={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,type:!0,value:!0};function $(r){const e=Object(j.a)(r);return Object(n.a)(S(Object(M.a)(S(e,1)),12))}function J(r,e){return $(Object(j.b)(P(r),e))}function H(r,e){const t=T(o.a.from(r).toHexString());return t.length>32&&W.throwArgumentError("invalid length for "+e,"transaction:"+e,r),t}function Z(r,e){return{address:Object(n.a)(r),storageKeys:(e||[]).map((e,t)=>(32!==function(data){if("string"!=typeof data)data=C(data);else if(!w(data)||data.length%2)return null;return(data.length-2)/2}(e)&&W.throwArgumentError("invalid access list storageKey",`accessList[${r}:${t}]`,e),e.toLowerCase()))}}function Q(r){if(Array.isArray(r))return r.map((r,e)=>Array.isArray(r)?(r.length>2&&W.throwArgumentError("access list expected to be [ address, storageKeys[] ]",`value[${e}]`,r),Z(r[0],r[1])):Z(r.address,r.storageKeys));const e=Object.keys(r).map(e=>{const t=r[e].reduce((r,e)=>(r[e]=!0,r),{});return Z(e,Object.keys(t).sort())});return e.sort((a,b)=>a.address.localeCompare(b.address)),e}function Y(r){return Q(r).map(r=>[r.address,r.storageKeys])}function rr(r,e){if(null!=r.gasPrice){const e=o.a.from(r.gasPrice),t=o.a.from(r.maxFeePerGas||0);e.eq(t)||W.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas","tx",{gasPrice:e,maxFeePerGas:t})}const t=[H(r.chainId||0,"chainId"),H(r.nonce||0,"nonce"),H(r.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),H(r.maxFeePerGas||0,"maxFeePerGas"),H(r.gasLimit||0,"gasLimit"),null!=r.to?Object(n.a)(r.to):"0x",H(r.value||0,"value"),r.data||"0x",Y(r.accessList||[])];if(e){const r=F(e);t.push(H(r.recoveryParam,"recoveryParam")),t.push(T(r.r)),t.push(T(r.s))}return L(["0x02",k.b(t)])}function er(r,e){const t=[H(r.chainId||0,"chainId"),H(r.nonce||0,"nonce"),H(r.gasPrice||0,"gasPrice"),H(r.gasLimit||0,"gasLimit"),null!=r.to?Object(n.a)(r.to):"0x",H(r.value||0,"value"),r.data||"0x",Y(r.accessList||[])];if(e){const r=F(e);t.push(H(r.recoveryParam,"recoveryParam")),t.push(T(r.r)),t.push(T(r.s))}return L(["0x01",k.b(t)])}function nr(r,e){if(null==r.type||0===r.type)return null!=r.accessList&&W.throwArgumentError("untyped transactions do not support accessList; include type: 1","transaction",r),function(r,e){Object(G.b)(r,B);const t=[];V.forEach((function(e){let n=r[e.name]||[];const o={};e.numeric&&(o.hexPad="left"),n=P(C(n,o)),e.length&&n.length!==e.length&&n.length>0&&W.throwArgumentError("invalid length for "+e.name,"transaction:"+e.name,n),e.maxLength&&(n=T(n),n.length>e.maxLength&&W.throwArgumentError("invalid length for "+e.name,"transaction:"+e.name,n)),t.push(C(n))}));let n=0;if(null!=r.chainId?(n=r.chainId,"number"!=typeof n&&W.throwArgumentError("invalid transaction.chainId","transaction",r)):e&&!y(e)&&e.v>28&&(n=Math.floor((e.v-35)/2)),0!==n&&(t.push(C(n)),t.push("0x"),t.push("0x")),!e)return k.b(t);const o=F(e);let c=27+o.recoveryParam;return 0!==n?(t.pop(),t.pop(),t.pop(),c+=2*n+8,o.v>28&&o.v!==c&&W.throwArgumentError("transaction.chainId/signature.v mismatch","signature",e)):o.v!==c&&W.throwArgumentError("transaction.chainId/signature.v mismatch","signature",e),t.push(C(c)),t.push(T(P(o.r))),t.push(T(P(o.s))),k.b(t)}(r,e);switch(r.type){case 1:return er(r,e);case 2:return rr(r,e)}return W.throwError(`unsupported transaction type: ${r.type}`,v.errors.UNSUPPORTED_OPERATION,{operation:"serializeTransaction",transactionType:r.type})}function or(r,e,t){try{const t=z(e[0]).toNumber();if(0!==t&&1!==t)throw new Error("bad recid");r.v=t}catch(r){W.throwArgumentError("invalid v for transaction type: 1","v",e[0])}r.r=D(e[1],32),r.s=D(e[2],32);try{const e=Object(M.a)(t(r));r.from=J(e,{r:r.r,s:r.s,recoveryParam:r.v})}catch(r){}}function sr(r){const e=P(r);if(e[0]>127)return function(r){const e=k.a(r);9!==e.length&&6!==e.length&&W.throwArgumentError("invalid raw transaction","rawTransaction",r);const t={nonce:z(e[0]).toNumber(),gasPrice:z(e[1]),gasLimit:z(e[2]),to:K(e[3]),value:z(e[4]),data:e[5],chainId:0};if(6===e.length)return t;try{t.v=o.a.from(e[6]).toNumber()}catch(r){return t}if(t.r=D(e[7],32),t.s=D(e[8],32),o.a.from(t.r).isZero()&&o.a.from(t.s).isZero())t.chainId=t.v,t.v=0;else{t.chainId=Math.floor((t.v-35)/2),t.chainId<0&&(t.chainId=0);let n=t.v-27;const o=e.slice(0,6);0!==t.chainId&&(o.push(C(t.chainId)),o.push("0x"),o.push("0x"),n-=2*t.chainId+8);const c=Object(M.a)(k.b(o));try{t.from=J(c,{r:C(t.r),s:C(t.s),recoveryParam:n})}catch(r){}t.hash=Object(M.a)(r)}return t.type=null,t}(e);switch(e[0]){case 1:return function(r){const e=k.a(r.slice(1));8!==e.length&&11!==e.length&&W.throwArgumentError("invalid component count for transaction type: 1","payload",C(r));const t={type:1,chainId:z(e[0]).toNumber(),nonce:z(e[1]).toNumber(),gasPrice:z(e[2]),gasLimit:z(e[3]),to:K(e[4]),value:z(e[5]),data:e[6],accessList:Q(e[7])};return 8===e.length||(t.hash=Object(M.a)(r),or(t,e.slice(8),er)),t}(e);case 2:return function(r){const e=k.a(r.slice(1));9!==e.length&&12!==e.length&&W.throwArgumentError("invalid component count for transaction type: 2","payload",C(r));const t=z(e[2]),n=z(e[3]),o={type:2,chainId:z(e[0]).toNumber(),nonce:z(e[1]).toNumber(),maxPriorityFeePerGas:t,maxFeePerGas:n,gasPrice:null,gasLimit:z(e[4]),to:K(e[5]),value:z(e[6]),data:e[7],accessList:Q(e[8])};return 9===e.length||(o.hash=Object(M.a)(r),or(o,e.slice(9),rr)),o}(e)}return W.throwError(`unsupported transaction type: ${e[0]}`,v.errors.UNSUPPORTED_OPERATION,{operation:"parseTransaction",transactionType:e[0]})}},1048:function(r,e,t){"use strict";t.d(e,"a",(function(){return L})),t.d(e,"b",(function(){return D}));let n=!1,o=!1;const c={debug:1,default:2,info:2,warning:3,error:4,off:5};let l=c.default,E=null;const h=function(){try{const r=[];if(["NFD","NFC","NFKD","NFKC"].forEach(form=>{try{if("test"!=="test".normalize(form))throw new Error("bad normalize")}catch(e){r.push(form)}}),r.length)throw new Error("missing "+r.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(r){return r.message}return null}();var f,N;!function(r){r.DEBUG="DEBUG",r.INFO="INFO",r.WARNING="WARNING",r.ERROR="ERROR",r.OFF="OFF"}(f||(f={})),function(r){r.UNKNOWN_ERROR="UNKNOWN_ERROR",r.NOT_IMPLEMENTED="NOT_IMPLEMENTED",r.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",r.NETWORK_ERROR="NETWORK_ERROR",r.SERVER_ERROR="SERVER_ERROR",r.TIMEOUT="TIMEOUT",r.BUFFER_OVERRUN="BUFFER_OVERRUN",r.NUMERIC_FAULT="NUMERIC_FAULT",r.MISSING_NEW="MISSING_NEW",r.INVALID_ARGUMENT="INVALID_ARGUMENT",r.MISSING_ARGUMENT="MISSING_ARGUMENT",r.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",r.CALL_EXCEPTION="CALL_EXCEPTION",r.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",r.NONCE_EXPIRED="NONCE_EXPIRED",r.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",r.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",r.TRANSACTION_REPLACED="TRANSACTION_REPLACED",r.ACTION_REJECTED="ACTION_REJECTED"}(N||(N={}));const m="0123456789abcdef";class R{constructor(r){Object.defineProperty(this,"version",{enumerable:!0,value:r,writable:!1})}_log(r,e){const t=r.toLowerCase();null==c[t]&&this.throwArgumentError("invalid log level name","logLevel",r),l>c[t]||console.log.apply(console,e)}debug(...r){this._log(R.levels.DEBUG,r)}info(...r){this._log(R.levels.INFO,r)}warn(...r){this._log(R.levels.WARNING,r)}makeError(r,code,e){if(o)return this.makeError("censored error",code,{});code||(code=R.errors.UNKNOWN_ERROR),e||(e={});const t=[];Object.keys(e).forEach(r=>{const n=e[r];try{if(n instanceof Uint8Array){let e="";for(let i=0;i<n.length;i++)e+=m[n[i]>>4],e+=m[15&n[i]];t.push(r+"=Uint8Array(0x"+e+")")}else t.push(r+"="+JSON.stringify(n))}catch(n){t.push(r+"="+JSON.stringify(e[r].toString()))}}),t.push(`code=${code}`),t.push(`version=${this.version}`);const n=r;let c="";switch(code){case N.NUMERIC_FAULT:{c="NUMERIC_FAULT";const e=r;switch(e){case"overflow":case"underflow":case"division-by-zero":c+="-"+e;break;case"negative-power":case"negative-width":c+="-unsupported";break;case"unbound-bitwise-result":c+="-unbound-result"}break}case N.CALL_EXCEPTION:case N.INSUFFICIENT_FUNDS:case N.MISSING_NEW:case N.NONCE_EXPIRED:case N.REPLACEMENT_UNDERPRICED:case N.TRANSACTION_REPLACED:case N.UNPREDICTABLE_GAS_LIMIT:c=code}c&&(r+=" [ See: https://links.ethers.org/v5-errors-"+c+" ]"),t.length&&(r+=" ("+t.join(", ")+")");const l=new Error(r);return l.reason=n,l.code=code,Object.keys(e).forEach((function(r){l[r]=e[r]})),l}throwError(r,code,e){throw this.makeError(r,code,e)}throwArgumentError(r,e,t){return this.throwError(r,R.errors.INVALID_ARGUMENT,{argument:e,value:t})}assert(r,e,code,t){r||this.throwError(e,code,t)}assertArgument(r,e,t,n){r||this.throwArgumentError(e,t,n)}checkNormalize(r){null==r&&(r="platform missing String.prototype.normalize"),h&&this.throwError("platform missing String.prototype.normalize",R.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:h})}checkSafeUint53(r,e){"number"==typeof r&&(null==e&&(e="value not safe"),(r<0||r>=9007199254740991)&&this.throwError(e,R.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:r}),r%1&&this.throwError(e,R.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:r}))}checkArgumentCount(r,e,t){t=t?": "+t:"",r<e&&this.throwError("missing argument"+t,R.errors.MISSING_ARGUMENT,{count:r,expectedCount:e}),r>e&&this.throwError("too many arguments"+t,R.errors.UNEXPECTED_ARGUMENT,{count:r,expectedCount:e})}checkNew(r,e){r!==Object&&null!=r||this.throwError("missing new",R.errors.MISSING_NEW,{name:e.name})}checkAbstract(r,e){r===e?this.throwError("cannot instantiate abstract class "+JSON.stringify(e.name)+" directly; use a sub-class",R.errors.UNSUPPORTED_OPERATION,{name:r.name,operation:"new"}):r!==Object&&null!=r||this.throwError("missing new",R.errors.MISSING_NEW,{name:e.name})}static globalLogger(){return E||(E=new R("logger/5.7.0")),E}static setCensorship(r,e){if(!r&&e&&this.globalLogger().throwError("cannot permanently disable censorship",R.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),n){if(!r)return;this.globalLogger().throwError("error censorship permanent",R.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}o=!!r,n=!!e}static setLogLevel(r){const e=c[r.toLowerCase()];null!=e?l=e:R.globalLogger().warn("invalid log level - "+r)}static from(r){return new R(r)}}R.errors=N,R.levels=f;const I=new R("bytes/5.7.0");function v(r){return!!r.toHexString}function A(r){return r.slice||(r.slice=function(){const e=Array.prototype.slice.call(arguments);return A(new Uint8Array(Array.prototype.slice.apply(r,e)))}),r}function d(r){return"number"==typeof r&&r==r&&r%1==0}function O(r){if(null==r)return!1;if(r.constructor===Uint8Array)return!0;if("string"==typeof r)return!1;if(!d(r.length)||r.length<0)return!1;for(let i=0;i<r.length;i++){const e=r[i];if(!d(e)||e<0||e>=256)return!1}return!0}function y(r,e){if(e||(e={}),"number"==typeof r){I.checkSafeUint53(r,"invalid arrayify value");const e=[];for(;r;)e.unshift(255&r),r=parseInt(String(r/256));return 0===e.length&&e.push(0),A(new Uint8Array(e))}if(e.allowMissingPrefix&&"string"==typeof r&&"0x"!==r.substring(0,2)&&(r="0x"+r),v(r)&&(r=r.toHexString()),U(r)){let t=r.substring(2);t.length%2&&("left"===e.hexPad?t="0"+t:"right"===e.hexPad?t+="0":I.throwArgumentError("hex data is odd-length","value",r));const n=[];for(let i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));return A(new Uint8Array(n))}return O(r)?A(new Uint8Array(r)):I.throwArgumentError("invalid arrayify value","value",r)}function U(r,e){return!("string"!=typeof r||!r.match(/^0x[0-9A-Fa-f]*$/))&&(!e||r.length===2+2*e)}const _=new R("strings/5.7.0");var P,T;function w(r,e,t,output,n){if(r===T.BAD_PREFIX||r===T.UNEXPECTED_CONTINUE){let i=0;for(let r=e+1;r<t.length&&t[r]>>6==2;r++)i++;return i}return r===T.OVERRUN?t.length-e-1:0}!function(r){r.current="",r.NFC="NFC",r.NFD="NFD",r.NFKC="NFKC",r.NFKD="NFKD"}(P||(P={})),function(r){r.UNEXPECTED_CONTINUE="unexpected continuation byte",r.BAD_PREFIX="bad codepoint prefix",r.OVERRUN="string overrun",r.MISSING_CONTINUE="missing continuation byte",r.OUT_OF_RANGE="out of UTF-8 range",r.UTF16_SURROGATE="UTF-16 surrogate",r.OVERLONG="overlong representation"}(T||(T={}));const C=Object.freeze({error:function(r,e,t,output,n){return _.throwArgumentError(`invalid codepoint at offset ${e}; ${r}`,"bytes",t)},ignore:w,replace:function(r,e,t,output,n){return r===T.OVERLONG?(output.push(n),0):(output.push(65533),w(r,e,t))}});function S(r,e){null==e&&(e=C.error),r=y(r);const t=[];let i=0;for(;i<r.length;){const n=r[i++];if(n>>7==0){t.push(n);continue}let o=null,c=null;if(192==(224&n))o=1,c=127;else if(224==(240&n))o=2,c=2047;else{if(240!=(248&n)){i+=e(128==(192&n)?T.UNEXPECTED_CONTINUE:T.BAD_PREFIX,i-1,r,t);continue}o=3,c=65535}if(i-1+o>=r.length){i+=e(T.OVERRUN,i-1,r,t);continue}let l=n&(1<<8-o-1)-1;for(let n=0;n<o;n++){let n=r[i];if(128!=(192&n)){i+=e(T.MISSING_CONTINUE,i,r,t),l=null;break}l=l<<6|63&n,i++}null!==l&&(l>1114111?i+=e(T.OUT_OF_RANGE,i-1-o,r,t,l):l>=55296&&l<=57343?i+=e(T.UTF16_SURROGATE,i-1-o,r,t,l):l<=c?i+=e(T.OVERLONG,i-1-o,r,t,l):t.push(l))}return t}function L(r,form=P.current){form!=P.current&&(_.checkNormalize(),r=r.normalize(form));let e=[];for(let i=0;i<r.length;i++){const t=r.charCodeAt(i);if(t<128)e.push(t);else if(t<2048)e.push(t>>6|192),e.push(63&t|128);else if(55296==(64512&t)){i++;const n=r.charCodeAt(i);if(i>=r.length||56320!=(64512&n))throw new Error("invalid utf-8 string");const o=65536+((1023&t)<<10)+(1023&n);e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)}else e.push(t>>12|224),e.push(t>>6&63|128),e.push(63&t|128)}return y(e)}function D(r,e){return S(r,e).map(r=>r<=65535?String.fromCharCode(r):(r-=65536,String.fromCharCode(55296+(r>>10&1023),56320+(1023&r)))).join("")}}}]);