import store from "~/store";
import axios from "axios";
import { logoutUserHandle } from "~/utils/storeHandle";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = store.getState().auth.user?.[import.meta.env.VITE_AUTH_TOKEN_NAME];

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    let message;

    if (error && error.response && error.response.status === 404) {
      message = error?.response.data;
      // window.location.href = '/not-found';
    } else if (error && error.response && error.response.status === 403) {
      // window.location.href = '/access-denied';
      message = error;
    } else {
      switch (error.response.status) {
        case 401:
          message = "Yetki Yok";
          logoutUserHandle();
          break;
        case 403:
          message = "Access Forbidden";
          break;
        case 404:
          message = "Sorry! the data you are looking for could not be found";
          break;
        case 505:
          window.location.href = "/error-500";
          break;
        default: {
          message = error;
        }
      }
      //Alert
      // return message;
    }
    return Promise.reject(message);
  }
);

export default axios;
