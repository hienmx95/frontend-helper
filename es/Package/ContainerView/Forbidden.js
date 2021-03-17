import React from 'react';
import forbiddenImage from '../images/forbidden.svg';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

var Forbidden = function Forbidden() {
  var history = useHistory();
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-forbidden-page"
  }, /*#__PURE__*/React.createElement("h5", null, "Xin l\u1ED7i, b\u1EA1n kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp v\xE0o li\xEAn k\u1EBFt n\xE0y.", /*#__PURE__*/React.createElement("br", null), " Vui l\xF2ng li\xEAn h\u1EC7 Admin \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3"), /*#__PURE__*/React.createElement("img", {
    src: forbiddenImage,
    alt: "forbidden"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return history.go(-1);
    },
    type: "link"
  }, "< Quay l\u1EA1i trang tr\u01B0\u1EDBc"));
};

export default Forbidden;