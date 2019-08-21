"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _result2 = _interopRequireDefault(require("lodash/result"));

var _partial2 = _interopRequireDefault(require("lodash/partial"));

var _flow2 = _interopRequireDefault(require("lodash/flow"));

var _netlifyCmsLibUtil = require("netlify-cms-lib-util");

var _jsBase = require("js-base64");

var _immutable = require("immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class API {
  constructor(config) {
    var _this = this;

    _defineProperty(this, "withAuthorizationHeaders", req => _netlifyCmsLibUtil.unsentRequest.withHeaders(this.token ? {
      Authorization: `Bearer ${this.token}`
    } : {}, req));

    _defineProperty(this, "buildRequest", req => (0, _flow2.default)([_netlifyCmsLibUtil.unsentRequest.withRoot(this.api_root), this.withAuthorizationHeaders, _netlifyCmsLibUtil.unsentRequest.withTimestamp])(req));

    _defineProperty(this, "request", async req => (0, _flow2.default)([this.buildRequest, _netlifyCmsLibUtil.unsentRequest.performRequest, p => p.catch(err => Promise.reject(new _netlifyCmsLibUtil.APIError(err.message, null, 'GitLab')))])(req));

    _defineProperty(this, "catchFormatErrors", (format, formatter) => res => {
      try {
        return formatter(res);
      } catch (err) {
        throw new Error(`Response cannot be parsed into the expected format (${format}): ${err.message}`);
      }
    });

    _defineProperty(this, "responseFormats", (0, _immutable.fromJS)({
      json: async res => {
        const contentType = res.headers.get('Content-Type');

        if (contentType !== 'application/json' && contentType !== 'text/json') {
          throw new Error(`${contentType} is not a valid JSON Content-Type`);
        }

        return res.json();
      },
      text: async res => res.text(),
      blob: async res => res.blob()
    }).mapEntries((_ref) => {
      let _ref2 = _slicedToArray(_ref, 2),
          format = _ref2[0],
          formatter = _ref2[1];

      return [format, this.catchFormatErrors(format, formatter)];
    }));

    _defineProperty(this, "parseResponse", async (res, _ref3) => {
      let _ref3$expectingOk = _ref3.expectingOk,
          expectingOk = _ref3$expectingOk === void 0 ? true : _ref3$expectingOk,
          _ref3$expectingFormat = _ref3.expectingFormat,
          expectingFormat = _ref3$expectingFormat === void 0 ? 'text' : _ref3$expectingFormat;
      let body;

      try {
        const formatter = this.responseFormats.get(expectingFormat, false);

        if (!formatter) {
          throw new Error(`${expectingFormat} is not a supported response format.`);
        }

        body = await formatter(res);
      } catch (err) {
        throw new _netlifyCmsLibUtil.APIError(err.message, res.status, 'GitLab');
      }

      if (expectingOk && !res.ok) {
        const isJSON = expectingFormat === 'json';
        throw new _netlifyCmsLibUtil.APIError(isJSON && body.message ? body.message : body, res.status, 'GitLab');
      }

      return body;
    });

    _defineProperty(this, "responseToJSON", res => this.parseResponse(res, {
      expectingFormat: 'json'
    }));

    _defineProperty(this, "responseToBlob", res => this.parseResponse(res, {
      expectingFormat: 'blob'
    }));

    _defineProperty(this, "responseToText", res => this.parseResponse(res, {
      expectingFormat: 'text'
    }));

    _defineProperty(this, "requestJSON", req => this.request(req).then(this.responseToJSON));

    _defineProperty(this, "requestText", req => this.request(req).then(this.responseToText));

    _defineProperty(this, "user", () => this.requestJSON('/user'));

    _defineProperty(this, "WRITE_ACCESS", 30);

    _defineProperty(this, "hasWriteAccess", () => this.requestJSON(this.repoURL).then((_ref4) => {
      let permissions = _ref4.permissions;
      const project_access = permissions.project_access,
            group_access = permissions.group_access;

      if (project_access && project_access.access_level >= this.WRITE_ACCESS) {
        return true;
      }

      if (group_access && group_access.access_level >= this.WRITE_ACCESS) {
        return true;
      }

      return false;
    }));

    _defineProperty(this, "readFile", async function (path, sha) {
      let _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref5$ref = _ref5.ref,
          ref = _ref5$ref === void 0 ? _this.branch : _ref5$ref,
          _ref5$parseText = _ref5.parseText,
          parseText = _ref5$parseText === void 0 ? true : _ref5$parseText;

      const cacheKey = parseText ? `gl.${sha}` : `gl.${sha}.blob`;
      const cachedFile = sha ? await _netlifyCmsLibUtil.localForage.getItem(cacheKey) : null;

      if (cachedFile) {
        return cachedFile;
      }

      const result = await _this.request({
        url: `${_this.repoURL}/repository/files/${encodeURIComponent(path)}/raw`,
        params: {
          ref
        },
        cache: 'no-store'
      }).then(parseText ? _this.responseToText : _this.responseToBlob);

      if (sha) {
        _netlifyCmsLibUtil.localForage.setItem(cacheKey, result);
      }

      return result;
    });

    _defineProperty(this, "getCursorFromHeaders", headers => {
      // indices and page counts are assumed to be zero-based, but the
      // indices and page counts returned from GitLab are one-based
      const index = parseInt(headers.get('X-Page'), 10) - 1;
      const pageCount = parseInt(headers.get('X-Total-Pages'), 10) - 1;
      const pageSize = parseInt(headers.get('X-Per-Page'), 10);
      const count = parseInt(headers.get('X-Total'), 10);
      const linksRaw = headers.get('Link');
      const links = (0, _immutable.List)(linksRaw.split(',')).map(str => str.trim().split(';')).map((_ref6) => {
        let _ref7 = _slicedToArray(_ref6, 2),
            linkStr = _ref7[0],
            keyStr = _ref7[1];

        return [keyStr.match(/rel="(.*?)"/)[1], _netlifyCmsLibUtil.unsentRequest.fromURL(linkStr.trim().match(/<(.*?)>/)[1].replace(/\+/g, '%20'))];
      }).update(list => (0, _immutable.Map)(list));
      const actions = links.keySeq().flatMap(key => key === 'prev' && index > 0 || key === 'next' && index < pageCount || key === 'first' && index > 0 || key === 'last' && index < pageCount ? [key] : []);
      return _netlifyCmsLibUtil.Cursor.create({
        actions,
        meta: {
          index,
          count,
          pageSize,
          pageCount
        },
        data: {
          links
        }
      });
    });

    _defineProperty(this, "getCursor", (_ref8) => {
      let headers = _ref8.headers;
      return this.getCursorFromHeaders(headers);
    });

    _defineProperty(this, "fetchCursor", req => (0, _flow2.default)([_netlifyCmsLibUtil.unsentRequest.withMethod('HEAD'), this.request, (0, _netlifyCmsLibUtil.then)(this.getCursor)])(req));

    _defineProperty(this, "fetchCursorAndEntries", req => (0, _flow2.default)([_netlifyCmsLibUtil.unsentRequest.withMethod('GET'), this.request, p => Promise.all([p.then(this.getCursor), p.then(this.responseToJSON)]), (0, _netlifyCmsLibUtil.then)((_ref9) => {
      let _ref10 = _slicedToArray(_ref9, 2),
          cursor = _ref10[0],
          entries = _ref10[1];

      return {
        cursor,
        entries
      };
    })])(req));

    _defineProperty(this, "fetchRelativeCursor", async (cursor, action) => this.fetchCursor(cursor.data.links[action]));

    _defineProperty(this, "reversableActions", (0, _immutable.Map)({
      first: 'last',
      last: 'first',
      next: 'prev',
      prev: 'next'
    }));

    _defineProperty(this, "reverseCursor", cursor => {
      const pageCount = cursor.meta.get('pageCount', 0);
      const currentIndex = cursor.meta.get('index', 0);
      const newIndex = pageCount - currentIndex;
      const links = cursor.data.get('links', (0, _immutable.Map)());
      const reversedLinks = links.mapEntries((_ref11) => {
        let _ref12 = _slicedToArray(_ref11, 2),
            k = _ref12[0],
            v = _ref12[1];

        return [this.reversableActions.get(k) || k, v];
      });
      const reversedActions = cursor.actions.map(action => this.reversableActions.get(action) || action);
      return cursor.updateStore(store => store.setIn(['meta', 'index'], newIndex).setIn(['data', 'links'], reversedLinks).set('actions', reversedActions));
    });

    _defineProperty(this, "listFiles", async path => {
      const firstPageCursor = await this.fetchCursor({
        url: `${this.repoURL}/repository/tree`,
        params: {
          path,
          ref: this.branch
        }
      });
      const lastPageLink = firstPageCursor.data.getIn(['links', 'last']);

      const _ref13 = await this.fetchCursorAndEntries(lastPageLink),
            entries = _ref13.entries,
            cursor = _ref13.cursor;

      return {
        files: entries.filter((_ref14) => {
          let type = _ref14.type;
          return type === 'blob';
        }).reverse(),
        cursor: this.reverseCursor(cursor)
      };
    });

    _defineProperty(this, "traverseCursor", async (cursor, action) => {
      const link = cursor.data.getIn(['links', action]);

      const _ref15 = await this.fetchCursorAndEntries(link),
            entries = _ref15.entries,
            newCursor = _ref15.cursor;

      return {
        entries: entries.reverse(),
        cursor: this.reverseCursor(newCursor)
      };
    });

    _defineProperty(this, "listAllFiles", async path => {
      const entries = [];

      let _ref16 = await this.fetchCursorAndEntries({
        url: `${this.repoURL}/repository/tree`,
        // Get the maximum number of entries per page
        params: {
          path,
          ref: this.branch,
          per_page: 100
        }
      }),
          cursor = _ref16.cursor,
          initialEntries = _ref16.entries;

      entries.push(...initialEntries);

      while (cursor && cursor.actions.has('next')) {
        const link = cursor.data.getIn(['links', 'next']);

        const _ref17 = await this.fetchCursorAndEntries(link),
              newCursor = _ref17.cursor,
              newEntries = _ref17.entries;

        entries.push(...newEntries);
        cursor = newCursor;
      }

      return entries.filter((_ref18) => {
        let type = _ref18.type;
        return type === 'blob';
      });
    });

    _defineProperty(this, "toBase64", str => Promise.resolve(_jsBase.Base64.encode(str)));

    _defineProperty(this, "fromBase64", str => _jsBase.Base64.decode(str));

    _defineProperty(this, "uploadAndCommit", async (item, _ref19) => {
      let commitMessage = _ref19.commitMessage,
          _ref19$updateFile = _ref19.updateFile,
          updateFile = _ref19$updateFile === void 0 ? false : _ref19$updateFile,
          _ref19$branch = _ref19.branch,
          branch = _ref19$branch === void 0 ? this.branch : _ref19$branch,
          _ref19$author = _ref19.author,
          author = _ref19$author === void 0 ? this.commitAuthor : _ref19$author;
      const content = await (0, _result2.default)(item, 'toBase64', (0, _partial2.default)(this.toBase64, item.raw));
      const file_path = item.path.replace(/^\//, '');
      const action = updateFile ? 'update' : 'create';
      const encoding = 'base64';
      const commitParams = {
        branch,
        commit_message: commitMessage,
        actions: [{
          action,
          file_path,
          content,
          encoding
        }]
      };

      if (author) {
        const name = author.name,
              email = author.email;
        commitParams.author_name = name;
        commitParams.author_email = email;
      }

      await this.request({
        url: `${this.repoURL}/repository/commits`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(commitParams)
      });
      return _objectSpread({}, item, {
        uploaded: true
      });
    });

    _defineProperty(this, "persistFiles", (files, _ref20) => {
      let commitMessage = _ref20.commitMessage,
          newEntry = _ref20.newEntry;
      return Promise.all(files.map(file => this.uploadAndCommit(file, {
        commitMessage,
        updateFile: newEntry === false
      })));
    });

    _defineProperty(this, "deleteFile", function (path, commit_message) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const branch = options.branch || _this.branch;
      const commitParams = {
        commit_message,
        branch
      };

      if (_this.commitAuthor) {
        const _this$commitAuthor = _this.commitAuthor,
              name = _this$commitAuthor.name,
              email = _this$commitAuthor.email;
        commitParams.author_name = name;
        commitParams.author_email = email;
      }

      return (0, _flow2.default)([_netlifyCmsLibUtil.unsentRequest.withMethod('DELETE'), // TODO: only send author params if they are defined.
      _netlifyCmsLibUtil.unsentRequest.withParams(commitParams), _this.request])(`${_this.repoURL}/repository/files/${encodeURIComponent(path)}`);
    });

    this.api_root = config.api_root || 'https://gitlab.com/api/v4';
    this.token = config.token || false;
    this.branch = config.branch || 'master';
    this.repo = config.repo || '';
    this.repoURL = `/projects/${encodeURIComponent(this.repo)}`;
  }

}

exports.default = API;