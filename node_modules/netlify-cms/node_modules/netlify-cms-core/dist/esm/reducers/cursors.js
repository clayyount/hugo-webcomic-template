"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.selectCollectionEntriesCursor = void 0;

var _immutable = require("immutable");

var _netlifyCmsLibUtil = require("netlify-cms-lib-util");

var _entries = require("../actions/entries");

// Since pagination can be used for a variety of views (collections
// and searches are the most common examples), we namespace cursors by
// their type before storing them in the state.
const selectCollectionEntriesCursor = (state, collectionName) => new _netlifyCmsLibUtil.Cursor(state.getIn(['cursorsByType', 'collectionEntries', collectionName]));

exports.selectCollectionEntriesCursor = selectCollectionEntriesCursor;

const cursors = function cursors() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.fromJS)({
    cursorsByType: {
      collectionEntries: {}
    }
  });
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _entries.ENTRIES_SUCCESS:
      {
        return state.setIn(['cursorsByType', 'collectionEntries', action.payload.collection], _netlifyCmsLibUtil.Cursor.create(action.payload.cursor).store);
      }

    default:
      return state;
  }
};

var _default = cursors;
exports.default = _default;