import {
  SET_CURRENT_USER,
  LOADING_USER_INFO,
  CLEAR_CURRENT_USER,
} from '../constants/actionTypes';
import { getToken, setToken, removeToken, setTokenExpire } from '../../localStorageCookies';
import fetchAPI from '../../fetchAPI';
const axios = require('axios');
const baseURL =
  process.env.FWORK_API_ENDPOINT + '/portal' ||
  window.location.origin + '/api/v1/portal';

export const setCurrentUser = () => {
  return (dispatch) => {
    const url = `user`;
    const token = getToken();
    if (!token) {
      dispatch({
        type: CLEAR_CURRENT_USER,
      });
      return;
    }
    dispatch({
      type: LOADING_USER_INFO,
    });
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    let options = {
      baseURL,
      url,
      method: 'GET',
      headers,
      timeout: 30000,
    };
    axios(options)
      .then((response) => {
        if (response.data.data && response.data.data.newToken) {
          setTokenExpire(response.data.data.newToken, 30);
        }
        try {
          dispatch({
            type: SET_CURRENT_USER,
            payload: response.data.data
              ? response.data.data
              : response.data.result,
          });
        } catch (e) {
          console.error('setCurrentUser ERR: ', e);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          removeToken();
          window.location.href = `/login?ref=${window.location.href}`;
        } else {
          console.error('setCurrentUser error: ', error);
        }
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    const url = `/logout`;
    const token = getToken();

    if (!token) {
      return;
    }

    removeToken();

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    let options = {
      baseURL,
      url,
      method: 'POST',
      headers,
      timeout: 5000,
    };

    if (localStorage.getItem('id-adfs-token')) {
      options.data = { idAdfsToken: localStorage.getItem('id-adfs-token') };
      localStorage.removeItem('id-adfs-token');
    }

    if (localStorage.getItem('keyprj')) {
      localStorage.removeItem('keyprj');
    }

    await axios(options);

    window.location.href = '/login';
  };
};

export const chooseCompany = (params = {}) => {
  return async (dispatch) => {
    const res = await fetchAPI(
      process.env.FWORK_API_ENDPOINT + '/portal/choose-company' ||
      'https://dev.fpt.work/api/v1/portal/choose-company',
      'POST',
      params
    );
    const { data } = res;
    if (data && data.success) {
      window.location.href = '/app-menu';
    } else {
      dispatch(logout());
      // notifyError(data.message); !!!!!!!!!!!!!!
      // history.push('/login');
    }
  };
};
