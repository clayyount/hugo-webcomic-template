"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NetlifyCmsWidgetImage = void 0;

var _netlifyCmsWidgetFile = _interopRequireDefault(require("netlify-cms-widget-file"));

var _ImagePreview = _interopRequireDefault(require("./ImagePreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const controlComponent = _netlifyCmsWidgetFile.default.withFileControl({
  forImage: true
});

const Widget = function Widget() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    name: 'image',
    controlComponent
  }, opts);
};

const NetlifyCmsWidgetImage = {
  Widget,
  controlComponent,
  previewComponent: _ImagePreview.default
};
exports.NetlifyCmsWidgetImage = NetlifyCmsWidgetImage;
var _default = NetlifyCmsWidgetImage;
exports.default = _default;