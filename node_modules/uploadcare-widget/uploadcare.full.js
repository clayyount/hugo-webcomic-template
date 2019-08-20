/*
 * Uploadcare (3.7.0)
 * Date: 2019-02-04 11:47:57 +0000
 * Rev: c5790751b4
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

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */

!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
  a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
  null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
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

  uc.version = '3.7.0';

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
    var common, messages;
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
    ns.warnOnce = function(msg) {
      if (messages[msg] == null) {
        messages[msg] = true;
        return ns.warn(msg);
      }
    };
    common = {
      publicKey: "Global public key not set. Uploads may not work!\nAdd this to the <head> tag to set your key:\n\n<script>\nUPLOADCARE_PUBLIC_KEY = 'your_public_key';\n</script>"
    };
    return ns.commonWarning = function(name) {
      if (common[name] != null) {
        return ns.warnOnce(common[name]);
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
        if ($.type(value) === 'string') {
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
      if (!result.publicKey) {
        utils.commonWarning('publicKey');
      }
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
uploadcare.templates.JST["dialog"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--dialog">\n  <div class="uploadcare--dialog__container">\n    <button type="button" title="', ('' + __scope.t('dialog.close')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--dialog__close">\n      <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n        <use xlink:href="#uploadcare--icon-close"></use>\n      </svg>\n    </button>\n    <div class="uploadcare--dialog__placeholder"></div>\n  </div>\n  <div class="uploadcare--powered-by uploadcare--dialog__powered-by">\n    ', ('' + __scope.t('dialog.footer.text')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/', ('' + __scope.uploadcare.version).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '/"\n       target="_blank">\n      <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\n      ', ('' + __scope.t('dialog.footer.link')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </a>\n  </div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["dialog__panel"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--panel">\n  <div class="uploadcare--menu uploadcare--panel__menu">\n    <button type="button" title="', ('' + __scope.t('dialog.openMenu')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--menu__toggle">\n      <svg role="presentation" width="32" height="32"\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_menu">\n        <use xlink:href="#uploadcare--icon-menu"></use>\n      </svg>\n      <svg role="presentation" width="32" height="32"\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_back">\n        <use xlink:href="#uploadcare--icon-back"></use>\n      </svg>\n    </button>\n    <div class="uploadcare--menu__items"></div>\n  </div>\n\n  <div class="uploadcare--panel__content">\n\n    <div class="uploadcare--footer uploadcare--panel__footer">\n      <div class="uploadcare--footer__additions uploadcare--panel__message"></div>\n\n      <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--panel__show-files">\n        ', ('' + __scope.t('dialog.showFiles')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), ' <div class="uploadcare--panel__file-counter"></div>\n      </button>\n\n      <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--panel__done">\n          ', ('' + __scope.t('dialog.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n      </button>\n    </div>\n\n    <div class="uploadcare--powered-by uploadcare--panel__powered-by">\n        ', ('' + __scope.t('dialog.footer.text')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n      <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/', ('' + __scope.uploadcare.version).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '/"\n         target="_blank">\n        <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\n          ', ('' + __scope.t('dialog.footer.link')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n      </a>\n    </div>\n  </div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["icons"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<svg width="0" height="0" style="position:absolute"><symbol viewBox="0 0 32 32" id="uploadcare--icon-back"><path d="M21.132 9.06a1.5 1.5 0 0 0-2.122-2.12L9.88 16.07l9.06 9.061a1.5 1.5 0 1 0 2.122-2.121l-6.94-6.94 7.01-7.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-box"><path d="M4.962 9C4.385 9 4 9.384 4 9.96v8.243C4 20.793 6.213 23 8.811 23c1.829 0 3.464-1.043 4.33-2.578.866 1.535 2.406 2.578 4.33 2.578 2.695 0 4.812-2.206 4.812-4.797 0-2.686-2.117-4.886-4.811-4.886-1.829 0-3.465 1.043-4.33 2.578-.77-1.535-2.406-2.578-4.33-2.578a4.957 4.957 0 0 0-2.887.96V9.958c0-.48-.482-.959-.963-.959zm17.08 4.257a.841.841 0 0 0-.33.15c-.385.288-.5.965-.211 1.349l2.526 3.357-2.526 3.358c-.289.384-.174 1.061.21 1.35.385.287 1.065.173 1.354-.21l2.105-2.879 2.105 2.878c.288.384.968.498 1.353.21.385-.288.499-.965.21-1.349l-2.526-3.358 2.526-3.357c.289-.384.175-1.061-.21-1.35-.385-.287-1.065-.203-1.353.18l-2.105 2.879-2.105-2.878c-.217-.288-.657-.406-1.023-.33zm-13.23 2.068c1.539 0 2.886 1.344 2.886 2.878.096 1.535-1.25 2.878-2.887 2.878a2.89 2.89 0 0 1-2.886-2.878c0-1.63 1.347-2.878 2.886-2.878zm8.66 0a2.89 2.89 0 0 1 2.886 2.878c0 1.535-1.347 2.878-2.886 2.878a2.89 2.89 0 0 1-2.887-2.878c0-1.63 1.347-2.878 2.887-2.878z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-camera"><path d="M21 10h3c1.653 0 3 1.343 3 3v9c0 1.656-1.344 3-3.001 3H8A3 3 0 0 1 5 22v-9a3 3 0 0 1 3-3h3v-.999C11 7.901 11.895 7 13 7h6c1.113 0 2 .896 2 2.001V10zm-5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-close"><path d="M10.06 7.94a1.5 1.5 0 0 0-2.12 2.12L13.878 16l-5.94 5.94a1.5 1.5 0 0 0 2.122 2.12L16 18.122l5.94 5.94a1.5 1.5 0 0 0 2.12-2.122L18.122 16l5.94-5.94a1.5 1.5 0 0 0-2.122-2.12L16 13.878l-5.94-5.94z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-crop-free"><path d="M8 12a2.004 2.004 0 0 1-2-2.01V8.01C6 6.897 6.893 6 8.01 6h1.98c1.109 0 2.005.888 2.01 2h8c.005-1.107.896-2 2.01-2h1.98C25.103 6 26 6.893 26 8.01v1.98A2.004 2.004 0 0 1 24 12v8c1.107.005 2 .896 2 2.01v1.98c0 1.112-.893 2.01-2.01 2.01h-1.98A2.004 2.004 0 0 1 20 24h-8a2.004 2.004 0 0 1-2.01 2H8.01A2.004 2.004 0 0 1 6 23.99v-1.98c0-1.109.888-2.005 2-2.01v-8zm2 0v8a2.004 2.004 0 0 1 2 2h8a2.004 2.004 0 0 1 2-2v-8a2.004 2.004 0 0 1-2-2h-8a2.004 2.004 0 0 1-2 2zm12 10.01v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01h-1.98c-.01 0-.01 0-.01.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C24 8 24 8 23.99 8h-1.98C22 8 22 8 22 8.01zm-14 14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01H8.01C8 22 8 22 8 22.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C10 8 10 8 9.99 8H8.01C8 8 8 8 8 8.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-dropbox"><path d="M9.5 5L16 9.141l-6.5 4.141L3 9.141 9.5 5zm13 0L29 9.141l-6.5 4.141L16 9.141 22.5 5zM3 17.423l6.5-4.141 6.5 4.141-6.5 4.141L3 17.423zm19.5-4.141l6.5 4.141-6.5 4.141-6.5-4.141 6.5-4.141zm-13 9.662l6.5-4.14 6.5 4.14-6.5 4.141-6.5-4.14z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-empty-pubkey"><path d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-error"><path d="M18.122 23.93V21a.583.583 0 0 0-.179-.434.585.585 0 0 0-.423-.175h-2.616a.585.585 0 0 0-.424.175.583.583 0 0 0-.179.434v2.93c0 .172.06.316.18.433.118.117.26.175.423.175h2.616a.585.585 0 0 0 .423-.175.583.583 0 0 0 .18-.434zm-.037-6.326l.339-9.05a.404.404 0 0 0-.189-.351c-.163-.135-.313-.203-.452-.203H14.64c-.138 0-.288.068-.452.203-.125.086-.188.215-.188.388l.32 9.013c0 .123.063.224.188.304.126.08.277.12.452.12h2.484c.176 0 .324-.04.443-.12a.41.41 0 0 0 .198-.304z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-evernote"><path d="M7.998 8.648h2.245a.233.233 0 0 0 .232-.233s-.028-1.931-.028-2.468v-.006c0-.441.093-.825.253-1.148l.077-.144a.05.05 0 0 0-.026.014l-4.359 4.34a.05.05 0 0 0-.016.025c.09-.044.213-.106.23-.113.38-.172.84-.267 1.392-.267M24.196 6.56c-.553-.2-1.675-.408-3.084-.575-1.134-.134-2.467-.123-3.272-.098-.097-.665-.56-1.272-1.08-1.482-1.384-.56-3.523-.424-4.071-.27-.437.123-.92.373-1.188.76-.18.258-.297.59-.298 1.051 0 .262.007.878.014 1.426.006.548.014 1.04.014 1.043a.887.887 0 0 1-.884.888H8.103c-.479 0-.845.08-1.124.208-.28.127-.478.3-.628.503-.3.404-.352.902-.351 1.411 0 0 .004.416.104 1.22.083.622.756 4.971 1.394 6.294.248.514.413.73.9.956 1.083.466 3.559.984 4.72 1.133 1.158.148 1.885.46 2.318-.451.002-.003.087-.227.204-.557.377-1.144.43-2.16.43-2.894 0-.075.108-.078.108 0 0 .519-.098 2.354 1.283 2.847.545.194 1.676.367 2.826.502 1.039.12 1.793.53 1.793 3.208 0 1.628-.34 1.851-2.122 1.851-1.444 0-1.994.038-1.994-1.113 0-.932.917-.834 1.596-.834.304 0 .083-.226.083-.8 0-.572.357-.902.02-.91-2.35-.066-3.733-.003-3.733 2.947 0 2.679 1.021 3.176 4.357 3.176 2.614 0 3.536-.086 4.616-3.45.213-.663.73-2.69 1.043-6.092.197-2.15-.187-8.644-.491-10.282-.178-.958-.746-1.43-1.259-1.616zm-3.3 8.792a4.75 4.75 0 0 0-.923.056c.081-.66.353-1.473 1.316-1.439 1.066.037 1.216 1.049 1.22 1.734-.45-.201-1.006-.33-1.613-.35"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-facebook"><path fill-rule="evenodd" d="M24.897 6H7.103C6.494 6 6 6.494 6 7.103v17.794C6 25.506 6.494 26 7.103 26h9.587v-7.734h-2.604v-3.028h2.604V13.01c0-2.582 1.579-3.99 3.882-3.99.777-.001 1.552.038 2.325.118v2.7H21.31c-1.255 0-1.5.593-1.5 1.469v1.927h3l-.39 3.028h-2.627V26h5.104c.609 0 1.103-.494 1.103-1.103V7.103C26 6.494 25.506 6 24.897 6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-file"><path d="M19 6l5 5h-4c-.556 0-1-.448-1-1V6zm5 7v11.192c0 .995-.808 1.808-1.804 1.808H9.804A1.808 1.808 0 0 1 8 24.2V7.74C8 6.602 8.627 6 9.778 6H17v4.994c0 1.12.898 2.006 2.006 2.006H24z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-flickr"><path d="M11 20c-2.212 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 0 8zm10.001 0a4 4 0 1 1-.002-8 4 4 0 0 1 .002 8z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gdrive"><path d="M19.461 6l7.109 12h-7.004L12.539 6h6.922zm-9.27 19l3.467-6H27l-3.466 6H10.192zM5 18.841l6.618-11.36 3.566 5.929-6.722 11.36L5 18.84z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gphotos"><path d="M21.845 21.452l-2.562-4.03h6.69l-4.128 4.03zm-5.758-3.986L14.533 16.1l1.38-1.566 1.555 1.366-1.38 1.566zm-1.5 8.512l-4.037-4.121 4.036-2.559v6.68zm-8.56-11.4l4.128-4.03 2.562 4.03h-6.69zm11.387-8.555l4.036 4.12-4.036 2.559v-6.68zM28.479 15.9h-5.01v-5.757l-6.866-6.912c-.397-.4-.713-.267-.713.29v5.013h-5.735l-6.924 6.854c-.4.396-.267.712.29.712h5.01v5.757l6.866 6.912c.397.4.713.267.713-.29v-5.012h5.735l6.924-6.855c.4-.396.267-.712-.29-.712z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-huddle"><path d="M13.63 14.39c.07-.102.17-.26.2-.313 1.474-2.683 6.857-2.686 8.49 1.002.43.968.67 1.97.675 3.023.008 1.978.004 3.957.002 5.936 0 1.192-.68 1.945-1.763 1.962-1.087.016-1.856-.766-1.865-1.944-.014-1.874.003-3.749-.006-5.623-.006-1.351-.654-2.388-1.719-2.793-1.775-.675-3.59.305-3.892 2.159-.122.747-.104 1.52-.114 2.281-.016 1.336-.002 2.673-.005 4.01-.003 1.125-.669 1.866-1.707 1.907-1.06.042-1.828-.668-1.922-1.78-.007-.086-.003-.173-.003-.26 0-5.31-.002-10.622.002-15.932 0-1.2.731-2.016 1.79-2.025 1.05-.01 1.832.74 1.837 1.792.01 2.013.003 4.026.005 6.04 0 .12.002.391-.005.558"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-instagram"><path d="M16 5c2.987 0 3.362.013 4.535.066 1.171.054 1.97.24 2.67.511a5.391 5.391 0 0 1 1.949 1.27 5.392 5.392 0 0 1 1.269 1.948c.272.7.457 1.499.51 2.67.054 1.173.067 1.548.067 4.535s-.013 3.362-.066 4.535c-.054 1.171-.24 1.97-.511 2.67a5.392 5.392 0 0 1-1.27 1.949 5.391 5.391 0 0 1-1.948 1.269c-.7.271-1.499.457-2.67.51-1.173.054-1.548.067-4.535.067s-3.362-.013-4.535-.066c-1.171-.054-1.97-.24-2.67-.511a5.392 5.392 0 0 1-1.949-1.27 5.391 5.391 0 0 1-1.268-1.948c-.273-.7-.458-1.499-.512-2.67C5.013 19.362 5 18.987 5 16s.013-3.362.066-4.535c.054-1.171.24-1.97.512-2.67a5.391 5.391 0 0 1 1.268-1.949 5.392 5.392 0 0 1 1.949-1.269c.7-.271 1.499-.457 2.67-.51C12.638 5.012 13.013 5 16 5zm0 1.982c-2.937 0-3.285.011-4.445.064-1.072.049-1.655.228-2.042.379-.514.2-.88.438-1.265.823a3.41 3.41 0 0 0-.823 1.264c-.15.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.072.228 1.655.379 2.043.2.513.438.88.823 1.264.385.385.751.624 1.265.823.387.15.97.33 2.042.379 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.072-.049 1.655-.228 2.042-.379.514-.2.88-.438 1.265-.823.385-.385.624-.751.823-1.264.15-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.072-.228-1.655-.379-2.043-.2-.513-.438-.88-.823-1.264a3.408 3.408 0 0 0-1.265-.823c-.387-.15-.97-.33-2.042-.379-1.16-.053-1.508-.064-4.445-.064zm0 3.37a5.649 5.649 0 1 1 0 11.297 5.649 5.649 0 0 1 0-11.298zm0 9.315a3.667 3.667 0 1 0 0-7.334 3.667 3.667 0 0 0 0 7.334zm7.192-9.539a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-menu"><path d="M7.5 10a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-more"><path d="M21 16a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-onedrive"><path d="M11.715 16.427c.584-2.413 2.699-4.177 5.209-4.177 1.483 0 2.873.621 3.878 1.7.425-.14.922-.248 1.364-.258v-.16c0-3.054-2.214-5.532-4.944-5.532-1.952 0-3.624 1.278-4.428 3.115a3.55 3.55 0 0 0-2.033-.658c-2.142 0-3.877 1.94-3.877 4.336 0 .258.028.51.068.754-1.652.167-2.946 1.9-2.946 3.79 0 .02.005.037.005.056-.001.017-.011.035-.011.052 0 .757.257 1.449.673 2.007a3.14 3.14 0 0 0 2.568 1.317h1.513a4.49 4.49 0 0 1-.477-1.987c-.001-2.138 1.476-3.93 3.438-4.355zm13.752 2.375c-.03 0-.06.01-.09.01.008-.09.026-.18.026-.273 0-1.812-1.431-3.279-3.198-3.279-.703 0-1.347.24-1.877.635-.655-1.249-1.924-2.107-3.405-2.107-2.146 0-3.885 1.784-3.885 3.984 0 .029.008.053.009.082a2.764 2.764 0 0 0-.431-.045c-1.602 0-2.898 1.33-2.898 2.973 0 .205.02.406.059.599C10.05 22.87 11.322 24 12.856 24h12.847v-.023C26.99 23.85 28 22.753 28 21.402c0-1.435-1.134-2.6-2.533-2.6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-remove"><path d="M22.142 24.009c-.078 1.1-1.044 1.991-2.15 1.991h-7.983c-1.11 0-2.073-.897-2.151-1.991l-.786-11.002A.924.924 0 0 1 10.007 12h11.986c.556 0 .975.45.935 1.007l-.786 11.002zM13 7V6c0-.556.444-1 .99-1h4.02A1 1 0 0 1 19 6v1h4c.556 0 1 .447 1 .999v1.002A.997.997 0 0 1 23 10H9c-.555 0-1-.447-1-.999V7.999A.996.996 0 0 1 9 7h4z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-uploadcare"><path fill="#ffd800" d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-url"><path d="M16 5c6.074 0 11 4.926 11 11s-4.926 11-11 11S5 22.074 5 16 9.926 5 16 5zm6.076 6.327a.992.992 0 1 0-1.403-1.403l-1.128 1.128c-1.431-.92-3.47-.768-4.697.461l-3.186 3.185a3.7 3.7 0 0 0-1.09 2.636c0 .748.22 1.46.624 2.067l-1.272 1.272a.992.992 0 1 0 1.402 1.403l1.273-1.272c.606.405 1.32.623 2.067.623.997 0 1.933-.386 2.634-1.089l3.187-3.186a3.729 3.729 0 0 0 .464-4.7l1.125-1.125zm-4.252 3.841a.982.982 0 0 0 .701-.29l.95-.95c.067.188.114.385.114.591 0 .466-.178.904-.505 1.23l-3.186 3.187c-.472.47-1.197.588-1.813.382l.793-.792a.992.992 0 1 0-1.404-1.404l-.801.802a1.752 1.752 0 0 1-.115-.59c0-.468.179-.905.506-1.232l3.186-3.186a1.736 1.736 0 0 1 1.23-.507c.207 0 .404.049.592.116l-.948.95a.992.992 0 0 0 .7 1.693z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-vk"><path d="M27.791 21.484c-.416-.767-1.212-1.708-2.386-2.824l-.038-.038c-.558-.532-.895-.882-1.037-1.06-.258-.341-.316-.686-.175-1.036.1-.264.475-.821 1.125-1.673.341-.451.612-.813.812-1.086 1.441-1.959 2.066-3.21 1.874-3.756l-.074-.127c-.05-.077-.18-.147-.387-.211-.209-.064-.475-.075-.8-.032l-3.599.025a.457.457 0 0 0-.25.007l-.163.038-.062.032-.05.039a.56.56 0 0 0-.137.134.882.882 0 0 0-.125.223 21.072 21.072 0 0 1-1.337 2.875 27.31 27.31 0 0 1-.85 1.373c-.258.388-.475.673-.65.856a4.57 4.57 0 0 1-.475.44c-.141.112-.25.158-.324.141a8.987 8.987 0 0 1-.213-.05.843.843 0 0 1-.281-.314 1.425 1.425 0 0 1-.144-.498c-.025-.2-.04-.373-.044-.518-.003-.144-.002-.349.007-.613.008-.264.012-.443.012-.536 0-.324.007-.675.019-1.054l.031-.901c.009-.222.013-.456.013-.703 0-.247-.015-.44-.044-.581a2.02 2.02 0 0 0-.131-.409.684.684 0 0 0-.256-.307 1.426 1.426 0 0 0-.419-.172c-.441-.102-1.004-.158-1.687-.166-1.55-.017-2.545.085-2.986.307a1.69 1.69 0 0 0-.475.383c-.15.187-.171.29-.063.306.5.077.854.26 1.062.55l.075.153c.059.11.117.307.175.588.059.28.096.592.113.932.041.622.041 1.154 0 1.597-.042.443-.081.788-.119 1.035a2.107 2.107 0 0 1-.169.6 2.55 2.55 0 0 1-.15.281.217.217 0 0 1-.062.064.918.918 0 0 1-.337.064c-.117 0-.259-.06-.425-.179a3.024 3.024 0 0 1-.519-.492c-.179-.208-.38-.5-.606-.875a15.385 15.385 0 0 1-.7-1.328l-.2-.37a32.156 32.156 0 0 1-.512-1.042 20.306 20.306 0 0 1-.575-1.323.84.84 0 0 0-.3-.408l-.062-.039a.85.85 0 0 0-.2-.108 1.304 1.304 0 0 0-.287-.083L4.8 9.64c-.35 0-.587.081-.712.243l-.05.077a.421.421 0 0 0-.038.204c0 .094.025.209.075.345.5 1.201 1.043 2.36 1.63 3.475C6.294 15.1 6.804 16 7.237 16.68c.433.681.875 1.324 1.325 1.929.45.604.748.992.893 1.162.146.17.26.298.344.384l.312.306c.2.205.494.45.881.735.388.285.817.566 1.287.843.471.277 1.019.503 1.644.677a5.564 5.564 0 0 0 1.824.211h1.437c.292-.026.512-.12.662-.281l.05-.064a.858.858 0 0 0 .094-.236c.029-.107.044-.224.044-.351a4.301 4.301 0 0 1 .08-.99c.063-.294.134-.516.213-.665a1.632 1.632 0 0 1 .482-.562.806.806 0 0 1 .1-.045c.2-.068.434-.002.705.199.271.2.525.447.763.74.237.295.522.625.856.99.333.367.625.64.874.818l.25.154c.167.102.384.196.65.28.266.086.5.107.7.065l3.199-.051c.316 0 .562-.054.737-.16.175-.107.279-.224.312-.351.034-.128.035-.273.007-.435a1.632 1.632 0 0 0-.088-.338 1.694 1.694 0 0 0-.082-.16z"/></symbol></svg>\n');   return __p.join(''); };;uploadcare.templates.JST["progress__text"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--progress__text-container">\n  <div class="uploadcare--progress__text"></div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["styles"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('.uploadcare--jcrop-handle{box-sizing:border-box;padding:12.5px;width:45px;height:45px;background:transparent;z-index:2147483621}@media (min-width:760px){.uploadcare--jcrop-handle{height:35px;width:35px;padding:10px}}.uploadcare--jcrop-handle:before{content:"";display:block;width:20px;height:20px;background:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2);border-radius:50%}@media (min-width:760px){.uploadcare--jcrop-handle:before{height:15px;width:15px}}.uploadcare--jcrop-handle.ord-nw{margin-top:-22.5px;margin-left:-22.5px;top:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-nw{margin-left:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-ne{margin-top:-22.5px;margin-right:-22.5px;top:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-ne{margin-right:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-se{margin-bottom:-22.5px;margin-right:-22.5px;bottom:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-se{margin-right:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-handle.ord-sw{margin-bottom:-22.5px;margin-left:-22.5px;bottom:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-sw{margin-left:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-hline{width:100%;height:1px!important;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-hline.bottom{bottom:0}.uploadcare--jcrop-vline{width:1px!important;height:100%;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-vline.right{right:0}.uploadcare--jcrop-tracker{height:100%;width:100%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uploadcare--jcrop-holder img{max-width:none;max-height:none}.uploadcare--text{margin:0 0 10px;padding:0;font-size:17.5px;line-height:25px}.uploadcare--text:empty{display:none}.uploadcare--text_muted{color:#a4a2a1}.uploadcare--text_pre{box-sizing:border-box;overflow-x:auto;padding:20px;max-width:100%;background:#e3e1e1;font-family:monospace;white-space:pre;text-align:left}.uploadcare--text_size_small{font-size:15px;line-height:20px}.uploadcare--text_size_medium{font-size:20px;font-weight:700;line-height:25px}.uploadcare--text_size_large{font-size:22px;font-weight:700;line-height:25px}.uploadcare--text_size_extra-large{font-size:35px;line-height:45px}@media (min-width:760px){.uploadcare--text_size_extra-large{font-size:42.5px;line-height:50px}}.uploadcare--icon{all:initial;color:inherit;fill:currentColor;margin:0;padding:0;max-width:100%;width:32px;height:32px;cursor:inherit}.uploadcare--link,.uploadcare--link:link,.uploadcare--link:visited{cursor:pointer;color:#157cfc;text-decoration:underline}.uploadcare--link:focus,.uploadcare--link:hover{color:#3891ff;text-decoration:none}.uploadcare--link:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--link:active{color:#0969ee}.uploadcare--button{all:initial;-ms-flex-negative:0;flex-shrink:0;display:inline-block;overflow:hidden;box-sizing:border-box;margin:0;padding:10px;width:auto;min-width:100px;height:auto;min-height:0;border-radius:6px;border:1px solid #157cfc;background:transparent;color:#157cfc;cursor:default;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-family:inherit;font-size:15px;font-weight:400;font-style:normal;line-height:20px;box-shadow:none;text-shadow:none;transition:background .3s,color .3s,border .3s}.uploadcare--button svg{pointer-events:none}.uploadcare--button:focus,.uploadcare--button:hover{background:transparent;border-color:#3891ff;color:#3891ff;font-weight:400;font-style:normal;box-shadow:none;text-shadow:none}.uploadcare--button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--button:active{border-color:#0969ee;color:#0969ee}.uploadcare--button:disabled,.uploadcare--button[aria-disabled=true]{background:transparent!important;border-color:#d4d2d2!important;color:#d4d2d2!important;cursor:not-allowed}@media (min-width:760px){.uploadcare--button{padding:10px 20px;font-size:17.5px;line-height:25px}}.uploadcare--button_icon{padding:14px;min-width:0;width:60px;height:60px}.uploadcare--button_muted{border-color:transparent!important;color:#a4a2a1;border-radius:0}.uploadcare--button_muted:focus,.uploadcare--button_muted:hover{color:#157cfc}.uploadcare--button_muted:disabled,.uploadcare--button_muted[aria-disabled=true]{border-color:transparent!important}.uploadcare--button_overlay{background:rgba(53,53,53,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:focus,.uploadcare--button_overlay:hover{background:hsla(0,0%,40%,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:active{background:rgba(33,33,33,.5)}.uploadcare--button_primary{background:#157cfc;border-color:#157cfc;color:#fff}.uploadcare--button_primary:focus,.uploadcare--button_primary:hover{background:#3891ff;border-color:#3891ff;color:#fff}.uploadcare--button_primary:active{background:#0969ee;border-color:#0969ee}.uploadcare--button_primary:disabled,.uploadcare--button_primary[aria-disabled=true]{background:#d4d2d2!important;border-color:#d4d2d2!important;color:#fff!important}.uploadcare--button_size_big{padding:10px 25px;font-size:20px;line-height:30px}.uploadcare--button_size_small{padding:5px 10px;min-width:80px;font-size:15px;line-height:20px}.uploadcare--input{-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-negative:0;flex-shrink:0;display:block;box-sizing:border-box;margin:5px 0 15px;padding:10px 15px;width:100%;font-size:17.5px;line-height:25px;background:#fff;color:#353535;border:1px solid #a4a2a1;border-radius:2px;box-shadow:none}.uploadcare--input:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--input::-webkit-input-placeholder{color:#a4a2a1}.uploadcare--input:-ms-input-placeholder,.uploadcare--input::-ms-input-placeholder{color:#a4a2a1}.uploadcare--input::placeholder{color:#a4a2a1}.uploadcare--form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;max-width:400px;width:100%}.uploadcare--error{color:#e66a6a}.uploadcare--powered-by{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7.5px 0;font-size:12.5px;line-height:15px;color:#fff;text-align:center}.uploadcare--powered-by__link{color:inherit!important;text-decoration:none!important}.uploadcare--powered-by__link,.uploadcare--powered-by__logo{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.uploadcare--powered-by__logo{width:20px;height:15px;vertical-align:text-bottom}.uploadcare--progress__canvas{width:100%;height:100%}.uploadcare--progress__text{display:table-cell;vertical-align:middle;text-align:center;font-size:60%;line-height:1}.uploadcare--progress__text-container{width:100%;height:100%;display:table;white-space:normal}.uploadcare--progress_type_canvas{padding:2px;width:32px;height:32px;color:#ffd800;border-color:#e3e1e1}.uploadcare--progressbar{overflow:hidden;width:100%;height:100%;background:#e3e1e1;border-radius:6px}.uploadcare--progressbar__value{width:0;height:100%;background:#ffd800}.uploadcare--menu{-ms-flex-negative:0;flex-shrink:0;width:100%;width:100vw;max-width:100%;height:100%;overflow:hidden}@media (min-width:760px){.uploadcare--menu{width:60px}}@media (max-width:759px){.uploadcare--menu{height:60px}}.uploadcare--menu__icon{-ms-flex-negative:0;flex-shrink:0;margin:14px}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__item_current:not(.uploadcare--menu__item_tab_file) .uploadcare--menu__icon{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-left:0}}.uploadcare--menu__item{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:60px;overflow:hidden;cursor:default;background:#e3e1e1;color:#666;transition:background .3s,color .3s}@media (min-width:760px){.uploadcare--menu__item{width:60px}}.uploadcare--menu__item:focus,.uploadcare--menu__item:hover{color:#157cfc}.uploadcare--menu__item:active{background-color:#fff;color:#0969ee}.uploadcare--menu__item:focus{outline:none;box-shadow:inset 0 0 0 2px rgba(21,124,252,.5)}.uploadcare--menu__item[aria-disabled=true]{background:#e3e1e1!important;color:#666!important;cursor:not-allowed}.uploadcare--menu__item:after{content:attr(title);-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;height:30px;font-size:17px;line-height:30px;white-space:nowrap}@media (min-width:760px){.uploadcare--menu__item:after{overflow:hidden;max-width:170px;text-overflow:ellipsis}}.uploadcare--menu__item_current,.uploadcare--menu__item_current:active,.uploadcare--menu__item_current:focus,.uploadcare--menu__item_current:hover{background-color:#fff;color:#353535}.uploadcare--menu__item_hidden{display:none}.uploadcare--menu__items{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding-right:100vw;overflow-y:auto;overflow-x:hidden;background:#e3e1e1}.uploadcare--menu__toggle{width:60px;height:60px;transition:none}.uploadcare--menu__toggle:focus{outline-offset:-2px}@media (min-width:760px){.uploadcare--menu__toggle{display:none}}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__toggle-icon_back{display:none}}@media (max-width:759px){.uploadcare--menu_opened{position:relative;z-index:1000;height:100%}.uploadcare--menu_opened .uploadcare--menu__toggle{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;text-align:left;background:#e3e1e1}.uploadcare--menu_opened .uploadcare--menu__toggle-icon_menu{display:none}.uploadcare--menu_opened .uploadcare--menu__items{height:calc(100% - 60px)}}.uploadcare--footer{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;margin-top:10px;padding:5px 20px 15px}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer{display:block}}.uploadcare--footer:empty{display:none}.uploadcare--footer__additions{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;padding:0 0 15px;text-align:center}@media (max-width:759px) and (orientation:landscape){.uploadcare--footer__additions{padding:0 20px}}@media (max-width:500px) and (orientation:landscape){.uploadcare--footer__additions{display:none}}@media (min-width:760px){.uploadcare--footer__additions{padding:0 20px}}.uploadcare--footer__additions:empty{visibility:hidden;padding:0}.uploadcare--footer__button{margin-top:5px;margin-bottom:5px}.uploadcare--footer__button:first-of-type{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.uploadcare--footer__button:nth-of-type(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}@media (max-width:759px){.uploadcare--footer__button{max-width:calc(50% - 20px)}}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer__button:first-of-type{float:left}.uploadcare--footer__button:nth-of-type(2){float:right}}.uploadcare--dragging .uploadcare--draganddrop{margin:20px;background:#e3e1e1;color:#a4a2a1;border:2px dashed;border-radius:20px}.uploadcare--draganddrop.uploadcare--dragging{color:#157cfc!important}@media (max-width:759px){.uploadcare--draganddrop__title{display:none}}.uploadcare--draganddrop:not(.uploadcare--draganddrop_supported) .uploadcare--draganddrop__supported,.uploadcare--draganddrop_supported .uploadcare--draganddrop__not-supported,.uploadcare--dragging .uploadcare--dialog__close,.uploadcare--dragging__show{display:none}.uploadcare--dragging .uploadcare--dragging__show{display:block}.uploadcare--dragging .uploadcare--dragging__hide{display:none}.uploadcare--file{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;padding:5px 0 5px 20px;color:#353535;cursor:default}.uploadcare--file:hover{background:rgba(21,124,252,.1)}.uploadcare--file__description{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;padding-right:20px;text-align:left}.uploadcare--file__description:focus,.uploadcare--file__description:focus .uploadcare--file__preview,.uploadcare--file__description:hover,.uploadcare--file__description:hover .uploadcare--file__preview{color:#157cfc}.uploadcare--file__description:active,.uploadcare--file__description:active .uploadcare--file__preview{color:#0969ee}.uploadcare--file__description:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:2px}.uploadcare--file__icon{max-width:100%;max-height:100%}.uploadcare--file__name{overflow:hidden;margin:0;max-width:calc(100vw - 200px);line-height:25px;white-space:nowrap;text-overflow:ellipsis;transition:color .3s}@media (min-width:760px){.uploadcare--file__name{max-width:350px}}.uploadcare--file__preview{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;float:left;box-sizing:border-box;margin-right:10px;padding:2px;width:60px;height:60px;overflow:hidden;border:1px solid;border-radius:6px;background:transparent;color:#e3e1e1;transition:border .3s}.uploadcare--file__progressbar{-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:center;align-self:center;margin:0 10px;width:60px;height:10px}.uploadcare--file__size{font-size:12.5px;color:#a4a2a1}.uploadcare--file_status_error,.uploadcare--file_status_error .uploadcare--file__description,.uploadcare--file_status_error .uploadcare--file__preview{color:#e66a6a!important}.uploadcare--file_status_error .uploadcare--file__name{color:hsla(0,71%,66%,.5)!important}.uploadcare--file_status_error .uploadcare--file__progressbar,.uploadcare--file_status_error .uploadcare--file__size,.uploadcare--file_status_uploaded .uploadcare--file__progressbar{display:none}.uploadcare--file_status_uploading,.uploadcare--file_status_uploading .uploadcare--file__description{color:#353535!important}.uploadcare--file_status_uploading .uploadcare--file__name{max-width:calc(100vw - 280px)}@media (min-width:760px){.uploadcare--file_status_uploading .uploadcare--file__name{max-width:270px}}.uploadcare--file_status_uploading .uploadcare--file__preview{background:#ffd800;color:#ffd800!important}.uploadcare--files{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;width:100%;height:100%}.uploadcare--files__item{-ms-flex-negative:0;flex-shrink:0}.uploadcare--crop-sizes{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.uploadcare--crop-sizes__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;height:65px;background:transparent;border-color:transparent;color:#353535}.uploadcare--crop-sizes__item:focus,.uploadcare--crop-sizes__item:hover{background:transparent;border-color:transparent;color:#157cfc}.uploadcare--crop-sizes__item:active{background:transparent;border-color:transparent;color:#0969ee}.uploadcare--crop-sizes__item:disabled,.uploadcare--crop-sizes__item[aria-disabled=true]{border-color:transparent!important}.uploadcare--crop-sizes__item:after{content:attr(data-caption);display:block;font-size:14px;line-height:25px;text-transform:uppercase}@media (max-width:400px),(max-width:600px) and (orientation:landscape){.uploadcare--crop-sizes__item:after{font-size:12px}}.uploadcare--crop-sizes__item:before{content:"";display:block;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;margin:1px 0;width:6px;height:6px;background:transparent;border-radius:50%}.uploadcare--crop-sizes__item_current:active,.uploadcare--crop-sizes__item_current:focus,.uploadcare--crop-sizes__item_current:hover{color:#353535}.uploadcare--crop-sizes__item_current:before{background:#157cfc}.uploadcare--crop-sizes__icon{box-sizing:border-box;width:30px;height:30px;border:2px solid;border-radius:2px;color:inherit;-webkit-transform:scale(.666);transform:scale(.666)}.uploadcare--crop-sizes__icon_free{border:none;border-radius:0;-webkit-transform:none;transform:none}.uploadcare--file-source{margin:10px;border-color:#e3e1e1;background:#e3e1e1;color:#353535}.uploadcare--file-source_all{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;border-color:currentColor;background:transparent;color:#157cfc}.uploadcare--file-sources{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}@media (max-width:759px) and (max-height:450px),(min-width:760px){.uploadcare--file-sources{display:none}}.uploadcare--file-sources__caption{margin:15px 0 5px}@media (max-width:759px) and (max-height:550px){.uploadcare--file-sources__item:nth-child(4),.uploadcare--file-sources__item:nth-child(5),.uploadcare--file-sources__item:nth-child(6){display:none}}.uploadcare--file-sources__items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:300px}.uploadcare--file-sources__items:empty,.uploadcare--file-sources__items:not(.uploadcare--file-sources__items_many) .uploadcare--file-source__all{display:none}.uploadcare--media{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:100%}.uploadcare--media__image{position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.uploadcare--media__video{all:initial;width:auto;max-width:100%;height:auto;min-height:100px;max-height:100%}@media (max-width:759px) and (max-height:379px){.uploadcare--media__video{max-height:120px}}@media (max-width:759px) and (min-height:380px) and (max-height:499px){.uploadcare--media__video{max-height:160px}}@media (max-width:759px) and (min-height:500px),(min-width:760px){.uploadcare--media__video{max-height:300px}}.uploadcare--camera__button{margin:5px 10px}.uploadcare--camera__button_type_mirror{position:absolute;top:15px;left:50%;margin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.uploadcare--camera__video{transition:-webkit-transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1),-webkit-transform .8s cubic-bezier(.23,1,.32,1)}.uploadcare--camera__video_mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.uploadcare--camera__video-container{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;position:relative;margin-bottom:10px}.uploadcare--camera_status_denied .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_capture,.uploadcare--camera_status_denied .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_denied .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_denied .uploadcare--camera__controls,.uploadcare--camera_status_denied .uploadcare--camera__not-found,.uploadcare--camera_status_denied .uploadcare--camera__please-allow,.uploadcare--camera_status_denied .uploadcare--camera__video-container,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_capture,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_retry,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_not-founded .uploadcare--camera__controls,.uploadcare--camera_status_not-founded .uploadcare--camera__please-allow,.uploadcare--camera_status_not-founded .uploadcare--camera__video-container,.uploadcare--camera_status_ready .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_ready .uploadcare--camera__button_type_retry,.uploadcare--camera_status_ready .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_ready .uploadcare--camera__not-found,.uploadcare--camera_status_ready .uploadcare--camera__please-allow,.uploadcare--camera_status_recording .uploadcare--camera__button_type_capture,.uploadcare--camera_status_recording .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_recording .uploadcare--camera__button_type_retry,.uploadcare--camera_status_recording .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_recording .uploadcare--camera__not-found,.uploadcare--camera_status_recording .uploadcare--camera__please-allow,.uploadcare--camera_status_requested .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_capture,.uploadcare--camera_status_requested .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_requested .uploadcare--camera__button_type_retry,.uploadcare--camera_status_requested .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_requested .uploadcare--camera__controls,.uploadcare--camera_status_requested .uploadcare--camera__not-found,.uploadcare--camera_status_requested .uploadcare--camera__video-container{display:none}.uploadcare--crop-widget>.uploadcare--preview__image{-webkit-filter:brightness(60%);filter:brightness(60%);-webkit-transform:none;transform:none}.uploadcare--tab{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;text-align:center}.uploadcare--tab,.uploadcare--tab__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploadcare--tab__content{-ms-flex-negative:1;flex-shrink:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;padding:0 20px}.uploadcare--tab__header{-ms-flex-negative:0;flex-shrink:0;padding:0 20px;overflow:hidden}@media (min-width:760px){.uploadcare--tab__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:60px;height:60px}}.uploadcare--tab__iframe{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;height:100%;border:0;opacity:0}.uploadcare--tab__title{margin-top:10px;margin-bottom:10px}.uploadcare--tab:not(.uploadcare--tab_current),.uploadcare--tab_name_preview.uploadcare--tab_current~.uploadcare--panel__footer{display:none}.uploadcare--tab_remote.uploadcare--tab_current~.uploadcare--panel__footer{margin-top:0}.uploadcare--panel{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;box-sizing:border-box;overflow:hidden;width:100%;height:500px;border:1px solid #a4a2a1;border-radius:6px;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px}@media (min-width:760px){.uploadcare--panel{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.uploadcare--panel__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.uploadcare--panel__file-counter{display:inline}.uploadcare--panel__footer{padding-top:15px;background:#fff9d8}.uploadcare--panel__icon{box-sizing:border-box;padding:3px}.uploadcare--panel__menu_hidden{display:none}.uploadcare--panel__message_hidden{color:#d4d2d2}.uploadcare--panel__powered-by{background:#353535;color:hsla(0,0%,100%,.5)}@media (min-width:760px){.uploadcare--panel__powered-by{display:none}}.uploadcare--tab:not(:nth-child(2)).uploadcare--tab_current~.uploadcare--panel__powered-by{display:none}@media (max-width:759px){.uploadcare--panel_menu-hidden .uploadcare--tab__header{padding:6px 60px 0;min-height:60px}}.uploadcare--panel:not(.uploadcare--panel_multiple) .uploadcare--panel__footer{display:none}.uploadcare--panel_multiple .uploadcare--tab_name_preview{height:100%}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__content{padding-left:0;padding-right:0}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer{position:relative;margin-top:0;padding-top:15px}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer:before{content:"";position:absolute;top:0;left:20px;width:calc(100% - 40px);height:1px;background:#e3e1e1}.uploadcare--preview__content{overflow:hidden}.uploadcare--preview__content_crop{padding:10px 20px}.uploadcare--dialog{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:fixed;top:0;left:0;z-index:2147483647;box-sizing:border-box;overflow:hidden;width:100%;height:100%;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px;opacity:0;transition:opacity .33s cubic-bezier(.05,.7,.25,1)}@media (min-width:760px){.uploadcare--dialog{-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;background:rgba(0,0,0,.5)}}@media (min-width:760px) and (max-height:559px){.uploadcare--dialog{padding-top:30px}}@media (min-width:760px) and (min-height:560px){.uploadcare--dialog{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.uploadcare--dialog__close{position:absolute;top:0;right:0;z-index:49}.uploadcare--dialog__close:focus{outline-offset:-2px}.uploadcare--dialog__container{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;overflow:hidden}@media (max-width:759px){.uploadcare--dialog__container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:100%}}@media (min-width:760px){.uploadcare--dialog__container{width:calc(100% - 60px);max-width:900px;height:calc(100% - 60px);min-height:500px;max-height:660px;border-radius:6px}}@media (min-width:1210px){.uploadcare--dialog__container{max-width:1050px}}.uploadcare--dialog__panel{height:100%;border:none;border-radius:0}@media (min-width:1210px){.uploadcare--dialog__panel .uploadcare--menu,.uploadcare--dialog__panel .uploadcare--menu__item{width:250px}}.uploadcare--dialog__powered-by{-ms-flex-negative:0;flex-shrink:0}@media (max-width:759px){.uploadcare--dialog__powered-by{display:none}}.uploadcare--dialog_status_active{opacity:1}.uploadcare--widget{display:inline-block;vertical-align:baseline}.uploadcare--dragging .uploadcare--widget,.uploadcare--widget.uploadcare--dragging{position:relative}.uploadcare--widget__button{all:initial;display:inline-block;box-sizing:border-box;margin:0;padding:.4em 1em;width:auto;min-width:0;height:auto;min-height:0;border-radius:6px;border:none;background:#c3c3c3;color:#fff;cursor:default;text-align:center;white-space:nowrap;font:inherit;line-height:inherit;box-shadow:none;text-shadow:inherit;transition:background .3s}.uploadcare--widget__button:focus,.uploadcare--widget__button:hover{background:#b3b3b3;color:#fff;font:inherit;box-shadow:none;text-shadow:inherit}.uploadcare--widget__button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--widget__button:active{background:#b3b3b3}.uploadcare--widget__button:disabled{background:#c3c3c3;color:#fff;cursor:not-allowed}.uploadcare--widget__button_type_open{background:#157cfc;color:#fff}.uploadcare--widget__button_type_open:focus,.uploadcare--widget__button_type_open:hover{background:#3891ff}.uploadcare--widget__button_type_open:active{background:#0969ee}.uploadcare--widget__button_type_open:disabled{background:#c3c3c3}.uploadcare--widget__dragndrop-area{position:absolute;top:0;left:0;box-sizing:border-box;min-width:100%;min-height:100%;margin:0;padding:calc(.4em - 1.5px) 1em;font:inherit;line-height:inherit;text-align:center;white-space:nowrap;border:1.5px dashed;border-radius:6px;background:#e3e1e1;color:#a4a2a1;transition:color .3s;display:none}.uploadcare--dragging .uploadcare--widget__dragndrop-area{display:block}.uploadcare--widget.uploadcare--dragging .uploadcare--widget__dragndrop-area{color:#157cfc}.uploadcare--widget__file-name,.uploadcare--widget__file-size{display:inline}.uploadcare--widget__progress{display:inline-block;width:1.8em;height:1.8em;margin:0 .2em 0 0;padding:0;line-height:0;vertical-align:middle}.uploadcare--widget__text{display:inline-block;box-sizing:border-box;margin-right:.2em;padding:.4em 0;white-space:nowrap}.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_error .uploadcare--widget__button_type_remove,.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_loaded .uploadcare--widget__button_type_remove,.uploadcare--widget_option_clearable.uploadcare--widget_status_error .uploadcare--widget__button_type_open,.uploadcare--widget_status_error .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_error .uploadcare--widget__progress,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_open,.uploadcare--widget_status_loaded .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_ready .uploadcare--widget__button_type_remove,.uploadcare--widget_status_ready .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__text,.uploadcare--widget_status_started .uploadcare--widget__button_type_open,.uploadcare--widget_status_started .uploadcare--widget__button_type_remove{display:none}.uploadcare--page{width:auto;min-width:0;max-width:100%;height:auto;min-height:0;max-height:100%;overflow:hidden}.uploadcare--mouse-focused:focus{outline:none}\n\n');   return __p.join(''); };;uploadcare.templates.JST["tab-camera-capture"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">\n    ', ('' + __scope.t('dialog.tabs.camera.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n\n  <div class="uploadcare--camera__controls">\n    <button type="button"\n            class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_photo">\n      ', ('' + __scope.t('dialog.tabs.camera.capture')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n    <button type="button"\n            class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_video">\n      ', ('' + __scope.t('dialog.tabs.camera.startRecord')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n  </div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-camera"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ('' + __scope.t('dialog.tabs.camera.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n\n  <div class="uploadcare--media uploadcare--camera__video-container">\n    <video muted class="uploadcare--media__video uploadcare--camera__video uploadcare--camera__video_mirrored"></video>\n\n    <button type="button" class="uploadcare--button uploadcare--button_size_small uploadcare--button_overlay uploadcare--camera__button uploadcare--camera__button_type_mirror">\n      ', ('' + __scope.t('dialog.tabs.camera.mirror')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n  </div>\n\n  <div class="uploadcare--camera__controls">\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_start-record">\n      ', ('' + __scope.t('dialog.tabs.camera.startRecord')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_capture">\n      ', ('' + __scope.t('dialog.tabs.camera.capture')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_cancel-record">\n      ', ('' + __scope.t('dialog.tabs.camera.cancelRecord')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_stop-record">\n      ', ('' + __scope.t('dialog.tabs.camera.stopRecord')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n  </div>\n\n  <div class="uploadcare--camera__please-allow">\n    <div class="uploadcare--text uploadcare--text_size_medium">\n        ', ('' + __scope.t('dialog.tabs.camera.pleaseAllow.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n    <div class="uploadcare--text">\n        ', __scope.t('dialog.tabs.camera.pleaseAllow.text'), '\n    </div>\n  </div>\n\n  <div class="uploadcare--camera__not-found">\n    <div class="uploadcare--text uploadcare--text_size_medium">\n        ', ('' + __scope.t('dialog.tabs.camera.notFound.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n    <div class="uploadcare--text">\n        ', ('' + __scope.t('dialog.tabs.camera.notFound.text')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_retry">\n    ', ('' + __scope.t('dialog.tabs.camera.retry')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-file"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content uploadcare--draganddrop">\n  <div class="uploadcare--text uploadcare--text_size_extra-large uploadcare--dragging__show">\n    ', __scope.t('draghere'), '\n  </div>\n\n  <div class="uploadcare--draganddrop__title uploadcare--dragging__hide">\n    <div class="uploadcare--draganddrop__supported">\n      <div class="uploadcare--text uploadcare--text_size_extra-large">\n        ', __scope.t('dialog.tabs.file.drag'), '\n      </div>\n      <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted">\n        ', ('' + __scope.t('dialog.tabs.file.or')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n      </div>\n    </div>\n\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--draganddrop__not-supported">\n      ', __scope.t('dialog.tabs.file.nodrop'), '\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--tab__action-button needsclick  uploadcare--dragging__hide">\n    ', ('' + __scope.t('dialog.tabs.file.button')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n\n  <div class="uploadcare--file-sources uploadcare--dragging__hide">\n    <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted uploadcare--file-sources__caption">\n      ', ('' + __scope.t('dialog.tabs.file.also')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n    <div class="uploadcare--file-sources__items">\n      <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--file-source uploadcare--file-source_all uploadcare--file-sources_item">\n          <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n              <use xlink:href="#uploadcare--icon-more"></use>\n          </svg>\n      </button>\n    </div>\n  </div>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-error"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content uploadcare--preview__content uploadcare--error">\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n      ', ('' + __scope.t('dialog.tabs.preview.error.' + __scope.error + '.title') || __scope.t('dialog.tabs.preview.error.default.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n\n    <div class="uploadcare--text">', ('' + __scope.t('dialog.tabs.preview.error.' + __scope.error + '.text') || __scope.t('dialog.tabs.preview.error.default.text')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n\n    <button type="button" class="uploadcare--button uploadcare--preview__back">\n        ', ('' + __scope.t('dialog.tabs.preview.error.' + __scope.error + '.back') || __scope.t('dialog.tabs.preview.error.default.back')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-image"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ('' + __scope.t('dialog.tabs.preview.image.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--media"><!--\n      1162x684 is 1.5 size of conteiner\n      TODO Use picture and srcset for create responsive image\n    --><img\n        src="', ('' + __scope.src).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n        title="', ('' + (__scope.name || "")).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n        alt="', ('' + (__scope.name || "")).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '"\n      class="uploadcare--media__image uploadcare--preview__image"\n    />\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <div class="uploadcare--footer__additions">\n    ');   if(__scope.crop) {     ;     __p.push('\n    <div class="uploadcare--crop-sizes">\n      <div role="button" tabindex="0"\n           class="uploadcare--button uploadcare--button_icon uploadcare--crop-sizes__item" data-caption="free">\n        <div class="uploadcare--crop-sizes__icon"></div>\n      </div>\n    </div>\n    ');   }   ;   __p.push('\n  </div>\n\n  <!-- TODO Change Cancel to Remove -->\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.image.change')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-multiple-file"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--file uploadcare--files__item uploadcare--file_status_uploading">\n  <div class="uploadcare--file__description" tabindex="0">\n    <div class="uploadcare--file__preview"></div>\n    <div class="uploadcare--file__name">\n        ', ('' + __scope.t('dialog.tabs.preview.unknownName')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n    </div>\n    <div class="uploadcare--file__size"></div>\n    <div class="uploadcare--file__error"></div>\n  </div>\n\n  <div class="uploadcare--file__progressbar">\n    <div class="uploadcare--progressbar">\n      <div class="uploadcare--progressbar__value"></div>\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--file__remove">\n    <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n      <use xlink:href="#uploadcare--icon-remove"></use>\n    </svg>\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-multiple"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title"></div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--files"></div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <div class="uploadcare--footer__additions uploadcare--preview__message"></div>\n\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.multiple.clear')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.multiple.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-regular"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ('' + __scope.t('dialog.tabs.preview.regular.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--text uploadcare--preview__file-name">\n    ', ('' + (__scope.file.name || __scope.t('dialog.tabs.preview.unknownName'))).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '', ('' + __scope.utils.readableFileSize(__scope.file.size, '', ', ')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.change')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-unknown"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ('' + __scope.t('dialog.tabs.preview.unknown.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--text uploadcare--preview__file-name"></div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <!-- TODO Change Cancel to Remove -->\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.change')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.unknown.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-preview-video"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ('' + __scope.t('dialog.tabs.preview.video.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--media">\n    <video controls class="uploadcare--media__video uploadcare--preview__video"></video>\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ('' + __scope.t('dialog.tabs.preview.video.change')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ('' + __scope.t('dialog.tabs.preview.done')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n  </button>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["tab-url"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ('' + __scope.t('dialog.tabs.url.title')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n\n  <div class="uploadcare--text">', ('' + __scope.t('dialog.tabs.url.line1')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n  <div class="uploadcare--text">', ('' + __scope.t('dialog.tabs.url.line2')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n\n  <form class="uploadcare--form">\n    <input type="text" class="uploadcare--input" placeholder="', ('' + __scope.t('dialog.tabs.url.input')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '">\n    <button type="submit" class="uploadcare--button uploadcare--button_primary uploadcare--tab__action-button" type="submit">', ('' + __scope.t('dialog.tabs.url.button')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</button>\n  </form>\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["widget-button"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<button type="button" class="uploadcare--widget__button uploadcare--widget__button_type_', __scope.name, '">\n    ', ('' + __scope.caption).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n</button>\n');   return __p.join(''); };;uploadcare.templates.JST["widget-file-name"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--link uploadcare--widget__file-name"\n     tabindex="0" role="link">', ('' + __scope.utils.fitText(__scope.name, 20)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div><!--\n--><div class="uploadcare--widget__file-size">,\n    ', ('' + __scope.utils.readableFileSize(__scope.size)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '\n</div>\n');   return __p.join(''); };;uploadcare.templates.JST["widget"] = function(__scope) {   if(!__scope.__scope) {     __scope.__scope = { };   }   ;   var __p = [], print = function() {     __p.push.apply(__p, arguments);   };   __p.push('<div class="uploadcare--widget">\n  <div class="uploadcare--widget__dragndrop-area">', ('' + __scope.t('draghere')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;'), '</div>\n  <div class="uploadcare--widget__progress"></div>\n  <div class="uploadcare--widget__text"></div>\n</div>\n');   return __p.join(''); };;(function() {
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
          df.notify(.10);
          return ns.getExif(file).always(function(exif) {
            var e, isJPEG;
            df.notify(.2);
            isJPEG = op.state() === 'resolved';
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
        lastUpdate = $.now();
        updateProgress = function(i, loaded) {
          var total, _i, _len;
          progress[i] = loaded;
          if ($.now() - lastUpdate < 250) {
            return;
          }
          lastUpdate = $.now();
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
