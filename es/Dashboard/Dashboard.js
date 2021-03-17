import _regeneratorRuntime from "@babel/runtime/regenerator";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect, useReducer, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Dropdown, Menu } from 'antd';
import GridLayout from 'react-grid-layout';
import './style.scss';
import { common, fetchAPI } from '@fwork/frontend-helper';
import { v4 } from 'uuid';
import IconEdit from './icons/icon_edit.svg';
import IconBack from './icons/icon_back.svg';
import IconForward from './icons/icon_forward.svg';
import IconPlus from './icons/icon_plus.svg';
import IconDropDown from './icons/icon_dropdown.svg';
import IconRemove from './icons/icon_remove.svg';
import IconScreen from './icons/icon_screen.svg';
import queryString from 'query-string';
var baseUrlDashboard = process.env.FWORK_API_ENDPOINT + '/dashboard';
var Button = common.Button,
    confirm = common.confirm;
var initialState = {
  dashboard: {},
  steps: [],
  pointer: 0 // position currentStep

};

var reducer = function reducer(state, action) {
  var steps = state.steps,
      pointer = state.pointer;

  switch (action.type) {
    case 'FETCHING_SUCCESS':
      return {
        dashboard: action.payload,
        steps: [action.payload],
        pointer: 0
      };

    case 'CHANGE_LAYOUT':
      // eslint-disable-next-line no-case-declarations
      var currentSteps = steps.filter(function (_item, index) {
        return index <= pointer;
      });
      return {
        dashboard: action.payload,
        steps: [].concat(currentSteps, [action.payload]),
        pointer: pointer + 1
      };

    case 'CANCEL_CHANGE':
      return {
        dashboard: steps[0],
        steps: [steps[0]],
        pointer: 0
      };

    case 'NEXT':
      if (pointer < steps.length - 1) {
        return _extends({}, state, {
          dashboard: steps[pointer + 1],
          pointer: pointer + 1
        });
      }

      return state;

    case 'PREVIOUS':
      if (pointer > 0) {
        return _extends({}, state, {
          dashboard: steps[pointer - 1],
          pointer: pointer - 1
        });
      }

      return state;

    default:
      return state;
  }
};

