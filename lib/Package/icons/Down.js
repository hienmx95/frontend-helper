"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Down = function Down(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 8 4.705"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#5c6a82",
    d: "M.21 3.494L3.5.207a.708.708 0 011 1L1.707 4 4.5 6.791a.708.708 0 11-1 1L.21 4.506a.716.716 0 010-1.012z",
    transform: "rotate(-90 2.353 2.353)"
  }));
};

var _default = Down;
exports["default"] = _default;
module.exports = exports.default;