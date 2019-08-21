"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NetlifyCmsWidgetNumber = void 0;

var _NumberControl = _interopRequireDefault(require("./NumberControl"));

var _NumberPreview = _interopRequireDefault(require("./NumberPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Widget = function Widget() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    name: 'number',
    controlComponent: _NumberControl.default,
    previewComponent: _NumberPreview.default
  }, opts);
};

const NetlifyCmsWidgetNumber = {
  Widget,
  controlComponent: _NumberControl.default,
  previewComponent: _NumberPreview.default
};
exports.NetlifyCmsWidgetNumber = NetlifyCmsWidgetNumber;
var _default = NetlifyCmsWidgetNumber;
exports.default = _default;