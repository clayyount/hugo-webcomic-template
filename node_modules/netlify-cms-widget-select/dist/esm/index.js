"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NetlifyCmsWidgetSelect = void 0;

var _SelectControl = _interopRequireDefault(require("./SelectControl"));

var _SelectPreview = _interopRequireDefault(require("./SelectPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Widget = function Widget() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    name: 'select',
    controlComponent: _SelectControl.default,
    previewComponent: _SelectPreview.default
  }, opts);
};

const NetlifyCmsWidgetSelect = {
  Widget,
  controlComponent: _SelectControl.default,
  previewComponent: _SelectPreview.default
};
exports.NetlifyCmsWidgetSelect = NetlifyCmsWidgetSelect;
var _default = NetlifyCmsWidgetSelect;
exports.default = _default;