function Dashboard(props) {
  var history = useHistory();
  var service = props.service,
      _props$listGadgets = props.listGadgets,
      listGadgets = _props$listGadgets === void 0 ? [] : _props$listGadgets,
      setDashboardLayout = props.setDashboardLayout,
      setDashboardCreate = props.setDashboardCreate;

  var _useReducer = useReducer(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var dashboard = state.dashboard,
      steps = state.steps;

  var _useState = useState(false),
      visibleAddGadget = _useState[0],
      setVisibleAddGadget = _useState[1];

  var _useState2 = useState(false),
      isEdit = _useState2[0],
      setIsEdit = _useState2[1];

  var _useState3 = useState(window.innerWidth - 256),
      widthGrid = _useState3[0],
      setWidthGrid = _useState3[1];

  var _useState4 = useState(0),
      heightGird = _useState4[0],
      setHeightGrid = _useState4[1];

  var historyRef = useRef(null);

  var _queryString$parse = queryString.parse(history.location.search),
      code = _queryString$parse.code;

  useEffect(function () {
    fetchAPI({
      url: baseUrlDashboard + "/?service=" + service + "&code=" + code,
      method: 'get'
    }).then(function (resp) {
      if (resp.data.success && resp.data.data) {
        var _resp$data$data$compo = resp.data.data.components,
            components = _resp$data$data$compo === void 0 ? [] : _resp$data$data$compo;

        var newDashboard = _extends({}, resp.data.data, {
          components: components.map(function (component) {
            var gadget = getComponentByCode(component.code);

            var _getSizeComponent = getSizeComponent(gadget, widthGrid),
                _getSizeComponent$min = _getSizeComponent.minH,
                minH = _getSizeComponent$min === void 0 ? 1 : _getSizeComponent$min,
                _getSizeComponent$min2 = _getSizeComponent.minW,
                minW = _getSizeComponent$min2 === void 0 ? 1 : _getSizeComponent$min2,
                _getSizeComponent$max = _getSizeComponent.maxW,
                maxW = _getSizeComponent$max === void 0 ? Infinity : _getSizeComponent$max,
                _getSizeComponent$max2 = _getSizeComponent.maxH,
                maxH = _getSizeComponent$max2 === void 0 ? Infinity : _getSizeComponent$max2;

            return _extends({}, component, {
              minH: minH,
              minW: minW,
              maxH: maxH,
              maxW: maxW
            });
          })
        });

        dispatch({
          type: 'FETCHING_SUCCESS',
          payload: newDashboard
        });

        if (_.isEmpty(newDashboard.components)) {
          setIsEdit(true);
        }
      }
    });
  }, []);
  useEffect(function () {
    var minHeight = window.innerHeight;
    var height = getMaxOffsetHeight(dashboard.components) * 40 + 40 * 10;
    setHeightGrid(Math.max(minHeight, height));
  }, [state]);
  useEffect(function () {
    var handleResize = function handleResize() {
      return setWidthGrid(window.innerWidth - 256);
    };

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(function () {
    return function () {
      history.push({
        search: ''
      });
    };
  }, []);

  var onUnload = function onUnload(ev) {
    if (steps.length > 1) {
      ev.preventDefault();
      return ev.returnValue = "Are you sure you want to close?";
    }

    return null;
  };

  useEffect(function () {
    window.addEventListener("beforeunload", onUnload);
    historyRef.current = history.block(function (location, action) {
      if (steps.length > 1) return "Are you sure you want to leave this page?";
      return null;
    });
    return function () {
      if (historyRef.current) historyRef.current();
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [steps.length]);

  var handleLayoutChange = function handleLayoutChange(layout) {
    var components = dashboard.components.map(function (o) {
      var _layout$find = layout.find(function (item) {
        return item.i === o.i;
      }),
          w = _layout$find.w,
          h = _layout$find.h,
          x = _layout$find.x,
          y = _layout$find.y;

      return _extends({}, o, {
        w: w,
        h: h,
        x: x,
        y: y
      });
    });

    var newDashboard = _extends({}, dashboard, {
      components: components
    });

    dispatch({
      type: 'CHANGE_LAYOUT',
      payload: newDashboard
    });
  };

  var getComponentByCode = function getComponentByCode(code) {
    return listGadgets.find(function (gadget) {
      return gadget.code === code;
    }) || {};
  };

  var addGadget = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(gadget) {
      var _dashboard$components, components, maxOffsetY, uuid, _getSizeComponent2, _getSizeComponent2$w, w, _getSizeComponent2$h, h, _getSizeComponent2$mi, minH, _getSizeComponent2$mi2, minW, _getSizeComponent2$ma, maxW, _getSizeComponent2$ma2, maxH, newDashboard;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _dashboard$components = dashboard.components, components = _dashboard$components === void 0 ? [] : _dashboard$components;
              maxOffsetY = getMaxOffsetHeight(components);
              uuid = v4();
              _getSizeComponent2 = getSizeComponent(gadget, widthGrid), _getSizeComponent2$w = _getSizeComponent2.w, w = _getSizeComponent2$w === void 0 ? 1 : _getSizeComponent2$w, _getSizeComponent2$h = _getSizeComponent2.h, h = _getSizeComponent2$h === void 0 ? 1 : _getSizeComponent2$h, _getSizeComponent2$mi = _getSizeComponent2.minH, minH = _getSizeComponent2$mi === void 0 ? 1 : _getSizeComponent2$mi, _getSizeComponent2$mi2 = _getSizeComponent2.minW, minW = _getSizeComponent2$mi2 === void 0 ? 1 : _getSizeComponent2$mi2, _getSizeComponent2$ma = _getSizeComponent2.maxW, maxW = _getSizeComponent2$ma === void 0 ? Infinity : _getSizeComponent2$ma, _getSizeComponent2$ma2 = _getSizeComponent2.maxH, maxH = _getSizeComponent2$ma2 === void 0 ? Infinity : _getSizeComponent2$ma2;
              newDashboard = _extends({}, dashboard, {
                components: [].concat(dashboard.components, [{
                  code: gadget.code,
                  i: uuid,
                  w: w,
                  h: h,
                  minH: minH,
                  minW: minW,
                  maxH: maxH,
                  maxW: maxW,
                  x: 0,
                  y: maxOffsetY
                }])
              });
              dispatch({
                type: 'CHANGE_LAYOUT',
                payload: newDashboard
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addGadget(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var removeComponent = function removeComponent(i) {
    var newDashboard = _extends({}, dashboard, {
      components: dashboard.components.filter(function (o) {
        return o.i !== i;
      })
    });

    dispatch({
      type: 'CHANGE_LAYOUT',
      payload: newDashboard
    });
  };

  var handleSaveLayout = function handleSaveLayout(status) {
    console.log('dashboard', dashboard);
    var code = dashboard.code,
        isDefault = dashboard["default"];

    if (isDefault) {
      confirm({
        title: "Bạn đang sửa Layout mặc định",
        content: "Nhấn đồng ý để tạo Layout mới",
        okText: "Đồng ý",
        type: 'primary',
        cancelText: "Hủy bỏ",
        onOk: function onOk() {
          setDashboardLayout("create-dashboard");
          setDashboardCreate(_extends({}, dashboard, {
            status: status
          }));
        }
      });
    } else {
      fetchAPI({
        url: baseUrlDashboard + "/" + code,
        method: 'patch',
        body: _extends({}, dashboard, {
          status: status
        })
      }).then(function (resp) {
        if (resp.data.success) {
          dispatch({
            type: 'FETCHING_SUCCESS',
            payload: resp.data.data
          });
          setIsEdit(false);
        }
      });
    }
  };

  var handleCancel = function handleCancel() {
    if (steps.length > 1) {
      confirm({
        title: "Rời khỏi trang ?",
        content: "Thao tác trên trang này chưa được lưu.?",
        okText: "Thoát",
        type: 'danger',
        cancelText: "Bỏ qua",
        onOk: function onOk() {
          dispatch({
            type: 'CANCEL_CHANGE'
          });
          setIsEdit(false);
        }
      });
    } else {
      setIsEdit(false);
    }
  };

  var handleNext = function handleNext() {
    dispatch({
      type: 'NEXT'
    });
  };

  var handlePrevious = function handlePrevious() {
    dispatch({
      type: 'PREVIOUS'
    });
  };

  var MenuDropDown = /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return handleSaveLayout(false);
    }
  }, "L\u01B0u v\xE0o danh s\xE1ch")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement(Modal, {
    title: "Add Gadget",
    visible: visibleAddGadget,
    onOk: function onOk() {
      return setVisibleAddGadget(false);
    },
    onCancel: function onCancel() {
      return setVisibleAddGadget(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: '50vh',
      overflow: 'auto'
    }
  }, listGadgets.map(function (gadget) {
    return /*#__PURE__*/React.createElement("div", {
      className: "fwork-gadget-container",
      key: gadget.code
    }, /*#__PURE__*/React.createElement("img", {
      src: gadget.image
    }), /*#__PURE__*/React.createElement("div", {
      className: "fwork-gadget-information"
    }, /*#__PURE__*/React.createElement("span", null, gadget.name), /*#__PURE__*/React.createElement("span", null, gadget.description)), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return addGadget(gadget);
      }
    }, "Add Gadget"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fwork-dashboard-header"
  }, isEdit ? /*#__PURE__*/React.createElement("div", {
    className: "fwork-button-edit"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "link",
    onClick: function onClick() {
      return handleCancel();
    }
  }, "H\u1EE7y b\u1ECF"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setVisibleAddGadget(true);
    },
    type: "primary"
  }, /*#__PURE__*/React.createElement("img", {
    src: IconPlus
  }), " Th\xEAm bi\u1EC3u \u0111\u1ED3"), /*#__PURE__*/React.createElement(Button, {
    type: "default",
    onClick: handlePrevious
  }, /*#__PURE__*/React.createElement("img", {
    src: IconBack
  })), /*#__PURE__*/React.createElement(Button, {
    type: "default",
    onClick: handleNext
  }, /*#__PURE__*/React.createElement("img", {
    src: IconForward
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return handleSaveLayout(true);
    }
  }, "L\u01B0u v\xE0 s\u1EED d\u1EE5ng"), /*#__PURE__*/React.createElement(Dropdown, {
    overlay: MenuDropDown,
    placement: "bottomCenter",
    arrow: true,
    overlayClassName: "fwork-dropdown-save-layout"
  }, /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement("img", {
    src: IconDropDown
  })))) : /*#__PURE__*/React.createElement("div", {
    className: "fwork-button-default"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "link",
    onClick: function onClick() {
      return setDashboardLayout('list-dashboard');
    }
  }, "Danh s\xE1ch b\u1ED1 c\u1EE5c"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setIsEdit(true);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IconEdit
  }), "Ch\u1EC9nh s\u1EEDa b\u1ED1 c\u1EE5c"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return setDashboardLayout('create-dashboard');
    }
  }, "T\u1EA1o m\u1EDBi"))), !_.isEmpty(dashboard.components) && /*#__PURE__*/React.createElement(GridLayout, {
    className: "fwork-dashboard " + (isEdit ? 'fwork-dashboard-editing' : 'fwork-dashboard-default'),
    layout: dashboard.components // modify
    ,
    margin: [16, 16],
    cols: 12,
    rowHeight: 24,
    width: widthGrid,
    isDraggable: isEdit,
    isResizable: isEdit,
    onResizeStop: handleLayoutChange,
    onDragStop: handleLayoutChange,
    draggableCancel: "test"
  }, dashboard.components.map(function (component, index) {
    var gadget = getComponentByCode(component.code);
    return !_.isEmpty(gadget) ? /*#__PURE__*/React.createElement("div", {
      key: component.i,
      className: "fwork-dashboard-component"
    }, isEdit && /*#__PURE__*/React.createElement("div", {
      className: "fwork-dashboard-component-action"
    }, /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement("img", {
      src: IconScreen
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return removeComponent(component.i);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IconRemove
    }))), /*#__PURE__*/React.createElement("div", {
      className: "fwork-dashboard-component-content"
    }, /*#__PURE__*/React.createElement(gadget.component, gadget.props))) : /*#__PURE__*/React.createElement(React.Fragment, null);
  })), isEdit && /*#__PURE__*/React.createElement("div", {
    className: "fwork-dashboard-grid"
  }, renderGird(widthGrid, heightGird)));
}

