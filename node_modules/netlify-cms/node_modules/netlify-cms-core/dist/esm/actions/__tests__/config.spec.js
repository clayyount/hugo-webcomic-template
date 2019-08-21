"use strict";

var _immutable = require("immutable");

var _config = require("../config");

describe('config', () => {
  describe('applyDefaults', () => {
    it('should set publish_mode if not set', () => {
      const config = (0, _immutable.fromJS)({
        foo: 'bar',
        media_folder: 'path/to/media',
        public_folder: '/path/to/media',
        collections: []
      });
      expect((0, _config.applyDefaults)(config)).toEqual(config.set('publish_mode', 'simple'));
    });
    it('should set publish_mode from config', () => {
      const config = (0, _immutable.fromJS)({
        foo: 'bar',
        publish_mode: 'complex',
        media_folder: 'path/to/media',
        public_folder: '/path/to/media',
        collections: []
      });
      expect((0, _config.applyDefaults)(config)).toEqual(config);
    });
    it('should set public_folder based on media_folder if not set', () => {
      expect((0, _config.applyDefaults)((0, _immutable.fromJS)({
        foo: 'bar',
        media_folder: 'path/to/media',
        collections: []
      }))).toEqual((0, _immutable.fromJS)({
        foo: 'bar',
        publish_mode: 'simple',
        media_folder: 'path/to/media',
        public_folder: '/path/to/media',
        collections: []
      }));
    });
    it('should not overwrite public_folder if set', () => {
      expect((0, _config.applyDefaults)((0, _immutable.fromJS)({
        foo: 'bar',
        media_folder: 'path/to/media',
        public_folder: '/publib/path',
        collections: []
      }))).toEqual((0, _immutable.fromJS)({
        foo: 'bar',
        publish_mode: 'simple',
        media_folder: 'path/to/media',
        public_folder: '/publib/path',
        collections: []
      }));
    });
    it('should strip leading slashes from collection folder', () => {
      expect((0, _config.applyDefaults)((0, _immutable.fromJS)({
        collections: [{
          folder: '/foo'
        }]
      }))).toEqual((0, _immutable.fromJS)({
        publish_mode: 'simple',
        public_folder: '/',
        collections: [{
          folder: 'foo'
        }]
      }));
    });
    it('should strip leading slashes from collection files', () => {
      expect((0, _config.applyDefaults)((0, _immutable.fromJS)({
        collections: [{
          files: [{
            file: '/foo'
          }]
        }]
      }))).toEqual((0, _immutable.fromJS)({
        publish_mode: 'simple',
        public_folder: '/',
        collections: [{
          files: [{
            file: 'foo'
          }]
        }]
      }));
    });
  });
});