"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Processing = function Processing(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fbbf2b",
    d: "M9 16a7 7 0 117-7 7 7 0 01-7 7zm0-1.4A5.6 5.6 0 103.4 9 5.6 5.6 0 009 14.6zm.7-5.887l1.778 1.771a.7.7 0 11-.994.994L8.51 9.49A.7.7 0 018.3 9V6.2a.7.7 0 111.4 0z",
    transform: "translate(-2 -2)"
  }));
};

var _default = Processing;
exports["default"] = _default;
module.exports = exports.default;