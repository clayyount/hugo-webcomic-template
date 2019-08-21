"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderNode = exports.renderMark = void 0;

var _react = _interopRequireDefault(require("react"));

var _Shortcode = _interopRequireDefault(require("./Shortcode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Slate uses React components to render each type of node that it receives.
 * This is the closest thing Slate has to a schema definition. The types are set
 * by us when we manually deserialize from Remark's MDAST to Slate's AST.
 */

/**
 * Mark Components
 */
const Bold = props => _react.default.createElement("strong", null, props.children);

const Italic = props => _react.default.createElement("em", null, props.children);

const Strikethrough = props => _react.default.createElement("s", null, props.children);

const Code = props => _react.default.createElement("code", null, props.children);
/**
 * Node Components
 */


const Paragraph = props => _react.default.createElement("p", props.attributes, props.children);

const ListItem = props => _react.default.createElement("li", props.attributes, props.children);

const Quote = props => _react.default.createElement("blockquote", props.attributes, props.children);

const CodeBlock = props => _react.default.createElement("pre", null, _react.default.createElement("code", props.attributes, props.children));

const HeadingOne = props => _react.default.createElement("h1", props.attributes, props.children);

const HeadingTwo = props => _react.default.createElement("h2", props.attributes, props.children);

const HeadingThree = props => _react.default.createElement("h3", props.attributes, props.children);

const HeadingFour = props => _react.default.createElement("h4", props.attributes, props.children);

const HeadingFive = props => _react.default.createElement("h5", props.attributes, props.children);

const HeadingSix = props => _react.default.createElement("h6", props.attributes, props.children);

const Table = props => _react.default.createElement("table", null, _react.default.createElement("tbody", props.attributes, props.children));

const TableRow = props => _react.default.createElement("tr", props.attributes, props.children);

const TableCell = props => _react.default.createElement("td", props.attributes, props.children);

const ThematicBreak = props => _react.default.createElement("hr", props.attributes);

const BulletedList = props => _react.default.createElement("ul", props.attributes, props.children);

const NumberedList = props => _react.default.createElement("ol", _extends({}, props.attributes, {
  start: props.node.data.get('start') || 1
}), props.children);

const Link = props => {
  const data = props.node.get('data');
  const marks = data.get('marks');
  const url = data.get('url');
  const title = data.get('title');

  const link = _react.default.createElement("a", _extends({
    href: url,
    title: title
  }, props.attributes), props.children);

  const result = !marks ? link : marks.reduce((acc, mark) => {
    return renderMark({
      mark,
      children: acc
    });
  }, link);
  return result;
};

const Image = props => {
  const data = props.node.get('data');
  const marks = data.get('marks');
  const url = data.get('url');
  const title = data.get('title');
  const alt = data.get('alt');

  const image = _react.default.createElement("img", _extends({
    src: url,
    title: title,
    alt: alt
  }, props.attributes));

  const result = !marks ? image : marks.reduce((acc, mark) => {
    return renderMark({
      mark,
      children: acc
    });
  }, image);
  return result;
};

const renderMark = props => {
  switch (props.mark.type) {
    case 'bold':
      return _react.default.createElement(Bold, props);

    case 'italic':
      return _react.default.createElement(Italic, props);

    case 'strikethrough':
      return _react.default.createElement(Strikethrough, props);

    case 'code':
      return _react.default.createElement(Code, props);
  }
};

exports.renderMark = renderMark;

const renderNode = props => {
  switch (props.node.type) {
    case 'paragraph':
      return _react.default.createElement(Paragraph, props);

    case 'list-item':
      return _react.default.createElement(ListItem, props);

    case 'quote':
      return _react.default.createElement(Quote, props);

    case 'code':
      return _react.default.createElement(CodeBlock, props);

    case 'heading-one':
      return _react.default.createElement(HeadingOne, props);

    case 'heading-two':
      return _react.default.createElement(HeadingTwo, props);

    case 'heading-three':
      return _react.default.createElement(HeadingThree, props);

    case 'heading-four':
      return _react.default.createElement(HeadingFour, props);

    case 'heading-five':
      return _react.default.createElement(HeadingFive, props);

    case 'heading-six':
      return _react.default.createElement(HeadingSix, props);

    case 'table':
      return _react.default.createElement(Table, props);

    case 'table-row':
      return _react.default.createElement(TableRow, props);

    case 'table-cell':
      return _react.default.createElement(TableCell, props);

    case 'thematic-break':
      return _react.default.createElement(ThematicBreak, props);

    case 'bulleted-list':
      return _react.default.createElement(BulletedList, props);

    case 'numbered-list':
      return _react.default.createElement(NumberedList, props);

    case 'link':
      return _react.default.createElement(Link, props);

    case 'image':
      return _react.default.createElement(Image, props);

    case 'shortcode':
      return _react.default.createElement(_Shortcode.default, props);
  }
};

exports.renderNode = renderNode;