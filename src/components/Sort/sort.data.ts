import { ISortDataState } from '../../context/reducers/dashboardReducer/dashboardReducer.types';

export const sortInitialState: ISortDataState = {
  isSorted: false,
  fixedFare: '',
  ratings: [],
  name: '',
};
