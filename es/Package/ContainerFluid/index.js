import React from 'react';
import PropTypes from 'prop-types';

var ContainerFluidComponent = function ContainerFluidComponent(props) {
  var classExtend = props.classExtend,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-container-fluid " + classExtend
  }, children);
};

ContainerFluidComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: PropTypes.string
} : {};
ContainerFluidComponent.defaultProps = {
  classExtend: ''
};
export default ContainerFluidComponent;