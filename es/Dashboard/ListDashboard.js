import _regeneratorRuntime from "@babel/runtime/regenerator";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React, { useState } from 'react';
import { common, fetchAPI } from '@fwork/frontend-helper';
import { TableCustom } from '@fwork/table-custom';
import { Button, Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';
var baseUrlDashboard = process.env.FWORK_API_ENDPOINT + '/dashboard';
var HeaderPage = common.HeaderPage,
    Icon = common.Icon,
    confirm = common.confirm;

function ListDashboard(props) {
  var service = props.service,
      setDashboardLayout = props.setDashboardLayout;
  var history = useHistory();

  var _useState = useState(''),
      searchValue = _useState[0],
      setSearchValue = _useState[1];

  var _useState2 = useState({
    dashboards: [],
    pagination: {
      pageSize: 20,
      current: 1,
      total: 0
    }
  }),
      dashboardReducer = _useState2[0],
      setDashboardReducer = _useState2[1];

  var columnsDashboard = [{
    title: 'Mã',
    dataIndex: 'code',
    width: '10%'
  }, {
    title: 'Tên Layout',
    dataIndex: 'name',
    width: '30%',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return handleEditDashboard(record);
        },
        style: {
          cursor: "pointer"
        }
      }, text);
    }
  }, {
    title: 'Mô tả',
    dataIndex: 'description',
    width: '45%'
  }, {
    title: 'Trạng thái',
    dataIndex: 'status',
    width: '10%',
    render: function render(text, record) {
      return text ? "Đang sử dụng" : "Không sử dụng";
    }
  }, {
    width: '5%',
    align: 'right',
    render: function render(value, record) {
      return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tooltip, {
        placement: "bottom",
        title: "s\u1EEDa"
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          marginRight: '10px'
        },
        onClick: function onClick() {
          return handleEditDashboard(record);
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        size: 12,
        type: "edit"
      }))), /*#__PURE__*/React.createElement(Tooltip, {
        placement: "bottom",
        title: "x\xF3a"
      }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
        size: 12,
        type: "delete",
        onClick: function onClick() {
          return handleDeleteDashboard(record);
        }
      }))));
    }
  }];

  var fetchingDashboard = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(params) {
      var _yield$fetchAPI, resp, _resp$data, _resp$data$dashboards, _dashboards, _resp$data$total, total, _params$pageSize, pageSize, _params$current, current;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetchAPI({
                url: baseUrlDashboard + "/all",
                method: 'get',
                params: _extends({}, params, {
                  service: service
                })
              });

            case 2:
              _yield$fetchAPI = _context.sent;
              resp = _yield$fetchAPI.data;

              if (resp.success && resp.data) {
                _resp$data = resp.data, _resp$data$dashboards = _resp$data.dashboards, _dashboards = _resp$data$dashboards === void 0 ? [] : _resp$data$dashboards, _resp$data$total = _resp$data.total, total = _resp$data$total === void 0 ? 0 : _resp$data$total;
                _params$pageSize = params.pageSize, pageSize = _params$pageSize === void 0 ? 20 : _params$pageSize, _params$current = params.current, current = _params$current === void 0 ? 1 : _params$current;
                setDashboardReducer({
                  dashboards: _dashboards,
                  pagination: {
                    pageSize: pageSize,
                    current: current,
                    total: total
                  }
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchingDashboard(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDeleteDashboard = function handleDeleteDashboard(record) {
    confirm({
      title: "Xóa Layout",
      content: /*#__PURE__*/React.createElement(React.Fragment, null, "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a ", /*#__PURE__*/React.createElement("i", {
        style: {
          fontWeight: 'bold'
        }
      }, record.name), " ?"),
      okText: "Xóa Layout",
      type: 'danger',
      cancelText: "Hủy",
      onOk: function () {
        var _onOk = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
          var _yield$fetchAPI2, resp;

          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return fetchAPI({
                    url: baseUrlDashboard,
                    method: 'delete',
                    body: {
                      dashboardId: record._id
                    }
                  });

                case 2:
                  _yield$fetchAPI2 = _context2.sent;
                  resp = _yield$fetchAPI2.data;

                  if (!resp.success) {
                    _context2.next = 7;
                    break;
                  }

                  _context2.next = 7;
                  return fetchingDashboard();

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function onOk() {
          return _onOk.apply(this, arguments);
        }

        return onOk;
      }()
    });
  };

  var handleEditDashboard = function handleEditDashboard(record) {
    setDashboardLayout("dashboard");
    history.push({
      search: "?code=" + record.code
    });
  };

  var dashboards = dashboardReducer.dashboards,
      pagination = dashboardReducer.pagination;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeaderPage, {
    title: "Danh s\xE1ch Layout",
    placeholder: "Nh\u1EADp th\xF4ng tin t\xECm ki\u1EBFm",
    onSearch: function onSearch(value) {
      setSearchValue(value);
    },
    titleButton: "T\u1EA1o m\u1EDBi",
    onClick: function onClick() {
      return setDashboardLayout("create-dashboard");
    },
    addon: /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return setDashboardLayout("dashboard");
      },
      className: "btn-icon-close",
      type: "secondary",
      style: {
        order: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 12,
      type: "close"
    }))
  }), /*#__PURE__*/React.createElement(TableCustom, {
    history: history,
    fixedParam: "service=Approval",
    columns: columnsDashboard,
    dataSource: dashboards,
    fetchingData: fetchingDashboard,
    searchValue: searchValue,
    pagination: pagination
  }));
}

export default ListDashboard;