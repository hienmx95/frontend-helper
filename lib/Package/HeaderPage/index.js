"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = _interopRequireDefault(require("../icons"));

var _reactRouterDom = require("react-router-dom");

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Search = _antd.Input.Search;

function HeaderPage(props) {
  var history = (0, _reactRouterDom.useHistory)();
  var title = props.title,
      placeholder = props.placeholder,
      titleButton = props.titleButton,
      onClick = props.onClick,
      actionCancel = props.actionCancel,
      actionEdit = props.actionEdit,
      actionTransfer = props.actionTransfer,
      actionDelete = props.actionDelete,
      onSearch = props.onSearch,
      initSearchValue = props.initSearchValue,
      hideShadow = props.hideShadow,
      addon = props.addon;

  var _renderButtonAction = function _renderButtonAction(action, icon) {
    var onAction;

    if ((0, _lodash.isString)(action)) {
      onAction = function onAction() {
        return history.push(action);
      };
    } else if ((0, _lodash.isFunction)(action)) {
      onAction = action;
    } else {
      return '';
    }

    return /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      className: "fwork-btn-icon",
      onClick: onAction
    }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
      type: icon
    }));
  };

  var _renderSearch = function _renderSearch() {
    if (!(0, _lodash.isFunction)(onSearch)) {
      return '';
    }

    return /*#__PURE__*/_react["default"].createElement(Search, {
      placeholder: placeholder || 'Tìm kiếm',
      onChange: function onChange(e) {
        var searchValue = e.target.value.trim();
        handleSearch(searchValue);
      },
      defaultValue: initSearchValue || '',
      className: "fwork-search-bar"
    });
  };

  var handleSearch = debounce(function (searchValue) {
    onSearch(searchValue);
  }, 300);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-header-page " + (hideShadow ? 'hide-box-shadow' : '')
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-header-page-actions"
  }, addon, _renderSearch(), titleButton ? /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    type: "primary",
    onClick: onClick
  }, titleButton) : '', _renderButtonAction(actionEdit, 'edit'), _renderButtonAction(actionTransfer, 'move'), _renderButtonAction(actionDelete, 'delete'), _renderButtonAction(actionCancel, 'close')));
}

function debounce(a, b, c) {
  var d, e;
  return function () {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }

    var f = this;
    var g = arguments;
    return clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e;
  };
}

HeaderPage.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  titleButton: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onSearch: _propTypes["default"].func
} : {};
var _default = HeaderPage;
exports["default"] = _default;
module.exports = exports.default;