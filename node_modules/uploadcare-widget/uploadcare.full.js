/*
 * Uploadcare (3.7.7)
 * Date: 2019-07-31 14:45:42 +0300
 * Rev: 3eaac1473a
 */
;(function(global, factory) {
  // Not a browser enviroment at all: not Browserify/Webpack.
  if ( ! global.document) {
    return;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = factory(global, require("jquery"));
  } else {
    global.uploadcare = factory(global);
  }

}(typeof window !== "undefined" ? window : this, function(window, jQuery) {
  var uploadcare, document = window.document;

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */

!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
(function() {
  uploadcare = {__exports: {}};
  uploadcare.namespace = function(path, fn) {
    var part, target, _i, _len, _ref;
    target = uploadcare;
    if (path) {
      _ref = path.split('.');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        part = _ref[_i];
        target[part] || (target[part] = {});
        target = target[part];
      }
    }
    return fn(target);
  };

  uploadcare.expose = function(key, value) {
    var last, part, parts, source, target, _i, _len;
    parts = key.split('.');
    last = parts.pop();
    target = uploadcare.__exports;
    source = uploadcare;
    for (_i = 0, _len = parts.length; _i < _len; _i++) {
      part = parts[_i];
      target[part] || (target[part] = {});
      target = target[part];
      source = source != null ? source[part] : void 0;
    }
    return target[last] = value || source[last];
  };

}).call(this);
(function() {
  var expose, uc;

  uc = uploadcare;

  uc.version = '3.7.7';

  uc.jQuery = jQuery || window.jQuery;

  if (typeof uc.jQuery === 'undefined') {
    throw new ReferenceError('jQuery is not defined');
  }

  expose = uc.expose;

  expose('version');

  expose('jQuery');

  expose('plugin', function(fn) {
    return fn(uc);
  });

}).call(this);
// from https://github.com/jaubourg/ajaxHooks/blob/master/src/xdr.js

if ( window.XDomainRequest ) {
	uploadcare.jQuery.ajaxTransport(function( s ) {
		if ( s.crossDomain && s.async ) {
			if ( s.timeout ) {
				s.xdrTimeout = s.timeout;
				delete s.timeout;
			}
			var xdr;
			return {
				send: function( _, complete ) {
					function callback( status, statusText, responses, responseHeaders ) {
						xdr.onload = xdr.onerror = xdr.ontimeout = function() {};
						xdr = undefined;
						complete( status, statusText, responses, responseHeaders );
					}
					xdr = new XDomainRequest();
					xdr.onload = function() {
						callback( 200, "OK", { text: xdr.responseText }, "Content-Type: " + xdr.contentType );
					};
					xdr.onerror = function() {
						callback( 404, "Not Found" );
					};
					xdr.onprogress = function() {};
					xdr.ontimeout = function() {
						callback( 0, "timeout" );
					};
					xdr.timeout = s.xdrTimeout || Number.MAX_VALUE;
					xdr.open( s.type, s.url.replace(/^https?:/, '') );
					xdr.send( ( s.hasContent && s.data ) || null );
				},
				abort: function() {
					if ( xdr ) {
						xdr.onerror = function() {};
						xdr.abort();
					}
				}
			};
		}
	});
}
;
(function() {
  uploadcare.namespace('utils.abilities', function(ns) {
    var ios, url, ver, _ref;
    ns.fileAPI = !!(window.File && window.FileList && window.FileReader);
    ns.sendFileAPI = !!(window.FormData && ns.fileAPI);
    ns.dragAndDrop = (function() {
      var el;
      el = document.createElement("div");
      return ("draggable" in el) || ("ondragstart" in el && "ondrop" in el);
    })();
    ns.canvas = (function() {
      var el;
      el = document.createElement("canvas");
      return !!(el.getContext && el.getContext('2d'));
    })();
    ns.fileDragAndDrop = ns.fileAPI && ns.dragAndDrop;
    ns.iOSVersion = null;
    if (ios = /^[^(]+\(iP(?:hone|od|ad);\s*(.+?)\)/.exec(navigator.userAgent)) {
      if (ver = /OS (\d)_(\d)/.exec(ios[1])) {
        ns.iOSVersion = +ver[1] + ver[2] / 10;
      }
    }
    ns.Blob = false;
    try {
      if (new window.Blob) {
        ns.Blob = window.Blob;
      }
    } catch (_error) {}
    url = window.URL || window.webkitURL || false;
    ns.URL = url && url.createObjectURL && url;
    return ns.FileReader = ((_ref = window.FileReader) != null ? _ref.prototype.readAsArrayBuffer : void 0) && window.FileReader;
  });

}).call(this);
(function() {
  var $,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  $ = uploadcare.jQuery;

  uploadcare.namespace('utils', function(utils) {
    var _ref;
    utils.Collection = (function() {
      function Collection(items) {
        var item, _i, _len;
        if (items == null) {
          items = [];
        }
        this.onAdd = $.Callbacks();
        this.onRemove = $.Callbacks();
        this.onSort = $.Callbacks();
        this.onReplace = $.Callbacks();
        this.__items = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          this.add(item);
        }
      }

      Collection.prototype.add = function(item) {
        return this.__add(item, this.__items.length);
      };

      Collection.prototype.__add = function(item, i) {
        this.__items.splice(i, 0, item);
        return this.onAdd.fire(item, i);
      };

      Collection.prototype.remove = function(item) {
        var i;
        i = $.inArray(item, this.__items);
        if (i !== -1) {
          return this.__remove(item, i);
        }
      };

      Collection.prototype.__remove = function(item, i) {
        this.__items.splice(i, 1);
        return this.onRemove.fire(item, i);
      };

      Collection.prototype.clear = function() {
        var i, item, items, _i, _len, _results;
        items = this.get();
        this.__items.length = 0;
        _results = [];
        for (i = _i = 0, _len = items.length; _i < _len; i = ++_i) {
          item = items[i];
          _results.push(this.onRemove.fire(item, i));
        }
        return _results;
      };

      Collection.prototype.replace = function(oldItem, newItem) {
        var i;
        if (oldItem !== newItem) {
          i = $.inArray(oldItem, this.__items);
          if (i !== -1) {
            return this.__replace(oldItem, newItem, i);
          }
        }
      };

      Collection.prototype.__replace = function(oldItem, newItem, i) {
        this.__items[i] = newItem;
        return this.onReplace.fire(oldItem, newItem, i);
      };

      Collection.prototype.sort = function(comparator) {
        this.__items.sort(comparator);
        return this.onSort.fire();
      };

      Collection.prototype.get = function(index) {
        if (index != null) {
          return this.__items[index];
        } else {
          return this.__items.slice(0);
        }
      };

      Collection.prototype.length = function() {
        return this.__items.length;
      };

      return Collection;

    })();
    utils.UniqCollection = (function(_super) {
      __extends(UniqCollection, _super);

      function UniqCollection() {
        _ref = UniqCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      UniqCollection.prototype.add = function(item) {
        if (__indexOf.call(this.__items, item) >= 0) {
          return;
        }
        return UniqCollection.__super__.add.apply(this, arguments);
      };

      UniqCollection.prototype.__replace = function(oldItem, newItem, i) {
        if (__indexOf.call(this.__items, newItem) >= 0) {
          return this.remove(oldItem);
        } else {
          return UniqCollection.__super__.__replace.apply(this, arguments);
        }
      };

      return UniqCollection;

    })(utils.Collection);
    return utils.CollectionOfPromises = (function(_super) {
      __extends(CollectionOfPromises, _super);

      function CollectionOfPromises() {
        this.onAnyProgress = __bind(this.onAnyProgress, this);
        this.onAnyFail = __bind(this.onAnyFail, this);
        this.onAnyDone = __bind(this.onAnyDone, this);
        this.anyDoneList = $.Callbacks();
        this.anyFailList = $.Callbacks();
        this.anyProgressList = $.Callbacks();
        this._thenArgs = null;
        this.anyProgressList.add(function(item, firstArgument) {
          return $(item).data('lastProgress', firstArgument);
        });
        CollectionOfPromises.__super__.constructor.apply(this, arguments);
      }

      CollectionOfPromises.prototype.onAnyDone = function(cb) {
        var file, _i, _len, _ref1, _results;
        this.anyDoneList.add(cb);
        _ref1 = this.__items;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          file = _ref1[_i];
          if (file.state() === 'resolved') {
            _results.push(file.done(function() {
              return cb.apply(null, [file].concat(__slice.call(arguments)));
            }));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      CollectionOfPromises.prototype.onAnyFail = function(cb) {
        var file, _i, _len, _ref1, _results;
        this.anyFailList.add(cb);
        _ref1 = this.__items;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          file = _ref1[_i];
          if (file.state() === 'rejected') {
            _results.push(file.fail(function() {
              return cb.apply(null, [file].concat(__slice.call(arguments)));
            }));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      CollectionOfPromises.prototype.onAnyProgress = function(cb) {
        var file, _i, _len, _ref1, _results;
        this.anyProgressList.add(cb);
        _ref1 = this.__items;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          file = _ref1[_i];
          _results.push(cb(file, $(file).data('lastProgress')));
        }
        return _results;
      };

      CollectionOfPromises.prototype.lastProgresses = function() {
        var item, _i, _len, _ref1, _results;
        _ref1 = this.__items;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          item = _ref1[_i];
          _results.push($(item).data('lastProgress'));
        }
        return _results;
      };

      CollectionOfPromises.prototype.add = function(item) {
        if (!(item && item.then)) {
          return;
        }
        if (this._thenArgs) {
          item = item.then.apply(item, this._thenArgs);
        }
        CollectionOfPromises.__super__.add.apply(this, arguments);
        return this.__watchItem(item);
      };

      CollectionOfPromises.prototype.__replace = function(oldItem, newItem, i) {
        if (!(newItem && newItem.then)) {
          return this.remove(oldItem);
        } else {
          CollectionOfPromises.__super__.__replace.apply(this, arguments);
          return this.__watchItem(newItem);
        }
      };

      CollectionOfPromises.prototype.__watchItem = function(item) {
        var handler,
          _this = this;
        handler = function(callbacks) {
          return function() {
            if (__indexOf.call(_this.__items, item) >= 0) {
              return callbacks.fire.apply(callbacks, [item].concat(__slice.call(arguments)));
            }
          };
        };
        return item.then(handler(this.anyDoneList), handler(this.anyFailList), handler(this.anyProgressList));
      };

      CollectionOfPromises.prototype.autoThen = function() {
        var i, item, _i, _len, _ref1, _results;
        if (this._thenArgs) {
          throw new Error("CollectionOfPromises.then() could be used only once");
        }
        this._thenArgs = arguments;
        _ref1 = this.__items;
        _results = [];
        for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
          item = _ref1[i];
          _results.push(this.__replace(item, item.then.apply(item, this._thenArgs), i));
        }
        return _results;
      };

      return CollectionOfPromises;

    })(utils.UniqCollection);
  });

}).call(this);
(function() {
  var $;

  $ = uploadcare.jQuery;

  uploadcare.namespace('utils', function(ns) {
    var trackLoading;
    trackLoading = function(image, src) {
      var def,
        _this = this;
      def = $.Deferred();
      if (src) {
        image.src = src;
      }
      if (image.complete) {
        def.resolve(image);
      } else {
        $(image).one('load', function() {
          return def.resolve(image);
        });
        $(image).one('error', function() {
          return def.reject(image);
        });
      }
      return def.promise();
    };
    ns.imageLoader = function(image) {
      if ($.isArray(image)) {
        return $.when.apply(null, $.map(image, ns.imageLoader));
      }
      if (image.src) {
        return trackLoading(image);
      } else {
        return trackLoading(new Image(), image);
      }
    };
    return ns.videoLoader = function(src) {
      var def;
      def = $.Deferred();
      $('<video/>').on('loadeddata', def.resolve).on('error', def.reject).attr('src', src).get(0).load();
      return def.promise();
    };
  });

}).call(this);
(function() {
  var __slice = [].slice;

  uploadcare.namespace('utils', function(ns) {
    var messages;
    ns.log = function() {
      var _ref;
      try {
        return (_ref = window.console) != null ? typeof _ref.log === "function" ? _ref.log.apply(_ref, arguments) : void 0 : void 0;
      } catch (_error) {}
    };
    ns.debug = function() {
      var _ref, _ref1;
      if ((_ref = window.console) != null ? _ref.debug : void 0) {
        try {
          return (_ref1 = window.console).debug.apply(_ref1, arguments);
        } catch (_error) {}
      } else {
        return ns.log.apply(ns, ["Debug:"].concat(__slice.call(arguments)));
      }
    };
    ns.warn = function() {
      var _ref, _ref1;
      if ((_ref = window.console) != null ? _ref.warn : void 0) {
        try {
          return (_ref1 = window.console).warn.apply(_ref1, arguments);
        } catch (_error) {}
      } else {
        return ns.log.apply(ns, ["Warning:"].concat(__slice.call(arguments)));
      }
    };
    messages = {};
    return ns.warnOnce = function(msg) {
      if (messages[msg] == null) {
        messages[msg] = true;
        return ns.warn(msg);
      }
    };
  });

}).call(this);
(function() {
  var $;

  $ = uploadcare.jQuery;

  uploadcare.namespace('utils', function(ns) {
    var callbacks,
      _this = this;
    callbacks = {};
    $(window).on("message", function(_arg) {
      var e, item, message, _i, _len, _ref, _results;
      e = _arg.originalEvent;
      try {
        message = JSON.parse(e.data);
      } catch (_error) {
        return;
      }
      if ((message != null ? message.type : void 0) && message.type in callbacks) {
        _ref = callbacks[message.type];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          if (e.source === item[0]) {
            _results.push(item[1](message));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    });
    ns.registerMessage = function(type, sender, callback) {
      if (!(type in callbacks)) {
        callbacks[type] = [];
      }
      return callbacks[type].push([sender, callback]);
    };
    return ns.unregisterMessage = function(type, sender) {
      if (type in callbacks) {
        return callbacks[type] = $.grep(callbacks[type], function(item) {
          return item[0] !== sender;
        });
      }
    };
  });

}).call(this);
(function() {
  var $,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  $ = uploadcare.jQuery;

  uploadcare.namespace('utils', function(ns) {
    var pipeTuples;
    ns.unique = function(arr) {
      var item, result, _i, _len;
      result = [];
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        item = arr[_i];
        if (__indexOf.call(result, item) < 0) {
          result.push(item);
        }
      }
      return result;
    };
    ns.defer = function(fn) {
      return setTimeout(fn, 0);
    };
    ns.gcd = function(a, b) {
      var c;
      while (b) {
        c = a % b;
        a = b;
        b = c;
      }
      return a;
    };
    ns.once = function(fn) {
      var called, result;
      called = false;
      result = null;
      return function() {
        if (!called) {
          result = fn.apply(this, arguments);
          called = true;
        }
        return result;
      };
    };
    ns.wrapToPromise = function(value) {
      return $.Deferred().resolve(value).promise();
    };
    ns.then = function(pr, doneFilter, failFilter, progressFilter) {
      var compose, df;
      df = $.Deferred();
      compose = function(fn1, fn2) {
        if (fn1 && fn2) {
          return function() {
            return fn2.call(this, fn1.apply(this, arguments));
          };
        } else {
          return fn1 || fn2;
        }
      };
      pr.then(compose(doneFilter, df.resolve), compose(failFilter, df.reject), compose(progressFilter, df.notify));
      return df.promise();
    };
    ns.bindAll = function(source, methods) {
      var target;
      target = {};
      $.each(methods, function(i, method) {
        var fn;
        fn = source[method];
        if ($.isFunction(fn)) {
          return target[method] = function() {
            var result;
            result = fn.apply(source, arguments);
            if (result === source) {
              return target;
            } else {
              return result;
            }
          };
        } else {
          return target[method] = fn;
        }
      });
      return target;
    };
    ns.upperCase = function(s) {
      return s.replace(/([A-Z])/g, '_$1').toUpperCase();
    };
    ns.publicCallbacks = function(callbacks) {
      var result;
      result = callbacks.add;
      result.add = callbacks.add;
      result.remove = callbacks.remove;
      return result;
    };
    ns.uuid = function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r, v;
        r = Math.random() * 16 | 0;
        v = c === 'x' ? r : r & 3 | 8;
        return v.toString(16);
      });
    };
    ns.splitUrlRegex = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)\??([^\#]*)\#?(.*)$/;
    ns.uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i;
    ns.groupIdRegex = new RegExp("" + ns.uuidRegex.source + "~[0-9]+", 'i');
    ns.cdnUrlRegex = new RegExp("^/?(" + ns.uuidRegex.source + ")(?:/(-/(?:[^/]+/)+)?([^/]*))?$", 'i');
    ns.splitCdnUrl = function(url) {
      return ns.cdnUrlRegex.exec(ns.splitUrlRegex.exec(url)[3]);
    };
    ns.escapeRegExp = function(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    ns.globRegexp = function(str, flags) {
      var parts;
      if (flags == null) {
        flags = 'i';
      }
      parts = $.map(str.split('*'), ns.escapeRegExp);
      return new RegExp("^" + parts.join('.+') + "$", flags);
    };
    ns.normalizeUrl = function(url) {
      var scheme;
      scheme = document.location.protocol;
      if (scheme !== 'http:') {
        scheme = 'https:';
      }
      return url.replace(/^\/\//, scheme + '//').replace(/\/+$/, '');
    };
    ns.fitText = function(text, max) {
      var head, tail;
      if (text.length > max) {
        head = Math.ceil((max - 3) / 2);
        tail = Math.floor((max - 3) / 2);
        return text.slice(0, head) + '...' + text.slice(-tail);
      } else {
        return text;
      }
    };
    ns.fitSizeInCdnLimit = function(objSize) {
      return ns.fitSize(objSize, [2048, 2048]);
    };
    ns.fitSize = function(objSize, boxSize, upscale) {
      var heightRation, widthRatio;
      if (objSize[0] > boxSize[0] || objSize[1] > boxSize[1] || upscale) {
        widthRatio = boxSize[0] / objSize[0];
        heightRation = boxSize[1] / objSize[1];
        if (!boxSize[0] || (boxSize[1] && widthRatio > heightRation)) {
          return [Math.round(heightRation * objSize[0]), boxSize[1]];
        } else {
          return [boxSize[0], Math.round(widthRatio * objSize[1])];
        }
      } else {
        return objSize.slice();
      }
    };
    ns.applyCropCoordsToInfo = function(info, crop, size, coords) {
      var downscale, h, modifiers, prefered, upscale, w, wholeImage;
      w = coords.width, h = coords.height;
      prefered = crop.preferedSize;
      modifiers = '';
      wholeImage = w === size[0] && h === size[1];
      if (!wholeImage) {
        modifiers += "-/crop/" + w + "x" + h + "/" + coords.left + "," + coords.top + "/";
      }
      downscale = crop.downscale && (w > prefered[0] || h > prefered[1]);
      upscale = crop.upscale && (w < prefered[0] || h < prefered[1]);
      if (downscale || upscale) {
        coords.sw = prefered[0], coords.sh = prefered[1];
        modifiers += "-/resize/" + (prefered.join('x')) + "/";
      } else if (!wholeImage) {
        modifiers += "-/preview/";
      }
      info = $.extend({}, info);
      info.cdnUrlModifiers = modifiers;
      info.cdnUrl = "" + info.originalUrl + (modifiers || '');
      info.crop = coords;
      return info;
    };
    ns.fileInput = function(container, settings, fn) {
      var accept, input, run;
      input = null;
      accept = settings.inputAcceptTypes;
      if (accept === '') {
        accept = settings.imagesOnly ? 'image/*' : null;
      }
      (run = function() {
        input = (settings.multiple ? $('<input type="file" multiple>') : $('<input type="file">')).attr('accept', accept).css({
          position: 'absolute',
          top: 0,
          opacity: 0,
          margin: 0,
          padding: 0,
          width: 'auto',
          height: 'auto',
          cursor: container.css('cursor')
        }).on('change', function() {
          fn(this);
          $(this).hide();
          return run();
        });
        return container.append(input);
      })();
      return container.css({
        position: 'relative',
        overflow: 'hidden'
      }).mousemove(function(e) {
        var left, top, width, _ref;
        _ref = $(this).offset(), left = _ref.left, top = _ref.top;
        width = input.width();
        return input.css({
          left: e.pageX - left - width + 10,
          top: e.pageY - top - 10
        });
      });
    };
    ns.fileSelectDialog = function(container, settings, fn, attributes) {
      var accept;
      if (attributes == null) {
        attributes = {};
      }
      accept = settings.inputAcceptTypes;
      if (accept === '') {
        accept = settings.imagesOnly ? 'image/*' : null;
      }
      return $(settings.multiple ? '<input type="file" multiple>' : '<input type="file">').attr('accept', accept).attr(attributes).css({
        position: 'fixed',
        bottom: 0,
        opacity: 0
      }).on('change', function() {
        fn(this);
        return $(this).remove();
      }).appendTo(container).focus().click().hide();
    };
    ns.fileSizeLabels = 'B KB MB GB TB PB EB ZB YB'.split(' ');
    ns.readableFileSize = function(value, onNaN, prefix, postfix) {
      var digits, fixedTo, i, threshold;
      if (onNaN == null) {
        onNaN = '';
      }
      if (prefix == null) {
        prefix = '';
      }
      if (postfix == null) {
        postfix = '';
      }
      value = parseInt(value, 10);
      if (isNaN(value)) {
        return onNaN;
      }
      digits = 2;
      i = 0;
      threshold = 1000 - 5 * Math.pow(10, 2 - Math.max(digits, 3));
      while (value > threshold && i < ns.fileSizeLabels.length - 1) {
        i++;
        value /= 1024;
      }
      value += 0.000000000000001;
      fixedTo = Math.max(0, digits - Math.floor(value).toFixed(0).length);
      value = Number(value.toFixed(fixedTo));
      return "" + prefix + value + " " + ns.fileSizeLabels[i] + postfix;
    };
    ns.ajaxDefaults = {
      dataType: 'json',
      crossDomain: true,
      cache: false
    };
    ns.jsonp = function(url, type, data, settings) {
      if (settings == null) {
        settings = {};
      }
      return $.ajax($.extend({
        url: url,
        type: type,
        data: data
      }, settings, ns.ajaxDefaults)).then(function(data) {
        var text;
        if (data.error) {
          text = data.error.content || data.error;
          return $.Deferred().reject(text);
        } else {
          return data;
        }
      }, function(_, textStatus, errorThrown) {
        var text;
        text = "" + textStatus + " (" + errorThrown + ")";
        ns.warn("JSONP unexpected error: " + text + " while loading " + url);
        return text;
      });
    };
    ns.canvasToBlob = function(canvas, type, quality, callback) {
      var arr, binStr, dataURL, i, _i, _ref;
      if (HTMLCanvasElement.prototype.toBlob) {
        return canvas.toBlob(callback, type, quality);
      }
      dataURL = canvas.toDataURL(type, quality);
      dataURL = dataURL.split(',');
      binStr = atob(dataURL[1]);
      arr = new Uint8Array(binStr.length);
      for (i = _i = 0, _ref = binStr.length; _i < _ref; i = _i += 1) {
        arr[i] = binStr.charCodeAt(i);
      }
      return callback(new Blob([arr], {
        type: /:(.+\/.+);/.exec(dataURL[0])[1]
      }));
    };
    ns.taskRunner = function(capacity) {
      var queue, release, run, running;
      running = 0;
      queue = [];
      release = function() {
        var task;
        if (queue.length) {
          task = queue.shift();
          return ns.defer(function() {
            return task(release);
          });
        } else {
          return running -= 1;
        }
      };
      return run = function(task) {
        if (!capacity || running < capacity) {
          running += 1;
          return ns.defer(function() {
            return task(release);
          });
        } else {
          return queue.push(task);
        }
      };
    };
    pipeTuples = [["notify", "progress", 2], ["resolve", "done", 0], ["reject", "fail", 1]];
    return ns.fixedPipe = function() {
      var fns, promise;
      promise = arguments[0], fns = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return $.Deferred(function(newDefer) {
        return $.each(pipeTuples, function(i, tuple) {
          var fn;
          fn = $.isFunction(fns[tuple[2]]) && fns[tuple[2]];
          return promise[tuple[1]](function() {
            var returned;
            returned = fn && fn.apply(this, arguments);
            if (returned && $.isFunction(returned.promise)) {
              return returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
            } else {
              return newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
            }
          });
        });
      }).promise();
    };
  });

}).call(this);
(function() {
  var $, expose, utils, version,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  expose = uploadcare.expose, utils = uploadcare.utils, $ = uploadcare.jQuery, version = uploadcare.version;

  uploadcare.namespace('settings', function(ns) {
    var arrayOptions, constrainOptions, constraints, defaultPreviewUrlCallback, defaults, flagOptions, intOptions, integration, integrationToUserAgent, normalize, parseCrop, parseShrink, presets, script, str2arr, transformOptions, transforms, urlOptions;
    defaults = {
      live: true,
      manualStart: false,
      locale: null,
      localePluralize: null,
      localeTranslations: null,
      systemDialog: false,
      crop: false,
      previewStep: false,
      imagesOnly: false,
      clearable: false,
      multiple: false,
      multipleMax: 1000,
      multipleMin: 1,
      multipleMaxStrict: false,
      imageShrink: false,
      pathValue: true,
      tabs: 'file camera url facebook gdrive gphotos dropbox instagram evernote flickr onedrive',
      preferredTypes: '',
      inputAcceptTypes: '',
      doNotStore: false,
      publicKey: null,
      secureSignature: '',
      secureExpire: '',
      pusherKey: '79ae88bd931ea68464d9',
      cdnBase: 'https://ucarecdn.com',
      urlBase: 'https://upload.uploadcare.com',
      socialBase: 'https://social.uploadcare.com',
      previewProxy: null,
      previewUrlCallback: null,
      imagePreviewMaxSize: 25 * 1024 * 1024,
      multipartMinSize: 10 * 1024 * 1024,
      multipartPartSize: 5 * 1024 * 1024,
      multipartMinLastPartSize: 1024 * 1024,
      multipartConcurrency: 4,
      multipartMaxAttempts: 3,
      parallelDirectUploads: 10,
      passWindowOpen: false,
      audioBitsPerSecond: null,
      videoBitsPerSecond: null,
      scriptBase: "//ucarecdn.com/widget/" + uploadcare.version + "/uploadcare/",
      debugUploads: false,
      integration: ''
    };
    transforms = {
      multipleMax: {
        from: 0,
        to: 1000
      }
    };
    constraints = {
      multipleMax: {
        min: 1,
        max: 1000
      }
    };
    presets = {
      tabs: {
        all: 'file camera url facebook gdrive gphotos dropbox instagram evernote flickr onedrive box vk huddle',
        "default": defaults.tabs
      }
    };
    script = document.currentScript || (function() {
      var scripts;
      scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();
    integration = $(script).data('integration');
    if (integration !== void 0) {
      defaults = $.extend(defaults, {
        integration: integration
      });
    }
    str2arr = function(value) {
      if (!$.isArray(value)) {
        value = $.trim(value);
        value = value ? value.split(' ') : [];
      }
      return value;
    };
    arrayOptions = function(settings, keys) {
      var item, key, source, value, _i, _j, _len, _len1;
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        value = source = str2arr(settings[key]);
        if (presets.hasOwnProperty(key)) {
          value = [];
          for (_j = 0, _len1 = source.length; _j < _len1; _j++) {
            item = source[_j];
            if (presets[key].hasOwnProperty(item)) {
              value = value.concat(str2arr(presets[key][item]));
            } else {
              value.push(item);
            }
          }
        }
        settings[key] = utils.unique(value);
      }
      return settings;
    };
    urlOptions = function(settings, keys) {
      var key, _i, _len;
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        if (settings[key] != null) {
          settings[key] = utils.normalizeUrl(settings[key]);
        }
      }
      return settings;
    };
    flagOptions = function(settings, keys) {
      var key, value, _i, _len;
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        if (!(settings[key] != null)) {
          continue;
        }
        value = settings[key];
        if (typeof value === 'string') {
          value = $.trim(value).toLowerCase();
          settings[key] = !(value === 'false' || value === 'disabled');
        } else {
          settings[key] = !!value;
        }
      }
      return settings;
    };
    intOptions = function(settings, keys) {
      var key, _i, _len;
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        if (settings[key] != null) {
          settings[key] = parseInt(settings[key]);
        }
      }
      return settings;
    };
    integrationToUserAgent = function(settings) {
      settings['_userAgent'] = "UploadcareWidget/" + version + "/" + settings['publicKey'] + " (JavaScript" + (settings['integration'] ? "; " + settings['integration'] : '') + ")";
      return settings;
    };
    transformOptions = function(settings, transforms) {
      var key, transform;
      for (key in transforms) {
        transform = transforms[key];
        if (settings[key] != null) {
          if (settings[key] === transform.from) {
            settings[key] = transform.to;
          }
        }
      }
      return settings;
    };
    constrainOptions = function(settings, constraints) {
      var key, max, min, _ref;
      for (key in constraints) {
        _ref = constraints[key], min = _ref.min, max = _ref.max;
        if (settings[key] != null) {
          settings[key] = Math.min(Math.max(settings[key], min), max);
        }
      }
      return settings;
    };
    parseCrop = function(val) {
      var ratio, reRatio;
      reRatio = /^([0-9]+)([x:])([0-9]+)\s*(|upscale|minimum)$/i;
      ratio = reRatio.exec($.trim(val.toLowerCase())) || [];
      return {
        downscale: ratio[2] === 'x',
        upscale: !!ratio[4],
        notLess: ratio[4] === 'minimum',
        preferedSize: ratio.length ? [+ratio[1], +ratio[3]] : void 0
      };
    };
    parseShrink = function(val) {
      var reShrink, shrink, size;
      reShrink = /^([0-9]+)x([0-9]+)(?:\s+(\d{1,2}|100)%)?$/i;
      shrink = reShrink.exec($.trim(val.toLowerCase())) || [];
      if (!shrink.length) {
        return false;
      }
      size = shrink[1] * shrink[2];
      if (size > 5000000) {
        utils.warnOnce("Shrinked size can not be larger than 5MP. " + ("You have set " + shrink[1] + "x" + shrink[2] + " (") + ("" + (Math.ceil(size / 1000 / 100) / 10) + "MP)."));
        return false;
      }
      return {
        quality: shrink[3] ? shrink[3] / 100 : void 0,
        size: size
      };
    };
    defaultPreviewUrlCallback = function(url, info) {
      var addAmpersand, addName, addQuery, queryPart;
      if (!this.previewProxy) {
        return url;
      }
      addQuery = !/\?/.test(this.previewProxy);
      addName = addQuery || !/\=$/.test(this.previewProxy);
      addAmpersand = !addQuery && !/[\&\?\=]$/.test(this.previewProxy);
      queryPart = encodeURIComponent(url);
      if (addName) {
        queryPart = 'url=' + queryPart;
      }
      if (addAmpersand) {
        queryPart = '&' + queryPart;
      }
      if (addQuery) {
        queryPart = '?' + queryPart;
      }
      return this.previewProxy + queryPart;
    };
    normalize = function(settings) {
      var skydriveIndex;
      arrayOptions(settings, ['tabs', 'preferredTypes']);
      urlOptions(settings, ['cdnBase', 'socialBase', 'urlBase', 'scriptBase']);
      flagOptions(settings, ['doNotStore', 'imagesOnly', 'multiple', 'clearable', 'pathValue', 'previewStep', 'systemDialog', 'debugUploads', 'multipleMaxStrict']);
      intOptions(settings, ['multipleMax', 'multipleMin', 'multipartMinSize', 'multipartPartSize', 'multipartMinLastPartSize', 'multipartConcurrency', 'multipartMaxAttempts', 'parallelDirectUploads']);
      transformOptions(settings, transforms);
      constrainOptions(settings, constraints);
      integrationToUserAgent(settings);
      if (settings.crop !== false && !$.isArray(settings.crop)) {
        if (/^(disabled?|false|null)$/i.test(settings.crop)) {
          settings.crop = false;
        } else if ($.isPlainObject(settings.crop)) {
          settings.crop = [settings.crop];
        } else {
          settings.crop = $.map(('' + settings.crop).split(','), parseCrop);
        }
      }
      if (settings.imageShrink && !$.isPlainObject(settings.imageShrink)) {
        settings.imageShrink = parseShrink(settings.imageShrink);
      }
      if (settings.crop || settings.multiple) {
        settings.previewStep = true;
      }
      if (!utils.abilities.sendFileAPI) {
        settings.systemDialog = false;
      }
      if (settings.validators) {
        settings.validators = settings.validators.slice();
      }
      if (settings.previewProxy && !settings.previewUrlCallback) {
        settings.previewUrlCallback = defaultPreviewUrlCallback;
      }
      skydriveIndex = settings.tabs.indexOf('skydrive');
      if (skydriveIndex !== -1) {
        settings.tabs[skydriveIndex] = 'onedrive';
      }
      return settings;
    };
    expose('defaults', $.extend({
      allTabs: presets.tabs.all
    }, defaults));
    ns.globals = function() {
      var key, scriptSettings, value;
      scriptSettings = {};
      for (key in defaults) {
        value = window["UPLOADCARE_" + (utils.upperCase(key))];
        if (value !== void 0) {
          scriptSettings[key] = value;
        }
      }
      return scriptSettings;
    };
    ns.common = utils.once(function(settings, ignoreGlobals) {
      var result;
      if (!ignoreGlobals) {
        defaults = $.extend(defaults, ns.globals());
      }
      result = normalize($.extend(defaults, settings || {}));
      ns.waitForSettings.fire(result);
      return result;
    });
    ns.build = function(settings) {
      var result;
      result = $.extend({}, ns.common());
      if (!$.isEmptyObject(settings)) {
        result = normalize($.extend(result, settings));
      }
      return result;
    };
    ns.waitForSettings = $.Callbacks("once memory");
    ns.CssCollector = (function() {
      function CssCollector() {
        this.urls = [];
        this.styles = [];
      }

      CssCollector.prototype.addUrl = function(url) {
        if (!/^https?:\/\//i.test(url)) {
          throw new Error('Embedded urls should be absolute. ' + url);
        }
        if (!(__indexOf.call(this.urls, url) >= 0)) {
          return this.urls.push(url);
        }
      };

      CssCollector.prototype.addStyle = function(style) {
        return this.styles.push(style);
      };

      return CssCollector;

    })();
    uploadcare.tabsCss = new ns.CssCollector;
    return defaults['_emptyKeyText'] = "<div class=\"uploadcare--tab__content\">\n<div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title\">Hello!</div>\n<div class=\"uploadcare--text\">Your <a class=\"uploadcare--link\" href=\"https://uploadcare.com/dashboard/\">public key</a> is not set.</div>\n<div class=\"uploadcare--text\">Add this to the &lt;head&gt; tag to start uploading files:</div>\n<div class=\"uploadcare--text uploadcare--text_pre\">&lt;script&gt;\nUPLOADCARE_PUBLIC_KEY = 'your_public_key';\n&lt;/script&gt;</div>\n</div>";
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.en = {
      uploading: 'Uploading... Please wait.',
      loadingInfo: 'Loading info...',
      errors: {
        "default": 'Error',
        baddata: 'Incorrect value',
        size: 'File too big',
        upload: 'Can’t upload',
        user: 'Upload canceled',
        info: 'Can’t load info',
        image: 'Only images allowed',
        createGroup: 'Can’t create file group',
        deleted: 'File was deleted'
      },
      draghere: 'Drop a file here',
      file: {
        one: '%1 file',
        other: '%1 files'
      },
      buttons: {
        cancel: 'Cancel',
        remove: 'Remove',
        choose: {
          files: {
            one: 'Choose a file',
            other: 'Choose files'
          },
          images: {
            one: 'Choose an image',
            other: 'Choose images'
          }
        }
      },
      dialog: {
        close: 'Close',
        openMenu: 'Open menu',
        done: 'Done',
        showFiles: 'Show files',
        tabs: {
          names: {
            'empty-pubkey': 'Welcome',
            preview: 'Preview',
            file: 'Local Files',
            url: 'Direct Link',
            camera: 'Camera',
            facebook: 'Facebook',
            dropbox: 'Dropbox',
            gdrive: 'Google Drive',
            gphotos: 'Google Photos',
            instagram: 'Instagram',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'drag & drop<br>any files',
            nodrop: 'Upload files from your&nbsp;computer',
            cloudsTip: 'Cloud storages<br>and social networks',
            or: 'or',
            button: 'Choose a local file',
            also: 'or choose from'
          },
          url: {
            title: 'Files from the Web',
            line1: 'Grab any file off the web.',
            line2: 'Just provide the link.',
            input: 'Paste your link here...',
            button: 'Upload'
          },
          camera: {
            title: 'File from web camera',
            capture: 'Take a photo',
            mirror: 'Mirror',
            startRecord: 'Record a video',
            stopRecord: 'Stop',
            cancelRecord: 'Cancel',
            retry: 'Request permissions again',
            pleaseAllow: {
              title: 'Please allow access to your camera',
              text: 'You have been prompted to allow camera access from this site.<br>' + 'In order to take pictures with your camera you must approve this request.'
            },
            notFound: {
              title: 'No camera detected',
              text: 'Looks like you have no camera connected to this device.'
            }
          },
          preview: {
            unknownName: 'unknown',
            change: 'Cancel',
            back: 'Back',
            done: 'Add',
            unknown: {
              title: 'Uploading... Please wait for a preview.',
              done: 'Skip preview and accept'
            },
            regular: {
              title: 'Add this file?',
              line1: 'You are about to add the file above.',
              line2: 'Please confirm.'
            },
            image: {
              title: 'Add this image?',
              change: 'Cancel'
            },
            crop: {
              title: 'Crop and add this image',
              done: 'Done',
              free: 'free'
            },
            video: {
              title: 'Add this video?',
              change: 'Cancel'
            },
            error: {
              "default": {
                title: 'Oops!',
                text: 'Something went wrong during the upload.',
                back: 'Please try again'
              },
              image: {
                title: 'Only image files are accepted.',
                text: 'Please try again with another file.',
                back: 'Choose image'
              },
              size: {
                title: 'The file you selected exceeds the limit.',
                text: 'Please try again with another file.'
              },
              loadImage: {
                title: 'Error',
                text: 'Can’t load image'
              }
            },
            multiple: {
              title: 'You’ve chosen %files%.',
              question: 'Add %files%?',
              tooManyFiles: 'You’ve chosen too many files. %max% is maximum.',
              tooFewFiles: 'You’ve chosen %files%. At least %min% required.',
              clear: 'Remove all',
              done: 'Add',
              file: {
                preview: 'Preview %file%',
                remove: 'Remove %file%'
              }
            }
          }
        },
        footer: {
          text: 'powered by',
          link: 'uploadcare'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.en = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  var $, s, utils;

  utils = uploadcare.utils, s = uploadcare.settings, $ = uploadcare.jQuery;

  uploadcare.namespace('locale', function(ns) {
    var build, defaultLang, defaults, translate, _build;
    defaultLang = 'en';
    defaults = {
      lang: defaultLang,
      translations: ns.translations[defaultLang],
      pluralize: ns.pluralize[defaultLang]
    };
    _build = function(settings) {
      var lang, pluralize, translations;
      lang = settings.locale || defaults.lang;
      translations = $.extend(true, {}, ns.translations[lang], settings.localeTranslations);
      pluralize = $.isFunction(settings.localePluralize) ? settings.localePluralize : ns.pluralize[lang];
      return {
        lang: lang,
        translations: translations,
        pluralize: pluralize
      };
    };
    build = utils.once(function() {
      return _build(s.build());
    });
    ns.rebuild = function(settings) {
      var result;
      result = _build(s.build(settings));
      return build = function() {
        return result;
      };
    };
    translate = function(key, node) {
      var path, subkey, _i, _len;
      path = key.split('.');
      for (_i = 0, _len = path.length; _i < _len; _i++) {
        subkey = path[_i];
        if (node == null) {
          return null;
        }
        node = node[subkey];
      }
      return node;
    };
    return ns.t = function(key, n) {
      var locale, value, _ref;
      locale = build();
      value = translate(key, locale.translations);
      if ((value == null) && locale.lang !== defaults.lang) {
        locale = defaults;
        value = translate(key, locale.translations);
      }
      if (n != null) {
        if (locale.pluralize != null) {
          value = ((_ref = value[locale.pluralize(n)]) != null ? _ref.replace('%1', n) : void 0) || n;
        } else {
          value = '';
        }
      }
      return value || '';
    };
  });

}).call(this);
(function() {
  var $, locale, utils;

  locale = uploadcare.locale, utils = uploadcare.utils, $ = uploadcare.jQuery;

  uploadcare.namespace('templates', function(ns) {
    ns.JST = {};
    return ns.tpl = function(key, ctx) {
      var fn;
      if (ctx == null) {
        ctx = {};
      }
      fn = ns.JST[key];
      if (fn != null) {
        return fn($.extend({
          t: locale.t,
          utils: utils,
          uploadcare: uploadcare
        }, ctx));
      } else {
        return '';
      }
    };
  });

}).call(this);
uploadcare.templates.JST["dialog"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--dialog">\n  <div class="uploadcare--dialog__container">\n    <button type="button" title="', ('' + __scope.t('dialog.close')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--dialog__close">\n      <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n        <use xlink:href="#uploadcare--icon-close"></use>\n      </svg>\n    </button>\n    <div class="uploadcare--dialog__placeholder"></div>\n  </div>\n  <div class="uploadcare--powered-by uploadcare--dialog__powered-by">\n    ', ('' + __scope.t('dialog.footer.text')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/', ('' + __scope.uploadcare.version).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '/"\n       target="_blank">\n      <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\n      ', ('' + __scope.t('dialog.footer.link')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </a>\n  </div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["dialog__panel"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--panel">\n  <div class="uploadcare--menu uploadcare--panel__menu">\n    <button type="button" title="', ('' + __scope.t('dialog.openMenu')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--menu__toggle">\n      <svg role="presentation" width="32" height="32"\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_menu">\n        <use xlink:href="#uploadcare--icon-menu"></use>\n      </svg>\n      <svg role="presentation" width="32" height="32"\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_back">\n        <use xlink:href="#uploadcare--icon-back"></use>\n      </svg>\n    </button>\n    <div class="uploadcare--menu__items"></div>\n  </div>\n\n  <div class="uploadcare--panel__content">\n\n    <div class="uploadcare--footer uploadcare--panel__footer">\n      <div class="uploadcare--footer__additions uploadcare--panel__message"></div>\n\n      <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--panel__show-files">\n        ', ('' + __scope.t('dialog.showFiles')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), ' <div class="uploadcare--panel__file-counter"></div>\n      </button>\n\n      <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--panel__done">\n          ', ('' + __scope.t('dialog.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n      </button>\n    </div>\n\n    <div class="uploadcare--powered-by uploadcare--panel__powered-by">\n        ', ('' + __scope.t('dialog.footer.text')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n      <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/', ('' + __scope.uploadcare.version).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '/"\n         target="_blank">\n        <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\n          ', ('' + __scope.t('dialog.footer.link')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n      </a>\n    </div>\n  </div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["icons"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<svg width="0" height="0" style="position:absolute"><symbol viewBox="0 0 32 32" id="uploadcare--icon-back"><path d="M21.132 9.06a1.5 1.5 0 0 0-2.122-2.12L9.88 16.07l9.06 9.061a1.5 1.5 0 1 0 2.122-2.121l-6.94-6.94 7.01-7.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-box"><path d="M4.962 9C4.385 9 4 9.384 4 9.96v8.243C4 20.793 6.213 23 8.811 23c1.829 0 3.464-1.043 4.33-2.578.866 1.535 2.406 2.578 4.33 2.578 2.695 0 4.812-2.206 4.812-4.797 0-2.686-2.117-4.886-4.811-4.886-1.829 0-3.465 1.043-4.33 2.578-.77-1.535-2.406-2.578-4.33-2.578a4.957 4.957 0 0 0-2.887.96V9.958c0-.48-.482-.959-.963-.959zm17.08 4.257a.841.841 0 0 0-.33.15c-.385.288-.5.965-.211 1.349l2.526 3.357-2.526 3.358c-.289.384-.174 1.061.21 1.35.385.287 1.065.173 1.354-.21l2.105-2.879 2.105 2.878c.288.384.968.498 1.353.21.385-.288.499-.965.21-1.349l-2.526-3.358 2.526-3.357c.289-.384.175-1.061-.21-1.35-.385-.287-1.065-.203-1.353.18l-2.105 2.879-2.105-2.878c-.217-.288-.657-.406-1.023-.33zm-13.23 2.068c1.539 0 2.886 1.344 2.886 2.878.096 1.535-1.25 2.878-2.887 2.878a2.89 2.89 0 0 1-2.886-2.878c0-1.63 1.347-2.878 2.886-2.878zm8.66 0a2.89 2.89 0 0 1 2.886 2.878c0 1.535-1.347 2.878-2.886 2.878a2.89 2.89 0 0 1-2.887-2.878c0-1.63 1.347-2.878 2.887-2.878z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-camera"><path d="M21 10h3c1.653 0 3 1.343 3 3v9c0 1.656-1.344 3-3.001 3H8A3 3 0 0 1 5 22v-9a3 3 0 0 1 3-3h3v-.999C11 7.901 11.895 7 13 7h6c1.113 0 2 .896 2 2.001V10zm-5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-close"><path d="M10.06 7.94a1.5 1.5 0 0 0-2.12 2.12L13.878 16l-5.94 5.94a1.5 1.5 0 0 0 2.122 2.12L16 18.122l5.94 5.94a1.5 1.5 0 0 0 2.12-2.122L18.122 16l5.94-5.94a1.5 1.5 0 0 0-2.122-2.12L16 13.878l-5.94-5.94z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-crop-free"><path d="M8 12a2.004 2.004 0 0 1-2-2.01V8.01C6 6.897 6.893 6 8.01 6h1.98c1.109 0 2.005.888 2.01 2h8c.005-1.107.896-2 2.01-2h1.98C25.103 6 26 6.893 26 8.01v1.98A2.004 2.004 0 0 1 24 12v8c1.107.005 2 .896 2 2.01v1.98c0 1.112-.893 2.01-2.01 2.01h-1.98A2.004 2.004 0 0 1 20 24h-8a2.004 2.004 0 0 1-2.01 2H8.01A2.004 2.004 0 0 1 6 23.99v-1.98c0-1.109.888-2.005 2-2.01v-8zm2 0v8a2.004 2.004 0 0 1 2 2h8a2.004 2.004 0 0 1 2-2v-8a2.004 2.004 0 0 1-2-2h-8a2.004 2.004 0 0 1-2 2zm12 10.01v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01h-1.98c-.01 0-.01 0-.01.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C24 8 24 8 23.99 8h-1.98C22 8 22 8 22 8.01zm-14 14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01H8.01C8 22 8 22 8 22.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C10 8 10 8 9.99 8H8.01C8 8 8 8 8 8.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-dropbox"><path d="M9.5 5L16 9.141l-6.5 4.141L3 9.141 9.5 5zm13 0L29 9.141l-6.5 4.141L16 9.141 22.5 5zM3 17.423l6.5-4.141 6.5 4.141-6.5 4.141L3 17.423zm19.5-4.141l6.5 4.141-6.5 4.141-6.5-4.141 6.5-4.141zm-13 9.662l6.5-4.14 6.5 4.14-6.5 4.141-6.5-4.14z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-empty-pubkey"><path d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-error"><path d="M18.122 23.93V21a.583.583 0 0 0-.179-.434.585.585 0 0 0-.423-.175h-2.616a.585.585 0 0 0-.424.175.583.583 0 0 0-.179.434v2.93c0 .172.06.316.18.433.118.117.26.175.423.175h2.616a.585.585 0 0 0 .423-.175.583.583 0 0 0 .18-.434zm-.037-6.326l.339-9.05a.404.404 0 0 0-.189-.351c-.163-.135-.313-.203-.452-.203H14.64c-.138 0-.288.068-.452.203-.125.086-.188.215-.188.388l.32 9.013c0 .123.063.224.188.304.126.08.277.12.452.12h2.484c.176 0 .324-.04.443-.12a.41.41 0 0 0 .198-.304z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-evernote"><path d="M7.998 8.648h2.245a.233.233 0 0 0 .232-.233s-.028-1.931-.028-2.468v-.006c0-.441.093-.825.253-1.148l.077-.144a.05.05 0 0 0-.026.014l-4.359 4.34a.05.05 0 0 0-.016.025c.09-.044.213-.106.23-.113.38-.172.84-.267 1.392-.267M24.196 6.56c-.553-.2-1.675-.408-3.084-.575-1.134-.134-2.467-.123-3.272-.098-.097-.665-.56-1.272-1.08-1.482-1.384-.56-3.523-.424-4.071-.27-.437.123-.92.373-1.188.76-.18.258-.297.59-.298 1.051 0 .262.007.878.014 1.426.006.548.014 1.04.014 1.043a.887.887 0 0 1-.884.888H8.103c-.479 0-.845.08-1.124.208-.28.127-.478.3-.628.503-.3.404-.352.902-.351 1.411 0 0 .004.416.104 1.22.083.622.756 4.971 1.394 6.294.248.514.413.73.9.956 1.083.466 3.559.984 4.72 1.133 1.158.148 1.885.46 2.318-.451.002-.003.087-.227.204-.557.377-1.144.43-2.16.43-2.894 0-.075.108-.078.108 0 0 .519-.098 2.354 1.283 2.847.545.194 1.676.367 2.826.502 1.039.12 1.793.53 1.793 3.208 0 1.628-.34 1.851-2.122 1.851-1.444 0-1.994.038-1.994-1.113 0-.932.917-.834 1.596-.834.304 0 .083-.226.083-.8 0-.572.357-.902.02-.91-2.35-.066-3.733-.003-3.733 2.947 0 2.679 1.021 3.176 4.357 3.176 2.614 0 3.536-.086 4.616-3.45.213-.663.73-2.69 1.043-6.092.197-2.15-.187-8.644-.491-10.282-.178-.958-.746-1.43-1.259-1.616zm-3.3 8.792a4.75 4.75 0 0 0-.923.056c.081-.66.353-1.473 1.316-1.439 1.066.037 1.216 1.049 1.22 1.734-.45-.201-1.006-.33-1.613-.35"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-facebook"><path fill-rule="evenodd" d="M24.897 6H7.103C6.494 6 6 6.494 6 7.103v17.794C6 25.506 6.494 26 7.103 26h9.587v-7.734h-2.604v-3.028h2.604V13.01c0-2.582 1.579-3.99 3.882-3.99.777-.001 1.552.038 2.325.118v2.7H21.31c-1.255 0-1.5.593-1.5 1.469v1.927h3l-.39 3.028h-2.627V26h5.104c.609 0 1.103-.494 1.103-1.103V7.103C26 6.494 25.506 6 24.897 6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-file"><path d="M19 6l5 5h-4c-.556 0-1-.448-1-1V6zm5 7v11.192c0 .995-.808 1.808-1.804 1.808H9.804A1.808 1.808 0 0 1 8 24.2V7.74C8 6.602 8.627 6 9.778 6H17v4.994c0 1.12.898 2.006 2.006 2.006H24z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-flickr"><path d="M11 20c-2.212 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 0 8zm10.001 0a4 4 0 1 1-.002-8 4 4 0 0 1 .002 8z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gdrive"><path d="M19.461 6l7.109 12h-7.004L12.539 6h6.922zm-9.27 19l3.467-6H27l-3.466 6H10.192zM5 18.841l6.618-11.36 3.566 5.929-6.722 11.36L5 18.84z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gphotos"><path d="M8.797 9.5l-5.632 5.841c-.064.07-.165.228-.165.33 0 .202.127.329.33.329h8.869c1.444 0 2.501-1.09 2.501-2.534V9.5H8.797zM28.67 16H19.8c-1.444 0-2.501 1.09-2.501 2.534V22.5h5.903l5.632-5.841c.064-.07.165-.228.165-.33 0-.202-.127-.329-.33-.329zM16.659 3.165C16.589 3.1 16.43 3 16.329 3c-.202 0-.329.127-.329.33v8.869c0 1.444 1.09 2.501 2.534 2.501H22.5V8.797l-5.841-5.632zM13.466 17.3H9.5v5.903l5.841 5.632c.07.064.228.165.33.165.202 0 .329-.127.329-.33v-8.869c0-1.444-1.09-2.501-2.534-2.501z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-huddle"><path d="M13.63 14.39c.07-.102.17-.26.2-.313 1.474-2.683 6.857-2.686 8.49 1.002.43.968.67 1.97.675 3.023.008 1.978.004 3.957.002 5.936 0 1.192-.68 1.945-1.763 1.962-1.087.016-1.856-.766-1.865-1.944-.014-1.874.003-3.749-.006-5.623-.006-1.351-.654-2.388-1.719-2.793-1.775-.675-3.59.305-3.892 2.159-.122.747-.104 1.52-.114 2.281-.016 1.336-.002 2.673-.005 4.01-.003 1.125-.669 1.866-1.707 1.907-1.06.042-1.828-.668-1.922-1.78-.007-.086-.003-.173-.003-.26 0-5.31-.002-10.622.002-15.932 0-1.2.731-2.016 1.79-2.025 1.05-.01 1.832.74 1.837 1.792.01 2.013.003 4.026.005 6.04 0 .12.002.391-.005.558"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-instagram"><path d="M16 5c2.987 0 3.362.013 4.535.066 1.171.054 1.97.24 2.67.511a5.391 5.391 0 0 1 1.949 1.27 5.392 5.392 0 0 1 1.269 1.948c.272.7.457 1.499.51 2.67.054 1.173.067 1.548.067 4.535s-.013 3.362-.066 4.535c-.054 1.171-.24 1.97-.511 2.67a5.392 5.392 0 0 1-1.27 1.949 5.391 5.391 0 0 1-1.948 1.269c-.7.271-1.499.457-2.67.51-1.173.054-1.548.067-4.535.067s-3.362-.013-4.535-.066c-1.171-.054-1.97-.24-2.67-.511a5.392 5.392 0 0 1-1.949-1.27 5.391 5.391 0 0 1-1.268-1.948c-.273-.7-.458-1.499-.512-2.67C5.013 19.362 5 18.987 5 16s.013-3.362.066-4.535c.054-1.171.24-1.97.512-2.67a5.391 5.391 0 0 1 1.268-1.949 5.392 5.392 0 0 1 1.949-1.269c.7-.271 1.499-.457 2.67-.51C12.638 5.012 13.013 5 16 5zm0 1.982c-2.937 0-3.285.011-4.445.064-1.072.049-1.655.228-2.042.379-.514.2-.88.438-1.265.823a3.41 3.41 0 0 0-.823 1.264c-.15.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.072.228 1.655.379 2.043.2.513.438.88.823 1.264.385.385.751.624 1.265.823.387.15.97.33 2.042.379 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.072-.049 1.655-.228 2.042-.379.514-.2.88-.438 1.265-.823.385-.385.624-.751.823-1.264.15-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.072-.228-1.655-.379-2.043-.2-.513-.438-.88-.823-1.264a3.408 3.408 0 0 0-1.265-.823c-.387-.15-.97-.33-2.042-.379-1.16-.053-1.508-.064-4.445-.064zm0 3.37a5.649 5.649 0 1 1 0 11.297 5.649 5.649 0 0 1 0-11.298zm0 9.315a3.667 3.667 0 1 0 0-7.334 3.667 3.667 0 0 0 0 7.334zm7.192-9.539a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-menu"><path d="M7.5 10a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-more"><path d="M21 16a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-onedrive"><path d="M11.715 16.427c.584-2.413 2.699-4.177 5.209-4.177 1.483 0 2.873.621 3.878 1.7.425-.14.922-.248 1.364-.258v-.16c0-3.054-2.214-5.532-4.944-5.532-1.952 0-3.624 1.278-4.428 3.115a3.55 3.55 0 0 0-2.033-.658c-2.142 0-3.877 1.94-3.877 4.336 0 .258.028.51.068.754-1.652.167-2.946 1.9-2.946 3.79 0 .02.005.037.005.056-.001.017-.011.035-.011.052 0 .757.257 1.449.673 2.007a3.14 3.14 0 0 0 2.568 1.317h1.513a4.49 4.49 0 0 1-.477-1.987c-.001-2.138 1.476-3.93 3.438-4.355zm13.752 2.375c-.03 0-.06.01-.09.01.008-.09.026-.18.026-.273 0-1.812-1.431-3.279-3.198-3.279-.703 0-1.347.24-1.877.635-.655-1.249-1.924-2.107-3.405-2.107-2.146 0-3.885 1.784-3.885 3.984 0 .029.008.053.009.082a2.764 2.764 0 0 0-.431-.045c-1.602 0-2.898 1.33-2.898 2.973 0 .205.02.406.059.599C10.05 22.87 11.322 24 12.856 24h12.847v-.023C26.99 23.85 28 22.753 28 21.402c0-1.435-1.134-2.6-2.533-2.6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-remove"><path d="M22.142 24.009c-.078 1.1-1.044 1.991-2.15 1.991h-7.983c-1.11 0-2.073-.897-2.151-1.991l-.786-11.002A.924.924 0 0 1 10.007 12h11.986c.556 0 .975.45.935 1.007l-.786 11.002zM13 7V6c0-.556.444-1 .99-1h4.02A1 1 0 0 1 19 6v1h4c.556 0 1 .447 1 .999v1.002A.997.997 0 0 1 23 10H9c-.555 0-1-.447-1-.999V7.999A.996.996 0 0 1 9 7h4z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-uploadcare"><path fill="#ffd800" d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-url"><path d="M16 5c6.074 0 11 4.926 11 11s-4.926 11-11 11S5 22.074 5 16 9.926 5 16 5zm6.076 6.327a.992.992 0 1 0-1.403-1.403l-1.128 1.128c-1.431-.92-3.47-.768-4.697.461l-3.186 3.185a3.7 3.7 0 0 0-1.09 2.636c0 .748.22 1.46.624 2.067l-1.272 1.272a.992.992 0 1 0 1.402 1.403l1.273-1.272c.606.405 1.32.623 2.067.623.997 0 1.933-.386 2.634-1.089l3.187-3.186a3.729 3.729 0 0 0 .464-4.7l1.125-1.125zm-4.252 3.841a.982.982 0 0 0 .701-.29l.95-.95c.067.188.114.385.114.591 0 .466-.178.904-.505 1.23l-3.186 3.187c-.472.47-1.197.588-1.813.382l.793-.792a.992.992 0 1 0-1.404-1.404l-.801.802a1.752 1.752 0 0 1-.115-.59c0-.468.179-.905.506-1.232l3.186-3.186a1.736 1.736 0 0 1 1.23-.507c.207 0 .404.049.592.116l-.948.95a.992.992 0 0 0 .7 1.693z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-vk"><path d="M27.791 21.484c-.416-.767-1.212-1.708-2.386-2.824l-.038-.038c-.558-.532-.895-.882-1.037-1.06-.258-.341-.316-.686-.175-1.036.1-.264.475-.821 1.125-1.673.341-.451.612-.813.812-1.086 1.441-1.959 2.066-3.21 1.874-3.756l-.074-.127c-.05-.077-.18-.147-.387-.211-.209-.064-.475-.075-.8-.032l-3.599.025a.457.457 0 0 0-.25.007l-.163.038-.062.032-.05.039a.56.56 0 0 0-.137.134.882.882 0 0 0-.125.223 21.072 21.072 0 0 1-1.337 2.875 27.31 27.31 0 0 1-.85 1.373c-.258.388-.475.673-.65.856a4.57 4.57 0 0 1-.475.44c-.141.112-.25.158-.324.141a8.987 8.987 0 0 1-.213-.05.843.843 0 0 1-.281-.314 1.425 1.425 0 0 1-.144-.498c-.025-.2-.04-.373-.044-.518-.003-.144-.002-.349.007-.613.008-.264.012-.443.012-.536 0-.324.007-.675.019-1.054l.031-.901c.009-.222.013-.456.013-.703 0-.247-.015-.44-.044-.581a2.02 2.02 0 0 0-.131-.409.684.684 0 0 0-.256-.307 1.426 1.426 0 0 0-.419-.172c-.441-.102-1.004-.158-1.687-.166-1.55-.017-2.545.085-2.986.307a1.69 1.69 0 0 0-.475.383c-.15.187-.171.29-.063.306.5.077.854.26 1.062.55l.075.153c.059.11.117.307.175.588.059.28.096.592.113.932.041.622.041 1.154 0 1.597-.042.443-.081.788-.119 1.035a2.107 2.107 0 0 1-.169.6 2.55 2.55 0 0 1-.15.281.217.217 0 0 1-.062.064.918.918 0 0 1-.337.064c-.117 0-.259-.06-.425-.179a3.024 3.024 0 0 1-.519-.492c-.179-.208-.38-.5-.606-.875a15.385 15.385 0 0 1-.7-1.328l-.2-.37a32.156 32.156 0 0 1-.512-1.042 20.306 20.306 0 0 1-.575-1.323.84.84 0 0 0-.3-.408l-.062-.039a.85.85 0 0 0-.2-.108 1.304 1.304 0 0 0-.287-.083L4.8 9.64c-.35 0-.587.081-.712.243l-.05.077a.421.421 0 0 0-.038.204c0 .094.025.209.075.345.5 1.201 1.043 2.36 1.63 3.475C6.294 15.1 6.804 16 7.237 16.68c.433.681.875 1.324 1.325 1.929.45.604.748.992.893 1.162.146.17.26.298.344.384l.312.306c.2.205.494.45.881.735.388.285.817.566 1.287.843.471.277 1.019.503 1.644.677a5.564 5.564 0 0 0 1.824.211h1.437c.292-.026.512-.12.662-.281l.05-.064a.858.858 0 0 0 .094-.236c.029-.107.044-.224.044-.351a4.301 4.301 0 0 1 .08-.99c.063-.294.134-.516.213-.665a1.632 1.632 0 0 1 .482-.562.806.806 0 0 1 .1-.045c.2-.068.434-.002.705.199.271.2.525.447.763.74.237.295.522.625.856.99.333.367.625.64.874.818l.25.154c.167.102.384.196.65.28.266.086.5.107.7.065l3.199-.051c.316 0 .562-.054.737-.16.175-.107.279-.224.312-.351.034-.128.035-.273.007-.435a1.632 1.632 0 0 0-.088-.338 1.694 1.694 0 0 0-.082-.16z"/></symbol></svg>\n');   return __p.join(''); };;uploadcare.templates.JST["progress__text"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--progress__text-container">\n  <div class="uploadcare--progress__text"></div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["styles"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('.uploadcare--jcrop-handle{box-sizing:border-box;padding:12.5px;width:45px;height:45px;background:transparent;z-index:2147483621}@media (min-width:760px){.uploadcare--jcrop-handle{height:35px;width:35px;padding:10px}}.uploadcare--jcrop-handle:before{content:"";display:block;width:20px;height:20px;background:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2);border-radius:50%}@media (min-width:760px){.uploadcare--jcrop-handle:before{height:15px;width:15px}}.uploadcare--jcrop-handle.ord-nw{margin-top:-22.5px;margin-left:-22.5px;top:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-nw{margin-left:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-ne{margin-top:-22.5px;margin-right:-22.5px;top:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-ne{margin-right:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-se{margin-bottom:-22.5px;margin-right:-22.5px;bottom:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-se{margin-right:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-handle.ord-sw{margin-bottom:-22.5px;margin-left:-22.5px;bottom:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-sw{margin-left:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-hline{width:100%;height:1px!important;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-hline.bottom{bottom:0}.uploadcare--jcrop-vline{width:1px!important;height:100%;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-vline.right{right:0}.uploadcare--jcrop-tracker{height:100%;width:100%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uploadcare--jcrop-holder img{max-width:none;max-height:none}.uploadcare--text{margin:0 0 10px;padding:0;font-size:17.5px;line-height:25px}.uploadcare--text:empty{display:none}.uploadcare--text_muted{color:#a4a2a1}.uploadcare--text_pre{box-sizing:border-box;overflow-x:auto;padding:20px;max-width:100%;background:#e3e1e1;font-family:monospace;white-space:pre;text-align:left}.uploadcare--text_size_small{font-size:15px;line-height:20px}.uploadcare--text_size_medium{font-size:20px;font-weight:700;line-height:25px}.uploadcare--text_size_large{font-size:22px;font-weight:700;line-height:25px}.uploadcare--text_size_extra-large{font-size:35px;line-height:45px}@media (min-width:760px){.uploadcare--text_size_extra-large{font-size:42.5px;line-height:50px}}.uploadcare--icon{all:initial;color:inherit;fill:currentColor;margin:0;padding:0;max-width:100%;width:32px;height:32px;cursor:inherit}.uploadcare--link,.uploadcare--link:link,.uploadcare--link:visited{cursor:pointer;color:#157cfc;text-decoration:underline}.uploadcare--link:focus,.uploadcare--link:hover{color:#3891ff;text-decoration:none}.uploadcare--link:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--link:active{color:#0969ee}.uploadcare--button{all:initial;-ms-flex-negative:0;flex-shrink:0;display:inline-block;overflow:hidden;box-sizing:border-box;margin:0;padding:10px;width:auto;min-width:100px;height:auto;min-height:0;border-radius:6px;border:1px solid #157cfc;background:transparent;color:#157cfc;cursor:default;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-family:inherit;font-size:15px;font-weight:400;font-style:normal;line-height:20px;box-shadow:none;text-shadow:none;transition:background .3s,color .3s,border .3s}.uploadcare--button svg{pointer-events:none}.uploadcare--button:focus,.uploadcare--button:hover{background:transparent;border-color:#3891ff;color:#3891ff;font-weight:400;font-style:normal;box-shadow:none;text-shadow:none}.uploadcare--button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--button:active{border-color:#0969ee;color:#0969ee}.uploadcare--button:disabled,.uploadcare--button[aria-disabled=true]{background:transparent!important;border-color:#d4d2d2!important;color:#d4d2d2!important;cursor:not-allowed}@media (min-width:760px){.uploadcare--button{padding:10px 20px;font-size:17.5px;line-height:25px}}.uploadcare--button_icon{padding:14px;min-width:0;width:60px;height:60px}.uploadcare--button_muted{border-color:transparent!important;color:#a4a2a1;border-radius:0}.uploadcare--button_muted:focus,.uploadcare--button_muted:hover{color:#157cfc}.uploadcare--button_muted:disabled,.uploadcare--button_muted[aria-disabled=true]{border-color:transparent!important}.uploadcare--button_overlay{background:rgba(53,53,53,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:focus,.uploadcare--button_overlay:hover{background:hsla(0,0%,40%,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:active{background:rgba(33,33,33,.5)}.uploadcare--button_primary{background:#157cfc;border-color:#157cfc;color:#fff}.uploadcare--button_primary:focus,.uploadcare--button_primary:hover{background:#3891ff;border-color:#3891ff;color:#fff}.uploadcare--button_primary:active{background:#0969ee;border-color:#0969ee}.uploadcare--button_primary:disabled,.uploadcare--button_primary[aria-disabled=true]{background:#d4d2d2!important;border-color:#d4d2d2!important;color:#fff!important}.uploadcare--button_size_big{padding:10px 25px;font-size:20px;line-height:30px}.uploadcare--button_size_small{padding:5px 10px;min-width:80px;font-size:15px;line-height:20px}.uploadcare--input{-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-negative:0;flex-shrink:0;display:block;box-sizing:border-box;margin:5px 0 15px;padding:10px 15px;width:100%;font-size:17.5px;line-height:25px;background:#fff;color:#353535;border:1px solid #a4a2a1;border-radius:2px;box-shadow:none}.uploadcare--input:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--input::-webkit-input-placeholder{color:#a4a2a1}.uploadcare--input:-ms-input-placeholder,.uploadcare--input::-ms-input-placeholder{color:#a4a2a1}.uploadcare--input::placeholder{color:#a4a2a1}.uploadcare--form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;max-width:400px;width:100%}.uploadcare--error{color:#e66a6a}.uploadcare--powered-by{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7.5px 0;font-size:12.5px;line-height:15px;color:#fff;text-align:center}.uploadcare--powered-by__link{color:inherit!important;text-decoration:none!important}.uploadcare--powered-by__link,.uploadcare--powered-by__logo{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.uploadcare--powered-by__logo{width:20px;height:15px;vertical-align:text-bottom}.uploadcare--progress__canvas{width:100%;height:100%}.uploadcare--progress__text{display:table-cell;vertical-align:middle;text-align:center;font-size:60%;line-height:1}.uploadcare--progress__text-container{width:100%;height:100%;display:table;white-space:normal}.uploadcare--progress_type_canvas{padding:2px;width:32px;height:32px;color:#ffd800;border-color:#e3e1e1}.uploadcare--progressbar{overflow:hidden;width:100%;height:100%;background:#e3e1e1;border-radius:6px}.uploadcare--progressbar__value{width:0;height:100%;background:#ffd800}.uploadcare--menu{-ms-flex-negative:0;flex-shrink:0;width:100%;width:100vw;max-width:100%;height:100%;overflow:hidden}@media (min-width:760px){.uploadcare--menu{width:60px}}@media (max-width:759px){.uploadcare--menu{height:60px}}.uploadcare--menu__icon{-ms-flex-negative:0;flex-shrink:0;margin:14px}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__item_current:not(.uploadcare--menu__item_tab_file) .uploadcare--menu__icon{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-left:0}}.uploadcare--menu__item{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:60px;overflow:hidden;cursor:default;background:#e3e1e1;color:#666;transition:background .3s,color .3s}@media (min-width:760px){.uploadcare--menu__item{width:60px}}.uploadcare--menu__item:focus,.uploadcare--menu__item:hover{color:#157cfc}.uploadcare--menu__item:active{background-color:#fff;color:#0969ee}.uploadcare--menu__item:focus{outline:none;box-shadow:inset 0 0 0 2px rgba(21,124,252,.5)}.uploadcare--menu__item[aria-disabled=true]{background:#e3e1e1!important;color:#666!important;cursor:not-allowed}.uploadcare--menu__item:after{content:attr(title);-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;height:30px;font-size:17px;line-height:30px;white-space:nowrap}@media (min-width:760px){.uploadcare--menu__item:after{overflow:hidden;max-width:170px;text-overflow:ellipsis}}.uploadcare--menu__item_current,.uploadcare--menu__item_current:active,.uploadcare--menu__item_current:focus,.uploadcare--menu__item_current:hover{background-color:#fff;color:#353535}.uploadcare--menu__item_hidden{display:none}.uploadcare--menu__items{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding-right:100vw;overflow-y:auto;overflow-x:hidden;background:#e3e1e1}.uploadcare--menu__toggle{width:60px;height:60px;transition:none}.uploadcare--menu__toggle:focus{outline-offset:-2px}@media (min-width:760px){.uploadcare--menu__toggle{display:none}}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__toggle-icon_back{display:none}}@media (max-width:759px){.uploadcare--menu_opened{position:relative;z-index:1000;height:100%}.uploadcare--menu_opened .uploadcare--menu__toggle{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;text-align:left;background:#e3e1e1}.uploadcare--menu_opened .uploadcare--menu__toggle-icon_menu{display:none}.uploadcare--menu_opened .uploadcare--menu__items{height:calc(100% - 60px)}}.uploadcare--footer{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;margin-top:10px;padding:5px 20px 15px}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer{display:block}}.uploadcare--footer:empty{display:none}.uploadcare--footer__additions{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;padding:0 0 15px;text-align:center}@media (max-width:759px) and (orientation:landscape){.uploadcare--footer__additions{padding:0 20px}}@media (max-width:500px) and (orientation:landscape){.uploadcare--footer__additions{display:none}}@media (min-width:760px){.uploadcare--footer__additions{padding:0 20px}}.uploadcare--footer__additions:empty{visibility:hidden;padding:0}.uploadcare--footer__button{margin-top:5px;margin-bottom:5px}.uploadcare--footer__button:first-of-type{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.uploadcare--footer__button:nth-of-type(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}@media (max-width:759px){.uploadcare--footer__button{max-width:calc(50% - 20px)}}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer__button:first-of-type{float:left}.uploadcare--footer__button:nth-of-type(2){float:right}}.uploadcare--dragging .uploadcare--draganddrop{margin:20px;background:#e3e1e1;color:#a4a2a1;border:2px dashed;border-radius:20px}.uploadcare--draganddrop.uploadcare--dragging{color:#157cfc!important}@media (max-width:759px){.uploadcare--draganddrop__title{display:none}}.uploadcare--draganddrop:not(.uploadcare--draganddrop_supported) .uploadcare--draganddrop__supported,.uploadcare--draganddrop_supported .uploadcare--draganddrop__not-supported,.uploadcare--dragging .uploadcare--dialog__close,.uploadcare--dragging__show{display:none}.uploadcare--dragging .uploadcare--dragging__show{display:block}.uploadcare--dragging .uploadcare--dragging__hide{display:none}.uploadcare--file{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;padding:5px 0 5px 20px;color:#353535;cursor:default}.uploadcare--file:hover{background:rgba(21,124,252,.1)}.uploadcare--file__description{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;padding-right:20px;text-align:left}.uploadcare--file__description:focus,.uploadcare--file__description:focus .uploadcare--file__preview,.uploadcare--file__description:hover,.uploadcare--file__description:hover .uploadcare--file__preview{color:#157cfc}.uploadcare--file__description:active,.uploadcare--file__description:active .uploadcare--file__preview{color:#0969ee}.uploadcare--file__description:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:2px}.uploadcare--file__icon{max-width:100%;max-height:100%}.uploadcare--file__name{overflow:hidden;margin:0;max-width:calc(100vw - 200px);line-height:25px;white-space:nowrap;text-overflow:ellipsis;transition:color .3s}@media (min-width:760px){.uploadcare--file__name{max-width:350px}}.uploadcare--file__preview{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;float:left;box-sizing:border-box;margin-right:10px;padding:2px;width:60px;height:60px;overflow:hidden;border:1px solid;border-radius:6px;background:transparent;color:#e3e1e1;transition:border .3s}.uploadcare--file__progressbar{-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:center;align-self:center;margin:0 10px;width:60px;height:10px}.uploadcare--file__size{font-size:12.5px;color:#a4a2a1}.uploadcare--file_status_error,.uploadcare--file_status_error .uploadcare--file__description,.uploadcare--file_status_error .uploadcare--file__preview{color:#e66a6a!important}.uploadcare--file_status_error .uploadcare--file__name{color:hsla(0,71%,66%,.5)!important}.uploadcare--file_status_error .uploadcare--file__progressbar,.uploadcare--file_status_error .uploadcare--file__size,.uploadcare--file_status_uploaded .uploadcare--file__progressbar{display:none}.uploadcare--file_status_uploading,.uploadcare--file_status_uploading .uploadcare--file__description{color:#353535!important}.uploadcare--file_status_uploading .uploadcare--file__name{max-width:calc(100vw - 280px)}@media (min-width:760px){.uploadcare--file_status_uploading .uploadcare--file__name{max-width:270px}}.uploadcare--file_status_uploading .uploadcare--file__preview{background:#ffd800;color:#ffd800!important}.uploadcare--files{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;width:100%;height:100%}.uploadcare--files__item{-ms-flex-negative:0;flex-shrink:0}.uploadcare--crop-sizes{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.uploadcare--crop-sizes__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;height:65px;background:transparent;border-color:transparent;color:#353535}.uploadcare--crop-sizes__item:focus,.uploadcare--crop-sizes__item:hover{background:transparent;border-color:transparent;color:#157cfc}.uploadcare--crop-sizes__item:active{background:transparent;border-color:transparent;color:#0969ee}.uploadcare--crop-sizes__item:disabled,.uploadcare--crop-sizes__item[aria-disabled=true]{border-color:transparent!important}.uploadcare--crop-sizes__item:after{content:attr(data-caption);display:block;font-size:14px;line-height:25px;text-transform:uppercase}@media (max-width:400px),(max-width:600px) and (orientation:landscape){.uploadcare--crop-sizes__item:after{font-size:12px}}.uploadcare--crop-sizes__item:before{content:"";display:block;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;margin:1px 0;width:6px;height:6px;background:transparent;border-radius:50%}.uploadcare--crop-sizes__item_current:active,.uploadcare--crop-sizes__item_current:focus,.uploadcare--crop-sizes__item_current:hover{color:#353535}.uploadcare--crop-sizes__item_current:before{background:#157cfc}.uploadcare--crop-sizes__icon{box-sizing:border-box;width:30px;height:30px;border:2px solid;border-radius:2px;color:inherit;-webkit-transform:scale(.666);transform:scale(.666)}.uploadcare--crop-sizes__icon_free{border:none;border-radius:0;-webkit-transform:none;transform:none}.uploadcare--file-source{margin:10px;border-color:#e3e1e1;background:#e3e1e1;color:#353535}.uploadcare--file-source_all{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;border-color:currentColor;background:transparent;color:#157cfc}.uploadcare--file-sources{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}@media (max-width:759px) and (max-height:450px),(min-width:760px){.uploadcare--file-sources{display:none}}.uploadcare--file-sources__caption{margin:15px 0 5px}@media (max-width:759px) and (max-height:550px){.uploadcare--file-sources__item:nth-child(4),.uploadcare--file-sources__item:nth-child(5),.uploadcare--file-sources__item:nth-child(6){display:none}}.uploadcare--file-sources__items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:300px}.uploadcare--file-sources__items:empty,.uploadcare--file-sources__items:not(.uploadcare--file-sources__items_many) .uploadcare--file-source__all{display:none}.uploadcare--media{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:100%}.uploadcare--media__image{position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.uploadcare--media__video{all:initial;width:auto;max-width:100%;height:auto;min-height:100px;max-height:100%}@media (max-width:759px) and (max-height:379px){.uploadcare--media__video{max-height:120px}}@media (max-width:759px) and (min-height:380px) and (max-height:499px){.uploadcare--media__video{max-height:160px}}@media (max-width:759px) and (min-height:500px),(min-width:760px){.uploadcare--media__video{max-height:300px}}.uploadcare--camera__button{margin:5px 10px}.uploadcare--camera__button_type_mirror{position:absolute;top:15px;left:50%;margin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.uploadcare--camera__video{transition:-webkit-transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1),-webkit-transform .8s cubic-bezier(.23,1,.32,1)}.uploadcare--camera__video_mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.uploadcare--camera__video-container{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;position:relative;margin-bottom:10px}.uploadcare--camera_status_denied .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_capture,.uploadcare--camera_status_denied .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_denied .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_denied .uploadcare--camera__controls,.uploadcare--camera_status_denied .uploadcare--camera__not-found,.uploadcare--camera_status_denied .uploadcare--camera__please-allow,.uploadcare--camera_status_denied .uploadcare--camera__video-container,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_capture,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_retry,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_not-founded .uploadcare--camera__controls,.uploadcare--camera_status_not-founded .uploadcare--camera__please-allow,.uploadcare--camera_status_not-founded .uploadcare--camera__video-container,.uploadcare--camera_status_ready .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_ready .uploadcare--camera__button_type_retry,.uploadcare--camera_status_ready .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_ready .uploadcare--camera__not-found,.uploadcare--camera_status_ready .uploadcare--camera__please-allow,.uploadcare--camera_status_recording .uploadcare--camera__button_type_capture,.uploadcare--camera_status_recording .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_recording .uploadcare--camera__button_type_retry,.uploadcare--camera_status_recording .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_recording .uploadcare--camera__not-found,.uploadcare--camera_status_recording .uploadcare--camera__please-allow,.uploadcare--camera_status_requested .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_capture,.uploadcare--camera_status_requested .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_requested .uploadcare--camera__button_type_retry,.uploadcare--camera_status_requested .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_requested .uploadcare--camera__controls,.uploadcare--camera_status_requested .uploadcare--camera__not-found,.uploadcare--camera_status_requested .uploadcare--camera__video-container{display:none}.uploadcare--crop-widget>.uploadcare--preview__image{-webkit-filter:brightness(60%);filter:brightness(60%);-webkit-transform:none;transform:none}.uploadcare--tab{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;text-align:center}.uploadcare--tab,.uploadcare--tab__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploadcare--tab__content{-ms-flex-negative:1;flex-shrink:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;padding:0 20px}.uploadcare--tab__header{-ms-flex-negative:0;flex-shrink:0;padding:0 20px;overflow:hidden}@media (min-width:760px){.uploadcare--tab__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:60px;height:60px}}.uploadcare--tab__iframe{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;height:100%;border:0;opacity:0}.uploadcare--tab__title{margin-top:10px;margin-bottom:10px}.uploadcare--tab:not(.uploadcare--tab_current),.uploadcare--tab_name_preview.uploadcare--tab_current~.uploadcare--panel__footer{display:none}.uploadcare--tab_remote.uploadcare--tab_current~.uploadcare--panel__footer{margin-top:0}.uploadcare--panel{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;box-sizing:border-box;overflow:hidden;width:100%;height:500px;border:1px solid #a4a2a1;border-radius:6px;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px}@media (min-width:760px){.uploadcare--panel{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.uploadcare--panel__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.uploadcare--panel__file-counter{display:inline}.uploadcare--panel__footer{padding-top:15px;background:#fff9d8}.uploadcare--panel__icon{box-sizing:border-box;padding:3px}.uploadcare--panel__menu_hidden{display:none}.uploadcare--panel__message_hidden{color:#d4d2d2}.uploadcare--panel__powered-by{background:#353535;color:hsla(0,0%,100%,.5)}@media (min-width:760px){.uploadcare--panel__powered-by{display:none}}.uploadcare--tab:not(:nth-child(2)).uploadcare--tab_current~.uploadcare--panel__powered-by{display:none}@media (max-width:759px){.uploadcare--panel_menu-hidden .uploadcare--tab__header{padding:6px 60px 0;min-height:60px}}.uploadcare--panel:not(.uploadcare--panel_multiple) .uploadcare--panel__footer{display:none}.uploadcare--panel_multiple .uploadcare--tab_name_preview{height:100%}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__content{padding-left:0;padding-right:0}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer{position:relative;margin-top:0;padding-top:15px}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer:before{content:"";position:absolute;top:0;left:20px;width:calc(100% - 40px);height:1px;background:#e3e1e1}.uploadcare--preview__content{overflow:hidden}.uploadcare--preview__content_crop{padding:10px 20px}.uploadcare--dialog{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:fixed;top:0;left:0;z-index:2147483647;box-sizing:border-box;overflow:hidden;width:100%;height:100%;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px;opacity:0;transition:opacity .33s cubic-bezier(.05,.7,.25,1)}@media (min-width:760px){.uploadcare--dialog{-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;background:rgba(0,0,0,.5)}}@media (min-width:760px) and (max-height:559px){.uploadcare--dialog{padding-top:30px}}@media (min-width:760px) and (min-height:560px){.uploadcare--dialog{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.uploadcare--dialog__close{position:absolute;top:0;right:0;z-index:49}.uploadcare--dialog__close:focus{outline-offset:-2px}.uploadcare--dialog__container{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;overflow:hidden}@media (max-width:759px){.uploadcare--dialog__container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:100%}}@media (min-width:760px){.uploadcare--dialog__container{width:calc(100% - 60px);max-width:900px;height:calc(100% - 60px);min-height:500px;max-height:660px;border-radius:6px}}@media (min-width:1210px){.uploadcare--dialog__container{max-width:1050px}}.uploadcare--dialog__panel{height:100%;border:none;border-radius:0}@media (min-width:1210px){.uploadcare--dialog__panel .uploadcare--menu,.uploadcare--dialog__panel .uploadcare--menu__item{width:250px}}.uploadcare--dialog__powered-by{-ms-flex-negative:0;flex-shrink:0}@media (max-width:759px){.uploadcare--dialog__powered-by{display:none}}.uploadcare--dialog_status_active{opacity:1}.uploadcare--widget{display:inline-block;vertical-align:baseline}.uploadcare--dragging .uploadcare--widget,.uploadcare--widget.uploadcare--dragging{position:relative}.uploadcare--widget__button{all:initial;display:inline-block;box-sizing:border-box;margin:0;padding:.4em 1em;width:auto;min-width:0;height:auto;min-height:0;border-radius:6px;border:none;background:#c3c3c3;color:#fff;cursor:default;text-align:center;white-space:nowrap;font:inherit;line-height:inherit;box-shadow:none;text-shadow:inherit;transition:background .3s}.uploadcare--widget__button:focus,.uploadcare--widget__button:hover{background:#b3b3b3;color:#fff;font:inherit;box-shadow:none;text-shadow:inherit}.uploadcare--widget__button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--widget__button:active{background:#b3b3b3}.uploadcare--widget__button:disabled{background:#c3c3c3;color:#fff;cursor:not-allowed}.uploadcare--widget__button_type_open{background:#157cfc;color:#fff}.uploadcare--widget__button_type_open:focus,.uploadcare--widget__button_type_open:hover{background:#3891ff}.uploadcare--widget__button_type_open:active{background:#0969ee}.uploadcare--widget__button_type_open:disabled{background:#c3c3c3}.uploadcare--widget__dragndrop-area{position:absolute;top:0;left:0;box-sizing:border-box;min-width:100%;min-height:100%;margin:0;padding:calc(.4em - 1.5px) 1em;font:inherit;line-height:inherit;text-align:center;white-space:nowrap;border:1.5px dashed;border-radius:6px;background:#e3e1e1;color:#a4a2a1;transition:color .3s;display:none}.uploadcare--dragging .uploadcare--widget__dragndrop-area{display:block}.uploadcare--widget.uploadcare--dragging .uploadcare--widget__dragndrop-area{color:#157cfc}.uploadcare--widget__file-name,.uploadcare--widget__file-size{display:inline}.uploadcare--widget__progress{display:inline-block;width:1.8em;height:1.8em;margin:0 .2em 0 0;padding:0;line-height:0;vertical-align:middle}.uploadcare--widget__text{display:inline-block;box-sizing:border-box;margin-right:.2em;padding:.4em 0;white-space:nowrap}.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_error .uploadcare--widget__button_type_remove,.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_loaded .uploadcare--widget__button_type_remove,.uploadcare--widget_option_clearable.uploadcare--widget_status_error .uploadcare--widget__button_type_open,.uploadcare--widget_status_error .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_error .uploadcare--widget__progress,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_open,.uploadcare--widget_status_loaded .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_ready .uploadcare--widget__button_type_remove,.uploadcare--widget_status_ready .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__text,.uploadcare--widget_status_started .uploadcare--widget__button_type_open,.uploadcare--widget_status_started .uploadcare--widget__button_type_remove{display:none}.uploadcare--page{width:auto;min-width:0;max-width:100%;height:auto;min-height:0;max-height:100%;overflow:hidden}.uploadcare--mouse-focused:focus{outline:none}\n\n');   return __p.join(''); };;uploadcare.templates.JST["tab-camera-capture"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">\n    ', ('' + __scope.t('dialog.tabs.camera.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n\n  <div class="uploadcare--camera__controls">\n    <button type="button"\n            class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_photo">\n      ', ('' + __scope.t('dialog.tabs.camera.capture')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n    <button type="button"\n            class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_video">\n      ', ('' + __scope.t('dialog.tabs.camera.startRecord')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n  </div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-camera"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ('' + __scope.t('dialog.tabs.camera.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n\n  <div class="uploadcare--media uploadcare--camera__video-container">\n    <video muted class="uploadcare--media__video uploadcare--camera__video uploadcare--camera__video_mirrored"></video>\n\n    <button type="button" class="uploadcare--button uploadcare--button_size_small uploadcare--button_overlay uploadcare--camera__button uploadcare--camera__button_type_mirror">\n      ', ('' + __scope.t('dialog.tabs.camera.mirror')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n  </div>\n\n  <div class="uploadcare--camera__controls">\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_start-record">\n      ', ('' + __scope.t('dialog.tabs.camera.startRecord')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_capture">\n      ', ('' + __scope.t('dialog.tabs.camera.capture')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_cancel-record">\n      ', ('' + __scope.t('dialog.tabs.camera.cancelRecord')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_stop-record">\n      ', ('' + __scope.t('dialog.tabs.camera.stopRecord')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n  </div>\n\n  <div class="uploadcare--camera__please-allow">\n    <div class="uploadcare--text uploadcare--text_size_medium">\n        ', ('' + __scope.t('dialog.tabs.camera.pleaseAllow.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n    <div class="uploadcare--text">\n        ', __scope.t('dialog.tabs.camera.pleaseAllow.text'), '\n    </div>\n  </div>\n\n  <div class="uploadcare--camera__not-found">\n    <div class="uploadcare--text uploadcare--text_size_medium">\n        ', ('' + __scope.t('dialog.tabs.camera.notFound.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n    <div class="uploadcare--text">\n        ', ('' + __scope.t('dialog.tabs.camera.notFound.text')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_retry">\n    ', ('' + __scope.t('dialog.tabs.camera.retry')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-file"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content uploadcare--draganddrop">\n  <div class="uploadcare--text uploadcare--text_size_extra-large uploadcare--dragging__show">\n    ', __scope.t('draghere'), '\n  </div>\n\n  <div class="uploadcare--draganddrop__title uploadcare--dragging__hide">\n    <div class="uploadcare--draganddrop__supported">\n      <div class="uploadcare--text uploadcare--text_size_extra-large">\n        ', __scope.t('dialog.tabs.file.drag'), '\n      </div>\n      <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted">\n        ', ('' + __scope.t('dialog.tabs.file.or')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n      </div>\n    </div>\n\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--draganddrop__not-supported">\n      ', __scope.t('dialog.tabs.file.nodrop'), '\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--tab__action-button needsclick  uploadcare--dragging__hide">\n    ', ('' + __scope.t('dialog.tabs.file.button')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n\n  <div class="uploadcare--file-sources uploadcare--dragging__hide">\n    <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted uploadcare--file-sources__caption">\n      ', ('' + __scope.t('dialog.tabs.file.also')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n    <div class="uploadcare--file-sources__items">\n      <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--file-source uploadcare--file-source_all uploadcare--file-sources_item">\n          <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n              <use xlink:href="#uploadcare--icon-more"></use>\n          </svg>\n      </button>\n    </div>\n  </div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-error"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content uploadcare--preview__content uploadcare--error">\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n      ', ('' + __scope.t('dialog.tabs.preview.error.' + __scope.error + '.title') || __scope.t('dialog.tabs.preview.error.default.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n\n    <div class="uploadcare--text">', ('' + __scope.t('dialog.tabs.preview.error.' + __scope.error + '.text') || __scope.t('dialog.tabs.preview.error.default.text')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n\n    <button type="button" class="uploadcare--button uploadcare--preview__back">\n        ', ('' + __scope.t('dialog.tabs.preview.error.' + __scope.error + '.back') || __scope.t('dialog.tabs.preview.error.default.back')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-image"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ('' + __scope.t('dialog.tabs.preview.image.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--media"><!--\n      1162x684 is 1.5 size of conteiner\n      TODO Use picture and srcset for create responsive image\n    --><img\n        src="', ('' + __scope.src).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n        title="', ('' + (__scope.name || "")).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n        alt="', ('' + (__scope.name || "")).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n      class="uploadcare--media__image uploadcare--preview__image"\n    />\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <div class="uploadcare--footer__additions">\n    ');   if(__scope.crop) {     ;     __p.push('\n    <div class="uploadcare--crop-sizes">\n      <div role="button" tabindex="0"\n           class="uploadcare--button uploadcare--button_icon uploadcare--crop-sizes__item" data-caption="free">\n        <div class="uploadcare--crop-sizes__icon"></div>\n      </div>\n    </div>\n    ');   }   ;   __p.push('\n  </div>\n\n  <!-- TODO Change Cancel to Remove -->\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.image.change')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-multiple-file"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--file uploadcare--files__item uploadcare--file_status_uploading">\n  <div class="uploadcare--file__description" tabindex="0">\n    <div class="uploadcare--file__preview"></div>\n    <div class="uploadcare--file__name">\n        ', ('' + __scope.t('dialog.tabs.preview.unknownName')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n    <div class="uploadcare--file__size"></div>\n    <div class="uploadcare--file__error"></div>\n  </div>\n\n  <div class="uploadcare--file__progressbar">\n    <div class="uploadcare--progressbar">\n      <div class="uploadcare--progressbar__value"></div>\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--file__remove">\n    <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n      <use xlink:href="#uploadcare--icon-remove"></use>\n    </svg>\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-multiple"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title"></div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--files"></div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <div class="uploadcare--footer__additions uploadcare--preview__message"></div>\n\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.multiple.clear')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.multiple.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-regular"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ('' + __scope.t('dialog.tabs.preview.regular.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--text uploadcare--preview__file-name">\n    ', ('' + (__scope.file.name || __scope.t('dialog.tabs.preview.unknownName'))).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '', ('' + __scope.utils.readableFileSize(__scope.file.size, '', ', ')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.change')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-unknown"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ('' + __scope.t('dialog.tabs.preview.unknown.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--text uploadcare--preview__file-name"></div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <!-- TODO Change Cancel to Remove -->\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.change')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.unknown.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-video"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ('' + __scope.t('dialog.tabs.preview.video.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--media">\n    <video controls class="uploadcare--media__video uploadcare--preview__video"></video>\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.video.change')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-url"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ('' + __scope.t('dialog.tabs.url.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n\n  <div class="uploadcare--text">', ('' + __scope.t('dialog.tabs.url.line1')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n  <div class="uploadcare--text">', ('' + __scope.t('dialog.tabs.url.line2')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n\n  <form class="uploadcare--form">\n    <input type="text" class="uploadcare--input" placeholder="', ('' + __scope.t('dialog.tabs.url.input')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '">\n    <button type="submit" class="uploadcare--button uploadcare--button_primary uploadcare--tab__action-button" type="submit">', ('' + __scope.t('dialog.tabs.url.button')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</button>\n  </form>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["widget-button"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<button type="button" class="uploadcare--widget__button uploadcare--widget__button_type_', __scope.name, '">\n    ', ('' + __scope.caption).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n</button>\n');   return __p.join(''); };;uploadcare.templates.JST["widget-file-name"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--link uploadcare--widget__file-name"\n     tabindex="0" role="link">', ('' + __scope.utils.fitText(__scope.name, 20)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div><!--\n--><div class="uploadcare--widget__file-size">,\n    ', ('' + __scope.utils.readableFileSize(__scope.size)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["widget"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--widget">\n  <div class="uploadcare--widget__dragndrop-area">', ('' + __scope.t('draghere')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n  <div class="uploadcare--widget__progress"></div>\n  <div class="uploadcare--widget__text"></div>\n</div>\n');   return __p.join(''); };;(function() {
  var $, tpl;

  $ = uploadcare.jQuery;

  tpl = uploadcare.templates.tpl;

  uploadcare.settings.waitForSettings.add(function(settings) {
    var css, style;
    css = tpl('styles', {
      settings: settings
    });
    style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    if (style.styleSheet != null) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    return $('head').prepend(style);
  });

}).call(this);
/**
 * jquery.Jcrop.js v0.9.10
 * jQuery Image Cropping Plugin - released under MIT License 
 * Author: Kelly Hallman <khallman@gmail.com>
 * http://github.com/tapmodo/Jcrop
 * Copyright (c) 2008-2012 Tapmodo Interactive LLC {{{
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * }}}
 */


(function ($) {

  $.Jcrop = function (obj, opt) {
    var options = $.extend({}, $.Jcrop.defaults),
        docOffset, lastcurs;

    // Internal Methods {{{
    function px(n) {
      return Math.round(n) + 'px';
    }
    function cssClass(cl) {
      return options.baseClass + '-' + cl;
    }
    function supportsColorFade() {
      return $.fx.step.hasOwnProperty('backgroundColor');
    }
    function getPos(obj) //{{{
    {
      var pos = $(obj).offset();
      return [pos.left, pos.top];
    }
    //}}}
    function mouseAbs(e) //{{{
    {
      return [(e.pageX - docOffset[0]), (e.pageY - docOffset[1])];
    }
    //}}}
    function setOptions(opt) //{{{
    {
      if (typeof(opt) !== 'object') opt = {};
      options = $.extend(options, opt);

      $.each(['onChange','onSelect','onRelease','onDblClick'],function(i,e) {
        if (typeof(options[e]) !== 'function') options[e] = function () {};
      });
    }
    //}}}
    function startDragMode(mode, pos) //{{{
    {
      docOffset = getPos($img);

      if (mode === 'move') {
        return Tracker.activateHandlers(createMover(pos), doneSelect);
      }

      var fc = Coords.getFixed();
      var opp = oppLockCorner(mode);
      var opc = Coords.getCorner(oppLockCorner(opp));

      Coords.setPressed(Coords.getCorner(opp));
      Coords.setCurrent(opc);

      Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect);
    }
    //}}}
    function dragmodeHandler(mode, f) //{{{
    {
      return function (pos) {
        if (!options.aspectRatio) {
          switch (mode) {
          case 'e':
            pos[1] = f.y2;
            break;
          case 'w':
            pos[1] = f.y2;
            break;
          case 'n':
            pos[0] = f.x2;
            break;
          case 's':
            pos[0] = f.x2;
            break;
          }
        } else {
          switch (mode) {
          case 'e':
            pos[1] = f.y + 1;
            break;
          case 'w':
            pos[1] = f.y + 1;
            break;
          case 'n':
            pos[0] = f.x + 1;
            break;
          case 's':
            pos[0] = f.x + 1;
            break;
          }
        }
        Coords.setCurrent(pos);
        Selection.update();
      };
    }
    //}}}
    function createMover(pos) //{{{
    {
      var lloc = pos;
      KeyManager.watchKeys();

      return function (pos) {
        Coords.moveOffset([pos[0] - lloc[0], pos[1] - lloc[1]]);
        lloc = pos;

        Selection.update();
      };
    }
    //}}}
    function oppLockCorner(ord) //{{{
    {
      switch (ord) {
      case 'n':
        return 'sw';
      case 's':
        return 'nw';
      case 'e':
        return 'nw';
      case 'w':
        return 'ne';
      case 'ne':
        return 'sw';
      case 'nw':
        return 'se';
      case 'se':
        return 'nw';
      case 'sw':
        return 'ne';
      }
    }
    //}}}
    function createDragger(ord) //{{{
    {
      return function (e) {
        if (options.disabled) {
          return false;
        }
        if ((ord === 'move') && !options.allowMove) {
          return false;
        }
        
        // Fix position of crop area when dragged the very first time.
        // Necessary when crop image is in a hidden element when page is loaded.
        docOffset = getPos($img);

        btndown = true;
        startDragMode(ord, mouseAbs(e));
        e.stopPropagation();
        e.preventDefault();
        return false;
      };
    }
    //}}}
    function presize($obj, w, h) //{{{
    {
      var nw = $obj.width(),
          nh = $obj.height();
      if ((nw > w) && w > 0) {
        nw = w;
        nh = (w / $obj.width()) * $obj.height();
      }
      if ((nh > h) && h > 0) {
        nh = h;
        nw = (h / $obj.height()) * $obj.width();
      }
      xscale = $obj.width() / nw;
      yscale = $obj.height() / nh;
      $obj.width(nw).height(nh);
    }
    //}}}
    function unscale(c) //{{{
    {
      return {
        x: c.x * xscale,
        y: c.y * yscale,
        x2: c.x2 * xscale,
        y2: c.y2 * yscale,
        w: c.w * xscale,
        h: c.h * yscale
      };
    }
    //}}}
    function doneSelect(pos) //{{{
    {
      var c = Coords.getFixed();
      Selection.enableHandles();
      Selection.done();
    }
    //}}}
    function selectDrag(pos) //{{{
    {
      Coords.setCurrent(pos);
      Selection.update();
    }
    //}}}
    function newTracker() //{{{
    {
      var trk = $('<div></div>').addClass(cssClass('tracker'));
      trk.css({
        opacity: 0,
        backgroundColor: 'white'
      });
      return trk;
    }
    //}}}

    // }}}
    // Initialization {{{
    // Sanitize some options {{{
    if (typeof(obj) !== 'object') {
      obj = $(obj)[0];
    }
    if (typeof(opt) !== 'object') {
      opt = {};
    }
    // }}}
    setOptions(opt);
    // Initialize some jQuery objects {{{
    // The values are SET on the image(s) for the interface
    // If the original image has any of these set, they will be reset
    // However, if you destroy() the Jcrop instance the original image's
    // character in the DOM will be as you left it.
    var img_css = {
      border: 'none',
      visibility: 'visible',
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      left: 0
    };

    var $origimg = $(obj),
      img_mode = true;

    if (obj.tagName == 'IMG') {
      // Fix size of crop image.
      // Necessary when crop image is within a hidden element when page is loaded.
      if ($origimg[0].width != 0 && $origimg[0].height != 0) {
        // Obtain dimensions from contained img element.
        $origimg.width($origimg[0].width);
        $origimg.height($origimg[0].height);
      } else {
        // Obtain dimensions from temporary image in case the original is not loaded yet (e.g. IE 7.0). 
        var tempImage = new Image();
        tempImage.src = $origimg[0].src;
        $origimg.width(tempImage.width);
        $origimg.height(tempImage.height);
      } 

      var $img = $origimg.clone().removeAttr('id').css(img_css).show();

      $img.width($origimg.width());
      $img.height($origimg.height());
      $origimg.after($img).hide();

    } else {
      $img = $origimg.css(img_css).show();
      img_mode = false;
      if (options.shade === null) { options.shade = true; }
    }

    presize($img, options.boxWidth, options.boxHeight);

    var boundx = $img.width(),
        boundy = $img.height(),

        $div = $('<div />').width(boundx).height(boundy).addClass(cssClass('holder')).css({
          position: 'relative',
          backgroundColor: options.bgColor
        }).insertAfter($origimg).append($img);

    if (options.addClass) {
      $div.addClass(options.addClass);
    }

    var $img2 = $('<div />'),

        $img_holder = $('<div />') 
        .width('100%').height('100%').css({
          zIndex: 310,
          position: 'absolute',
          overflow: 'hidden'
        }),

        $sel = $('<div />') 
        .css({
          position: 'absolute',
          zIndex: 600
        }).dblclick(function(){
          var c = Coords.getFixed();
          options.onDblClick.call(api,c);
        }).insertBefore($img).append($img_holder);

    if (img_mode) {

      $img2 = $('<img />')
          .attr('src', $img.attr('src')).css(img_css).width(boundx).height(boundy),

      $img_holder.append($img2);

    }

    var bound = options.boundary;
    var $trk = newTracker().width(boundx + (bound * 2)).height(boundy + (bound * 2)).css({
      position: 'absolute',
      top: px(-bound),
      left: px(-bound),
      zIndex: 290
    });

    /* }}} */
    // Set more variables {{{
    var bgcolor = options.bgColor,
        bgopacity = options.bgOpacity,
        xlimit, ylimit, xmin, ymin, xscale, yscale, enabled = true,
        btndown, animating, shift_down;

    docOffset = getPos($img);
    // }}}
    // }}}
    // Internal Modules {{{
    // Touch Module {{{ 
    var Touch = (function () {
      // Touch support detection function adapted (under MIT License)
      // from code by Jeffrey Sambells - http://github.com/iamamused/
      function hasTouchSupport() {
        var support = {},
            events = ['touchstart', 'touchmove', 'touchend'],
            el = document.createElement('div'), i;

        try {
          for(i=0; i<events.length; i++) {
            var eventName = events[i];
            eventName = 'on' + eventName;
            var isSupported = (eventName in el);
            if (!isSupported) {
              el.setAttribute(eventName, 'return;');
              isSupported = typeof el[eventName] == 'function';
            }
            support[events[i]] = isSupported;
          }
          return support.touchstart && support.touchend && support.touchmove;
        }
        catch(err) {
          return false;
        }
      }

      function detectSupport() {
        if ((options.touchSupport === true) || (options.touchSupport === false)) return options.touchSupport;
          else return hasTouchSupport();
      }
      return {
        createDragger: function (ord) {
          return function (e) {
            e.pageX = e.originalEvent.changedTouches[0].pageX;
            e.pageY = e.originalEvent.changedTouches[0].pageY;
            if (options.disabled) {
              return false;
            }
            if ((ord === 'move') && !options.allowMove) {
              return false;
            }
            btndown = true;
            startDragMode(ord, mouseAbs(e));
            e.stopPropagation();
            e.preventDefault();
            return false;
          };
        },
        isSupported: hasTouchSupport,
        support: detectSupport()
      };
    }());
    // }}}
    // Coords Module {{{
    var Coords = (function () {
      var x1 = 0,
          y1 = 0,
          x2 = 0,
          y2 = 0,
          ox, oy;

      function setPressed(pos) //{{{
      {
        pos = rebound(pos);
        x2 = x1 = pos[0];
        y2 = y1 = pos[1];
      }
      //}}}
      function setCurrent(pos) //{{{
      {
        pos = rebound(pos);
        ox = pos[0] - x2;
        oy = pos[1] - y2;
        x2 = pos[0];
        y2 = pos[1];
      }
      //}}}
      function getOffset() //{{{
      {
        return [ox, oy];
      }
      //}}}
      function moveOffset(offset) //{{{
      {
        var ox = offset[0],
            oy = offset[1];

        if (0 > x1 + ox) {
          ox -= ox + x1;
        }
        if (0 > y1 + oy) {
          oy -= oy + y1;
        }

        if (boundy < y2 + oy) {
          oy += boundy - (y2 + oy);
        }
        if (boundx < x2 + ox) {
          ox += boundx - (x2 + ox);
        }

        x1 += ox;
        x2 += ox;
        y1 += oy;
        y2 += oy;
      }
      //}}}
      function getCorner(ord) //{{{
      {
        var c = getFixed();
        switch (ord) {
        case 'ne':
          return [c.x2, c.y];
        case 'nw':
          return [c.x, c.y];
        case 'se':
          return [c.x2, c.y2];
        case 'sw':
          return [c.x, c.y2];
        }
      }
      //}}}
      function getFixed() //{{{
      {
        if (!options.aspectRatio) {
          return getRect();
        }
        // This function could use some optimization I think...
        var aspect = options.aspectRatio,
            min_x = options.minSize[0] / xscale,
            
            
            //min_y = options.minSize[1]/yscale,
            max_x = options.maxSize[0] / xscale,
            max_y = options.maxSize[1] / yscale,
            rw = x2 - x1,
            rh = y2 - y1,
            rwa = Math.abs(rw),
            rha = Math.abs(rh),
            real_ratio = rwa / rha,
            xx, yy, w, h;

        if (max_x === 0) {
          max_x = boundx * 10;
        }
        if (max_y === 0) {
          max_y = boundy * 10;
        }
        if (real_ratio < aspect) {
          yy = y2;
          w = rha * aspect;
          xx = rw < 0 ? x1 - w : w + x1;

          if (xx < 0) {
            xx = 0;
            h = Math.abs((xx - x1) / aspect);
            yy = rh < 0 ? y1 - h : h + y1;
          } else if (xx > boundx) {
            xx = boundx;
            h = Math.abs((xx - x1) / aspect);
            yy = rh < 0 ? y1 - h : h + y1;
          }
        } else {
          xx = x2;
          h = rwa / aspect;
          yy = rh < 0 ? y1 - h : y1 + h;
          if (yy < 0) {
            yy = 0;
            w = Math.abs((yy - y1) * aspect);
            xx = rw < 0 ? x1 - w : w + x1;
          } else if (yy > boundy) {
            yy = boundy;
            w = Math.abs(yy - y1) * aspect;
            xx = rw < 0 ? x1 - w : w + x1;
          }
        }

        // Magic %-)
        if (xx > x1) { // right side
          if (xx - x1 < min_x) {
            xx = x1 + min_x;
          } else if (xx - x1 > max_x) {
            xx = x1 + max_x;
          }
          if (yy > y1) {
            yy = y1 + (xx - x1) / aspect;
          } else {
            yy = y1 - (xx - x1) / aspect;
          }
        } else if (xx < x1) { // left side
          if (x1 - xx < min_x) {
            xx = x1 - min_x;
          } else if (x1 - xx > max_x) {
            xx = x1 - max_x;
          }
          if (yy > y1) {
            yy = y1 + (x1 - xx) / aspect;
          } else {
            yy = y1 - (x1 - xx) / aspect;
          }
        }

        if (xx < 0) {
          x1 -= xx;
          xx = 0;
        } else if (xx > boundx) {
          x1 -= xx - boundx;
          xx = boundx;
        }

        if (yy < 0) {
          y1 -= yy;
          yy = 0;
        } else if (yy > boundy) {
          y1 -= yy - boundy;
          yy = boundy;
        }

        return makeObj(flipCoords(x1, y1, xx, yy));
      }
      //}}}
      function rebound(p) //{{{
      {
        if (p[0] < 0) {
          p[0] = 0;
        }
        if (p[1] < 0) {
          p[1] = 0;
        }

        if (p[0] > boundx) {
          p[0] = boundx;
        }
        if (p[1] > boundy) {
          p[1] = boundy;
        }

        return [p[0], p[1]];
      }
      //}}}
      function flipCoords(x1, y1, x2, y2) //{{{
      {
        var xa = x1,
            xb = x2,
            ya = y1,
            yb = y2;
        if (x2 < x1) {
          xa = x2;
          xb = x1;
        }
        if (y2 < y1) {
          ya = y2;
          yb = y1;
        }
        return [xa, ya, xb, yb];
      }
      //}}}
      function getRect() //{{{
      {
        var xsize = x2 - x1,
            ysize = y2 - y1,
            delta;

        if (xlimit && (Math.abs(xsize) > xlimit)) {
          x2 = (xsize > 0) ? (x1 + xlimit) : (x1 - xlimit);
        }
        if (ylimit && (Math.abs(ysize) > ylimit)) {
          y2 = (ysize > 0) ? (y1 + ylimit) : (y1 - ylimit);
        }

        if (ymin / yscale && (Math.abs(ysize) < ymin / yscale)) {
          y2 = (ysize > 0) ? (y1 + ymin / yscale) : (y1 - ymin / yscale);
        }
        if (xmin / xscale && (Math.abs(xsize) < xmin / xscale)) {
          x2 = (xsize > 0) ? (x1 + xmin / xscale) : (x1 - xmin / xscale);
        }

        if (x1 < 0) {
          x2 -= x1;
          x1 -= x1;
        }
        if (y1 < 0) {
          y2 -= y1;
          y1 -= y1;
        }
        if (x2 < 0) {
          x1 -= x2;
          x2 -= x2;
        }
        if (y2 < 0) {
          y1 -= y2;
          y2 -= y2;
        }
        if (x2 > boundx) {
          delta = x2 - boundx;
          x1 -= delta;
          x2 -= delta;
        }
        if (y2 > boundy) {
          delta = y2 - boundy;
          y1 -= delta;
          y2 -= delta;
        }
        if (x1 > boundx) {
          delta = x1 - boundy;
          y2 -= delta;
          y1 -= delta;
        }
        if (y1 > boundy) {
          delta = y1 - boundy;
          y2 -= delta;
          y1 -= delta;
        }

        return makeObj(flipCoords(x1, y1, x2, y2));
      }
      //}}}
      function makeObj(a) //{{{
      {
        return {
          x: a[0],
          y: a[1],
          x2: a[2],
          y2: a[3],
          w: a[2] - a[0],
          h: a[3] - a[1]
        };
      }
      //}}}

      return {
        flipCoords: flipCoords,
        setPressed: setPressed,
        setCurrent: setCurrent,
        getOffset: getOffset,
        moveOffset: moveOffset,
        getCorner: getCorner,
        getFixed: getFixed
      };
    }());

    //}}}
    // Shade Module {{{
    var Shade = (function() {
      var enabled = false,
          holder = $('<div />').css({
            position: 'absolute',
            zIndex: 240,
            opacity: 0
          }),
          shades = {
            top: createShade(),
            left: createShade().height(boundy),
            right: createShade().height(boundy),
            bottom: createShade()
          };

      function resizeShades(w,h) {
        shades.left.css({ height: px(h) });
        shades.right.css({ height: px(h) });
      }
      function updateAuto()
      {
        return updateShade(Coords.getFixed());
      }
      function updateShade(c)
      {
        shades.top.css({
          left: px(c.x),
          width: px(c.w),
          height: px(c.y)
        });
        shades.bottom.css({
          top: px(c.y2),
          left: px(c.x),
          width: px(c.w),
          height: px(boundy-c.y2)
        });
        shades.right.css({
          left: px(c.x2),
          width: px(boundx-c.x2)
        });
        shades.left.css({
          width: px(c.x)
        });
      }
      function createShade() {
        return $('<div />').css({
          position: 'absolute',
          backgroundColor: options.shadeColor||options.bgColor
        }).appendTo(holder);
      }
      function enableShade() {
        if (!enabled) {
          enabled = true;
          holder.insertBefore($img);
          updateAuto();
          Selection.setBgOpacity(1,0,1);
          $img2.hide();

          setBgColor(options.shadeColor||options.bgColor,1);
          if (Selection.isAwake())
          {
            setOpacity(options.bgOpacity,1);
          }
            else setOpacity(1,1);
        }
      }
      function setBgColor(color,now) {
        colorChangeMacro(getShades(),color,now);
      }
      function disableShade() {
        if (enabled) {
          holder.remove();
          $img2.show();
          enabled = false;
          if (Selection.isAwake()) {
            Selection.setBgOpacity(options.bgOpacity,1,1);
          } else {
            Selection.setBgOpacity(1,1,1);
            Selection.disableHandles();
          }
          colorChangeMacro($div,0,1);
        }
      }
      function setOpacity(opacity,now) {
        if (enabled) {
          if (options.bgFade && !now) {
            holder.animate({
              opacity: 1-opacity
            },{
              queue: false,
              duration: options.fadeTime
            });
          }
          else holder.css({opacity:1-opacity});
        }
      }
      function refreshAll() {
        options.shade ? enableShade() : disableShade();
        if (Selection.isAwake()) setOpacity(options.bgOpacity);
      }
      function getShades() {
        return holder.children();
      }

      return {
        update: updateAuto,
        updateRaw: updateShade,
        getShades: getShades,
        setBgColor: setBgColor,
        enable: enableShade,
        disable: disableShade,
        resize: resizeShades,
        refresh: refreshAll,
        opacity: setOpacity
      };
    }());
    // }}}
    // Selection Module {{{
    var Selection = (function () {
      var awake,
          borders = {},
          handle = {},
          dragbar = {},
          seehandles = false;

      // Private Methods
      function insertBorder(type) //{{{
      {
        var jq = $('<div />').css({
          position: 'absolute'
        }).addClass(cssClass(type));
        $sel.append(jq);
        return jq;
      }
      //}}}
      function dragDiv(ord) //{{{
      {
        var jq = $('<div />').mousedown(createDragger(ord)).css({
          cursor: ord + '-resize',
          position: 'absolute'
        }).append('<div/>')
          .addClass('ord-'+ord);

        if (Touch.support) {
          jq.on('touchstart.jcrop', Touch.createDragger(ord));
        }

        $sel.append(jq);
        return jq;
      }
      //}}}
      function insertHandle(ord) //{{{
      {
        return dragDiv(ord).addClass(cssClass('handle'));
      }
      //}}}
      function createBorders(li) //{{{
      {
        var cl,i;
        for (i = 0; i < li.length; i++) {
          switch(li[i]){
            case'n': cl='hline'; break;
            case's': cl='hline bottom'; break;
            case'e': cl='vline right'; break;
            case'w': cl='vline'; break;
          }
          borders[li[i]] = insertBorder(cl);
        }
      }
      //}}}
      function createHandles(li) //{{{
      {
        var i;
        for (i = 0; i < li.length; i++) {
          handle[li[i]] = insertHandle(li[i]);
        }
      }
      //}}}
      function moveto(x, y) //{{{
      {
        if (!options.shade) {
          $img2.css({
            top: px(-y),
            left: px(-x)
          });
        }
        $sel.css({
          top: px(y),
          left: px(x)
        });
      }
      //}}}
      function resize(w, h) //{{{
      {
        $sel.width(Math.round(w)).height(Math.round(h));
      }
      //}}}
      function refresh() //{{{
      {
        var c = Coords.getFixed();

        Coords.setPressed([c.x, c.y]);
        Coords.setCurrent([c.x2, c.y2]);

        updateVisible();
      }
      //}}}

      // Internal Methods
      function updateVisible(select) //{{{
      {
        if (awake) {
          return update(select);
        }
      }
      //}}}
      function update(select) //{{{
      {
        var c = Coords.getFixed();

        resize(c.w, c.h);
        moveto(c.x, c.y);
        if (options.shade) Shade.updateRaw(c);

        awake || show();

        if (select) {
          options.onSelect.call(api, unscale(c));
        } else {
          options.onChange.call(api, unscale(c));
        }
      }
      //}}}
      function setBgOpacity(opacity,force,now) //{{{
      {
        if (!awake && !force) return;
        if (options.bgFade && !now) {
          $img.animate({
            opacity: opacity
          },{
            queue: false,
            duration: options.fadeTime
          });
        } else {
          $img.css('opacity', opacity);
        }
      }
      //}}}
      function show() //{{{
      {
        $sel.show();

        if (options.shade) Shade.opacity(bgopacity);
          else setBgOpacity(bgopacity,true);

        awake = true;
      }
      //}}}
      function release() //{{{
      {
        disableHandles();
        $sel.hide();

        if (options.shade) Shade.opacity(1);
          else setBgOpacity(1);

        awake = false;
        options.onRelease.call(api);
      }
      //}}}
      function enableHandles() //{{{
      {
        seehandles = true;
        if (options.allowResize) {
          return true;
        }
      }
      //}}}
      function disableHandles() //{{{
      {
        seehandles = false;
      }
      //}}}
      function animMode(v) //{{{
      {
        if (v) {
          animating = true;
          disableHandles();
        } else {
          animating = false;
          enableHandles();
        }
      } 
      //}}}
      function done() //{{{
      {
        animMode(false);
        refresh();
      } 
      //}}}
      // Insert draggable elements {{{
      // Insert border divs for outline

      if ($.isArray(options.createHandles))
        createHandles(options.createHandles);

      if (options.drawBorders && $.isArray(options.createBorders))
        createBorders(options.createBorders);

      //}}}

      // This is a hack for iOS5 to support drag/move touch functionality
      $(document).on('touchstart.jcrop-ios',function(e) {
        if ($(e.currentTarget).hasClass('jcrop-tracker')) e.stopPropagation();
      });

      var $track = newTracker().mousedown(createDragger('move')).css({
        cursor: 'move',
        position: 'absolute',
        zIndex: 360
      });

      if (Touch.support) {
        $track.on('touchstart.jcrop', Touch.createDragger('move'));
      }

      $img_holder.append($track);
      disableHandles();

      return {
        updateVisible: updateVisible,
        update: update,
        release: release,
        refresh: refresh,
        isAwake: function () {
          return awake;
        },
        setCursor: function (cursor) {
          $track.css('cursor', cursor);
        },
        enableHandles: enableHandles,
        enableOnly: function () {
          seehandles = true;
        },
        disableHandles: disableHandles,
        animMode: animMode,
        setBgOpacity: setBgOpacity,
        done: done
      };
    }());
    
    //}}}
    // Tracker Module {{{
    var Tracker = (function () {
      var onMove = function () {},
          onDone = function () {},
          trackDoc = options.trackDocument;

      function toFront() //{{{
      {
        $trk.css({
          zIndex: 450
        });
        if (Touch.support) {
          $(document)
            .on('touchmove.jcrop', trackTouchMove)
            .on('touchend.jcrop', trackTouchEnd);
        }
        if (trackDoc) {
          $(document)
            .on('mousemove.jcrop',trackMove)
            .on('mouseup.jcrop',trackUp);
        }
      } 
      //}}}
      function toBack() //{{{
      {
        $trk.css({
          zIndex: 290
        });
        $(document).off('.jcrop');
      } 
      //}}}
      function trackMove(e) //{{{
      {
        onMove(mouseAbs(e));
        return false;
      } 
      //}}}
      function trackUp(e) //{{{
      {
        e.preventDefault();
        e.stopPropagation();

        if (btndown) {
          btndown = false;

          onDone(mouseAbs(e));

          if (Selection.isAwake()) {
            options.onSelect.call(api, unscale(Coords.getFixed()));
          }

          toBack();
          onMove = function () {};
          onDone = function () {};
        }

        return false;
      }
      //}}}
      function activateHandlers(move, done) //{{{
      {
        btndown = true;
        onMove = move;
        onDone = done;
        toFront();
        return false;
      }
      //}}}
      function trackTouchMove(e) //{{{
      {
        e.pageX = e.originalEvent.changedTouches[0].pageX;
        e.pageY = e.originalEvent.changedTouches[0].pageY;
        return trackMove(e);
      }
      //}}}
      function trackTouchEnd(e) //{{{
      {
        e.pageX = e.originalEvent.changedTouches[0].pageX;
        e.pageY = e.originalEvent.changedTouches[0].pageY;
        return trackUp(e);
      }
      //}}}

      if (!trackDoc) {
        $trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp);
      }

      $img.before($trk);
      return {
        activateHandlers: activateHandlers
      };
    }());
    //}}}
    // KeyManager Module {{{
    var KeyManager = (function () {
      var $keymgr = $('<input type="radio" />').css({
        position: 'fixed',
        left: '-120px',
        width: '12px'
      }).addClass('jcrop-keymgr'),

        $keywrap = $('<div />').css({
          position: 'absolute',
          overflow: 'hidden'
        }).append($keymgr);

      function watchKeys() //{{{
      {
        if (options.keySupport) {
          $keymgr.show();
          $keymgr.focus();
        }
      }
      //}}}
      function onBlur(e) //{{{
      {
        $keymgr.hide();
      }
      //}}}
      function doNudge(e, x, y) //{{{
      {
        if (options.allowMove) {
          Coords.moveOffset([x, y]);
          Selection.updateVisible(true);
        }
        e.preventDefault();
        e.stopPropagation();
      }
      //}}}
      function parseKey(e) //{{{
      {
        if (e.ctrlKey || e.metaKey) {
          return true;
        }
        shift_down = e.shiftKey ? true : false;
        var nudge = shift_down ? 10 : 1;

        switch (e.keyCode) {
        case 37:
          doNudge(e, -nudge, 0);
          break;
        case 39:
          doNudge(e, nudge, 0);
          break;
        case 38:
          doNudge(e, 0, -nudge);
          break;
        case 40:
          doNudge(e, 0, nudge);
          break;
        case 9:
          return true;
        }

        return false;
      }
      //}}}

      if (options.keySupport) {
        $keymgr.keydown(parseKey).blur(onBlur);

        $keymgr.css({
          position: 'absolute',
          left: '-20px'
        });
        $keywrap.append($keymgr).insertBefore($img);
      }


      return {
        watchKeys: watchKeys
      };
    }());
    //}}}
    // }}}
    // API methods {{{
    function setClass(cname) //{{{
    {
      $div.removeClass().addClass(cssClass('holder')).addClass(cname);
    }
    //}}}
    function setSelect(rect) //{{{
    {
      setSelectRaw([rect[0] / xscale, rect[1] / yscale, rect[2] / xscale, rect[3] / yscale]);
      options.onSelect.call(api, unscale(Coords.getFixed()));
      Selection.enableHandles();
    }
    //}}}
    function setSelectRaw(l) //{{{
    {
      Coords.setPressed([l[0], l[1]]);
      Coords.setCurrent([l[2], l[3]]);
      Selection.update();
    }
    //}}}
    function tellSelect() //{{{
    {
      return unscale(Coords.getFixed());
    }
    //}}}
    function tellScaled() //{{{
    {
      return Coords.getFixed();
    }
    //}}}
    function setOptionsNew(opt) //{{{
    {
      setOptions(opt);
      interfaceUpdate();
    }
    //}}}
    function disableCrop() //{{{
    {
      options.disabled = true;
      Selection.disableHandles();
      Selection.setCursor('default');
    }
    //}}}
    function enableCrop() //{{{
    {
      options.disabled = false;
      interfaceUpdate();
    }
    //}}}
    function cancelCrop() //{{{
    {
      Selection.done();
      Tracker.activateHandlers(null, null);
    }
    //}}}
    function destroy() //{{{
    {
      $div.remove();
      $origimg.show();
      $origimg.css('visibility','visible');
      $(obj).removeData('Jcrop');
    }
    //}}}
    function colorChangeMacro($obj,color,now) {
      var mycolor = color || options.bgColor;
      if (options.bgFade && supportsColorFade() && options.fadeTime && !now) {
        $obj.animate({
          backgroundColor: mycolor
        }, {
          queue: false,
          duration: options.fadeTime
        });
      } else {
        $obj.css('backgroundColor', mycolor);
      }
    }
    function interfaceUpdate(alt) //{{{
    // This method tweaks the interface based on options object.
    // Called when options are changed and at end of initialization.
    {
      if (options.allowResize) {
        if (alt) {
          Selection.enableOnly();
        } else {
          Selection.enableHandles();
        }
      } else {
        Selection.disableHandles();
      }

      Selection.setCursor(options.allowMove ? 'move' : 'default');

      if (options.hasOwnProperty('trueSize')) {
        xscale = options.trueSize[0] / boundx;
        yscale = options.trueSize[1] / boundy;
      }

      if (options.hasOwnProperty('setSelect')) {
        setSelect(options.setSelect);
        Selection.done();
        delete(options.setSelect);
      }

      Shade.refresh();

      if (options.bgColor != bgcolor) {
        colorChangeMacro(
          options.shade? Shade.getShades(): $div,
          options.shade?
            (options.shadeColor || options.bgColor):
            options.bgColor
        );
        bgcolor = options.bgColor;
      }

      if (bgopacity != options.bgOpacity) {
        bgopacity = options.bgOpacity;
        if (options.shade) Shade.refresh();
          else Selection.setBgOpacity(bgopacity);
      }

      xlimit = options.maxSize[0] || 0;
      ylimit = options.maxSize[1] || 0;
      xmin = options.minSize[0] || 0;
      ymin = options.minSize[1] || 0;

      if (options.hasOwnProperty('outerImage')) {
        $img.attr('src', options.outerImage);
        delete(options.outerImage);
      }

      Selection.refresh();
    }
    //}}}
    //}}}

    interfaceUpdate(true);

    var api = {
      setSelect: setSelect,
      setOptions: setOptionsNew,
      tellSelect: tellSelect,
      tellScaled: tellScaled,
      setClass: setClass,

      disable: disableCrop,
      enable: enableCrop,
      cancel: cancelCrop,
      release: Selection.release,
      destroy: destroy,

      focus: KeyManager.watchKeys,

      getBounds: function () {
        return [boundx * xscale, boundy * yscale];
      },
      getWidgetSize: function () {
        return [boundx, boundy];
      },
      getScaleFactor: function () {
        return [xscale, yscale];
      },
      getOptions: function() {
        // careful: internal values are returned
        return options;
      },

      ui: {
        holder: $div,
        selection: $sel
      }
    };

    $origimg.data('Jcrop', api);
    return api;
  };
  $.fn.Jcrop = function (options, callback) //{{{
  {
    var api;
    // Iterate over each object, attach Jcrop
    this.each(function () {
      // If we've already attached to this object
      if ($(this).data('Jcrop')) {
        // The API can be requested this way (undocumented)
        if (options === 'api') return $(this).data('Jcrop');
        // Otherwise, we just reset the options...
        else $(this).data('Jcrop').setOptions(options);
      }
      // If we haven't been attached, preload and attach
      else {
        if (this.tagName == 'IMG')
          $.Jcrop.Loader(this,function(){
            $(this).css({display:'block',visibility:'hidden'});
            api = $.Jcrop(this, options);
            if ($.isFunction(callback)) callback.call(api);
          });
        else {
          $(this).css({display:'block',visibility:'hidden'});
          api = $.Jcrop(this, options);
          if ($.isFunction(callback)) callback.call(api);
        }
      }
    });

    // Return "this" so the object is chainable (jQuery-style)
    return this;
  };
  //}}}
  // $.Jcrop.Loader - basic image loader {{{

  $.Jcrop.Loader = function(imgobj,success,error){
    var $img = $(imgobj), img = $img[0];

    function completeCheck(){
      if (img.complete) {
        $img.off('.jcloader');
        if ($.isFunction(success)) success.call(img);
      }
      else window.setTimeout(completeCheck,50);
    }

    $img
      .on('load.jcloader',completeCheck)
      .on('error.jcloader',function(e){
        $img.off('.jcloader');
        if ($.isFunction(error)) error.call(img);
      });

    if (img.complete && $.isFunction(success)){
      $img.off('.jcloader');
      success.call(img);
    }
  };

  //}}}
  // Global Defaults {{{
  $.Jcrop.defaults = {

    // Basic Settings
    allowMove: true,
    allowResize: true,

    trackDocument: true,

    // Styling Options
    baseClass: 'jcrop',
    addClass: null,
    bgColor: 'black',
    bgOpacity: 0.6,
    bgFade: false,

    aspectRatio: 0,
    keySupport: true,
    createHandles: ['n','s','e','w','nw','ne','se','sw'],
    createBorders: ['n','s','e','w'],
    drawBorders: true,
    dragEdges: true,
    fixedSupport: true,
    touchSupport: null,

    shade: null,

    boxWidth: 0,
    boxHeight: 0,
    boundary: 2,
    fadeTime: 400,
    animationDelay: 20,
    swingSpeed: 3,

    maxSize: [0, 0],
    minSize: [0, 0],

    // Callbacks / Event Handlers
    onChange: function () {},
    onSelect: function () {},
    onDblClick: function () {},
    onRelease: function () {}
  };

  // }}}
}(uploadcare.jQuery));
(function() {
  var $, utils;

  $ = uploadcare.jQuery, utils = uploadcare.utils;

  uploadcare.namespace('crop', function(ns) {
    return ns.CropWidget = (function() {
      var cropModifierRegExp;

      function CropWidget(element, originalSize, crop) {
        this.element = element;
        this.originalSize = originalSize;
        if (crop == null) {
          crop = {};
        }
        this.__api = $.Jcrop(this.element[0], {
          trueSize: this.originalSize,
          baseClass: 'uploadcare--jcrop',
          addClass: 'uploadcare--crop-widget',
          createHandles: ['nw', 'ne', 'se', 'sw'],
          bgColor: 'transparent',
          bgOpacity: .8
        });
        this.setCrop(crop);
        this.setSelection();
      }

      CropWidget.prototype.setCrop = function(crop) {
        this.crop = crop;
        return this.__api.setOptions({
          aspectRatio: crop.preferedSize ? crop.preferedSize[0] / crop.preferedSize[1] : 0,
          minSize: crop.notLess ? utils.fitSize(crop.preferedSize, this.originalSize) : [0, 0]
        });
      };

      CropWidget.prototype.setSelection = function(selection) {
        var center, left, size, top;
        if (selection) {
          center = selection.center;
          size = [selection.width, selection.height];
        } else {
          center = true;
          size = this.originalSize;
        }
        if (this.crop.preferedSize) {
          size = utils.fitSize(this.crop.preferedSize, size, true);
        }
        if (center) {
          left = (this.originalSize[0] - size[0]) / 2;
          top = (this.originalSize[1] - size[1]) / 2;
        } else {
          left = selection.left || 0;
          top = selection.top || 0;
        }
        return this.__api.setSelect([left, top, size[0] + left, size[1] + top]);
      };

      cropModifierRegExp = /-\/crop\/([0-9]+)x([0-9]+)(\/(center|([0-9]+),([0-9]+)))?\//i;

      CropWidget.prototype.__parseModifiers = function(modifiers) {
        var raw;
        if (raw = modifiers != null ? modifiers.match(cropModifierRegExp) : void 0) {
          return {
            width: parseInt(raw[1], 10),
            height: parseInt(raw[2], 10),
            center: raw[4] === 'center',
            left: parseInt(raw[5], 10) || void 0,
            top: parseInt(raw[6], 10) || void 0
          };
        }
      };

      CropWidget.prototype.setSelectionFromModifiers = function(modifiers) {
        return this.setSelection(this.__parseModifiers(modifiers));
      };

      CropWidget.prototype.getSelection = function() {
        var coords, left, top;
        coords = this.__api.tellSelect();
        left = Math.round(Math.max(0, coords.x));
        top = Math.round(Math.max(0, coords.y));
        return {
          left: left,
          top: top,
          width: Math.round(Math.min(this.originalSize[0], coords.x2)) - left,
          height: Math.round(Math.min(this.originalSize[1], coords.y2)) - top
        };
      };

      CropWidget.prototype.applySelectionToFile = function(file) {
        var _this = this;
        return file.then(function(info) {
          return utils.applyCropCoordsToInfo(info, _this.crop, _this.originalSize, _this.getSelection());
        });
      };

      return CropWidget;

    })();
  });

}).call(this);
(function() {
  var $, namespace, s, utils,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  namespace = uploadcare.namespace, s = uploadcare.settings, $ = uploadcare.jQuery, utils = uploadcare.utils;

  namespace('files', function(ns) {
    return ns.BaseFile = (function() {
      function BaseFile(param, settings, sourceInfo) {
        var _base;
        this.settings = settings;
        this.sourceInfo = sourceInfo != null ? sourceInfo : {};
        this.__extendApi = __bind(this.__extendApi, this);
        this.__cancel = __bind(this.__cancel, this);
        this.__resolveApi = __bind(this.__resolveApi, this);
        this.__rejectApi = __bind(this.__rejectApi, this);
        this.__runValidators = __bind(this.__runValidators, this);
        this.__fileInfo = __bind(this.__fileInfo, this);
        this.__handleFileData = __bind(this.__handleFileData, this);
        this.__updateInfo = __bind(this.__updateInfo, this);
        this.__completeUpload = __bind(this.__completeUpload, this);
        this.fileId = null;
        this.fileName = null;
        this.sanitizedName = null;
        this.fileSize = null;
        this.isStored = null;
        this.cdnUrlModifiers = null;
        this.isImage = null;
        this.imageInfo = null;
        this.mimeType = null;
        this.s3Bucket = null;
        (_base = this.sourceInfo).source || (_base.source = this.sourceName);
        this.__setupValidation();
        this.__initApi();
      }

      BaseFile.prototype.__startUpload = function() {
        return $.Deferred().resolve();
      };

      BaseFile.prototype.__completeUpload = function() {
        var check, logger, ncalls, timeout,
          _this = this;
        ncalls = 0;
        if (this.settings.debugUploads) {
          utils.debug("Load file info.", this.fileId, this.settings.publicKey);
          logger = setInterval(function() {
            return utils.debug("Still waiting for file ready.", ncalls, _this.fileId, _this.settings.publicKey);
          }, 5000);
          this.apiDeferred.done(function() {
            return utils.debug("File uploaded.", ncalls, _this.fileId, _this.settings.publicKey);
          }).always(function() {
            return clearInterval(logger);
          });
        }
        timeout = 100;
        return (check = function() {
          if (_this.apiDeferred.state() === 'pending') {
            ncalls += 1;
            return _this.__updateInfo().done(function() {
              setTimeout(check, timeout);
              return timeout += 50;
            });
          }
        })();
      };

      BaseFile.prototype.__updateInfo = function() {
        var _this = this;
        return utils.jsonp("" + this.settings.urlBase + "/info/", 'GET', {
          jsonerrors: 1,
          file_id: this.fileId,
          pub_key: this.settings.publicKey,
          wait_is_ready: +(this.isImage === null)
        }, {
          headers: {
            'X-UC-User-Agent': this.settings._userAgent
          }
        }).fail(function(reason) {
          if (_this.settings.debugUploads) {
            utils.log("Can't load file info. Probably removed.", _this.fileId, _this.settings.publicKey, reason);
          }
          return _this.__rejectApi('info');
        }).done(this.__handleFileData);
      };

      BaseFile.prototype.__handleFileData = function(data) {
        this.fileName = data.original_filename;
        this.sanitizedName = data.filename;
        this.fileSize = data.size;
        this.isImage = data.is_image;
        this.imageInfo = data.image_info;
        this.mimeType = data.mime_type;
        this.isStored = data.is_stored;
        this.s3Bucket = data.s3_bucket;
        if (data.default_effects) {
          this.cdnUrlModifiers = "-/" + data.default_effects;
        }
        if (this.s3Bucket && this.cdnUrlModifiers) {
          this.__rejectApi('baddata');
        }
        this.__runValidators();
        if (data.is_ready) {
          return this.__resolveApi();
        }
      };

      BaseFile.prototype.__progressInfo = function() {
        var _ref;
        return {
          state: this.__progressState,
          uploadProgress: this.__progress,
          progress: (_ref = this.__progressState) === 'ready' || _ref === 'error' ? 1 : this.__progress * 0.9,
          incompleteFileInfo: this.__fileInfo()
        };
      };

      BaseFile.prototype.__fileInfo = function() {
        var urlBase;
        if (this.s3Bucket) {
          urlBase = "https://" + this.s3Bucket + ".s3.amazonaws.com/" + this.fileId + "/" + this.sanitizedName;
        } else {
          urlBase = "" + this.settings.cdnBase + "/" + this.fileId + "/";
        }
        return {
          uuid: this.fileId,
          name: this.fileName,
          size: this.fileSize,
          isStored: this.isStored,
          isImage: !this.s3Bucket && this.isImage,
          originalImageInfo: this.imageInfo,
          mimeType: this.mimeType,
          originalUrl: this.fileId ? urlBase : null,
          cdnUrl: this.fileId ? "" + urlBase + (this.cdnUrlModifiers || '') : null,
          cdnUrlModifiers: this.cdnUrlModifiers,
          sourceInfo: this.sourceInfo
        };
      };

      BaseFile.prototype.__setupValidation = function() {
        this.validators = this.settings.validators || this.settings.__validators || [];
        if (this.settings.imagesOnly) {
          return this.validators.push(function(info) {
            if (info.isImage === false) {
              throw new Error('image');
            }
          });
        }
      };

      BaseFile.prototype.__runValidators = function() {
        var err, info, v, _i, _len, _ref, _results;
        info = this.__fileInfo();
        try {
          _ref = this.validators;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            v = _ref[_i];
            _results.push(v(info));
          }
          return _results;
        } catch (_error) {
          err = _error;
          return this.__rejectApi(err.message);
        }
      };

      BaseFile.prototype.__initApi = function() {
        this.apiDeferred = $.Deferred();
        this.__progressState = 'uploading';
        this.__progress = 0;
        return this.__notifyApi();
      };

      BaseFile.prototype.__notifyApi = function() {
        return this.apiDeferred.notify(this.__progressInfo());
      };

      BaseFile.prototype.__rejectApi = function(err) {
        this.__progressState = 'error';
        this.__notifyApi();
        return this.apiDeferred.reject(err, this.__fileInfo());
      };

      BaseFile.prototype.__resolveApi = function() {
        this.__progressState = 'ready';
        this.__notifyApi();
        return this.apiDeferred.resolve(this.__fileInfo());
      };

      BaseFile.prototype.__cancel = function() {
        return this.__rejectApi('user');
      };

      BaseFile.prototype.__extendApi = function(api) {
        var _this = this;
        api.cancel = this.__cancel;
        api.pipe = api.then = function() {
          return _this.__extendApi(utils.fixedPipe.apply(utils, [api].concat(__slice.call(arguments))));
        };
        return api;
      };

      BaseFile.prototype.promise = function() {
        var op,
          _this = this;
        if (!this.__apiPromise) {
          this.__apiPromise = this.__extendApi(this.apiDeferred.promise());
          this.__runValidators();
          if (this.apiDeferred.state() === 'pending') {
            op = this.__startUpload();
            op.done(function() {
              _this.__progressState = 'uploaded';
              _this.__progress = 1;
              _this.__notifyApi();
              return _this.__completeUpload();
            });
            op.progress(function(progress) {
              if (progress > _this.__progress) {
                _this.__progress = progress;
                return _this.__notifyApi();
              }
            });
            op.fail(function() {
              return _this.__rejectApi('upload');
            });
            this.apiDeferred.always(op.reject);
          }
        }
        return this.__apiPromise;
      };

      return BaseFile;

    })();
  });

  namespace('utils', function(utils) {
    utils.isFile = function(obj) {
      return obj && obj.done && obj.fail && obj.cancel;
    };
    return utils.valueToFile = function(value, settings) {
      if (value && !utils.isFile(value)) {
        value = uploadcare.fileFrom('uploaded', value, settings);
      }
      return value || null;
    };
  });

}).call(this);
(function() {
  var $, Blob, FileReader, URL, utils, _ref, _ref1;

  $ = uploadcare.jQuery, utils = uploadcare.utils, (_ref = uploadcare.utils, (_ref1 = _ref.abilities, Blob = _ref1.Blob, FileReader = _ref1.FileReader, URL = _ref1.URL));

  uploadcare.namespace('utils.image', function(ns) {
    var DataView, taskRunner;
    DataView = window.DataView;
    taskRunner = utils.taskRunner(1);
    ns.shrinkFile = function(file, settings) {
      var df,
        _this = this;
      df = $.Deferred();
      if (!(URL && DataView && Blob)) {
        return df.reject('support');
      }
      taskRunner(function(release) {
        var op;
        df.always(release);
        op = utils.imageLoader(URL.createObjectURL(file));
        op.always(function(img) {
          return URL.revokeObjectURL(img.src);
        });
        op.fail(function() {
          return df.reject('not image');
        });
        return op.done(function(img) {
          var exifOp;
          df.notify(.10);
          return exifOp = ns.getExif(file).always(function(exif) {
            var e, isJPEG;
            df.notify(.2);
            isJPEG = exifOp.state() === 'resolved';
            op = ns.shrinkImage(img, settings);
            op.progress(function(progress) {
              return df.notify(.2 + progress * .6);
            });
            op.fail(df.reject);
            op.done(function(canvas) {
              var format, quality;
              format = 'image/jpeg';
              quality = settings.quality || 0.8;
              if (!isJPEG && ns.hasTransparency(canvas)) {
                format = 'image/png';
                quality = void 0;
              }
              return utils.canvasToBlob(canvas, format, quality, function(blob) {
                canvas.width = canvas.height = 1;
                df.notify(.9);
                if (exif) {
                  op = ns.replaceJpegChunk(blob, 0xe1, [exif.buffer]);
                  op.done(df.resolve);
                  return op.fail(function() {
                    return df.resolve(blob);
                  });
                } else {
                  return df.resolve(blob);
                }
              });
            });
            return e = null;
          });
        });
      });
      return df.promise();
    };
    ns.shrinkImage = function(img, settings) {
      var cx, df, h, maxSize, maxSquare, originalW, ratio, run, runNative, sH, sW, step, w;
      df = $.Deferred();
      step = 0.71;
      if (img.width * step * img.height * step < settings.size) {
        return df.reject('not required');
      }
      sW = originalW = img.width;
      sH = img.height;
      ratio = sW / sH;
      w = Math.floor(Math.sqrt(settings.size * ratio));
      h = Math.floor(settings.size / Math.sqrt(settings.size * ratio));
      maxSquare = 5000000;
      maxSize = 4096;
      run = function() {
        if (sW <= w) {
          df.resolve(img);
          return;
        }
        return utils.defer(function() {
          var canvas;
          sW = Math.round(sW * step);
          sH = Math.round(sH * step);
          if (sW * step < w) {
            sW = w;
            sH = h;
          }
          if (sW * sH > maxSquare) {
            sW = Math.floor(Math.sqrt(maxSquare * ratio));
            sH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
          }
          if (sW > maxSize) {
            sW = maxSize;
            sH = Math.round(sW / ratio);
          }
          if (sH > maxSize) {
            sH = maxSize;
            sW = Math.round(ratio * sH);
          }
          canvas = document.createElement('canvas');
          canvas.width = sW;
          canvas.height = sH;
          canvas.getContext('2d').drawImage(img, 0, 0, sW, sH);
          img.src = '//:0';
          img.width = img.height = 1;
          img = canvas;
          df.notify((originalW - sW) / (originalW - w));
          return run();
        });
      };
      runNative = function() {
        var canvas, cx;
        canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        cx = canvas.getContext('2d');
        cx.imageSmoothingQuality = 'high';
        cx.drawImage(img, 0, 0, w, h);
        img.src = '//:0';
        img.width = img.height = 1;
        return df.resolve(canvas);
      };
      cx = document.createElement('canvas').getContext('2d');
      if ('imageSmoothingQuality' in cx) {
        runNative();
      } else {
        run();
      }
      return df.promise();
    };
    ns.drawFileToCanvas = function(file, mW, mH, bg, maxSource) {
      var df, op;
      df = $.Deferred();
      if (!URL) {
        return df.reject('support');
      }
      op = utils.imageLoader(URL.createObjectURL(file));
      op.always(function(img) {
        return URL.revokeObjectURL(img.src);
      });
      op.fail(function() {
        return df.reject('not image');
      });
      op.done(function(img) {
        df.always(function() {
          return img.src = '//:0';
        });
        if (maxSource && img.width * img.height > maxSource) {
          return df.reject('max source');
        }
        return ns.getExif(file).always(function(exif) {
          var canvas, ctx, dH, dW, orientation, sSize, swap, trns, _ref2, _ref3;
          orientation = ns.parseExifOrientation(exif) || 1;
          swap = orientation > 4;
          sSize = swap ? [img.height, img.width] : [img.width, img.height];
          _ref2 = utils.fitSize(sSize, [mW, mH]), dW = _ref2[0], dH = _ref2[1];
          trns = [[1, 0, 0, 1, 0, 0], [-1, 0, 0, 1, dW, 0], [-1, 0, 0, -1, dW, dH], [1, 0, 0, -1, 0, dH], [0, 1, 1, 0, 0, 0], [0, 1, -1, 0, dW, 0], [0, -1, -1, 0, dW, dH], [0, -1, 1, 0, 0, dH]][orientation - 1];
          if (!trns) {
            return df.reject('bad image');
          }
          canvas = document.createElement('canvas');
          canvas.width = dW;
          canvas.height = dH;
          ctx = canvas.getContext('2d');
          ctx.transform.apply(ctx, trns);
          if (swap) {
            _ref3 = [dH, dW], dW = _ref3[0], dH = _ref3[1];
          }
          if (bg) {
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, dW, dH);
          }
          ctx.drawImage(img, 0, 0, dW, dH);
          return df.resolve(canvas, sSize);
        });
      });
      return df.promise();
    };
    ns.readJpegChunks = function(file) {
      var df, pos, readNext, readNextChunk, readToView;
      readToView = function(file, cb) {
        var reader;
        reader = new FileReader();
        reader.onload = function() {
          return cb(new DataView(reader.result));
        };
        reader.onerror = function(e) {
          return df.reject('reader', e);
        };
        return reader.readAsArrayBuffer(file);
      };
      readNext = function() {
        return readToView(file.slice(pos, pos + 128), function(view) {
          var i, _i, _ref2;
          for (i = _i = 0, _ref2 = view.byteLength; 0 <= _ref2 ? _i < _ref2 : _i > _ref2; i = 0 <= _ref2 ? ++_i : --_i) {
            if (view.getUint8(i) === 0xff) {
              pos += i;
              break;
            }
          }
          return readNextChunk();
        });
      };
      readNextChunk = function() {
        var startPos;
        startPos = pos;
        return readToView(file.slice(pos, pos += 4), function(view) {
          var length, marker;
          if (view.byteLength !== 4 || view.getUint8(0) !== 0xff) {
            return df.reject('corrupted');
          }
          marker = view.getUint8(1);
          if (marker === 0xda) {
            return df.resolve();
          }
          length = view.getUint16(2) - 2;
          return readToView(file.slice(pos, pos += length), function(view) {
            if (view.byteLength !== length) {
              return df.reject('corrupted');
            }
            df.notify(startPos, length, marker, view);
            return readNext();
          });
        });
      };
      df = $.Deferred();
      if (!(FileReader && DataView)) {
        return df.reject('support');
      }
      pos = 2;
      readToView(file.slice(0, 2), function(view) {
        if (view.getUint16(0) !== 0xffd8) {
          return df.reject('not jpeg');
        }
        return readNext();
      });
      return df.promise();
    };
    ns.replaceJpegChunk = function(blob, marker, chunks) {
      var df, oldChunkLength, oldChunkPos, op;
      df = $.Deferred();
      oldChunkPos = [];
      oldChunkLength = [];
      op = ns.readJpegChunks(blob);
      op.fail(df.reject);
      op.progress(function(pos, length, oldMarker) {
        if (oldMarker === marker) {
          oldChunkPos.push(pos);
          return oldChunkLength.push(length);
        }
      });
      op.done(function() {
        var chunk, i, intro, newChunks, pos, _i, _j, _len, _ref2;
        newChunks = [blob.slice(0, 2)];
        for (_i = 0, _len = chunks.length; _i < _len; _i++) {
          chunk = chunks[_i];
          intro = new DataView(new ArrayBuffer(4));
          intro.setUint16(0, 0xff00 + marker);
          intro.setUint16(2, chunk.byteLength + 2);
          newChunks.push(intro.buffer);
          newChunks.push(chunk);
        }
        pos = 2;
        for (i = _j = 0, _ref2 = oldChunkPos.length; 0 <= _ref2 ? _j < _ref2 : _j > _ref2; i = 0 <= _ref2 ? ++_j : --_j) {
          if (oldChunkPos[i] > pos) {
            newChunks.push(blob.slice(pos, oldChunkPos[i]));
          }
          pos = oldChunkPos[i] + oldChunkLength[i] + 4;
        }
        newChunks.push(blob.slice(pos, blob.size));
        return df.resolve(new Blob(newChunks, {
          type: blob.type
        }));
      });
      return df.promise();
    };
    ns.getExif = function(file) {
      var exif, op;
      exif = null;
      op = ns.readJpegChunks(file);
      op.progress(function(pos, l, marker, view) {
        if (!exif && marker === 0xe1) {
          if (view.byteLength >= 14) {
            if (view.getUint32(0) === 0x45786966 && view.getUint16(4) === 0) {
              return exif = view;
            }
          }
        }
      });
      return op.then(function() {
        return exif;
      }, function(reason) {
        return $.Deferred().reject(exif, reason);
      });
    };
    ns.parseExifOrientation = function(exif) {
      var count, i, little, offset, _i;
      if (!exif || exif.byteLength < 14 || exif.getUint32(0) !== 0x45786966 || exif.getUint16(4) !== 0) {
        return null;
      }
      if (exif.getUint16(6) === 0x4949) {
        little = true;
      } else if (exif.getUint16(6) === 0x4D4D) {
        little = false;
      } else {
        return null;
      }
      if (exif.getUint16(8, little) !== 0x002A) {
        return null;
      }
      offset = 8 + exif.getUint32(10, little);
      count = exif.getUint16(offset - 2, little);
      for (i = _i = 0; 0 <= count ? _i < count : _i > count; i = 0 <= count ? ++_i : --_i) {
        if (exif.byteLength < offset + 10) {
          return null;
        }
        if (exif.getUint16(offset, little) === 0x0112) {
          return exif.getUint16(offset + 8, little);
        }
        offset += 12;
      }
      return null;
    };
    return ns.hasTransparency = function(img) {
      var canvas, ctx, data, i, pcsn, _i, _ref2;
      pcsn = 50;
      canvas = document.createElement('canvas');
      canvas.width = canvas.height = pcsn;
      ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, pcsn, pcsn);
      data = ctx.getImageData(0, 0, pcsn, pcsn).data;
      canvas.width = canvas.height = 1;
      for (i = _i = 3, _ref2 = data.length; _i < _ref2; i = _i += 4) {
        if (data[i] < 254) {
          return true;
        }
      }
      return false;
    };
  });

}).call(this);
(function() {
  var $, utils,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = uploadcare.jQuery, utils = uploadcare.utils;

  uploadcare.namespace('files', function(ns) {
    return ns.ObjectFile = (function(_super) {
      var _directRunner;

      __extends(ObjectFile, _super);

      _directRunner = null;

      ObjectFile.prototype.sourceName = 'local';

      function ObjectFile(__file) {
        this.__file = __file;
        this.setFile = __bind(this.setFile, this);
        ObjectFile.__super__.constructor.apply(this, arguments);
        this.fileName = this.__file.name || 'original';
        this.__notifyApi();
      }

      ObjectFile.prototype.setFile = function(file) {
        if (file) {
          this.__file = file;
        }
        this.sourceInfo.file = this.__file;
        if (!this.__file) {
          return;
        }
        this.fileSize = this.__file.size;
        this.fileType = this.__file.type || 'application/octet-stream';
        if (this.settings.debugUploads) {
          utils.debug("Use local file.", this.fileName, this.fileType, this.fileSize);
        }
        this.__runValidators();
        return this.__notifyApi();
      };

      ObjectFile.prototype.__startUpload = function() {
        var df, ios, resizeShare,
          _this = this;
        this.apiDeferred.always(function() {
          return _this.__file = null;
        });
        if (this.__file.size >= this.settings.multipartMinSize && utils.abilities.Blob) {
          this.setFile();
          return this.multipartUpload();
        }
        ios = utils.abilities.iOSVersion;
        if (!this.settings.imageShrink || (ios && ios < 8)) {
          this.setFile();
          return this.directUpload();
        }
        df = $.Deferred();
        resizeShare = .4;
        utils.image.shrinkFile(this.__file, this.settings.imageShrink).progress(function(progress) {
          return df.notify(progress * resizeShare);
        }).done(this.setFile).fail(function() {
          _this.setFile();
          return resizeShare = resizeShare * .1;
        }).always(function() {
          df.notify(resizeShare);
          return _this.directUpload().done(df.resolve).fail(df.reject).progress(function(progress) {
            return df.notify(resizeShare + progress * (1 - resizeShare));
          });
        });
        return df;
      };

      ObjectFile.prototype.__autoAbort = function(xhr) {
        this.apiDeferred.fail(xhr.abort);
        return xhr;
      };

      ObjectFile.prototype.directRunner = function(task) {
        if (!_directRunner) {
          _directRunner = utils.taskRunner(this.settings.parallelDirectUploads);
        }
        return _directRunner(task);
      };

      ObjectFile.prototype.directUpload = function() {
        var df,
          _this = this;
        df = $.Deferred();
        if (!this.__file) {
          this.__rejectApi('baddata');
          return df;
        }
        if (this.fileSize > 100 * 1024 * 1024) {
          this.__rejectApi('size');
          return df;
        }
        this.directRunner(function(release) {
          var formData;
          df.always(release);
          if (_this.apiDeferred.state() !== 'pending') {
            return;
          }
          formData = new FormData();
          formData.append('UPLOADCARE_PUB_KEY', _this.settings.publicKey);
          formData.append('signature', _this.settings.secureSignature);
          formData.append('expire', _this.settings.secureExpire);
          formData.append('UPLOADCARE_STORE', _this.settings.doNotStore ? '' : 'auto');
          formData.append('file', _this.__file, _this.fileName);
          formData.append('file_name', _this.fileName);
          formData.append('source', _this.sourceInfo.source);
          return _this.__autoAbort($.ajax({
            xhr: function() {
              var xhr;
              xhr = $.ajaxSettings.xhr();
              if (xhr.upload) {
                xhr.upload.addEventListener('progress', function(e) {
                  return df.notify(e.loaded / e.total);
                }, false);
              }
              return xhr;
            },
            crossDomain: true,
            type: 'POST',
            url: "" + _this.settings.urlBase + "/base/?jsonerrors=1",
            headers: {
              'X-UC-User-Agent': _this.settings._userAgent
            },
            contentType: false,
            processData: false,
            data: formData,
            dataType: 'json',
            error: df.reject,
            success: function(data) {
              if (data != null ? data.file : void 0) {
                _this.fileId = data.file;
                return df.resolve();
              } else {
                return df.reject();
              }
            }
          }));
        });
        return df;
      };

      ObjectFile.prototype.multipartUpload = function() {
        var df,
          _this = this;
        df = $.Deferred();
        if (!this.__file) {
          return df;
        }
        this.multipartStart().done(function(data) {
          return _this.uploadParts(data.parts, data.uuid).done(function() {
            return _this.multipartComplete(data.uuid).done(function(data) {
              _this.fileId = data.uuid;
              _this.__handleFileData(data);
              return df.resolve();
            }).fail(df.reject);
          }).progress(df.notify).fail(df.reject);
        }).fail(df.reject);
        return df;
      };

      ObjectFile.prototype.multipartStart = function() {
        var data,
          _this = this;
        data = {
          UPLOADCARE_PUB_KEY: this.settings.publicKey,
          signature: this.settings.secureSignature,
          expire: this.settings.secureExpire,
          filename: this.fileName,
          source: this.sourceInfo.source,
          size: this.fileSize,
          content_type: this.fileType,
          part_size: this.settings.multipartPartSize,
          UPLOADCARE_STORE: this.settings.doNotStore ? '' : 'auto'
        };
        return this.__autoAbort(utils.jsonp("" + this.settings.urlBase + "/multipart/start/?jsonerrors=1", 'POST', data, {
          headers: {
            'X-UC-User-Agent': this.settings._userAgent
          }
        }).fail(function(reason) {
          if (_this.settings.debugUploads) {
            return utils.log("Can't start multipart upload.", reason, data);
          }
        }));
      };

      ObjectFile.prototype.uploadParts = function(parts, uuid) {
        var df, i, inProgress, lastUpdate, progress, submit, submittedBytes, submittedParts, updateProgress, _i, _ref,
          _this = this;
        progress = [];
        lastUpdate = Date.now();
        updateProgress = function(i, loaded) {
          var total, _i, _len;
          progress[i] = loaded;
          if (Date.now() - lastUpdate < 250) {
            return;
          }
          lastUpdate = Date.now();
          total = 0;
          for (_i = 0, _len = progress.length; _i < _len; _i++) {
            loaded = progress[_i];
            total += loaded;
          }
          return df.notify(total / _this.fileSize);
        };
        df = $.Deferred();
        inProgress = 0;
        submittedParts = 0;
        submittedBytes = 0;
        submit = function() {
          var attempts, blob, bytesToSubmit, partNo, retry;
          if (submittedBytes >= _this.fileSize) {
            return;
          }
          bytesToSubmit = submittedBytes + _this.settings.multipartPartSize;
          if (_this.fileSize < bytesToSubmit + _this.settings.multipartMinLastPartSize) {
            bytesToSubmit = _this.fileSize;
          }
          blob = _this.__file.slice(submittedBytes, bytesToSubmit);
          submittedBytes = bytesToSubmit;
          partNo = submittedParts;
          inProgress += 1;
          submittedParts += 1;
          attempts = 0;
          return (retry = function() {
            if (_this.apiDeferred.state() !== 'pending') {
              return;
            }
            progress[partNo] = 0;
            return _this.__autoAbort($.ajax({
              xhr: function() {
                var xhr;
                xhr = $.ajaxSettings.xhr();
                xhr.responseType = 'text';
                if (xhr.upload) {
                  xhr.upload.addEventListener('progress', function(e) {
                    return updateProgress(partNo, e.loaded);
                  }, false);
                }
                return xhr;
              },
              url: parts[partNo],
              crossDomain: true,
              type: 'PUT',
              processData: false,
              contentType: _this.fileType,
              data: blob,
              error: function() {
                attempts += 1;
                if (attempts > _this.settings.multipartMaxAttempts) {
                  if (_this.settings.debugUploads) {
                    utils.log("Part #" + partNo + " and file upload is failed.", uuid);
                  }
                  return df.reject();
                } else {
                  if (_this.settings.debugUploads) {
                    utils.debug("Part #" + partNo + "(" + attempts + ") upload is failed.", uuid);
                  }
                  return retry();
                }
              },
              success: function() {
                inProgress -= 1;
                submit();
                if (!inProgress) {
                  return df.resolve();
                }
              }
            }));
          })();
        };
        for (i = _i = 0, _ref = this.settings.multipartConcurrency; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          submit();
        }
        return df;
      };

      ObjectFile.prototype.multipartComplete = function(uuid) {
        var data,
          _this = this;
        data = {
          UPLOADCARE_PUB_KEY: this.settings.publicKey,
          uuid: uuid
        };
        return this.__autoAbort(utils.jsonp("" + this.settings.urlBase + "/multipart/complete/?jsonerrors=1", "POST", data, {
          headers: {
            'X-UC-User-Agent': this.settings._userAgent
          }
        }).fail(function(reason) {
          if (_this.settings.debugUploads) {
            return utils.log("Can't complete multipart upload.", uuid, _this.settings.publicKey, reason);
          }
        }));
      };

      return ObjectFile;

    })(ns.BaseFile);
  });

}).call(this);
(function() {
  var $, utils,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = uploadcare.jQuery, utils = uploadcare.utils;

  uploadcare.namespace('files', function(ns) {
    return ns.InputFile = (function(_super) {
      __extends(InputFile, _super);

      InputFile.prototype.sourceName = 'local-compat';

      function InputFile(__input) {
        this.__input = __input;
        this.__cleanUp = __bind(this.__cleanUp, this);
        InputFile.__super__.constructor.apply(this, arguments);
        this.fileId = utils.uuid();
        this.fileName = $(this.__input).val().split('\\').pop();
        this.__notifyApi();
      }

      InputFile.prototype.__startUpload = function() {
        var df, formParam, iframeId, targetUrl;
        df = $.Deferred();
        targetUrl = "" + this.settings.urlBase + "/iframe/";
        iframeId = "uploadcare--iframe-" + this.fileId;
        this.__iframe = $('<iframe>').attr({
          id: iframeId,
          name: iframeId
        }).css('display', 'none').appendTo('body').on('load', df.resolve).on('error', df.reject);
        formParam = function(name, value) {
          return $('<input/>', {
            type: 'hidden',
            name: name,
            value: value
          });
        };
        $(this.__input).attr('name', 'file');
        this.__iframeForm = $('<form>').attr({
          method: 'POST',
          action: targetUrl,
          enctype: 'multipart/form-data',
          target: iframeId
        }).append(formParam('UPLOADCARE_PUB_KEY', this.settings.publicKey)).append(formParam('UPLOADCARE_SIGNATURE', this.settings.secureSignature)).append(formParam('UPLOADCARE_EXPIRE', this.settings.secureExpire)).append(formParam('UPLOADCARE_FILE_ID', this.fileId)).append(formParam('UPLOADCARE_STORE', this.settings.doNotStore ? '' : 'auto')).append(formParam('UPLOADCARE_SOURCE', this.sourceInfo.source)).append(this.__input).css('display', 'none').appendTo('body').submit();
        return df.always(this.__cleanUp);
      };

      InputFile.prototype.__cleanUp = function() {
        var _ref, _ref1;
        if ((_ref = this.__iframe) != null) {
          _ref.off('load error').remove();
        }
        if ((_ref1 = this.__iframeForm) != null) {
          _ref1.remove();
        }
        this.__iframe = null;
        return this.__iframeForm = null;
      };

      return InputFile;

    })(ns.BaseFile);
  });

}).call(this);
// changed:
//   Pusher.dependency_suffix = '.min'; (was '')
//   window.WEB_SOCKET_SWF_LOCATION = "https://s3.amazonaws.com/uploadcare-static/WebSocketMainInsecure.swf"

/*!
 * Pusher JavaScript Library v1.12.2
 * http://pusherapp.com/
 *
 * Copyright 2011, Pusher
 * Released under the MIT licence.
 */


;(function() {
  var Pusher, _require;

;(function() {
  if (Function.prototype.scopedTo === undefined) {
    Function.prototype.scopedTo = function(context, args) {
      var f = this;
      return function() {
        return f.apply(context, Array.prototype.slice.call(args || [])
                       .concat(Array.prototype.slice.call(arguments)));
      };
    };
  }

  Pusher = function(app_key, options) {
    this.options = options || {};
    this.key = app_key;
    this.channels = new Pusher.Channels();
    this.global_emitter = new Pusher.EventsDispatcher()

    var self = this;

    this.checkAppKey();

    this.connection = new Pusher.Connection(this.key, this.options);

    // Setup / teardown connection
    this.connection
      .bind('connected', function() {
        self.subscribeAll();
      })
      .bind('message', function(params) {
        var internal = (params.event.indexOf('pusher_internal:') === 0);
        if (params.channel) {
          var channel;
          if (channel = self.channel(params.channel)) {
            channel.emit(params.event, params.data);
          }
        }
        // Emit globaly [deprecated]
        if (!internal) self.global_emitter.emit(params.event, params.data);
      })
      .bind('disconnected', function() {
        self.channels.disconnect();
      })
      .bind('error', function(err) {
        Pusher.warn('Error', err);
      });

    Pusher.instances.push(this);

    if (Pusher.isReady) self.connect();
  };
  Pusher.instances = [];
  Pusher.prototype = {
    channel: function(name) {
      return this.channels.find(name);
    },

    connect: function() {
      this.connection.connect();
    },

    disconnect: function() {
      this.connection.disconnect();
    },

    bind: function(event_name, callback) {
      this.global_emitter.bind(event_name, callback);
      return this;
    },

    bind_all: function(callback) {
      this.global_emitter.bind_all(callback);
      return this;
    },

    subscribeAll: function() {
      var channel;
      for (channelName in this.channels.channels) {
        if (this.channels.channels.hasOwnProperty(channelName)) {
          this.subscribe(channelName);
        }
      }
    },

    subscribe: function(channel_name) {
      var self = this;
      var channel = this.channels.add(channel_name, this);

      if (this.connection.state === 'connected') {
        channel.authorize(this.connection.socket_id, this.options, function(err, data) {
          if (err) {
            channel.emit('pusher:subscription_error', data);
          } else {
            self.send_event('pusher:subscribe', {
              channel: channel_name,
              auth: data.auth,
              channel_data: data.channel_data
            });
          }
        });
      }
      return channel;
    },

    unsubscribe: function(channel_name) {
      this.channels.remove(channel_name);
      if (this.connection.state === 'connected') {
        this.send_event('pusher:unsubscribe', {
          channel: channel_name
        });
      }
    },

    send_event: function(event_name, data, channel) {
      return this.connection.send_event(event_name, data, channel);
    },

    checkAppKey: function() {
      if(this.key === null || this.key === undefined) {
        Pusher.warn('Warning', 'You must pass your app key when you instantiate Pusher.');
      }
    }
  };

  Pusher.Util = {
    extend: function extend(target, extensions) {
      for (var property in extensions) {
        if (extensions[property] && extensions[property].constructor &&
            extensions[property].constructor === Object) {
          target[property] = extend(target[property] || {}, extensions[property]);
        } else {
          target[property] = extensions[property];
        }
      }
      return target;
    },

    stringify: function stringify() {
      var m = ["Pusher"]
      for (var i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === "string") {
          m.push(arguments[i])
        } else {
          if (window['JSON'] == undefined) {
            m.push(arguments[i].toString());
          } else {
            m.push(JSON.stringify(arguments[i]))
          }
        }
      };
      return m.join(" : ")
    },

    arrayIndexOf: function(array, item) { // MSIE doesn't have array.indexOf
      var nativeIndexOf = Array.prototype.indexOf;
      if (array == null) return -1;
      if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
      for (i = 0, l = array.length; i < l; i++) if (array[i] === item) return i;
      return -1;
    }
  };

  // To receive log output provide a Pusher.log function, for example
  // Pusher.log = function(m){console.log(m)}
  Pusher.debug = function() {
    if (!Pusher.log) return
    Pusher.log(Pusher.Util.stringify.apply(this, arguments))
  }
  Pusher.warn = function() {
    if (window.console && window.console.warn) {
      window.console.warn(Pusher.Util.stringify.apply(this, arguments));
    } else {
      if (!Pusher.log) return
      Pusher.log(Pusher.Util.stringify.apply(this, arguments));
    }
  };

  // Pusher defaults
  Pusher.VERSION = '1.12.2';

  Pusher.host = 'ws.pusherapp.com';
  Pusher.ws_port = 80;
  Pusher.wss_port = 443;
  Pusher.channel_auth_endpoint = '/pusher/auth';
  Pusher.cdn_http = 'http://js.pusher.com/'
  Pusher.cdn_https = 'https://d3dy5gmtp8yhk7.cloudfront.net/'
  Pusher.dependency_suffix = '.min';
  Pusher.channel_auth_transport = 'ajax';
  Pusher.activity_timeout = 120000;
  Pusher.pong_timeout = 30000;

  Pusher.isReady = false;
  Pusher.ready = function() {
    Pusher.isReady = true;
    for (var i = 0, l = Pusher.instances.length; i < l; i++) {
      Pusher.instances[i].connect();
    }
  };

})();

;(function() {
/* Abstract event binding
Example:

    var MyEventEmitter = function(){};
    MyEventEmitter.prototype = new Pusher.EventsDispatcher;

    var emitter = new MyEventEmitter();

    // Bind to single event
    emitter.bind('foo_event', function(data){ alert(data)} );

    // Bind to all
    emitter.bind_all(function(eventName, data){ alert(data) });

--------------------------------------------------------*/

  function CallbackRegistry() {
    this._callbacks = {};
  };

  CallbackRegistry.prototype.get = function(eventName) {
    return this._callbacks[this._prefix(eventName)];
  };

  CallbackRegistry.prototype.add = function(eventName, callback) {
    var prefixedEventName = this._prefix(eventName);
    this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
    this._callbacks[prefixedEventName].push(callback);
  };

  CallbackRegistry.prototype.remove = function(eventName, callback) {
    if(this.get(eventName)) {
      var index = Pusher.Util.arrayIndexOf(this.get(eventName), callback);
      this._callbacks[this._prefix(eventName)].splice(index, 1);
    }
  };

  CallbackRegistry.prototype._prefix = function(eventName) {
    return "_" + eventName;
  };


  function EventsDispatcher(failThrough) {
    this.callbacks = new CallbackRegistry();
    this.global_callbacks = [];
    // Run this function when dispatching an event when no callbacks defined
    this.failThrough = failThrough;
  }

  EventsDispatcher.prototype.bind = function(eventName, callback) {
    this.callbacks.add(eventName, callback);
    return this;// chainable
  };

  EventsDispatcher.prototype.unbind = function(eventName, callback) {
    this.callbacks.remove(eventName, callback);
    return this;
  };

  EventsDispatcher.prototype.emit = function(eventName, data) {
    // Global callbacks
    for (var i = 0; i < this.global_callbacks.length; i++) {
      this.global_callbacks[i](eventName, data);
    }

    // Event callbacks
    var callbacks = this.callbacks.get(eventName);
    if (callbacks) {
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i](data);
      }
    } else if (this.failThrough) {
      this.failThrough(eventName, data)
    }

    return this;
  };

  EventsDispatcher.prototype.bind_all = function(callback) {
    this.global_callbacks.push(callback);
    return this;
  };

  Pusher.EventsDispatcher = EventsDispatcher;
})();

;(function() {
  /*-----------------------------------------------
    Helpers:
  -----------------------------------------------*/

  function capitalize(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  }


  function safeCall(method, obj, data) {
    if (obj[method] !== undefined) {
      obj[method](data);
    }
  }

  /*-----------------------------------------------
    The State Machine
  -----------------------------------------------*/
  function Machine(initialState, transitions, stateActions) {
    Pusher.EventsDispatcher.call(this);

    this.state = undefined;
    this.errors = [];

    // functions for each state
    this.stateActions = stateActions;

    // set up the transitions
    this.transitions = transitions;

    this.transition(initialState);
  };

  Machine.prototype.transition = function(nextState, data) {
    var prevState = this.state;
    var stateCallbacks = this.stateActions;

    if (prevState && (Pusher.Util.arrayIndexOf(this.transitions[prevState], nextState) == -1)) {
      this.emit('invalid_transition_attempt', {
        oldState: prevState,
        newState: nextState
      });

      throw new Error('Invalid transition [' + prevState + ' to ' + nextState + ']');
    }

    // exit
    safeCall(prevState + 'Exit', stateCallbacks, data);

    // tween
    safeCall(prevState + 'To' + capitalize(nextState), stateCallbacks, data);

    // pre
    safeCall(nextState + 'Pre', stateCallbacks, data);

    // change state:
    this.state = nextState;

    // handy to bind to
    this.emit('state_change', {
      oldState: prevState,
      newState: nextState
    });

    // Post:
    safeCall(nextState + 'Post', stateCallbacks, data);
  };

  Machine.prototype.is = function(state) {
    return this.state === state;
  };

  Machine.prototype.isNot = function(state) {
    return this.state !== state;
  };

  Pusher.Util.extend(Machine.prototype, Pusher.EventsDispatcher.prototype);

  Pusher.Machine = Machine;
})();

;(function() {
  /*
    A little bauble to interface with window.navigator.onLine,
    window.ononline and window.onoffline.  Easier to mock.
  */

  var NetInfo = function() {
    var self = this;
    Pusher.EventsDispatcher.call(this);
    // This is okay, as IE doesn't support this stuff anyway.
    if (window.addEventListener !== undefined) {
      window.addEventListener("online", function() {
        self.emit('online', null);
      }, false);
      window.addEventListener("offline", function() {
        self.emit('offline', null);
      }, false);
    }
  };

  // Offline means definitely offline (no connection to router).
  // Inverse does NOT mean definitely online (only currently supported in Safari
  // and even there only means the device has a connection to the router).
  NetInfo.prototype.isOnLine = function() {
    if (window.navigator.onLine === undefined) {
      return true;
    } else {
      return window.navigator.onLine;
    }
  };

  Pusher.Util.extend(NetInfo.prototype, Pusher.EventsDispatcher.prototype);

  Pusher.NetInfo = NetInfo;
})();

;(function() {
  var machineTransitions = {
    'initialized': ['waiting', 'failed'],
    'waiting': ['connecting', 'permanentlyClosed'],
    'connecting': ['open', 'permanentlyClosing', 'impermanentlyClosing', 'waiting'],
    'open': ['connected', 'permanentlyClosing', 'impermanentlyClosing', 'waiting'],
    'connected': ['permanentlyClosing', 'waiting'],
    'impermanentlyClosing': ['waiting', 'permanentlyClosing'],
    'permanentlyClosing': ['permanentlyClosed'],
    'permanentlyClosed': ['waiting', 'failed'],
    'failed': ['permanentlyClosed']
  };


  // Amount to add to time between connection attemtpts per failed attempt.
  var UNSUCCESSFUL_CONNECTION_ATTEMPT_ADDITIONAL_WAIT = 2000;
  var UNSUCCESSFUL_OPEN_ATTEMPT_ADDITIONAL_TIMEOUT = 2000;
  var UNSUCCESSFUL_CONNECTED_ATTEMPT_ADDITIONAL_TIMEOUT = 2000;

  var MAX_CONNECTION_ATTEMPT_WAIT = 5 * UNSUCCESSFUL_CONNECTION_ATTEMPT_ADDITIONAL_WAIT;
  var MAX_OPEN_ATTEMPT_TIMEOUT = 5 * UNSUCCESSFUL_OPEN_ATTEMPT_ADDITIONAL_TIMEOUT;
  var MAX_CONNECTED_ATTEMPT_TIMEOUT = 5 * UNSUCCESSFUL_CONNECTED_ATTEMPT_ADDITIONAL_TIMEOUT;

  function resetConnectionParameters(connection) {
    connection.connectionWait = 0;

    if (Pusher.TransportType === 'flash') {
      // Flash needs a bit more time
      connection.openTimeout = 5000;
    } else {
      connection.openTimeout = 2000;
    }
    connection.connectedTimeout = 2000;
    connection.connectionSecure = connection.compulsorySecure;
    connection.connectionAttempts = 0;
  }

  function Connection(key, options) {
    var self = this;

    Pusher.EventsDispatcher.call(this);

    this.options = Pusher.Util.extend({encrypted: false}, options);

    this.netInfo = new Pusher.NetInfo();

    this.netInfo.bind('online', function(){
      if (self._machine.is('waiting')) {
        self._machine.transition('connecting');
        updateState('connecting');
      }
    });

    this.netInfo.bind('offline', function() {
      if (self._machine.is('connected')) {
        // These are for Chrome 15, which ends up
        // having two sockets hanging around.
        self.socket.onclose = undefined;
        self.socket.onmessage = undefined;
        self.socket.onerror = undefined;
        self.socket.onopen = undefined;

        self.socket.close();
        self.socket = undefined;
        self._machine.transition('waiting');
      }
    });

    // define the state machine that runs the connection
    this._machine = new Pusher.Machine('initialized', machineTransitions, {
      initializedPre: function() {
        self.compulsorySecure = self.options.encrypted;

        self.key = key;
        self.socket = null;
        self.socket_id = null;

        self.state = 'initialized';
      },

      waitingPre: function() {
        if (self.connectionWait > 0) {
          self.emit('connecting_in', self.connectionWait);
        }

        if (self.netInfo.isOnLine() && self.connectionAttempts <= 4) {
          updateState('connecting');
        } else {
          updateState('unavailable');
        }

        // When in the unavailable state we attempt to connect, but don't
        // broadcast that fact
        if (self.netInfo.isOnLine()) {
          self._waitingTimer = setTimeout(function() {
            self._machine.transition('connecting');
          }, connectionDelay());
        }
      },

      waitingExit: function() {
        clearTimeout(self._waitingTimer);
      },

      connectingPre: function() {
        // Case that a user manages to get to the connecting
        // state even when offline.
        if (self.netInfo.isOnLine() === false) {
          self._machine.transition('waiting');
          updateState('unavailable');

          return;
        }

        var url = formatURL(self.key, self.connectionSecure);
        Pusher.debug('Connecting', url);
        self.socket = new Pusher.Transport(url);
        // now that the socket connection attempt has been started,
        // set up the callbacks fired by the socket for different outcomes
        self.socket.onopen = ws_onopen;
        self.socket.onclose = transitionToWaiting;
        self.socket.onerror = ws_onError;

        // allow time to get ws_onOpen, otherwise close socket and try again
        self._connectingTimer = setTimeout(TransitionToImpermanentlyClosing, self.openTimeout);
      },

      connectingExit: function() {
        clearTimeout(self._connectingTimer);
        self.socket.onopen = undefined; // unbind to avoid open events that are no longer relevant
      },

      connectingToWaiting: function() {
        updateConnectionParameters();

        // FUTURE: update only ssl
      },

      connectingToImpermanentlyClosing: function() {
        updateConnectionParameters();

        // FUTURE: update only timeout
      },

      openPre: function() {
        self.socket.onmessage = ws_onMessageOpen;
        self.socket.onerror = ws_onError;
        self.socket.onclose = transitionToWaiting;

        // allow time to get connected-to-Pusher message, otherwise close socket, try again
        self._openTimer = setTimeout(TransitionToImpermanentlyClosing, self.connectedTimeout);
      },

      openExit: function() {
        clearTimeout(self._openTimer);
        self.socket.onmessage = undefined; // unbind to avoid messages that are no longer relevant
      },

      openToWaiting: function() {
        updateConnectionParameters();
      },

      openToImpermanentlyClosing: function() {
        updateConnectionParameters();
      },

      connectedPre: function(socket_id) {
        self.socket_id = socket_id;

        self.socket.onmessage = ws_onMessageConnected;
        self.socket.onerror = ws_onError;
        self.socket.onclose = transitionToWaiting;

        resetConnectionParameters(self);
        self.connectedAt = new Date().getTime();

        resetActivityCheck();
      },

      connectedPost: function() {
        updateState('connected');
      },

      connectedExit: function() {
        stopActivityCheck();
        updateState('disconnected');
      },

      impermanentlyClosingPost: function() {
        if (self.socket) {
          self.socket.onclose = transitionToWaiting;
          self.socket.close();
        }
      },

      permanentlyClosingPost: function() {
        if (self.socket) {
          self.socket.onclose = function() {
            resetConnectionParameters(self);
            self._machine.transition('permanentlyClosed');
          };

          self.socket.close();
        } else {
          resetConnectionParameters(self);
          self._machine.transition('permanentlyClosed');
        }
      },

      failedPre: function() {
        updateState('failed');
        Pusher.debug('WebSockets are not available in this browser.');
      },

      permanentlyClosedPost: function() {
        updateState('disconnected');
      }
    });

    /*-----------------------------------------------
      -----------------------------------------------*/

    function updateConnectionParameters() {
      if (self.connectionWait < MAX_CONNECTION_ATTEMPT_WAIT) {
        self.connectionWait += UNSUCCESSFUL_CONNECTION_ATTEMPT_ADDITIONAL_WAIT;
      }

      if (self.openTimeout < MAX_OPEN_ATTEMPT_TIMEOUT) {
        self.openTimeout += UNSUCCESSFUL_OPEN_ATTEMPT_ADDITIONAL_TIMEOUT;
      }

      if (self.connectedTimeout < MAX_CONNECTED_ATTEMPT_TIMEOUT) {
        self.connectedTimeout += UNSUCCESSFUL_CONNECTED_ATTEMPT_ADDITIONAL_TIMEOUT;
      }

      if (self.compulsorySecure !== true) {
        self.connectionSecure = !self.connectionSecure;
      }

      self.connectionAttempts++;
    }

    function formatURL(key, isSecure) {
      var port = Pusher.ws_port;
      var protocol = 'ws://';

      // Always connect with SSL if the current page has
      // been loaded via HTTPS.
      //
      // FUTURE: Always connect using SSL.
      //
      if (isSecure || document.location.protocol === 'https:') {
        port = Pusher.wss_port;
        protocol = 'wss://';
      }

      var flash = (Pusher.TransportType === "flash") ? "true" : "false";

      return protocol + Pusher.host + ':' + port + '/app/' + key + '?protocol=5&client=js'
        + '&version=' + Pusher.VERSION
        + '&flash=' + flash;
    }

    // callback for close and retry.  Used on timeouts.
    function TransitionToImpermanentlyClosing() {
      self._machine.transition('impermanentlyClosing');
    }

    function resetActivityCheck() {
      if (self._activityTimer) { clearTimeout(self._activityTimer); }
      // Send ping after inactivity
      self._activityTimer = setTimeout(function() {
        self.send_event('pusher:ping', {})
        // Wait for pong response
        self._activityTimer = setTimeout(function() {
          self.socket.close();
        }, (self.options.pong_timeout || Pusher.pong_timeout))
      }, (self.options.activity_timeout || Pusher.activity_timeout))
    }

    function stopActivityCheck() {
      if (self._activityTimer) { clearTimeout(self._activityTimer); }
    }

    // Returns the delay before the next connection attempt should be made
    //
    // This function guards against attempting to connect more frequently than
    // once every second
    //
    function connectionDelay() {
      var delay = self.connectionWait;
      if (delay === 0) {
        if (self.connectedAt) {
          var t = 1000;
          var connectedFor = new Date().getTime() - self.connectedAt;
          if (connectedFor < t) {
            delay = t - connectedFor;
          }
        }
      }
      return delay;
    }

    /*-----------------------------------------------
      WebSocket Callbacks
      -----------------------------------------------*/

    // no-op, as we only care when we get pusher:connection_established
    function ws_onopen() {
      self._machine.transition('open');
    };

    function handleCloseCode(code, message) {
      // first inform the end-developer of this error
      self.emit('error', {type: 'PusherError', data: {code: code, message: message}});

      if (code === 4000) {
        // SSL only app
        self.compulsorySecure = true;
        self.connectionSecure = true;
        self.options.encrypted = true;

        TransitionToImpermanentlyClosing();
      } else if (code < 4100) {
        // Permentently close connection
        self._machine.transition('permanentlyClosing')
      } else if (code < 4200) {
        // Backoff before reconnecting
        self.connectionWait = 1000;
        self._machine.transition('waiting')
      } else if (code < 4300) {
        // Reconnect immediately
        TransitionToImpermanentlyClosing();
      } else {
        // Unknown error
        self._machine.transition('permanentlyClosing')
      }
    }

    function ws_onMessageOpen(event) {
      var params = parseWebSocketEvent(event);
      if (params !== undefined) {
        if (params.event === 'pusher:connection_established') {
          self._machine.transition('connected', params.data.socket_id);
        } else if (params.event === 'pusher:error') {
          handleCloseCode(params.data.code, params.data.message)
        }
      }
    }

    function ws_onMessageConnected(event) {
      resetActivityCheck();

      var params = parseWebSocketEvent(event);
      if (params !== undefined) {
        Pusher.debug('Event recd', params);

        switch (params.event) {
          case 'pusher:error':
            self.emit('error', {type: 'PusherError', data: params.data});
            break;
          case 'pusher:ping':
            self.send_event('pusher:pong', {})
            break;
        }

        self.emit('message', params);
      }
    }


    /**
     * Parses an event from the WebSocket to get
     * the JSON payload that we require
     *
     * @param {MessageEvent} event  The event from the WebSocket.onmessage handler.
    **/
    function parseWebSocketEvent(event) {
      try {
        var params = JSON.parse(event.data);

        if (typeof params.data === 'string') {
          try {
            params.data = JSON.parse(params.data);
          } catch (e) {
            if (!(e instanceof SyntaxError)) {
              throw e;
            }
          }
        }

        return params;
      } catch (e) {
        self.emit('error', {type: 'MessageParseError', error: e, data: event.data});
      }
    }

    function transitionToWaiting() {
      self._machine.transition('waiting');
    }

    function ws_onError(error) {
      // just emit error to user - socket will already be closed by browser
      self.emit('error', { type: 'WebSocketError', error: error });
    }

    // Updates the public state information exposed by connection
    //
    // This is distinct from the internal state information used by _machine
    // to manage the connection
    //
    function updateState(newState, data) {
      var prevState = self.state;
      self.state = newState;

      // Only emit when the state changes
      if (prevState !== newState) {
        Pusher.debug('State changed', prevState + ' -> ' + newState);
        self.emit('state_change', {previous: prevState, current: newState});
        self.emit(newState, data);
      }
    }
  };

  Connection.prototype.connect = function() {
    // no WebSockets
    if (!this._machine.is('failed') && !Pusher.Transport) {
      this._machine.transition('failed');
    }
    // initial open of connection
    else if(this._machine.is('initialized')) {
      resetConnectionParameters(this);
      this._machine.transition('waiting');
    }
    // user skipping connection wait
    else if (this._machine.is('waiting') && this.netInfo.isOnLine() === true) {
      this._machine.transition('connecting');
    }
    // user re-opening connection after closing it
    else if(this._machine.is("permanentlyClosed")) {
      resetConnectionParameters(this);
      this._machine.transition('waiting');
    }
  };

  Connection.prototype.send = function(data) {
    if (this._machine.is('connected')) {
      // Workaround for MobileSafari bug (see https://gist.github.com/2052006)
      var self = this;
      setTimeout(function() {
        self.socket.send(data);
      }, 0);
      return true;
    } else {
      return false;
    }
  };

  Connection.prototype.send_event = function(event_name, data, channel) {
    var payload = {
      event: event_name,
      data: data
    };
    if (channel) payload['channel'] = channel;

    Pusher.debug('Event sent', payload);
    return this.send(JSON.stringify(payload));
  }

  Connection.prototype.disconnect = function() {
    if (this._machine.is('permanentlyClosed')) return;

    if (this._machine.is('waiting') || this._machine.is('failed')) {
      this._machine.transition('permanentlyClosed');
    } else {
      this._machine.transition('permanentlyClosing');
    }
  };

  Pusher.Util.extend(Connection.prototype, Pusher.EventsDispatcher.prototype);
  Pusher.Connection = Connection;
})();

;(function() {
  Pusher.Channels = function() {
    this.channels = {};
  };

  Pusher.Channels.prototype = {
    add: function(channel_name, pusher) {
      var existing_channel = this.find(channel_name);
      if (!existing_channel) {
        var channel = Pusher.Channel.factory(channel_name, pusher);
        this.channels[channel_name] = channel;
        return channel;
      } else {
        return existing_channel;
      }
    },

    find: function(channel_name) {
      return this.channels[channel_name];
    },

    remove: function(channel_name) {
      delete this.channels[channel_name];
    },

    disconnect: function () {
      for(var channel_name in this.channels){
        this.channels[channel_name].disconnect()
      }
    }
  };

  Pusher.Channel = function(channel_name, pusher) {
    var self = this;
    Pusher.EventsDispatcher.call(this, function(event_name, event_data) {
      Pusher.debug('No callbacks on ' + channel_name + ' for ' + event_name);
    });

    this.pusher = pusher;
    this.name = channel_name;
    this.subscribed = false;

    this.bind('pusher_internal:subscription_succeeded', function(data) {
      self.onSubscriptionSucceeded(data);
    });
  };

  Pusher.Channel.prototype = {
    // inheritable constructor
    init: function() {},
    disconnect: function() {
      this.subscribed = false;
      this.emit("pusher_internal:disconnected");
    },

    onSubscriptionSucceeded: function(data) {
      this.subscribed = true;
      this.emit('pusher:subscription_succeeded');
    },

    authorize: function(socketId, options, callback){
      return callback(false, {}); // normal channels don't require auth
    },

    trigger: function(event, data) {
      return this.pusher.send_event(event, data, this.name);
    }
  };

  Pusher.Util.extend(Pusher.Channel.prototype, Pusher.EventsDispatcher.prototype);

  Pusher.Channel.PrivateChannel = {
    authorize: function(socketId, options, callback){
      var self = this;
      var authorizer = new Pusher.Channel.Authorizer(this, Pusher.channel_auth_transport, options);
      return authorizer.authorize(socketId, function(err, authData) {
        if(!err) {
          self.emit('pusher_internal:authorized', authData);
        }

        callback(err, authData);
      });
    }
  };

  Pusher.Channel.PresenceChannel = {
    init: function(){
      this.members = new Members(this); // leeches off channel events
    },

    onSubscriptionSucceeded: function(data) {
      this.subscribed = true;
      // We override this because we want the Members obj to be responsible for
      // emitting the pusher:subscription_succeeded.  It will do this after it has done its work.
    }
  };

  var Members = function(channel) {
    var self = this;

    var reset = function() {
      this._members_map = {};
      this.count = 0;
      this.me = null;
    };
    reset.call(this);

    channel.bind('pusher_internal:authorized', function(authorizedData) {
      var channelData = JSON.parse(authorizedData.channel_data);
      channel.bind("pusher_internal:subscription_succeeded", function(subscriptionData) {
        self._members_map = subscriptionData.presence.hash;
        self.count = subscriptionData.presence.count;
        self.me = self.get(channelData.user_id);
        channel.emit('pusher:subscription_succeeded', self);
      });
    });

    channel.bind('pusher_internal:member_added', function(data) {
      if(self.get(data.user_id) === null) { // only incr if user_id does not already exist
        self.count++;
      }

      self._members_map[data.user_id] = data.user_info;
      channel.emit('pusher:member_added', self.get(data.user_id));
    });

    channel.bind('pusher_internal:member_removed', function(data) {
      var member = self.get(data.user_id);
      if(member) {
        delete self._members_map[data.user_id];
        self.count--;
        channel.emit('pusher:member_removed', member);
      }
    });

    channel.bind('pusher_internal:disconnected', function() {
      reset.call(self);
    });
  };

  Members.prototype = {
    each: function(callback) {
      for(var i in this._members_map) {
        callback(this.get(i));
      }
    },

    get: function(user_id) {
      if (this._members_map.hasOwnProperty(user_id)) { // have heard of this user user_id
        return {
          id: user_id,
          info: this._members_map[user_id]
        }
      } else { // have never heard of this user
        return null;
      }
    }
  };

  Pusher.Channel.factory = function(channel_name, pusher){
    var channel = new Pusher.Channel(channel_name, pusher);
    if (channel_name.indexOf('private-') === 0) {
      Pusher.Util.extend(channel, Pusher.Channel.PrivateChannel);
    } else if (channel_name.indexOf('presence-') === 0) {
      Pusher.Util.extend(channel, Pusher.Channel.PrivateChannel);
      Pusher.Util.extend(channel, Pusher.Channel.PresenceChannel);
    };
    channel.init();
    return channel;
  };
})();

;(function() {
  Pusher.Channel.Authorizer = function(channel, type, options) {
    this.channel = channel;
    this.type = type;

    this.authOptions = (options || {}).auth || {};
  };

  Pusher.Channel.Authorizer.prototype = {
    composeQuery: function(socketId) {
      var query = '&socket_id=' + encodeURIComponent(socketId)
        + '&channel_name=' + encodeURIComponent(this.channel.name);

      for(var i in this.authOptions.params) {
        query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
      }

      return query;
    },

    authorize: function(socketId, callback) {
      return Pusher.authorizers[this.type].call(this, socketId, callback);
    }
  };


  Pusher.auth_callbacks = {};
  Pusher.authorizers = {
    ajax: function(socketId, callback){
      var self = this, xhr;

      if (Pusher.XHR) {
        xhr = new Pusher.XHR();
      } else {
        xhr = (window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
      }

      xhr.open("POST", Pusher.channel_auth_endpoint, true);

      // add request headers
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      for(var headerName in this.authOptions.headers) {
        xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
      }

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            var data, parsed = false;

            try {
              data = JSON.parse(xhr.responseText);
              parsed = true;
            } catch (e) {
              callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
            }

            if (parsed) { // prevents double execution.
              callback(false, data);
            }
          } else {
            Pusher.warn("Couldn't get auth info from your webapp", xhr.status);
            callback(true, xhr.status);
          }
        }
      };

      xhr.send(this.composeQuery(socketId));
      return xhr;
    },

    jsonp: function(socketId, callback){
      if(this.authOptions.headers !== undefined) {
        Pusher.warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
      }

      var script = document.createElement("script");
      // Hacked wrapper.
      Pusher.auth_callbacks[this.channel.name] = function(data) {
        callback(false, data);
      };

      var callback_name = "Pusher.auth_callbacks['" + this.channel.name + "']";
      script.src = Pusher.channel_auth_endpoint
        + '?callback='
        + encodeURIComponent(callback_name)
        + this.composeQuery(socketId);

      var head = document.getElementsByTagName("head")[0] || document.documentElement;
      head.insertBefore( script, head.firstChild );
    }
  };
})();

// _require(dependencies, callback) takes an array of dependency urls and a
// callback to call when all the dependecies have finished loading
var _require = (function() {
  function handleScriptLoaded(elem, callback) {
    if (document.addEventListener) {
      elem.addEventListener('load', callback, false);
    } else {
      elem.attachEvent('onreadystatechange', function () {
        if (elem.readyState == 'loaded' || elem.readyState == 'complete') {
          callback();
        }
      });
    }
  }

  function addScript(src, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute("type","text/javascript");
    script.setAttribute('async', true);

    handleScriptLoaded(script, function() {
      callback();
    });

    head.appendChild(script);
  }

  return function(deps, callback) {
    var deps_loaded = 0;
    for (var i = 0; i < deps.length; i++) {
      addScript(deps[i], function() {
        if (deps.length == ++deps_loaded) {
          // This setTimeout is a workaround for an Opera issue
          setTimeout(callback, 0);
        }
      });
    }
  }
})();

;(function() {
  // Support Firefox versions which prefix WebSocket
  if (!window['WebSocket'] && window['MozWebSocket']) {
    window['WebSocket'] = window['MozWebSocket']
  }

  if (window['WebSocket']) {
    Pusher.Transport = window['WebSocket'];
    Pusher.TransportType = 'native';
  }

  var cdn = (document.location.protocol == 'http:') ? Pusher.cdn_http : Pusher.cdn_https;
  var root = cdn + Pusher.VERSION;
  var deps = [];

  if (!window['JSON']) {
    deps.push(root + '/json2' + Pusher.dependency_suffix + '.js');
  }
  if (!window['WebSocket']) {
    // We manually initialize web-socket-js to iron out cross browser issues
    window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;
    deps.push(root + '/flashfallback' + Pusher.dependency_suffix + '.js');
  }

  var initialize = function() {
    if (window['WebSocket']) {
      // Initialize function in the case that we have native WebSocket support
      return function() {
        Pusher.ready();
      }
    } else {
      // Initialize function for fallback case
      return function() {
        if (window['WebSocket']) {
          // window['WebSocket'] is a flash emulation of WebSocket
          Pusher.Transport = window['WebSocket'];
          Pusher.TransportType = 'flash';

          // window.WEB_SOCKET_SWF_LOCATION = root + "/WebSocketMain.swf";
          window.WEB_SOCKET_SWF_LOCATION = "https://s3.amazonaws.com/uploadcare-static/WebSocketMainInsecure.swf"
          WebSocket.__addTask(function() {
            Pusher.ready();
          })
          WebSocket.__initialize();
        } else {
          // Flash must not be installed
          Pusher.Transport = null;
          Pusher.TransportType = 'none';
          Pusher.ready();
        }
      }
    }
  }();

  // Allows calling a function when the document body is available
  var ondocumentbody = function(callback) {
    var load_body = function() {
      document.body ? callback() : setTimeout(load_body, 0);
    }
    load_body();
  };

  var initializeOnDocumentBody = function() {
    ondocumentbody(initialize);
  }

  if (deps.length > 0) {
    _require(deps, initializeOnDocumentBody);
  } else {
    initializeOnDocumentBody();
  }
})();


this.Pusher = Pusher;

}).call(uploadcare);
(function() {
  var $,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = uploadcare.jQuery;

  uploadcare.namespace('utils.pusher', function(ns) {
    var ManagedPusher, pushers, _ref;
    pushers = {};
    uploadcare.Pusher.prototype.constructor = uploadcare.Pusher;
    ManagedPusher = (function(_super) {
      __extends(ManagedPusher, _super);

      function ManagedPusher() {
        _ref = ManagedPusher.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ManagedPusher.prototype.subscribe = function(name) {
        if (this.disconnectTimeout) {
          clearTimeout(this.disconnectTimeout);
          this.disconnectTimeout = null;
        }
        this.connect();
        return ManagedPusher.__super__.subscribe.apply(this, arguments);
      };

      ManagedPusher.prototype.unsubscribe = function(name) {
        var _this = this;
        ManagedPusher.__super__.unsubscribe.apply(this, arguments);
        if ($.isEmptyObject(this.channels.channels)) {
          return this.disconnectTimeout = setTimeout(function() {
            _this.disconnectTimeout = null;
            return _this.disconnect();
          }, 5000);
        }
      };

      return ManagedPusher;

    })(uploadcare.Pusher);
    return ns.getPusher = function(key) {
      if (pushers[key] == null) {
        pushers[key] = new ManagedPusher(key);
      }
      pushers[key].connect();
      return pushers[key];
    };
  });

}).call(this);
(function() {
  var $, pusher, utils,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = uploadcare.jQuery, utils = uploadcare.utils;

  pusher = uploadcare.utils.pusher;

  uploadcare.namespace('files', function(ns) {
    var PollWatcher, PusherWatcher;
    ns.UrlFile = (function(_super) {
      __extends(UrlFile, _super);

      UrlFile.prototype.sourceName = 'url';

      UrlFile.prototype.allEvents = 'progress success error fail';

      function UrlFile(__url) {
        var err, filename;
        this.__url = __url;
        this.__listenWatcher = __bind(this.__listenWatcher, this);
        UrlFile.__super__.constructor.apply(this, arguments);
        filename = utils.splitUrlRegex.exec(this.__url)[3].split('/').pop();
        if (filename) {
          try {
            this.fileName = decodeURIComponent(filename);
          } catch (_error) {
            err = _error;
            this.fileName = filename;
          }
        }
        this.__notifyApi();
      }

      UrlFile.prototype.setName = function(fileName) {
        this.fileName = fileName;
        this.__realFileName = fileName;
        return this.__notifyApi();
      };

      UrlFile.prototype.setIsImage = function(isImage) {
        this.isImage = isImage;
        return this.__notifyApi();
      };

      UrlFile.prototype.__startUpload = function() {
        var data, df, pollWatcher, pusherWatcher,
          _this = this;
        df = $.Deferred();
        pusherWatcher = new PusherWatcher(this.settings);
        pollWatcher = new PollWatcher(this.settings);
        data = {
          pub_key: this.settings.publicKey,
          signature: this.settings.secureSignature,
          expire: this.settings.secureExpire,
          source_url: this.__url,
          filename: this.__realFileName || '',
          source: this.sourceInfo.source,
          store: this.settings.doNotStore ? '' : 'auto',
          jsonerrors: 1
        };
        utils.defer(function() {
          if (_this.apiDeferred.state() !== 'pending') {
            return;
          }
          return utils.jsonp("" + _this.settings.urlBase + "/from_url/", 'GET', data, {
            headers: {
              'X-UC-User-Agent': _this.settings._userAgent
            }
          }).fail(function(reason) {
            if (_this.settings.debugUploads) {
              utils.debug("Can't start upload from URL.", reason, data);
            }
            return df.reject();
          }).done(function(data) {
            var logger;
            if (_this.apiDeferred.state() !== 'pending') {
              return;
            }
            if (_this.settings.debugUploads) {
              utils.debug("Start watchers.", data.token);
              logger = setInterval(function() {
                return utils.debug("Still watching.", data.token);
              }, 5000);
              df.done(function() {
                return utils.debug("Stop watchers.", data.token);
              }).always(function() {
                return clearInterval(logger);
              });
            }
            _this.__listenWatcher(df, $([pusherWatcher, pollWatcher]));
            df.always(function() {
              $([pusherWatcher, pollWatcher]).off(_this.allEvents);
              pusherWatcher.stopWatching();
              return pollWatcher.stopWatching();
            });
            $(pusherWatcher).one(_this.allEvents, function() {
              if (!pollWatcher.interval) {
                return;
              }
              if (_this.settings.debugUploads) {
                utils.debug("Start using pusher.", data.token);
              }
              return pollWatcher.stopWatching();
            });
            pusherWatcher.watch(data.token);
            return pollWatcher.watch(data.token);
          });
        });
        return df;
      };

      UrlFile.prototype.__listenWatcher = function(df, watcher) {
        var _this = this;
        return watcher.on('progress', function(e, data) {
          _this.fileSize = data.total;
          return df.notify(data.done / data.total);
        }).on('success', function(e, data) {
          $(e.target).trigger('progress', data);
          _this.fileId = data.uuid;
          _this.__handleFileData(data);
          return df.resolve();
        }).on('error fail', df.reject);
      };

      return UrlFile;

    })(ns.BaseFile);
    PusherWatcher = (function() {
      function PusherWatcher(settings) {
        this.settings = settings;
        try {
          this.pusher = pusher.getPusher(this.settings.pusherKey);
        } catch (_error) {
          this.pusher = null;
        }
      }

      PusherWatcher.prototype.watch = function(token) {
        var channel,
          _this = this;
        this.token = token;
        if (!this.pusher) {
          return;
        }
        channel = this.pusher.subscribe("task-status-" + this.token);
        return channel.bind_all(function(ev, data) {
          return $(_this).trigger(ev, data);
        });
      };

      PusherWatcher.prototype.stopWatching = function() {
        if (!this.pusher) {
          return;
        }
        return this.pusher.unsubscribe("task-status-" + this.token);
      };

      return PusherWatcher;

    })();
    return PollWatcher = (function() {
      function PollWatcher(settings) {
        this.settings = settings;
        this.poolUrl = "" + this.settings.urlBase + "/from_url/status/";
      }

      PollWatcher.prototype.watch = function(token) {
        var bind,
          _this = this;
        this.token = token;
        return (bind = function() {
          return _this.interval = setTimeout(function() {
            return _this.__updateStatus().done(function() {
              if (_this.interval) {
                return bind();
              }
            });
          }, 333);
        })();
      };

      PollWatcher.prototype.stopWatching = function() {
        if (this.interval) {
          clearTimeout(this.interval);
        }
        return this.interval = null;
      };

      PollWatcher.prototype.__updateStatus = function() {
        var _this = this;
        return utils.jsonp(this.poolUrl, 'GET', {
          token: this.token
        }, {
          headers: {
            'X-UC-User-Agent': this.settings._userAgent
          }
        }).fail(function(reason) {
          return $(_this).trigger('error');
        }).done(function(data) {
          return $(_this).trigger(data.status, data);
        });
      };

      return PollWatcher;

    })();
  });

}).call(this);
(function() {
  var $, utils,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = uploadcare.jQuery, utils = uploadcare.utils;

  uploadcare.namespace('files', function(ns) {
    ns.UploadedFile = (function(_super) {
      __extends(UploadedFile, _super);

      UploadedFile.prototype.sourceName = 'uploaded';

      function UploadedFile(fileIdOrUrl) {
        var cdnUrl;
        UploadedFile.__super__.constructor.apply(this, arguments);
        cdnUrl = utils.splitCdnUrl(fileIdOrUrl);
        if (cdnUrl) {
          this.fileId = cdnUrl[1];
          if (cdnUrl[2]) {
            this.cdnUrlModifiers = cdnUrl[2];
          }
        } else {
          this.__rejectApi('baddata');
        }
      }

      return UploadedFile;

    })(ns.BaseFile);
    return ns.ReadyFile = (function(_super) {
      __extends(ReadyFile, _super);

      ReadyFile.prototype.sourceName = 'uploaded';

      function ReadyFile(data) {
        ReadyFile.__super__.constructor.apply(this, arguments);
        if (!data) {
          this.__rejectApi('deleted');
        } else {
          this.fileId = data.uuid;
          this.__handleFileData(data);
        }
      }

      return ReadyFile;

    })(ns.BaseFile);
  });

}).call(this);
(function() {
  var $, namespace, s, t, uc_files, utils, _ref,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace = uploadcare.namespace, $ = uploadcare.jQuery, utils = uploadcare.utils, (_ref = uploadcare.locale, t = _ref.t), s = uploadcare.settings, uc_files = uploadcare.files;

  namespace('files', function(ns) {
    ns.FileGroup = (function() {
      function FileGroup(files, settings) {
        var _this = this;
        this.__uuid = null;
        this.settings = s.build(settings);
        this.__fileColl = new utils.CollectionOfPromises(files);
        this.__allFilesDf = $.when.apply($, this.files());
        this.__fileInfosDf = (function() {
          var file;
          files = (function() {
            var _i, _len, _ref1, _results;
            _ref1 = this.files();
            _results = [];
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              file = _ref1[_i];
              _results.push(file.then(null, function(err, info) {
                return $.when(info);
              }));
            }
            return _results;
          }).call(_this);
          return $.when.apply($, files);
        })();
        this.__createGroupDf = $.Deferred();
        this.__initApiDeferred();
      }

      FileGroup.prototype.files = function() {
        return this.__fileColl.get();
      };

      FileGroup.prototype.__save = function() {
        var _this = this;
        if (!this.__saved) {
          this.__saved = true;
          return this.__allFilesDf.done(function() {
            return _this.__createGroup().done(function(groupInfo) {
              _this.__uuid = groupInfo.id;
              return _this.__buildInfo(function(info) {
                if (_this.settings.imagesOnly && !info.isImage) {
                  return _this.__createGroupDf.reject('image', info);
                } else {
                  return _this.__createGroupDf.resolve(info);
                }
              });
            }).fail(function() {
              return _this.__createGroupDf.reject('createGroup');
            });
          });
        }
      };

      FileGroup.prototype.promise = function() {
        this.__save();
        return this.__apiDf.promise();
      };

      FileGroup.prototype.__initApiDeferred = function() {
        var notify, reject, resolve,
          _this = this;
        this.__apiDf = $.Deferred();
        this.__progressState = 'uploading';
        reject = function(err) {
          return _this.__buildInfo(function(info) {
            return _this.__apiDf.reject(err, info);
          });
        };
        resolve = function(info) {
          return _this.__apiDf.resolve(info);
        };
        notify = function() {
          return _this.__apiDf.notify(_this.__progressInfo());
        };
        notify();
        this.__fileColl.onAnyProgress(notify);
        this.__allFilesDf.done(function() {
          _this.__progressState = 'uploaded';
          return notify();
        }).fail(reject);
        return this.__createGroupDf.done(function(info) {
          _this.__progressState = 'ready';
          notify();
          return resolve(info);
        }).fail(reject);
      };

      FileGroup.prototype.__progressInfo = function() {
        var progress, progressInfo, progressInfos, _i, _len;
        progress = 0;
        progressInfos = this.__fileColl.lastProgresses();
        for (_i = 0, _len = progressInfos.length; _i < _len; _i++) {
          progressInfo = progressInfos[_i];
          progress += ((progressInfo != null ? progressInfo.progress : void 0) || 0) / progressInfos.length;
        }
        return {
          state: this.__progressState,
          uploadProgress: progress,
          progress: this.__progressState === 'ready' ? 1 : progress * 0.9
        };
      };

      FileGroup.prototype.__buildInfo = function(cb) {
        var info;
        info = {
          uuid: this.__uuid,
          cdnUrl: this.__uuid ? "" + this.settings.cdnBase + "/" + this.__uuid + "/" : null,
          name: t('file', this.__fileColl.length()),
          count: this.__fileColl.length(),
          size: 0,
          isImage: true,
          isStored: true
        };
        return this.__fileInfosDf.done(function() {
          var infos, _i, _info, _len;
          infos = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          for (_i = 0, _len = infos.length; _i < _len; _i++) {
            _info = infos[_i];
            info.size += _info.size;
            if (!_info.isImage) {
              info.isImage = false;
            }
            if (!_info.isStored) {
              info.isStored = false;
            }
          }
          return cb(info);
        });
      };

      FileGroup.prototype.__createGroup = function() {
        var df,
          _this = this;
        df = $.Deferred();
        if (this.__fileColl.length()) {
          this.__fileInfosDf.done(function() {
            var info, infos;
            infos = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return utils.jsonp("" + _this.settings.urlBase + "/group/", 'POST', {
              pub_key: _this.settings.publicKey,
              signature: _this.settings.secureSignature,
              expire: _this.settings.secureExpire,
              files: (function() {
                var _i, _len, _results;
                _results = [];
                for (_i = 0, _len = infos.length; _i < _len; _i++) {
                  info = infos[_i];
                  _results.push("/" + info.uuid + "/" + (info.cdnUrlModifiers || ''));
                }
                return _results;
              })()
            }, {
              headers: {
                'X-UC-User-Agent': _this.settings._userAgent
              }
            }).fail(function(reason) {
              if (_this.settings.debugUploads) {
                utils.log("Can't create group.", _this.settings.publicKey, reason);
              }
              return df.reject();
            }).done(df.resolve);
          });
        } else {
          df.reject();
        }
        return df.promise();
      };

      FileGroup.prototype.api = function() {
        if (!this.__api) {
          this.__api = utils.bindAll(this, ['promise', 'files']);
        }
        return this.__api;
      };

      return FileGroup;

    })();
    return ns.SavedFileGroup = (function(_super) {
      __extends(SavedFileGroup, _super);

      function SavedFileGroup(__data, settings) {
        var files;
        this.__data = __data;
        files = uploadcare.filesFrom('ready', this.__data.files, settings);
        SavedFileGroup.__super__.constructor.call(this, files, settings);
      }

      SavedFileGroup.prototype.__createGroup = function() {
        return utils.wrapToPromise(this.__data);
      };

      return SavedFileGroup;

    })(ns.FileGroup);
  });

  namespace('', function(ns) {
    ns.FileGroup = function(filesAndGroups, settings) {
      var file, files, item, _i, _j, _len, _len1, _ref1;
      if (filesAndGroups == null) {
        filesAndGroups = [];
      }
      files = [];
      for (_i = 0, _len = filesAndGroups.length; _i < _len; _i++) {
        item = filesAndGroups[_i];
        if (utils.isFile(item)) {
          files.push(item);
        } else if (utils.isFileGroup(item)) {
          _ref1 = item.files();
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            file = _ref1[_j];
            files.push(file);
          }
        }
      }
      return new uc_files.FileGroup(files, settings).api();
    };
    return ns.loadFileGroup = function(groupIdOrUrl, settings) {
      var df, id,
        _this = this;
      settings = s.build(settings);
      df = $.Deferred();
      id = utils.groupIdRegex.exec(groupIdOrUrl);
      if (id) {
        utils.jsonp("" + settings.urlBase + "/group/info/", 'GET', {
          jsonerrors: 1,
          pub_key: settings.publicKey,
          group_id: id[0]
        }, {
          headers: {
            'X-UC-User-Agent': settings._userAgent
          }
        }).fail(function(reason) {
          if (settings.debugUploads) {
            utils.log("Can't load group info. Probably removed.", id[0], settings.publicKey, reason);
          }
          return df.reject();
        }).done(function(data) {
          var group;
          group = new uc_files.SavedFileGroup(data, settings);
          return df.resolve(group.api());
        });
      } else {
        df.reject();
      }
      return df.promise();
    };
  });

  namespace('utils', function(utils) {
    utils.isFileGroup = function(obj) {
      return obj && obj.files && obj.promise;
    };
    utils.valueToGroup = function(value, settings) {
      var files, item;
      if (value) {
        if ($.isArray(value)) {
          files = (function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = value.length; _i < _len; _i++) {
              item = value[_i];
              _results.push(utils.valueToFile(item, settings));
            }
            return _results;
          })();
          value = uploadcare.FileGroup(files, settings);
        } else {
          if (!utils.isFileGroup(value)) {
            return uploadcare.loadFileGroup(value, settings);
          }
        }
      }
      return utils.wrapToPromise(value || null);
    };
    return utils.isFileGroupsEqual = function(group1, group2) {
      var file, files1, files2, i, _i, _len;
      if (group1 === group2) {
        return true;
      }
      if (!(utils.isFileGroup(group1) && utils.isFileGroup(group2))) {
        return false;
      }
      files1 = group1.files();
      files2 = group2.files();
      if (files1.length !== files2.length) {
        return false;
      }
      for (i = _i = 0, _len = files1.length; _i < _len; i = ++_i) {
        file = files1[i];
        if (file !== files2[i]) {
          return false;
        }
      }
      return true;
    };
  });

}).call(this);
(function() {
  var $, f, settings, utils;

  utils = uploadcare.utils, $ = uploadcare.jQuery, f = uploadcare.files, settings = uploadcare.settings;

  uploadcare.namespace('', function(ns) {
    var converters;
    ns.fileFrom = function(type, data, s) {
      return ns.filesFrom(type, [data], s)[0];
    };
    ns.filesFrom = function(type, data, s) {
      var info, param, _i, _len, _results;
      s = settings.build(s || {});
      _results = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        param = data[_i];
        info = null;
        if ($.isArray(param)) {
          info = param[1];
          param = param[0];
        }
        _results.push(new converters[type](param, s, info).promise());
      }
      return _results;
    };
    return converters = {
      object: f.ObjectFile,
      input: f.InputFile,
      url: f.UrlFile,
      uploaded: f.UploadedFile,
      ready: f.ReadyFile
    };
  });

}).call(this);
(function() {
  var $, s, utils;

  utils = uploadcare.utils, s = uploadcare.settings, $ = uploadcare.jQuery;

  uploadcare.namespace('dragdrop', function(ns) {
    ns.support = utils.abilities.fileDragAndDrop;
    ns.uploadDrop = function(el, callback, settings) {
      settings = s.build(settings);
      return ns.receiveDrop(el, function(type, data) {
        return callback(settings.multiple ? uploadcare.filesFrom(type, data, settings) : uploadcare.fileFrom(type, data[0], settings));
      });
    };
    if (!ns.support) {
      return ns.receiveDrop = function() {};
    } else {
      ns.receiveDrop = function(el, callback) {
        ns.watchDragging(el);
        return $(el).on({
          dragover: function(e) {
            e.preventDefault();
            return e.originalEvent.dataTransfer.dropEffect = 'copy';
          },
          drop: function(e) {
            var dt, uri, uris, _i, _len, _ref;
            e.preventDefault();
            dt = e.originalEvent.dataTransfer;
            if (!dt) {
              return;
            }
            if (dt.files.length) {
              return callback('object', dt.files);
            } else {
              uris = [];
              _ref = dt.getData('text/uri-list').split();
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                uri = _ref[_i];
                uri = $.trim(uri);
                if (uri && uri[0] !== '#') {
                  uris.push(uri);
                }
              }
              if (uris) {
                return callback('url', uris);
              }
            }
          }
        });
      };
      ns.watchDragging = function(el, receiver) {
        var changeState, counter, lastActive;
        lastActive = false;
        counter = 0;
        changeState = function(active) {
          if (lastActive !== active) {
            return $(el).toggleClass('uploadcare--dragging', lastActive = active);
          }
        };
        return $(receiver || el).on({
          dragenter: function() {
            counter += 1;
            return changeState(true);
          },
          dragleave: function() {
            counter -= 1;
            if (counter === 0) {
              return changeState(false);
            }
          },
          'drop mouseenter': function() {
            counter = 0;
            return changeState(false);
          }
        });
      };
      return ns.watchDragging('body', document);
    }
  });

}).call(this);
(function() {
  var $, abilities, files, tpl, _ref, _ref1,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  files = uploadcare.files, $ = uploadcare.jQuery, (_ref = uploadcare.utils, abilities = _ref.abilities), (_ref1 = uploadcare.templates, tpl = _ref1.tpl);

  uploadcare.namespace('ui.progress', function(ns) {
    ns.Circle = (function() {
      function Circle(element) {
        this.update = __bind(this.update, this);
        if (abilities.canvas) {
          this.renderer = new ns.CanvasRenderer(element);
        } else {
          this.renderer = new ns.TextRenderer(element);
        }
        this.observed = null;
      }

      Circle.prototype.listen = function(file, selector) {
        var selectorFn,
          _this = this;
        this.reset();
        selectorFn = selector != null ? function(info) {
          return info[selector];
        } : function(x) {
          return x;
        };
        this.observed = file;
        if (this.observed.state() === "resolved") {
          this.renderer.setValue(1, true);
        } else {
          this.observed.progress(function(progress) {
            if (file === _this.observed) {
              return _this.renderer.setValue(selectorFn(progress));
            }
          }).always(function(uploadedFile) {
            if (file === _this.observed) {
              return _this.renderer.setValue(1, false);
            }
          });
        }
        return this;
      };

      Circle.prototype.reset = function(filled) {
        if (filled == null) {
          filled = false;
        }
        this.observed = null;
        return this.renderer.setValue((filled ? 1 : 0), true);
      };

      Circle.prototype.update = function() {
        return this.renderer.update();
      };

      return Circle;

    })();
    ns.BaseRenderer = (function() {
      function BaseRenderer(el) {
        this.element = $(el);
        this.element.data('uploadcare-progress-renderer', this);
        this.element.addClass('uploadcare--progress');
      }

      BaseRenderer.prototype.update = function() {};

      return BaseRenderer;

    })();
    ns.TextRenderer = (function(_super) {
      __extends(TextRenderer, _super);

      function TextRenderer() {
        TextRenderer.__super__.constructor.apply(this, arguments);
        this.element.addClass('uploadcare--progress_type_text');
        this.element.html(tpl('progress__text'));
        this.text = this.element.find('.uploadcare--progress__text');
      }

      TextRenderer.prototype.setValue = function(val) {
        val = Math.round(val * 100);
        return this.text.html("" + val + " %");
      };

      return TextRenderer;

    })(ns.BaseRenderer);
    return ns.CanvasRenderer = (function(_super) {
      __extends(CanvasRenderer, _super);

      function CanvasRenderer() {
        CanvasRenderer.__super__.constructor.apply(this, arguments);
        this.canvasEl = $('<canvas>').addClass('uploadcare--progress__canvas').get(0);
        this.element.addClass('uploadcare--progress_type_canvas');
        this.element.html(this.canvasEl);
        this.setValue(0, true);
      }

      CanvasRenderer.prototype.update = function() {
        var arc, ctx, half, size;
        half = Math.floor(Math.min(this.element.width(), this.element.height()));
        size = half * 2;
        if (half) {
          if (this.canvasEl.width !== size || this.canvasEl.height !== size) {
            this.canvasEl.width = size;
            this.canvasEl.height = size;
          }
          ctx = this.canvasEl.getContext('2d');
          arc = function(radius, val) {
            var offset;
            offset = -Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(half, half);
            ctx.arc(half, half, radius, offset, offset + 2 * Math.PI * val, false);
            return ctx.fill();
          };
          ctx.clearRect(0, 0, size, size);
          ctx.globalCompositeOperation = 'source-over';
          ctx.fillStyle = this.element.css('border-left-color');
          arc(half - .5, 1);
          ctx.fillStyle = this.element.css('color');
          arc(half, this.val);
          ctx.globalCompositeOperation = 'destination-out';
          return arc(half / 7, 1);
        }
      };

      CanvasRenderer.prototype.__animateValue = function(target) {
        var speed, start, val,
          _this = this;
        val = this.val;
        start = new Date();
        speed = target > val ? 2 : -2;
        return this.__animIntervalId = setInterval(function() {
          var current;
          current = val + (new Date() - start) / 1000 * speed;
          current = (speed > 0 ? Math.min : Math.max)(current, target);
          if (current === target) {
            _this.__stopAnimation();
          }
          return _this.__setValue(current);
        }, 15);
      };

      CanvasRenderer.prototype.__stopAnimation = function() {
        if (this.__animIntervalId) {
          clearInterval(this.__animIntervalId);
        }
        return this.__animIntervalId = null;
      };

      CanvasRenderer.prototype.__setValue = function(val) {
        this.val = val;
        return this.update();
      };

      CanvasRenderer.prototype.setValue = function(val, instant) {
        if (instant == null) {
          instant = false;
        }
        this.__stopAnimation();
        if (instant) {
          return this.__setValue(val);
        } else {
          return this.__animateValue(val);
        }
      };

      return CanvasRenderer;

    })(ns.BaseRenderer);
  });

}).call(this);
(function() {
  var $, progress, t, tpl, utils, _ref, _ref1, _ref2;

  $ = uploadcare.jQuery, utils = uploadcare.utils, (_ref = uploadcare.ui, progress = _ref.progress), (_ref1 = uploadcare.locale, t = _ref1.t), (_ref2 = uploadcare.templates, tpl = _ref2.tpl);

  uploadcare.namespace('widget', function(ns) {
    return ns.Template = (function() {
      function Template(settings, element) {
        this.settings = settings;
        this.element = element;
        this.content = $(tpl('widget'));
        this.element.after(this.content);
        this.circle = new progress.Circle(this.content.find('.uploadcare--widget__progress').removeClass('uploadcare--widget__progress'));
        this.content.find('.uploadcare--progress').addClass('uploadcare--widget__progress');
        this.statusText = this.content.find('.uploadcare--widget__text');
        this.content.toggleClass('uploadcare--widget_option_clearable', this.settings.clearable);
      }

      Template.prototype.addButton = function(name, caption) {
        if (caption == null) {
          caption = '';
        }
        return $(tpl('widget-button', {
          name: name,
          caption: caption
        })).appendTo(this.content);
      };

      Template.prototype.setStatus = function(status) {
        var prefix;
        prefix = 'uploadcare--widget_status_';
        this.content.removeClass(prefix + this.content.attr('data-status'));
        this.content.attr('data-status', status);
        this.content.addClass(prefix + status);
        return this.element.trigger("" + status + ".uploadcare");
      };

      Template.prototype.reset = function() {
        this.circle.reset();
        this.setStatus('ready');
        return this.__file = null;
      };

      Template.prototype.loaded = function() {
        this.setStatus('loaded');
        return this.circle.reset(true);
      };

      Template.prototype.listen = function(file) {
        var _this = this;
        this.__file = file;
        this.circle.listen(file, 'uploadProgress');
        this.setStatus('started');
        return file.progress(function(info) {
          if (file === _this.__file) {
            switch (info.state) {
              case 'uploading':
                return _this.statusText.text(t('uploading'));
              case 'uploaded':
                return _this.statusText.text(t('loadingInfo'));
            }
          }
        });
      };

      Template.prototype.error = function(type) {
        this.statusText.text(t("errors." + (type || 'default')));
        return this.setStatus('error');
      };

      Template.prototype.setFileInfo = function(info) {
        return this.statusText.html(tpl('widget-file-name', info)).find('.uploadcare--widget__file-name').toggleClass('needsclick', this.settings.systemDialog);
      };

      return Template;

    })();
  });

}).call(this);
(function() {
  var $, dragdrop, t, tpl, utils, _ref, _ref1,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  utils = uploadcare.utils, dragdrop = uploadcare.dragdrop, (_ref = uploadcare.locale, t = _ref.t), $ = uploadcare.jQuery, (_ref1 = uploadcare.templates, tpl = _ref1.tpl);

  uploadcare.namespace('widget.tabs', function(ns) {
    return ns.FileTab = (function() {
      function FileTab(container, tabButton, dialogApi, settings, name) {
        this.container = container;
        this.tabButton = tabButton;
        this.dialogApi = dialogApi;
        this.settings = settings;
        this.name = name;
        this.__initTabsList = __bind(this.__initTabsList, this);
        this.container.append(tpl('tab-file'));
        this.__setupFileButton();
        this.__initDragNDrop();
        this.__initTabsList();
      }

      FileTab.prototype.__initDragNDrop = function() {
        var dropArea,
          _this = this;
        dropArea = this.container.find('.uploadcare--draganddrop');
        if (utils.abilities.fileDragAndDrop) {
          dragdrop.receiveDrop(dropArea, function(type, files) {
            _this.dialogApi.addFiles(type, files);
            return _this.dialogApi.switchTab('preview');
          });
          return dropArea.addClass("uploadcare--draganddrop_supported");
        }
      };

      FileTab.prototype.__setupFileButton = function() {
        var fileButton,
          _this = this;
        fileButton = this.container.find('.uploadcare--tab__action-button');
        if (utils.abilities.sendFileAPI) {
          return fileButton.on('click', function() {
            utils.fileSelectDialog(_this.container, _this.settings, function(input) {
              _this.dialogApi.addFiles('object', input.files);
              return _this.dialogApi.switchTab('preview');
            });
            return false;
          });
        } else {
          return utils.fileInput(fileButton, this.settings, function(input) {
            _this.dialogApi.addFiles('input', [input]);
            return _this.dialogApi.switchTab('preview');
          });
        }
      };

      FileTab.prototype.__initTabsList = function() {
        var allButton, list, n, tab, _i, _len, _ref2,
          _this = this;
        list = this.container.find('.uploadcare--file-sources__items');
        list.remove('.uploadcare--file-sources__item:not(.uploadcare--file-source_all)');
        n = 0;
        _ref2 = this.settings.tabs;
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          tab = _ref2[_i];
          if (tab === 'file' || tab === 'url' || tab === 'camera') {
            continue;
          }
          if (!this.dialogApi.isTabVisible(tab)) {
            continue;
          }
          n += 1;
          if (n > 5) {
            continue;
          }
          list.append([this.__tabButton(tab), ' ']);
        }
        allButton = list.find('.uploadcare--file-source_all').on('click', function() {
          return _this.dialogApi.openMenu();
        });
        if (n > 5) {
          list.addClass('uploadcare--file-sources__items_many');
        }
        return this.container.find('.uploadcare--file-sources').attr('hidden', n === 0);
      };

      FileTab.prototype.__tabButton = function(name) {
        var tabButton, tabIcon,
          _this = this;
        tabIcon = $("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-" + name + "'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--file-source__icon');
        return tabButton = $('<button>').addClass('uploadcare--button').addClass('uploadcare--button_icon').addClass('uploadcare--file-source').addClass("uploadcare--file-source_" + name).addClass('uploadcare--file-sources__item').attr('type', 'button').attr('title', t("dialog.tabs.names." + name)).attr('data-tab', name).append(tabIcon).on('click', function() {
          return _this.dialogApi.switchTab(name);
        });
      };

      return FileTab;

    })();
  });

}).call(this);
(function() {
  var $, t, tpl, _ref;

  $ = uploadcare.jQuery, (_ref = uploadcare.templates, tpl = _ref.tpl);

  t = uploadcare.locale.t;

  uploadcare.namespace('widget.tabs', function(ns) {
    return ns.UrlTab = (function() {
      var fixUrl, urlRegexp;

      urlRegexp = /^[a-z][a-z0-9+\-.]*:?\/\//;

      fixUrl = function(url) {
        url = $.trim(url);
        if (urlRegexp.test(url)) {
          return url;
        } else {
          return 'http://' + url;
        }
      };

      function UrlTab(container, tabButton, dialogApi, settings, name) {
        var button, input,
          _this = this;
        this.container = container;
        this.tabButton = tabButton;
        this.dialogApi = dialogApi;
        this.settings = settings;
        this.name = name;
        this.container.append(tpl('tab-url'));
        input = this.container.find('.uploadcare--input');
        input.on('change keyup input', function() {
          return button.attr('disabled', !$.trim(this.value));
        });
        button = this.container.find('.uploadcare--button[type=submit]').attr('disabled', true);
        this.container.find('.uploadcare--form').on('submit', function() {
          var url;
          if (url = fixUrl(input.val())) {
            _this.dialogApi.addFiles('url', [
              [
                url, {
                  source: 'url-tab'
                }
              ]
            ]);
            input.val('').trigger('change');
          }
          return false;
        });
      }

      return UrlTab;

    })();
  });

}).call(this);
(function() {
  var $, tpl, utils, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  utils = uploadcare.utils, $ = uploadcare.jQuery, (_ref = uploadcare.templates, tpl = _ref.tpl);

  uploadcare.namespace('widget.tabs', function(ns) {
    var isSecure;
    isSecure = document.location.protocol === 'https:';
    return ns.CameraTab = (function() {
      function CameraTab(container, tabButton, dialogApi, settings, name) {
        var video;
        this.container = container;
        this.tabButton = tabButton;
        this.dialogApi = dialogApi;
        this.settings = settings;
        this.name = name;
        this.__cancelRecording = __bind(this.__cancelRecording, this);
        this.__stopRecording = __bind(this.__stopRecording, this);
        this.__startRecording = __bind(this.__startRecording, this);
        this.__capture = __bind(this.__capture, this);
        this.__mirror = __bind(this.__mirror, this);
        this.__revoke = __bind(this.__revoke, this);
        this.__requestCamera = __bind(this.__requestCamera, this);
        this.__setState = __bind(this.__setState, this);
        this.__captureInputHandle = __bind(this.__captureInputHandle, this);
        this.__captureInput = __bind(this.__captureInput, this);
        if (this.__checkCapture()) {
          this.container.append(tpl('tab-camera-capture'));
          this.container.addClass('uploadcare--camera');
          this.container.find('.uploadcare--camera__button_type_photo').on('click', this.__captureInput('image/*'));
          video = this.container.find('.uploadcare--camera__button_type_video').on('click', this.__captureInput('video/*'));
          if (this.settings.imagesOnly) {
            video.hide();
          }
        } else {
          if (!this.__checkCompatibility()) {
            this.dialogApi.hideTab(this.name);
            return;
          }
          this.__initCamera();
        }
      }

      CameraTab.prototype.__captureInput = function(accept) {
        var _this = this;
        return function() {
          return utils.fileSelectDialog(_this.container, {
            inputAcceptTypes: accept
          }, _this.__captureInputHandle, {
            capture: 'camera'
          });
        };
      };

      CameraTab.prototype.__captureInputHandle = function(input) {
        this.dialogApi.addFiles('object', input.files);
        return this.dialogApi.switchTab('preview');
      };

      CameraTab.prototype.__initCamera = function() {
        var startRecord,
          _this = this;
        this.__loaded = false;
        this.mirrored = true;
        this.container.append(tpl('tab-camera'));
        this.container.addClass('uploadcare--camera');
        this.container.addClass('uploadcare--camera_status_requested');
        this.container.find('.uploadcare--camera__button_type_capture').on('click', this.__capture);
        startRecord = this.container.find('.uploadcare--camera__button_type_start-record').on('click', this.__startRecording);
        this.container.find('.uploadcare--camera__button_type_stop-record').on('click', this.__stopRecording);
        this.container.find('.uploadcare--camera__button_type_cancel-record').on('click', this.__cancelRecording);
        this.container.find('.uploadcare--camera__button_type_mirror').on('click', this.__mirror);
        this.container.find('.uploadcare--camera__button_type_retry').on('click', this.__requestCamera);
        if (!this.MediaRecorder || this.settings.imagesOnly) {
          startRecord.hide();
        }
        this.video = this.container.find('.uploadcare--camera__video');
        this.video.on('loadeddata', function() {
          return this.play();
        });
        this.dialogApi.progress(function(name) {
          if (name === _this.name) {
            if (!_this.__loaded) {
              return _this.__requestCamera();
            }
          } else {
            if (_this.__loaded && isSecure) {
              return _this.__revoke();
            }
          }
        });
        return this.dialogApi.always(this.__revoke);
      };

      CameraTab.prototype.__checkCompatibility = function() {
        var isLocalhost;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          this.getUserMedia = function(constraints, successCallback, errorCallback) {
            return navigator.mediaDevices.getUserMedia(constraints).then(successCallback)["catch"](errorCallback);
          };
        } else {
          this.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        }
        this.URL = window.URL || window.webkitURL;
        this.MediaRecorder = window.MediaRecorder;
        if (!isSecure) {
          utils.warn('Camera is not allowed for HTTP. Please use HTTPS connection.');
        }
        isLocalhost = document.location.hostname === 'localhost';
        return !!this.getUserMedia && Uint8Array && (isSecure || isLocalhost);
      };

      CameraTab.prototype.__checkCapture = function() {
        var input;
        input = document.createElement('input');
        input.setAttribute('capture', 'camera');
        return !!input.capture;
      };

      CameraTab.prototype.__setState = function(newState) {
        var oldStates;
        oldStates = ['', 'ready', 'requested', 'denied', 'not-founded', 'recording'].join(' uploadcare--camera_status_');
        return this.container.removeClass(oldStates).addClass("uploadcare--camera_status_" + newState);
      };

      CameraTab.prototype.__requestCamera = function() {
        var _this = this;
        this.__loaded = true;
        return this.getUserMedia.call(navigator, {
          audio: true,
          video: {
            optional: [
              {
                minWidth: 320
              }, {
                minWidth: 640
              }, {
                minWidth: 1024
              }, {
                minWidth: 1280
              }, {
                minWidth: 1920
              }
            ]
          }
        }, function(stream) {
          _this.__setState('ready');
          _this.__stream = stream;
          if ('srcObject' in _this.video[0]) {
            _this.video.prop('srcObject', stream);
            return _this.video.on('loadedmetadata', function() {
              return _this.video[0].play();
            });
          } else {
            if (_this.URL) {
              _this.__streamObject = _this.URL.createObjectURL(stream);
              _this.video.prop('src', _this.__streamObject);
            } else {
              _this.video.prop('src', stream);
            }
            return _this.video[0].play();
          }
        }, function(error) {
          if (error === "NO_DEVICES_FOUND" || error.name === 'DevicesNotFoundError') {
            _this.__setState('not-founded');
          } else {
            _this.__setState('denied');
          }
          return _this.__loaded = false;
        });
      };

      CameraTab.prototype.__revoke = function() {
        var _base;
        this.__setState('requested');
        this.__loaded = false;
        if (!this.__stream) {
          return;
        }
        if (this.__streamObject) {
          this.URL.revokeObjectURL(this.__streamObject);
        }
        if (this.__stream.getTracks) {
          $.each(this.__stream.getTracks(), function() {
            return typeof this.stop === "function" ? this.stop() : void 0;
          });
        } else {
          if (typeof (_base = this.__stream).stop === "function") {
            _base.stop();
          }
        }
        return this.__stream = null;
      };

      CameraTab.prototype.__mirror = function() {
        this.mirrored = !this.mirrored;
        return this.video.toggleClass('uploadcare--camera__video_mirrored', this.mirrored);
      };

      CameraTab.prototype.__capture = function() {
        var canvas, ctx, h, video, w,
          _this = this;
        video = this.video[0];
        w = video.videoWidth;
        h = video.videoHeight;
        canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        ctx = canvas.getContext('2d');
        if (this.mirrored) {
          ctx.translate(w, 0);
          ctx.scale(-1, 1);
        }
        ctx.drawImage(video, 0, 0, w, h);
        return utils.canvasToBlob(canvas, 'image/jpeg', 0.9, function(blob) {
          canvas.width = canvas.height = 1;
          blob.name = "camera.jpg";
          _this.dialogApi.addFiles('object', [
            [
              blob, {
                source: 'camera'
              }
            ]
          ]);
          return _this.dialogApi.switchTab('preview');
        });
      };

      CameraTab.prototype.__startRecording = function() {
        var __recorderOptions,
          _this = this;
        this.__setState('recording');
        this.__chunks = [];
        __recorderOptions = {};
        if (this.settings.audioBitsPerSecond !== null) {
          __recorderOptions.audioBitsPerSecond = this.settings.audioBitsPerSecond;
        }
        if (this.settings.videoBitsPerSecond !== null) {
          __recorderOptions.videoBitsPerSecond = this.settings.videoBitsPerSecond;
        }
        if (Object.keys(__recorderOptions).length !== 0) {
          this.__recorder = new this.MediaRecorder(this.__stream, __recorderOptions);
        } else {
          this.__recorder = new this.MediaRecorder(this.__stream);
        }
        this.__recorder.start();
        return this.__recorder.ondataavailable = function(e) {
          return _this.__chunks.push(e.data);
        };
      };

      CameraTab.prototype.__stopRecording = function() {
        var _this = this;
        this.__setState('ready');
        this.__recorder.onstop = function() {
          var blob, ext;
          blob = new Blob(_this.__chunks, {
            'type': _this.__recorder.mimeType
          });
          ext = _this.__guessExtensionByMime(_this.__recorder.mimeType);
          blob.name = "record." + ext;
          _this.dialogApi.addFiles('object', [
            [
              blob, {
                source: 'camera'
              }
            ]
          ]);
          _this.dialogApi.switchTab('preview');
          return _this.__chunks = [];
        };
        return this.__recorder.stop();
      };

      CameraTab.prototype.__cancelRecording = function() {
        this.__setState('ready');
        this.__recorder.stop();
        return this.__chunks = [];
      };

      CameraTab.prototype.__guessExtensionByMime = function(mime) {
        var container, known_containers;
        known_containers = {
          'mp4': 'mp4',
          'ogg': 'ogg',
          'webm': 'webm',
          'quicktime': 'mov',
          'x-matroska': 'mkv'
        };
        if (mime === '') {
          return 'webm';
        }
        if (mime) {
          mime = mime.split('/');
          if (mime[0] === 'video') {
            mime = mime.slice(1).join('/');
            container = mime.split(';')[0];
            if (known_containers[container]) {
              return known_containers[container];
            }
          }
        }
        return 'avi';
      };

      return CameraTab;

    })();
  });

}).call(this);
(function() {
  var $, files, locale, t, tabsCss, utils, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  locale = uploadcare.locale, utils = uploadcare.utils, tabsCss = uploadcare.tabsCss, $ = uploadcare.jQuery, (_ref = uploadcare.locale, t = _ref.t), files = uploadcare.files;

  uploadcare.namespace('widget.tabs', function(ns) {
    return ns.RemoteTab = (function() {
      function RemoteTab(container, tabButton, dialogApi, settings, name) {
        var _this = this;
        this.container = container;
        this.tabButton = tabButton;
        this.dialogApi = dialogApi;
        this.settings = settings;
        this.name = name;
        this.__createIframe = __bind(this.__createIframe, this);
        this.dialogApi.progress(function(name) {
          if (name === _this.name) {
            _this.__createIframe();
          }
          return _this.__sendMessage({
            type: 'visibility-changed',
            visible: name === _this.name
          });
        });
      }

      RemoteTab.prototype.remoteUrl = function() {
        return ("" + this.settings.socialBase + "/window3/" + this.name + "?") + $.param({
          lang: this.settings.locale,
          public_key: this.settings.publicKey,
          widget_version: uploadcare.version,
          images_only: this.settings.imagesOnly,
          pass_window_open: this.settings.passWindowOpen
        });
      };

      RemoteTab.prototype.__sendMessage = function(messageObj) {
        var _ref1, _ref2;
        return (_ref1 = this.iframe) != null ? (_ref2 = _ref1[0].contentWindow) != null ? _ref2.postMessage(JSON.stringify(messageObj), '*') : void 0 : void 0;
      };

      RemoteTab.prototype.__createIframe = function() {
        var iframe,
          _this = this;
        if (this.iframe) {
          return;
        }
        this.iframe = $('<iframe>', {
          src: this.remoteUrl(),
          marginheight: 0,
          marginwidth: 0,
          frameborder: 0,
          allowTransparency: "true"
        }).addClass('uploadcare--tab__iframe').appendTo(this.container).on('load', function() {
          var style, url, _i, _j, _len, _len1, _ref1, _ref2;
          _this.iframe.css('opacity', '1');
          _ref1 = tabsCss.urls;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            url = _ref1[_i];
            _this.__sendMessage({
              type: 'embed-css',
              url: url
            });
          }
          _ref2 = tabsCss.styles;
          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            style = _ref2[_j];
            _this.__sendMessage({
              type: 'embed-css',
              style: style
            });
          }
        });
        this.container.addClass('uploadcare--tab_remote');
        iframe = this.iframe[0].contentWindow;
        utils.registerMessage('file-selected', iframe, function(message) {
          var file, sourceInfo, url;
          url = (function() {
            var key, type, _i, _len, _ref1;
            if (message.alternatives) {
              _ref1 = _this.settings.preferredTypes;
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                type = _ref1[_i];
                type = utils.globRegexp(type);
                for (key in message.alternatives) {
                  if (type.test(key)) {
                    return message.alternatives[key];
                  }
                }
              }
            }
            return message.url;
          })();
          sourceInfo = $.extend({
            source: _this.name
          }, message.info || {});
          file = new files.UrlFile(url, _this.settings, sourceInfo);
          if (message.filename) {
            file.setName(message.filename);
          }
          if (message.is_image != null) {
            file.setIsImage(message.is_image);
          }
          return _this.dialogApi.addFiles([file.promise()]);
        });
        utils.registerMessage('open-new-window', iframe, function(message) {
          var interval, popup, resolve;
          if (_this.settings.debugUploads) {
            utils.debug("Open new window message.", _this.name);
          }
          popup = window.open(message.url, '_blank');
          if (!popup) {
            utils.warn("Can't open new window. Possible blocked.", _this.name);
            return;
          }
          resolve = function() {
            if (_this.settings.debugUploads) {
              utils.debug("Window is closed.", _this.name);
            }
            return _this.__sendMessage({
              type: 'navigate',
              fragment: ''
            });
          };
          if ('closed' in popup) {
            return interval = setInterval(function() {
              if (popup.closed) {
                clearInterval(interval);
                return resolve();
              }
            }, 100);
          } else {
            return popup.addEventListener('exit', resolve);
          }
        });
        return this.dialogApi.done(function() {
          utils.unregisterMessage('file-selected', iframe);
          return utils.unregisterMessage('open-new-window', iframe);
        });
      };

      return RemoteTab;

    })();
  });

}).call(this);
(function() {
  var $, Circle, _ref, _ref1;

  (_ref = uploadcare.ui, (_ref1 = _ref.progress, Circle = _ref1.Circle)), $ = uploadcare.jQuery;

  uploadcare.namespace('widget.tabs', function(ns) {
    return ns.BasePreviewTab = (function() {
      function BasePreviewTab(container, tabButton, dialogApi, settings, name) {
        var notDisabled,
          _this = this;
        this.container = container;
        this.tabButton = tabButton;
        this.dialogApi = dialogApi;
        this.settings = settings;
        this.name = name;
        this.__initTabButtonCircle();
        this.container.addClass('uploadcare--preview');
        notDisabled = ':not(:disabled)';
        this.container.on('click', '.uploadcare--preview__back' + notDisabled, function() {
          return _this.dialogApi.fileColl.clear();
        });
        this.container.on('click', '.uploadcare--preview__done' + notDisabled, this.dialogApi.resolve);
      }

      BasePreviewTab.prototype.__initTabButtonCircle = function() {
        var circle, circleDf, circleEl, update,
          _this = this;
        circleEl = this.tabButton.find('.uploadcare--panel__icon');
        circleDf = $.Deferred();
        update = function() {
          var infos, progress, progressInfo, _i, _len;
          infos = _this.dialogApi.fileColl.lastProgresses();
          progress = 0;
          for (_i = 0, _len = infos.length; _i < _len; _i++) {
            progressInfo = infos[_i];
            progress += ((progressInfo != null ? progressInfo.progress : void 0) || 0) / infos.length;
          }
          return circleDf.notify(progress);
        };
        this.dialogApi.fileColl.onAnyProgress(update);
        this.dialogApi.fileColl.onAdd.add(update);
        this.dialogApi.fileColl.onRemove.add(update);
        update();
        circle = new Circle(circleEl).listen(circleDf.promise());
        return this.dialogApi.progress(circle.update);
      };

      return BasePreviewTab;

    })();
  });

}).call(this);
(function() {
  var $, CropWidget, URL, progress, t, tpl, utils, _ref, _ref1, _ref2, _ref3, _ref4, _ref5,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  utils = uploadcare.utils, (_ref = uploadcare.utils, (_ref1 = _ref.abilities, URL = _ref1.URL)), (_ref2 = uploadcare.ui, progress = _ref2.progress), (_ref3 = uploadcare.templates, tpl = _ref3.tpl), $ = uploadcare.jQuery, (_ref4 = uploadcare.crop, CropWidget = _ref4.CropWidget), (_ref5 = uploadcare.locale, t = _ref5.t);

  uploadcare.namespace('widget.tabs', function(ns) {
    return ns.PreviewTab = (function(_super) {
      __extends(PreviewTab, _super);

      function PreviewTab(container, tabButton, dialogApi, settings, name) {
        var _this = this;
        this.container = container;
        this.tabButton = tabButton;
        this.dialogApi = dialogApi;
        this.settings = settings;
        this.name = name;
        this.populateCropSizes = __bind(this.populateCropSizes, this);
        this.initImage = __bind(this.initImage, this);
        this.__setState = __bind(this.__setState, this);
        this.__tryToLoadVideoPreview = __bind(this.__tryToLoadVideoPreview, this);
        this.__tryToLoadImagePreview = __bind(this.__tryToLoadImagePreview, this);
        this.__setFile = __bind(this.__setFile, this);
        PreviewTab.__super__.constructor.apply(this, arguments);
        $.each(this.dialogApi.fileColl.get(), function(i, file) {
          return _this.__setFile(file);
        });
        this.dialogApi.fileColl.onAdd.add(this.__setFile);
        this.widget = null;
        this.__state = null;
      }

      PreviewTab.prototype.__setFile = function(file) {
        var ifCur, tryToLoadImagePreview, tryToLoadVideoPreview,
          _this = this;
        this.file = file;
        ifCur = function(fn) {
          return function() {
            if (file === _this.file) {
              return fn.apply(null, arguments);
            }
          };
        };
        tryToLoadImagePreview = utils.once(this.__tryToLoadImagePreview);
        tryToLoadVideoPreview = utils.once(this.__tryToLoadVideoPreview);
        this.__setState('unknown', {});
        this.file.progress(ifCur(function(info) {
          var blob, label, source;
          info = info.incompleteFileInfo;
          label = (info.name || "") + utils.readableFileSize(info.size, '', ', ');
          _this.container.find('.uploadcare--preview__file-name').text(label);
          source = info.sourceInfo;
          blob = utils.abilities.Blob;
          if (source.file && blob && source.file instanceof blob) {
            return tryToLoadImagePreview(file, source.file).fail(function() {
              return tryToLoadVideoPreview(file, source.file);
            });
          }
        }));
        this.file.done(ifCur(function(info) {
          var imgInfo, src;
          if (_this.__state === 'video') {
            return;
          }
          if (info.isImage) {
            if (_this.__state !== 'image') {
              src = info.originalUrl;
              src += "-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/";
              if (_this.settings.previewUrlCallback) {
                src = _this.settings.previewUrlCallback(src, info);
              }
              imgInfo = info.originalImageInfo;
              _this.__setState('image', {
                src: src,
                name: info.name,
                info: info
              });
              return _this.initImage([imgInfo.width, imgInfo.height], info.cdnUrlModifiers);
            }
          } else {
            return _this.__setState('regular', {
              file: info
            });
          }
        }));
        return this.file.fail(ifCur(function(error, info) {
          return _this.__setState('error', {
            error: error,
            file: info
          });
        }));
      };

      PreviewTab.prototype.__tryToLoadImagePreview = function(file, blob) {
        var df,
          _this = this;
        df = $.Deferred();
        if (file.state() !== 'pending' || !blob.size || blob.size >= this.settings.multipartMinSize) {
          return df.reject().promise();
        }
        utils.image.drawFileToCanvas(blob, 1550, 924, '#ffffff', this.settings.imagePreviewMaxSize).done(function(canvas, size) {
          return utils.canvasToBlob(canvas, 'image/jpeg', 0.95, function(blob) {
            var src;
            df.resolve();
            canvas.width = canvas.height = 1;
            if (file.state() !== 'pending' || _this.dialogApi.state() !== 'pending' || _this.file !== file) {
              return;
            }
            src = URL.createObjectURL(blob);
            _this.dialogApi.always(function() {
              return URL.revokeObjectURL(src);
            });
            if (_this.__state !== 'image') {
              _this.__setState('image', {
                src: src,
                name: ""
              });
              return _this.initImage(size);
            }
          });
        }).fail(df.reject);
        return df.promise();
      };

      PreviewTab.prototype.__tryToLoadVideoPreview = function(file, blob) {
        var df, op, src,
          _this = this;
        df = $.Deferred();
        if (!URL || !blob.size) {
          return df.reject().promise();
        }
        src = URL.createObjectURL(blob);
        op = utils.videoLoader(src);
        op.fail(function() {
          URL.revokeObjectURL(src);
          return df.reject();
        }).done(function() {
          var videoTag;
          df.resolve();
          _this.dialogApi.always(function() {
            return URL.revokeObjectURL(src);
          });
          _this.__setState('video');
          videoTag = _this.container.find('.uploadcare--preview__video');
          videoTag.on('loadeddata', function() {
            var el;
            el = videoTag.get(0);
            el.currentTime = 360000;
            return videoTag.off('loadeddata');
          });
          videoTag.on('ended', function() {
            var el;
            el = videoTag.get(0);
            el.currentTime = 0;
            return videoTag.off('ended');
          });
          videoTag.attr('src', src);
          return videoTag.get(0).load();
        });
        return df.promise();
      };

      PreviewTab.prototype.__setState = function(state, data) {
        this.__state = state;
        data = data || {};
        data.crop = this.settings.crop;
        this.container.empty().append(tpl("tab-preview-" + state, data));
        this.container.removeClass(function(index, classes) {
          return classes.split(' ').filter(function(c) {
            return !!~c.indexOf('uploadcare--preview_status_');
          }).join(' ');
        });
        if (state === 'unknown' && this.settings.crop) {
          this.container.find('.uploadcare--preview__done').hide();
        }
        if (state === 'error') {
          return this.container.addClass('uploadcare--preview_status_error-' + data.error);
        }
      };

      PreviewTab.prototype.initImage = function(imgSize, cdnModifiers) {
        var done, img, imgLoader, startCrop,
          _this = this;
        img = this.container.find('.uploadcare--preview__image');
        done = this.container.find('.uploadcare--preview__done');
        imgLoader = utils.imageLoader(img[0]).done(function() {
          return _this.container.addClass('uploadcare--preview_status_loaded');
        }).fail(function() {
          _this.file = null;
          return _this.__setState('error', {
            error: 'loadImage'
          });
        });
        startCrop = function() {
          _this.container.find('.uploadcare--crop-sizes__item').attr('aria-disabled', false).attr('tabindex', 0);
          done.attr('disabled', false);
          _this.widget = new CropWidget(img, imgSize, _this.settings.crop[0]);
          if (cdnModifiers) {
            _this.widget.setSelectionFromModifiers(cdnModifiers);
          }
          return done.on('click', function() {
            var newFile;
            newFile = _this.widget.applySelectionToFile(_this.file);
            _this.dialogApi.fileColl.replace(_this.file, newFile);
            return true;
          });
        };
        if (this.settings.crop) {
          this.container.find('.uploadcare--preview__title').text(t('dialog.tabs.preview.crop.title'));
          this.container.find('.uploadcare--preview__content').addClass('uploadcare--preview__content_crop');
          done.attr('disabled', true);
          done.text(t('dialog.tabs.preview.crop.done'));
          this.populateCropSizes();
          this.container.find('.uploadcare--crop-sizes__item').attr('aria-disabled', true).attr('tabindex', -1);
          return imgLoader.done(function() {
            return utils.defer(startCrop);
          });
        }
      };

      PreviewTab.prototype.populateCropSizes = function() {
        var control, currentClass, template,
          _this = this;
        control = this.container.find('.uploadcare--crop-sizes');
        template = control.children();
        currentClass = 'uploadcare--crop-sizes__item_current';
        $.each(this.settings.crop, function(i, crop) {
          var caption, gcd, icon, item, prefered, size;
          prefered = crop.preferedSize;
          if (prefered) {
            gcd = utils.gcd(prefered[0], prefered[1]);
            caption = "" + (prefered[0] / gcd) + ":" + (prefered[1] / gcd);
          } else {
            caption = t('dialog.tabs.preview.crop.free');
          }
          item = template.clone().appendTo(control).attr('data-caption', caption).on('click', function(e) {
            if ($(e.currentTarget).attr('aria-disabled') === 'true') {
              return;
            }
            if (!$(e.currentTarget).hasClass(currentClass) && _this.settings.crop.length > 1 && _this.widget) {
              _this.widget.setCrop(crop);
              control.find('>*').removeClass(currentClass);
              item.addClass(currentClass);
            }
          });
          if (prefered) {
            size = utils.fitSize(prefered, [30, 30], true);
            return item.children().css({
              width: Math.max(20, size[0]),
              height: Math.max(12, size[1])
            });
          } else {
            icon = $("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-crop-free'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon');
            return item.children().append(icon).addClass('uploadcare--crop-sizes__icon_free');
          }
        });
        template.remove();
        return control.find('>*').eq(0).addClass(currentClass);
      };

      return PreviewTab;

    })(ns.BasePreviewTab);
  });

}).call(this);
// from https://github.com/homm/jquery-ordering

(function($) {
  function nearestFinder (targets) {
    this.targets = targets;
    this.last = null;
    this.update();
  }
  nearestFinder.prototype = {
    update: function() {
      var rows = {};

      this.targets.each(function(i) {
        var offset = $(this).offset();
        if ( ! (offset.top in rows)) {
          rows[offset.top] = [];
        }
        rows[offset.top].push([offset.left + this.offsetWidth/2, this]);
      });

      this.rows = rows;
    },

    find: function(x, y) {
      var minDistance = Infinity;
      var rows = this.rows;
      var nearestRow, top, nearest;

      for (top in rows) {
        var distance = Math.abs(top - y);
        if (distance < minDistance) {
          minDistance = distance;
          nearestRow = rows[top];
        }
      }

      minDistance = Math.abs(nearestRow[0][0] - x);
      nearest = nearestRow[0][1];
      for (var i = 1; i < nearestRow.length; i++) {
        var distance = Math.abs(nearestRow[i][0] - x);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = nearestRow[i][1];
        }
      }

      return nearest;
    },

    findNotLast: function(x, y) {
      var nearest = this.find(x, y);

      if (this.last && nearest && this.last == nearest) {
        return null;
      }

      return this.last = nearest;
    }
  };


  var movableName = 'uploadcareMovable';
  var sortableName = 'uploadcareSortable';
  var extend = {};
  extend[movableName] = function(o) {
    o = $.extend({
      distance: 4,
      anyButton: false,
      axis: false,
      zIndex: 1000,
      start: $.noop,
      move: $.noop,
      finish: $.noop,
      items: null,
      keepFake: false,
      touch: true
    }, o);

    function fixTouch(e) {
      if ( ! o.touch) {
        return;
      }
      var touch, s;
      s = e.originalEvent.touches;
      if (s && s.length) {
        touch = s[0];
      } else {
        s = e.originalEvent.changedTouches;
        if (s && s.length) {
          touch = s[0];
        } else {
          return;
        }
      }
      e.pageX = touch.pageX;
      e.pageY = touch.pageY;
      e.which = 1;
    }

    var events = 'mousedown.{} touchstart.{}'.replace(/\{}/g, movableName);
    this.on(events, o.items, null, function(eDown) {
      fixTouch(eDown);

      if ( ! o.anyButton && eDown.which != 1) {
        return;
      }
      eDown.preventDefault();

      var dragged = false;
      var $dragged = $(this);
      var $fake = false;
      var originalPos = $dragged.position();  // offset parent

      originalPos.top += $dragged.offsetParent().scrollTop();
      originalPos.left += $dragged.offsetParent().scrollLeft();

      var events = 'mousemove.{} touchmove.{}'.replace(/\{}/g, movableName);
      $(document).on(events, function(eMove) {
        fixTouch(eMove);

        if ( ! dragged && (Math.abs(eMove.pageX - eDown.pageX) > o.distance || Math.abs(eMove.pageY - eDown.pageY) > o.distance)) {
          dragged = true;
          $fake = $dragged.clone()
            .css({
              position: 'absolute',
              zIndex: o.zIndex,
              width: $dragged.width()
            })
            .appendTo($dragged.offsetParent());
          o.start({
            event: eMove,
            dragged: $dragged,
            fake: $fake
          });
        }

        if ( ! dragged) {
          return;
        }
        eMove.preventDefault();

        var dx = o.axis == 'y' ? 0 : eMove.pageX - eDown.pageX;
        var dy = o.axis == 'x' ? 0 : eMove.pageY - eDown.pageY;
        $fake.css({left: dx + originalPos.left, top: dy + originalPos.top});
        o.move({
          event: eMove,
          dragged: $dragged,
          fake: $fake,
          dx: dx,
          dy: dy
        });
      });

      var events = 'mouseup.{} touchend.{} touchcancel.{} touchleave.{}';
      $(document).on(events.replace(/\{}/g, movableName), function(eUp) {
        fixTouch(eUp);

        var events = 'mousemove.{} touchmove.{} mouseup.{} touchend.{} touchcancel.{} touchleave.{}';
        $(document).off(events.replace(/\{}/g, movableName));

        if ( ! dragged) {
          return;
        }
        eUp.preventDefault();

        var dx = eUp.pageX - eDown.pageX;
        var dy = eUp.pageY - eDown.pageY;
        dragged = false;
        o.finish({
          event: eUp,
          dragged: $dragged,
          fake: $fake,
          dx: dx,
          dy: dy
        });
        if ( ! o.keepFake) {
          $fake.remove();
        }
      });
    });
  };

  extend[sortableName] = function(o) {
    var oMovable = $.extend({
      items: '>*'
    }, o);
    var o = $.extend({
      checkBounds: function () {return true;},
      start: $.noop,
      attach: $.noop,
      move: $.noop,
      finish: $.noop
    }, o);
    var finder;
    var initialNext = false;
    var parent = this;

    oMovable.start = function(info) {
      o.start(info);
      finder = new nearestFinder(parent.find(oMovable.items).not(info.fake));
      initialNext = info.dragged.next();
    };

    oMovable.move = function(info) {
      info.nearest = null;

      if (o.checkBounds(info)) {
        var offset = info.fake.offset();
        var nearest = finder.findNotLast(
            offset.left + info.dragged.width() / 2, offset.top);
        info.nearest = $(nearest);

        if (nearest && nearest != info.dragged[0]) {
          if (info.dragged.nextAll().filter(nearest).length > 0) {
            info.dragged.insertAfter(nearest);
          } else {
            info.dragged.insertBefore(nearest);
          }
          o.attach(info);
          finder.last = null;
          finder.update();
        }
      } else if (finder.last !== null) {
        finder.last = null;
        if (initialNext.length) {
          info.dragged.insertBefore(initialNext);
        } else {
          info.dragged.parent().append(info.dragged);
        }
        o.attach(info);
        finder.update();
      }

      o.move(info);
    };

    oMovable.finish = function(info) {
      var offset = info.fake.offset();
      info.nearest = null;
      if (o.checkBounds(info)) {
        info.nearest = $(finder.find(
            offset.left + info.dragged.width() / 2, offset.top));
      }
      o.finish(info);
      finder = null;
    };

    return this[movableName](oMovable);
  };
  $.fn.extend(extend);
})(uploadcare.jQuery);
(function() {
  var $, progress, t, tpl, uc, utils, _ref, _ref1, _ref2,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  utils = uploadcare.utils, (_ref = uploadcare.ui, progress = _ref.progress), (_ref1 = uploadcare.templates, tpl = _ref1.tpl), $ = uploadcare.jQuery, (_ref2 = uploadcare.locale, t = _ref2.t);

  uc = uploadcare;

  uploadcare.namespace('widget.tabs', function(ns) {
    return ns.PreviewTabMultiple = (function(_super) {
      __extends(PreviewTabMultiple, _super);

      function PreviewTabMultiple() {
        this.__fileReplaced = __bind(this.__fileReplaced, this);
        this.__fileRemoved = __bind(this.__fileRemoved, this);
        this.__fileAdded = __bind(this.__fileAdded, this);
        this.__fileFailed = __bind(this.__fileFailed, this);
        this.__fileDone = __bind(this.__fileDone, this);
        this.__fileProgress = __bind(this.__fileProgress, this);
        this.__updateContainerView = __bind(this.__updateContainerView, this);
        var _this = this;
        PreviewTabMultiple.__super__.constructor.apply(this, arguments);
        this.container.append(tpl('tab-preview-multiple'));
        this.__fileTpl = $(tpl('tab-preview-multiple-file'));
        this.fileListEl = this.container.find('.uploadcare--files');
        this.doneBtnEl = this.container.find('.uploadcare--preview__done');
        $.each(this.dialogApi.fileColl.get(), function(i, file) {
          return _this.__fileAdded(file);
        });
        this.__updateContainerView();
        this.dialogApi.fileColl.onAdd.add(this.__fileAdded, this.__updateContainerView);
        this.dialogApi.fileColl.onRemove.add(this.__fileRemoved, this.__updateContainerView);
        this.dialogApi.fileColl.onReplace.add(this.__fileReplaced, this.__updateContainerView);
        this.dialogApi.fileColl.onAnyProgress(this.__fileProgress);
        this.dialogApi.fileColl.onAnyDone(this.__fileDone);
        this.dialogApi.fileColl.onAnyFail(this.__fileFailed);
        this.fileListEl.addClass(this.settings.imagesOnly ? 'uploadcare--files_type_tiles' : 'uploadcare--files_type_table');
        this.__setupSorting();
      }

      PreviewTabMultiple.prototype.__setupSorting = function() {
        var _this = this;
        return this.fileListEl.uploadcareSortable({
          touch: false,
          axis: this.settings.imagesOnly ? 'xy' : 'y',
          start: function(info) {
            return info.dragged.css('visibility', 'hidden');
          },
          finish: function(info) {
            var elements, index;
            info.dragged.css('visibility', 'visible');
            elements = _this.container.find('.uploadcare--file');
            index = function(file) {
              return elements.index(_this.__fileToEl(file));
            };
            return _this.dialogApi.fileColl.sort(function(a, b) {
              return index(a) - index(b);
            });
          }
        });
      };

      PreviewTabMultiple.prototype.__updateContainerView = function() {
        var errorContainer, files, hasWrongNumberFiles, title, tooFewFiles, tooManyFiles, wrongNumberFilesMessage;
        files = this.dialogApi.fileColl.length();
        tooManyFiles = files > this.settings.multipleMax;
        tooFewFiles = files < this.settings.multipleMin;
        hasWrongNumberFiles = tooManyFiles || tooFewFiles;
        this.doneBtnEl.attr('disabled', hasWrongNumberFiles);
        title = t('dialog.tabs.preview.multiple.question').replace('%files%', t('file', files));
        this.container.find('.uploadcare--preview__title').text(title);
        errorContainer = this.container.find('.uploadcare--preview__message');
        errorContainer.empty();
        if (hasWrongNumberFiles) {
          wrongNumberFilesMessage = tooManyFiles ? t('dialog.tabs.preview.multiple.tooManyFiles').replace('%max%', this.settings.multipleMax) : files && tooFewFiles ? t('dialog.tabs.preview.multiple.tooFewFiles').replace('%min%', this.settings.multipleMin).replace('%files%', t('file', files)) : void 0;
          return errorContainer.addClass('uploadcare--error').text(wrongNumberFilesMessage);
        }
      };

      PreviewTabMultiple.prototype.__updateFileInfo = function(fileEl, info) {
        var filename;
        filename = info.name || t('dialog.tabs.preview.unknownName');
        fileEl.find('.uploadcare--file__name').text(filename);
        fileEl.find('.uploadcare--file__description').attr('title', t('dialog.tabs.preview.multiple.file.preview').replace('%file%', filename));
        fileEl.find('.uploadcare--file__remove').attr('title', t('dialog.tabs.preview.multiple.file.remove').replace('%file%', filename));
        return fileEl.find('.uploadcare--file__size').text(utils.readableFileSize(info.size, '–'));
      };

      PreviewTabMultiple.prototype.__fileProgress = function(file, progressInfo) {
        var fileEl;
        fileEl = this.__fileToEl(file);
        fileEl.find('.uploadcare--progressbar__value').css('width', Math.round(progressInfo.progress * 100) + '%');
        return this.__updateFileInfo(fileEl, progressInfo.incompleteFileInfo);
      };

      PreviewTabMultiple.prototype.__fileDone = function(file, info) {
        var cdnURL, fileEl, filePreview,
          _this = this;
        fileEl = this.__fileToEl(file).removeClass('uploadcare--file_status_uploading').addClass('uploadcare--file_status_uploaded');
        fileEl.find('.uploadcare--progressbar__value').css('width', '100%');
        this.__updateFileInfo(fileEl, info);
        if (info.isImage) {
          cdnURL = "" + info.cdnUrl + "-/quality/lightest/-/preview/108x108/";
          if (this.settings.previewUrlCallback) {
            cdnURL = this.settings.previewUrlCallback(cdnURL, info);
          }
          filePreview = $('<img>').attr('src', cdnURL).addClass('uploadcare--file__icon');
        } else {
          filePreview = $("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-file'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--file__icon');
        }
        fileEl.find('.uploadcare--file__preview').html(filePreview);
        return fileEl.find('.uploadcare--file__description').on('click', function() {
          return uc.openPreviewDialog(file, _this.settings).done(function(newFile) {
            return _this.dialogApi.fileColl.replace(file, newFile);
          });
        });
      };

      PreviewTabMultiple.prototype.__fileFailed = function(file, error, info) {
        var fileEl, filePreview;
        fileEl = this.__fileToEl(file).removeClass('uploadcare--file_status_uploading').addClass('uploadcare--file_status_error');
        fileEl.find('.uploadcare--file__error').text(t("errors." + error));
        filePreview = $("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-error'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--file__icon');
        return fileEl.find('.uploadcare--file__preview').html(filePreview);
      };

      PreviewTabMultiple.prototype.__fileAdded = function(file) {
        var fileEl;
        fileEl = this.__createFileEl(file);
        return fileEl.appendTo(this.fileListEl);
      };

      PreviewTabMultiple.prototype.__fileRemoved = function(file) {
        this.__fileToEl(file).remove();
        return $(file).removeData();
      };

      PreviewTabMultiple.prototype.__fileReplaced = function(oldFile, newFile) {
        var fileEl;
        fileEl = this.__createFileEl(newFile);
        fileEl.insertAfter(this.__fileToEl(oldFile));
        return this.__fileRemoved(oldFile);
      };

      PreviewTabMultiple.prototype.__fileToEl = function(file) {
        return $(file).data('dpm-el') || $();
      };

      PreviewTabMultiple.prototype.__createFileEl = function(file) {
        var fileEl,
          _this = this;
        fileEl = this.__fileTpl.clone().on('click', '.uploadcare--file__remove', function() {
          return _this.dialogApi.fileColl.remove(file);
        });
        $(file).data('dpm-el', fileEl);
        return fileEl;
      };

      return PreviewTabMultiple;

    })(ns.BasePreviewTab);
  });

}).call(this);
(function() {
  var $, files, s, t, tabs, tpl, utils, _ref, _ref1, _ref2,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  utils = uploadcare.utils, (_ref = uploadcare.locale, t = _ref.t), (_ref1 = uploadcare.templates, tpl = _ref1.tpl), files = uploadcare.files, (_ref2 = uploadcare.widget, tabs = _ref2.tabs), s = uploadcare.settings, $ = uploadcare.jQuery;

  uploadcare.namespace('', function(ns) {
    var Panel, currentDialogPr, focusableElements, lockDialogFocus, lockScroll, openedClass, originalFocusedElement, registeredTabs,
      _this = this;
    lockDialogFocus = function(e) {
      if (!e.shiftKey && focusableElements.last().is(e.target)) {
        e.preventDefault();
        return focusableElements.first().focus();
      } else if (e.shiftKey && focusableElements.first().is(e.target)) {
        e.preventDefault();
        return focusableElements.last().focus();
      }
    };
    lockScroll = function(el, toTop) {
      var left, top;
      top = el.scrollTop();
      left = el.scrollLeft();
      if (toTop) {
        el.scrollTop(0).scrollLeft(0);
      }
      return function() {
        return el.scrollTop(top).scrollLeft(left);
      };
    };
    $(window).on('keydown', function(e) {
      if (ns.isDialogOpened()) {
        if (e.which === 27) {
          e.stopImmediatePropagation();
          if (typeof currentDialogPr !== "undefined" && currentDialogPr !== null) {
            currentDialogPr.reject();
          }
        }
        if (e.which === 9) {
          return lockDialogFocus(e);
        }
      }
    });
    currentDialogPr = null;
    openedClass = 'uploadcare--page';
    originalFocusedElement = null;
    focusableElements = null;
    ns.isDialogOpened = function() {
      return currentDialogPr !== null;
    };
    ns.closeDialog = function() {
      var _results;
      _results = [];
      while (currentDialogPr) {
        _results.push(currentDialogPr.reject());
      }
      return _results;
    };
    ns.openDialog = function(files, tab, settings) {
      var cancelLock, dialog, dialogPr;
      ns.closeDialog();
      originalFocusedElement = document.activeElement;
      dialog = $(tpl('dialog')).appendTo('body');
      dialogPr = ns.openPanel(dialog.find('.uploadcare--dialog__placeholder'), files, tab, settings);
      dialog.find('.uploadcare--panel').addClass('uploadcare--dialog__panel');
      dialog.addClass('uploadcare--dialog_status_active');
      dialogPr.dialogElement = dialog;
      focusableElements = dialog.find('select, input, textarea, button, a[href]');
      focusableElements.first().focus();
      cancelLock = lockScroll($(window), dialog.css('position') === 'absolute');
      $('html, body').addClass(openedClass);
      dialog.find('.uploadcare--dialog__close').on('click', dialogPr.reject);
      dialog.on('dblclick', function(e) {
        var showStoppers;
        if (!$.contains(document.documentElement, e.target)) {
          return;
        }
        showStoppers = '.uploadcare--dialog__panel, .uploadcare--dialog__powered-by';
        if ($(e.target).is(showStoppers) || $(e.target).parents(showStoppers).length) {
          return;
        }
        return dialogPr.reject();
      });
      return currentDialogPr = dialogPr.always(function() {
        $('html, body').removeClass(openedClass);
        currentDialogPr = null;
        dialog.remove();
        cancelLock();
        return originalFocusedElement.focus();
      });
    };
    ns.openPreviewDialog = function(file, settings) {
      var dialog, oldDialogPr,
        _this = this;
      oldDialogPr = currentDialogPr;
      currentDialogPr = null;
      settings = $.extend({}, settings, {
        multiple: false,
        tabs: ''
      });
      dialog = uploadcare.openDialog(file, 'preview', settings);
      if (oldDialogPr != null) {
        oldDialogPr.dialogElement.addClass('uploadcare--dialog_status_inactive');
      }
      dialog.always(function() {
        currentDialogPr = oldDialogPr;
        if (oldDialogPr != null) {
          $('html, body').addClass(openedClass);
          return oldDialogPr.dialogElement.removeClass('uploadcare--dialog_status_inactive');
        }
      });
      dialog.onTabVisibility(function(tab, shown) {
        if (tab === 'preview' && !shown) {
          return dialog.reject();
        }
      });
      return dialog;
    };
    ns.openPanel = function(placeholder, files, tab, settings) {
      var filter, panel;
      if ($.isPlainObject(tab)) {
        settings = tab;
        tab = null;
      }
      if (!files) {
        files = [];
      } else if (utils.isFileGroup(files)) {
        files = files.files();
      } else if (!$.isArray(files)) {
        files = [files];
      }
      settings = s.build(settings);
      panel = new Panel(settings, placeholder, files, tab).publicPromise();
      filter = function(files) {
        if (settings.multiple) {
          return uploadcare.FileGroup(files, settings);
        } else {
          return files[0];
        }
      };
      return utils.then(panel, filter, filter).promise(panel);
    };
    registeredTabs = {};
    ns.registerTab = function(tabName, constructor) {
      return registeredTabs[tabName] = constructor;
    };
    ns.registerTab('file', tabs.FileTab);
    ns.registerTab('url', tabs.UrlTab);
    ns.registerTab('camera', tabs.CameraTab);
    ns.registerTab('facebook', tabs.RemoteTab);
    ns.registerTab('dropbox', tabs.RemoteTab);
    ns.registerTab('gdrive', tabs.RemoteTab);
    ns.registerTab('gphotos', tabs.RemoteTab);
    ns.registerTab('instagram', tabs.RemoteTab);
    ns.registerTab('flickr', tabs.RemoteTab);
    ns.registerTab('vk', tabs.RemoteTab);
    ns.registerTab('evernote', tabs.RemoteTab);
    ns.registerTab('box', tabs.RemoteTab);
    ns.registerTab('onedrive', tabs.RemoteTab);
    ns.registerTab('huddle', tabs.RemoteTab);
    ns.registerTab('empty-pubkey', function(tabPanel, _1, _2, settings) {
      return tabPanel.append(settings._emptyKeyText);
    });
    ns.registerTab('preview', function(tabPanel, tabButton, dialogApi, settings, name) {
      var tabCls;
      if (!settings.previewStep && dialogApi.fileColl.length() === 0) {
        return;
      }
      tabCls = settings.multiple ? tabs.PreviewTabMultiple : tabs.PreviewTab;
      return new tabCls(tabPanel, tabButton, dialogApi, settings, name);
    });
    return Panel = (function() {
      function Panel(settings, placeholder, files, tab) {
        var sel,
          _this = this;
        this.settings = settings;
        this.openMenu = __bind(this.openMenu, this);
        this.isTabVisible = __bind(this.isTabVisible, this);
        this.hideTab = __bind(this.hideTab, this);
        this.showTab = __bind(this.showTab, this);
        this.switchTab = __bind(this.switchTab, this);
        this.__closePanel = __bind(this.__closePanel, this);
        this.__updateFooter = __bind(this.__updateFooter, this);
        this.__reject = __bind(this.__reject, this);
        this.__resolve = __bind(this.__resolve, this);
        this.addFiles = __bind(this.addFiles, this);
        this.dfd = $.Deferred();
        this.dfd.always(this.__closePanel);
        sel = '.uploadcare--panel';
        this.content = $(tpl('dialog__panel'));
        this.panel = this.content.find(sel).add(this.content.filter(sel));
        this.placeholder = $(placeholder);
        this.placeholder.replaceWith(this.content);
        this.panel.append($(tpl('icons')));
        if (this.settings.multiple) {
          this.panel.addClass('uploadcare--panel_multiple');
        }
        this.panel.find('.uploadcare--menu__toggle').on('click', function() {
          return _this.panel.find('.uploadcare--menu').toggleClass('uploadcare--menu_opened');
        });
        this.files = new utils.CollectionOfPromises(files);
        this.files.onRemove.add(function() {
          if (_this.files.length() === 0) {
            return _this.hideTab('preview');
          }
        });
        this.__autoCrop(this.files);
        this.tabs = {};
        this.__prepareFooter();
        this.onTabVisibility = $.Callbacks().add(function(tab, show) {
          return _this.panel.find(".uploadcare--menu__item_tab_" + tab).toggleClass("uploadcare--menu__item_hidden", !show);
        });
        if (this.settings.publicKey) {
          this.__prepareTabs(tab);
        } else {
          this.__welcome();
        }
      }

      Panel.prototype.publicPromise = function() {
        if (!this.promise) {
          this.promise = this.dfd.promise({
            reject: this.__reject,
            resolve: this.__resolve,
            fileColl: this.files,
            addFiles: this.addFiles,
            switchTab: this.switchTab,
            hideTab: this.hideTab,
            showTab: this.showTab,
            isTabVisible: this.isTabVisible,
            openMenu: this.openMenu,
            onTabVisibility: utils.publicCallbacks(this.onTabVisibility)
          });
        }
        return this.promise;
      };

      Panel.prototype.addFiles = function(files, data) {
        var file, _i, _len;
        if (data) {
          files = ns.filesFrom(files, data, this.settings);
        }
        if (!this.settings.multiple) {
          this.files.clear();
          files = [files[0]];
        }
        for (_i = 0, _len = files.length; _i < _len; _i++) {
          file = files[_i];
          if (this.settings.multipleMaxStrict) {
            if (this.files.length() >= this.settings.multipleMax) {
              file.cancel();
              continue;
            }
          }
          this.files.add(file);
        }
        if (this.settings.previewStep) {
          this.showTab('preview');
          if (!this.settings.multiple) {
            return this.switchTab('preview');
          }
        } else {
          return this.__resolve();
        }
      };

      Panel.prototype.__autoCrop = function(files) {
        var crop, _i, _len, _ref3,
          _this = this;
        if (!this.settings.crop || !this.settings.multiple) {
          return;
        }
        _ref3 = this.settings.crop;
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          crop = _ref3[_i];
          if (!crop.preferedSize) {
            return;
          }
        }
        return files.autoThen(function(fileInfo) {
          var info, size;
          if (!fileInfo.isImage || fileInfo.cdnUrlModifiers || fileInfo.crop) {
            return fileInfo;
          }
          info = fileInfo.originalImageInfo;
          size = utils.fitSize(_this.settings.crop[0].preferedSize, [info.width, info.height], true);
          return utils.applyCropCoordsToInfo(fileInfo, _this.settings.crop[0], [info.width, info.height], {
            width: size[0],
            height: size[1],
            left: Math.round((info.width - size[0]) / 2),
            top: Math.round((info.height - size[1]) / 2)
          });
        });
      };

      Panel.prototype.__resolve = function() {
        return this.dfd.resolve(this.files.get());
      };

      Panel.prototype.__reject = function() {
        return this.dfd.reject(this.files.get());
      };

      Panel.prototype.__prepareTabs = function(tab) {
        var tabName, _i, _len, _ref3;
        this.addTab('preview');
        _ref3 = this.settings.tabs;
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          tabName = _ref3[_i];
          this.addTab(tabName);
        }
        if (this.files.length()) {
          this.showTab('preview');
          this.switchTab('preview');
        } else {
          this.hideTab('preview');
          this.switchTab(tab || this.__firstVisibleTab());
        }
        if (this.settings.tabs.length === 0) {
          this.panel.addClass('uploadcare--panel_menu-hidden');
          return this.panel.find('.uploadcare--panel__menu').addClass('uploadcare--panel__menu_hidden');
        }
      };

      Panel.prototype.__prepareFooter = function() {
        var notDisabled,
          _this = this;
        this.footer = this.panel.find('.uploadcare--panel__footer');
        notDisabled = ':not(:disabled)';
        this.footer.on('click', '.uploadcare--panel__show-files' + notDisabled, function() {
          return _this.switchTab('preview');
        });
        this.footer.on('click', '.uploadcare--panel__done' + notDisabled, this.__resolve);
        this.__updateFooter();
        this.files.onAdd.add(this.__updateFooter);
        return this.files.onRemove.add(this.__updateFooter);
      };

      Panel.prototype.__updateFooter = function() {
        var footer, tooFewFiles, tooManyFiles;
        files = this.files.length();
        tooManyFiles = files > this.settings.multipleMax;
        tooFewFiles = files < this.settings.multipleMin;
        this.footer.find('.uploadcare--panel__done').attr('disabled', tooManyFiles || tooFewFiles);
        this.footer.find('.uploadcare--panel__show-files').attr('disabled', files === 0);
        footer = tooManyFiles ? t('dialog.tabs.preview.multiple.tooManyFiles').replace('%max%', this.settings.multipleMax) : files && tooFewFiles ? t('dialog.tabs.preview.multiple.tooFewFiles').replace('%min%', this.settings.multipleMin) : t('dialog.tabs.preview.multiple.title');
        this.footer.find('.uploadcare--panel__message').toggleClass('uploadcare--panel__message_hidden', files === 0).toggleClass('uploadcare--error', tooManyFiles || tooFewFiles).text(footer.replace('%files%', t('file', files)));
        return this.footer.find('.uploadcare--panel__file-counter').toggleClass('uploadcare--error', tooManyFiles || tooFewFiles).text(files ? "(" + files + ")" : "");
      };

      Panel.prototype.__closePanel = function() {
        this.panel.replaceWith(this.placeholder);
        return this.content.remove();
      };

      Panel.prototype.addTab = function(name) {
        var TabCls, tabButton, tabIcon, tabPanel,
          _this = this;
        if (name in this.tabs) {
          return;
        }
        TabCls = registeredTabs[name];
        if (!TabCls) {
          throw new Error("No such tab: " + name);
        }
        tabPanel = $('<div>').addClass("uploadcare--tab").addClass("uploadcare--tab_name_" + name).insertBefore(this.footer);
        if (name === 'preview') {
          tabIcon = $('<div class="uploadcare--menu__icon uploadcare--panel__icon">');
        } else {
          tabIcon = $("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-" + name + "'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--menu__icon');
        }
        tabButton = $('<div>', {
          role: 'button',
          tabindex: "0"
        }).addClass('uploadcare--menu__item').addClass("uploadcare--menu__item_tab_" + name).attr('title', t("dialog.tabs.names." + name)).append(tabIcon).appendTo(this.panel.find(".uploadcare--menu__items")).on('click', function() {
          if (name === _this.currentTab) {
            return _this.panel.find('.uploadcare--panel__menu').removeClass('uploadcare--menu_opened');
          } else {
            return _this.switchTab(name);
          }
        });
        return this.tabs[name] = new TabCls(tabPanel, tabButton, this.publicPromise(), this.settings, name);
      };

      Panel.prototype.switchTab = function(tab) {
        var className;
        if (!tab || this.currentTab === tab) {
          return;
        }
        this.currentTab = tab;
        this.panel.find('.uploadcare--panel__menu').removeClass('uploadcare--menu_opened').attr('data-current', tab);
        this.panel.find(".uploadcare--menu__item").removeClass("uploadcare--menu__item_current").filter(".uploadcare--menu__item_tab_" + tab).addClass("uploadcare--menu__item_current");
        className = "uploadcare--tab";
        this.panel.find("." + className).removeClass("" + className + "_current").filter("." + className + "_name_" + tab).addClass("" + className + "_current");
        return this.dfd.notify(tab);
      };

      Panel.prototype.showTab = function(tab) {
        return this.onTabVisibility.fire(tab, true);
      };

      Panel.prototype.hideTab = function(tab) {
        this.onTabVisibility.fire(tab, false);
        if (this.currentTab === tab) {
          return this.switchTab(this.__firstVisibleTab());
        }
      };

      Panel.prototype.isTabVisible = function(tab) {
        return !this.panel.find(".uploadcare--menu__item_tab_" + tab).is(".uploadcare--menu__item_hidden");
      };

      Panel.prototype.openMenu = function() {
        return this.panel.find('.uploadcare--panel__menu').addClass('uploadcare--menu_opened');
      };

      Panel.prototype.__firstVisibleTab = function() {
        var tab, _i, _len, _ref3;
        _ref3 = this.settings.tabs;
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          tab = _ref3[_i];
          if (this.isTabVisible(tab)) {
            return tab;
          }
        }
      };

      Panel.prototype.__welcome = function() {
        var tabName, _i, _len, _ref3;
        this.addTab('empty-pubkey');
        this.switchTab('empty-pubkey');
        _ref3 = this.settings.tabs;
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          tabName = _ref3[_i];
          this.__addFakeTab(tabName);
        }
        return null;
      };

      Panel.prototype.__addFakeTab = function(name) {
        var tabIcon;
        tabIcon = $("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-" + name + "'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--menu__icon');
        if (name === 'empty-pubkey') {
          tabIcon.addClass('uploadcare--panel__icon');
        }
        return $('<div>').addClass('uploadcare--menu__item').addClass("uploadcare--menu__item_tab_" + name).attr('aria-disabled', true).attr('title', t("dialog.tabs.names." + name)).append(tabIcon).appendTo(this.panel.find(".uploadcare--menu__items"));
      };

      return Panel;

    })();
  });

}).call(this);
(function() {
  var $, dragdrop, t, utils, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  utils = uploadcare.utils, $ = uploadcare.jQuery, dragdrop = uploadcare.dragdrop, (_ref = uploadcare.locale, t = _ref.t);

  uploadcare.namespace('widget', function(ns) {
    return ns.BaseWidget = (function() {
      function BaseWidget(element, settings) {
        var _this = this;
        this.element = element;
        this.settings = settings;
        this.reloadInfo = __bind(this.reloadInfo, this);
        this.__setObject = __bind(this.__setObject, this);
        this.__reset = __bind(this.__reset, this);
        this.validators = this.settings.validators = [];
        this.currentObject = null;
        this.__onDialogOpen = $.Callbacks();
        this.__onUploadComplete = $.Callbacks();
        this.__onChange = $.Callbacks().add(function(object) {
          return object != null ? object.promise().done(function(info) {
            return _this.__onUploadComplete.fire(info);
          }) : void 0;
        });
        this.__setupWidget();
        this.element.on('change.uploadcare', this.reloadInfo);
        this.__hasValue = false;
        utils.defer(function() {
          if (!_this.__hasValue) {
            return _this.reloadInfo();
          }
        });
      }

      BaseWidget.prototype.__setupWidget = function() {
        var path,
          _this = this;
        this.template = new ns.Template(this.settings, this.element);
        path = ['buttons.choose'];
        path.push(this.settings.imagesOnly ? 'images' : 'files');
        path.push(this.settings.multiple ? 'other' : 'one');
        this.template.addButton('open', t(path.join('.'))).toggleClass('needsclick', this.settings.systemDialog).on('click', function() {
          return _this.openDialog();
        });
        this.template.addButton('cancel', t('buttons.cancel')).on('click', function() {
          return _this.__setObject(null);
        });
        this.template.addButton('remove', t('buttons.remove')).on('click', function() {
          return _this.__setObject(null);
        });
        this.template.content.on('click', '.uploadcare--widget__file-name', function() {
          return _this.openDialog();
        });
        dragdrop.receiveDrop(this.template.content, this.__handleDirectSelection);
        return this.template.reset();
      };

      BaseWidget.prototype.__infoToValue = function(info) {
        if (info.cdnUrlModifiers || this.settings.pathValue) {
          return info.cdnUrl;
        } else {
          return info.uuid;
        }
      };

      BaseWidget.prototype.__reset = function() {
        var object;
        object = this.currentObject;
        this.currentObject = null;
        if (object != null) {
          if (typeof object.cancel === "function") {
            object.cancel();
          }
        }
        return this.template.reset();
      };

      BaseWidget.prototype.__setObject = function(newFile) {
        if (newFile === this.currentObject) {
          return;
        }
        this.__reset();
        if (newFile) {
          this.currentObject = newFile;
          this.__watchCurrentObject();
        } else {
          this.element.val('');
        }
        return this.__onChange.fire(this.currentObject);
      };

      BaseWidget.prototype.__watchCurrentObject = function() {
        var object,
          _this = this;
        object = this.__currentFile();
        if (object) {
          this.template.listen(object);
          return object.done(function(info) {
            if (object === _this.__currentFile()) {
              return _this.__onUploadingDone(info);
            }
          }).fail(function(error) {
            if (object === _this.__currentFile()) {
              return _this.__onUploadingFailed(error);
            }
          });
        }
      };

      BaseWidget.prototype.__onUploadingDone = function(info) {
        this.element.val(this.__infoToValue(info));
        this.template.setFileInfo(info);
        return this.template.loaded();
      };

      BaseWidget.prototype.__onUploadingFailed = function(error) {
        this.template.reset();
        return this.template.error(error);
      };

      BaseWidget.prototype.__setExternalValue = function(value) {
        return this.__setObject(utils.valueToFile(value, this.settings));
      };

      BaseWidget.prototype.value = function(value) {
        if (value !== void 0) {
          this.__hasValue = true;
          this.__setExternalValue(value);
          return this;
        } else {
          return this.currentObject;
        }
      };

      BaseWidget.prototype.reloadInfo = function() {
        return this.value(this.element.val());
      };

      BaseWidget.prototype.openDialog = function(tab) {
        var _this = this;
        if (this.settings.systemDialog) {
          return utils.fileSelectDialog(this.template.content, this.settings, function(input) {
            return _this.__handleDirectSelection('object', input.files);
          });
        } else {
          return this.__openDialog(tab);
        }
      };

      BaseWidget.prototype.__openDialog = function(tab) {
        var dialogApi;
        dialogApi = uploadcare.openDialog(this.currentObject, tab, this.settings);
        this.__onDialogOpen.fire(dialogApi);
        return dialogApi.done(this.__setObject);
      };

      BaseWidget.prototype.api = function() {
        if (!this.__api) {
          this.__api = utils.bindAll(this, ['openDialog', 'reloadInfo', 'value', 'validators']);
          this.__api.onChange = utils.publicCallbacks(this.__onChange);
          this.__api.onUploadComplete = utils.publicCallbacks(this.__onUploadComplete);
          this.__api.onDialogOpen = utils.publicCallbacks(this.__onDialogOpen);
          this.__api.inputElement = this.element.get(0);
        }
        return this.__api;
      };

      return BaseWidget;

    })();
  });

}).call(this);
(function() {
  var $, files, utils,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  utils = uploadcare.utils, files = uploadcare.files, $ = uploadcare.jQuery;

  uploadcare.namespace('widget', function(ns) {
    var _ref;
    ns.Widget = (function(_super) {
      __extends(Widget, _super);

      function Widget() {
        this.__handleDirectSelection = __bind(this.__handleDirectSelection, this);
        _ref = Widget.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Widget.prototype.__currentFile = function() {
        return this.currentObject;
      };

      Widget.prototype.__handleDirectSelection = function(type, data) {
        var file;
        file = uploadcare.fileFrom(type, data[0], this.settings);
        if (this.settings.systemDialog || !this.settings.previewStep) {
          return this.__setObject(file);
        } else {
          return this.__openDialog('preview').addFiles([file]);
        }
      };

      return Widget;

    })(ns.BaseWidget);
    return ns.Widget._name = 'SingleWidget';
  });

}).call(this);
(function() {
  var $, t, utils, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  utils = uploadcare.utils, $ = uploadcare.jQuery, (_ref = uploadcare.locale, t = _ref.t);

  uploadcare.namespace('widget', function(ns) {
    var _ref1;
    ns.MultipleWidget = (function(_super) {
      __extends(MultipleWidget, _super);

      function MultipleWidget() {
        this.__handleDirectSelection = __bind(this.__handleDirectSelection, this);
        this.__setObject = __bind(this.__setObject, this);
        _ref1 = MultipleWidget.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      MultipleWidget.prototype.__currentFile = function() {
        var _ref2;
        return (_ref2 = this.currentObject) != null ? _ref2.promise() : void 0;
      };

      MultipleWidget.prototype.__setObject = function(group) {
        if (!utils.isFileGroupsEqual(this.currentObject, group)) {
          return MultipleWidget.__super__.__setObject.apply(this, arguments);
        } else if (!group) {
          this.__reset();
          return this.element.val('');
        }
      };

      MultipleWidget.prototype.__setExternalValue = function(value) {
        var groupPr,
          _this = this;
        this.__lastGroupPr = groupPr = utils.valueToGroup(value, this.settings);
        if (value) {
          this.template.setStatus('started');
          this.template.statusText.text(t('loadingInfo'));
        }
        return groupPr.done(function(group) {
          if (_this.__lastGroupPr === groupPr) {
            return _this.__setObject(group);
          }
        }).fail(function() {
          if (_this.__lastGroupPr === groupPr) {
            return _this.__onUploadingFailed('createGroup');
          }
        });
      };

      MultipleWidget.prototype.__handleDirectSelection = function(type, data) {
        var files;
        files = uploadcare.filesFrom(type, data, this.settings);
        if (this.settings.systemDialog) {
          return this.__setObject(uploadcare.FileGroup(files, this.settings));
        } else {
          return this.__openDialog('preview').addFiles(files);
        }
      };

      return MultipleWidget;

    })(ns.BaseWidget);
    return ns.MultipleWidget._name = 'MultipleWidget';
  });

}).call(this);
(function() {
  var $, settings, utils;

  utils = uploadcare.utils, settings = uploadcare.settings, $ = uploadcare.jQuery;

  uploadcare.namespace('', function(ns) {
    var cleanup, dataAttr, initialize, initializeWidget, selector;
    dataAttr = 'uploadcareWidget';
    selector = '[role~="uploadcare-uploader"]';
    ns.initialize = function(container) {
      var el, res, widgets, _i, _len, _ref;
      if (container == null) {
        container = ':root';
      }
      res = [];
      _ref = $(container);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        el = _ref[_i];
        widgets = initialize(el.querySelectorAll(selector));
        res = res.concat(widgets);
      }
      return res;
    };
    initialize = function(targets) {
      var target, widget, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = targets.length; _i < _len; _i++) {
        target = targets[_i];
        widget = $(target).data(dataAttr);
        if (widget && widget.inputElement === target) {
          continue;
        }
        _results.push(initializeWidget(target));
      }
      return _results;
    };
    ns.SingleWidget = function(el) {
      return initializeWidget(el, ns.widget.Widget);
    };
    ns.MultipleWidget = function(el) {
      return initializeWidget(el, ns.widget.MultipleWidget);
    };
    ns.Widget = function(el) {
      return initializeWidget(el);
    };
    initializeWidget = function(input, targetClass) {
      var Widget, api, inputArr, s, widget;
      inputArr = $(input);
      if (inputArr.length === 0) {
        throw new Error("No DOM elements found matching selector");
      } else if (inputArr.length > 1) {
        utils.warn("There are multiple DOM elements matching selector");
      }
      input = inputArr.eq(0);
      s = settings.build(input.data());
      Widget = s.multiple ? ns.widget.MultipleWidget : ns.widget.Widget;
      if (targetClass && Widget !== targetClass) {
        throw new Error("This element should be processed using " + Widget._name);
      }
      api = input.data(dataAttr);
      if (!api || api.inputElement !== input[0]) {
        cleanup(input);
        widget = new Widget(input, s);
        api = widget.api();
        input.data(dataAttr, api);
        widget.template.content.data(dataAttr, api);
      }
      return api;
    };
    cleanup = function(input) {
      return input.off('.uploadcare').each(function() {
        var widget, widgetElement;
        widgetElement = $(this).next('.uploadcare--widget');
        widget = widgetElement.data(dataAttr);
        if (widget && widget.inputElement === this) {
          return widgetElement.remove();
        }
      });
    };
    ns.start = utils.once(function(s, isolated) {
      s = settings.common(s, isolated);
      if (isolated) {
        return;
      }
      if (s.live) {
        setInterval(ns.initialize, 100);
      }
      return ns.initialize();
    });
    return $(function() {
      if (!window["UPLOADCARE_MANUAL_START"]) {
        return ns.start();
      }
    });
  });

}).call(this);
(function() {
  var $, canSubmit, cancelEvents, submitPreventionState, submittedForm, uploadForm;

  $ = uploadcare.jQuery;

  canSubmit = function(form) {
    var notSubmittable;
    notSubmittable = '[data-status=started], [data-status=error]';
    return !form.find('.uploadcare--widget').is(notSubmittable);
  };

  submitPreventionState = function(form, prevent) {
    form.attr('data-uploadcare-submitted', prevent);
    return form.find(':submit').attr('disabled', prevent);
  };

  uploadForm = '[role~="uploadcare-upload-form"]';

  submittedForm = uploadForm + '[data-uploadcare-submitted]';

  $(document).on('submit', uploadForm, function() {
    var form;
    form = $(this);
    if (canSubmit(form)) {
      return true;
    } else {
      submitPreventionState(form, true);
      return false;
    }
  });

  $(document).on('loaded.uploadcare', submittedForm, function() {
    return $(this).submit();
  });

  cancelEvents = 'ready.uploadcare error.uploadcare';

  $(document).on(cancelEvents, submittedForm, function() {
    var form;
    form = $(this);
    if (canSubmit(form)) {
      return submitPreventionState(form, false);
    }
  });

}).call(this);
(function() {
  var $, fakeButtons, mouseFocusedClass, utils;

  utils = uploadcare.utils, $ = uploadcare.jQuery;

  fakeButtons = ['.uploadcare--menu__item', '.uploadcare--file__description', '.uploadcare--crop-sizes__item'].join(', ');

  mouseFocusedClass = 'uploadcare--mouse-focused';

  $(document.documentElement).on('mousedown', fakeButtons, function(e) {
    return utils.defer(function() {
      var activeElement;
      activeElement = document.activeElement;
      if (activeElement && activeElement !== document.body) {
        return $(activeElement).addClass(mouseFocusedClass).one('blur', function() {
          return $(activeElement).removeClass(mouseFocusedClass);
        });
      }
    });
  }).on('keypress', fakeButtons, function(e) {
    if (e.which === 13 || e.which === 32) {
      $(this).click();
      e.preventDefault();
      return e.stopPropagation();
    }
  });

}).call(this);
(function() {
  var expose;

  expose = uploadcare.expose;

  expose('globals', uploadcare.settings.common);

  expose('start');

  expose('initialize');

  expose('fileFrom');

  expose('filesFrom');

  expose('FileGroup');

  expose('loadFileGroup');

  expose('openDialog');

  expose('closeDialog');

  expose('openPanel');

  expose('registerTab');

  expose('Circle', uploadcare.ui.progress.Circle);

  expose('SingleWidget');

  expose('MultipleWidget');

  expose('Widget');

  expose('tabsCss');

  expose('dragdrop.support');

  expose('dragdrop.receiveDrop');

  expose('dragdrop.uploadDrop');

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.ar = {
      uploading: 'جاري الرفع... الرجاء الانتظار',
      loadingInfo: 'جار تحميل المعلومات ...',
      errors: {
        "default": 'خطأ',
        baddata: 'قيمة غير صحيحة',
        size: 'ملف كبير جداً',
        upload: 'يتعذر الرفع',
        user: 'تم إلغاء الرفع',
        info: 'يتعذر تحميل المعلومات',
        image: 'يسمح بالصور فقط',
        createGroup: 'لا يمكن إنشاء مجموعة ملفات',
        deleted: 'تم حذف الملف'
      },
      draghere: 'أسقط ملف هنا',
      file: {
        one: '%1 ملف',
        other: '%1 ملفات'
      },
      buttons: {
        cancel: 'إلغاء',
        remove: 'إزالة',
        choose: {
          files: {
            one: 'اختر ملف',
            other: 'اختر ملفات'
          },
          images: {
            one: 'اختر صورة',
            other: 'اختر صور'
          }
        }
      },
      dialog: {
        close: 'أغلق',
        openMenu: 'افتح القائمة',
        done: 'موافق',
        showFiles: 'اظهار الملفات',
        tabs: {
          names: {
            'empty-pubkey': 'مرحبا!',
            preview: 'معاينة',
            file: 'ملفات محلية',
            url: 'رابط مباشر',
            camera: 'كاميرا',
            facebook: 'فيس بوك',
            dropbox: 'دروب بوكس',
            gdrive: 'جوجل دريف',
            gphotos: 'صور غوغل',
            instagram: 'إينستجرام',
            vk: 'في كي',
            evernote: 'إيفرنوت',
            box: 'بوكس',
            onedrive: 'ون درايف',
            flickr: 'فليكر',
            huddle: 'هادل'
          },
          file: {
            drag: 'سحب وإفلات<br>أي ملف',
            nodrop: 'رفع ملفات من&nbsp;الحاسوب',
            cloudsTip: 'مخازن على السحابة<br>والشبكات الاجتماعية',
            or: 'أو',
            button: 'اختر ملف محلي',
            also: 'أو اختر من'
          },
          url: {
            title: 'ملفات من شبكة الإنترنت',
            line1: 'التقاط أي ملف من على شبكة الإنترنت',
            line2: 'فقط قم بتوفير الرابط',
            input: 'الصق الرابط هنا...',
            button: 'رفع'
          },
          camera: {
            title: 'ملف من كاميرا الويب',
            capture: 'التقاط صورة',
            mirror: 'عكس الصورة',
            startRecord: 'سجل فيديو',
            stopRecord: 'توقف',
            cancelRecord: 'إلغاء',
            retry: 'طلب الإذن مرة أخرى',
            pleaseAllow: {
              title: 'يرجى السماح بالوصول إلى الكاميرا',
              text: 'تمت مطالبتك بالسماح بالدخول إلى الكاميرا من هذا الموقع<br>' + 'من أجل التقاط الصور من الكاميرا يجب عليك الموافقة على هذا الطلب'
            },
            notFound: {
              title: 'لم يتم اكتشاف أي كاميرا',
              text: 'يبدو أنه ليس لديك كاميرا متصلة بهذا الجهاز'
            }
          },
          preview: {
            unknownName: 'غير معروف',
            change: 'إلغاء',
            back: 'الرجوع',
            done: 'إضافة',
            unknown: {
              title: 'جار الرفع ... يرجى الانتظار للحصول على معاينة',
              done: 'تخطي المعاينة والقبول'
            },
            regular: {
              title: 'إضافة هذا الملف؟',
              line1: 'أنت على وشك إضافة الملف أعلاه',
              line2: 'يرجى التأكيد'
            },
            image: {
              title: 'إضافة هذة الصورة',
              change: 'إلغاء'
            },
            crop: {
              title: 'قص وإضافة هذه الصورة',
              done: 'موافق',
              free: 'حر'
            },
            video: {
              title: 'إضافة هذا الفيديو',
              change: 'إلغاء'
            },
            error: {
              "default": {
                title: 'عفوا آسف',
                text: 'حدث خطأ أثناء الرفع',
                back: 'حاول مرة اخرى'
              },
              image: {
                title: 'يتم قبول ملفات الصور فقط',
                text: 'الرجاء إعادة المحاولة باستخدام ملف آخر',
                back: 'اختر صورة'
              },
              size: {
                title: 'الملف الذي حددتة يتجاوز الحد المسموح بة',
                text: 'الرجاء إعادة المحاولة باستخدام ملف آخر'
              },
              loadImage: {
                title: 'خطأ',
                text: 'لا يمكن تحميل الصورة'
              }
            },
            multiple: {
              title: 'لقد اخترت %files%',
              question: 'إضافة %files%?',
              tooManyFiles: 'لقد اخترت عددا كبيرا جدا من الملفات %max% هو الحد الأقصى',
              tooFewFiles: 'لقد اخترت %files%. على الأقل %min% مطلوب',
              clear: 'حذف الكل',
              done: 'إضافة',
              file: {
                preview: 'معاينة %file%',
                remove: 'حذف %file%'
              }
            }
          }
        },
        footer: {
          text: 'مدعوم بواسطة',
          link: 'ابلود كير'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.ar = function(n) {
      var mod;
      if (n === 0) {
        return 'zero';
      }
      if (n === 1) {
        return 'one';
      }
      if (n === 2) {
        return 'two';
      }
      mod = n % 100;
      if ((3 <= mod && mod <= 10)) {
        return 'few';
      }
      if ((11 <= mod && mod <= 99)) {
        return 'many';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.az = {
      uploading: 'Yüklənilir... Lütfən, gözləyin.',
      loadingInfo: 'İnfo yüklənilir...',
      errors: {
        "default": 'Xəta',
        baddata: 'Yanlış dəyər',
        size: 'Fayl çox böyükdür',
        upload: 'Yüklənilə bilmədi',
        user: 'Yükləmə ləğv edildi',
        info: 'İnfo yüklənə bilmədi',
        image: 'Yalnız təsvirlərə icazə verilir',
        createGroup: 'Fayl qrupu yaradıla bilmir',
        deleted: 'Fayl silindi'
      },
      draghere: 'Faylı bura atın',
      file: {
        one: '%1 fayl',
        other: '%1 fayl'
      },
      buttons: {
        cancel: 'Ləğv edin',
        remove: 'Silin',
        choose: {
          files: {
            one: 'Fayl seçin',
            other: 'Fayllar seçin'
          },
          images: {
            one: 'Təsvir seçin',
            other: 'Təsvirlər seçin'
          }
        }
      },
      dialog: {
        done: 'Hazırdır',
        showFiles: 'Faylları göstərin',
        tabs: {
          names: {
            'empty-pubkey': 'Xoş gəlmisiniz',
            preview: 'Önbaxış',
            file: 'Lokal Fayllar',
            url: 'İxtiyari linklər',
            camera: 'Kamera',
            gdrive: 'Google Disk'
          },
          file: {
            drag: 'Faylı bura atın',
            nodrop: 'Kompüterinizdən faylları yükləyin',
            cloudsTip: 'Bulud yaddaşlar <br>və sosial xidmətlər',
            or: 'or',
            button: 'Lokal fayl seçin',
            also: 'Həmçinin, buradan seçə bilərsiniz'
          },
          url: {
            title: 'Vebdən fayllar',
            line1: 'Vebdən istənilən faylı götürün.',
            line2: 'Sadəcə, link verin.',
            input: 'Linkinizi bura yerləşdirin...',
            button: 'Yükləyin'
          },
          camera: {
            capture: 'Şəkil çəkin',
            mirror: 'Güzgü',
            retry: 'Yenidən icazə sorğusu göndərin.',
            pleaseAllow: {
              title: 'Lütfən, kameranıza giriş hüququ verin',
              text: 'Bu saytdan kameranıza daxil olmaq icazəsi verildi. ' + 'Kameranız ilə şəkil çəkmək üçün bu sorğunu təsdiq etməlisiniz.'
            },
            notFound: {
              title: 'Kamera aşkar edilmədi',
              text: 'Görünür, bu cihaza kamera qoşulmayıb.'
            }
          },
          preview: {
            unknownName: 'naməlum',
            change: 'Ləğv edin',
            back: 'Geri',
            done: 'Əlavə edin',
            unknown: {
              title: 'Yüklənilir... Lütfən, önbaxış üçün gözləyin.',
              done: 'Önbaxışı ötürün və qəbul edin'
            },
            regular: {
              title: 'Bu fayl əlavə edilsin?',
              line1: 'Yuxarıdakı faylı əlavə etmək üzrəsiniz.',
              line2: 'Lütfən, təsdiq edin.'
            },
            image: {
              title: 'Bu təsvir əlavə edilsin?',
              change: 'Ləğv edin'
            },
            crop: {
              title: 'Bu təsviri kəsin və əlavə edin',
              done: 'Hazırdır',
              free: 'pulsuz'
            },
            error: {
              "default": {
                title: 'Ups!',
                text: 'Yükləmə zamanı nəsə xəta baş verdi.',
                back: 'Lütfən, y enidən cəhd edin.'
              },
              image: {
                title: 'Yaınız təsvir faylları qəbul olunur.',
                text: 'Lütfən, başqa fayl ilə cəhd edin.',
                back: 'Təsvir seçin'
              },
              size: {
                title: 'Seçdiyiniz fayl limiti keçir.',
                text: 'Lütfən, başqa fayl ilə cəhd edin.'
              },
              loadImage: {
                title: 'Xəta',
                text: 'Təsvir yüklənilə bilmir'
              }
            },
            multiple: {
              title: '%files% fayl seçdiniz.',
              question: 'Bütün bu faylları əlavə etmək istəyirsiniz?',
              tooManyFiles: 'Həddindən çox fayl seçdiniz. %max% maksimumdur.',
              tooFewFiles: '%files% fayl seçdiniz. Ən azı %min% tələb olunur.',
              clear: 'Hamısını silin',
              done: 'Hazırdır'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.az = function(n) {
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.ca = {
      uploading: 'Carregant... Si us plau esperi.',
      loadingInfo: 'Carregant informació...',
      errors: {
        "default": 'Error',
        baddata: 'Valor incorrecte',
        size: 'Massa gran',
        upload: 'No s\'ha pogut carregar',
        user: 'Carrega cancel·lada',
        info: 'No s\'ha pogut carregar la informació',
        image: 'Només es permeten imatges',
        createGroup: 'No es pot crear el grup d\'arxius',
        deleted: 'Fitxer eliminat'
      },
      draghere: 'Arrossega els fitxers fins aquí',
      file: {
        one: '%1 fitxer',
        other: '%1 fitxers'
      },
      buttons: {
        cancel: 'Cancel·lar',
        remove: 'Eliminar',
        choose: {
          files: {
            one: 'Escull un fitxer',
            other: 'Escull fitxers'
          },
          images: {
            one: 'Escull una imatge',
            other: 'Escull imatges'
          }
        }
      },
      dialog: {
        done: 'Fet',
        showFiles: 'Mostra fitxers',
        tabs: {
          names: {
            'empty-pubkey': 'Benvingut',
            preview: 'Avanci',
            file: 'Ordinador',
            url: 'Enllaços arbitraris',
            camera: 'Càmera'
          },
          file: {
            drag: 'Arrossega un fitxer aquí',
            nodrop: 'Carrega fitxers des del teu ordinador',
            cloudsTip: 'Emmagatzematge al núvol<br>i xarxes socials',
            or: 'o',
            button: 'Escull un fitxer des del teu ordinador',
            also: 'També pots seleccionar-lo de'
          },
          url: {
            title: 'Fitxers de la web',
            line1: 'Selecciona qualsevol fitxer de la web.',
            line2: 'Només proporcioni el link.',
            input: 'Copiï el link aquí...',
            button: 'Pujar'
          },
          camera: {
            capture: 'Realitza una foto',
            mirror: 'Mirall',
            retry: 'Demanar permisos una altra vegada',
            pleaseAllow: {
              title: 'Si us plau, permet accés a la teva càmera',
              text: 'Aquest lloc t\'ha demanat de permetre accés a la càmera. ' + 'Per tal de realitzar imatges amb la teva càmera has d\'acceptar aquesta petició.'
            },
            notFound: {
              title: 'No s\'ha detectat cap càmera',
              text: 'Sembla que no tens cap càmera connectada a aquest dispositiu.'
            }
          },
          preview: {
            unknownName: 'desconegut',
            change: 'Cancel·lar',
            back: 'Endarrere',
            done: 'Pujar',
            unknown: {
              title: 'Carregant. Si us plau esperi per la visualització prèvia.',
              done: 'Saltar visualització prèvia i acceptar'
            },
            regular: {
              title: 'Vols pujar aquest fitxer?',
              line1: 'Estàs a punt de pujar el fitxer superior.',
              line2: 'Confirmi, si us plau.'
            },
            image: {
              title: 'Vols pujar aquesta imatge?',
              change: 'Cancel·lar'
            },
            crop: {
              title: 'Tallar i pujar aquesta imatge',
              done: 'Fet',
              free: 'lliure'
            },
            error: {
              "default": {
                title: 'La pujada ha fallat!',
                text: 'S\'ha produït un error durant la pujada.',
                back: 'Si us plau, provi-ho de nou.'
              },
              image: {
                title: 'Només s\'accepten fitxers d\'imatges.',
                text: 'Si us plau, provi-ho de nou amb un altre fitxer.',
                back: 'Escull imatge'
              },
              size: {
                title: 'La mida del fitxer que has seleccionat sobrepassa el límit.',
                text: 'Si us plau, provi-ho de nou amb un altre fitxer.'
              },
              loadImage: {
                title: 'Error',
                text: 'No s\'ha pogut carregar la imatge'
              }
            },
            multiple: {
              title: 'N\'has escollit %files%',
              question: 'Vols afegir tots aquests fitxers?',
              tooManyFiles: 'Has escollit massa fitxers. %max% és el màxim.',
              tooFewFiles: 'Has escollit %files%. Com a mínim en calen %min%.',
              clear: 'Eliminar-los tots',
              done: 'Fet'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.ca = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.cs = {
      uploading: 'Nahrávám... Malý moment.',
      loadingInfo: 'Nahrávám informace...',
      errors: {
        "default": 'Chyba',
        baddata: 'Neplatná hodnota',
        size: 'Soubor je příliš velký',
        upload: 'Nelze nahrát',
        user: 'Nahrávání zrušeno',
        info: 'Nelze nahrát informace',
        image: 'Lze nahrát pouze obrázky',
        createGroup: 'Nelze vytvořit adresář',
        deleted: 'Soubor byl smazán'
      },
      draghere: 'Přetáhněte soubor sem',
      file: {
        one: '%1 soubor',
        few: '%1 soubory',
        many: '%1 souborů'
      },
      buttons: {
        cancel: 'Zrušit',
        remove: 'Odstranit',
        choose: {
          files: {
            one: 'Vyberte soubor',
            other: 'Vyberte soubory'
          },
          images: {
            one: 'Vyberte obrázek',
            other: 'Vyberte obrázky'
          }
        }
      },
      dialog: {
        done: 'Hotovo',
        showFiles: 'Zobrazit soubory',
        tabs: {
          names: {
            'empty-pubkey': 'Vítejte',
            preview: 'Náhled',
            file: 'Soubor z počítače',
            url: 'Soubor z internetu',
            camera: 'Webkamera',
            facebook: 'Facebook',
            dropbox: 'Dropbox',
            gdrive: 'Google Drive',
            instagram: 'Instagram',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'Přetáhněte soubor sem',
            nodrop: 'Nahrajte soubory z vašeho počítače',
            cloudsTip: 'Cloudové úložiště<br>a sociální sítě',
            or: 'nebo',
            button: 'Vyberte soubor z počítače',
            also: 'Můžete také nahrát soubor z'
          },
          url: {
            title: 'Soubory z internetu',
            line1: 'Nahrajte jakýkoliv soubor z internetu.',
            line2: 'Stačí vložit odkaz.',
            input: 'Odkaz vložte zde...',
            button: 'Nahrát'
          },
          camera: {
            capture: 'Pořídit fotografii',
            mirror: 'Zrcadlo',
            retry: 'Znovu požádat o povolení',
            pleaseAllow: {
              title: 'Prosím povolte přístup k webkameře',
              text: 'Byl(a) jste požádán(a) o přístup k webkameře. ' + 'Abyste mohl(a) pořídit fotografii, musíte přístup povolit.'
            },
            notFound: {
              title: 'Nebyla nalezena webkamera',
              text: 'Zdá se, že k tomuto zařízení není připojena žádná webkamera.'
            }
          },
          preview: {
            unknownName: 'neznámý',
            change: 'Zrušit',
            back: 'Zpět',
            done: 'Přidat',
            unknown: {
              title: 'Nahrávám... Prosím vyčkejte na náhled.',
              done: 'Přeskočit náhled a odeslat'
            },
            regular: {
              title: 'Přidat tento soubor?',
              line1: 'Tímto přidáte výše vybraný soubor.',
              line2: 'Prosím potvrďte.'
            },
            image: {
              title: 'Přidat tento obrázek?',
              change: 'Zrušit'
            },
            crop: {
              title: 'Oříznout a přidat tento obrázek',
              done: 'Hotovo',
              free: 'zdarma'
            },
            error: {
              "default": {
                title: 'Jejda!',
                text: 'Něco se v průběhu nahrávání nepodařilo.',
                back: 'Zkuste to prosím znovu.'
              },
              image: {
                title: 'Lze nahrávat pouze obrázky.',
                text: 'Zkuste to prosím s jiným souborem.',
                back: 'Vyberte obrázek'
              },
              size: {
                title: 'Soubor přesahuje povolenou velikost.',
                text: 'Prosím zkuste to s jiným souborem.'
              },
              loadImage: {
                title: 'Chyba',
                text: 'Nelze nahrát obrázek'
              }
            },
            multiple: {
              title: 'Bylo vybráno %files% souborů',
              question: 'Chcete přidat všechny tyto soubory?',
              tooManyFiles: 'Bylo vybráno moc souborů. Maximum je %max%',
              tooFewFiles: 'Bylo vybráno %files% souborů. Musíte vybrat minimálně %min%',
              clear: 'Odstranit vše',
              done: 'Hotovo'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.cs = function(n) {
      if (n === 1) {
        return 'one';
      } else if ((2 <= n && n <= 4)) {
        return 'few';
      } else {
        return 'many';
      }
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.da = {
      uploading: 'Uploader... Vent venligst.',
      loadingInfo: 'Henter information...',
      errors: {
        "default": 'Fejl',
        baddata: 'Forkert værdi',
        size: 'Filen er for stor',
        upload: 'Kan ikke uploade / sende fil',
        user: 'Upload fortrudt',
        info: 'Kan ikke hente information',
        image: 'Kun billeder er tilladt',
        createGroup: 'Kan ikke oprette fil gruppe',
        deleted: 'Filen blev slettet'
      },
      draghere: 'Drop en fil her',
      file: {
        one: '%1 fil',
        other: '%1 filer'
      },
      buttons: {
        cancel: 'Annuller',
        remove: 'Fjern',
        choose: {
          files: {
            one: 'Vælg en fil',
            other: 'Vælg filer'
          },
          images: {
            one: 'Vælg et billede',
            other: 'Vælg billeder'
          }
        }
      },
      dialog: {
        done: 'Færdig',
        showFiles: 'Vis filer',
        tabs: {
          names: {
            preview: 'Vis',
            file: 'Computer',
            gdrive: 'Google Drev',
            url: 'Direkte link'
          },
          file: {
            drag: 'Drop en fil her',
            nodrop: 'Hent filer fra din computer',
            or: 'eller',
            button: 'Hent fil fra din computer',
            also: 'Du kan også hente fra'
          },
          url: {
            title: 'Filer fra en Web adresse',
            line1: 'Vælg en fil fra en web adresse.',
            line2: 'Skriv bare linket til filen.',
            input: 'Indsæt link her...',
            button: 'Upload / Send'
          },
          preview: {
            unknownName: 'ukendt',
            change: 'Annuller',
            back: 'Tilbage',
            done: 'Fortsæt',
            unknown: {
              title: 'Uploader / sender... Vent for at se mere.',
              done: 'Fortsæt uden at vente på resultat'
            },
            regular: {
              title: 'Tilføje fil?',
              line1: 'Du er ved at tilføje filen ovenfor.',
              line2: 'Venligst accepter.'
            },
            image: {
              title: 'Tilføj billede?',
              change: 'Annuller'
            },
            crop: {
              title: 'Beskær og tilføj dette billede',
              done: 'Udfør'
            },
            error: {
              "default": {
                title: 'Hov!',
                text: 'Noget gik galt under upload.',
                back: 'Venligst prøv igen'
              },
              image: {
                title: 'Du kan kun vælge billeder.',
                text: 'Prøv igen med en billedfil.',
                back: 'Vælg billede'
              },
              size: {
                title: 'Den fil du valgte, er desværre større end tilladt.',
                text: 'Venligst prøv med en mindre fil.'
              },
              loadImage: {
                title: 'Fejl',
                text: 'Kan ikke åbne billede'
              }
            },
            multiple: {
              title: 'Du har valgt %files% filer',
              question: 'Vil du tilføje alle disse filer?',
              tooManyFiles: 'Du har valgt for mange filer. %max% er maximum.',
              tooFewFiles: 'Du har valgt %files% filer. Men du skal vælge mindst %min%.',
              clear: 'Fjern alle',
              done: 'Fortsæt'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.da = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.de = {
      uploading: 'Hochladen... Bitte warten.',
      loadingInfo: 'Laden der Informationen...',
      errors: {
        "default": 'Error',
        baddata: 'Falscher Wert',
        size: 'Datei zu groß',
        upload: 'Kann nicht hochgeladen werden',
        user: 'Hochladen abgebrochen',
        info: 'Informationen können nicht geladen werden',
        image: 'Nur Bilder sind erlaubt',
        createGroup: 'Datei-Gruppe kann nicht erstellt werden',
        deleted: 'Datei wurde gelöscht'
      },
      draghere: 'Ziehen Sie eine Datei hier hinein',
      file: {
        one: '%1 Datei',
        other: '%1 Dateien'
      },
      buttons: {
        cancel: 'Abbrechen',
        remove: 'Löschen',
        choose: {
          files: {
            one: 'Wählen Sie eine Datei',
            other: 'Wählen Sie die Dateien'
          },
          images: {
            one: 'Wählen Sie ein Bild',
            other: 'Wählen Sie Bilder'
          }
        }
      },
      dialog: {
        done: 'Fertig',
        showFiles: 'Dateien anzeigen',
        tabs: {
          names: {
            'empty-pubkey': 'Willkommen',
            preview: 'Vorschau',
            file: 'Lokale Dateien',
            url: 'Web-Links',
            camera: 'Kamera'
          },
          file: {
            drag: 'Ziehen Sie eine Datei hier hinein',
            nodrop: 'Laden Sie Dateien von Ihrem PC hoch',
            cloudsTip: 'Cloud Speicher<br>und soziale Dienste',
            or: 'oder',
            button: 'Wählen Sie eine lokale Datei',
            also: 'Sie können sie auch wählen von'
          },
          url: {
            title: 'Dateien vom Web',
            line1: 'Holen Sie sich irgendeine Datei vom Web.',
            line2: 'Geben Sie einfach den Link an.',
            input: 'Bitte geben Sie den Link hier an...',
            button: 'Hochladen'
          },
          camera: {
            capture: 'Machen Sie ein Foto',
            mirror: 'Spiegel',
            retry: 'Berechtigungen erneut anfordern',
            pleaseAllow: {
              title: 'Bitte erlauben Sie den Zugriff auf Ihre Kamera',
              text: 'Sie wurden gebeten, dieser Website den Zugriff auf Ihre Kamera zu erlauben. Um mit Ihrer Kamera Fotos machen zu können, müssen Sie diese Erlaubnis erteilen.'
            },
            notFound: {
              title: 'Keine Kamera festgestellt',
              text: 'Es sieht so aus, als hätten Sie keine Kamera an dieses Gerät angeschlossen.'
            }
          },
          preview: {
            unknownName: 'nicht bekannt',
            change: 'Abbrechen',
            back: 'Zurück',
            done: 'Hinzufügen',
            unknown: {
              title: 'Hochladen... Bitte warten Sie auf die Vorschau.',
              done: 'Vorschau überspringen und Datei annehmen'
            },
            regular: {
              title: 'Diese Datei hinzufügen?',
              line1: 'Diese Datei wird nun hinzugefügt.',
              line2: 'Bitte bestätigen Sie.'
            },
            image: {
              title: 'Dieses Bild hinzufügen?',
              change: 'Abbrechen'
            },
            crop: {
              title: 'Dieses Bild beschneiden und hinzufügen',
              done: 'Fertig',
              free: 'frei'
            },
            error: {
              "default": {
                title: 'Oops!',
                text: 'Etwas ist während dem Hochladen schief gelaufen.',
                back: 'Bitte versuchen Sie es erneut'
              },
              image: {
                title: 'Nur Bilder sind akzeptiert.',
                text: 'Bitte veruschen Sie es erneut mit einer anderen Datei.',
                back: 'Bild wählen'
              },
              size: {
                title: 'Die gewählte Datei überschreitet das Limit.',
                text: 'Bitte veruschen Sie es erneut mit einer anderen Datei.'
              },
              loadImage: {
                title: 'Fehler',
                text: 'Das Bild kann nicht geladen werden'
              }
            },
            multiple: {
              title: 'Sie haben %files% Dateien gewählt',
              question: 'Möchten Sie all diese Dateien hinzufügen?',
              tooManyFiles: 'Sie haben zu viele Dateien gewählt. %max% ist das Maximum.',
              tooFewFiles: 'Sie haben %files% Dateien. Es sind mindestens %min% nötig.',
              clear: 'Alle löschen',
              done: 'Fertig'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.de = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.el = {
      loadingInfo: 'Φόρτωση πληροφοριών...',
      errors: {
        "default": 'Σφάλμα',
        baddata: 'Λανθασμένη αξία',
        size: 'Πολύ μεγάλο αρχείο',
        upload: 'Δεν μπορεί να γίνει φόρτωση',
        user: 'Η φόρτωση ακυρώθηκε',
        info: 'Δεν μπορούν να φορτωθούν πληροφορίες',
        image: 'Μόνο εικόνες επιτρέπονται',
        createGroup: 'Δεν μπορεί να δημιουργηθεί ομάδα αρχείων',
        deleted: 'Το αρχείο διαγράφηκε'
      },
      uploading: 'Φόρτωση... Παρακαλούμε περιμένετε.',
      draghere: 'Αποθέστε ένα αρχείο εδώ',
      file: {
        one: '%1 αρχείο',
        other: '%1 αρχεία'
      },
      buttons: {
        cancel: 'Ακύρωση',
        remove: 'Κατάργηση',
        choose: {
          files: {
            one: 'Επιλέξτε ένα αρχείο',
            other: 'Επιλέξτε αρχεία'
          },
          images: {
            one: 'Επιλέξτε μία εικόνα',
            other: 'Επιλέξτε εικόνες'
          }
        }
      },
      dialog: {
        close: 'Κλείσιμο',
        openMenu: 'Άνοιγμα μενού',
        done: 'Εντάξει',
        showFiles: 'Προβολή αρχείων',
        tabs: {
          names: {
            'empty-pubkey': 'Καλώς ήρθατε',
            preview: 'Προεπισκόπηση',
            file: 'Τοπικά αρχεία',
            url: 'Απευθείας σύνδεσμος',
            camera: 'Κάμερα',
            facebook: 'Facebook',
            dropbox: 'Dropbox',
            gdrive: 'Google Drive',
            instagram: 'Instagram',
            gphotos: 'Google Photos',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'σύρετε & αποθέστε<br>οποιαδήποτε αρχεία',
            nodrop: 'Φορτώστε αρχεία από τον&nbsp;υπολογιστή σας',
            cloudsTip: 'Αποθήκευση νέφους<br>και κοινωνικά δίκτυα',
            or: 'ή',
            button: 'Επιλέξτε ένα τοπικό αρχείο',
            also: 'ή επιλέξτε από'
          },
          url: {
            title: 'Αρχεία από τον Ιστό',
            line1: 'Πάρτε οποιοδήποτε αρχείο από το διαδίκτυο.',
            line2: 'Γράψτε απλώς τον σύνδεσμο.',
            input: 'Επικολλήστε τον σύνδεσμό σας εδώ...',
            button: 'Φόρτωση'
          },
          camera: {
            title: 'Αρχείο από κάμερα web',
            capture: 'Τραβήξτε μια φωτογραφία',
            mirror: 'Καθρέφτης',
            startRecord: 'Εγγραφή βίντεο',
            cancelRecord: 'Ακύρωση',
            stopRecord: 'Διακοπή',
            retry: 'Νέο αίτημα για άδεια',
            pleaseAllow: {
              text: 'Έχετε δεχτεί υπόδειξη να επιτρέψετε την πρόσβαση στην κάμερα από αυτόν τον ιστότοπο.<br>Για να τραβήξετε φωτογραφίες με την κάμερά σας πρέπει να εγκρίνετε αυτό το αίτημα.',
              title: 'Παρακαλούμε επιτρέψτε την πρόσβαση στην κάμερά σας'
            },
            notFound: {
              title: 'Δεν εντοπίστηκε κάμερα',
              text: 'Φαίνεται ότι δεν έχετε κάμερα συνδεδεμένη με αυτή τη συσκευή.'
            }
          },
          preview: {
            unknownName: 'άγνωστο',
            change: 'Ακύρωση',
            back: 'Πίσω',
            done: 'Προσθήκη',
            unknown: {
              title: 'Φόρτωση... Παρακαλούμε περιμένετε για προεπισκόπηση.',
              done: 'Παράλειψη επισκόπησης και αποδοχή'
            },
            regular: {
              title: 'Να προστεθεί αυτό το αρχείο;',
              line1: 'Πρόκειται να προσθέσετε το παραπάνω αρχείο.',
              line2: 'Παρακαλούμε επιβεβαιώστε.'
            },
            image: {
              title: 'Να προστεθεί αυτή η εικόνα;',
              change: 'Ακύρωση'
            },
            crop: {
              title: 'Περικοπή και προσθήκη αυτής της εικόνας',
              done: 'Εντάξει',
              free: 'δωρεάν'
            },
            video: {
              title: 'Να προστεθεί αυτό το βίντεο;',
              change: 'Ακύρωση'
            },
            error: {
              "default": {
                title: 'Ουπς!',
                back: 'Παρακαλούμε προσπαθήστε ξανά',
                text: 'Κάτι πήγε στραβά κατά τη φόρτωση.'
              },
              image: {
                title: 'Μόνο αρχεία εικόνων γίνονται δεκτά.',
                text: 'Δοκιμάστε ξανά με άλλο αρχείο.',
                back: 'Επιλέξτε εικόνα'
              },
              size: {
                title: 'Το αρχείο που επιλέξατε υπερβαίνει το όριο.',
                text: 'Δοκιμάστε ξανά με άλλο αρχείο.'
              },
              loadImage: {
                title: 'Σφάλμα',
                text: 'Δεν μπορεί να φορτωθεί η εικόνα'
              }
            },
            multiple: {
              title: 'Έχετε επιλέξει %files%',
              question: 'Προσθήκη %files%;',
              tooManyFiles: 'Έχετε επιλέξει πάρα πολλά αρχεία. Το μέγιστο είναι %max%.',
              tooFewFiles: 'Έχετε επιλέξει %files%. Απαιτούνται τουλάχιστον %min%.',
              clear: 'Κατάργηση όλων',
              file: {
                preview: 'Προεπισκόπηση %file%',
                remove: 'Αφαίρεση %file%'
              },
              done: 'Προσθήκη'
            }
          }
        },
        footer: {
          text: 'παρέχεται από',
          link: 'uploadcare'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.el = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.es = {
      uploading: 'Subiendo... Por favor espere.',
      loadingInfo: 'Cargando información...',
      errors: {
        "default": 'Error',
        baddata: 'Valor incorrecto',
        size: 'Archivo demasiado grande',
        upload: 'No se puede subir',
        user: 'Subida cancelada',
        info: 'No se puede cargar la información',
        image: 'Solo se permiten imágenes',
        createGroup: 'No se puede crear el grupo de archivos',
        deleted: 'El archivo fue eliminado'
      },
      draghere: 'Arrastra un archivo aquí',
      file: {
        one: '%1 archivo',
        other: '%1 archivos'
      },
      buttons: {
        cancel: 'Cancelar',
        remove: 'Eliminar',
        choose: {
          files: {
            one: 'Escoge un archivo',
            other: 'Escoge archivos'
          },
          images: {
            one: 'Escoge una imagen',
            other: 'Escoge imágenes'
          }
        }
      },
      dialog: {
        close: 'Cerrar',
        openMenu: 'Menú abierto',
        done: 'Hecho',
        showFiles: 'Mostrar archivos',
        tabs: {
          names: {
            'empty-pubkey': 'Bienvenido',
            preview: 'Previsualización',
            file: 'Archivos locales',
            url: 'Enlaces arbitrarios',
            camera: 'Cámara'
          },
          file: {
            drag: 'Arrastra un archivo aquí',
            nodrop: 'Sube fotos desde tu ordenador',
            cloudsTip: 'Almacenamiento en la nube<br>y redes sociales',
            or: 'o',
            button: 'Elige un archivo de tu ordenador',
            also: 'Tambien puedes seleccionarlo de'
          },
          url: {
            title: 'Archivos de la Web',
            line1: 'Coge cualquier archivo de la web.',
            line2: 'Solo danos el link.',
            input: 'Pega tu link aquí...',
            button: 'Subir'
          },
          camera: {
            title: 'Archivo desde la cámara web',
            capture: 'Hacer una foto',
            mirror: 'Espejo',
            startRecord: 'Grabar un video',
            stopRecord: 'Detener',
            cancelRecord: 'Cancelar',
            retry: 'Solicitar permisos de nuevo',
            pleaseAllow: {
              title: 'Por favor, permite el acceso a tu cámara',
              text: 'Este sitio ha pedido permiso para acceder a la cámara. ' + 'Para tomar imágenes con tu cámara debes aceptar esta petición.'
            },
            notFound: {
              title: 'No se ha detectado ninguna cámara',
              text: 'Parece que no tienes ninguna cámara conectada a este dispositivo.'
            }
          },
          preview: {
            unknownName: 'desconocido',
            change: 'Cancelar',
            back: 'Atrás',
            done: 'Añadir',
            unknown: {
              title: 'Subiendo. Por favor espera para una vista previa.',
              done: 'Saltar vista previa y aceptar'
            },
            regular: {
              title: '¿Quieres subir este archivo?',
              line1: 'Estás a punto de subir el archivo de arriba.',
              line2: 'Confírmalo por favor.'
            },
            image: {
              title: '¿Quieres subir esta imagen?',
              change: 'Cancelar'
            },
            crop: {
              title: 'Cortar y añadir esta imagen',
              done: 'Listo',
              free: 'libre'
            },
            video: {
              title: '¿Añadir este video?',
              change: 'Cancelar'
            },
            error: {
              "default": {
                title: 'Ups!',
                text: 'Algo salió mal durante la subida.',
                back: 'Por favor, inténtalo de nuevo.'
              },
              image: {
                title: 'Solo se aceptan archivos de imagen.',
                text: 'Por favor, inténtalo de nuevo con otro archivo.',
                back: 'Escoger imagen'
              },
              size: {
                title: 'El archivo que has seleccinado excede el límite.',
                text: 'Por favor, inténtalo de nuevo con otro archivo.'
              },
              loadImage: {
                title: 'Error',
                text: 'No puede cargar la imagen'
              }
            },
            multiple: {
              title: 'Has escogido %files%',
              question: '¿Quieres añadir todos estos archivos?',
              tooManyFiles: 'Has escogido demasiados archivos. %max% es el máximo.',
              tooFewFiles: 'Has escogido %files%. Hacen falta al menos %min%.',
              clear: 'Eliminar todo',
              done: 'Hecho',
              file: {
                preview: 'Vista previa %file%',
                remove: 'Quitar %file%'
              }
            }
          }
        },
        footer: {
          text: 'alimentado por'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.es = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.et = {
      uploading: 'Üleslaadimine… Palun oota.',
      loadingInfo: 'Info laadimine...',
      errors: {
        "default": 'Viga',
        baddata: 'Incorrect value',
        size: 'Fail on liiga suur',
        upload: 'Ei saa üles laadida',
        user: 'Üleslaadimine tühistatud',
        info: 'Ei saa infot laadida',
        image: 'Ainult pildid lubatud',
        createGroup: 'Ei saa luua failigruppi',
        deleted: 'Fail on kustutatud'
      },
      draghere: 'Tiri fail siia',
      file: {
        one: '%1 fail',
        other: '%1 failid'
      },
      buttons: {
        cancel: 'Tühista',
        remove: 'Kustuta',
        choose: {
          files: {
            one: 'Vali fail',
            other: 'Vali failid'
          },
          images: {
            one: 'Vali pilt',
            other: 'Vali pildid'
          }
        }
      },
      dialog: {
        done: 'Valmis',
        showFiles: 'Näita faile',
        tabs: {
          names: {
            'empty-pubkey': 'Tere',
            preview: 'Eelvaade',
            file: 'Failid Kõvakettalt',
            url: 'Veebilink',
            camera: 'Kaamera'
          },
          file: {
            drag: 'Tiri failid siia',
            nodrop: 'Lae failid arvutist',
            cloudsTip: 'Pilv<br>ja sotsiaalmeedia',
            or: 'või',
            button: 'Vali fail kõvakettalt',
            also: 'Saad samuti valida'
          },
          url: {
            title: 'Failid veebist',
            line1: 'Ükskõik mis fail otse veebist.',
            line2: 'Lihtsalt sisesta URL.',
            input: 'Kleebi link siia...',
            button: 'Lae üles'
          },
          camera: {
            capture: 'Take a photo',
            mirror: 'Mirror',
            startRecord: 'Record a video',
            stopRecord: 'Stop',
            cancelRecord: 'Cancel',
            retry: 'Request permissions again',
            pleaseAllow: {
              title: 'Please allow access to your camera',
              text: 'You have been prompted to allow camera access from this site. ' + 'In order to take pictures with your camera you must approve this request.'
            },
            notFound: {
              title: 'No camera detected',
              text: 'Looks like you have no camera connected to this device.'
            }
          },
          preview: {
            unknownName: 'teadmata',
            change: 'Tühista',
            back: 'Tagasi',
            done: 'Lisa',
            unknown: {
              title: 'Üleslaadimine... Palun oota eelvaadet.',
              done: 'Jäta eelvaade vahele ja nõustu'
            },
            regular: {
              title: 'Lisa see fail?',
              line1: 'Oled lisamas ülaltoodud faili.',
              line2: 'Palun kinnita.'
            },
            image: {
              title: 'Lisa pilt?',
              change: 'Tühista'
            },
            crop: {
              title: 'Lõika ja lisa pilt',
              done: 'Valmis',
              free: 'vaba'
            },
            video: {
              title: 'Lisa video?',
              change: 'Tühista'
            },
            error: {
              "default": {
                title: 'Oihh!',
                text: 'Midagi läks üleslaadimisel valesti.',
                back: 'Palun proovi uuesti'
              },
              image: {
                title: 'Ainult pildifailid on lubatud.',
                text: 'Palun proovi uuesti teise failiga.',
                back: 'Vali pilt'
              },
              size: {
                title: 'Valitud fail ületab maksimaalse suuruse.',
                text: 'Palun proovi uuesti teise failiga.'
              },
              loadImage: {
                title: 'Viga',
                text: 'Ei saa pilti laadida'
              }
            },
            multiple: {
              title: 'Oled valinud %files%',
              question: 'Kas sa soovid lisada kõik failid?',
              tooManyFiles: 'Oled valinud liiga suure hulga faile. %max% on maksimaalne.',
              tooFewFiles: 'Oled valinud %files%. Vähemalt %min% nõutud.',
              clear: 'Eemalda kõik',
              done: 'Valmis'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.et = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.fr = {
      uploading: 'Envoi en cours... Merci de patienter.',
      loadingInfo: 'Chargement des informations...',
      errors: {
        "default": 'Erreur',
        baddata: 'Valeur incorrecte',
        size: 'Fichier trop volumineux',
        upload: 'Envoi impossible',
        user: 'Envoi annulé',
        info: 'Impossible de charger les informations',
        image: 'Seules les images sont autorisées',
        createGroup: 'Création d\'1 groupe impossible',
        deleted: 'Le fichier a été supprimé'
      },
      draghere: 'Glissez-déposez un fichier ici',
      file: {
        one: '%1 fichier',
        other: '%1 fichiers'
      },
      buttons: {
        cancel: 'Annuler',
        remove: 'Supprimer',
        choose: {
          files: {
            one: 'Sélectionner un fichier',
            other: 'Sélectionner des fichiers'
          },
          images: {
            one: 'Sélectionner une image',
            other: 'Sélectionner des images'
          }
        }
      },
      dialog: {
        close: 'Fermer',
        openMenu: 'Ouvrir le menu',
        done: 'Terminer',
        showFiles: 'Voir les fichiers',
        tabs: {
          names: {
            'empty-pubkey': 'Bienvenue',
            preview: 'Avant-première',
            file: 'Fichier en local',
            url: 'Une adresse web',
            camera: 'Caméra',
            facebook: 'Facebook',
            dropbox: 'Dropbox',
            gdrive: 'Google Drive',
            gphotos: 'Google Photos',
            instagram: 'Instagram',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'Glissez-déposez un fichier ici',
            nodrop: 'Envoyez des fichiers depuis votre ordinateur',
            cloudsTip: 'Stockage sur le cloud<br>et réseaux sociaux',
            or: 'ou',
            button: 'Choisir un fichier local',
            also: 'Vous pouvez également le sélectionner depuis'
          },
          url: {
            title: 'Fichiers depuis le Web',
            line1: 'Prenez n\'importe quel fichier depuis un site web.',
            line2: 'Saisissez simplement son adresse.',
            input: 'Collez le lien ici...',
            button: 'Envoi'
          },
          camera: {
            title: 'Fichier depuis la caméra',
            capture: 'Prendre une photo',
            mirror: 'Miroir',
            startRecord: 'Enregistrer une vidéo',
            stopRecord: 'Arrêter',
            cancelRecord: 'Annuler',
            retry: 'Envoyer une nouvelle demande de permission',
            pleaseAllow: {
              title: 'Autorisez l\'accès à votre appareil photo',
              text: 'Vous avez été invité à autoriser l\'accès à votre appareil photo. Pour prendre des photos avec votre caméra vous devez approuver cette demande.'
            },
            notFound: {
              title: 'Aucun appareil photo détecté',
              text: 'Il semblerait que vous n\'ayez pas d\'appareil photo connecté à cet appareil.'
            }
          },
          preview: {
            unknownName: 'inconnu',
            change: 'Annuler',
            back: 'Retour',
            done: 'Ajouter',
            unknown: {
              title: 'Envoi en cours... Merci de patienter pour prévisualiser.',
              done: 'Passer la prévisualisation et accepter'
            },
            regular: {
              title: 'Ajouter ce fichier ?',
              line1: 'Vous êtes sur le point d\'ajouter le fichier ci-dessus.',
              line2: 'Merci de confirmer.'
            },
            image: {
              title: 'Ajouter cette image ?',
              change: 'Annuler'
            },
            crop: {
              title: 'Recadrer et ajouter cette image',
              done: 'Terminer',
              free: 'libre'
            },
            video: {
              title: 'Ajouter cette vidéo ?',
              change: 'Annuler'
            },
            error: {
              "default": {
                title: 'Oups!',
                text: 'Quelque chose n\'a pas fonctionné pendant l\'envoi.',
                back: 'Merci de bien vouloir recommencer'
              },
              image: {
                title: 'Seules les images sont acceptées.',
                text: 'Merci de bien vouloir recommencer avec un autre fichier.',
                back: 'Choisir une image'
              },
              size: {
                title: 'Le fichier sélectionné est trop volumineux.',
                text: 'Merci de bien vouloir recommencer avec un autre fichier.'
              },
              loadImage: {
                title: 'Erreur',
                text: 'Impossible de charger l\'image'
              }
            },
            multiple: {
              title: 'Vous avez choisi %files%',
              question: 'Voulez vous ajouter tous ces fichiers ?',
              tooManyFiles: 'Vous avez choisi trop de fichiers. %max% est le maximum.',
              tooFewFiles: 'Vous avez choisi %fichiers%. %min% est le minimum.',
              clear: 'Tout retirer',
              done: 'Terminer',
              file: {
                preview: 'Prévisualiser %file%',
                remove: 'Supprimer %file%'
              }
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.fr = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.he = {
      uploading: 'טוען... אנא המתן.',
      loadingInfo: 'טוען מידע...',
      errors: {
        "default": 'שגיאה',
        baddata: 'ערך שגוי',
        size: 'קובץ גדול מידי',
        upload: 'לא ניתן להעלות',
        user: 'העלאה בוטלה',
        info: 'לא ניתן לטעון מידע',
        image: 'ניתן להעלות רק תמונות',
        createGroup: 'לא ניתן ליצור קבוצה',
        deleted: 'הקובץ נמחק'
      },
      draghere: 'שחרר כאן קובץ',
      file: {
        one: 'קובץ %1',
        other: '%1 קבצים'
      },
      buttons: {
        cancel: 'ביטול',
        remove: 'הסר',
        choose: {
          files: {
            one: 'בחר קובץ',
            other: 'בחר קבצים'
          },
          images: {
            one: 'בחר תמונה',
            other: 'בחר תמונות'
          }
        }
      },
      dialog: {
        done: 'סיום',
        showFiles: 'הצג קבצים',
        tabs: {
          names: {
            facebook: 'פייסבוק',
            dropbox: 'דרופבוקס',
            gdrive: 'כונן גוגל',
            instagram: 'אינסטגרם',
            url: 'לינק מהאינטרנט'
          },
          file: {
            drag: 'שחרר כאן קובץ',
            nodrop: 'העלה קבצים מהמחשב',
            or: 'או',
            button: 'בחר קובץ מהמחשב',
            also: 'ניתן לבחור גם מ'
          },
          url: {
            title: 'קובץ מהאינטרנט',
            line1: 'גרור קובץ מהאינטרנט',
            line2: 'ספק את כתובת הקובץ',
            input: 'הדבק את כתובת הקובץ...',
            button: 'העלה'
          },
          preview: {
            unknownName: 'לא ידוע',
            change: 'ביטול',
            back: 'חזרה',
            done: 'הוסף',
            unknown: {
              title: 'מעלה... נא המתן לתצוגה מקדימה.',
              done: 'דלג על תצוגה מקדימה'
            },
            regular: {
              title: 'להוסיף קובץ זה?',
              line1: 'קובץ זה יועלה',
              line2: 'נא אשר.'
            },
            image: {
              title: 'להוסיף תמונה זו?',
              change: 'ביטול'
            },
            crop: {
              title: 'חתוך והוסף תמונה זו',
              done: 'סיום'
            },
            error: {
              "default": {
                title: 'אופס!',
                text: 'משהו השתבש בזמן ההעלאה.',
                back: 'נא נסה שוב'
              },
              image: {
                title: 'ניתן לקבל רק קבצי תמונות.',
                text: 'נא נסה שוב עם קובץ אחר.',
                back: 'בחר תמונה'
              },
              size: {
                title: 'הקובץ שבחרת חורג מהגבול.',
                text: 'נא נסה שוב עם קובץ אחר.'
              },
              loadImage: {
                title: 'שגיאה',
                text: 'טעינת התמונה נכשלה'
              }
            },
            multiple: {
              title: 'בחרת %files%',
              question: 'אתה מעוניין להוסיף את כל הקבצים האלו?',
              tooManyFiles: 'בחרת יותר מידי קבצים. יש לבחור מקסימום %max% קבצים.',
              tooFewFiles: 'בחרת %files%. יש לבחור לפחות %min%.',
              clear: 'הסר הכל',
              done: 'סיום'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.he = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.it = {
      uploading: 'Caricamento in corso... Si prega di attendere.',
      loadingInfo: 'Caricamento informazioni in corso...',
      errors: {
        "default": 'Errore',
        baddata: 'Valore errato',
        size: 'Il file è troppo grande',
        upload: 'Impossibile fare l’upload',
        user: 'Upload cancellato',
        info: 'Impossibile caricare le informazioni',
        image: 'Sono ammesse solo immagini',
        createGroup: 'Impossibile creare gruppo di file',
        deleted: 'Il file è stato eliminato'
      },
      draghere: 'Trascina un file qui',
      file: {
        one: 'file %1',
        other: 'file %1'
      },
      buttons: {
        cancel: 'Cancella',
        remove: 'Rimuovi',
        choose: {
          files: {
            one: 'Seleziona un file',
            other: 'Seleziona file'
          },
          images: {
            one: 'Seleziona un’immagine',
            other: 'Seleziona immagini'
          }
        }
      },
      dialog: {
        done: 'Fatto',
        showFiles: 'Mostra file',
        tabs: {
          names: {
            'empty-pubkey': 'Benvenuto',
            preview: 'Anteprima',
            file: 'File locali',
            url: 'Link arbitrari',
            camera: 'Fotocamera'
          },
          file: {
            drag: 'Trascina un file qui',
            nodrop: 'Carica file dal tuo computer',
            cloudsTip: 'Salvataggi nel cloud<br>e servizi sociali',
            or: 'o',
            button: 'Seleziona un file locale',
            also: 'Puoi anche scegliere da'
          },
          url: {
            title: 'File dal web',
            line1: 'Preleva un file dal web.',
            line2: 'È sufficiente fornire il link.',
            input: 'Incolla il tuo link qui...',
            button: 'Carica'
          },
          camera: {
            capture: 'Scatta una foto',
            mirror: 'Specchio',
            retry: 'Richiedi di nuovo le autorizzazioni',
            pleaseAllow: {
              title: 'Consenti l’accesso alla tua fotocamera',
              text: 'Ti è stato richiesto di consentire l’accesso alla fotocamera da questo sito. Per scattare le foto con la tua fotocamera devi accettare questa richiesta.'
            },
            notFound: {
              title: 'Nessuna fotocamera rilevata',
              text: 'Non risulta che tu non abbia una fotocamera collegata a questo dispositivo.'
            }
          },
          preview: {
            unknownName: 'sconosciuto',
            change: 'Cancella',
            back: 'Indietro',
            done: 'Aggiungi',
            unknown: {
              title: 'Caricamento in corso... Attendi l’anteprima.',
              done: 'Salta l’anteprima e accetta'
            },
            regular: {
              title: 'Vuoi aggiungere questo file?',
              line1: 'Stai per aggiungere il file sopra.',
              line2: 'Conferma.'
            },
            image: {
              title: 'Vuoi aggiungere questa immagine?',
              change: 'Cancella'
            },
            crop: {
              title: 'Ritaglia e aggiungi questa immagine',
              done: 'Fatto',
              free: 'gratis'
            },
            error: {
              "default": {
                title: 'Ops!',
                text: 'Si è verificato un problema durante l’upload.',
                back: 'Si prega di riprovare'
              },
              image: {
                title: 'Sono accettati solo file immagine.',
                text: 'Riprova con un altro file.',
                back: 'Scegli immagine'
              },
              size: {
                title: 'Il file selezionato supera il limite.',
                text: 'Riprova con un altro file.'
              },
              loadImage: {
                title: 'Errore',
                text: 'Impossibile caricare l’immagine'
              }
            },
            multiple: {
              title: 'Hai selezionato %files%',
              question: 'Vuoi aggiungere tutti questi file?',
              tooManyFiles: 'Hai selezionato troppi file. %max% è il massimo.',
              tooFewFiles: 'Hai selezionato %files%. È richiesto almeno %min%.',
              clear: 'Rimuovi tutto',
              done: 'Fatto'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.it = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.ja = {
      uploading: 'アップロードしています… 完了までお待ち下さい。',
      loadingInfo: '読み込み中…',
      errors: {
        "default": 'エラー',
        baddata: '間違った値',
        size: 'ファイルが大きすぎます',
        upload: 'アップロードできませんでした',
        user: 'アップロードがキャンセルされました',
        info: '読み込みに失敗しました',
        image: 'アップロードできるのは画像ファイルのみです',
        createGroup: 'グループの作成に失敗しました',
        deleted: '削除されたファイルです'
      },
      draghere: 'ここにファイルをドロップ',
      file: {
        other: '%1ファイル'
      },
      buttons: {
        cancel: 'キャンセル',
        remove: '削除',
        choose: {
          files: {
            one: 'ファイルを選択',
            other: 'ファイルを選択'
          },
          images: {
            one: '画像を選択',
            other: '画像を選択'
          }
        }
      },
      dialog: {
        done: '完了',
        showFiles: 'ファイルを表示',
        tabs: {
          names: {
            preview: 'プレビュー',
            file: 'ローカルファイル',
            url: 'URLを直接入力'
          },
          file: {
            drag: 'ここにファイルをドロップ',
            nodrop: 'ファイルを選択してアップロード',
            cloudsTip: 'クラウドストレージ<br>およびソーシャルサービス',
            or: 'もしくは',
            button: 'ローカルのファイルを選択',
            also: '次からも選択可能です：'
          },
          url: {
            title: 'ウェブ上のファイル',
            line1: 'ウェブ上からファイルを取得します。',
            line2: 'URLを入力してください。',
            input: 'ここにURLを貼り付けしてください…',
            button: 'アップロード'
          },
          preview: {
            unknownName: '不明なファイル',
            change: 'キャンセル',
            back: '戻る',
            done: '追加',
            unknown: {
              title: 'アップロードしています… プレビューの表示をお待ちください。',
              done: 'プレビューの確認をスキップして完了'
            },
            regular: {
              title: 'このファイルを追加しますか？',
              line1: 'こちらのファイルを追加しようとしています。',
              line2: '確認してください。'
            },
            image: {
              title: 'この画像を追加しますか？',
              change: 'キャンセル'
            },
            crop: {
              title: '画像の切り取りと追加',
              done: '完了',
              free: 'リセット'
            },
            error: {
              "default": {
                title: '失敗しました',
                text: 'アップロード中に不明なエラーが発生しました。',
                back: 'もう一度お試し下さい'
              },
              image: {
                title: '画像ファイルのみ許可されています',
                text: '他のファイルで再度お試し下さい。',
                back: '画像を選択'
              },
              size: {
                title: 'ファイルサイズが大きすぎます。',
                text: '他のファイルで再度お試し下さい。'
              },
              loadImage: {
                title: 'エラー',
                text: '画像のロードに失敗しました。'
              }
            },
            multiple: {
              title: '%files%つのファイルを選択中',
              question: 'これら全てのファイルを追加しますか？',
              tooManyFiles: '選択ファイルが多すぎます。%max%つ以下にしてください。',
              tooFewFiles: '選択ファイルが少なすぎます。%files%つ選択中です。少なくとも%min%つ選択してください。',
              clear: '全て削除',
              done: '完了'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.ja = function(n) {
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.ko = {
      uploading: '업로드중 기다려주세요',
      loadingInfo: '정보 로드중...',
      errors: {
        "default": '오류',
        baddata: '잘못된 값',
        size: '파일용량 초과',
        upload: '업로드 실패',
        user: '업로드 취소됨',
        info: '정보를 불러올 수 없습니다',
        image: '허용된 이미지만 가능',
        createGroup: '파일 그룹 만들기 실패',
        deleted: '파일이 삭제되었습니다'
      },
      draghere: '여기에 끌어다 놓기',
      file: {
        one: '%1 파일',
        other: '%1 파일'
      },
      buttons: {
        cancel: '취소',
        remove: '삭제',
        choose: {
          files: {
            one: '파일 첨부',
            other: '파일 첨부'
          },
          images: {
            one: '이미지 첨부',
            other: '이미지 첨부'
          }
        }
      },
      dialog: {
        close: '닫기',
        openMenu: '메뉴 열기',
        done: '완료',
        showFiles: '파일 표시',
        tabs: {
          names: {
            'empty-pubkey': '반갑습니다',
            preview: '미리보기',
            file: '파일 첨부',
            url: '링크 연결',
            camera: '카메라',
            facebook: '페이스북',
            dropbox: '드롭박스',
            gdrive: '구글 드라이브',
            gphotos: '구글 포토',
            instagram: '인스타그램',
            evernote: '에버노트',
            box: '박스',
            onedrive: '스카이드라이브',
            flickr: '플리커'
          },
          file: {
            drag: '모든 파일을<br>드래그 & 드롭',
            nodrop: '파일 업로드',
            cloudsTip: '클라우드 스토리지 및 소셜',
            or: '또는',
            button: '파일 선택',
            also: '또는 선택하십시오'
          },
          url: {
            title: '웹에서 파일 링크 연결',
            line1: '웹에서 모든파일을 가져옵니다',
            line2: '링크만 연결합니다.',
            input: '링크 붙여 넣기...',
            button: '업로드'
          },
          camera: {
            title: '카메라 연결',
            capture: '사진 찍기',
            mirror: '거울',
            startRecord: '비디오 녹화',
            stopRecord: '정지',
            cancelRecord: '취소',
            retry: '재 시도',
            pleaseAllow: {
              title: '카메라 접근 허용',
              text: '카메라 접근을 허용하시겠습니까?<br>' + '승인 요청을 해주셔야 합니다'
            },
            notFound: {
              title: '카메라가 없습니다',
              text: '이 기기에 연결된 카메라가 없습니다'
            }
          },
          preview: {
            unknownName: '알수없음',
            change: '취소',
            back: '뒤로',
            done: '추가',
            unknown: {
              title: '업로드중, 기다려주세요',
              done: '미리보기 건너뛰기'
            },
            regular: {
              title: '이 파일을 추가하시겠습니까?',
              line1: '위 파일을 추가하려고 합니다',
              line2: '확인 하십시오'
            },
            image: {
              title: '이미지를 추가하시겠습니까?',
              change: '취소'
            },
            crop: {
              title: '이미지 자르기 및 추가',
              done: '완료',
              free: '무료'
            },
            video: {
              title: '비디오를 추가하시겠습니까?',
              change: '취소'
            },
            error: {
              "default": {
                title: '죄송합니다',
                text: '업로드에 문제가 있습니다',
                back: '다시 시도해 주세요'
              },
              image: {
                title: '이미지 파일만 허용됩니다',
                text: '다른 파일로 다시 시도하세요',
                back: '이미지 선택'
              },
              size: {
                title: '선택한 파일이 한도 초과하였습니다',
                text: '다른 파일로 다시 시도하세요'
              },
              loadImage: {
                title: '오류',
                text: '이미지를 불러올 수 없습니다'
              }
            },
            multiple: {
              title: '%files%을(를) 선택하였습니다',
              question: '%files%을 추가하시겠습니까?',
              tooManyFiles: '너무 많은 파일을 추가하셨습니다. %max%가 최대 한도입니다',
              tooFewFiles: '%files%을(를) 선택하였습니다 최소 %min%이상 필요합니다',
              clear: '모두 삭제',
              done: '추가',
              file: {
                preview: '%file% 미리보기',
                remove: '%file% 삭제'
              }
            }
          }
        },
        footer: {
          text: 'powered by',
          link: 'uploadcare'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.ko = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.lv = {
      uploading: 'Augšupielādē... Lūdzu, gaidiet.',
      errors: {
        "default": 'Kļūda',
        image: 'Atļauti tikai attēli'
      },
      draghere: 'Velciet failus šeit',
      file: {
        zero: '%1 failu',
        one: '%1 fails',
        other: '%1 faili'
      },
      buttons: {
        cancel: 'Atcelt',
        remove: 'Dzēst'
      },
      dialog: {
        title: 'Ielādēt jebko no jebkurienes',
        poweredby: 'Darbināts ar',
        support: {
          images: 'Attēli',
          audio: 'Audio',
          video: 'Video',
          documents: 'Dokumenti'
        },
        tabs: {
          file: {
            title: 'Mans dators',
            line1: 'Paņemiet jebkuru failu no jūsu datora.',
            line2: 'Izvēlēties ar dialogu vai ievelciet iekšā.',
            button: 'Meklēt failus'
          },
          url: {
            title: 'Faili no tīmekļa',
            line1: 'Paņemiet jebkuru failu no tīmekļa.',
            line2: 'Tikai uzrādiet linku.',
            input: 'Ielīmējiet linku šeit...',
            button: 'Ielādēt'
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.lv = function(n) {
      if (n === 0) {
        return 'zero';
      }
      if ((n % 10 === 1) && (n % 100 !== 11)) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.nb = {
      uploading: 'Laster opp... Vennligst vent.',
      loadingInfo: 'Laster inn info...',
      errors: {
        "default": 'Feil',
        baddata: 'Ugyldig verdi',
        size: 'Filen er for stor',
        upload: 'Kan ikke laste opp',
        user: 'Opplasting avbrutt',
        info: 'Kan ikke laste inn info',
        image: 'Kun bilder er tillatt',
        createGroup: 'Kan ikke opprette filgruppe',
        deleted: 'Filen er slettet'
      },
      draghere: 'Dra en fil hit',
      file: {
        one: '%1 fil',
        other: '%1 filer'
      },
      buttons: {
        cancel: 'Avbryt',
        remove: 'Fjern',
        choose: {
          files: {
            one: 'Velg en fil',
            other: 'Velg filer'
          },
          images: {
            one: 'Velg et bilde',
            other: 'Velg bilder'
          }
        }
      },
      dialog: {
        done: 'Ferdig',
        showFiles: 'Vis filer',
        tabs: {
          names: {
            preview: 'Forhåndsvising',
            file: 'Lokale filer',
            url: 'Direktelink'
          },
          file: {
            drag: 'Dra og slipp en fil her',
            nodrop: 'Last opp filer fra datamaskinen',
            cloudsTip: 'Skylagring<br>og sosiale tjenester',
            or: 'eller',
            button: 'Velg en lokal fil',
            also: 'Du kan også velge det fra'
          },
          url: {
            title: 'Filer fra internett',
            line1: 'Velg hvilken som helst fil fra internett.',
            line2: 'Bare gi oss linken.',
            input: 'Lim inn linken her...',
            button: 'Last opp'
          },
          preview: {
            unknownName: 'ukjent',
            change: 'Avbryt',
            back: 'Tilbake',
            done: 'Legg til',
            unknown: {
              title: 'Laster opp... Vennligst vent på forhåndsvisning.',
              done: 'Hopp over forhåndsvisning og godkjenn'
            },
            regular: {
              title: 'Legge til denne filen?',
              line1: 'Filen legges nå til.',
              line2: 'Vennligst bekreft.'
            },
            image: {
              title: 'Legge til dette bildet?',
              change: 'Avbryt'
            },
            crop: {
              title: 'Kutt og legg til dette bildet',
              done: 'Ferdig',
              free: 'frigjør'
            },
            error: {
              "default": {
                title: 'Ops!',
                text: 'Noe gikk galt under opplastingen.',
                back: 'Vennligst prøv igjen'
              },
              image: {
                title: 'Kun bilder er akseptert.',
                text: 'Prøv igjen med en annen fil.',
                back: 'Velg bilde'
              },
              size: {
                title: 'Den valgte filen overskrider tilatt størrelse.',
                text: 'Vennligst prøv igjen med en annen fil.'
              },
              loadImage: {
                title: 'Feil',
                text: 'Kan ikke laste bildet'
              }
            },
            multiple: {
              title: 'Du har valgt %files%',
              question: 'Ønsker du å legge til alle filene?',
              tooManyFiles: 'Du har valgt for mange filer. %max% er maksimum.',
              tooFewFiles: 'Du har valgt %files%. Minimum %min% er påkrevd.',
              clear: 'Fjern alle',
              done: 'Ferdig'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.nb = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.nl = {
      uploading: 'Uploaden... Even geduld.',
      loadingInfo: 'Laden informatie...',
      errors: {
        "default": 'Fout',
        baddata: 'Ongeldige waarde',
        size: 'Bestand is te groot',
        upload: 'Kan niet uploaden',
        user: 'Upload geannuleerd',
        info: 'Kan informatie niet laden',
        image: 'Alleen afbeeldingen toegestaan',
        createGroup: 'Kan bestandsgroep niet maken',
        deleted: 'Bestand is verwijderd'
      },
      draghere: 'Drop hier een bestand',
      file: {
        one: '%1 bestand',
        other: '%1 bestanden'
      },
      buttons: {
        cancel: 'Annuleren',
        remove: 'Verwijderen',
        choose: {
          files: {
            one: 'Kies een bestand',
            other: 'Kies bestanden'
          },
          images: {
            one: 'Kies een afbeelding',
            other: 'Kies afbeeldingen'
          }
        }
      },
      dialog: {
        done: 'Klaar',
        showFiles: 'Toon bestanden',
        tabs: {
          names: {
            preview: 'Voorvertoning',
            file: 'Computer',
            url: 'Directe links'
          },
          file: {
            drag: 'Drop hier een bestand',
            nodrop: 'Upload bestanden van je computer',
            or: 'of',
            button: 'Selecteer een bestand op je computer',
            also: 'Je kan ook selecteren van'
          },
          url: {
            title: 'Bestanden op het web',
            line1: 'Selecteer een bestand op het web.',
            line2: 'Voer de link in.',
            input: 'Plak de link hier...',
            button: 'Upload'
          },
          preview: {
            unknownName: 'onbekend',
            change: 'Annuleren',
            back: 'Terug',
            done: 'Toevoegen',
            unknown: {
              title: 'Uploaden... Wacht op de voorvertoning.',
              done: 'Voorvertoning overslaan an accepteren'
            },
            regular: {
              title: 'Dit bestand toevoegen?',
              line1: 'Je staat op het punt bovenstaand bestand toe te voegen.',
              line2: 'Bevestig'
            },
            image: {
              title: 'Voeg deze afbeelding toe?',
              change: 'Annuleren'
            },
            crop: {
              title: 'Afbeelding bijknippen en toevoegen',
              done: 'Klaar'
            },
            error: {
              "default": {
                title: 'Oeps!',
                text: 'Er is een fout opgetreden tijdens het uploaden.',
                back: 'Probeer opnieuw'
              },
              image: {
                title: 'Alleen afbeeldingen worden geaccepteerd.',
                text: 'Probeer opnieuw met een andere bestand.',
                back: 'Selecteer afbeelding'
              },
              size: {
                title: 'Het geselecteerd bestand is groter dan de limiet.',
                text: 'Probeer opnieuw met een andere bestand.'
              },
              loadImage: {
                title: 'Fout',
                text: 'Kan afbeelding niet laden'
              }
            },
            multiple: {
              title: 'Je hebt de volgende bestanden geselecteerd %files%',
              question: 'Wil je al deze bestanden toevoegen?',
              tooManyFiles: 'Je hebt teveel bestanden geselecteerd. %max% is het maximum.',
              tooFewFiles: 'Je hebt de volgende bestanden geselecteerd %files%. Minimaal %min% is verplicht.',
              clear: 'Verwijder alle bestanden',
              done: 'Klaar'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.nl = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.pl = {
      uploading: 'Przesyłanie... Proszę czekać.',
      loadingInfo: 'Ładowanie...',
      errors: {
        "default": 'Błąd',
        baddata: 'Niepoprawna wartość',
        size: 'Plik zbyt duży',
        upload: 'Nie udało się przesłać',
        user: 'Przesyłanie anulowane',
        info: 'Nie udało się załadować informacji',
        image: 'Dozwolone są tylko obrazy',
        createGroup: 'Nie udało się utworzyć grupy plików',
        deleted: 'Plik został usunięty'
      },
      draghere: 'Upuść plik tutaj',
      file: {
        one: '%1 plik',
        few: '%1 pliki',
        many: '%1 plików'
      },
      buttons: {
        cancel: 'Anuluj',
        remove: 'Usuń',
        choose: {
          files: {
            one: 'Wybierz plik',
            other: 'Wybierz pliki'
          },
          images: {
            one: 'Wybierz obraz',
            other: 'Wybierz obrazy'
          }
        }
      },
      dialog: {
        close: 'Zamknij',
        openMenu: 'Otwórz menu',
        done: 'Wykonano',
        showFiles: 'Pokaż pliki',
        tabs: {
          names: {
            'empty-pubkey': 'Witaj',
            preview: 'Podgląd',
            file: 'Pliki lokalne',
            url: 'Plik z Sieci',
            camera: 'Aparat'
          },
          file: {
            drag: 'Upuść plik tutaj',
            nodrop: 'Prześlij pliki z Twojego komputera',
            cloudsTip: 'Dane w chmurze<br>i sieci społecznościowe',
            or: 'lub',
            button: 'Wybierz plik lokalny',
            also: 'Możesz również wybrać z'
          },
          url: {
            title: 'Pliki z Sieci',
            line1: 'Złap jakikolwiej plik z sieci.',
            line2: 'Podaj adres.',
            input: 'Wklej link...',
            button: 'Prześlij'
          },
          camera: {
            title: 'Plik z kamery internetowej',
            capture: 'Zrób zdjęcie',
            mirror: 'Odbicie lustrzane',
            startRecord: 'Nagraj film',
            stopRecord: 'Zakończ',
            cancelRecord: 'Anuluj',
            retry: 'Poproś ponownie o dostęp',
            pleaseAllow: {
              title: 'Prośba o udostępnienie aparatu',
              text: 'Zostałeś poproszony przez tę stronę o dostęp do aparatu. ' + 'Aby robić zdjecia, musisz zaakceptować tę prośbę.'
            },
            notFound: {
              title: 'Nie wykryto aparatu.',
              text: 'Wygląda na to, że nie masz podłączonego aparatu do tego urządzenia.'
            }
          },
          preview: {
            unknownName: 'nieznany',
            change: 'Anuluj',
            back: 'Wstecz',
            done: 'Dodaj',
            unknown: {
              title: 'Przesyłanie... Proszę czekać na podgląd.',
              done: 'Omiń podgląd i zaakceptuj.'
            },
            regular: {
              title: 'Dodać ten plik?',
              line1: 'Zamierzasz dodać nowy plik.',
              line2: 'Potwierdź, proszę.'
            },
            image: {
              title: 'Dodać ten obraz?',
              change: 'Anuluj'
            },
            crop: {
              title: 'Przytnij i dodaj ten obraz',
              done: 'Wykonano',
              free: 'wolny'
            },
            video: {
              title: 'Dodać ten film?',
              change: 'Anuluj'
            },
            error: {
              "default": {
                title: 'Oops!',
                text: 'Coś poszło nie tak podczas przesyłania.',
                back: 'Spróbuj ponownie'
              },
              image: {
                title: 'Akceptowane są tylko obrazy.',
                text: 'Spróbuj ponownie z innym plikiem.',
                back: 'Wybierz obraz'
              },
              size: {
                title: 'Plik, który wybrałeś, przekracza dopuszczalny rozmiar',
                text: 'Spróbuj ponownie z innym plikiem.'
              },
              loadImage: {
                title: 'Błąd',
                text: 'Nie udało się załadować obrazu'
              }
            },
            multiple: {
              title: 'Wybrałeś %files%',
              question: 'Czy chcesz dodać wszystkie te pliki?',
              tooManyFiles: 'Wybrałeś zbyt wiele plików. Maksimum to %max%.',
              tooFewFiles: 'Wybrałeś %files%. Wymagane jest co najmniej %min%.',
              clear: 'Usuń wszystkie',
              done: 'Wykonano',
              file: {
                preview: 'Zobacz %file%',
                remove: 'Usuń %file%'
              }
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.pl = function(n) {
      var _ref;
      if (n === 1) {
        return 'one';
      } else if (((2 <= (_ref = n % 10) && _ref <= 4)) && ((n / 10 % 10 | 0) !== 1)) {
        return 'few';
      } else {
        return 'many';
      }
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.pt = {
      uploading: 'Fazendo upload... Aguarde.',
      loadingInfo: 'Carregando informações...',
      errors: {
        "default": 'Erro',
        baddata: 'Valor incorreto',
        size: 'Arquivo muito grande',
        upload: 'Não foi possível fazer o upload',
        user: 'Upload cancelado',
        info: 'Não foi possível carregar as informações',
        image: 'Apenas imagens são permitidas',
        createGroup: 'Não foi possível criar o grupo de arquivos',
        deleted: 'O arquivo foi excluído'
      },
      draghere: 'Arraste um arquivo aqui',
      file: {
        one: '%1 arquivo',
        other: '%1 arquivos'
      },
      buttons: {
        cancel: 'Cancelar',
        remove: 'Excluir',
        choose: {
          files: {
            one: 'Escolha um arquivo',
            other: 'Escolha arquivos'
          },
          images: {
            one: 'Escolha uma imagem',
            other: 'Escolha imagens'
          }
        }
      },
      dialog: {
        done: 'OK',
        showFiles: 'Mostrar arquivos',
        tabs: {
          names: {
            preview: 'Pré-estréia',
            file: 'Computador',
            url: 'Link da web'
          },
          file: {
            drag: 'Arraste um arquivo aqui',
            nodrop: 'Faça upload de arquivos do seu computador',
            or: 'ou',
            button: 'Escolha um arquivo do computador',
            also: 'Você também pode escolher arquivos de'
          },
          url: {
            title: 'Arquivos da web',
            line1: 'Faça upload de qualquer arquivo da web.',
            line2: 'Apenas informe o link.',
            input: 'Cole seu link aqui...',
            button: 'Upload'
          },
          camera: {
            capture: 'Tirar uma foto',
            mirror: 'Espelhar',
            startRecord: 'Gravar um vídeo',
            stopRecord: 'Parar',
            cancelRecord: 'Cancelar',
            retry: 'Requisitar permissão novamente',
            pleaseAllow: {
              title: 'Por favor permita o acesso a sua câmera',
              text: 'Você foi solicitado a permitir o acesso à câmera a partir deste site. ' + 'Para tirar fotos com sua câmera, você deve aprovar este pedido.'
            },
            notFoud: {
              title: 'Câmera não detectada',
              text: 'Parece que você não tem uma câmera conectada a este dispositivo'
            }
          },
          preview: {
            unknownName: 'desconhecido',
            change: 'Cancelar',
            back: 'Voltar',
            done: 'Adicionar',
            unknown: {
              title: 'Fazendo upload... Aguarde a visualização.',
              done: 'Pular visualização e aceitar'
            },
            regular: {
              title: 'Adicionar esse arquivo?',
              line1: 'Você está prestes a adicionar o arquivo acima.',
              line2: 'Por favor, confirme.'
            },
            image: {
              title: 'Adicionar essa imagem?',
              change: 'Cancelar'
            },
            crop: {
              title: 'Cortar e adicionar essa imagem',
              done: 'OK',
              free: 'livre'
            },
            error: {
              "default": {
                title: 'Oops!',
                text: 'Alguma coisa deu errado durante o upload.',
                back: 'Por favor, tente novamente'
              },
              image: {
                title: 'Apenas arquivos de imagem são aceitos.',
                text: 'Por favor, tente novamente com outro arquivo.',
                back: 'Escolher a imagem'
              },
              size: {
                title: 'O arquivo que você escolheu excede o limite.',
                text: 'Por favor, tente novamente com outro arquivo.'
              },
              loadImage: {
                title: 'Erro',
                text: 'Não foi possível carregar a imagem'
              }
            },
            multiple: {
              title: 'Você escolheu',
              question: 'Você quer adicionar todos esses arquivos?',
              clear: 'Excluir todos',
              done: 'OK'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.pt = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.ro = {
      uploading: 'Se încarcă... Răbdare.',
      loadingInfo: 'Info încărcare...',
      errors: {
        "default": 'Eroare',
        baddata: 'Valoare incorectă',
        size: 'Fișier prea mare',
        upload: 'Nu pot încărca',
        user: 'Încărcare anulată',
        info: 'Nu pot încărca info',
        image: 'Doar imagini, vă rog',
        createGroup: 'Nu pot crea grup de fișiere',
        deleted: 'Fișierul a fost șters'
      },
      draghere: 'Trage un fișier aici',
      file: {
        one: '%1 fișier',
        other: '%1 fișiere'
      },
      buttons: {
        cancel: 'Anulare',
        remove: 'Șterge',
        choose: {
          files: {
            one: 'Alege un fișier',
            other: 'Alege fișiere'
          },
          images: {
            one: 'Alege o imagine',
            other: 'Alege imagini'
          }
        }
      },
      dialog: {
        close: 'Închide',
        openMenu: 'Deschide meniu',
        done: 'Gata',
        showFiles: 'Arată fișiere',
        tabs: {
          names: {
            'empty-pubkey': 'Bine ai venit',
            preview: 'Previzualizare',
            file: 'Fișiere locale',
            url: 'Link direct',
            camera: 'Camera',
            facebook: 'Facebook',
            dropbox: 'Dropbox',
            gdrive: 'Google Drive',
            gphotos: 'Google Photos',
            instagram: 'Instagram',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'trage aici<br>fișierele',
            nodrop: 'Încarcă fișiere din computer',
            cloudsTip: 'Cloud <br>și rețle sociale',
            or: 'sau',
            button: 'Alege un fișier local',
            also: 'sau alege din'
          },
          url: {
            title: 'Fișiere din Web',
            line1: 'Ia orice fișier din Web.',
            line2: 'Trebuie să ai doar linkul.',
            input: 'Lipește linkul aici...',
            button: 'Încarcă'
          },
          camera: {
            title: 'Fișier din camera web',
            capture: 'Fă o fotografie',
            mirror: 'Mirror',
            startRecord: 'Înregistrează un video',
            stopRecord: 'Stop',
            cancelRecord: 'Anulează',
            retry: 'Cere permisiune din nou',
            pleaseAllow: {
              title: 'Te rog sa-mi dai acces la cameră',
              text: 'Ai fost rugat să dai acces la cameră de acest site.<br>' + 'Pentru a putea face fotografii cu camera, trebuie să aprobi această cerere.'
            },
            notFound: {
              title: 'Nicio cameră detectată',
              text: 'Se pare că nu ai nicio cameră atașată acestui device.'
            }
          },
          preview: {
            unknownName: 'necunoscut',
            change: 'Anulează',
            back: 'Înapoi',
            done: 'Adaugă',
            unknown: {
              title: 'Se încarcă... Te rog așteaptă previzualizarea.',
              done: 'Sari peste previzualizare și acceptă'
            },
            regular: {
              title: 'Adaug acest fișier?',
              line1: 'Ești pe punctul de a adăuga fișierul de mai sus.',
              line2: 'Te rog confirmă.'
            },
            image: {
              title: 'Adaug această imagine?',
              change: 'Anulează'
            },
            crop: {
              title: 'Decupează și adaugă aceasta imagine',
              done: 'Gata',
              free: 'gratis'
            },
            video: {
              title: 'Adaug acest video?',
              change: 'anulează'
            },
            error: {
              "default": {
                title: 'Oops!',
                text: 'A intervenit o problemă la încărcare.',
                back: 'te rog încearcă din nou'
              },
              image: {
                title: 'Sunt acceptate doar imagini.',
                text: 'Te rog încearcă din nou cu un alt fișier.',
                back: 'Alege imagine'
              },
              size: {
                title: 'Fișierul selectat de tine este prea mare.',
                text: 'Te rog să încerci cu alt fișier.'
              },
              loadImage: {
                title: 'Eroare',
                text: 'Nu pot încărca imaginea'
              }
            },
            multiple: {
              title: 'Ai ales %files%.',
              question: 'Adaug %files%?',
              tooManyFiles: 'Ai ales prea multe fișiere. %max% is maximum.',
              tooFewFiles: 'Ai ales %files%. Minimul este %min% .',
              clear: 'Șterge toate',
              done: 'Adaugă',
              file: {
                preview: 'Previzualizare %file%',
                remove: 'Șterge %file%'
              }
            }
          }
        },
        footer: {
          text: 'powered by',
          link: 'uploadcare'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.ro = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.ru = {
      uploading: 'Идет загрузка',
      loadingInfo: 'Загрузка информации...',
      errors: {
        "default": 'Ошибка',
        baddata: 'Некорректные данные',
        size: 'Слишком большой файл',
        upload: 'Ошибка при загрузке',
        user: 'Загрузка прервана',
        info: 'Ошибка при загрузке информации',
        image: 'Разрешены только изображения',
        createGroup: 'Не удалось создать группу файлов',
        deleted: 'Файл удалён'
      },
      draghere: 'Перетащите файл сюда',
      file: {
        one: '%1 файл',
        few: '%1 файла',
        many: '%1 файлов'
      },
      buttons: {
        cancel: 'Отмена',
        remove: 'Удалить',
        choose: {
          files: {
            one: 'Выбрать файл',
            other: 'Выбрать файлы'
          },
          images: {
            one: 'Выбрать изображение',
            other: 'Выбрать изображения'
          }
        }
      },
      dialog: {
        done: 'Готово',
        showFiles: 'Показать файлы',
        tabs: {
          names: {
            preview: 'Предпросмотр',
            'empty-pubkey': 'Приветствие',
            file: 'Локальные файлы',
            vk: 'ВКонтакте',
            url: 'Ссылка',
            camera: 'Камера'
          },
          file: {
            drag: 'Перетащите файл сюда',
            nodrop: 'Загрузка файлов с вашего компьютера',
            cloudsTip: 'Облачные хранилища<br>и социальные сети',
            or: 'или',
            button: 'Выберите локальный файл',
            also: 'Вы также можете загрузить файлы, используя:'
          },
          url: {
            title: 'Файлы с других сайтов',
            line1: 'Загрузите любой файл из сети.',
            line2: '',
            input: 'Укажите здесь ссылку...',
            button: 'Загрузить'
          },
          camera: {
            capture: 'Сделать снимок',
            mirror: 'Отразить',
            retry: 'Повторно запросить разрешение',
            pleaseAllow: {
              title: 'Пожалуйста, разрешите доступ к камере',
              text: 'Для того, чтобы сделать снимок, мы запросили разрешение ' + 'на доступ к камере с этого сайта.'
            },
            notFound: {
              title: 'Камера не найдена',
              text: 'Скорее всего камера не подключена или не настроена.'
            }
          },
          preview: {
            unknownName: 'неизвестно',
            change: 'Отмена',
            back: 'Назад',
            done: 'Добавить',
            unknown: {
              title: 'Загрузка... Пожалуйста подождите.',
              done: 'Пропустить предварительный просмотр'
            },
            regular: {
              title: 'Загрузить этот файл?',
              line1: 'Вы собираетесь добавить этот файл:',
              line2: 'Пожалуйста, подтвердите.'
            },
            image: {
              title: 'Добавить это изображение?',
              change: 'Отмена'
            },
            video: {
              title: 'Добавить это видео?',
              change: 'Отмена'
            },
            crop: {
              title: 'Обрезать и добавить это изображение',
              done: 'Готово',
              free: 'произв.'
            },
            error: {
              "default": {
                title: 'Ой!',
                text: 'Что-то пошло не так во время загрузки.',
                back: 'Пожалуйста, попробуйте ещё раз'
              },
              image: {
                title: 'Можно загружать только изображения.',
                text: 'Попробуйте загрузить другой файл.',
                back: 'Выберите изображение'
              },
              size: {
                title: 'Размер выбранного файла превышает лимит.',
                text: 'Попробуйте загрузить другой файл.'
              },
              loadImage: {
                title: 'Ошибка',
                text: 'Изображение не удалось загрузить'
              }
            },
            multiple: {
              title: 'Вы выбрали %files%',
              question: 'Добавить все эти файлы?',
              tooManyFiles: 'Вы выбрали слишком много файлов. %max% максимум.',
              tooFewFiles: 'Вы выбрали %files%. Нужно не меньше %min%.',
              clear: 'Удалить все',
              done: 'Добавить',
              file: {
                preview: 'Предпросмотр %file%',
                remove: 'Удалить %file%'
              }
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.ru = function(n) {
      if (((n / 10 % 10 | 0) === 1) || (n % 10 === 0) || (n % 10 > 4)) {
        return 'many';
      } else if (n % 10 === 1) {
        return 'one';
      } else {
        return 'few';
      }
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.sk = {
      uploading: 'Nahrávam... Prosím počkajte.',
      loadingInfo: 'Nahrávam informácie...',
      errors: {
        "default": 'Chyba',
        baddata: 'Nesprávna hodnota',
        size: 'Súbor je príliš veľký',
        upload: 'Nedá sa nahrať',
        user: 'Nahrávanie bolo zrušené',
        info: 'Informácie sa nedajú nahrať',
        image: 'Povolené sú len obrázky',
        createGroup: 'Nie je možné vytvoriť priečinok',
        deleted: 'Súbor bol odstránený'
      },
      draghere: 'Sem presuňte súbor',
      file: {
        one: '%1 súbor',
        few: '%1 súbory',
        other: '%1 súborov'
      },
      buttons: {
        cancel: 'Zrušiť',
        remove: 'Odstrániť',
        choose: {
          files: {
            one: 'Vyberte súbor',
            other: 'Vyberte súbory'
          },
          images: {
            one: 'Vyberte obrázok',
            other: 'Vyberte obrázky'
          }
        }
      },
      dialog: {
        close: 'Zavrieť',
        openMenu: 'Otvoriť menu',
        done: 'Hotovo',
        showFiles: 'Ukázať súbory',
        tabs: {
          names: {
            'empty-pubkey': 'Vitajte',
            preview: 'Náhľad',
            file: 'Z počítača',
            url: 'Z internetu',
            camera: 'Kamera',
            facebook: 'Facebook',
            dropbox: 'Dropbox',
            gdrive: 'Disk Google',
            gphotos: 'Google Obrázky',
            instagram: 'Instagram',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'presuňte a vložte<br>akékoľvek súbory',
            nodrop: 'Nahrajte súbory z vášho&nbsp;počítača',
            cloudsTip: 'Cloud úložiská<br>a sociálne siete',
            or: 'alebo',
            button: 'Vyberte súbor z počítača',
            also: 'alebo vyberte z'
          },
          url: {
            title: 'Súbory z internetu',
            line1: 'Uložte akýkoľvek súbor z internetu.',
            line2: 'Stačí pridať odkaz na neho.',
            input: 'Vložte svoj odkaz sem...',
            button: 'Nahrať'
          },
          camera: {
            title: 'Súbor z webkamery',
            capture: 'Odfotiť',
            mirror: 'Zrkadliť',
            startRecord: 'Natočte video',
            stopRecord: 'Prestať natáčať',
            cancelRecord: 'Zrušiť',
            retry: 'Znovu požiadať o prístup',
            pleaseAllow: {
              title: 'Prosím povoľte prístup k vašej kamere',
              text: 'Boli ste vyzvaní aby ste umožnili tejto stránke prístup ku kamere.<br>' + 'Prístup musíte povolit aby ste mohli fotiť s vašou kamerou.'
            },
            notFound: {
              title: 'Kamera nebola nájdená',
              text: 'Zdá sa, že k tomuto zariadeniu nemáte pripojenú kameru.'
            }
          },
          preview: {
            unknownName: 'neznámy',
            change: 'Zrušiť',
            back: 'Späť',
            done: 'Pridať',
            unknown: {
              title: 'Nahráva sa... Prosím počkajte na náhľad.',
              done: 'Preskočiť náhľad a nahrať'
            },
            regular: {
              title: 'Pridať tento súbor?',
              line1: 'Chystáte sa pridať vyššie uvedený súbor.',
              line2: 'Prosím potvrďte váš výber.'
            },
            image: {
              title: 'Pridať tento obrázok?',
              change: 'Zrušiť'
            },
            crop: {
              title: 'Orezať a pridať túto fotku',
              done: 'Hotovo',
              free: 'obnoviť'
            },
            video: {
              title: 'Pridať toto video?',
              change: 'Zrušiť'
            },
            error: {
              "default": {
                title: 'Ejha!',
                text: 'Pri nahrávaní sa vyskytla chyba.',
                back: 'Skúste to znovu'
              },
              image: {
                title: 'Je možné nahrávať len obrázky',
                text: 'Skúste to znovu s iným súborom.',
                back: 'Vybrať obrázok'
              },
              size: {
                title: 'Súbor, ktorý ste vybrali presahuje povolenú veľkosť.',
                text: 'Skúste to znovu s iným súborom.'
              },
              loadImage: {
                title: 'Chyba',
                text: 'Obrázok nie je možné vyhľadať'
              }
            },
            multiple: {
              title: 'Vybrali ste %files%.',
              question: 'Pridať %files%?',
              tooManyFiles: 'Vybrali ste príliš veľa súborov. Maximum je %max%.',
              tooFewFiles: 'Vybrali ste %files%. Potrebných je aspoň %min%.',
              clear: 'Odstrániť všetky',
              done: 'Pridať',
              file: {
                preview: 'Nahliadnuť na %file%',
                remove: 'Odstrániť %file%'
              }
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.sk = function(n) {
      if (n === 1) {
        return 'one';
      } else if ((2 <= n && n <= 4)) {
        return 'few';
      } else {
        return 'many';
      }
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.sr = {
      uploading: 'Шаљем... Молимо сачекајте.',
      loadingInfo: 'Учитавам информације...',
      errors: {
        "default": 'Грешка',
        baddata: 'Погрешна вредност',
        size: 'Фајл је сувише велик',
        upload: 'Не могу да пошаљем',
        user: 'Слање прекинуто',
        info: 'Не могу да учитам информације',
        image: 'Дозвољене су само слике',
        createGroup: 'Не могу да направим групу фајлова',
        deleted: 'Фајл је обрисан'
      },
      draghere: 'Убаците фајл овде',
      file: {
        one: '%1 фајл',
        other: '%1 фајлова'
      },
      buttons: {
        cancel: 'Поништи',
        remove: 'Избаци',
        choose: {
          files: {
            one: 'Изабери фајл',
            other: 'Изабери фајлове'
          },
          images: {
            one: 'Изабери слику',
            other: 'Изабери слике'
          }
        }
      },
      dialog: {
        close: 'Затвори',
        openMenu: 'Отвори мени',
        done: 'Готово',
        showFiles: 'Покажи фајлове',
        tabs: {
          names: {
            'empty-pubkey': 'Добродошли',
            preview: 'Погледај',
            file: 'Локални фајлови',
            url: 'Директан линк',
            camera: 'Камера',
            facebook: 'Фејсбук',
            dropbox: 'Dropbox',
            gdrive: 'Google Drive',
            gphotos: 'Google Photos',
            instagram: 'Инстаграм',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'превуци<br>било које фајлове',
            nodrop: 'Пошаљи фајлове са твог&nbsp;компјутера',
            cloudsTip: 'Клауд<br>и социјалне мреже',
            or: 'или',
            button: 'Изабери локални фајл',
            also: 'или изабери'
          },
          url: {
            title: 'Фајлове са Интернета',
            line1: 'Изабери било који фајл са Интернета.',
            line2: 'Само убаци линк.',
            input: 'Убаци линк овде...',
            button: 'Пошаљи'
          },
          camera: {
            title: 'Фајл са камере',
            capture: 'Усликај',
            mirror: 'Огледало',
            startRecord: 'Сними видео',
            stopRecord: 'Заустави',
            cancelRecord: 'Поништи',
            retry: 'Тражи дозволу поново',
            pleaseAllow: {
              title: 'Молимо вас да дозволите приступ вашој камери',
              text: 'Упитани сте да дозволите приступ вашој камери са овог сајта.<br>' + 'Уколико желите да сликате, морате одобрити овај захтев.'
            },
            notFound: {
              title: 'Камера није препозната',
              text: 'Изгледа да немате камеру на овом уређају.'
            }
          },
          preview: {
            unknownName: 'непознато',
            change: 'Поништи',
            back: 'Назад',
            done: 'Додај',
            unknown: {
              title: 'Шаљем... Сачекајте за приказ.',
              done: 'Прескочи приказ и прихвати'
            },
            regular: {
              title: 'Додај овај фајл?',
              line1: 'Управо ћете додати овај фајл изнад.',
              line2: 'Молимо потврдите.'
            },
            image: {
              title: 'Додај ову слику?',
              change: 'Поништи'
            },
            crop: {
              title: 'Кропуј и додај ову слику',
              done: 'Урађено',
              free: 'слободно'
            },
            video: {
              title: 'Додај овај видео?',
              change: 'Поништи'
            },
            error: {
              "default": {
                title: 'Ооопс!',
                text: 'Нешто је искрсло у току слања.',
                back: 'Молимо покушајте поново'
              },
              image: {
                title: 'Дозвљене су само слике.',
                text: 'Молимо покушајте са другим фајлом.',
                back: 'Изабери слику'
              },
              size: {
                title: 'Фајл који сте изабрали премашује лимит.',
                text: 'Молимо покушајте са другим фајлом.'
              },
              loadImage: {
                title: 'Грешка',
                text: 'Не могу да учитам слику'
              }
            },
            multiple: {
              title: 'Изабрали сте %files%.',
              question: 'Додај %files%?',
              tooManyFiles: 'Изабрали сте превише фајлова. %max% је максимално.',
              tooFewFiles: 'Изабрали сте %files%. Морате најмање %min% фајла.',
              clear: 'Избаци све',
              done: 'Додај',
              file: {
                preview: 'Прегледај %file%',
                remove: 'Избаци %file%'
              }
            }
          }
        },
        footer: {
          text: 'направио',
          link: 'uploadcare'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.sr = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.sv = {
      uploading: 'Laddar... Var god vänta.',
      loadingInfo: 'Laddar info...',
      errors: {
        "default": 'Fel',
        baddata: 'Felaktigt värde',
        size: 'Filen är för stor',
        upload: 'Kan inte ladda upp',
        user: 'Uppladdning avbruten',
        info: 'Kan inte ladda informationen',
        image: 'Endast bilder tillåtna',
        createGroup: 'Kan inte skapa filgrupp',
        deleted: 'Fil raderad'
      },
      draghere: 'Dra filen hit',
      file: {
        one: '%1 fil',
        other: '%1 filer'
      },
      buttons: {
        cancel: 'Avbryt',
        remove: 'Ta bort',
        choose: {
          files: {
            one: 'Välj fil',
            other: 'Välj filer'
          },
          images: {
            one: 'Välj en bild',
            other: 'Välj bilder'
          }
        }
      },
      dialog: {
        done: 'Klar',
        showFiles: 'Visa filer',
        tabs: {
          names: {
            'empty-pubkey': 'Välkommen',
            preview: 'Förhandsgranskning',
            file: 'Lokala filer',
            url: 'Direkta länkar',
            camera: 'Kamera'
          },
          file: {
            drag: 'Släpp filen här',
            nodrop: 'Ladda upp filer från din dator',
            cloudsTip: 'Molnlagring<br>och sociala nätverk',
            or: 'eller',
            button: 'Välj en lokal fil',
            also: 'Du kan också välja den från'
          },
          url: {
            title: 'Filer från webben',
            line1: 'Välj en fil från en webbadress.',
            line2: 'Ange bara länken till filen.',
            input: 'Klistra in din länk här...',
            button: 'Ladda upp'
          },
          camera: {
            capture: 'Ta ett foto',
            mirror: 'Spegel',
            retry: 'Begär tillstånd igen',
            pleaseAllow: {
              title: 'Vänligen ge tillgång till din kamera',
              text: 'Du har uppmanats att tillåta att denna webbplats får tillgång till din kamera.' + 'För att ta bilder med din kamera måste du godkänna denna begäran.'
            },
            notFound: {
              title: 'Ingen kamera hittades',
              text: 'Det verkar som att du inte har någon kamera ansluten till denna enheten.'
            }
          },
          preview: {
            unknownName: 'okänd',
            change: 'Avbryt',
            back: 'Tillbaka',
            done: 'Lägg till',
            unknown: {
              title: 'Laddar... Vänligen vänta på förhandsgranskning.',
              done: 'Skippa förhandsgranskning och acceptera'
            },
            regular: {
              title: 'Lägg till denna filen?',
              line1: 'Du håller på att lägga till filen ovan.',
              line2: 'Vänligen bekräfta.'
            },
            image: {
              title: 'Lägg till denna bilden?',
              change: 'Avbryt'
            },
            crop: {
              title: 'Beskär och lägg till denna bild',
              done: 'Klar',
              free: 'fri'
            },
            error: {
              "default": {
                title: 'Oops!',
                text: 'Någonting gick fel under uppladdningen.',
                back: 'Vänligen försök igen'
              },
              image: {
                title: 'Endast bildfiler accepteras.',
                text: 'Vänligen försök igen med en annan fil.',
                back: 'Välj bild'
              },
              size: {
                title: 'Filen du har valt är för stor.',
                text: 'Vänligen försök igen med en annan fil.'
              },
              loadImage: {
                title: 'Fel',
                text: 'Kan inte ladda bild'
              }
            },
            multiple: {
              title: 'Du har valt %files%',
              question: 'Vill du lägga till alla dessa filer?',
              tooManyFiles: 'Du har valt för många filer. %max% är max.',
              tooFewFiles: 'Du har valt %files%. Minst %min% krävs.',
              clear: 'Ta bort alla',
              done: 'Klar'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.sv = function(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.tr = {
      uploading: 'Yükleniyor... Lütfen bekleyin.',
      loadingInfo: 'Bilgiler yükleniyor...',
      errors: {
        "default": 'Hata',
        baddata: 'Geçersiz değer',
        size: 'Dosya çok büyük',
        upload: 'Yüklenemedi',
        user: 'Yükleme iptal edildi',
        info: 'Bilgiler getirilemedi',
        image: 'Sadece resim dosyası yüklenebilir',
        createGroup: 'Dosya grubu yaratılamıyor',
        deleted: 'Dosya silinmiş'
      },
      draghere: 'Buraya bir dosya bırakın',
      file: {
        other: '%1 dosya'
      },
      buttons: {
        cancel: 'İptal',
        remove: 'Kaldır',
        choose: {
          files: {
            one: 'Dosya Seçin',
            other: 'Dosya Seçin'
          },
          images: {
            one: 'Resim Dosyası Seçin',
            other: 'Resim Dosyası Seçin'
          }
        }
      },
      dialog: {
        done: 'Bitti',
        showFiles: 'Dosyaları Göster',
        tabs: {
          names: {
            'empty-pubkey': 'Hoş geldiniz',
            preview: 'Önizleme',
            file: 'Bilgisayar',
            url: 'Dış Bağlantılar',
            camera: 'Kamera'
          },
          file: {
            drag: 'Buraya bir dosya bırakın',
            nodrop: 'Bilgisayarınızdan dosya yükleyin',
            or: 'ya da',
            button: 'Bilgisayardan bir dosya seç',
            also: 'Diğer yükleme seçenekleri',
            cloudsTip: 'Bulut depolamalar<br>ve sosyal hizmetler'
          },
          url: {
            title: 'Webden dosyalar',
            line1: 'Webden herhangi bir dosya seçin.',
            line2: 'Dosya bağlantısını sağlayın.',
            input: 'Bağlantınızı buraya yapıştırın...',
            button: 'Yükle'
          },
          camera: {
            capture: 'Fotoğraf çek',
            mirror: 'Ayna',
            retry: 'Tekrar izin iste',
            pleaseAllow: {
              title: 'Lütfen kameranıza erişilmesine izin verin',
              text: 'Bu siteden kamera erişimine izin vermeniz talep ediliyor. Kameranızla fotoğraf çekmek için bu isteği onaylamanız gerekmektedir.'
            },
            notFound: {
              title: 'Kamera algılanamadı',
              text: 'Bu cihaza kamera bağlantısının olmadığı görünüyor.'
            }
          },
          preview: {
            unknownName: 'bilinmeyen',
            change: 'İptal',
            back: 'Geri',
            done: 'Ekle',
            unknown: {
              title: 'Yükleniyor... Önizleme için lütfen bekleyin.',
              done: 'Önizlemeyi geç ve kabul et'
            },
            regular: {
              title: 'Bu dosya eklensin mi?',
              line1: 'Yukarıdaki dosyayı eklemek üzeresiniz.',
              line2: 'Lütfen onaylayın.'
            },
            image: {
              title: 'Bu görsel eklensin mi?',
              change: 'İptal'
            },
            crop: {
              title: 'Bu görseli kes ve ekle',
              done: 'Bitti'
            },
            error: {
              "default": {
                title: 'Aman!',
                text: 'Yükleme sırasında bir hata oluştu.',
                back: 'Lütfen tekrar deneyin.'
              },
              image: {
                title: 'Sadece resim dosyaları kabul edilmektedir.',
                text: 'Lütfen başka bir dosya ile tekrar deneyin.',
                back: 'Resim dosyası seç'
              },
              size: {
                title: 'Seçtiğiniz dosya limitleri aşıyor.',
                text: 'Lütfen başka bir dosya ile tekrar deneyin.'
              },
              loadImage: {
                title: 'Hata',
                text: 'Resim dosyası yüklenemedi'
              }
            },
            multiple: {
              title: '%files% dosya seçtiniz',
              question: 'Bu dosyaların hepsini eklemek istiyor musunuz?',
              tooManyFiles: 'Fazla sayıda dosya seçtiniz, en fazla %max% dosya olabilir.',
              tooFewFiles: '%files% dosya seçtiniz, en az %min% dosya olmalıdır.',
              clear: 'Hepsini kaldır',
              done: 'Bitti'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.tr = function(n) {
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.uk = {
      uploading: 'Завантаження... Зачекайте.',
      loadingInfo: 'Завантаження інформації...',
      errors: {
        "default": 'Помилка',
        baddata: 'Неправильне значення',
        size: 'Завеликий файл',
        upload: 'Помилка завантаження',
        user: 'Завантаження скасовано',
        info: 'Помилка завантаження інформації',
        image: 'Дозволені лише зображення',
        createGroup: 'Неможливо створити групу файлів',
        deleted: 'Файл видалено'
      },
      draghere: 'Перетягніть файл сюди',
      file: {
        one: '%1 файл',
        few: '%1 файли',
        many: '%1 файлів'
      },
      buttons: {
        cancel: 'Cкасувати',
        remove: 'Видалити',
        choose: {
          files: {
            one: 'Вибрати файл',
            other: 'Вибрати файли'
          },
          images: {
            one: 'Вибрати зображення',
            other: 'Вибрати зображення'
          }
        }
      },
      dialog: {
        close: 'Закрити',
        openMenu: 'Відкрити меню',
        done: 'Готово',
        showFiles: 'Показати файли',
        tabs: {
          names: {
            'empty-pubkey': 'Вітання',
            preview: 'Попередній перегляд',
            file: 'Локальні файли',
            url: 'Пряме посилання',
            camera: 'Камера',
            facebook: 'Facebook',
            dropbox: 'Dropbox',
            gdrive: 'Google Drive',
            gphotos: 'Google Photos',
            instagram: 'Instagram',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'Перетягніть<br>будь-які файли',
            nodrop: 'Завантаження файлів з вашого комп\'ютера',
            cloudsTip: 'Хмарні сховища<br>та соціальні мережі',
            or: 'або',
            button: 'Обрати локальний файл',
            also: 'або обрати з'
          },
          url: {
            title: 'Файли з інших сайтів',
            line1: 'Візьміть будь-який файл з Інтернету..',
            line2: 'Вкажіть тут посилання.',
            input: 'Вставте ваше посилання тут...',
            button: 'Завантажити'
          },
          camera: {
            title: 'Файл із відеокамери',
            capture: 'Зробити знімок',
            mirror: 'Віддзеркалити',
            startRecord: 'Записати відео',
            stopRecord: 'Стоп',
            cancelRecord: 'Cкасувати',
            retry: 'Повторний запит дозволу',
            pleaseAllow: {
              title: 'Будь ласка, надайте доступ до вашої камери',
              text: 'Вам буде запропоновано дозволити доступ до камери з цього сайту.<br>' + 'Для того, щоб фотографувати за допомогою камери, ви повинні схвалити цей запит.'
            },
            notFound: {
              title: 'Камера не виявлена',
              text: 'Схоже, у вас немає камери, підключеної до цього пристрою.'
            }
          },
          preview: {
            unknownName: 'невідомо',
            change: 'Cкасувати',
            back: 'Назад',
            done: 'Додати'
          },
          unknown: {
            title: 'Завантаження... Зачекайте на попередній перегляд.',
            done: 'Пропустити перегляд і прийняти'
          },
          regular: {
            title: 'Додати цей файл?',
            line1: 'Ви збираєтеся додати файл вище.',
            line2: 'Будь ласка, підтвердіть.'
          },
          image: {
            title: 'Додати це зображення?',
            change: 'Cкасувати'
          },
          crop: {
            title: 'Обрізати та додати це зображення',
            done: 'Готово',
            free: 'довільно'
          },
          video: {
            title: 'Додати це відео?',
            change: 'Cкасувати'
          },
          error: {
            "default": {
              title: 'Ой!',
              text: 'Під час завантаження сталася помилка.',
              back: 'Будь ласка, спробуйте ще раз'
            },
            image: {
              title: 'Приймаються лише файли зображень.',
              text: 'Повторіть спробу з іншим файлом.',
              back: 'Виберіть зображення'
            },
            size: {
              title: 'Розмір вибраного файлу перевищує ліміт.',
              text: 'Повторіть спробу з іншим файлом.'
            },
            loadImage: {
              title: 'Помилка',
              text: 'Помилка завантаження зображення'
            },
            multiple: {
              title: 'Ви вибрали %files%.',
              question: 'Додати %files%?',
              tooManyFiles: 'Ви вибрали забагато файлів. Максимальна кількість %max%.',
              tooFewFiles: 'Ви вибрали %files%. Мінімальна кількість %min%.',
              clear: 'Видалити все',
              done: 'Додати'
            },
            file: {
              preview: 'Попередній перегляд %file%',
              remove: 'Видалити %file%'
            }
          }
        },
        footer: {
          text: 'працює на',
          link: 'uploadcare'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.uk = function(n) {
      if (((n / 10 % 10 | 0) === 1) || (n % 10 === 0) || (n % 10 > 4)) {
        return 'many';
      } else if (n % 10 === 1) {
        return 'one';
      } else {
        return 'few';
      }
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.vi = {
      loadingInfo: 'Đang tải thông tin...',
      errors: {
        "default": 'Lỗi',
        baddata: 'Giá trị không đúng',
        size: 'Tệp quá lớn',
        upload: 'Không thể tải lên',
        user: 'Tải lên bị hủy',
        info: 'Không thể nạp thông tin',
        image: 'Chỉ cho phép các hình ảnh',
        createGroup: 'Không thể tạo nhóm tệp',
        deleted: 'Tệp đã bị xóa'
      },
      uploading: 'Đang tải lên... Vui lòng chờ đợi.',
      draghere: 'Thả một tệp vào đây',
      file: {
        other: '%1 tệp'
      },
      buttons: {
        cancel: 'Hủy',
        remove: 'Xóa',
        choose: {
          files: {
            other: 'Lựa chọn các tệp'
          },
          images: {
            other: 'Lựa chọn hình ảnh'
          }
        }
      },
      dialog: {
        close: 'Đóng',
        openMenu: 'Mở menu',
        done: 'Xong',
        showFiles: 'Hiển thị tệp',
        tabs: {
          names: {
            'empty-pubkey': 'Chào mừng',
            preview: 'Xem trước',
            file: 'Các tệp trên máy',
            url: 'Liên kết tr.tiếp',
            camera: 'Máy ảnh',
            facebook: 'Facebook',
            dropbox: 'Dropbox',
            gdrive: 'Google Drive',
            instagram: 'Instagram',
            gphotos: 'Google Photos',
            vk: 'VK',
            evernote: 'Evernote',
            box: 'Box',
            onedrive: 'OneDrive',
            flickr: 'Flickr',
            huddle: 'Huddle'
          },
          file: {
            drag: 'kéo & thả<br>bất kỳ tệp nào',
            nodrop: 'Tải lên các tệp từ &nbsp;máy tính của bạn',
            cloudsTip: 'Lưu trữ Đám mây<br>và các mạng xã hội',
            or: 'hoặc',
            button: 'Lựa chọn một tệp trên máy',
            also: 'hoặc lựa chọn từ'
          },
          url: {
            title: 'Các tệp trên Web',
            line1: 'Chọn bất từ tệp nào từ web.',
            line2: 'Chỉ cần cung cấp liên kết.',
            input: 'Dán liên kết của bạn xuống đây...',
            button: 'Tải lên'
          },
          camera: {
            title: 'Tệp từ web cam',
            capture: 'Chụp một bức ảnh',
            mirror: 'Gương',
            startRecord: 'Quay một video',
            cancelRecord: 'Hủy',
            stopRecord: 'Dừng',
            retry: 'Yêu cầu cấp phép lần nữa',
            pleaseAllow: {
              text: 'Bạn đã được nhắc nhở để cho phép truy cập vào camera từ trang này.<br>Để có thể chụp ảnh với camera, bạn phải chấp thuận yêu cầu này.',
              title: 'Vui lòng cho phép truy cập tới camera của bạn'
            },
            notFound: {
              title: 'Không tìm thấy camera nào',
              text: 'Có vẻ như bạn không có camera nào nối với thiết bị này.'
            }
          },
          preview: {
            unknownName: 'vô danh',
            change: 'Hủy',
            back: 'Quay lại',
            done: 'Thêm',
            unknown: {
              title: 'Đang tải lên...Vui lòng đợi để xem trước.',
              done: 'Bỏ qua và chấp nhận'
            },
            regular: {
              title: 'Thêm tệp này?',
              line1: 'Bạn dự định thêm tệp ở trên.',
              line2: 'Vui lòng chấp thuận.'
            },
            image: {
              title: 'Thêm hình ảnh này?',
              change: 'Hủy'
            },
            crop: {
              title: 'Cắt và thêm ảnh này',
              done: 'Xong',
              free: 'miễn phí'
            },
            video: {
              title: 'Thêm video này?',
              change: 'Hủy'
            },
            error: {
              "default": {
                title: 'Ồ!',
                back: 'Vui lòng thử lại',
                text: 'Có lỗi gì đó trong quá trình tải lên.'
              },
              image: {
                title: 'Chỉ chấp thuận các tệp hình ảnh.',
                text: 'Vui lòng thử lại với một tệp mới.',
                back: 'Lựa chọn hình ảnh'
              },
              size: {
                title: 'Tệp bạn đã lựa chọn vượt quá giới hạn',
                text: 'Vui lòng thử lại với một tệp khác.'
              },
              loadImage: {
                title: 'Lỗi',
                text: 'Không thể tải hình ảnh'
              }
            },
            multiple: {
              title: 'Bạn đã lựa chọn %files%',
              question: 'Thêm %files%?',
              tooManyFiles: 'Bạn đã lựa chọn quá nhiều tệp. %max% là tối đa.',
              tooFewFiles: 'Bạn đã lựa chọn %files%. Ít nhất cần %min%',
              clear: 'Xoá Tất cả',
              file: {
                preview: 'Xem trước %file%',
                remove: 'Xóa %file%'
              },
              done: 'Thêm'
            }
          }
        },
        footer: {
          text: 'được hỗ trợ bởi',
          link: 'uploadcare'
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.vi = function(n) {
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.zhTW = {
      uploading: '上傳中...請等待',
      loadingInfo: '正在讀取資訊...',
      errors: {
        "default": '錯誤',
        baddata: '錯誤資料',
        size: '檔案太大',
        upload: '無法上傳',
        user: '上傳被取消',
        info: '無法讀取資訊',
        image: '只允許圖片檔案',
        createGroup: '無法建立檔案群組',
        deleted: '檔案已被刪除'
      },
      draghere: '拖放檔案到這裡',
      file: {
        other: '%1 個檔案'
      },
      buttons: {
        cancel: '取消',
        remove: '刪除',
        choose: {
          files: {
            one: '選擇檔案',
            other: '選擇檔案'
          },
          images: {
            one: '選擇圖片',
            other: '選擇圖片'
          }
        }
      },
      dialog: {
        done: '完成',
        showFiles: '顯示檔案',
        tabs: {
          names: {
            'empty-pubkey': '歡迎',
            preview: '預覽',
            file: '從本機上傳',
            url: '任意圖片連結',
            camera: '相機'
          },
          file: {
            drag: '拖放檔案到這裡',
            nodrop: '從你的本機中上傳',
            cloudsTip: '雲端硬碟<br>與社群網站',
            or: '或者',
            button: '從本機中選取檔案',
            also: '你也可以選自'
          },
          url: {
            title: '來自網際網路的檔案',
            line1: '從網際網路選取檔案',
            line2: '只需提供連結',
            input: '將連結複製至此...',
            button: '上傳'
          },
          camera: {
            capture: '拍照',
            mirror: '鏡像',
            retry: '重新取得相機權限',
            pleaseAllow: {
              title: '請允許使存取您的相機',
              text: '你一直在提示允許來自這個網站的訪問攝像頭。' + '為了拍照用你的相機，你必須批准這一請求。'
            },
            notFound: {
              title: '沒有找到相機',
              text: '看起來你有沒有將連接相機。'
            }
          },
          preview: {
            unknownName: '未知',
            change: '取消',
            back: '返回',
            done: '加入',
            unknown: {
              title: '上傳中...請等待預覽',
              done: '跳過預覽，直接接受'
            },
            regular: {
              title: '加入這個檔案？',
              line1: '你將加入上面的檔案。',
              line2: '請確認。'
            },
            image: {
              title: '加入這個圖片？',
              change: '取消'
            },
            crop: {
              title: '裁切並加入這個圖片',
              done: '完成',
              free: '自由裁切'
            },
            error: {
              "default": {
                title: '錯誤！',
                text: '上傳過程中出錯。',
                back: '請重試'
              },
              image: {
                title: '只允許上傳圖片檔案。',
                text: '請選擇其他檔案重新上傳。',
                back: '選擇圖片'
              },
              size: {
                title: '你選取的檔案超過了100MB的上限',
                text: '請用另一個檔案再試一次。'
              },
              loadImage: {
                title: '錯誤',
                text: '無法讀取圖片'
              }
            },
            multiple: {
              title: '你已經選擇 %files%',
              question: '你要加入所有檔案嗎？',
              tooManyFiles: '你選了太多的檔案. 最多可選擇%max%. 請刪除一些。',
              tooFewFiles: '你所選擇的檔案 %files%. 至少要 %min% .',
              clear: '清空',
              done: '完成'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.zhTW = function(n) {
      return 'other';
    };
  });

}).call(this);
(function() {
  uploadcare.namespace('locale.translations', function(ns) {
    return ns.zh = {
      uploading: '上传中...请等待',
      loadingInfo: '正在读取信息...',
      errors: {
        "default": '错误',
        baddata: '错误数据',
        size: '文件太大',
        upload: '无法上传',
        user: '上传被取消',
        info: '无法读取信息',
        image: '只允许图形文件',
        createGroup: '无法建立文件组',
        deleted: '文件已被删除'
      },
      draghere: '拖放文件到这里',
      file: {
        other: '%1 个文件'
      },
      buttons: {
        cancel: '取消',
        remove: '删除'
      },
      dialog: {
        done: '完成',
        showFiles: '显示文件',
        tabs: {
          names: {
            url: '任意图片链接'
          },
          file: {
            drag: '拖放文件到这里',
            nodrop: '从你的电脑中上传',
            or: '或者',
            button: '从电脑中选取文件',
            also: '你也可以选自'
          },
          url: {
            title: '来自互联网的文件',
            line1: '从互联网选取文件',
            line2: '只需提供链接',
            input: '将链接拷贝至此...',
            button: '上传'
          },
          preview: {
            unknownName: '未知',
            change: '取消',
            back: '返回',
            done: '添加',
            unknown: {
              title: '上传中...请等待预览',
              done: '跳过预览，直接接受'
            },
            regular: {
              title: '添加这个文件?',
              line1: '你将添加上面的文件。',
              line2: '请确认。'
            },
            image: {
              title: '添加这个图片?',
              change: '取消'
            },
            crop: {
              title: '剪裁并添加这个图片',
              done: '完成'
            },
            error: {
              "default": {
                title: '错误!',
                text: '上传过程中出错。',
                back: '请重试'
              },
              image: {
                title: '只允许上传图片文件。',
                text: '请选择其他文件重新上传。',
                back: '选择图片'
              },
              size: {
                title: '你选取的文件超过了100MB的上限',
                text: '请用另一个文件再试一次。'
              },
              loadImage: {
                title: '错误',
                text: '无法读取图片'
              }
            },
            multiple: {
              title: '你已经选择 %files%',
              question: '你要添加所有文件吗？',
              tooManyFiles: '你选了太多的文件. 最多可选择%max%. 请删除一些。',
              clear: '清空',
              done: '完成'
            }
          }
        }
      }
    };
  });

  uploadcare.namespace('locale.pluralize', function(ns) {
    return ns.zh = function() {
      return 'other';
    };
  });

}).call(this);
(function() {
  var key;

  uploadcare.jQuery.noConflict(true);

  uploadcare.expose('locales', (function() {
    var _results;
    _results = [];
    for (key in uploadcare.locale.translations) {
      _results.push(key);
    }
    return _results;
  })());

}).call(this);


  return uploadcare.__exports;
}));
