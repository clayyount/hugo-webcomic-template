(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.SlateSchemaViolations = {})));
}(this, (function (exports) { 'use strict';

/**
 * Schema violations.
 *
 * @type {String}
 */

var CHILD_OBJECT_INVALID = 'child_object_invalid';
var CHILD_REQUIRED = 'child_required';
var CHILD_TYPE_INVALID = 'child_type_invalid';
var CHILD_UNKNOWN = 'child_unknown';
var FIRST_CHILD_OBJECT_INVALID = 'first_child_object_invalid';
var FIRST_CHILD_TYPE_INVALID = 'first_child_type_invalid';
var LAST_CHILD_OBJECT_INVALID = 'last_child_object_invalid';
var LAST_CHILD_TYPE_INVALID = 'last_child_type_invalid';
var NEXT_SIBLING_OBJECT_INVALID = 'next_sibling_object_invalid';
var NEXT_SIBLING_TYPE_INVALID = 'next_sibling_type_invalid';
var NODE_DATA_INVALID = 'node_data_invalid';
var NODE_IS_VOID_INVALID = 'node_is_void_invalid';
var NODE_MARK_INVALID = 'node_mark_invalid';
var NODE_OBJECT_INVALID = 'node_object_invalid';
var NODE_TEXT_INVALID = 'node_text_invalid';
var NODE_TYPE_INVALID = 'node_type_invalid';
var PARENT_OBJECT_INVALID = 'parent_object_invalid';
var PARENT_TYPE_INVALID = 'parent_type_invalid';
var PREVIOUS_SIBLING_OBJECT_INVALID = 'previous_sibling_object_invalid';
var PREVIOUS_SIBLING_TYPE_INVALID = 'previous_sibling_type_invalid';

exports.CHILD_OBJECT_INVALID = CHILD_OBJECT_INVALID;
exports.CHILD_REQUIRED = CHILD_REQUIRED;
exports.CHILD_TYPE_INVALID = CHILD_TYPE_INVALID;
exports.CHILD_UNKNOWN = CHILD_UNKNOWN;
exports.FIRST_CHILD_OBJECT_INVALID = FIRST_CHILD_OBJECT_INVALID;
exports.FIRST_CHILD_TYPE_INVALID = FIRST_CHILD_TYPE_INVALID;
exports.LAST_CHILD_OBJECT_INVALID = LAST_CHILD_OBJECT_INVALID;
exports.LAST_CHILD_TYPE_INVALID = LAST_CHILD_TYPE_INVALID;
exports.NEXT_SIBLING_OBJECT_INVALID = NEXT_SIBLING_OBJECT_INVALID;
exports.NEXT_SIBLING_TYPE_INVALID = NEXT_SIBLING_TYPE_INVALID;
exports.NODE_DATA_INVALID = NODE_DATA_INVALID;
exports.NODE_IS_VOID_INVALID = NODE_IS_VOID_INVALID;
exports.NODE_MARK_INVALID = NODE_MARK_INVALID;
exports.NODE_OBJECT_INVALID = NODE_OBJECT_INVALID;
exports.NODE_TEXT_INVALID = NODE_TEXT_INVALID;
exports.NODE_TYPE_INVALID = NODE_TYPE_INVALID;
exports.PARENT_OBJECT_INVALID = PARENT_OBJECT_INVALID;
exports.PARENT_TYPE_INVALID = PARENT_TYPE_INVALID;
exports.PREVIOUS_SIBLING_OBJECT_INVALID = PREVIOUS_SIBLING_OBJECT_INVALID;
exports.PREVIOUS_SIBLING_TYPE_INVALID = PREVIOUS_SIBLING_TYPE_INVALID;

Object.defineProperty(exports, '__esModule', { value: true });

})));
