"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _waitUntilAction = _interopRequireDefault(require("./middleware/waitUntilAction"));

var _combinedReducer = _interopRequireDefault(require("../reducers/combinedReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = (0, _redux.createStore)(_combinedReducer.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk.default, _waitUntilAction.default), window.devToolsExtension ? window.devToolsExtension() : f => f));
var _default = store;
exports.default = _default;