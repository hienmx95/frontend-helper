"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContainerFormComponent = function ContainerFormComponent(props) {
  var classExtend = props.classExtend,
      children = props.children,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-container-form " + classExtend
  }, children);
};

ContainerFormComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: _propTypes["default"].string
} : {};
ContainerFormComponent.defaultProps = {
  classExtend: ''
};
var _default = ContainerFormComponent;
exports["default"] = _default;
module.exports = exports.default;