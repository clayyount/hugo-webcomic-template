"use strict";

var _immutable = require("immutable");

var actions = _interopRequireWildcard(require("../../actions/entries"));

var _entryDraft = _interopRequireDefault(require("../entryDraft"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let initialState = (0, _immutable.Map)({
  entry: (0, _immutable.Map)(),
  mediaFiles: (0, _immutable.List)(),
  fieldsMetaData: (0, _immutable.Map)(),
  fieldsErrors: (0, _immutable.Map)(),
  hasChanged: false
});
const entry = {
  collection: 'posts',
  slug: 'slug',
  path: 'content/blog/art-and-wine-festival.md',
  partial: false,
  raw: '',
  data: {},
  metaData: null
};
describe('entryDraft reducer', () => {
  describe('DRAFT_CREATE_FROM_ENTRY', () => {
    it('should create draft from the entry', () => {
      expect((0, _entryDraft.default)(initialState, actions.createDraftFromEntry((0, _immutable.fromJS)(entry)))).toEqual((0, _immutable.fromJS)({
        entry: _objectSpread({}, entry, {
          newRecord: false
        }),
        mediaFiles: [],
        fieldsMetaData: (0, _immutable.Map)(),
        fieldsErrors: (0, _immutable.Map)(),
        hasChanged: false
      }));
    });
  });
  describe('DRAFT_CREATE_EMPTY', () => {
    it('should create a new draft ', () => {
      expect((0, _entryDraft.default)(initialState, actions.emptyDraftCreated((0, _immutable.fromJS)(entry)))).toEqual((0, _immutable.fromJS)({
        entry: _objectSpread({}, entry, {
          newRecord: true
        }),
        mediaFiles: [],
        fieldsMetaData: (0, _immutable.Map)(),
        fieldsErrors: (0, _immutable.Map)(),
        hasChanged: false
      }));
    });
  });
  describe('DRAFT_DISCARD', () => {
    it('should discard the draft and return initial state', () => {
      expect((0, _entryDraft.default)(initialState, actions.discardDraft())).toEqual(initialState);
    });
  });
  describe('DRAFT_CHANGE', () => {
    it.skip('should update the draft', () => {
      const newEntry = _objectSpread({}, entry, {
        raw: 'updated'
      });

      expect((0, _entryDraft.default)(initialState, actions.changeDraft(newEntry))).toEqual((0, _immutable.fromJS)({
        entry: _objectSpread({}, entry, {
          raw: 'updated'
        }),
        mediaFiles: [],
        hasChanged: true
      }));
    });
  });
  describe('persisting', () => {
    beforeEach(() => {
      initialState = (0, _immutable.fromJS)({
        entities: {
          'posts.slug': {
            collection: 'posts',
            slug: 'slug',
            path: 'content/blog/art-and-wine-festival.md',
            partial: false,
            raw: '',
            data: {},
            metaData: null
          }
        },
        pages: {}
      });
    });
    it('should handle persisting request', () => {
      const newState = (0, _entryDraft.default)(initialState, actions.entryPersisting((0, _immutable.Map)({
        name: 'posts'
      }), (0, _immutable.Map)({
        slug: 'slug'
      })));
      expect(newState.getIn(['entry', 'isPersisting'])).toBe(true);
    });
    it('should handle persisting success', () => {
      let newState = (0, _entryDraft.default)(initialState, actions.entryPersisting((0, _immutable.Map)({
        name: 'posts'
      }), (0, _immutable.Map)({
        slug: 'slug'
      })));
      newState = (0, _entryDraft.default)(newState, actions.entryPersisted((0, _immutable.Map)({
        name: 'posts'
      }), (0, _immutable.Map)({
        slug: 'slug'
      })));
      expect(newState.getIn(['entry', 'isPersisting'])).toBeUndefined();
    });
    it('should handle persisting error', () => {
      let newState = (0, _entryDraft.default)(initialState, actions.entryPersisting((0, _immutable.Map)({
        name: 'posts'
      }), (0, _immutable.Map)({
        slug: 'slug'
      })));
      newState = (0, _entryDraft.default)(newState, actions.entryPersistFail((0, _immutable.Map)({
        name: 'posts'
      }), (0, _immutable.Map)({
        slug: 'slug'
      }), 'Error message'));
      expect(newState.getIn(['entry', 'isPersisting'])).toBeUndefined();
    });
  });
});