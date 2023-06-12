import bookingDetailsReducer from '../reducers/bookingDetailsReducer/bookingDetailsReducer';
import dashboardReducer from '../reducers/dashboardReducer/dashboardReducer';
import passengerDetailsReducer from '../reducers/passengerDetailsReducer/passengerDetailsReducer';
import seatReducer from '../reducers/seatReducers/seatReducer';
import toasterReducer from '../reducers/toasterReducer/toasterReducer';
import { IInitialState } from './initialState.types';

export const initialState: IInitialState = {
  dashboardState: dashboardReducer.INITIAL_STATE,
  toasterState: toasterReducer.INITIAL_STATE,
  seatState: seatReducer.INITIAL_STATE,
  passengerDetailsFormData: passengerDetailsReducer.INITIAL_STATE,
  bookingDetailsState: bookingDetailsReducer.INITIAL_STATE,
};
