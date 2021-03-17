"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("./icon"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var EditIcon = function EditIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: _icon["default"]
  }, props));
};

var EditIconComponent = function EditIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: props.to
  }, /*#__PURE__*/_react["default"].createElement(_antd.Button, _extends({
    className: "fwork-btn-icon"
  }, props), /*#__PURE__*/_react["default"].createElement(EditIcon, null)));
};

EditIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  to: _propTypes["default"].string.isRequired
} : {};
EditIconComponent.defaultProps = {
  to: '/'
};
var _default = EditIconComponent;
exports["default"] = _default;
module.exports = exports.default;