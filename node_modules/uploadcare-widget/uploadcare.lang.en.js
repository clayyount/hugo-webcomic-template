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
  var key;

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
