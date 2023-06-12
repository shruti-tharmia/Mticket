import { TOASTER_DATA } from '../../../constants/toaster';
import { IReducerAction } from '../index.types';
import { IToasterState } from './toasterReducer.types';

const INITIAL_STATE: IToasterState = {
  message: '',
  showMessage: false,
  type: '',
};

const toasterReducer = (
  state: IToasterState,
  { type, payload }: IReducerAction,
) => {
  switch (type) {
    case TOASTER_DATA: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

toasterReducer.INITIAL_STATE = INITIAL_STATE;

export default toasterReducer;
