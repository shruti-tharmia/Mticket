import { BOOKING_DATA, PAYMENT_INFO } from '../../../constants/bookingDetails';
import { IBookingsData } from '../../../mock/bookingsData/bookings.types';
import { IPaymentInfo } from '../../reducers/bookingDetailsReducer/bookingDetailsReducer.types';

export const paymentInfoAction = (data: IPaymentInfo) => ({
  type: PAYMENT_INFO,
  payload: data,
});
export const bookingDataAction = (data: IBookingsData) => ({
  type: BOOKING_DATA,
  payload: data,
});
