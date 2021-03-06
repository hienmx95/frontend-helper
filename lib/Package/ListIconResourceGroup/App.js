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
    id: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path",
    d: "M1.778,0A1.778,1.778,0,0,0,0,1.778V7.111A1.778,1.778,0,0,0,1.778,8.889H7.111A1.778,1.778,0,0,0,8.889,7.111V1.778A1.778,1.778,0,0,0,7.111,0Z",
    fill: "#5c6a82"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path-2",
    "data-name": "Path",
    d: "M1.778,0A1.778,1.778,0,0,0,0,1.778V4.444A1.778,1.778,0,0,0,1.778,6.222H4.444A1.778,1.778,0,0,0,6.222,4.444V1.778A1.778,1.778,0,0,0,4.444,0Z",
    transform: "translate(9.778 2.667)",
    fill: "#5c6a82"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path-3",
    "data-name": "Path",
    d: "M0,1.778A1.778,1.778,0,0,1,1.778,0H4.444A1.778,1.778,0,0,1,6.222,1.778V4.444A1.778,1.778,0,0,1,4.444,6.222H1.778A1.778,1.778,0,0,1,0,4.444Z",
    transform: "translate(9.778 9.778)",
    fill: "#5c6a82"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path-4",
    "data-name": "Path",
    d: "M1.778,0A1.778,1.778,0,0,0,0,1.778V4.444A1.778,1.778,0,0,0,1.778,6.222H4.444A1.778,1.778,0,0,0,6.222,4.444V1.778A1.778,1.778,0,0,0,4.444,0Z",
    transform: "translate(1.778 9.778)",
    fill: "#5c6a82"
  }));
};

var AppIconComponent = function AppIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props));
};

AppIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
AppIconComponent.defaultProps = {
  type: ''
};
var _default = AppIconComponent;
exports["default"] = _default;
module.exports = exports.default;