"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Border = function Border(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17.6 17.6"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "#5c6a82",
    stroke: "#5c6a82",
    strokeWidth: "1.6",
    transform: "translate(-299.2 -384.2)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M302 385h6v8h-8v-6a2 2 0 012-2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M308 385h6a2 2 0 012 2v6h-8v-8z",
    "data-name": "Rectangle"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M300 393h8v8h-6a2 2 0 01-2-2v-6z",
    "data-name": "Rectangle"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M308 393h8v6a2 2 0 01-2 2h-6v-8z",
    "data-name": "Rectangle"
  })));
};

var _default = Border;
exports["default"] = _default;
module.exports = exports.default;