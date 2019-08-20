(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.SlateHotkeys = {})));
}(this, (function (exports) { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  var object = parseHotkey(hotkey, options);
  var ret = event == null ? function (e) {
    return compareHotkey(object, e);
  } : compareHotkey(object, event);

  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (length == 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = true;
      }

      // If there's only one key, and it's not a modifier, ignore the shift key
      // because it will already be taken into accout by the `event.key` value.
      if (length == 1 && !modifier && byKey) {
        ret.shiftKey = null;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) continue;

    if (key == 'key') {
      actual = event.key.toLowerCase();
    } else if (key == 'which') {
      actual = expected == 91 && event.which == 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual != expected) return false;
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

exports.default = isHotkey;
exports.isHotkey = isHotkey;
exports.isCodeHotkey = isCodeHotkey;
exports.isKeyHotkey = isKeyHotkey;
exports.parseHotkey = parseHotkey;
exports.compareHotkey = compareHotkey;
exports.toKeyCode = toKeyCode;
exports.toKeyName = toKeyName;
});

unwrapExports(lib);
var lib_1 = lib.isHotkey;
var lib_2 = lib.isCodeHotkey;
var lib_3 = lib.isKeyHotkey;
var lib_4 = lib.parseHotkey;
var lib_5 = lib.compareHotkey;
var lib_6 = lib.toKeyCode;
var lib_7 = lib.toKeyName;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/**
 * Browser matching rules.
 *
 * @type {Array}
 */

var BROWSER_RULES = [['edge', /Edge\/([0-9\._]+)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)$/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['android', /Android\s([0-9\.]+)/], ['safari', /Version\/([0-9\._]+).*Safari/]];

/**
 * DOM event matching rules.
 *
 * @type {Array}
 */

var EVENT_RULES = [['beforeinput', function (el) {
  return 'onbeforeinput' in el;
}]];

/**
 * Operating system matching rules.
 *
 * @type {Array}
 */

var OS_RULES = [['ios', /os ([\.\_\d]+) like mac os/i], // must be before the macos rule
['macos', /mac os x/i], ['android', /android/i], ['firefoxos', /mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/i], ['windows', /windows\s*(?:nt)?\s*([\.\_\d]+)/i]];

var EVENTS = {};
var OS = void 0;

/**
 * Run the matchers when in browser.
 */

if (isBrowser) {
  var userAgent = window.navigator.userAgent;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = BROWSER_RULES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = slicedToArray(_ref, 2);

      var name = _ref2[0];
      var regexp = _ref2[1];

      if (regexp.test(userAgent)) {
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = OS_RULES[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _ref3 = _step2.value;

      var _ref4 = slicedToArray(_ref3, 2);

      var _name = _ref4[0];
      var _regexp = _ref4[1];

      if (_regexp.test(userAgent)) {
        OS = _name;
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var testEl = window.document.createElement('div');
  testEl.contentEditable = true;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = EVENT_RULES[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _ref5 = _step3.value;

      var _ref6 = slicedToArray(_ref5, 2);

      var _name2 = _ref6[0];
      var testFn = _ref6[1];

      EVENTS[_name2] = testFn(testEl);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

var IS_IOS = OS === 'ios';
var IS_MAC = OS === 'macos';

/**
 * Is Apple?
 *
 * @type {Boolean}
 */

var IS_APPLE = IS_IOS || IS_MAC;

/**
 * Hotkeys.
 *
 * @type {Function}
 */

var isBold = lib_3('mod+b');
var isItalic = lib_3('mod+i');

var isEnter = lib_3('enter');
var isShiftEnter = lib_3('shift+enter');
var isSplitBlock = function isSplitBlock(e) {
  return isEnter(e) || isShiftEnter(e);
};

var isBackspace = lib_3('backspace');
var isShiftBackspace = lib_3('shift+backspace');
var isDelete = lib_3('delete');
var isShiftDelete = lib_3('shift+delete');
var isDeleteBackward = function isDeleteBackward(e) {
  return isBackspace(e) || isShiftBackspace(e);
};
var isDeleteForward = function isDeleteForward(e) {
  return isDelete(e) || isShiftDelete(e);
};

var isDeleteCharBackwardMac = lib_3('ctrl+h');
var isDeleteCharForwardMac = lib_3('ctrl+d');
var isDeleteCharBackward = function isDeleteCharBackward(e) {
  return isDeleteBackward(e) || IS_APPLE && isDeleteCharBackwardMac(e);
};
var isDeleteCharForward = function isDeleteCharForward(e) {
  return isDeleteForward(e) || IS_APPLE && isDeleteCharForwardMac(e);
};

var isDeleteLineBackwardMac = function isDeleteLineBackwardMac(e) {
  return lib_3('cmd+shift+backspace', e) || lib_3('cmd+backspace', e);
};
var isDeleteLineForwardMac = lib_3('ctrl+k');
var isDeleteLineBackward = function isDeleteLineBackward(e) {
  return IS_APPLE && isDeleteLineBackwardMac(e);
};
var isDeleteLineForward = function isDeleteLineForward(e) {
  return IS_APPLE && isDeleteLineForwardMac(e);
};

var isDeleteWordBackwardMac = function isDeleteWordBackwardMac(e) {
  return lib_3('shift+option+backspace', e) || lib_3('option+backspace', e);
};
var isDeleteWordBackwardPC = lib_3('ctrl+backspace');
var isDeleteWordForwardMac = function isDeleteWordForwardMac(e) {
  return lib_3('shift+option+delete', e) || lib_3('option+delete', e);
};
var isDeleteWordForwardPC = lib_3('ctrl+delete');
var isDeleteWordBackward = function isDeleteWordBackward(e) {
  return IS_APPLE ? isDeleteWordBackwardMac(e) : isDeleteWordBackwardPC(e);
};
var isDeleteWordForward = function isDeleteWordForward(e) {
  return IS_APPLE ? isDeleteWordForwardMac(e) : isDeleteWordForwardPC(e);
};

var isExtendCharForward = lib_3('shift+right');
var isExtendCharBackward = lib_3('shift+left');

var isRightArrow = lib_3('right');
var isLeftArrow = lib_3('left');
var isCollapseCharForward = function isCollapseCharForward(e) {
  return isRightArrow(e) && !isExtendCharForward(e);
};
var isCollapseCharBackward = function isCollapseCharBackward(e) {
  return isLeftArrow(e) && !isExtendCharBackward(e);
};

var isCollapseLineBackwardMac = lib_3('option+up');
var isCollapseLineForwardMac = lib_3('option+down');
var isCollapseLineBackward = function isCollapseLineBackward(e) {
  return IS_APPLE && isCollapseLineBackwardMac(e);
};
var isCollapseLineForward = function isCollapseLineForward(e) {
  return IS_APPLE && isCollapseLineForwardMac(e);
};

var isExtendLineBackwardMac = lib_3('option+shift+up');
var isExtendLineForwardMac = lib_3('option+shift+down');
var isExtendLineBackward = function isExtendLineBackward(e) {
  return IS_APPLE && isExtendLineBackwardMac(e);
};
var isExtendLineForward = function isExtendLineForward(e) {
  return IS_APPLE && isExtendLineForwardMac(e);
};

var isUndo = lib_3('mod+z');
var isRedoMac = lib_3('mod+shift+z');
var isRedoPC = lib_3('mod+y');
var isRedo = function isRedo(e) {
  return IS_APPLE ? isRedoMac(e) : isRedoPC(e);
};

var isTransposeCharacterMac = lib_3('ctrl+t');
var isTransposeCharacter = function isTransposeCharacter(e) {
  return IS_APPLE && isTransposeCharacterMac(e);
};

var isContentEditable = function isContentEditable(e) {
  return isBold(e) || isDeleteCharBackward(e) || isDeleteCharForward(e) || isDeleteLineBackward(e) || isDeleteLineForward(e) || isDeleteWordBackward(e) || isDeleteWordForward(e) || isItalic(e) || isRedo(e) || isSplitBlock(e) || isTransposeCharacter(e) || isUndo(e);
};

var isComposing = function isComposing(e) {
  return e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'ArrowUp' || e.key == 'Backspace' || e.key == 'Enter';
};

/**
 * Export.
 *
 * @type {Object}
 */

var index$1 = {
  isBold: isBold,
  isCollapseCharBackward: isCollapseCharBackward,
  isCollapseCharForward: isCollapseCharForward,
  isCollapseLineBackward: isCollapseLineBackward,
  isCollapseLineForward: isCollapseLineForward,
  isComposing: isComposing,
  isContentEditable: isContentEditable,
  isDeleteCharBackward: isDeleteCharBackward,
  isDeleteCharForward: isDeleteCharForward,
  isDeleteLineBackward: isDeleteLineBackward,
  isDeleteLineForward: isDeleteLineForward,
  isDeleteWordBackward: isDeleteWordBackward,
  isDeleteWordForward: isDeleteWordForward,
  isExtendCharBackward: isExtendCharBackward,
  isExtendCharForward: isExtendCharForward,
  isExtendLineBackward: isExtendLineBackward,
  isExtendLineForward: isExtendLineForward,
  isItalic: isItalic,
  isRedo: isRedo,
  isSplitBlock: isSplitBlock,
  isUndo: isUndo
};

exports.default = index$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
