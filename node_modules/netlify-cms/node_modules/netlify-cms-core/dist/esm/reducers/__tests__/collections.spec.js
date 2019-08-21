"use strict";

var _immutable = require("immutable");

var _config = require("../../actions/config");

var _collections = _interopRequireDefault(require("../collections"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('collections', () => {
  it('should handle an empty state', () => {
    expect((0, _collections.default)(undefined, {})).toEqual(null);
  });
  it('should load the collections from the config', () => {
    expect((0, _collections.default)(undefined, (0, _config.configLoaded)((0, _immutable.fromJS)({
      collections: [{
        name: 'posts',
        folder: '_posts',
        fields: [{
          name: 'title',
          widget: 'string'
        }]
      }]
    })))).toEqual((0, _immutable.OrderedMap)({
      posts: (0, _immutable.fromJS)({
        name: 'posts',
        folder: '_posts',
        fields: [{
          name: 'title',
          widget: 'string'
        }],
        type: 'folder_based_collection'
      })
    }));
  });
});