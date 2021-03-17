function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import { Route } from 'react-router-dom';

var PublicRoute = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PublicRoute, _React$Component);

  function PublicRoute(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = PublicRoute.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component"]);

    return /*#__PURE__*/React.createElement(Route, _extends({}, rest, {
      render: function render(props) {
        return /*#__PURE__*/React.createElement(Component, props);
      }
    }));
  };

  return PublicRoute;
}(React.Component);

export default PublicRoute;