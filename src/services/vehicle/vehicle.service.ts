import { IPaymentDetailsInput } from '../../components/PaymentDetails/paymentDetails.types';
import { apiRoutes } from '../../constants/apiRoutes';
import { axiosInstance } from '../axios.interceptors';

export const vehicleBooking = async (passengerData: any, vehicleId: string) => {
  try {
    const { data } = await axiosInstance.put(
      `${apiRoutes.vehicleBooking}${vehicleId}`,
      passengerData,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const payment = async (
  bookingId: string,
  cardInfo: IPaymentDetailsInput,
) => {
  try {
    const { data } = await axiosInstance.post(
      `${apiRoutes.payment}${bookingId}`,
      cardInfo,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
