import React, { useEffect, useState } from 'react';
import { Avatar, Popover } from 'antd';
import Button from '../Button';
import fetchAPI from '../../fetchAPI';
import { AtSignIcon, PhoneIcon, DepartmentIcon, EmailIcon, ChatIcon } from './Icon';

var ContentPopover = function ContentPopover(_ref) {
  var user = _ref.user,
      bg = _ref.bg;
  var fullName = user.fullName,
      _user$username = user.username,
      username = _user$username === void 0 ? false : _user$username,
      avatar = user.avatar,
      _user$email = user.email,
      email = _user$email === void 0 ? false : _user$email,
      _user$phone = user.phone,
      phone = _user$phone === void 0 ? false : _user$phone,
      _user$lastName = user.lastName,
      lastName = _user$lastName === void 0 ? 'B' : _user$lastName,
      organizationInfo = user.organizationInfo,
      organization = user.organization;

  var _useState = useState(organizationInfo == null ? void 0 : organizationInfo.name),
      orgName = _useState[0],
      setOrgName = _useState[1];

  useEffect(function () {
    if (!(organizationInfo == null ? void 0 : organizationInfo.name)) {
      var endpoint = process.env.FWORK_API_ENDPOINT + '/iam';
      fetchAPI(endpoint + ("/organizations/" + organization + "/plain-info"), 'GET').then(function (_ref2) {
        var _res$data;

        var res = _ref2.data;

        if (!res.success && !res.data) {
          return;
        }

        setOrgName((_res$data = res.data) == null ? void 0 : _res$data.name);
      });
    }
  }, [organizationInfo == null ? void 0 : organizationInfo.name]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/React.createElement(Avatar, {
    style: {
      background: bg
    },
    src: avatar,
    size: 96
  }, lastName[0])), /*#__PURE__*/React.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/React.createElement("h5", null, fullName), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DepartmentIcon, null), /*#__PURE__*/React.createElement("span", null, orgName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AtSignIcon, null), /*#__PURE__*/React.createElement("span", null, username)), phone && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhoneIcon, null), /*#__PURE__*/React.createElement("span", null, phone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmailIcon, null), /*#__PURE__*/React.createElement("span", null, email)))), /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    block: true
  }, /*#__PURE__*/React.createElement(ChatIcon, null), /*#__PURE__*/React.createElement("span", null, "Nh\u1EAFn tin")));
};

var Popup = function Popup(_ref3) {
  var _ref3$user = _ref3.user,
      user = _ref3$user === void 0 ? {} : _ref3$user,
      _ref3$styleAvatar = _ref3.styleAvatar,
      styleAvatar = _ref3$styleAvatar === void 0 ? {} : _ref3$styleAvatar,
      size = _ref3.size,
      placement = _ref3.placement,
      _ref3$showName = _ref3.showName,
      showName = _ref3$showName === void 0 ? false : _ref3$showName;
  return /*#__PURE__*/React.createElement(Popover, {
    content: /*#__PURE__*/React.createElement(ContentPopover, {
      user: user,
      bg: styleAvatar.background
    }),
    style: styleAvatar,
    placement: placement,
    overlayClassName: "fw-overlay-user"
  }, /*#__PURE__*/React.createElement(Avatar, {
    style: styleAvatar,
    size: size,
    src: user == null ? void 0 : user.avatar
  }, user == null ? void 0 : user.lastName[0]), showName ? /*#__PURE__*/React.createElement("span", {
    className: "fullname"
  }, user == null ? void 0 : user.fullName) : '');
};

export default Popup;