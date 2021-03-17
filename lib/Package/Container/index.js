"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContainerForm = _interopRequireDefault(require("../ContainerForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContainerComponent = function ContainerComponent(props) {
  var classExtend = props.classExtend,
      children = props.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-container " + classExtend
  }, children);
};

ContainerComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: _propTypes["default"].string
} : {};
_ContainerForm["default"].defaultProps = {
  classExtend: ""
};
var _default = ContainerComponent;
exports["default"] = _default;
module.exports = exports.default;