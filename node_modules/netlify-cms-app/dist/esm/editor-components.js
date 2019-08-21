"use strict";

var _netlifyCmsCore = require("netlify-cms-core");

var _netlifyCmsEditorComponentImage = _interopRequireDefault(require("netlify-cms-editor-component-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_netlifyCmsCore.NetlifyCmsCore.registerEditorComponent(_netlifyCmsEditorComponentImage.default);