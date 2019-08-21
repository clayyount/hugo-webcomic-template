"use strict";

var _immutable = require("immutable");

var actions = _interopRequireWildcard(require("../../actions/entries"));

var _entries2 = _interopRequireDefault(require("../entries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const initialState = (0, _immutable.OrderedMap)({
  posts: (0, _immutable.Map)({
    name: 'posts'
  })
});
describe('entries', () => {
  it('should mark entries as fetching', () => {
    expect((0, _entries2.default)(initialState, actions.entriesLoading((0, _immutable.Map)({
      name: 'posts'
    })))).toEqual((0, _immutable.OrderedMap)((0, _immutable.fromJS)({
      posts: {
        name: 'posts'
      },
      pages: {
        posts: {
          isFetching: true
        }
      }
    })));
  });
  it('should handle loaded entries', () => {
    const entries = [{
      slug: 'a',
      path: ''
    }, {
      slug: 'b',
      title: 'B'
    }];
    expect((0, _entries2.default)(initialState, actions.entriesLoaded((0, _immutable.Map)({
      name: 'posts'
    }), entries, 0))).toEqual((0, _immutable.OrderedMap)((0, _immutable.fromJS)({
      posts: {
        name: 'posts'
      },
      entities: {
        'posts.a': {
          slug: 'a',
          path: '',
          isFetching: false
        },
        'posts.b': {
          slug: 'b',
          title: 'B',
          isFetching: false
        }
      },
      pages: {
        posts: {
          page: 0,
          ids: ['a', 'b']
        }
      }
    })));
  });
  it('should handle loaded entry', () => {
    const entry = {
      slug: 'a',
      path: ''
    };
    expect((0, _entries2.default)(initialState, actions.entryLoaded((0, _immutable.Map)({
      name: 'posts'
    }), entry))).toEqual((0, _immutable.OrderedMap)((0, _immutable.fromJS)({
      posts: {
        name: 'posts'
      },
      entities: {
        'posts.a': {
          slug: 'a',
          path: ''
        }
      },
      pages: {
        posts: {
          ids: ['a']
        }
      }
    })));
  });
});