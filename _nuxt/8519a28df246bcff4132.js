(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{120:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const r=n(149);t.isBrowser=function(){return!!r.getBrowerCrypto()&&!!r.getSubtleCrypto()},t.isNode=function(){return void 0!==e&&void 0!==e.versions&&void 0!==e.versions.node}}).call(this,n(21))},149:function(e,t,n){"use strict";(function(e,r){var o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function f(e){try{d(r.next(e))}catch(e){c(e)}}function l(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,l)}d((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const c=n(58),f=n(59),l=n(150);function d(){var t,n;return(null===(t=e)||void 0===t?void 0:t.crypto)||(null===(n=e)||void 0===n?void 0:n.msCrypto)||{}}function E(){const e=d();return e.subtle||e.webkitSubtle}function _(e,t=c.AES_BROWSER_ALGO){return o(this,void 0,void 0,(function*(){const n=E(),r=t===c.AES_BROWSER_ALGO?{length:c.AES_LENGTH,name:c.AES_BROWSER_ALGO}:{hash:{name:c.HMAC_BROWSER_ALGO},name:c.HMAC_BROWSER},o=t===c.AES_BROWSER_ALGO?[c.ENCRYPT_OP,c.DECRYPT_OP]:[c.SIGN_OP,c.VERIFY_OP];return yield n.importKey("raw",e,r,!0,o)}))}t.getBrowerCrypto=d,t.getSubtleCrypto=E,t.browserRandomBytes=function(e){const t=d();return void 0!==t.getRandomValues?f.arrayToBuffer(t.getRandomValues(new Uint8Array(e))):l.fallbackRandomBytes(e)},t.browserImportKey=_,t.browserAesEncrypt=function(e,t,data){return o(this,void 0,void 0,(function*(){const n=E(),o=yield _(t,c.AES_BROWSER_ALGO),f=yield n.encrypt({iv:e,name:c.AES_BROWSER_ALGO},o,data);return r.from(f)}))},t.browserAesDecrypt=function(e,t,data){return o(this,void 0,void 0,(function*(){const n=E(),o=yield _(t,c.AES_BROWSER_ALGO),f=yield n.decrypt({iv:e,name:c.AES_BROWSER_ALGO},o,data);return r.from(f)}))},t.browserHmacSha256Sign=function(e,data){return o(this,void 0,void 0,(function*(){const t=E(),n=yield _(e,c.HMAC_BROWSER),o=yield t.sign({length:c.HMAC_LENGTH,name:c.HMAC_BROWSER},n,data);return r.from(o)}))},t.browserHmacSha512Sign=function(e,data){return o(this,void 0,void 0,(function*(){const t=E(),n=yield _(e,c.HMAC_BROWSER),o=yield t.sign({length:c.LENGTH_512,name:c.HMAC_BROWSER},n,data);return r.from(o)}))},t.browserSha256=function(data){return o(this,void 0,void 0,(function*(){const e=E(),t=yield e.digest({name:c.SHA256_BROWSER_ALGO},data);return r.from(t)}))},t.browserSha512=function(data){return o(this,void 0,void 0,(function*(){const e=E(),t=yield e.digest({name:c.SHA512_BROWSER_ALGO},data);return r.from(t)}))}}).call(this,n(18),n(7).Buffer)},150:function(e,t,n){"use strict";(function(e){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const c=r(n(823)),f=r(n(79)),l=o(n(83)),d=o(n(824)),E=n(58),_=n(59);t.fallbackRandomBytes=function(e){return f.default(e)},t.fallbackAesEncrypt=function(t,n,data){const r=new c.default.ModeOfOperation.cbc(n,t),o=_.arrayToBuffer(d.pad(data)),f=r.encrypt(o);return e.from(f)},t.fallbackAesDecrypt=function(t,n,data){const r=new c.default.ModeOfOperation.cbc(n,t).decrypt(data),o=e.from(r);return _.arrayToBuffer(d.unpad(o))},t.fallbackHmacSha256Sign=function(e,data){const t=l.hmac(l[E.SHA256_NODE_ALGO],e).update(data).digest(E.HEX_ENC);return _.hexToBuffer(t)},t.fallbackHmacSha512Sign=function(e,data){const t=l.hmac(l[E.SHA512_NODE_ALGO],e).update(data).digest(E.HEX_ENC);return _.hexToBuffer(t)},t.fallbackSha256=function(e){const t=l.sha256().update(e).digest(E.HEX_ENC);return _.hexToBuffer(t)},t.fallbackSha512=function(e){const t=l.sha512().update(e).digest(E.HEX_ENC);return _.hexToBuffer(t)},t.fallbackRipemd160=function(e){const t=l.ripemd160().update(e).digest(E.HEX_ENC);return _.hexToBuffer(t)}}).call(this,n(7).Buffer)},187:function(e,t,n){"use strict";(function(e){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(81)),c=n(58),f=n(59);t.nodeRandomBytes=function(e){return o.default.randomBytes(e)},t.nodeAesEncrypt=function(e,t,data){const n=o.default.createCipheriv(c.AES_NODE_ALGO,t,e);return f.concatBuffers(n.update(data),n.final())},t.nodeAesDecrypt=function(e,t,data){const n=o.default.createDecipheriv(c.AES_NODE_ALGO,t,e);return f.concatBuffers(n.update(data),n.final())},t.nodeHmacSha256Sign=function(t,data){return o.default.createHmac(c.HMAC_NODE_ALGO,e.from(t)).update(data).digest()},t.nodeHmacSha512Sign=function(t,data){return o.default.createHmac(c.SHA512_NODE_ALGO,e.from(t)).update(data).digest()},t.nodeSha256=function(data){return o.default.createHash(c.SHA256_NODE_ALGO).update(data).digest()},t.nodeSha512=function(data){return o.default.createHash(c.SHA512_NODE_ALGO).update(data).digest()},t.nodeRipemd160=function(data){return o.default.createHash(c.RIPEMD160_NODE_ALGO).update(data).digest()}}).call(this,n(7).Buffer)},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(59),o=n(120),c=n(149),f=n(187),l=n(150);t.randomBytes=function(e){if(!r.isValidKeyLength(e))throw new Error(`randomBytes - invalid key length: ${e}`);let t;return t=o.isBrowser()?c.browserRandomBytes(e):o.isNode()?f.nodeRandomBytes(e):l.fallbackRandomBytes(e),t}},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(120),o=n(398),c=n(403),f=n(58),l=n(59);function d(){return r.isNode()?o.secp256k1GeneratePrivate():c.ellipticGeneratePrivate()}function E(e){l.assert(e.length===f.KEY_LENGTH,f.ERROR_BAD_PRIVATE_KEY),l.assert(l.isValidPrivateKey(e),f.ERROR_BAD_PRIVATE_KEY)}function _(e){l.assert(e.length===f.PREFIXED_DECOMPRESSED_LENGTH||e.length===f.PREFIXED_KEY_LENGTH,f.ERROR_BAD_PUBLIC_KEY),e.length===f.PREFIXED_DECOMPRESSED_LENGTH&&l.assert(4===e[0],f.ERROR_BAD_PUBLIC_KEY),e.length===f.PREFIXED_KEY_LENGTH&&l.assert(2===e[0]||3===e[0],f.ERROR_BAD_PUBLIC_KEY)}function h(e){l.assert(e.length>0,f.ERROR_EMPTY_MESSAGE),l.assert(e.length<=f.MAX_MSG_LENGTH,f.ERROR_MESSAGE_TOO_LONG)}function y(e){return E(e),r.isNode()?o.secp256k1GetPublic(e):c.ellipticGetPublic(e)}t.generatePrivate=d,t.checkPrivateKey=E,t.checkPublicKey=_,t.checkMessage=h,t.compress=function(e){return l.isCompressed(e)?e:r.isNode()?o.secp256k1Compress(e):c.ellipticCompress(e)},t.decompress=function(e){return l.isDecompressed(e)?e:r.isNode()?o.secp256k1Decompress(e):c.ellipticDecompress(e)},t.getPublic=y,t.getPublicCompressed=function(e){return E(e),r.isNode()?o.secp256k1GetPublicCompressed(e):c.ellipticGetPublicCompressed(e)},t.generateKeyPair=function(){const e=d();return{privateKey:e,publicKey:y(e)}},t.signatureExport=function(e){return r.isNode()?o.secp256k1SignatureExport(e):c.ellipticSignatureExport(e)},t.sign=function(e,t,n=!1){return E(e),h(t),r.isNode()?o.secp256k1Sign(t,e,n):c.ellipticSign(t,e,n)},t.recover=function(e,t,n=!1){return h(e),r.isNode()?o.secp256k1Recover(t,e,n):c.ellipticRecover(t,e,n)},t.verify=function(e,t,n){if(_(e),h(t),r.isNode()?o.secp256k1Verify(n,t,e):c.ellipticVerify(n,t,e))return null;throw new Error("Bad signature")}},395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var p in e)t.hasOwnProperty(p)||(t[p]=e[p])}(n(148))},396:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function f(e){try{d(r.next(e))}catch(e){c(e)}}function l(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,l)}d((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(120),c=n(149),f=n(187),l=n(150);t.aesCbcEncrypt=function(e,t,data){return r(this,void 0,void 0,(function*(){let n;return n=o.isBrowser()?yield c.browserAesEncrypt(e,t,data):o.isNode()?f.nodeAesEncrypt(e,t,data):l.fallbackAesEncrypt(e,t,data),n}))},t.aesCbcDecrypt=function(e,t,data){return r(this,void 0,void 0,(function*(){let n;return n=o.isBrowser()?yield c.browserAesDecrypt(e,t,data):o.isNode()?f.nodeAesDecrypt(e,t,data):l.fallbackAesDecrypt(e,t,data),n}))},t.aesCbcEncryptSync=function(e,t,data){let n;return n=o.isNode()?f.nodeAesEncrypt(e,t,data):l.fallbackAesEncrypt(e,t,data),n},t.aesCbcDecryptSync=function(e,t,data){let n;return n=o.isNode()?f.nodeAesDecrypt(e,t,data):l.fallbackAesDecrypt(e,t,data),n}},397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(120),o=n(398),c=n(403),f=n(264);t.derive=function(e,t){return f.checkPrivateKey(e),f.checkPublicKey(t),r.isNode()?o.secp256k1Derive(t,e):c.ellipticDerive(t,e)}},398:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(825)),c=n(189),f=n(58),l=n(59);function d(e){return t.secp256k1.privateKeyVerify(e)}function E(e){return t.secp256k1.signatureExport(e)}function _(e){return t.secp256k1.signatureImport(e)}t.secp256k1=o,t.secp256k1Compress=function(e){return e=l.sanitizePublicKey(e),t.secp256k1.publicKeyConvert(e,!0)},t.secp256k1Decompress=function(e){return e=l.sanitizePublicKey(e),t.secp256k1.publicKeyConvert(e,!1)},t.secp256k1GeneratePrivate=function(){let e=c.randomBytes(f.KEY_LENGTH);for(;!d(e);)e=c.randomBytes(f.KEY_LENGTH);return e},t.secp256k1VerifyPrivateKey=d,t.secp256k1GetPublic=function(e){return t.secp256k1.publicKeyCreate(e,!1)},t.secp256k1GetPublicCompressed=function(e){return t.secp256k1.publicKeyCreate(e,!0)},t.secp256k1SignatureExport=E,t.secp256k1SignatureImport=_,t.secp256k1Sign=function(e,n,r=!1){const{signature:o,recovery:c}=t.secp256k1.sign(e,n);return r?l.concatBuffers(o,l.exportRecoveryParam(c)):E(o)},t.secp256k1Recover=function(e,n,r=!1){if(l.isValidDERSignature(e))throw new Error("Cannot recover from DER signatures");const{signature:o,recovery:c}=l.sanitizeRSVSignature(e);return t.secp256k1.recover(n,o,c,r)},t.secp256k1Verify=function(e,n,r){return l.isValidDERSignature(e)&&(e=_(e)),e=l.sanitizeRSVSignature(e).signature,t.secp256k1.verify(n,e,r)},t.secp256k1Derive=function(e,n,r){let o=t.secp256k1.ecdhUnsafe(e,n,r);return l.trimLeft(o,f.KEY_LENGTH)}},403:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const r=n(400),o=n(402),c=n(189),f=n(58),l=n(59),d=new r.ec("secp256k1");function E(e){return l.isValidPrivateKey(e)}function _(e){return o.Signature({r:e.slice(0,32),s:e.slice(32,64),recoveryParam:l.importRecoveryParam(e.slice(64,65))}).toDER()}t.ellipticCompress=function(e){e=l.sanitizePublicKey(e);const t=d.keyFromPublic(e).getPublic().encode(f.HEX_ENC,!0);return l.hexToBuffer(t)},t.ellipticDecompress=function(e){e=l.sanitizePublicKey(e);const t=d.keyFromPublic(e).getPublic().encode(f.HEX_ENC,!1);return l.hexToBuffer(t)},t.ellipticGeneratePrivate=function(){let e=c.randomBytes(f.KEY_LENGTH);for(;!E(e);)e=c.randomBytes(f.KEY_LENGTH);return e},t.ellipticVerifyPrivateKey=E,t.ellipticGetPublic=function(e){const t=d.keyFromPrivate(e).getPublic(!1,f.HEX_ENC);return l.hexToBuffer(t)},t.ellipticGetPublicCompressed=function(e){const t=d.keyFromPrivate(e).getPublic(!0,f.HEX_ENC);return l.hexToBuffer(t)},t.ellipticDerive=function(t,n){const r=d.keyFromPrivate(n),o=d.keyFromPublic(t),c=r.derive(o.getPublic());return e.from(c.toArray())},t.ellipticSignatureExport=_,t.ellipticSign=function(t,n,r=!1){const o=d.sign(t,n,{canonical:!0});return r?l.concatBuffers(l.hexToBuffer(l.sanitizeHex(o.r.toString(16))),l.hexToBuffer(l.sanitizeHex(o.s.toString(16))),l.exportRecoveryParam(o.recoveryParam||0)):e.from(o.toDER())},t.ellipticRecover=function(e,t,n=!1){if(l.isValidDERSignature(e))throw new Error("Cannot recover from DER signatures");const r=l.splitSignature(e),o=l.importRecoveryParam(r.v),c=d.recoverPubKey(t,{r:l.removeHexLeadingZeros(l.bufferToHex(r.r)),s:l.removeHexLeadingZeros(l.bufferToHex(r.s)),recoveryParam:o},o).encode(f.HEX_ENC,n);return l.hexToBuffer(c)},t.ellipticVerify=function(e,t,n){return l.isValidDERSignature||(e=_(e)),d.verify(t,e,n)}}).call(this,n(7).Buffer)},404:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function f(e){try{d(r.next(e))}catch(e){c(e)}}function l(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,l)}d((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(120),c=n(149),f=n(150),l=n(187),d=n(59);t.hmacSha256Sign=function(e,t){return r(this,void 0,void 0,(function*(){let n;return n=o.isBrowser()?yield c.browserHmacSha256Sign(e,t):o.isNode()?l.nodeHmacSha256Sign(e,t):f.fallbackHmacSha256Sign(e,t),n}))},t.hmacSha256Verify=function(e,t,n){return r(this,void 0,void 0,(function*(){let r;if(o.isBrowser()){const o=yield c.browserHmacSha256Sign(e,t);r=d.equalConstTime(o,n)}else if(o.isNode()){const o=l.nodeHmacSha256Sign(e,t);r=d.equalConstTime(o,n)}else{const o=f.fallbackHmacSha256Sign(e,t);r=d.equalConstTime(o,n)}return r}))},t.hmacSha512Sign=function(e,t){return r(this,void 0,void 0,(function*(){let n;return n=o.isBrowser()?yield c.browserHmacSha512Sign(e,t):o.isNode()?l.nodeHmacSha512Sign(e,t):f.fallbackHmacSha512Sign(e,t),n}))},t.hmacSha512Verify=function(e,t,n){return r(this,void 0,void 0,(function*(){let r;if(o.isNode()){const o=l.nodeHmacSha512Sign(e,t);r=d.equalConstTime(o,n)}else{const o=f.fallbackHmacSha512Sign(e,t);r=d.equalConstTime(o,n)}return r}))},t.hmacSha256SignSync=function(e,t){let n;return n=o.isNode()?l.nodeHmacSha256Sign(e,t):f.fallbackHmacSha256Sign(e,t),n},t.hmacSha256VerifySync=function(e,t,n){let r;if(o.isNode()){const o=l.nodeHmacSha256Sign(e,t);r=d.equalConstTime(o,n)}else{const o=f.fallbackHmacSha256Sign(e,t);r=d.equalConstTime(o,n)}return r},t.hmacSha512SignSync=function(e,t){let n;return n=o.isNode()?l.nodeHmacSha512Sign(e,t):f.fallbackHmacSha512Sign(e,t),n},t.hmacSha512VerifySync=function(e,t,n){let r;if(o.isNode()){const o=l.nodeHmacSha512Sign(e,t);r=d.equalConstTime(o,n)}else{const o=f.fallbackHmacSha512Sign(e,t);r=d.equalConstTime(o,n)}return r}},405:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function f(e){try{d(r.next(e))}catch(e){c(e)}}function l(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,l)}d((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(120),c=n(149),f=n(187),l=n(150),d=n(58);t.sha256=function(e){return r(this,void 0,void 0,(function*(){let t=d.EMPTY_BUFFER;return t=o.isBrowser()?yield c.browserSha256(e):o.isNode()?f.nodeSha256(e):l.fallbackSha256(e),t}))},t.sha512=function(e){return r(this,void 0,void 0,(function*(){let t=d.EMPTY_BUFFER;return t=o.isBrowser()?yield c.browserSha512(e):o.isNode()?f.nodeSha512(e):l.fallbackSha512(e),t}))},t.ripemd160=function(e){return r(this,void 0,void 0,(function*(){let t=d.EMPTY_BUFFER;return t=o.isNode()?f.nodeRipemd160(e):l.fallbackRipemd160(e),t}))},t.sha256Sync=function(e){let t=d.EMPTY_BUFFER;return t=o.isNode()?f.nodeSha256(e):l.fallbackSha256(e),t},t.sha512Sync=function(e){let t=d.EMPTY_BUFFER;return t=o.isNode()?f.nodeSha512(e):l.fallbackSha512(e),t},t.ripemd160Sync=function(e){let t=d.EMPTY_BUFFER;return t=o.isNode()?f.nodeRipemd160(e):l.fallbackRipemd160(e),t}},58:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.HEX_ENC="hex",t.UTF8_ENC="utf8",t.ENCRYPT_OP="encrypt",t.DECRYPT_OP="decrypt",t.SIGN_OP="sign",t.VERIFY_OP="verify",t.LENGTH_0=0,t.LENGTH_1=1,t.LENGTH_16=16,t.LENGTH_32=32,t.LENGTH_64=64,t.LENGTH_128=128,t.LENGTH_256=256,t.LENGTH_512=512,t.LENGTH_1024=1024,t.AES_LENGTH=t.LENGTH_256,t.HMAC_LENGTH=t.LENGTH_256,t.AES_BROWSER_ALGO="AES-CBC",t.HMAC_BROWSER_ALGO=`SHA-${t.AES_LENGTH}`,t.HMAC_BROWSER="HMAC",t.SHA256_BROWSER_ALGO="SHA-256",t.SHA512_BROWSER_ALGO="SHA-512",t.AES_NODE_ALGO=`aes-${t.AES_LENGTH}-cbc`,t.HMAC_NODE_ALGO=`sha${t.HMAC_LENGTH}`,t.SHA256_NODE_ALGO="sha256",t.SHA512_NODE_ALGO="sha512",t.RIPEMD160_NODE_ALGO="ripemd160",t.PREFIX_LENGTH=t.LENGTH_1,t.KEY_LENGTH=t.LENGTH_32,t.IV_LENGTH=t.LENGTH_16,t.MAC_LENGTH=t.LENGTH_32,t.DECOMPRESSED_LENGTH=t.LENGTH_64,t.PREFIXED_KEY_LENGTH=t.KEY_LENGTH+t.PREFIX_LENGTH,t.PREFIXED_DECOMPRESSED_LENGTH=t.DECOMPRESSED_LENGTH+t.PREFIX_LENGTH,t.MAX_KEY_LENGTH=t.LENGTH_1024,t.MAX_MSG_LENGTH=t.LENGTH_32,t.EMPTY_BUFFER=e.from(new Uint8Array(t.LENGTH_0)),t.EC_GROUP_ORDER=e.from("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",t.HEX_ENC),t.ZERO32=e.alloc(t.LENGTH_32,t.LENGTH_0),t.ERROR_BAD_MAC="Bad MAC",t.ERROR_BAD_PRIVATE_KEY="Bad private key",t.ERROR_BAD_PUBLIC_KEY="Bad public key",t.ERROR_EMPTY_MESSAGE="Message should not be empty",t.ERROR_MESSAGE_TOO_LONG="Message is too long"}).call(this,n(7).Buffer)},59:function(e,t,n){"use strict";function r(e){for(var p in e)t.hasOwnProperty(p)||(t[p]=e[p])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(395)),r(n(821)),r(n(822))},820:function(e,t,n){"use strict";function r(e){for(var p in e)t.hasOwnProperty(p)||(t[p]=e[p])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(58)),r(n(59)),r(n(396)),r(n(397)),r(n(264)),r(n(840)),r(n(404)),r(n(189)),r(n(405)),r(n(841))},821:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const r=n(58),o=n(395);function c(e){return e.length===r.KEY_LENGTH||e.length===r.PREFIXED_KEY_LENGTH}function f(e){return c(e)?e.length===r.PREFIXED_KEY_LENGTH:e.length===r.PREFIXED_DECOMPRESSED_LENGTH}function l(e){return o.hexToNumber(o.removeHexLeadingZeros(o.bufferToHex(e)))-27}t.isCompressed=c,t.isDecompressed=function(e){return e.length===r.DECOMPRESSED_LENGTH||e.length===r.PREFIXED_DECOMPRESSED_LENGTH},t.isPrefixed=f,t.sanitizePublicKey=function(t){return f(t)?t:e.from(`04${t.toString("hex")}`,"hex")},t.exportRecoveryParam=function(e){return o.hexToBuffer(o.sanitizeHex((e+27).toString(16)))},t.importRecoveryParam=l,t.splitSignature=function(e){return{r:e.slice(0,32),s:e.slice(32,64),v:e.slice(64,65)}},t.joinSignature=function(e){return o.concatBuffers(e.r,e.s,e.v)},t.isValidDERSignature=function(e){return o.bufferToHex(e).startsWith("30")&&e.length>65},t.sanitizeRSVSignature=function(e){return{signature:e.slice(0,64),recovery:l(e.slice(64,65))}}}).call(this,n(7).Buffer)},822:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const r=n(58);function o(t){return e.isBuffer(t)&&32===t.length}t.assert=function(e,t){if(!e)throw new Error(t||"Assertion failed")},t.isScalar=o,t.isValidPrivateKey=function(e){return!!o(e)&&(e.compare(r.ZERO32)>0&&e.compare(r.EC_GROUP_ORDER)<0)},t.equalConstTime=function(e,t){if(e.length!==t.length)return!1;let n=0;for(let i=0;i<e.length;i++)n|=e[i]^t[i];return 0===n},t.isValidKeyLength=function(e){return!(e<=r.LENGTH_0||e>r.MAX_KEY_LENGTH||parseInt(String(e))!==e)}}).call(this,n(7).Buffer)},824:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=[[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],[14,14,14,14,14,14,14,14,14,14,14,14,14,14],[13,13,13,13,13,13,13,13,13,13,13,13,13],[12,12,12,12,12,12,12,12,12,12,12,12],[11,11,11,11,11,11,11,11,11,11,11],[10,10,10,10,10,10,10,10,10,10],[9,9,9,9,9,9,9,9,9],[8,8,8,8,8,8,8,8],[7,7,7,7,7,7,7],[6,6,6,6,6,6],[5,5,5,5,5],[4,4,4,4],[3,3,3],[2,2],[1]];t.pad=function(e){const t=r[e.byteLength%16||0],n=new Uint8Array(e.byteLength+t.length);return n.set(e),n.set(t,e.byteLength),n},t.unpad=function(e){return e.subarray(0,e.byteLength-e[e.byteLength-1])}},840:function(e,t,n){"use strict";(function(e){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function f(e){try{d(r.next(e))}catch(e){c(e)}}function l(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,l)}d((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(396),c=n(397),f=n(264),l=n(404),d=n(189),E=n(405),_=n(58),h=n(59);function y(e,t){return t=f.decompress(t),c.derive(e,t)}function S(t){return e.from(t.slice(_.LENGTH_0,_.KEY_LENGTH))}function v(t){return e.from(t.slice(_.KEY_LENGTH))}function m(e,t){return r(this,void 0,void 0,(function*(){const n=y(e,t),r=yield E.sha512(n);return{encryptionKey:S(r),macKey:v(r)}}))}function R(e,t){const n=y(e,t),r=E.sha512Sync(n);return{encryptionKey:S(r),macKey:v(r)}}function P(e){var t,n;let r=(null===(t=e)||void 0===t?void 0:t.ephemPrivateKey)||d.randomBytes(_.KEY_LENGTH);for(;!h.isValidPrivateKey(r);)r=(null===(n=e)||void 0===n?void 0:n.ephemPrivateKey)||d.randomBytes(_.KEY_LENGTH);return{ephemPrivateKey:r,ephemPublicKey:f.getPublic(r)}}t.encrypt=function(e,t,n){var c;return r(this,void 0,void 0,(function*(){const{ephemPrivateKey:r,ephemPublicKey:f}=P(n),{encryptionKey:E,macKey:y}=yield m(r,e),S=(null===(c=n)||void 0===c?void 0:c.iv)||d.randomBytes(_.IV_LENGTH),v=yield o.aesCbcEncrypt(S,E,t),R=h.concatBuffers(S,f,v);return{iv:S,ephemPublicKey:f,ciphertext:v,mac:yield l.hmacSha256Sign(y,R)}}))},t.decrypt=function(e,t){return r(this,void 0,void 0,(function*(){const{ephemPublicKey:n,iv:r,mac:c,ciphertext:f}=t,{encryptionKey:d,macKey:E}=yield m(e,n),y=h.concatBuffers(r,n,f),S=yield l.hmacSha256Verify(E,y,c);return h.assert(S,_.ERROR_BAD_MAC),yield o.aesCbcDecrypt(t.iv,d,t.ciphertext)}))},t.encryptSync=function(e,t,n){var r;const{ephemPrivateKey:c,ephemPublicKey:f}=P(n),{encryptionKey:E,macKey:y}=R(c,e),S=(null===(r=n)||void 0===r?void 0:r.iv)||d.randomBytes(_.IV_LENGTH),v=o.aesCbcEncryptSync(S,E,t),m=h.concatBuffers(S,f,v);return{iv:S,ephemPublicKey:f,ciphertext:v,mac:l.hmacSha256SignSync(y,m)}},t.decryptSync=function(e,t){return r(this,void 0,void 0,(function*(){const{ephemPublicKey:n,iv:r,mac:c,ciphertext:f}=t,{encryptionKey:d,macKey:E}=R(e,n),y=h.concatBuffers(r,n,f),S=l.hmacSha256VerifySync(E,y,c);return h.assert(S,_.ERROR_BAD_MAC),o.aesCbcDecryptSync(t.iv,d,t.ciphertext)}))},t.serialize=function(e){const t=f.compress(e.ephemPublicKey);return h.concatBuffers(e.iv,t,e.mac,e.ciphertext)},t.deserialize=function(e){const t=_.LENGTH_0,n=t+_.IV_LENGTH,r=n+_.PREFIXED_KEY_LENGTH,o=r+_.MAC_LENGTH,c=e.length;return{iv:e.slice(t,n),ephemPublicKey:f.decompress(e.slice(n,r)),mac:e.slice(r,o),ciphertext:e.slice(o,c)}}}).call(this,n(7).Buffer)},841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(842),o=n(59);t.sha3=function(e){return o.hexToBuffer(r.sha3_256(e))},t.keccak256=function(e){return o.hexToBuffer(r.keccak_256(e))}},862:function(e,t,n){"use strict";var r={single_source_shortest_paths:function(e,s,t){var n={},o={};o[s]=0;var c,u,f,l,d,E,_,h=r.PriorityQueue.make();for(h.push(s,0);!h.empty();)for(f in u=(c=h.pop()).value,l=c.cost,d=e[u]||{})d.hasOwnProperty(f)&&(E=l+d[f],_=o[f],(void 0===o[f]||_>E)&&(o[f]=E,h.push(f,E),n[f]=u));if(void 0!==t&&void 0===o[t]){var y=["Could not find a path from ",s," to ",t,"."].join("");throw new Error(y)}return n},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],u=t;u;)n.push(u),e[u],u=e[u];return n.reverse(),n},find_path:function(e,s,t){var n=r.single_source_shortest_paths(e,s,t);return r.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(e){var t,n=r.PriorityQueue,o={};for(t in e=e||{},n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o.queue=[],o.sorter=e.sorter||n.default_sorter,o},default_sorter:function(a,b){return a.cost-b.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=r}}]);