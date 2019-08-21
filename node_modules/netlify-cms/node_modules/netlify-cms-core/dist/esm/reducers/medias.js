"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAsset = exports.default = void 0;

var _immutable = require("immutable");

var _netlifyCmsLibUtil = require("netlify-cms-lib-util");

var _media = require("../actions/media");

var _AssetProxy = _interopRequireDefault(require("../valueObjects/AssetProxy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const medias = function medias() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _media.ADD_ASSET:
      return state.set(action.payload.public_path, action.payload);

    case _media.REMOVE_ASSET:
      return state.delete(action.payload);

    default:
      return state;
  }
};

var _default = medias;
exports.default = _default;
const memoizedProxies = {};

const getAsset = (publicFolder, state, path) => {
  // No path provided, skip
  if (!path) return null;
  let proxy = state.get(path) || memoizedProxies[path];

  if (proxy) {
    // There is already an AssetProxy in memmory for this path. Use it.
    return proxy;
  } // Create a new AssetProxy (for consistency) and return it.


  proxy = memoizedProxies[path] = new _AssetProxy.default((0, _netlifyCmsLibUtil.resolvePath)(path, publicFolder), null, true);
  return proxy;
};

exports.getAsset = getAsset;