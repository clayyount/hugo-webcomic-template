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
  target: "e1224wm40",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "x0sdsu",
  styles: "margin-right:18px;"
} : {
  name: "x0sdsu",
  styles: "margin-right:18px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT29DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBOZXRsaWZ5QXV0aGVudGljYXRvciwgSW1wbGljaXRBdXRoZW50aWNhdG9yIH0gZnJvbSAnbmV0bGlmeS1jbXMtbGliLWF1dGgnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYWdlLCBJY29uIH0gZnJvbSAnbmV0bGlmeS1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IExvZ2luQnV0dG9uSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0TGFiQXV0aGVudGljYXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkxvZ2luOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluUHJvZ3Jlc3M6IFByb3BUeXBlcy5ib29sLFxuICAgIGJhc2VfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpdGVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdXRoRW5kcG9pbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29uZmlnOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLFxuICAgIGNsZWFySGFzaDogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBhdXRoVHlwZSA9IHRoaXMucHJvcHMuY29uZmlnLmdldEluKFsnYmFja2VuZCcsICdhdXRoX3R5cGUnXSk7XG4gICAgaWYgKGF1dGhUeXBlID09PSAnaW1wbGljaXQnKSB7XG4gICAgICB0aGlzLmF1dGggPSBuZXcgSW1wbGljaXRBdXRoZW50aWNhdG9yKHtcbiAgICAgICAgYmFzZV91cmw6IHRoaXMucHJvcHMuY29uZmlnLmdldEluKFsnYmFja2VuZCcsICdiYXNlX3VybCddLCAnaHR0cHM6Ly9naXRsYWIuY29tJyksXG4gICAgICAgIGF1dGhfZW5kcG9pbnQ6IHRoaXMucHJvcHMuY29uZmlnLmdldEluKFsnYmFja2VuZCcsICdhdXRoX2VuZHBvaW50J10sICdvYXV0aC9hdXRob3JpemUnKSxcbiAgICAgICAgYXBwX2lkOiB0aGlzLnByb3BzLmNvbmZpZy5nZXRJbihbJ2JhY2tlbmQnLCAnYXBwX2lkJ10pLFxuICAgICAgICBjbGVhckhhc2g6IHRoaXMucHJvcHMuY2xlYXJIYXNoLFxuICAgICAgfSk7XG4gICAgICAvLyBDb21wbGV0ZSBpbXBsaWNpdCBhdXRoZW50aWNhdGlvbiBpZiB3ZSB3ZXJlIHJlZGlyZWN0ZWQgYmFjayB0byBmcm9tIHRoZSBwcm92aWRlci5cbiAgICAgIHRoaXMuYXV0aC5jb21wbGV0ZUF1dGgoKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2luRXJyb3I6IGVyci50b1N0cmluZygpIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gbmV3IE5ldGxpZnlBdXRoZW50aWNhdG9yKHtcbiAgICAgICAgYmFzZV91cmw6IHRoaXMucHJvcHMuYmFzZV91cmwsXG4gICAgICAgIHNpdGVfaWQ6XG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5zcGxpdCgnOicpWzBdID09PSAnbG9jYWxob3N0J1xuICAgICAgICAgICAgPyAnY21zLm5ldGxpZnkuY29tJ1xuICAgICAgICAgICAgOiB0aGlzLnByb3BzLnNpdGVJZCxcbiAgICAgICAgYXV0aF9lbmRwb2ludDogdGhpcy5wcm9wcy5hdXRoRW5kcG9pbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmF1dGguYXV0aGVudGljYXRlKHsgcHJvdmlkZXI6ICdnaXRsYWInLCBzY29wZTogJ2FwaScgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9naW5FcnJvcjogZXJyLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25Mb2dpbihkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpblByb2dyZXNzLCBjb25maWcgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXRoZW50aWNhdGlvblBhZ2VcbiAgICAgICAgb25Mb2dpbj17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgbG9naW5EaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgbG9naW5FcnJvck1lc3NhZ2U9e3RoaXMuc3RhdGUubG9naW5FcnJvcn1cbiAgICAgICAgbG9nb1VybD17Y29uZmlnLmdldCgnbG9nb191cmwnKX1cbiAgICAgICAgcmVuZGVyQnV0dG9uQ29udGVudD17KCkgPT4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxMb2dpbkJ1dHRvbkljb24gdHlwZT1cImdpdGxhYlwiIC8+IHtpblByb2dyZXNzID8gJ0xvZ2dpbmcgaW4uLi4nIDogJ0xvZ2luIHdpdGggR2l0TGFiJ31cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0= */"
});

class GitLabAuthenticationPage extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleLogin", e => {
      e.preventDefault();
      this.auth.authenticate({
        provider: 'gitlab',
        scope: 'api'
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

  componentDidMount() {
    const authType = this.props.config.getIn(['backend', 'auth_type']);

    if (authType === 'implicit') {
      this.auth = new _netlifyCmsLibAuth.ImplicitAuthenticator({
        base_url: this.props.config.getIn(['backend', 'base_url'], 'https://gitlab.com'),
        auth_endpoint: this.props.config.getIn(['backend', 'auth_endpoint'], 'oauth/authorize'),
        app_id: this.props.config.getIn(['backend', 'app_id']),
        clearHash: this.props.clearHash
      }); // Complete implicit authentication if we were redirected back to from the provider.

      this.auth.completeAuth((err, data) => {
        if (err) {
          this.setState({
            loginError: err.toString()
          });
          return;
        }

        this.props.onLogin(data);
      });
    } else {
      this.auth = new _netlifyCmsLibAuth.NetlifyAuthenticator({
        base_url: this.props.base_url,
        site_id: document.location.host.split(':')[0] === 'localhost' ? 'cms.netlify.com' : this.props.siteId,
        auth_endpoint: this.props.authEndpoint
      });
    }
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
        type: "gitlab"
      }), " ", inProgress ? 'Logging in...' : 'Login with GitLab')
    });
  }

}

exports.default = GitLabAuthenticationPage;

_defineProperty(GitLabAuthenticationPage, "propTypes", {
  onLogin: _propTypes.default.func.isRequired,
  inProgress: _propTypes.default.bool,
  base_url: _propTypes.default.string,
  siteId: _propTypes.default.string,
  authEndpoint: _propTypes.default.string,
  config: _reactImmutableProptypes.default.map,
  clearHash: _propTypes.default.func
});