export default Dashboard;

function getMaxOffsetHeight(components) {
  if (components === void 0) {
    components = [];
  }

  var maxOffsetY = 0;

  for (var i = 0; i < components.length; i++) {
    var component = components[i];

    if (maxOffsetY < component.h + component.y) {
      maxOffsetY = component.h + component.y;
    }
  }

  return maxOffsetY;
}

function renderGird(width, height) {
  if (width === void 0) {
    width = 0;
  }

  if (height === void 0) {
    height = 0;
  }

  var widthRectangle = (width - 16 * 13) / 12;
  var heightRectangle = 24;
  var paddingHeight = 16;
  var row = [];

  for (var i = 0; i < 12; i++) {
    // rectangle
    row.push( /*#__PURE__*/React.createElement("rect", {
      x: widthRectangle * i + paddingHeight * (i + 1),
      y: paddingHeight,
      width: widthRectangle,
      height: heightRectangle,
      fill: "#e4eaf2"
    }));
  }

  return /*#__PURE__*/React.createElement("svg", {
    width: width - 1,
    height: height,
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    x: "0",
    y: "0",
    width: "1",
    height: (24 + 16) / height
  }, row)), /*#__PURE__*/React.createElement("rect", {
    fill: "url(#grid)",
    x: "0",
    y: "0",
    width: width - 1,
    height: height
  }));
}

