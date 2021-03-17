import React from 'react';
import PropTypes from 'prop-types';
import ContainerFormComponent from '../ContainerForm';

var ContainerComponent = function ContainerComponent(props) {
  var classExtend = props.classExtend,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-container " + classExtend
  }, children);
};

ContainerComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: PropTypes.string
} : {};
ContainerFormComponent.defaultProps = {
  classExtend: ""
};
export default ContainerComponent;