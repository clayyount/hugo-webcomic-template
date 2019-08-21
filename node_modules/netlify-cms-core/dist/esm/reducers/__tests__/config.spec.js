"use strict";

var _immutable = require("immutable");

var _config = require("../../actions/config");

var _config2 = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('config', () => {
  it('should handle an empty state', () => {
    expect((0, _config2.default)(undefined, {})).toEqual((0, _immutable.Map)({
      isFetching: true
    }));
  });
  it('should handle an update', () => {
    expect((0, _config2.default)((0, _immutable.Map)({
      a: 'b',
      c: 'd'
    }), (0, _config.configLoaded)((0, _immutable.Map)({
      a: 'changed',
      e: 'new'
    })))).toEqual((0, _immutable.Map)({
      a: 'changed',
      e: 'new'
    }));
  });
  it('should mark the config as loading', () => {
    expect((0, _config2.default)(undefined, (0, _config.configLoading)())).toEqual((0, _immutable.Map)({
      isFetching: true
    }));
  });
  it('should handle an error', () => {
    expect((0, _config2.default)((0, _immutable.Map)(), (0, _config.configFailed)(new Error('Config could not be loaded')))).toEqual((0, _immutable.Map)({
      error: 'Error: Config could not be loaded'
    }));
  });
});