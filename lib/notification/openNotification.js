"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Remove = _interopRequireDefault(require("./icon/Remove"));

var _Success = _interopRequireDefault(require("./icon/Success"));

var _Error = _interopRequireDefault(require("./icon/Error"));

var _Edit = _interopRequireDefault(require("./icon/Edit"));

var _Warning = _interopRequireDefault(require("./icon/Warning"));

var _Alert = _interopRequireDefault(require("./icon/Alert"));

var _Comment = _interopRequireDefault(require("./icon/Comment"));

var _antd = require("antd");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
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
    'success': /*#__PURE__*/_react["default"].createElement(_Success["default"], null),
    'error': /*#__PURE__*/_react["default"].createElement(_Error["default"], null),
    'comment': /*#__PURE__*/_react["default"].createElement(_Comment["default"], null),
    'alert': /*#__PURE__*/_react["default"].createElement(_Alert["default"], null),
    'warning': /*#__PURE__*/_react["default"].createElement(_Warning["default"], null),
    'edit': /*#__PURE__*/_react["default"].createElement(_Edit["default"], null),
    'remove': /*#__PURE__*/_react["default"].createElement(_Remove["default"], null)
  };

  _antd.notification.open({
    message: /*#__PURE__*/_react["default"].createElement("p", {
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
};

exports["default"] = _default;
module.exports = exports.default;