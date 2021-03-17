import React from 'react';
import Remove from './icon/Remove';
import Success from './icon/Success';
import Error from './icon/Error';
import Edit from './icon/Edit';
import Warning from './icon/Warning';
import Alert from './icon/Alert';
import Comment from './icon/Comment';
import { notification } from 'antd';
import './style.scss';
export default (function (_ref) {
  var type = _ref.type,
      action = _ref.action,
      message = _ref.message,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? null : _ref$description,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 5 : _ref$duration,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 64 : _ref$top;
  var dataIcon = {
    'success': /*#__PURE__*/React.createElement(Success, null),
    'error': /*#__PURE__*/React.createElement(Error, null),
    'comment': /*#__PURE__*/React.createElement(Comment, null),
    'alert': /*#__PURE__*/React.createElement(Alert, null),
    'warning': /*#__PURE__*/React.createElement(Warning, null),
    'edit': /*#__PURE__*/React.createElement(Edit, null),
    'remove': /*#__PURE__*/React.createElement(Remove, null)
  };
  notification.open({
    message: /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: message
      }
    }),
    description: description,
    onClick: action,
    duration: duration,
    icon: dataIcon[type],
    className: "fwork-notification " + type,
    top: top
  });
});