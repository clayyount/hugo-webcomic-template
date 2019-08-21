"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = require("immutable");

/*
 * Reducer for some global UI state that we want to share between components
 * */
const globalUI = function globalUI() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({
    isFetching: false
  });
  let action = arguments.length > 1 ? arguments[1] : undefined;

  // Generic, global loading indicator
  if (action.type.indexOf('REQUEST') > -1) {
    return state.set('isFetching', true);
  } else if (action.type.indexOf('SUCCESS') > -1 || action.type.indexOf('FAILURE') > -1) {
    return state.set('isFetching', false);
  }

  return state;
};

var _default = globalUI;
exports.default = _default;