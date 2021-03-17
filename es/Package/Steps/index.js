import React from 'react';
import Icon from '../icons';

var Steps = function Steps(_ref) {
  var children = _ref.children,
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? 1 : _ref$current,
      _ref$reject = _ref.reject,
      reject = _ref$reject === void 0 ? false : _ref$reject;

  var _getStatus = function _getStatus(index) {
    index = index + 1;

    if (current < index) {
      return 'wait';
    } else if (current > index || current === children.length) {
      return 'success';
    } else {
      if (reject) {
        return 'error';
      }

      return 'processing';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-steps"
  }, React.Children.map(children, function (child, i) {
    return React.cloneElement(child, {
      status: child.props.status || _getStatus(i)
    });
  }));
}; // eslint-disable-next-line react/display-name


Steps.Step = function (_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      status = _ref2.status;
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-step-item " + status
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    type: status
  })), /*#__PURE__*/React.createElement("div", {
    className: "fwork-step-item-content"
  }, /*#__PURE__*/React.createElement("h5", null, title), React.isValidElement(description) ? description : /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: description
    }
  })));
};

export default Steps;