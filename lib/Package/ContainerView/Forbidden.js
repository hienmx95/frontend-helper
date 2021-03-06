"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _forbidden = _interopRequireDefault(require("../images/forbidden.svg"));

var _Button = _interopRequireDefault(require("../Button"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Forbidden = function Forbidden() {
  var history = (0, _reactRouterDom.useHistory)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-forbidden-page"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Xin l\u1ED7i, b\u1EA1n kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp v\xE0o li\xEAn k\u1EBFt n\xE0y.", /*#__PURE__*/_react["default"].createElement("br", null), " Vui l\xF2ng li\xEAn h\u1EC7 Admin \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3"), /*#__PURE__*/_react["default"].createElement("img", {
    src: _forbidden["default"],
    alt: "forbidden"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: function onClick() {
      return history.go(-1);
    },
    type: "link"
  }, "< Quay l\u1EA1i trang tr\u01B0\u1EDBc"));
};

var _default = Forbidden;
exports["default"] = _default;
module.exports = exports.default;