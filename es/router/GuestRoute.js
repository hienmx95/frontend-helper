function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import history from './history';
import { getToken } from '../localStorageCookies';

var GuestRoute = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(GuestRoute, _React$Component);

  function GuestRoute(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    history.listen(function (location, action) {
      var token = getToken();

      if (!token && action === 'POP') {
        window.location.reload();
      }
    });
    return _this;
  }

  var _proto = GuestRoute.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        authUser = _this$props.authUser,
        pathDefault = _this$props.pathDefault,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component", "authUser", "pathDefault"]);

    if (!authUser || authUser.loading) return null;
    return /*#__PURE__*/React.createElement(Route, _extends({}, rest, {
      render: function render(props) {
        return !authUser.isLogged ? /*#__PURE__*/React.createElement(Component, props) : /*#__PURE__*/React.createElement(Redirect, {
          to: {
            pathname: pathDefault ? pathDefault : '/app-menu',
            state: {
              from: props.location
            }
          }
        });
      }
    }));
  };

  return GuestRoute;
}(React.Component);

function mapStateToProps(state) {
  return {
    authUser: state.authUser
  };
}

export default connect(mapStateToProps, null)(GuestRoute);