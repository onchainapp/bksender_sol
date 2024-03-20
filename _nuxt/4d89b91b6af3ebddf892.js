(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{235:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.toBigIntLE=function(r){{const n=e.from(r);n.reverse();const t=n.toString("hex");return 0===t.length?BigInt(0):BigInt(`0x${t}`)}},r.toBigIntBE=function(e){{const r=e.toString("hex");return 0===r.length?BigInt(0):BigInt(`0x${r}`)}},r.toBufferLE=function(r,n){{const t=r.toString(16),o=e.from(t.padStart(2*n,"0").slice(0,2*n),"hex");return o.reverse(),o}},r.toBufferBE=function(r,n){{const t=r.toString(16);return e.from(t.padStart(2*n,"0").slice(0,2*n),"hex")}}}).call(this,n(6).Buffer)},807:function(e,r,n){var t;!function(o){"use strict";var f,c=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,l=Math.ceil,h=Math.floor,w="[BigNumber Error] ",m=w+"Number primitive has more than 15 significant digits: ",d=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function v(e){var i=0|e;return e>0||e===i?i:i-1}function N(a){for(var s,e,i=1,r=a.length,n=a[0]+"";i<r;){for(e=14-(s=a[i++]+"").length;e--;s="0"+s);n+=s}for(r=n.length;48===n.charCodeAt(--r););return n.slice(0,r+1||1)}function O(e,r){var a,b,n=e.c,t=r.c,i=e.s,o=r.s,f=e.e,c=r.e;if(!i||!o)return null;if(a=n&&!n[0],b=t&&!t[0],a||b)return a?b?0:-o:i;if(i!=o)return i;if(a=i<0,b=f==c,!n||!t)return b?0:!n^a?1:-1;if(!b)return f>c^a?1:-1;for(o=(f=n.length)<(c=t.length)?f:c,i=0;i<o;i++)if(n[i]!=t[i])return n[i]>t[i]^a?1:-1;return f==c?0:f>c^a?1:-1}function E(e,r,n,t){if(e<r||e>n||e!==h(e))throw Error(w+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function y(e){var r=e.c.length-1;return v(e.e/14)==r&&e.c[r]%2!=0}function A(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function B(e,r,n){var t,o;if(r<0){for(o=n+".";++r;o+=n);e=o+e}else if(++r>(t=e.length)){for(o=n,r-=t;--r;o+=n);e+=o}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}(f=function e(r){var div,n,t,o,f,S,x,I,_,L=z.prototype={constructor:z,toString:null,valueOf:null},P=new z(1),R=20,D=4,U=-7,T=21,C=-1e7,M=1e7,k=!1,G=1,F=0,$={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},j="0123456789abcdefghijklmnopqrstuvwxyz";function z(e,b){var r,o,f,l,i,w,d,v,N=this;if(!(N instanceof z))return new z(e,b);if(null==b){if(e&&!0===e._isBigNumber)return N.s=e.s,void(!e.c||e.e>M?N.c=N.e=null:e.e<C?N.c=[N.e=0]:(N.e=e.e,N.c=e.c.slice()));if((w="number"==typeof e)&&0*e==0){if(N.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,i=e;i>=10;i/=10,l++);return void(l>M?N.c=N.e=null:(N.e=l,N.c=[e]))}v=String(e)}else{if(!c.test(v=String(e)))return t(N,v,w);N.s=45==v.charCodeAt(0)?(v=v.slice(1),-1):1}(l=v.indexOf("."))>-1&&(v=v.replace(".","")),(i=v.search(/e/i))>0?(l<0&&(l=i),l+=+v.slice(i+1),v=v.substring(0,i)):l<0&&(l=v.length)}else{if(E(b,2,j.length,"Base"),10==b)return J(N=new z(e),R+N.e+1,D);if(v=String(e),w="number"==typeof e){if(0*e!=0)return t(N,v,w,b);if(N.s=1/e<0?(v=v.slice(1),-1):1,z.DEBUG&&v.replace(/^0\.0*|\./,"").length>15)throw Error(m+e)}else N.s=45===v.charCodeAt(0)?(v=v.slice(1),-1):1;for(r=j.slice(0,b),l=i=0,d=v.length;i<d;i++)if(r.indexOf(o=v.charAt(i))<0){if("."==o){if(i>l){l=d;continue}}else if(!f&&(v==v.toUpperCase()&&(v=v.toLowerCase())||v==v.toLowerCase()&&(v=v.toUpperCase()))){f=!0,i=-1,l=0;continue}return t(N,String(e),w,b)}w=!1,(l=(v=n(v,b,10,N.s)).indexOf("."))>-1?v=v.replace(".",""):l=v.length}for(i=0;48===v.charCodeAt(i);i++);for(d=v.length;48===v.charCodeAt(--d););if(v=v.slice(i,++d)){if(d-=i,w&&z.DEBUG&&d>15&&(e>9007199254740991||e!==h(e)))throw Error(m+N.s*e);if((l=l-i-1)>M)N.c=N.e=null;else if(l<C)N.c=[N.e=0];else{if(N.e=l,N.c=[],i=(l+1)%14,l<0&&(i+=14),i<d){for(i&&N.c.push(+v.slice(0,i)),d-=14;i<d;)N.c.push(+v.slice(i,i+=14));i=14-(v=v.slice(i)).length}else i-=d;for(;i--;v+="0");N.c.push(+v)}}else N.c=[N.e=0]}function H(e,i,r,n){var t,o,f,c,l;if(null==r?r=D:E(r,0,8),!e.c)return e.toString();if(t=e.c[0],f=e.e,null==i)l=N(e.c),l=1==n||2==n&&(f<=U||f>=T)?A(l,f):B(l,f,"0");else if(o=(e=J(new z(e),i,r)).e,c=(l=N(e.c)).length,1==n||2==n&&(i<=o||o<=U)){for(;c<i;l+="0",c++);l=A(l,o)}else if(i-=f,l=B(l,o,"0"),o+1>c){if(--i>0)for(l+=".";i--;l+="0");}else if((i+=o-c)>0)for(o+1==c&&(l+=".");i--;l+="0");return e.s<0&&t?"-"+l:l}function V(e,r){for(var n,i=1,t=new z(e[0]);i<e.length;i++){if(!(n=new z(e[i])).s){t=n;break}r.call(t,n)&&(t=n)}return t}function W(e,r,n){for(var i=1,t=r.length;!r[--t];r.pop());for(t=r[0];t>=10;t/=10,i++);return(n=i+14*n-1)>M?e.c=e.e=null:n<C?e.c=[e.e=0]:(e.e=n,e.c=r),e}function J(e,r,n,t){var o,i,f,c,w,m,v,N=e.c,O=d;if(N){e:{for(o=1,c=N[0];c>=10;c/=10,o++);if((i=r-o)<0)i+=14,f=r,v=(w=N[m=0])/O[o-f-1]%10|0;else if((m=l((i+1)/14))>=N.length){if(!t)break e;for(;N.length<=m;N.push(0));w=v=0,o=1,f=(i%=14)-14+1}else{for(w=c=N[m],o=1;c>=10;c/=10,o++);v=(f=(i%=14)-14+o)<0?0:w/O[o-f-1]%10|0}if(t=t||r<0||null!=N[m+1]||(f<0?w:w%O[o-f-1]),t=n<4?(v||t)&&(0==n||n==(e.s<0?3:2)):v>5||5==v&&(4==n||t||6==n&&(i>0?f>0?w/O[o-f]:0:N[m-1])%10&1||n==(e.s<0?8:7)),r<1||!N[0])return N.length=0,t?(r-=e.e+1,N[0]=O[(14-r%14)%14],e.e=-r||0):N[0]=e.e=0,e;if(0==i?(N.length=m,c=1,m--):(N.length=m+1,c=O[14-i],N[m]=f>0?h(w/O[o-f]%O[f])*c:0),t)for(;;){if(0==m){for(i=1,f=N[0];f>=10;f/=10,i++);for(f=N[0]+=c,c=1;f>=10;f/=10,c++);i!=c&&(e.e++,1e14==N[0]&&(N[0]=1));break}if(N[m]+=c,1e14!=N[m])break;N[m--]=0,c=1}for(i=N.length;0===N[--i];N.pop());}e.e>M?e.c=e.e=null:e.e<C&&(e.c=[e.e=0])}return e}function X(e){var r,n=e.e;return null===n?e.toString():(r=N(e.c),r=n<=U||n>=T?A(r,n):B(r,n,"0"),e.s<0?"-"+r:r)}return z.clone=e,z.ROUND_UP=0,z.ROUND_DOWN=1,z.ROUND_CEIL=2,z.ROUND_FLOOR=3,z.ROUND_HALF_UP=4,z.ROUND_HALF_DOWN=5,z.ROUND_HALF_EVEN=6,z.ROUND_HALF_CEIL=7,z.ROUND_HALF_FLOOR=8,z.EUCLID=9,z.config=z.set=function(e){var p,r;if(null!=e){if("object"!=typeof e)throw Error(w+"Object expected: "+e);if(e.hasOwnProperty(p="DECIMAL_PLACES")&&(E(r=e[p],0,1e9,p),R=r),e.hasOwnProperty(p="ROUNDING_MODE")&&(E(r=e[p],0,8,p),D=r),e.hasOwnProperty(p="EXPONENTIAL_AT")&&((r=e[p])&&r.pop?(E(r[0],-1e9,0,p),E(r[1],0,1e9,p),U=r[0],T=r[1]):(E(r,-1e9,1e9,p),U=-(T=r<0?-r:r))),e.hasOwnProperty(p="RANGE"))if((r=e[p])&&r.pop)E(r[0],-1e9,-1,p),E(r[1],1,1e9,p),C=r[0],M=r[1];else{if(E(r,-1e9,1e9,p),!r)throw Error(w+p+" cannot be zero: "+r);C=-(M=r<0?-r:r)}if(e.hasOwnProperty(p="CRYPTO")){if((r=e[p])!==!!r)throw Error(w+p+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw k=!r,Error(w+"crypto unavailable");k=r}else k=r}if(e.hasOwnProperty(p="MODULO_MODE")&&(E(r=e[p],0,9,p),G=r),e.hasOwnProperty(p="POW_PRECISION")&&(E(r=e[p],0,1e9,p),F=r),e.hasOwnProperty(p="FORMAT")){if("object"!=typeof(r=e[p]))throw Error(w+p+" not an object: "+r);$=r}if(e.hasOwnProperty(p="ALPHABET")){if("string"!=typeof(r=e[p])||/^.$|[+-.\s]|(.).*\1/.test(r))throw Error(w+p+" invalid: "+r);j=r}}return{DECIMAL_PLACES:R,ROUNDING_MODE:D,EXPONENTIAL_AT:[U,T],RANGE:[C,M],CRYPTO:k,MODULO_MODE:G,POW_PRECISION:F,FORMAT:$,ALPHABET:j}},z.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!z.DEBUG)return!0;var i,r,n=e.c,t=e.e,s=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===s||-1===s)&&t>=-1e9&&t<=1e9&&t===h(t)){if(0===n[0]){if(0===t&&1===n.length)return!0;break e}if((i=(t+1)%14)<1&&(i+=14),String(n[0]).length==i){for(i=0;i<n.length;i++)if((r=n[i])<0||r>=1e14||r!==h(r))break e;if(0!==r)return!0}}}else if(null===n&&null===t&&(null===s||1===s||-1===s))return!0;throw Error(w+"Invalid BigNumber: "+e)},z.maximum=z.max=function(){return V(arguments,L.lt)},z.minimum=z.min=function(){return V(arguments,L.gt)},z.random=(o=9007199254740992*Math.random()&2097151?function(){return h(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var a,b,r,n,t,i=0,f=[],c=new z(P);if(null==e?e=R:E(e,0,1e9),n=l(e/14),k)if(crypto.getRandomValues){for(a=crypto.getRandomValues(new Uint32Array(n*=2));i<n;)(t=131072*a[i]+(a[i+1]>>>11))>=9e15?(b=crypto.getRandomValues(new Uint32Array(2)),a[i]=b[0],a[i+1]=b[1]):(f.push(t%1e14),i+=2);i=n/2}else{if(!crypto.randomBytes)throw k=!1,Error(w+"crypto unavailable");for(a=crypto.randomBytes(n*=7);i<n;)(t=281474976710656*(31&a[i])+1099511627776*a[i+1]+4294967296*a[i+2]+16777216*a[i+3]+(a[i+4]<<16)+(a[i+5]<<8)+a[i+6])>=9e15?crypto.randomBytes(7).copy(a,i):(f.push(t%1e14),i+=7);i=n/7}if(!k)for(;i<n;)(t=o())<9e15&&(f[i++]=t%1e14);for(e%=14,(n=f[--i])&&e&&(t=d[14-e],f[i]=h(n/t)*t);0===f[i];f.pop(),i--);if(i<0)f=[r=0];else{for(r=-1;0===f[0];f.splice(0,1),r-=14);for(i=1,t=f[0];t>=10;t/=10,i++);i<14&&(r-=14-i)}return c.e=r,c.c=f,c}),z.sum=function(){for(var i=1,e=arguments,r=new z(e[0]);i<e.length;)r=r.plus(e[i++]);return r},n=function(){function e(e,r,n,t){for(var o,f,c=[0],i=0,l=e.length;i<l;){for(f=c.length;f--;c[f]*=r);for(c[0]+=t.indexOf(e.charAt(i++)),o=0;o<c.length;o++)c[o]>n-1&&(null==c[o+1]&&(c[o+1]=0),c[o+1]+=c[o]/n|0,c[o]%=n)}return c.reverse()}return function(r,n,t,o,f){var c,l,h,w,m,d,v,O,i=r.indexOf("."),E=R,y=D;for(i>=0&&(w=F,F=0,r=r.replace(".",""),d=(O=new z(n)).pow(r.length-i),F=w,O.c=e(B(N(d.c),d.e,"0"),10,t,"0123456789"),O.e=O.c.length),h=w=(v=e(r,n,t,f?(c=j,"0123456789"):(c="0123456789",j))).length;0==v[--w];v.pop());if(!v[0])return c.charAt(0);if(i<0?--h:(d.c=v,d.e=h,d.s=o,v=(d=div(d,O,E,y,t)).c,m=d.r,h=d.e),i=v[l=h+E+1],w=t/2,m=m||l<0||null!=v[l+1],m=y<4?(null!=i||m)&&(0==y||y==(d.s<0?3:2)):i>w||i==w&&(4==y||m||6==y&&1&v[l-1]||y==(d.s<0?8:7)),l<1||!v[0])r=m?B(c.charAt(1),-E,c.charAt(0)):c.charAt(0);else{if(v.length=l,m)for(--t;++v[--l]>t;)v[l]=0,l||(++h,v=[1].concat(v));for(w=v.length;!v[--w];);for(i=0,r="";i<=w;r+=c.charAt(v[i++]));r=B(r,h,c.charAt(0))}return r}}(),div=function(){function e(e,r,base){var n,t,o,f,c=0,i=e.length,l=r%1e7,h=r/1e7|0;for(e=e.slice();i--;)c=((t=l*(o=e[i]%1e7)+(n=h*o+(f=e[i]/1e7|0)*l)%1e7*1e7+c)/base|0)+(n/1e7|0)+h*f,e[i]=t%base;return c&&(e=[c].concat(e)),e}function r(a,b,e,r){var i,n;if(e!=r)n=e>r?1:-1;else for(i=n=0;i<e;i++)if(a[i]!=b[i]){n=a[i]>b[i]?1:-1;break}return n}function n(a,b,e,base){for(var i=0;e--;)a[e]-=i,i=a[e]<b[e]?1:0,a[e]=i*base+a[e]-b[e];for(;!a[0]&&a.length>1;a.splice(0,1));}return function(t,o,f,c,base){var l,w,i,m,d,N,O,q,E,y,A,B,S,x,I,_,L,s=t.s==o.s?1:-1,P=t.c,R=o.c;if(!(P&&P[0]&&R&&R[0]))return new z(t.s&&o.s&&(P?!R||P[0]!=R[0]:R)?P&&0==P[0]||!R?0*s:s/0:NaN);for(E=(q=new z(s)).c=[],s=f+(w=t.e-o.e)+1,base||(base=1e14,w=v(t.e/14)-v(o.e/14),s=s/14|0),i=0;R[i]==(P[i]||0);i++);if(R[i]>(P[i]||0)&&w--,s<0)E.push(1),m=!0;else{for(x=P.length,_=R.length,i=0,s+=2,(d=h(base/(R[0]+1)))>1&&(R=e(R,d,base),P=e(P,d,base),_=R.length,x=P.length),S=_,A=(y=P.slice(0,_)).length;A<_;y[A++]=0);L=R.slice(),L=[0].concat(L),I=R[0],R[1]>=base/2&&I++;do{if(d=0,(l=r(R,y,_,A))<0){if(B=y[0],_!=A&&(B=B*base+(y[1]||0)),(d=h(B/I))>1)for(d>=base&&(d=base-1),O=(N=e(R,d,base)).length,A=y.length;1==r(N,y,O,A);)d--,n(N,_<O?L:R,O,base),O=N.length,l=1;else 0==d&&(l=d=1),O=(N=R.slice()).length;if(O<A&&(N=[0].concat(N)),n(y,N,A,base),A=y.length,-1==l)for(;r(R,y,_,A)<1;)d++,n(y,_<A?L:R,A,base),A=y.length}else 0===l&&(d++,y=[0]);E[i++]=d,y[0]?y[A++]=P[S]||0:(y=[P[S]],A=1)}while((S++<x||null!=y[0])&&s--);m=null!=y[0],E[0]||E.splice(0,1)}if(1e14==base){for(i=1,s=E[0];s>=10;s/=10,i++);J(q,f+(q.e=i+14*w-1)+1,c,m)}else q.e=w,q.r=+m;return q}}(),f=/^(-?)0([xbo])(?=\w[\w.]*$)/i,S=/^([^.]+)\.$/,x=/^\.([^.]+)$/,I=/^-?(Infinity|NaN)$/,_=/^\s*\+(?=[\w.])|^\s+|\s+$/g,t=function(e,r,n,b){var base,s=n?r:r.replace(_,"");if(I.test(s))e.s=isNaN(s)?null:s<0?-1:1;else{if(!n&&(s=s.replace(f,(function(e,r,n){return base="x"==(n=n.toLowerCase())?16:"b"==n?2:8,b&&b!=base?e:r})),b&&(base=b,s=s.replace(S,"$1").replace(x,"0.$1")),r!=s))return new z(s,base);if(z.DEBUG)throw Error(w+"Not a"+(b?" base "+b:"")+" number: "+r);e.s=null}e.c=e.e=null},L.absoluteValue=L.abs=function(){var e=new z(this);return e.s<0&&(e.s=1),e},L.comparedTo=function(e,b){return O(this,new z(e,b))},L.decimalPlaces=L.dp=function(e,r){var n,t,o,f=this;if(null!=e)return E(e,0,1e9),null==r?r=D:E(r,0,8),J(new z(f),e+f.e+1,r);if(!(n=f.c))return null;if(t=14*((o=n.length-1)-v(this.e/14)),o=n[o])for(;o%10==0;o/=10,t--);return t<0&&(t=0),t},L.dividedBy=L.div=function(e,b){return div(this,new z(e,b),R,D)},L.dividedToIntegerBy=L.idiv=function(e,b){return div(this,new z(e,b),0,1)},L.exponentiatedBy=L.pow=function(e,r){var n,t,i,o,f,c,m,d,v=this;if((e=new z(e)).c&&!e.isInteger())throw Error(w+"Exponent not an integer: "+X(e));if(null!=r&&(r=new z(r)),f=e.e>14,!v.c||!v.c[0]||1==v.c[0]&&!v.e&&1==v.c.length||!e.c||!e.c[0])return d=new z(Math.pow(+X(v),f?2-y(e):+X(e))),r?d.mod(r):d;if(c=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new z(NaN);(t=!c&&v.isInteger()&&r.isInteger())&&(v=v.mod(r))}else{if(e.e>9&&(v.e>0||v.e<-1||(0==v.e?v.c[0]>1||f&&v.c[1]>=24e7:v.c[0]<8e13||f&&v.c[0]<=9999975e7)))return o=v.s<0&&y(e)?-0:0,v.e>-1&&(o=1/o),new z(c?1/o:o);F&&(o=l(F/14+2))}for(f?(n=new z(.5),c&&(e.s=1),m=y(e)):m=(i=Math.abs(+X(e)))%2,d=new z(P);;){if(m){if(!(d=d.times(v)).c)break;o?d.c.length>o&&(d.c.length=o):t&&(d=d.mod(r))}if(i){if(0===(i=h(i/2)))break;m=i%2}else if(J(e=e.times(n),e.e+1,1),e.e>14)m=y(e);else{if(0===(i=+X(e)))break;m=i%2}v=v.times(v),o?v.c&&v.c.length>o&&(v.c.length=o):t&&(v=v.mod(r))}return t?d:(c&&(d=P.div(d)),r?d.mod(r):o?J(d,F,D,void 0):d)},L.integerValue=function(e){var r=new z(this);return null==e?e=D:E(e,0,8),J(r,r.e+1,e)},L.isEqualTo=L.eq=function(e,b){return 0===O(this,new z(e,b))},L.isFinite=function(){return!!this.c},L.isGreaterThan=L.gt=function(e,b){return O(this,new z(e,b))>0},L.isGreaterThanOrEqualTo=L.gte=function(e,b){return 1===(b=O(this,new z(e,b)))||0===b},L.isInteger=function(){return!!this.c&&v(this.e/14)>this.c.length-2},L.isLessThan=L.lt=function(e,b){return O(this,new z(e,b))<0},L.isLessThanOrEqualTo=L.lte=function(e,b){return-1===(b=O(this,new z(e,b)))||0===b},L.isNaN=function(){return!this.s},L.isNegative=function(){return this.s<0},L.isPositive=function(){return this.s>0},L.isZero=function(){return!!this.c&&0==this.c[0]},L.minus=function(e,b){var i,r,n,t,o=this,a=o.s;if(b=(e=new z(e,b)).s,!a||!b)return new z(NaN);if(a!=b)return e.s=-b,o.plus(e);var f=o.e/14,c=e.e/14,l=o.c,h=e.c;if(!f||!c){if(!l||!h)return l?(e.s=-b,e):new z(h?o:NaN);if(!l[0]||!h[0])return h[0]?(e.s=-b,e):new z(l[0]?o:3==D?-0:0)}if(f=v(f),c=v(c),l=l.slice(),a=f-c){for((t=a<0)?(a=-a,n=l):(c=f,n=h),n.reverse(),b=a;b--;n.push(0));n.reverse()}else for(r=(t=(a=l.length)<(b=h.length))?a:b,a=b=0;b<r;b++)if(l[b]!=h[b]){t=l[b]<h[b];break}if(t&&(n=l,l=h,h=n,e.s=-e.s),(b=(r=h.length)-(i=l.length))>0)for(;b--;l[i++]=0);for(b=1e14-1;r>a;){if(l[--r]<h[r]){for(i=r;i&&!l[--i];l[i]=b);--l[i],l[r]+=1e14}l[r]-=h[r]}for(;0==l[0];l.splice(0,1),--c);return l[0]?W(e,l,c):(e.s=3==D?-1:1,e.c=[e.e=0],e)},L.modulo=L.mod=function(e,b){var q,s,r=this;return e=new z(e,b),!r.c||!e.s||e.c&&!e.c[0]?new z(NaN):!e.c||r.c&&!r.c[0]?new z(r):(9==G?(s=e.s,e.s=1,q=div(r,e,0,3),e.s=s,q.s*=s):q=div(r,e,0,G),(e=r.minus(q.times(e))).c[0]||1!=G||(e.s=r.s),e)},L.multipliedBy=L.times=function(e,b){var r,n,i,t,o,f,c,l,h,w,m,d,N,O=this,E=O.c,y=(e=new z(e,b)).c;if(!(E&&y&&E[0]&&y[0]))return!O.s||!e.s||E&&!E[0]&&!y||y&&!y[0]&&!E?e.c=e.e=e.s=null:(e.s*=O.s,E&&y?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=v(O.e/14)+v(e.e/14),e.s*=O.s,(c=E.length)<(w=y.length)&&(N=E,E=y,y=N,i=c,c=w,w=i),i=c+w,N=[];i--;N.push(0));for(1e14,1e7,i=w;--i>=0;){for(r=0,m=y[i]%1e7,d=y[i]/1e7|0,t=i+(o=c);t>i;)r=((l=m*(l=E[--o]%1e7)+(f=d*l+(h=E[o]/1e7|0)*m)%1e7*1e7+N[t]+r)/1e14|0)+(f/1e7|0)+d*h,N[t--]=l%1e14;N[t]=r}return r?++n:N.splice(0,1),W(e,N,n)},L.negated=function(){var e=new z(this);return e.s=-e.s||null,e},L.plus=function(e,b){var r,n=this,a=n.s;if(b=(e=new z(e,b)).s,!a||!b)return new z(NaN);if(a!=b)return e.s=-b,n.minus(e);var t=n.e/14,o=e.e/14,f=n.c,c=e.c;if(!t||!o){if(!f||!c)return new z(a/0);if(!f[0]||!c[0])return c[0]?e:new z(f[0]?n:0*a)}if(t=v(t),o=v(o),f=f.slice(),a=t-o){for(a>0?(o=t,r=c):(a=-a,r=f),r.reverse();a--;r.push(0));r.reverse()}for((a=f.length)-(b=c.length)<0&&(r=c,c=f,f=r,b=a),a=0;b;)a=(f[--b]=f[b]+c[b]+a)/1e14|0,f[b]=1e14===f[b]?0:f[b]%1e14;return a&&(f=[a].concat(f),++o),W(e,f,o)},L.precision=L.sd=function(e,r){var n,t,o,f=this;if(null!=e&&e!==!!e)return E(e,1,1e9),null==r?r=D:E(r,0,8),J(new z(f),e,r);if(!(n=f.c))return null;if(t=14*(o=n.length-1)+1,o=n[o]){for(;o%10==0;o/=10,t--);for(o=n[0];o>=10;o/=10,t++);}return e&&f.e+1>t&&(t=f.e+1),t},L.shiftedBy=function(e){return E(e,-9007199254740991,9007199254740991),this.times("1e"+e)},L.squareRoot=L.sqrt=function(){var e,r,n,t,o,f=this,c=f.c,s=f.s,l=f.e,h=R+4,w=new z("0.5");if(1!==s||!c||!c[0])return new z(!s||s<0&&(!c||c[0])?NaN:c?f:1/0);if(0==(s=Math.sqrt(+X(f)))||s==1/0?(((r=N(c)).length+l)%2==0&&(r+="0"),s=Math.sqrt(+r),l=v((l+1)/2)-(l<0||l%2),n=new z(r=s==1/0?"1e"+l:(r=s.toExponential()).slice(0,r.indexOf("e")+1)+l)):n=new z(s+""),n.c[0])for((s=(l=n.e)+h)<3&&(s=0);;)if(o=n,n=w.times(o.plus(div(f,o,h,1))),N(o.c).slice(0,s)===(r=N(n.c)).slice(0,s)){if(n.e<l&&--s,"9999"!=(r=r.slice(s-3,s+1))&&(t||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(J(n,n.e+R+2,1),e=!n.times(n).eq(f));break}if(!t&&(J(o,o.e+R+2,0),o.times(o).eq(f))){n=o;break}h+=4,s+=4,t=1}return J(n,n.e+R+1,D,e)},L.toExponential=function(e,r){return null!=e&&(E(e,0,1e9),e++),H(this,e,r,1)},L.toFixed=function(e,r){return null!=e&&(E(e,0,1e9),e=e+this.e+1),H(this,e,r)},L.toFormat=function(e,r,n){var t,o=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=$;else if("object"!=typeof n)throw Error(w+"Argument not an object: "+n);if(t=o.toFixed(e,r),o.c){var i,f=t.split("."),c=+n.groupSize,l=+n.secondaryGroupSize,h=n.groupSeparator||"",m=f[0],d=f[1],v=o.s<0,N=v?m.slice(1):m,O=N.length;if(l&&(i=c,c=l,l=i,O-=i),c>0&&O>0){for(i=O%c||c,m=N.substr(0,i);i<O;i+=c)m+=h+N.substr(i,c);l>0&&(m+=h+N.slice(i)),v&&(m="-"+m)}t=d?m+(n.decimalSeparator||"")+((l=+n.fractionGroupSize)?d.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):d):m}return(n.prefix||"")+t+(n.suffix||"")},L.toFraction=function(e){var r,n,t,o,f,c,l,h,m,q,v,s,O=this,E=O.c;if(null!=e&&(!(l=new z(e)).isInteger()&&(l.c||1!==l.s)||l.lt(P)))throw Error(w+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+X(l));if(!E)return new z(O);for(r=new z(P),m=n=new z(P),t=h=new z(P),s=N(E),f=r.e=s.length-O.e-1,r.c[0]=d[(c=f%14)<0?14+c:c],e=!e||l.comparedTo(r)>0?f>0?r:m:l,c=M,M=1/0,l=new z(s),h.c[0]=0;q=div(l,r,0,1),1!=(o=n.plus(q.times(t))).comparedTo(e);)n=t,t=o,m=h.plus(q.times(o=m)),h=o,r=l.minus(q.times(o=r)),l=o;return o=div(e.minus(n),t,0,1),h=h.plus(o.times(m)),n=n.plus(o.times(t)),h.s=m.s=O.s,v=div(m,t,f*=2,D).minus(O).abs().comparedTo(div(h,n,f,D).minus(O).abs())<1?[m,t]:[h,n],M=c,v},L.toNumber=function(){return+X(this)},L.toPrecision=function(e,r){return null!=e&&E(e,1,1e9),H(this,e,r,2)},L.toString=function(b){var e,r=this,s=r.s,t=r.e;return null===t?s?(e="Infinity",s<0&&(e="-"+e)):e="NaN":(null==b?e=t<=U||t>=T?A(N(r.c),t):B(N(r.c),t,"0"):10===b?e=B(N((r=J(new z(r),R+t+1,D)).c),r.e,"0"):(E(b,2,j.length,"Base"),e=n(B(N(r.c),t,"0"),10,b,s,!0)),s<0&&r.c[0]&&(e="-"+e)),e},L.valueOf=L.toJSON=function(){return X(this)},L._isBigNumber=!0,null!=r&&z.set(r),z}()).default=f.BigNumber=f,void 0===(t=function(){return f}.call(r,n,r,e))||(e.exports=t)}()}}]);