"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Apps = function Apps(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#5c6a82",
    d: "M2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#5c6a82",
    d: "M2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2z",
    "data-name": "Path",
    transform: "translate(9)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#5c6a82",
    d: "M0 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H2a2 2 0 01-2-2z",
    "data-name": "Path",
    transform: "translate(0 9)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#5c6a82",
    d: "M2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2z",
    "data-name": "Path",
    transform: "translate(9 9)"
  }));
};

var _default = Apps;
exports["default"] = _default;
module.exports = exports.default;