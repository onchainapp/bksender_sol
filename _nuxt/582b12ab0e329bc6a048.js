/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{175:function(t,e,r){"use strict";r.d(e,"a",(function(){return et})),r.d(e,"b",(function(){return ft})),r.d(e,"c",(function(){return ut}));var n=r(475);const o=BigInt(0),f=BigInt(1),c=BigInt(2),h=BigInt(3),l=BigInt(8),d=Object.freeze({a:o,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:f,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),y=(a,b)=>(a+b/c)/b,w={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(t){const{n:e}=d,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-f*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),c=r,h=BigInt("0x100000000000000000000000000000000"),l=y(c*t,e),w=y(-n*t,e);let m=V(t-l*r-w*o,e),E=V(-l*n-w*c,e);const v=m>h,x=E>h;if(v&&(m=e-m),x&&(E=e-E),m>h||E>h)throw new Error("splitScalarEndo: Endomorphism failed, k="+t);return{k1neg:v,k1:m,k2neg:x,k2:E}}};function m(t){const{a:a,b:b}=d,e=V(t*t),r=V(e*t);return V(r+a*t+b)}const E=d.a===o;class v extends Error{constructor(t){super(t)}}function x(t){if(!(t instanceof A))throw new TypeError("JacobianPoint expected")}class A{constructor(t,e,r){this.x=t,this.y=e,this.z=r}static fromAffine(p){if(!(p instanceof I))throw new TypeError("JacobianPoint#fromAffine: expected Point");return p.equals(I.ZERO)?A.ZERO:new A(p.x,p.y,f)}static toAffineBatch(t){const e=function(t,p=d.P){const e=new Array(t.length),r=F(t.reduce((t,r,i)=>r===o?t:(e[i]=t,V(t*r,p)),f),p);return t.reduceRight((t,r,i)=>r===o?t:(e[i]=V(t*e[i],p),V(t*r,p)),r),e}(t.map(p=>p.z));return t.map((p,i)=>p.toAffine(e[i]))}static normalizeZ(t){return A.toAffineBatch(t).map(A.fromAffine)}equals(t){x(t);const{x:e,y:r,z:n}=this,{x:o,y:f,z:c}=t,h=V(n*n),l=V(c*c),d=V(e*l),y=V(o*h),w=V(V(r*c)*l),m=V(V(f*n)*h);return d===y&&w===m}negate(){return new A(this.x,V(-this.y),this.z)}double(){const{x:t,y:e,z:r}=this,n=V(t*t),o=V(e*e),f=V(o*o),d=t+o,y=V(c*(V(d*d)-n-f)),w=V(h*n),m=V(w*w),E=V(m-c*y),v=V(w*(y-E)-l*f),x=V(c*e*r);return new A(E,v,x)}add(t){x(t);const{x:e,y:r,z:n}=this,{x:f,y:h,z:l}=t;if(f===o||h===o)return this;if(e===o||r===o)return t;const d=V(n*n),y=V(l*l),w=V(e*y),m=V(f*d),E=V(V(r*l)*y),v=V(V(h*n)*d),S=V(m-w),B=V(v-E);if(S===o)return B===o?this.double():A.ZERO;const I=V(S*S),U=V(S*I),k=V(w*I),R=V(B*B-U-c*k),H=V(B*(k-R)-E*U),P=V(n*l*S);return new A(R,H,P)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const e=A.ZERO;if("bigint"==typeof t&&t===o)return e;let r=_(t);if(r===f)return this;if(!E){let p=e,t=this;for(;r>o;)r&f&&(p=p.add(t)),t=t.double(),r>>=f;return p}let{k1neg:n,k1:c,k2neg:h,k2:l}=w.splitScalar(r),d=e,y=e,m=this;for(;c>o||l>o;)c&f&&(d=d.add(m)),l&f&&(y=y.add(m)),m=m.double(),c>>=f,l>>=f;return n&&(d=d.negate()),h&&(y=y.negate()),y=new A(V(y.x*w.beta),y.y,y.z),d.add(y)}precomputeWindow(t){const e=E?128/t+1:256/t+1,r=[];let p=this,base=p;for(let n=0;n<e;n++){base=p,r.push(base);for(let i=1;i<2**(t-1);i++)base=base.add(p),r.push(base);p=base.double()}return r}wNAF(t,e){!e&&this.equals(A.BASE)&&(e=I.BASE);const r=e&&e._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let n=e&&B.get(e);n||(n=this.precomputeWindow(r),e&&1!==r&&(n=A.normalizeZ(n),B.set(e,n)));let p=A.ZERO,o=A.BASE;const c=1+(E?128/r:256/r),h=2**(r-1),mask=BigInt(2**r-1),l=2**r,d=BigInt(r);for(let e=0;e<c;e++){const r=e*h;let c=Number(t&mask);t>>=d,c>h&&(c-=l,t+=f);const y=r,w=r+Math.abs(c)-1,m=e%2!=0,E=c<0;0===c?o=o.add(S(m,n[y])):p=p.add(S(E,n[w]))}return{p:p,f:o}}multiply(t,e){let r,n,o=_(t);if(E){const{k1neg:t,k1:f,k2neg:c,k2:h}=w.splitScalar(o);let{p:l,f:d}=this.wNAF(f,e),{p:y,f:m}=this.wNAF(h,e);l=S(t,l),y=S(c,y),y=new A(V(y.x*w.beta),y.y,y.z),r=l.add(y),n=d.add(m)}else{const{p:p,f:t}=this.wNAF(o,e);r=p,n=t}return A.normalizeZ([r,n])[0]}toAffine(t){const{x:e,y:r,z:n}=this,o=this.equals(A.ZERO);null==t&&(t=o?l:F(n));const c=t,h=V(c*c),d=V(h*c),y=V(e*h),w=V(r*d),m=V(n*c);if(o)return I.ZERO;if(m!==f)throw new Error("invZ was invalid");return new I(y,w)}}function S(t,e){const r=e.negate();return t?r:e}A.BASE=new A(d.Gx,d.Gy,f),A.ZERO=new A(o,f,o);const B=new WeakMap;class I{constructor(t,e){this.x=t,this.y=e}_setWindowSize(t){this._WINDOW_SIZE=t,B.delete(this)}hasEvenY(){return this.y%c===o}static fromCompressedHex(t){const e=32===t.length,r=D(e?t:t.subarray(1));if(!X(r))throw new Error("Point is not on curve");let n=function(t){const{P:e}=d,r=BigInt(6),n=BigInt(11),o=BigInt(22),f=BigInt(23),l=BigInt(44),y=BigInt(88),w=t*t*t%e,m=w*w*t%e,E=K(m,h)*m%e,v=K(E,h)*m%e,x=K(v,c)*w%e,A=K(x,n)*x%e,S=K(A,o)*A%e,B=K(S,l)*S%e,I=K(B,y)*B%e,U=K(I,l)*S%e,k=K(U,h)*m%e,R=K(k,f)*A%e,H=K(R,r)*w%e,rt=K(H,c);if(rt*rt%e!==t)throw new Error("Cannot find square root");return rt}(m(r));const o=(n&f)===f;if(e)o&&(n=V(-n));else{1==(1&t[0])!==o&&(n=V(-n))}const l=new I(r,n);return l.assertValidity(),l}static fromUncompressedHex(t){const e=D(t.subarray(1,33)),r=D(t.subarray(33,65)),n=new I(e,r);return n.assertValidity(),n}static fromHex(t){const e=W(t),r=e.length,header=e[0];if(32===r)return this.fromCompressedHex(e);if(33===r&&(2===header||3===header))return this.fromCompressedHex(e);if(65===r&&4===header)return this.fromUncompressedHex(e);throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${r}`)}static fromPrivateKey(t){return I.BASE.multiply(Q(t))}static fromSignature(t,e,r){const{r:n,s:s}=tt(e);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const o=G(W(t)),{n:f}=d,c=2===r||3===r?n+f:n,h=F(c,f),l=V(-o*h,f),y=V(s*h,f),w=1&r?"03":"02",m=I.fromHex(w+$(c)),E=I.BASE.multiplyAndAddUnsafe(m,l,y);if(!E)throw new Error("Cannot recover signature: point at infinify");return E.assertValidity(),E}toRawBytes(t=!1){return O(this.toHex(t))}toHex(t=!1){const e=$(this.x);if(t){return`${this.hasEvenY()?"02":"03"}${e}`}return`04${e}${$(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:e,y:r}=this;if(!X(e)||!X(r))throw new Error(t);const n=V(r*r);if(V(n-m(e))!==o)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new I(this.x,V(-this.y))}double(){return A.fromAffine(this).double().toAffine()}add(t){return A.fromAffine(this).add(A.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return A.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,a,b){const e=A.fromAffine(this),r=a===o||a===f||this!==I.BASE?e.multiplyUnsafe(a):e.multiply(a),n=A.fromAffine(t).multiplyUnsafe(b),c=r.add(n);return c.equals(A.ZERO)?void 0:c.toAffine()}}function U(s){return Number.parseInt(s[0],16)>=8?"00"+s:s}function k(data){if(data.length<2||2!==data[0])throw new Error(`Invalid signature integer tag: ${z(data)}`);const t=data[1],e=data.subarray(2,t+2);if(!t||e.length!==t)throw new Error("Invalid signature integer: wrong length");if(0===e[0]&&e[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:D(e),left:data.subarray(t+2)}}I.BASE=new I(d.Gx,d.Gy),I.ZERO=new I(o,o);class R{constructor(t,s){this.r=t,this.s=s,this.assertValidity()}static fromCompact(t){const e=t instanceof Uint8Array,r="Signature.fromCompact";if("string"!=typeof t&&!e)throw new TypeError(`${r}: Expected string or Uint8Array`);const n=e?z(t):t;if(128!==n.length)throw new Error(`${r}: Expected 64-byte hex`);return new R(Z(n.slice(0,64)),Z(n.slice(64,128)))}static fromDER(t){const e=t instanceof Uint8Array;if("string"!=typeof t&&!e)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:r,s:s}=function(data){if(data.length<2||48!=data[0])throw new Error(`Invalid signature tag: ${z(data)}`);if(data[1]!==data.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:e}=k(data.subarray(2)),{data:s,left:r}=k(e);if(r.length)throw new Error(`Invalid signature: left bytes after parsing: ${z(r)}`);return{r:t,s:s}}(e?t:O(t));return new R(r,s)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:s}=this;if(!M(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!M(s))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=d.n>>f;return this.s>t}normalizeS(){return this.hasHighS()?new R(this.r,V(-this.s,d.n)):this}toDERRawBytes(){return O(this.toDERHex())}toDERHex(){const t=U(N(this.s)),e=U(N(this.r)),r=t.length/2,n=e.length/2,o=N(r),f=N(n);return`30${N(n+r+4)}02${f}${e}02${o}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return O(this.toCompactHex())}toCompactHex(){return $(this.r)+$(this.s)}}function H(...t){if(!t.every(b=>b instanceof Uint8Array))throw new Error("Uint8Array list expected");if(1===t.length)return t[0];const e=t.reduce((a,t)=>a+t.length,0),r=new Uint8Array(e);for(let i=0,e=0;i<t.length;i++){const n=t[i];r.set(n,e),e+=n.length}return r}const P=Array.from({length:256},(t,i)=>i.toString(16).padStart(2,"0"));function z(t){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");let e="";for(let i=0;i<t.length;i++)e+=P[t[i]];return e}const T=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function $(t){if("bigint"!=typeof t)throw new Error("Expected bigint");if(!(o<=t&&t<T))throw new Error("Expected number 0 <= n < 2^256");return t.toString(16).padStart(64,"0")}function C(t){const b=O($(t));if(32!==b.length)throw new Error("Error: expected 32 bytes");return b}function N(t){const e=t.toString(16);return 1&e.length?`0${e}`:e}function Z(t){if("string"!=typeof t)throw new TypeError("hexToNumber: expected string, got "+typeof t);return BigInt(`0x${t}`)}function O(t){if("string"!=typeof t)throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+t.length);const e=new Uint8Array(t.length/2);for(let i=0;i<e.length;i++){const r=2*i,n=t.slice(r,r+2),o=Number.parseInt(n,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");e[i]=o}return e}function D(t){return Z(z(t))}function W(t){return t instanceof Uint8Array?Uint8Array.from(t):O(t)}function _(t){if("number"==typeof t&&Number.isSafeInteger(t)&&t>0)return BigInt(t);if("bigint"==typeof t&&M(t))return t;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function V(a,b=d.P){const t=a%b;return t>=o?t:b+t}function K(t,e){const{P:r}=d;let n=t;for(;e-- >o;)n*=n,n%=r;return n}function F(t,e=d.P){if(t===o||e<=o)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let a=V(t,e),b=e,r=o,n=f,u=f,c=o;for(;a!==o;){const q=b/a,t=b%a,e=r-u*q,o=n-c*q;b=a,a=t,r=u,n=c,u=e,c=o}if(b!==f)throw new Error("invert: does not exist");return V(r,e)}function G(t,e=!1){const r=function(t){const e=8*t.length-256,r=D(t);return e>0?r>>BigInt(e):r}(t);if(e)return r;const{n:n}=d;return r>=n?r-n:r}let L,J;class j{constructor(t,e){if(this.hashLen=t,this.qByteLen=e,"number"!=typeof t||t<2)throw new Error("hashLen must be a number");if("number"!=typeof e||e<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return ut.hmacSha256(this.k,...t)}hmacSync(...t){return J(this.k,...t)}checkSync(){if("function"!=typeof J)throw new v("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),0!==t.length&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),0!==t.length&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const e=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const r=this.v.slice();e.push(r),t+=this.v.length}return H(...e)}generateSync(){this.checkSync(),this.incr();let t=0;const e=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const r=this.v.slice();e.push(r),t+=this.v.length}return H(...e)}}function M(t){return o<t&&t<d.n}function X(t){return o<t&&t<d.P}function Y(t,e,r,n=!0){const{n:c}=d,h=G(t,!0);if(!M(h))return;const l=F(h,c),q=I.BASE.multiply(h),y=V(q.x,c);if(y===o)return;const s=V(l*V(e+r*y,c),c);if(s===o)return;let w=new R(y,s),m=(q.x===w.r?0:2)|Number(q.y&f);return n&&w.hasHighS()&&(w=w.normalizeS(),m^=1),{sig:w,recovery:m}}function Q(t){let e;if("bigint"==typeof t)e=t;else if("number"==typeof t&&Number.isSafeInteger(t)&&t>0)e=BigInt(t);else if("string"==typeof t){if(64!==t.length)throw new Error("Expected 32 bytes of private key");e=Z(t)}else{if(!(t instanceof Uint8Array))throw new TypeError("Expected valid private key");if(32!==t.length)throw new Error("Expected 32 bytes of private key");e=D(t)}if(!M(e))throw new Error("Expected private key: 0 < key < n");return e}function tt(t){if(t instanceof R)return t.assertValidity(),t;try{return R.fromDER(t)}catch(e){return R.fromCompact(t)}}function et(t,e=!1){return I.fromPrivateKey(t).toRawBytes(e)}function nt(t){return D(t.length>32?t.slice(0,32):t)}function it(t){const e=nt(t),r=V(e,d.n);return ot(r<o?e:r)}function ot(t){return C(t)}function st(t,e,r){if(null==t)throw new Error(`sign: expected valid message hash, not "${t}"`);const h1=W(t),n=Q(e),o=[ot(n),it(h1)];if(null!=r){!0===r&&(r=ut.randomBytes(32));const t=W(r);if(32!==t.length)throw new Error("sign: Expected 32 bytes of extra data");o.push(t)}return{seed:H(...o),m:nt(h1),d:n}}function at(t,e){const{sig:r,recovery:n}=t,{der:o,recovered:f}=Object.assign({canonical:!0,der:!0},e),c=o?r.toDERRawBytes():r.toCompactRawBytes();return f?[c,n]:c}function ft(t,e,r={}){const{seed:n,m:o,d:f}=st(t,e,r.extraEntropy),c=new j(32,32);let h;for(c.reseedSync(n);!(h=Y(c.generateSync(),o,f,r.canonical));)c.reseedSync();return at(h,r)}I.BASE._setWindowSize(8);const ct={node:n,web:"object"==typeof self&&"crypto"in self?self.crypto:void 0},ht={},ut={bytesToHex:z,hexToBytes:O,concatBytes:H,mod:V,invert:F,isValidPrivateKey(t){try{return Q(t),!0}catch(t){return!1}},_bigintTo32Bytes:C,_normalizePrivateKey:Q,hashToPrivateKey:t=>{if((t=W(t)).length<40||t.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");return C(V(D(t),d.n-f)+f)},randomBytes:(t=32)=>{if(ct.web)return ct.web.getRandomValues(new Uint8Array(t));if(ct.node){const{randomBytes:e}=ct.node;return Uint8Array.from(e(t))}throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>ut.hashToPrivateKey(ut.randomBytes(40)),precompute(t=8,e=I.BASE){const r=e===I.BASE?e:new I(e.x,e.y);return r._setWindowSize(t),r.multiply(h),r},sha256:async(...t)=>{if(ct.web){const e=await ct.web.subtle.digest("SHA-256",H(...t));return new Uint8Array(e)}if(ct.node){const{createHash:e}=ct.node,r=e("sha256");return t.forEach(t=>r.update(t)),Uint8Array.from(r.digest())}throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(t,...e)=>{if(ct.web){const r=await ct.web.subtle.importKey("raw",t,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),n=H(...e),o=await ct.web.subtle.sign("HMAC",r,n);return new Uint8Array(o)}if(ct.node){const{createHmac:r}=ct.node,n=r("sha256",t);return e.forEach(t=>n.update(t)),Uint8Array.from(n.digest())}throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(t,...e)=>{let r=ht[t];if(void 0===r){const e=await ut.sha256(Uint8Array.from(t,t=>t.charCodeAt(0)));r=H(e,e),ht[t]=r}return ut.sha256(r,...e)},taggedHashSync:(t,...e)=>{if("function"!=typeof L)throw new v("sha256Sync is undefined, you need to set it");let r=ht[t];if(void 0===r){const e=L(Uint8Array.from(t,t=>t.charCodeAt(0)));r=H(e,e),ht[t]=r}return L(r,...e)},_JacobianPoint:A};Object.defineProperties(ut,{sha256Sync:{configurable:!1,get:()=>L,set(t){L||(L=t)}},hmacSha256Sync:{configurable:!1,get:()=>J,set(t){J||(J=t)}}})}}]);