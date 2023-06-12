import { PASSENGER_DETAILS_FORM_DATA } from '../../../constants/passengerDetailsConstants';
import { IReducerAction } from '../index.types';
import { IPassengerDetailsState } from './passengerDetailsForm.types';

const INITIAL_STATE: IPassengerDetailsState = {
  passengerDetails: [],
};

const passengerDetailsReducer = (
  state: IPassengerDetailsState,
  { type, payload }: IReducerAction,
) => {
  switch (type) {
    case PASSENGER_DETAILS_FORM_DATA: {
      return { ...state, passengerDetails: payload };
    }
    default: {
      return state;
    }
  }
};

passengerDetailsReducer.INITIAL_STATE = INITIAL_STATE;

export default passengerDetailsReducer;
