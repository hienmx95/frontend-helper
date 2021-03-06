import React from 'react';

var Attention = function Attention(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#5c6a82",
    d: "M8 16a8 8 0 118-8 8.009 8.009 0 01-8 8zm0-5.6a.8.8 0 10.8.8.8.8 0 00-.8-.8zM8 4a.8.8 0 00-.8.8V8a.8.8 0 101.6 0V4.8A.8.8 0 008 4z"
  }));
};

export default Attention;