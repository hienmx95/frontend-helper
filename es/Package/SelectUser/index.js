import _regeneratorRuntime from "@babel/runtime/regenerator";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useEffect, useRef } from 'react';
import fetchAPI from '../../fetchAPI';
import PropTypes from 'prop-types';
import { Form, Select, Avatar } from 'antd';
import { debounce, xor } from 'lodash';
var Option = Select.Option;

function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current || {};
}

var isArray = function isArray(variable) {
  return !!variable && variable.constructor === Array;
};

var map = function map(variable) {
  return variable.map(function (el) {
    return el._id ? el._id : el;
  });
};

function isDifferent(preData, nextData) {
  if (!nextData || isArray(nextData) && !nextData.length) return false;

  if (preData !== nextData) {
    if (isArray(preData) && isArray(nextData)) {
      return xor(map(preData), map(nextData)).length > 0;
    }

    return true;
  }

  return false;
}

var SelectUser = function SelectUser(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      getFieldDecorator = _ref.getFieldDecorator,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$rules = _ref.rules,
      rules = _ref$rules === void 0 ? [] : _ref$rules,
      _ref$extendData = _ref.extendData,
      extendData = _ref$extendData === void 0 ? [] : _ref$extendData,
      widthPercent = _ref.widthPercent,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? [] : _ref$initialValue,
      onChange = _ref.onChange,
      _ref$showEmail = _ref.showEmail,
      showEmail = _ref$showEmail === void 0 ? false : _ref$showEmail,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      rest = _objectWithoutPropertiesLoose(_ref, ["name", "getFieldDecorator", "label", "rules", "extendData", "widthPercent", "initialValue", "onChange", "showEmail", "options"]);

  var prev = usePrevious({
    extendData: extendData,
    initialValue: initialValue,
    options: options
  });

  var _useState = useState([]),
      users = _useState[0],
      setUsers = _useState[1];

  useEffect(function () {
    if (!initialValue || !initialValue.length) {
      return;
    }

    if (isDifferent(prev.extendData, extendData) || isDifferent(prev.initialValue, initialValue)) {
      fetchInitialValue();
    }
  }, [extendData, initialValue, options]);
  useEffect(function () {
    if (isDifferent(prev.extendData, extendData) || isDifferent(prev.options, options)) {
      var data = extendData || [];

      if (options && options.length > 0) {
        data = data.concat(options.map(function (el) {
          return _extends({}, el, {
            name: el.fullName
          });
        }));
      }

      setUsers(data);
    }
  }, [extendData, options]);
  useEffect(function () {
    return function () {
      return setUsers([]);
    };
  }, []);

  var fetchInitialValue = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var USER_BACKEND, initialValue2, userIds, data, _yield$fetchAPI, result;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              USER_BACKEND = process.env.FWORK_API_ENDPOINT + '/users' || 'https://dev.fpt.work/api/v1/users';
              initialValue2 = Array.isArray(initialValue) ? initialValue : [initialValue];
              userIds = initialValue2.filter(function (el) {
                return !el.includes('_');
              });
              data = extendData || [];

              if (options && options.length > 0) {
                data = data.concat(options.map(function (el) {
                  return _extends({}, el, {
                    name: el.fullName,
                    isUser: true
                  });
                }));
              }

              if (!userIds.length) {
                _context.next = 16;
                break;
              }

              if (!(options && options.length > 0)) {
                _context.next = 9;
                break;
              }

              _context.next = 16;
              break;

            case 9:
              _context.next = 11;
              return fetchAPI(USER_BACKEND + "/info", 'GET', null, {
                userIds: userIds
              });

            case 11:
              _yield$fetchAPI = _context.sent;
              result = _yield$fetchAPI.data;

              if (!(!result || !result.data || !result.success)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              data = data.concat(result.data.map(function (el) {
                return _extends({}, el, {
                  name: el.fullName,
                  isUser: true
                });
              }));

            case 16:
              setUsers(data);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchInitialValue() {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetchUsers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(key) {
      var USER_BACKEND, url, data, _yield$fetchAPI2, result;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              USER_BACKEND = process.env.FWORK_API_ENDPOINT + '/users' || 'https://dev.fpt.work/api/v1/users';
              url = USER_BACKEND + "/search";
              data = {
                url: url,
                method: 'GET',
                params: {
                  key: key
                }
              };
              _context2.next = 5;
              return fetchAPI(data);

            case 5:
              _yield$fetchAPI2 = _context2.sent;
              result = _yield$fetchAPI2.data;

              if (!(!result || !result.data || !result.success)) {
                _context2.next = 10;
                break;
              }

              console.error('[Select User] Some thing wrong when get users!');
              return _context2.abrupt("return", []);

            case 10:
              return _context2.abrupt("return", result.data.map(function (el) {
                return _extends({}, el, {
                  name: el.fullName,
                  isUser: true
                });
              }));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchUsers(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetchData = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(key) {
      var optionDataFiltered, extendDataFiltered, _users, _extendDataFiltered;

      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (key === void 0) {
                key = '';
              }

              key = key.trim();

              if (!(options && options.length > 0)) {
                _context3.next = 9;
                break;
              }

              options = options.map(function (el) {
                return _extends({}, el, {
                  name: el.fullName,
                  isUser: true
                });
              });
              optionDataFiltered = options.filter(function (el) {
                return el.name.toLowerCase().includes(key.toLowerCase());
              });
              extendDataFiltered = extendData.filter(function (el) {
                return el.name.toLowerCase().includes(key.toLowerCase());
              });
              setUsers(optionDataFiltered.concat(extendDataFiltered));
              _context3.next = 14;
              break;

            case 9:
              _context3.next = 11;
              return fetchUsers(key);

            case 11:
              _users = _context3.sent;
              _extendDataFiltered = extendData.filter(function (el) {
                return el.name.toLowerCase().includes(key.toLowerCase());
              });
              setUsers(_users.concat(_extendDataFiltered));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchData(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  if (typeof getFieldDecorator !== 'function' || !getFieldDecorator) {
    getFieldDecorator = function getFieldDecorator() {
      return function (el) {
        return el;
      };
    };

    rest.defaultValue = initialValue;
  }

  return /*#__PURE__*/React.createElement(Form.Item, {
    label: label,
    className: "fwork-form-item"
  }, getFieldDecorator(name, {
    rules: rules,
    initialValue: initialValue
  })( /*#__PURE__*/React.createElement(Select, _extends({
    className: "fwork-select-user",
    dropdownClassName: "fwork-dropdown-select-users",
    onSearch: debounce(fetchData, 300),
    style: {
      width: widthPercent + "%"
    },
    notFoundContent: null,
    onChange: onChange,
    filterOption: false,
    showSearch: true,
    onFocus: function onFocus() {
      return fetchData();
    }
  }, rest), users.map(function (user) {
    var userId = user._id,
        name = user.name,
        avatar = user.avatar,
        _user$username = user.username,
        username = _user$username === void 0 ? '' : _user$username,
        _user$email = user.email,
        email = _user$email === void 0 ? '' : _user$email,
        _user$lastName = user.lastName,
        lastName = _user$lastName === void 0 ? '' : _user$lastName,
        status = user.status,
        isUser = user.isUser;
    return /*#__PURE__*/React.createElement(Option, {
      key: userId,
      value: userId,
      disabled: status === 'disabled'
    }, /*#__PURE__*/React.createElement("div", {
      className: "fwork-option-select-user"
    }, isUser && /*#__PURE__*/React.createElement("div", {
      className: "fwork-option-avatar"
    }, /*#__PURE__*/React.createElement(Avatar, {
      size: 32,
      src: avatar,
      style: {
        backgroundColor: getColor(lastName[0])
      }
    }, name ? name[0] : '')), /*#__PURE__*/React.createElement("div", {
      className: "fwork-option-user-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "info-name"
    }, /*#__PURE__*/React.createElement("span", null, name), status === 'disabled' && /*#__PURE__*/React.createElement("span", {
      className: "user-inactive"
    }, "inactive")), showEmail ? /*#__PURE__*/React.createElement("div", null, email) : !!username && /*#__PURE__*/React.createElement("span", {
      className: "info-username"
    }, "@", username))));
  }))));
};

var getColor = function getColor(_char) {
  if (_char === void 0) {
    _char = 'O';
  }

  if (typeof _char !== 'string') {
    return '#e7e9ed';
  }

  _char = _char.toUpperCase();
  var colors = ['#ffa726', '#ef5350', '#ec407a', '#fdd835', '#66bb6a', '#26a69a', '#00bcd4', '#42a5f5', '#5c6bc0'];
  var n = _char.charCodeAt(0) - 65;
  var index = n % colors.length;

  if (index < 0 || index >= colors.length) {
    return '#e7e9ed';
  }

  return colors[index];
};

SelectUser.propTypes = process.env.NODE_ENV !== "production" ? {
  rules: PropTypes.array,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  widthPercent: PropTypes.number,
  initialValue: PropTypes.any,
  extendData: PropTypes.array
} : {};
SelectUser.defaultProps = {
  type: 'text',
  widthPercent: 100,
  name: '',
  initialValue: undefined
};
export default SelectUser;