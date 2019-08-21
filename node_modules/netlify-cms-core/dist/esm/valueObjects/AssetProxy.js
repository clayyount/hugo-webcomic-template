"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AssetProxy;
exports.createAssetProxy = createAssetProxy;

var _netlifyCmsLibUtil = require("netlify-cms-lib-util");

var _backend = require("../backend");

var _redux = _interopRequireDefault(require("../redux"));

var _integrations = require("../integrations");

var _reducers = require("../reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AssetProxy(value, fileObj) {
  let uploaded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let asset = arguments.length > 3 ? arguments[3] : undefined;

  const config = _redux.default.getState().config;

  this.value = value;
  this.fileObj = fileObj;
  this.uploaded = uploaded;
  this.sha = null;
  this.path = config.get('media_folder') && !uploaded ? (0, _netlifyCmsLibUtil.resolvePath)(value, config.get('media_folder')) : value;
  this.public_path = !uploaded ? (0, _netlifyCmsLibUtil.resolvePath)(value, config.get('public_folder')) : value;
  this.asset = asset;
}

AssetProxy.prototype.toString = function () {
  // Use the deployed image path if we do not have a locally cached copy.
  if (this.uploaded && !this.fileObj) return this.public_path;

  try {
    return window.URL.createObjectURL(this.fileObj);
  } catch (error) {
    return null;
  }
};

AssetProxy.prototype.toBase64 = function () {
  return new Promise(resolve => {
    const fr = new FileReader();

    fr.onload = readerEvt => {
      const binaryString = readerEvt.target.result;
      resolve(binaryString.split('base64,')[1]);
    };

    fr.readAsDataURL(this.fileObj);
  });
};

function createAssetProxy(value, fileObj) {
  let uploaded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let privateUpload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  const state = _redux.default.getState();

  const integration = (0, _reducers.selectIntegration)(state, null, 'assetStore');

  if (integration && !uploaded) {
    const provider = integration && (0, _integrations.getIntegrationProvider)(state.integrations, (0, _backend.currentBackend)(state.config).getToken, integration);
    return provider.upload(fileObj, privateUpload).then(response => new AssetProxy(response.asset.url.replace(/^(https?):/, ''), null, true, response.asset), () => new AssetProxy(value, fileObj, false));
  } else if (privateUpload) {
    throw new Error('The Private Upload option is only avaible for Asset Store Integration');
  }

  return Promise.resolve(new AssetProxy(value, fileObj, uploaded));
}