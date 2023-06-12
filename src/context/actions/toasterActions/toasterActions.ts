import { TOASTER_DATA } from '../../../constants/toaster';
import { IToasterState } from '../../reducers/toasterReducer/toasterReducer.types';

export const toasterDataAction = (data: IToasterState) => ({
  type: TOASTER_DATA,
  payload: data,
});
