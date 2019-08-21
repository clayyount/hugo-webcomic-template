"use strict";

var _immutable = _interopRequireDefault(require("immutable"));

var _auth = require("../../actions/auth");

var _auth2 = _interopRequireDefault(require("../auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('auth', () => {
  it('should handle an empty state', () => {
    expect((0, _auth2.default)(undefined, {})).toEqual(null);
  });
  it('should handle an authentication request', () => {
    expect((0, _auth2.default)(undefined, (0, _auth.authenticating)())).toEqual(_immutable.default.Map({
      isFetching: true
    }));
  });
  it('should handle authentication', () => {
    expect((0, _auth2.default)(undefined, (0, _auth.authenticate)({
      email: 'joe@example.com'
    }))).toEqual(_immutable.default.fromJS({
      user: {
        email: 'joe@example.com'
      }
    }));
  });
  it('should handle an authentication error', () => {
    expect((0, _auth2.default)(undefined, (0, _auth.authError)(new Error('Bad credentials')))).toEqual(_immutable.default.Map({
      error: 'Error: Bad credentials'
    }));
  });
  it('should handle logout', () => {
    const initialState = _immutable.default.fromJS({
      user: {
        email: 'joe@example.com'
      }
    });

    const newState = (0, _auth2.default)(initialState, (0, _auth.logout)());
    expect(newState.get('user')).toBeUndefined();
  });
});