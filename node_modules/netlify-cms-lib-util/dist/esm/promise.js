"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.then = exports.resolvePromiseProperties = exports.filterPromises = void 0;

var _zipObject = _interopRequireDefault(require("lodash/zipObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const filterPromises = (arr, filter) => Promise.all(arr.map(entry => filter(entry))).then(bits => arr.filter(() => bits.shift()));

exports.filterPromises = filterPromises;

const resolvePromiseProperties = obj => {
  // Get the keys which represent promises
  const promiseKeys = Object.keys(obj).filter(key => typeof obj[key].then === 'function');
  const promises = promiseKeys.map(key => obj[key]); // Resolve all promises

  return Promise.all(promises).then(resolvedPromises => // Return a copy of obj with promises overwritten by their
  // resolved values
  Object.assign({}, obj, (0, _zipObject.default)(promiseKeys, resolvedPromises)));
};

exports.resolvePromiseProperties = resolvePromiseProperties;

const then = fn => p => Promise.resolve(p).then(fn);

exports.then = then;