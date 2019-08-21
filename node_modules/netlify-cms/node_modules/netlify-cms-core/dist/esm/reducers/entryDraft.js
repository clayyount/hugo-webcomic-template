"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = require("immutable");

var _entries = require("../actions/entries");

var _editorialWorkflow = require("../actions/editorialWorkflow");

var _media = require("../actions/media");

const initialState = (0, _immutable.Map)({
  entry: (0, _immutable.Map)(),
  mediaFiles: (0, _immutable.List)(),
  fieldsMetaData: (0, _immutable.Map)(),
  fieldsErrors: (0, _immutable.Map)(),
  hasChanged: false
});

const entryDraftReducer = function entryDraftReducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _entries.DRAFT_CREATE_FROM_ENTRY:
      // Existing Entry
      return state.withMutations(state => {
        state.set('entry', action.payload.entry);
        state.setIn(['entry', 'newRecord'], false);
        state.set('mediaFiles', (0, _immutable.List)()); // An existing entry may already have metadata. If we surfed away and back to its
        // editor page, the metadata will have been fetched already, so we shouldn't
        // clear it as to not break relation lists.

        state.set('fieldsMetaData', action.payload.metadata || (0, _immutable.Map)());
        state.set('fieldsErrors', (0, _immutable.Map)());
        state.set('hasChanged', false);
      });

    case _entries.DRAFT_CREATE_EMPTY:
      // New Entry
      return state.withMutations(state => {
        state.set('entry', (0, _immutable.fromJS)(action.payload));
        state.setIn(['entry', 'newRecord'], true);
        state.set('mediaFiles', (0, _immutable.List)());
        state.set('fieldsMetaData', (0, _immutable.Map)());
        state.set('fieldsErrors', (0, _immutable.Map)());
        state.set('hasChanged', false);
      });

    case _entries.DRAFT_CREATE_FROM_LOCAL_BACKUP:
      // Local Backup
      return state.withMutations(state => {
        const backupEntry = state.get('localBackup');
        state.delete('localBackup');
        state.set('entry', backupEntry);
        state.setIn(['entry', 'newRecord'], !backupEntry.get('path'));
        state.set('mediaFiles', (0, _immutable.List)());
        state.set('fieldsMetaData', (0, _immutable.Map)());
        state.set('fieldsErrors', (0, _immutable.Map)());
        state.set('hasChanged', true);
      });

    case _entries.DRAFT_DISCARD:
      return initialState;

    case _entries.DRAFT_LOCAL_BACKUP_RETRIEVED:
      return state.set('localBackup', (0, _immutable.fromJS)(action.payload.entry));

    case _entries.DRAFT_CHANGE_FIELD:
      return state.withMutations(state => {
        state.setIn(['entry', 'data', action.payload.field], action.payload.value);
        state.mergeDeepIn(['fieldsMetaData'], (0, _immutable.fromJS)(action.payload.metadata));
        state.set('hasChanged', true);
      });

    case _entries.DRAFT_VALIDATION_ERRORS:
      if (action.payload.errors.length === 0) {
        return state.deleteIn(['fieldsErrors', action.payload.uniquefieldId]);
      } else {
        return state.setIn(['fieldsErrors', action.payload.uniquefieldId], action.payload.errors);
      }

    case _entries.DRAFT_CLEAR_ERRORS:
      {
        return state.set('fieldsErrors', (0, _immutable.Map)());
      }

    case _entries.ENTRY_PERSIST_REQUEST:
    case _editorialWorkflow.UNPUBLISHED_ENTRY_PERSIST_REQUEST:
      {
        return state.setIn(['entry', 'isPersisting'], true);
      }

    case _entries.ENTRY_PERSIST_FAILURE:
    case _editorialWorkflow.UNPUBLISHED_ENTRY_PERSIST_FAILURE:
      {
        return state.deleteIn(['entry', 'isPersisting']);
      }

    case _entries.ENTRY_PERSIST_SUCCESS:
    case _editorialWorkflow.UNPUBLISHED_ENTRY_PERSIST_SUCCESS:
      return state.withMutations(state => {
        state.deleteIn(['entry', 'isPersisting']);
        state.set('hasChanged', false);

        if (!state.getIn(['entry', 'slug'])) {
          state.setIn(['entry', 'slug'], action.payload.slug);
        }
      });

    case _entries.ENTRY_DELETE_SUCCESS:
      return state.withMutations(state => {
        state.deleteIn(['entry', 'isPersisting']);
        state.set('hasChanged', false);
      });

    case _media.ADD_ASSET:
      if (state.has('mediaFiles')) {
        return state.update('mediaFiles', list => list.push(action.payload.public_path));
      }

      return state;

    case _media.REMOVE_ASSET:
      return state.update('mediaFiles', list => list.filterNot(path => path === action.payload));

    default:
      return state;
  }
};

var _default = entryDraftReducer;
exports.default = _default;