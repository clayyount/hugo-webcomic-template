'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('slate');

var _changes = require('../changes');

/**
 * Insert a new row when pressing "Enter"
 */
function onEnter(event, change, editor, opts) {
    event.preventDefault();

    return (0, _changes.insertRow)(opts, change);
}

exports.default = onEnter;