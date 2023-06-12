import { IBookingsData } from '../../../mock/bookingsData/bookings.types';

export interface IPaymentInfo {
  bookingId: string;
  amountToPay: number;
}

export interface IBookingDetailsState {
  paymentInfo: IPaymentInfo;
  bookingData: IBookingsData;
}
