"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContainerForm = _interopRequireDefault(require("../ContainerForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LayoutWithSidebar = function LayoutWithSidebar(props) {
  var classExtend = props.classExtend,
      children = props.children,
      collapsed = props.collapsed;
  var classCollapsed = collapsed ? 'collapsed' : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: ("fwork-layout-with-sidebar " + classExtend + " " + classCollapsed).trim()
  }, children);
};

LayoutWithSidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: _propTypes["default"].string,
  collapsed: _propTypes["default"].bool
} : {};
_ContainerForm["default"].defaultProps = {
  classExtend: '',
  collapsed: false
};
var _default = LayoutWithSidebar;
exports["default"] = _default;
module.exports = exports.default;