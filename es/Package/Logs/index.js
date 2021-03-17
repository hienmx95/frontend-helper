import React, { useEffect, useState } from "react";
import fetchAPI from "../../fetchAPI";
import { Avatar } from "antd";
import moment from "moment";

var Logs = function Logs(_ref) {
  var code = _ref.code;

  var _useState = useState({}),
      logs = _useState[0],
      setLogs = _useState[1];

  useEffect(function () {
    var LOGGING_BACKEND = process.env.FWORK_API_ENDPOINT + "/logging" || "https://dev.fpt.work/api/v1/logging";
    fetchAPI(LOGGING_BACKEND + "/" + code, "GET").then(function (_ref2) {
      var res = _ref2.data;

      if (!res.success || !res.data) {
        return;
      }

      setLogs(res.data);
    });
  }, []);

  var convertContent = function convertContent(content) {
    return typeof content === "boolean" ? String(content) : content;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-logs"
  }, Object.keys(logs).map(function (key) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, key), logs[key].map(function (_ref3) {
      var actionType = _ref3.actionType,
          _ref3$data = _ref3.data,
          data = _ref3$data === void 0 ? [] : _ref3$data,
          _ref3$user = _ref3.user,
          user = _ref3$user === void 0 ? {} : _ref3$user,
          createdAt = _ref3.createdAt;

      if (!Array.isArray(data)) {
        data = [];
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "fwork-logs-item"
      }, /*#__PURE__*/React.createElement("span", null, moment(createdAt).format("hh:mm")), /*#__PURE__*/React.createElement("div", {
        className: "user-infor"
      }, /*#__PURE__*/React.createElement(Avatar, {
        src: user.avatar,
        size: 24
      }, user.fullName), /*#__PURE__*/React.createElement("span", null, user.username)), /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, actionType !== 2 ? actionType === 1 ? "created" : "deleted" : data.map(function (el, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "content-item"
        }, /*#__PURE__*/React.createElement("span", null, el.field, ": "), /*#__PURE__*/React.createElement("div", {
          className: "pre-data"
        }, convertContent(el.preData)), /*#__PURE__*/React.createElement("div", {
          className: "next-data"
        }, convertContent(el.nextData)));
      }))));
    }));
  }));
};

export default Logs;