"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  baseURL: 'http://192.168.1.10:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
});

var _default = instance;
exports["default"] = _default;