function getSizeComponent(gadget, widthGrid) {
  try {
    var _gadget$minWidth = gadget.minWidth,
        minWidth = _gadget$minWidth === void 0 ? 1 : _gadget$minWidth,
        _gadget$minHeight = gadget.minHeight,
        minHeight = _gadget$minHeight === void 0 ? 1 : _gadget$minHeight,
        _gadget$maxHeight = gadget.maxHeight,
        maxHeight = _gadget$maxHeight === void 0 ? Infinity : _gadget$maxHeight,
        _gadget$maxWidth = gadget.maxWidth,
        maxWidth = _gadget$maxWidth === void 0 ? Infinity : _gadget$maxWidth,
        w = gadget.w,
        h = gadget.h;
    var widthRectangle = (widthGrid - 16 * 13) / 12;
    var heightRectangle = 24;
    var padding = 16;
    var minW = Math.floor((minWidth + padding) / (widthRectangle + padding)) + 1;
    var minH = Math.floor((minHeight + padding) / (heightRectangle + padding)) + 1;
    var maxH = Math.floor((maxHeight + padding) / (heightRectangle + padding));
    var maxW = Math.floor((maxWidth + padding) / (widthRectangle + padding));
    return {
      w: w || Math.max(minW, 2),
      h: h || Math.max(minH, 4),
      minH: minH,
      minW: minW,
      maxH: maxH,
      maxW: maxW
    };
  } catch (error) {
    console.log(error);
  }
}