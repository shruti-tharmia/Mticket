import { ISignInInput } from '../../components/SignIn/signIn.types';
import { apiRoutes } from '../../constants/apiRoutes';
import utility from '../../utils/utility';
import { axiosInstance } from '../axios.interceptors';
import { ISignupProps } from '../../components/Signup/signup.types';
import IForgotPasswordProps from '../../components/ForgotPassword/forgotPassword.types';
import IChangePasswordProps from '../../components/ChangePassword/changePassword.types';

export const signIn = async (signInData: ISignInInput) => {
  try {
    const { data } = await axiosInstance.post(apiRoutes.logIn, signInData);
    utility.setStore('accessToken', data.access_token);
    utility.setStore('refreshToken', data.refresh_token);
    utility.setStore('userId', data.id);
    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const { data } = await axiosInstance.post(apiRoutes.logout, {
      refresh_token: utility.getStore('refreshToken'),
    });
    utility.setStore('accessToken', '');
    utility.setStore('refreshToken', '');
    return data;
  } catch (error) {
    throw error;
  }
};

export const refreshAccessToken = async () => {
  const { data } = await axiosInstance.post(apiRoutes.refresh, {
    refresh: utility.getStore('refreshToken'),
  });
  console.log(data);
  return data;
};
export const signUp = async (signUpData: ISignupProps) => {
  try {
    const { data } = await axiosInstance.post(apiRoutes.signup, signUpData);
    utility.setStore('accessToken', data.access_token);
    utility.setStore('refreshToken', data.refresh_token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (
  forgotPasswordData: IForgotPasswordProps,
) => {
  try {
    const { data } = await axiosInstance.put(
      apiRoutes.forgotPassword,
      forgotPasswordData,
    );
    utility.setStore('accessToken', data.access_token);
    utility.setStore('refreshToken', data.refresh_token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (
  changePasswordData: IChangePasswordProps,
) => {
  try {
    const { data } = await axiosInstance.put(
      apiRoutes.changePassword,
      changePasswordData,
    );
    utility.setStore('accessToken', data.access_token);
    utility.setStore('refreshToken', data.refresh_token);
    return data;
  } catch (error) {
    throw error;
  }
};
