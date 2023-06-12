import { BOOKING_DATA, PAYMENT_INFO } from '../../../constants/bookingDetails';
import { IReducerAction } from '../index.types';
import { IBookingDetailsState } from './bookingDetailsReducer.types';

const INITIAL_STATE: IBookingDetailsState = {
  paymentInfo: {
    amountToPay: 0,
    bookingId: '',
  },
  bookingData: {
    bookingId: '',
    departureDate: '',
    departureTime: '',
    arrivalDate: '',
    arrivalTime: '',
    email: '',
    phoneNumber: 0,
    totalFare: 0,
    from: '',
    to: '',
    passengerDetails: [],
  },
};

const bookingDetailsReducer = (
  state: IBookingDetailsState,
  { type, payload }: IReducerAction,
) => {
  switch (type) {
    case BOOKING_DATA: {
      return { ...state, bookingData: payload };
    }
    case PAYMENT_INFO: {
      return { ...state, paymentInfo: payload };
    }
    default: {
      return state;
    }
  }
};

bookingDetailsReducer.INITIAL_STATE = INITIAL_STATE;

export default bookingDetailsReducer;
