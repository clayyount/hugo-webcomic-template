"use strict";

var _netlifyCmsCore = require("netlify-cms-core");

var _netlifyCmsWidgetString = _interopRequireDefault(require("netlify-cms-widget-string"));

var _netlifyCmsWidgetNumber = _interopRequireDefault(require("netlify-cms-widget-number"));

var _netlifyCmsWidgetText = _interopRequireDefault(require("netlify-cms-widget-text"));

var _netlifyCmsWidgetImage = _interopRequireDefault(require("netlify-cms-widget-image"));

var _netlifyCmsWidgetFile = _interopRequireDefault(require("netlify-cms-widget-file"));

var _netlifyCmsWidgetSelect = _interopRequireDefault(require("netlify-cms-widget-select"));

var _netlifyCmsWidgetMarkdown = _interopRequireDefault(require("netlify-cms-widget-markdown"));

var _netlifyCmsWidgetList = _interopRequireDefault(require("netlify-cms-widget-list"));

var _netlifyCmsWidgetObject = _interopRequireDefault(require("netlify-cms-widget-object"));

var _netlifyCmsWidgetRelation = _interopRequireDefault(require("netlify-cms-widget-relation"));

var _netlifyCmsWidgetBoolean = _interopRequireDefault(require("netlify-cms-widget-boolean"));

var _netlifyCmsWidgetMap = _interopRequireDefault(require("netlify-cms-widget-map"));

var _netlifyCmsWidgetDate = _interopRequireDefault(require("netlify-cms-widget-date"));

var _netlifyCmsWidgetDatetime = _interopRequireDefault(require("netlify-cms-widget-datetime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_netlifyCmsCore.NetlifyCmsCore.registerWidget([_netlifyCmsWidgetString.default.Widget(), _netlifyCmsWidgetNumber.default.Widget(), _netlifyCmsWidgetText.default.Widget(), _netlifyCmsWidgetImage.default.Widget(), _netlifyCmsWidgetFile.default.Widget(), _netlifyCmsWidgetSelect.default.Widget(), _netlifyCmsWidgetMarkdown.default.Widget(), _netlifyCmsWidgetList.default.Widget(), _netlifyCmsWidgetObject.default.Widget(), _netlifyCmsWidgetRelation.default.Widget(), _netlifyCmsWidgetBoolean.default.Widget(), _netlifyCmsWidgetMap.default.Widget(), _netlifyCmsWidgetDate.default.Widget(), _netlifyCmsWidgetDatetime.default.Widget()]);