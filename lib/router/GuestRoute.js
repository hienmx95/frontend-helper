"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _history = _interopRequireDefault(require("./history"));

var _localStorageCookies = require("../localStorageCookies");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var GuestRoute = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(GuestRoute, _React$Component);

  function GuestRoute(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _history["default"].listen(function (location, action) {
      var token = (0, _localStorageCookies.getToken)();

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
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, _extends({}, rest, {
      render: function render(props) {
        return !authUser.isLogged ? /*#__PURE__*/_react["default"].createElement(Component, props) : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
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
}(_react["default"].Component);

function mapStateToProps(state) {
  return {
    authUser: state.authUser
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(GuestRoute);

exports["default"] = _default;
module.exports = exports.default;