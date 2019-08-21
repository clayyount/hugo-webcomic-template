"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.API_ERROR = void 0;

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

const API_ERROR = 'API_ERROR';
exports.API_ERROR = API_ERROR;

class APIError extends _extendableBuiltin(Error) {
  constructor(message, status, api) {
    let meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    super(message);
    this.message = message;
    this.status = status;
    this.api = api;
    this.name = API_ERROR;
    this.meta = meta;
  }

}

exports.default = APIError;