import axios from 'axios';
import { STATUS_CODE } from '../constants/apiStatusCode';
import utility from '../utils/utility';

const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(config => {
  const token = utility.getStore('acessToken');
  config.headers = {
    'Content-Type': 'application/json',
    authorization: token || '',
  };
  return config;
});

const refreshAccessToken = async () => {
  const { data } = await axiosInstance.post('auth/refresh', {
    refresh: utility.getStore('refreshToken'),
  });

  return data;
};

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response) {
      if (
        error.response.status === STATUS_CODE.TOKEN_EXPRIRED &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        const accessToken = await refreshAccessToken();
        axios.defaults.headers.common['authorization'] = accessToken;

        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export const getData = async (url: string) => {
  try {
    const { data } = await axiosInstance.get(`${url}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const postData = async (url: string, formData: any) => {
  try {
    const { data } = await axiosInstance.post(`${url}`, formData);
    return data;
  } catch (error) {
    throw error;
  }
};
export const putData = async (url: string, formData: any) => {
  try {
    const { data } = await axiosInstance.put(`${url}`, formData);
    return data;
  } catch (error) {
    throw error;
  }
};
