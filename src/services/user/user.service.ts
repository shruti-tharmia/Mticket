import { apiRoutes } from '../../constants/apiRoutes';
import utility from '../../utils/utility';
import { axiosInstance } from '../axios.interceptors';

export const fetchAllStations = async () => {
  try {
    const { data } = await axiosInstance.get(apiRoutes.vehicle);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSecurityQuestions = async () => {
  try {
    const { data } = await axiosInstance.get(apiRoutes.getSecurityQuestions);
    utility.setStore('accessToken', data.access_token);
    utility.setStore('refreshToken', data.refresh_token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRecentlyBookedTicket = async () => {
  try {
    const userId = utility.getStore('userId');
    const { data } = await axiosInstance.get(
      `${apiRoutes.recentBookings}${userId}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
