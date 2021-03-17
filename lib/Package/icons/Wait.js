"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wait = function Wait(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 13.333 13.333"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#a2aab7",
    d: "M3.7 7.407A3.7 3.7 0 100 3.7a3.7 3.7 0 003.7 3.707z",
    transform: "translate(2.963 2.963)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#a2aab7",
    d: "M6.667 13.333a6.667 6.667 0 116.667-6.667 6.674 6.674 0 01-6.667 6.667zm0-11.852a5.185 5.185 0 105.185 5.185 5.191 5.191 0 00-5.185-5.185z"
  }));
};

var _default = Wait;
exports["default"] = _default;
module.exports = exports.default;