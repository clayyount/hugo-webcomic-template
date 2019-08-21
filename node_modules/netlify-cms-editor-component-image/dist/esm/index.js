"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NetlifyCmsEditorComponentImage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const image = {
  label: 'Image',
  id: 'image',
  fromBlock: match => match && {
    image: match[2],
    alt: match[1],
    title: match[4]
  },
  toBlock: (_ref) => {
    let alt = _ref.alt,
        image = _ref.image,
        title = _ref.title;
    return `![${alt || ''}](${image || ''}${title ? ` "${title.replace(/"/g, '\\"')}"` : ''})`;
  },
  // eslint-disable-next-line react/display-name
  toPreview: (_ref2, getAsset) => {
    let alt = _ref2.alt,
        image = _ref2.image,
        title = _ref2.title;
    return _react.default.createElement("img", {
      src: getAsset(image) || '',
      alt: alt || '',
      title: title || ''
    });
  },
  pattern: /^!\[(.*)\]\((.*?)(\s"(.*)")?\)$/,
  fields: [{
    label: 'Image',
    name: 'image',
    widget: 'image',
    media_library: {
      allow_multiple: false
    }
  }, {
    label: 'Alt Text',
    name: 'alt'
  }, {
    label: 'Title',
    name: 'title'
  }]
};
const NetlifyCmsEditorComponentImage = image;
exports.NetlifyCmsEditorComponentImage = NetlifyCmsEditorComponentImage;
var _default = image;
exports.default = _default;