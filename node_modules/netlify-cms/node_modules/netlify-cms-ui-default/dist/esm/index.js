"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function get() {
    return _Dropdown.default;
  }
});
Object.defineProperty(exports, "DropdownItem", {
  enumerable: true,
  get: function get() {
    return _Dropdown.DropdownItem;
  }
});
Object.defineProperty(exports, "DropdownButton", {
  enumerable: true,
  get: function get() {
    return _Dropdown.DropdownButton;
  }
});
Object.defineProperty(exports, "StyledDropdownButton", {
  enumerable: true,
  get: function get() {
    return _Dropdown.StyledDropdownButton;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _Icon.default;
  }
});
Object.defineProperty(exports, "ListItemTopBar", {
  enumerable: true,
  get: function get() {
    return _ListItemTopBar.default;
  }
});
Object.defineProperty(exports, "Loader", {
  enumerable: true,
  get: function get() {
    return _Loader.default;
  }
});
Object.defineProperty(exports, "Toggle", {
  enumerable: true,
  get: function get() {
    return _Toggle.default;
  }
});
Object.defineProperty(exports, "ToggleContainer", {
  enumerable: true,
  get: function get() {
    return _Toggle.ToggleContainer;
  }
});
Object.defineProperty(exports, "ToggleBackground", {
  enumerable: true,
  get: function get() {
    return _Toggle.ToggleBackground;
  }
});
Object.defineProperty(exports, "ToggleHandle", {
  enumerable: true,
  get: function get() {
    return _Toggle.ToggleHandle;
  }
});
Object.defineProperty(exports, "AuthenticationPage", {
  enumerable: true,
  get: function get() {
    return _AuthenticationPage.default;
  }
});
Object.defineProperty(exports, "WidgetPreviewContainer", {
  enumerable: true,
  get: function get() {
    return _WidgetPreviewContainer.default;
  }
});
Object.defineProperty(exports, "ObjectWidgetTopBar", {
  enumerable: true,
  get: function get() {
    return _ObjectWidgetTopBar.default;
  }
});
Object.defineProperty(exports, "fonts", {
  enumerable: true,
  get: function get() {
    return _styles.fonts;
  }
});
Object.defineProperty(exports, "colorsRaw", {
  enumerable: true,
  get: function get() {
    return _styles.colorsRaw;
  }
});
Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function get() {
    return _styles.colors;
  }
});
Object.defineProperty(exports, "lengths", {
  enumerable: true,
  get: function get() {
    return _styles.lengths;
  }
});
Object.defineProperty(exports, "components", {
  enumerable: true,
  get: function get() {
    return _styles.components;
  }
});
Object.defineProperty(exports, "buttons", {
  enumerable: true,
  get: function get() {
    return _styles.buttons;
  }
});
Object.defineProperty(exports, "shadows", {
  enumerable: true,
  get: function get() {
    return _styles.shadows;
  }
});
Object.defineProperty(exports, "borders", {
  enumerable: true,
  get: function get() {
    return _styles.borders;
  }
});
Object.defineProperty(exports, "transitions", {
  enumerable: true,
  get: function get() {
    return _styles.transitions;
  }
});
Object.defineProperty(exports, "effects", {
  enumerable: true,
  get: function get() {
    return _styles.effects;
  }
});
Object.defineProperty(exports, "reactSelectStyles", {
  enumerable: true,
  get: function get() {
    return _styles.reactSelectStyles;
  }
});
Object.defineProperty(exports, "GlobalStyles", {
  enumerable: true,
  get: function get() {
    return _styles.GlobalStyles;
  }
});
exports.NetlifyCmsUiDefault = void 0;

var _Dropdown = _interopRequireWildcard(require("./Dropdown"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _ListItemTopBar = _interopRequireDefault(require("./ListItemTopBar"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _Toggle = _interopRequireWildcard(require("./Toggle"));

var _AuthenticationPage = _interopRequireDefault(require("./AuthenticationPage"));

var _WidgetPreviewContainer = _interopRequireDefault(require("./WidgetPreviewContainer"));

var _ObjectWidgetTopBar = _interopRequireDefault(require("./ObjectWidgetTopBar"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const NetlifyCmsUiDefault = {
  Dropdown: _Dropdown.default,
  DropdownItem: _Dropdown.DropdownItem,
  DropdownButton: _Dropdown.DropdownButton,
  StyledDropdownButton: _Dropdown.StyledDropdownButton,
  ListItemTopBar: _ListItemTopBar.default,
  Icon: _Icon.default,
  Loader: _Loader.default,
  Toggle: _Toggle.default,
  ToggleContainer: _Toggle.ToggleContainer,
  ToggleBackground: _Toggle.ToggleBackground,
  ToggleHandle: _Toggle.ToggleHandle,
  AuthenticationPage: _AuthenticationPage.default,
  WidgetPreviewContainer: _WidgetPreviewContainer.default,
  ObjectWidgetTopBar: _ObjectWidgetTopBar.default,
  fonts: _styles.fonts,
  colorsRaw: _styles.colorsRaw,
  colors: _styles.colors,
  lengths: _styles.lengths,
  components: _styles.components,
  buttons: _styles.buttons,
  shadows: _styles.shadows,
  borders: _styles.borders,
  transitions: _styles.transitions,
  effects: _styles.effects,
  reactSelectStyles: _styles.reactSelectStyles,
  GlobalStyles: _styles.GlobalStyles
};
exports.NetlifyCmsUiDefault = NetlifyCmsUiDefault;