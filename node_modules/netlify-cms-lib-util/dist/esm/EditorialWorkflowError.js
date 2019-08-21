"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EDITORIAL_WORKFLOW_ERROR = void 0;

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

const EDITORIAL_WORKFLOW_ERROR = 'EDITORIAL_WORKFLOW_ERROR';
exports.EDITORIAL_WORKFLOW_ERROR = EDITORIAL_WORKFLOW_ERROR;

class EditorialWorkflowError extends _extendableBuiltin(Error) {
  constructor(message, notUnderEditorialWorkflow) {
    super(message);
    this.message = message;
    this.notUnderEditorialWorkflow = notUnderEditorialWorkflow;
    this.name = EDITORIAL_WORKFLOW_ERROR;
  }

}

exports.default = EditorialWorkflowError;