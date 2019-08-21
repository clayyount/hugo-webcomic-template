"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _trimStart = _interopRequireDefault(require("lodash/trimStart"));

var _semaphore = _interopRequireDefault(require("semaphore"));

var _commonTags = require("common-tags");

var _netlifyCmsLibUtil = require("netlify-cms-lib-util");

var _AuthenticationPage = _interopRequireDefault(require("./AuthenticationPage"));

var _API = _interopRequireDefault(require("./API"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const MAX_CONCURRENT_DOWNLOADS = 10;

class GitLab {
  constructor(config) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _defineProperty(this, "fetchFiles", files => {
      const sem = (0, _semaphore.default)(MAX_CONCURRENT_DOWNLOADS);
      const promises = [];
      files.forEach(file => {
        promises.push(new Promise(resolve => sem.take(() => this.api.readFile(file.path, file.id).then(data => {
          resolve({
            file,
            data
          });
          sem.leave();
        }).catch(function () {
          let error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          sem.leave();
          console.error(`failed to load file from GitLab: ${file.path}`);
          resolve({
            error
          });
        }))));
      });
      return Promise.all(promises).then(loadedEntries => loadedEntries.filter(loadedEntry => !loadedEntry.error));
    });

    this.config = config;
    this.options = _objectSpread({
      proxied: false,
      API: null
    }, options);

    if (this.options.useWorkflow) {
      throw new Error('The GitLab backend does not support the Editorial Workflow.');
    }

    if (!this.options.proxied && config.getIn(['backend', 'repo']) == null) {
      throw new Error('The GitLab backend needs a "repo" in the backend configuration.');
    }

    this.api = this.options.API || null;
    this.repo = config.getIn(['backend', 'repo'], '');
    this.branch = config.getIn(['backend', 'branch'], 'master');
    this.api_root = config.getIn(['backend', 'api_root'], 'https://gitlab.com/api/v4');
    this.token = '';
  }

  authComponent() {
    return _AuthenticationPage.default;
  }

  restoreUser(user) {
    return this.authenticate(user);
  }

  async authenticate(state) {
    this.token = state.token;
    this.api = new _API.default({
      token: this.token,
      branch: this.branch,
      repo: this.repo,
      api_root: this.api_root
    });
    const user = await this.api.user();
    const isCollab = await this.api.hasWriteAccess(user).catch(error => {
      error.message = _commonTags.stripIndent`
        Repo "${this.repo}" not found.

        Please ensure the repo information is spelled correctly.

        If the repo is private, make sure you're logged into a GitLab account with access.
      `;
      throw error;
    }); // Unauthorized user

    if (!isCollab) {
      throw new Error('Your GitLab user account does not have access to this repo.');
    } // Authorized user


    return _objectSpread({}, user, {
      token: state.token
    });
  }

  logout() {
    this.token = null;
    return;
  }

  getToken() {
    return Promise.resolve(this.token);
  }

  entriesByFolder(collection, extension) {
    return this.api.listFiles(collection.get('folder')).then((_ref) => {
      let files = _ref.files,
          cursor = _ref.cursor;
      return this.fetchFiles(files.filter(file => file.name.endsWith('.' + extension))).then(fetchedFiles => {
        const returnedFiles = fetchedFiles;
        returnedFiles[_netlifyCmsLibUtil.CURSOR_COMPATIBILITY_SYMBOL] = cursor;
        return returnedFiles;
      });
    });
  }

  allEntriesByFolder(collection, extension) {
    return this.api.listAllFiles(collection.get('folder')).then(files => this.fetchFiles(files.filter(file => file.name.endsWith('.' + extension))));
  }

  entriesByFiles(collection) {
    const files = collection.get('files').map(collectionFile => ({
      path: collectionFile.get('file'),
      label: collectionFile.get('label')
    }));
    return this.fetchFiles(files).then(fetchedFiles => {
      const returnedFiles = fetchedFiles;
      return returnedFiles;
    });
  }

  // Fetches a single entry.
  getEntry(collection, slug, path) {
    return this.api.readFile(path).then(data => ({
      file: {
        path
      },
      data
    }));
  }

  getMedia() {
    return this.api.listAllFiles(this.config.get('media_folder')).then(files => files.map((_ref2) => {
      let id = _ref2.id,
          name = _ref2.name,
          path = _ref2.path;
      return {
        id,
        name,
        path,
        displayURL: {
          id,
          name,
          path
        }
      };
    }));
  }

  getMediaDisplayURL(displayURL) {
    this._mediaDisplayURLSem = this._mediaDisplayURLSem || (0, _semaphore.default)(MAX_CONCURRENT_DOWNLOADS);
    const id = displayURL.id,
          name = displayURL.name,
          path = displayURL.path;
    return new Promise((resolve, reject) => this._mediaDisplayURLSem.take(() => this.api.readFile(path, id, {
      parseText: false
    }).then(blob => {
      // svgs are returned with mimetype "text/plain" by gitlab
      if (blob.type === 'text/plain' && name.match(/\.svg$/i)) {
        return new window.Blob([blob], {
          type: 'image/svg+xml'
        });
      }

      return blob;
    }).then(blob => URL.createObjectURL(blob)).then(resolve, reject).finally(() => this._mediaDisplayURLSem.leave())));
  }

  async persistEntry(entry, mediaFiles) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.api.persistFiles([entry], options);
  }

  async persistMedia(mediaFile) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    await this.api.persistFiles([mediaFile], options);
    const value = mediaFile.value,
          path = mediaFile.path,
          fileObj = mediaFile.fileObj;
    return {
      name: value,
      size: fileObj.size,
      path: (0, _trimStart.default)(path, '/')
    };
  }

  deleteFile(path, commitMessage, options) {
    return this.api.deleteFile(path, commitMessage, options);
  }

  traverseCursor(cursor, action) {
    return this.api.traverseCursor(cursor, action).then(async (_ref3) => {
      let entries = _ref3.entries,
          newCursor = _ref3.cursor;
      return {
        entries: await Promise.all(entries.map(file => this.api.readFile(file.path, file.id).then(data => ({
          file,
          data
        })))),
        cursor: newCursor
      };
    });
  }

}

exports.default = GitLab;