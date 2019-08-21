"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INFERABLE_FIELDS = exports.IDENTIFIER_FIELDS = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IDENTIFIER_FIELDS = ['title', 'path'];
exports.IDENTIFIER_FIELDS = IDENTIFIER_FIELDS;
const INFERABLE_FIELDS = {
  title: {
    type: 'string',
    secondaryTypes: [],
    synonyms: ['title', 'name', 'label', 'headline', 'header'],
    defaultPreview: value => _react.default.createElement("h1", null, value),
    // eslint-disable-line react/display-name
    fallbackToFirstField: true,
    showError: true
  },
  shortTitle: {
    type: 'string',
    secondaryTypes: [],
    synonyms: ['short_title', 'shortTitle', 'short'],
    defaultPreview: value => _react.default.createElement("h2", null, value),
    // eslint-disable-line react/display-name
    fallbackToFirstField: false,
    showError: false
  },
  author: {
    type: 'string',
    secondaryTypes: [],
    synonyms: ['author', 'name', 'by', 'byline', 'owner'],
    defaultPreview: value => _react.default.createElement("strong", null, value),
    // eslint-disable-line react/display-name
    fallbackToFirstField: false,
    showError: false
  },
  date: {
    type: 'datetime',
    secondaryTypes: ['date'],
    synonyms: ['date', 'publishDate', 'publish_date'],
    defaultPreview: value => value,
    fallbackToFirstField: false,
    showError: false
  },
  description: {
    type: 'string',
    secondaryTypes: ['text', 'markdown'],
    synonyms: ['shortDescription', 'short_description', 'shortdescription', 'description', 'intro', 'introduction', 'brief', 'content', 'biography', 'bio', 'summary'],
    defaultPreview: value => value,
    fallbackToFirstField: false,
    showError: false
  },
  image: {
    type: 'image',
    secondaryTypes: [],
    synonyms: ['image', 'thumbnail', 'thumb', 'picture', 'avatar', 'photo', 'cover'],
    defaultPreview: value => value,
    fallbackToFirstField: false,
    showError: false
  }
};
exports.INFERABLE_FIELDS = INFERABLE_FIELDS;