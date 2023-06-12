import { IInitialState } from '../state/initialState.types';
import { initialState } from '../state/initialStates';
import { IReducerAction } from './index.types';
import bookingDetailsReducer from './bookingDetailsReducer/bookingDetailsReducer';
import dashboardReducer from './dashboardReducer/dashboardReducer';
import passengerDetailsReducer from './passengerDetailsReducer/passengerDetailsReducer';
import seatReducer from './seatReducers/seatReducer';
import toasterReducer from './toasterReducer/toasterReducer';

const reducer: (
  state: IInitialState,
  action: IReducerAction,
) => IInitialState = (state = initialState, action) => {
  return {
    dashboardState: dashboardReducer(state.dashboardState, action),
    toasterState: toasterReducer(state.toasterState, action),
    seatState: seatReducer(state.seatState, action),
    passengerDetailsFormData: passengerDetailsReducer(
      state.passengerDetailsFormData,
      action,
    ),
    bookingDetailsState: bookingDetailsReducer(
      state.bookingDetailsState,
      action,
    ),
  };
};

export { reducer, initialState };
