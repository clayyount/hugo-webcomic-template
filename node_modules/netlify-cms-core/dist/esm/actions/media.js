"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAsset = addAsset;
exports.removeAsset = removeAsset;
exports.REMOVE_ASSET = exports.ADD_ASSET = void 0;
const ADD_ASSET = 'ADD_ASSET';
exports.ADD_ASSET = ADD_ASSET;
const REMOVE_ASSET = 'REMOVE_ASSET';
exports.REMOVE_ASSET = REMOVE_ASSET;

function addAsset(assetProxy) {
  return {
    type: ADD_ASSET,
    payload: assetProxy
  };
}

function removeAsset(path) {
  return {
    type: REMOVE_ASSET,
    payload: path
  };
}