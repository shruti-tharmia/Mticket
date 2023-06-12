import { IBookingDetailsState } from '../reducers/bookingDetailsReducer/bookingDetailsReducer.types';
import { IDashboardState } from '../reducers/dashboardReducer/dashboardReducer.types';
import { IPassengerDetailsState } from '../reducers/passengerDetailsReducer/passengerDetailsForm.types';
import { ISeatState } from '../reducers/seatReducers/seatReducer.types';
import { IToasterState } from '../reducers/toasterReducer/toasterReducer.types';

export interface IInitialState {
  dashboardState: IDashboardState;
  toasterState: IToasterState;
  seatState: ISeatState;
  passengerDetailsFormData: IPassengerDetailsState;
  bookingDetailsState: IBookingDetailsState;
}
