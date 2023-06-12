import { PASSENGER_DETAILS_FORM_DATA } from '../../../constants/passengerDetailsConstants';
import { IPassengerDetailsState } from '../../reducers/passengerDetailsReducer/passengerDetailsForm.types';

export const passengerDetailsFormData = (data: IPassengerDetailsState) => ({
  type: PASSENGER_DETAILS_FORM_DATA,
  payload: data,
});
