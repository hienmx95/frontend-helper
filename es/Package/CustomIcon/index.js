function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

var CustomIconComponent = function CustomIconComponent(props) {
  var to = props.to,
      componentIcon = props.componentIcon;

  var CustomIcon = function CustomIcon(props) {
    return /*#__PURE__*/React.createElement(Icon, _extends({
      component: componentIcon
    }, props));
  };

  if (to) {
    return /*#__PURE__*/React.createElement(Link, {
      to: props.to
    }, /*#__PURE__*/React.createElement(Button, _extends({
      className: "fwork-btn-icon"
    }, props), /*#__PURE__*/React.createElement(CustomIcon, null)));
  }

  return /*#__PURE__*/React.createElement(Button, _extends({
    className: "fwork-btn-icon"
  }, props), /*#__PURE__*/React.createElement(CustomIcon, null));
};

CustomIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  to: PropTypes.string
} : {};
CustomIconComponent.defaultProps = {
  to: null
};
export default CustomIconComponent;