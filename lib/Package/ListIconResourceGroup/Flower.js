"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    id: "icon",
    transform: "translate(-2 -2)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path",
    d: "M18,10a2.377,2.377,0,0,0-2.24-2.4,2.449,2.449,0,0,0-.08-3.28,2.367,2.367,0,0,0-3.28-.08,2.406,2.406,0,0,0-4.8,0,2.449,2.449,0,0,0-3.28.08A2.449,2.449,0,0,0,4.24,7.6a2.406,2.406,0,0,0,0,4.8,2.449,2.449,0,0,0,.08,3.28,2.367,2.367,0,0,0,3.28.08,2.406,2.406,0,0,0,4.8,0,2.449,2.449,0,0,0,3.28-.08,2.367,2.367,0,0,0,.08-3.28A2.377,2.377,0,0,0,18,10Zm-8,4a4,4,0,1,1,4-4A3.961,3.961,0,0,1,10,14Z",
    fill: "#5c6a82"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Ellipse",
    cx: "0.8",
    cy: "0.8",
    r: "0.8",
    transform: "translate(10.8 8.4)",
    fill: "#5c6a82"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Ellipse-2",
    "data-name": "Ellipse",
    cx: "0.8",
    cy: "0.8",
    r: "0.8",
    transform: "translate(7.6 8.4)",
    fill: "#5c6a82"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path-2",
    "data-name": "Path",
    d: "M11.59,14.59a1.828,1.828,0,0,1-1.52-.8.6.6,0,0,1,0-.72.387.387,0,0,1,.56,0,1.122,1.122,0,0,0,1.84,0,.387.387,0,0,1,.56,0,.6.6,0,0,1,0,.72A1.605,1.605,0,0,1,11.59,14.59Z",
    transform: "translate(-1.59 -2.19)",
    fill: "#5c6a82"
  })));
};

var FlowerIconComponent = function FlowerIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props));
};

FlowerIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
FlowerIconComponent.defaultProps = {
  type: ''
};
var _default = FlowerIconComponent;
exports["default"] = _default;
module.exports = exports.default;