"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEditorComponent;

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _immutable = require("immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const catchesNothing = /.^/;
/* eslint-disable no-unused-vars */

const EditorComponent = (0, _immutable.Record)({
  id: null,
  label: 'unnamed component',
  icon: 'exclamation-triangle',
  fields: [],
  pattern: catchesNothing,

  fromBlock(match) {
    return {};
  },

  toBlock(attributes) {
    return 'Plugin';
  },

  toPreview(attributes) {
    return 'Plugin';
  }

});
/* eslint-enable */

function createEditorComponent(config) {
  const configObj = new EditorComponent({
    id: config.id || config.label.replace(/[^A-Z0-9]+/gi, '_'),
    label: config.label,
    icon: config.icon,
    fields: (0, _immutable.fromJS)(config.fields),
    pattern: config.pattern,
    fromBlock: (0, _isFunction2.default)(config.fromBlock) ? config.fromBlock.bind(null) : null,
    toBlock: (0, _isFunction2.default)(config.toBlock) ? config.toBlock.bind(null) : null,
    toPreview: (0, _isFunction2.default)(config.toPreview) ? config.toPreview.bind(null) : config.toBlock.bind(null)
  });
  return configObj;
}