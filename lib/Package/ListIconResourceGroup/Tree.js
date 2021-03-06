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
    viewBox: "0 0 15.465 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "icon",
    d: "M24.481,16.055h.529a.784.784,0,0,0,.658-1.214L22.276,9.552a.768.768,0,0,0-.664-.353.784.784,0,0,0-.66.37l-3.293,5.289a.784.784,0,0,0,.666,1.2h.519l-1.436,3.312a.784.784,0,0,0,.719,1.095H21v1.783a20.371,20.371,0,0,0-2.386-.143,19.907,19.907,0,0,0-3.882.378V21.238h1.679a.784.784,0,0,0,.709-1.109l-.9-1.973a.784.784,0,0,0,.654-1.2l-2.388-3.743a.784.784,0,0,0-1.326,0l-2.319,3.753a.784.784,0,0,0,.652,1.195l-.9,1.973a.784.784,0,0,0,.713,1.107h1.857v1.636A15.047,15.047,0,0,0,11,23.7a.784.784,0,1,0,.674,1.414,16.49,16.49,0,0,1,6.952-1.44,16.963,16.963,0,0,1,6.156,1.093.784.784,0,0,0,.574-1.457,16.65,16.65,0,0,0-2.787-.815V20.462H25.2a.784.784,0,0,0,.719-1.1ZM12.533,19.671l.9-1.974h0a.784.784,0,0,0,.033-.1c0-.018.014-.035.018-.055a.378.378,0,0,0,0-.067.784.784,0,0,0,0-.09h0a.784.784,0,0,0,0-.1v-.029a.784.784,0,0,0-.037-.137c0-.014-.012-.025-.018-.037a.784.784,0,0,0-.043-.088c0-.018-.022-.031-.031-.049a.784.784,0,0,0-.049-.065l-.045-.047L13.2,16.78l-.051-.039a.784.784,0,0,0-.084-.049l-.033-.02h0a.783.783,0,0,0-.127-.043l.934-1.51.964,1.512a.78.78,0,0,0-.49,1.134l.879,1.924Zm6.8-.784,1.432-3.314h0a.923.923,0,0,0,.065-.308h0v-.027a.784.784,0,0,0-.012-.125.224.224,0,0,0-.018-.059.783.783,0,0,0-.027-.088c0-.02-.02-.037-.027-.055a.784.784,0,0,0-.055-.071c0-.014-.022-.025-.031-.039a.783.783,0,0,0-.065-.078l-.031-.027a.768.768,0,0,0-.084-.069l-.043-.024a.784.784,0,0,0-.086-.047h-.01a.783.783,0,0,0-.315-.069h-.294l1.9-3.04,1.959,3.038h-.309a.78.78,0,0,0-.676,1.175l1.41,3.236Z",
    transform: "translate(-10.524 -9.199)",
    fill: "#5c6a82"
  }));
};

var TreeIconComponent = function TreeIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props));
};

TreeIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
TreeIconComponent.defaultProps = {
  type: ''
};
var _default = TreeIconComponent;
exports["default"] = _default;
module.exports = exports.default;