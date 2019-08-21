"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));

var _netlifyCmsLibAuth = require("netlify-cms-lib-auth");

var _netlifyCmsUiDefault = require("netlify-cms-ui-default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const LoginButtonIcon = (
/*#__PURE__*/
0, _styledBase.default)(_netlifyCmsUiDefault.Icon, {
  target: "e191r7590",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "x0sdsu",
  styles: "margin-right:18px;"
} : {
  name: "x0sdsu",
  styles: "margin-right:18px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT29DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBOZXRsaWZ5QXV0aGVudGljYXRvciB9IGZyb20gJ25ldGxpZnktY21zLWxpYi1hdXRoJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFnZSwgSWNvbiB9IGZyb20gJ25ldGxpZnktY21zLXVpLWRlZmF1bHQnO1xuXG5jb25zdCBMb2dpbkJ1dHRvbkljb24gPSBzdHlsZWQoSWNvbilgXG4gIG1hcmdpbi1yaWdodDogMThweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdEh1YkF1dGhlbnRpY2F0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25Mb2dpbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpblByb2dyZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBiYXNlX3VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXRlSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXV0aEVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpZzogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcCxcbiAgICBjbGVhckhhc2g6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgaGFuZGxlTG9naW4gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2ZnID0ge1xuICAgICAgYmFzZV91cmw6IHRoaXMucHJvcHMuYmFzZV91cmwsXG4gICAgICBzaXRlX2lkOlxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LnNwbGl0KCc6JylbMF0gPT09ICdsb2NhbGhvc3QnXG4gICAgICAgICAgPyAnY21zLm5ldGxpZnkuY29tJ1xuICAgICAgICAgIDogdGhpcy5wcm9wcy5zaXRlSWQsXG4gICAgICBhdXRoX2VuZHBvaW50OiB0aGlzLnByb3BzLmF1dGhFbmRwb2ludCxcbiAgICB9O1xuICAgIGNvbnN0IGF1dGggPSBuZXcgTmV0bGlmeUF1dGhlbnRpY2F0b3IoY2ZnKTtcblxuICAgIGF1dGguYXV0aGVudGljYXRlKHsgcHJvdmlkZXI6ICdnaXRodWInLCBzY29wZTogJ3JlcG8nIH0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2luRXJyb3I6IGVyci50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5Qcm9ncmVzcywgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8QXV0aGVudGljYXRpb25QYWdlXG4gICAgICAgIG9uTG9naW49e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgIGxvZ2luRGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGxvZ2luRXJyb3JNZXNzYWdlPXt0aGlzLnN0YXRlLmxvZ2luRXJyb3J9XG4gICAgICAgIGxvZ29Vcmw9e2NvbmZpZy5nZXQoJ2xvZ29fdXJsJyl9XG4gICAgICAgIHJlbmRlckJ1dHRvbkNvbnRlbnQ9eygpID0+IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TG9naW5CdXR0b25JY29uIHR5cGU9XCJnaXRodWJcIiAvPiB7aW5Qcm9ncmVzcyA/ICdMb2dnaW5nIGluLi4uJyA6ICdMb2dpbiB3aXRoIEdpdEh1Yid9XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
});

class GitHubAuthenticationPage extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleLogin", e => {
      e.preventDefault();
      const cfg = {
        base_url: this.props.base_url,
        site_id: document.location.host.split(':')[0] === 'localhost' ? 'cms.netlify.com' : this.props.siteId,
        auth_endpoint: this.props.authEndpoint
      };
      const auth = new _netlifyCmsLibAuth.NetlifyAuthenticator(cfg);
      auth.authenticate({
        provider: 'github',
        scope: 'repo'
      }, (err, data) => {
        if (err) {
          this.setState({
            loginError: err.toString()
          });
          return;
        }

        this.props.onLogin(data);
      });
    });
  }

  render() {
    const _this$props = this.props,
          inProgress = _this$props.inProgress,
          config = _this$props.config;
    return _react.default.createElement(_netlifyCmsUiDefault.AuthenticationPage, {
      onLogin: this.handleLogin,
      loginDisabled: inProgress,
      loginErrorMessage: this.state.loginError,
      logoUrl: config.get('logo_url'),
      renderButtonContent: () => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(LoginButtonIcon, {
        type: "github"
      }), " ", inProgress ? 'Logging in...' : 'Login with GitHub')
    });
  }

}

exports.default = GitHubAuthenticationPage;

_defineProperty(GitHubAuthenticationPage, "propTypes", {
  onLogin: _propTypes.default.func.isRequired,
  inProgress: _propTypes.default.bool,
  base_url: _propTypes.default.string,
  siteId: _propTypes.default.string,
  authEndpoint: _propTypes.default.string,
  config: _reactImmutableProptypes.default.map,
  clearHash: _propTypes.default.func
});