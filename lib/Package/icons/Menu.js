"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Menu = function Menu(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 10"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "#5c6a82",
    transform: "translate(-1161 -59.3)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1161 59.3)"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "12",
    height: "2",
    "data-name": "Rectangle",
    rx: "1",
    transform: "translate(1161 67.3)"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "12",
    height: "2",
    "data-name": "Rectangle",
    rx: "1",
    transform: "translate(1161 63.3)"
  })));
};

var _default = Menu;
exports["default"] = _default;
module.exports = exports.default;