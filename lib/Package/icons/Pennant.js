"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pennant = function Pennant(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.486 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#5c6a82",
    d: "M88.407 14.31l-9.822-4.563a.834.834 0 00-1.185.753v9.1a.863.863 0 00.01.133v5.1a.832.832 0 101.664 0v-4.702l9.326-4.313a.833.833 0 00.483-.756.823.823 0 00-.476-.752zm-9.33 3.99v-6.489l7 3.252z",
    transform: "translate(-77.4 -9.67)"
  }));
};

var _default = Pennant;
exports["default"] = _default;
module.exports = exports.default;