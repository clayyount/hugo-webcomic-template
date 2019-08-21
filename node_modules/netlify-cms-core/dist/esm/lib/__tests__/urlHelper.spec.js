"use strict";

var _immutable = require("immutable");

var _urlHelper = require("../urlHelper");

describe('sanitizeURI', () => {
  // `sanitizeURI` tests from RFC 3987
  it('should keep valid URI chars (letters digits _ - . ~)', () => {
    expect((0, _urlHelper.sanitizeURI)('This, that-one_or.the~other 123!')).toEqual('Thisthat-one_or.the~other123');
  });
  it('should not remove accents', () => {
    expect((0, _urlHelper.sanitizeURI)('ěščřžý')).toEqual('ěščřžý');
  });
  it('should keep valid non-latin chars (ucschars in RFC 3987)', () => {
    expect((0, _urlHelper.sanitizeURI)('日本語のタイトル')).toEqual('日本語のタイトル');
  });
  it('should not keep valid non-latin chars (ucschars in RFC 3987) if set to ASCII mode', () => {
    expect((0, _urlHelper.sanitizeURI)('ěščřžý日本語のタイトル', {
      encoding: 'ascii'
    })).toEqual('');
  });
  it('should not normalize Unicode strings', () => {
    expect((0, _urlHelper.sanitizeURI)('\u017F\u0323\u0307')).toEqual('\u017F\u0323\u0307');
    expect((0, _urlHelper.sanitizeURI)('\u017F\u0323\u0307')).not.toEqual('\u1E9B\u0323');
  });
  it('should allow a custom replacement character', () => {
    expect((0, _urlHelper.sanitizeURI)('duck\\goose.elephant', {
      replacement: '-'
    })).toEqual('duck-goose.elephant');
  });
  it('should not allow an improper replacement character', () => {
    expect(() => {
      (0, _urlHelper.sanitizeURI)('I! like! dollars!', {
        replacement: '$'
      });
    }).toThrow();
  });
  it('should not actually URI-encode the characters', () => {
    expect((0, _urlHelper.sanitizeURI)('🎉')).toEqual('🎉');
    expect((0, _urlHelper.sanitizeURI)('🎉')).not.toEqual('%F0%9F%8E%89');
  });
});
describe('sanitizeSlug', () => {
  it('throws an error for non-strings', () => {
    expect(() => (0, _urlHelper.sanitizeSlug)({})).toThrowError('The input slug must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)([])).toThrowError('The input slug must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)(false)).toThrowError('The input slug must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)(null)).toThrowError('The input slug must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)(11234)).toThrowError('The input slug must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)(undefined)).toThrowError('The input slug must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)(() => {})).toThrowError('The input slug must be a string.');
  });
  it('throws an error for non-string replacements', () => {
    expect(() => (0, _urlHelper.sanitizeSlug)('test', (0, _immutable.Map)({
      sanitize_replacement: {}
    }))).toThrowError('`options.replacement` must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)('test', (0, _immutable.Map)({
      sanitize_replacement: []
    }))).toThrowError('`options.replacement` must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)('test', (0, _immutable.Map)({
      sanitize_replacement: false
    }))).toThrowError('`options.replacement` must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)('test', (0, _immutable.Map)({
      sanitize_replacement: null
    }))).toThrowError('`options.replacement` must be a string.');
    expect(() => (0, _urlHelper.sanitizeSlug)('test', (0, _immutable.Map)({
      sanitize_replacement: 11232
    }))).toThrowError('`options.replacement` must be a string.'); // do not test undefined for this variant since a default is set in the cosntructor.
    //expect(() => sanitizeSlug('test', { sanitize_replacement: undefined })).toThrowError("`options.replacement` must be a string.");

    expect(() => (0, _urlHelper.sanitizeSlug)('test', (0, _immutable.Map)({
      sanitize_replacement: () => {}
    }))).toThrowError('`options.replacement` must be a string.');
  });
  it('should keep valid URI chars (letters digits _ - . ~)', () => {
    expect((0, _urlHelper.sanitizeSlug)('This, that-one_or.the~other 123!')).toEqual('This-that-one_or.the~other-123');
  });
  it('should remove accents with `clean_accents` set', () => {
    expect((0, _urlHelper.sanitizeSlug)('ěščřžý', (0, _immutable.Map)({
      clean_accents: true
    }))).toEqual('escrzy');
  });
  it('should remove non-latin chars in "ascii" mode', () => {
    expect((0, _urlHelper.sanitizeSlug)('ěščřžý日本語のタイトル', (0, _immutable.Map)({
      encoding: 'ascii'
    }))).toEqual('');
  });
  it('should clean accents and strip non-latin chars in "ascii" mode with `clean_accents` set', () => {
    expect((0, _urlHelper.sanitizeSlug)('ěščřžý日本語のタイトル', (0, _immutable.Map)({
      encoding: 'ascii',
      clean_accents: true
    }))).toEqual('escrzy');
  });
  it('removes double replacements', () => {
    expect((0, _urlHelper.sanitizeSlug)('test--test')).toEqual('test-test');
    expect((0, _urlHelper.sanitizeSlug)('test   test')).toEqual('test-test');
  });
  it('removes trailing replacements', () => {
    expect((0, _urlHelper.sanitizeSlug)('test   test   ')).toEqual('test-test');
  });
  it('removes leading replacements', () => {
    expect((0, _urlHelper.sanitizeSlug)('"test"    test')).toEqual('test-test');
  });
  it('uses alternate replacements', () => {
    expect((0, _urlHelper.sanitizeSlug)('test   test   ', (0, _immutable.Map)({
      sanitize_replacement: '_'
    }))).toEqual('test_test');
  });
});