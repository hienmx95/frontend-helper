"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContainerFluidComponent = function ContainerFluidComponent(props) {
  var classExtend = props.classExtend,
      children = props.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-container-fluid " + classExtend
  }, children);
};

ContainerFluidComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: _propTypes["default"].string
} : {};
ContainerFluidComponent.defaultProps = {
  classExtend: ''
};
var _default = ContainerFluidComponent;
exports["default"] = _default;
module.exports = exports.default;