"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Success = function Success(_ref) {
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
    fill: "#43a047",
    d: "M7 14a7 7 0 117-7 7.008 7.008 0 01-7 7zM4.03 6.3a.7.7 0 00-.5 1.195l1.983 1.977a.7.7 0 00.362.193.714.714 0 00.133.013.7.7 0 00.255-.048.685.685 0 00.24-.158l3.957-3.957a.7.7 0 00-.99-.99L6.01 7.99 4.525 6.5a.7.7 0 00-.495-.2z"
  }));
};

var _default = Success;
exports["default"] = _default;
module.exports = exports.default;