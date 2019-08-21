"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _index = _interopRequireDefault(require("./images/_index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This module outputs icon objects with the following shape:
 *
 * {
 *   image: <svg>...</svg>,
 *   ...props
 * }
 *
 * `props` here are config properties defined in this file for specific icons.
 * For example, an icon may face a specific direction, and the Icon component
 * accepts a `direction` prop to rotate directional icons, which relies on
 * defining the default direction here.
 */

/**
 * Configuration for individual icons.
 */
const config = {
  arrow: {
    direction: 'left'
  },
  chevron: {
    direction: 'down'
  },
  'chevron-double': {
    direction: 'down'
  }
};
/**
 * Map icon definition objects - imported object of images simply maps the icon
 * name to the raw svg, so we move that to the `image` property of the
 * definition object and set any additional configured properties for each icon.
 */

const icons = (0, _mapValues.default)(_index.default, (image, name) => {
  const props = config[name] || {};
  return _objectSpread({
    image
  }, props);
});
var _default = icons;
exports.default = _default;