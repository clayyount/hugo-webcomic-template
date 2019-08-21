"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortKeys = void 0;

const sortKeys = function sortKeys() {
  let sortedKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return (a, b) => {
    const idxA = sortedKeys.indexOf(a);
    const idxB = sortedKeys.indexOf(b);

    if (idxA === -1 || idxB === -1) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }

    if (idxA > idxB) return 1;
    if (idxA < idxB) return -1;
    return 0;
  };
};

exports.sortKeys = sortKeys;