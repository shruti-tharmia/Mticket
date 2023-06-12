import { SEAT_DATA } from '../../../constants/seat';
import { IReducerAction } from '../index.types';
import { ISeatState } from './seatReducer.types';

const INITIAL_STATE: ISeatState = {
  selectedVehicleData: {},
};

const seatReducer = (state: ISeatState, { type, payload }: IReducerAction) => {
  switch (type) {
    case SEAT_DATA: {
      return { ...state, selectedVehicleData: payload };
    }
    default: {
      return state;
    }
  }
};

seatReducer.INITIAL_STATE = INITIAL_STATE;

export default seatReducer;
