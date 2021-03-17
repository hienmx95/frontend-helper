import React from 'react';
import PropTypes from 'prop-types';

var ContainerFormComponent = function ContainerFormComponent(props) {
  var classExtend = props.classExtend,
      children = props.children,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading;
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-container-form " + classExtend
  }, children);
};

ContainerFormComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: PropTypes.string
} : {};
ContainerFormComponent.defaultProps = {
  classExtend: ''
};
export default ContainerFormComponent;