"use strict";

var _toml = _interopRequireDefault(require("../toml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('tomlFormatter', () => {
  it('should output TOML integer values without decimals', () => {
    expect(_toml.default.toFile({
      testFloat: 123.456,
      testInteger: 789,
      title: 'TOML'
    })).toEqual(['testFloat = 123.456', 'testInteger = 789', 'title = "TOML"'].join('\n'));
  });
});