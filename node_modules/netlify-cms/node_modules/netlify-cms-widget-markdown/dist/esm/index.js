"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NetlifyCmsWidgetMarkdown = void 0;

var _MarkdownControl = _interopRequireDefault(require("./MarkdownControl"));

var _MarkdownPreview = _interopRequireDefault(require("./MarkdownPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Widget = function Widget() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    name: 'markdown',
    controlComponent: _MarkdownControl.default,
    previewComponent: _MarkdownPreview.default
  }, opts);
};

const NetlifyCmsWidgetMarkdown = {
  Widget,
  controlComponent: _MarkdownControl.default,
  previewComponent: _MarkdownPreview.default
};
exports.NetlifyCmsWidgetMarkdown = NetlifyCmsWidgetMarkdown;
var _default = NetlifyCmsWidgetMarkdown;
exports.default = _default;