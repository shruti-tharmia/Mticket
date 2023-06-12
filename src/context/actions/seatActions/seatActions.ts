import { SEAT_DATA } from '../../../constants/seat';

export const seatDataAction = (data: any) => ({
  type: SEAT_DATA,
  payload: data,
});
