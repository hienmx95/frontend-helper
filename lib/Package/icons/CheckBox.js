"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckBox = function CheckBox(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    "data-name": "Checkboxes / Checked",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "15",
    height: "15",
    fill: "#5c6a82",
    stroke: "#5c6a82",
    strokeWidth: "2",
    rx: "2",
    transform: "translate(2.5 2.5)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    d: "M2.134 2.866A1.25 1.25 0 00.366 4.634l2.5 2.5a1.25 1.25 0 001.768 0l5-5A1.25 1.25 0 007.866.366L3.75 4.482z",
    "data-name": "Icons / Checked",
    transform: "translate(5 6.25)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h20v20H0z",
    "data-name": "Rectangle"
  }));
};

var _default = CheckBox;
exports["default"] = _default;
module.exports = exports.default;