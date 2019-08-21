"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NetlifyCmsWidgetFile = void 0;

var _withFileControl = _interopRequireDefault(require("./withFileControl"));

var _FilePreview = _interopRequireDefault(require("./FilePreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const controlComponent = (0, _withFileControl.default)();

const Widget = function Widget() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    name: 'file',
    controlComponent,
    previewComponent: _FilePreview.default
  }, opts);
};

const NetlifyCmsWidgetFile = {
  Widget,
  controlComponent,
  previewComponent: _FilePreview.default,
  withFileControl: _withFileControl.default
};
exports.NetlifyCmsWidgetFile = NetlifyCmsWidgetFile;
var _default = NetlifyCmsWidgetFile;
exports.default = _default;