import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

var FormComponent = function FormComponent(props) {
  var placeholder = props.placeholder,
      prefix = props.prefix,
      getFieldDecorator = props.getFieldDecorator,
      label = props.label;
  return /*#__PURE__*/React.createElement(Form.Item, {
    label: label
  }, getFieldDecorator('username', {
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  })( /*#__PURE__*/React.createElement(Input, {
    prefix: prefix,
    placeholder: placeholder
  })));
};

FormComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string,
  type: PropTypes.string
} : {};
FormComponent.defaultProps = {
  type: 'text'
};
var FormAntdComponent = Form.create({
  name: 'coordinated'
})(FormComponent);
export default FormAntdComponent;