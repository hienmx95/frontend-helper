"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormComponent = function FormComponent(props) {
  var placeholder = props.placeholder,
      prefix = props.prefix,
      getFieldDecorator = props.getFieldDecorator,
      label = props.label;
  return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    label: label
  }, getFieldDecorator('username', {
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  })( /*#__PURE__*/_react["default"].createElement(Input, {
    prefix: prefix,
    placeholder: placeholder
  })));
};

FormComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes["default"].string,
  type: _propTypes["default"].string
} : {};
FormComponent.defaultProps = {
  type: 'text'
};

var FormAntdComponent = _antd.Form.create({
  name: 'coordinated'
})(FormComponent);

var _default = FormAntdComponent;
exports["default"] = _default;
module.exports = exports.default;