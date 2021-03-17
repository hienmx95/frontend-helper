"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BorderLg = function BorderLg(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(-1183 -60)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "12",
    height: "2",
    fill: "#5c6a82",
    rx: "1",
    transform: "rotate(90 565 625)"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#5c6a82",
    strokeWidth: "2",
    "data-name": "Rectangle",
    transform: "translate(1183 60)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "12",
    height: "12",
    stroke: "none",
    rx: "2"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "10",
    height: "10",
    x: "1",
    y: "1",
    rx: "1"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "12",
    height: "2",
    fill: "#5c6a82",
    "data-name": "Rectangle",
    rx: "1",
    transform: "translate(1183 65)"
  })));
};

var _default = BorderLg;
exports["default"] = _default;
module.exports = exports.default;