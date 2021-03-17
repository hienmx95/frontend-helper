import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../icons/icon_search.svg';
import { debounce } from 'lodash';

var Search = function Search(_ref) {
  var onSearch = _ref.onSearch;

  var _useState = useState(true),
      hide = _useState[0],
      setHide = _useState[1];

  if (!onSearch) {
    return '';
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-header-page-search"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder || 'Tìm kiếm',
    onChange: function onChange(e) {
      var searchValue = e.target.value.trim();
      debounce(handleSearch(searchValue), 300);
    },
    className: "fwork-search-bar"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(SearchIcon, null)));
};

export default Search;