"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = require("immutable");

var _config = require("../actions/config");

const config = function config() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({
    isFetching: true
  });
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _config.CONFIG_MERGE:
      return state.mergeDeep(action.payload);

    case _config.CONFIG_REQUEST:
      return state.set('isFetching', true);

    case _config.CONFIG_SUCCESS:
      /**
       * The loadConfig action merges any existing config into the loaded config
       * before firing this action (so the resulting config can be validated),
       * so we don't have to merge it here.
       */
      return action.payload.delete('isFetching');

    case _config.CONFIG_FAILURE:
      return (0, _immutable.Map)({
        error: action.payload.toString()
      });

    default:
      return state;
  }
};

var _default = config;
exports.default = _default;