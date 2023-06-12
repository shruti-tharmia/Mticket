import {
  FILTER_FORM_DATA,
  SEARCH_DATA,
  SEARCH_FORM_DATA,
  PAGE_NUMBER,
  SORT_DATA,
} from '../../../constants/dashboard';
import { IReducerAction } from '../index.types';
import { IDashboardState } from './dashboardReducer.types';

const INITIAL_STATE: IDashboardState = {
  searchData: {
    data: [],
    nextPage: false,
    previousPage: false,
    totoalRecord: 0,
  },
  searchFormData: {
    from: '',
    to: '',
    date: new Date(),
  },
  filterData: {
    isFiltered: false,
    vehicleClassType: [],
    vehicleType: '',
    departure: '',
    price: [0, 100],
  },
  sortData: {
    isSorted: false,
    fixedFare: '',
    name: '',
    ratings: [],
  },
  pageNumber: 0,
};

const dashboardReducer = (
  state: IDashboardState,
  { type, payload }: IReducerAction,
) => {
  switch (type) {
    case SEARCH_DATA: {
      return { ...state, searchData: payload };
    }
    case SEARCH_FORM_DATA: {
      return { ...state, searchFormData: payload };
    }
    case FILTER_FORM_DATA: {
      return { ...state, filterData: payload };
    }
    case SORT_DATA: {
      return { ...state, sortData: payload };
    }
    case PAGE_NUMBER: {
      return { ...state, pageNumber: payload };
    }
    default: {
      return state;
    }
  }
};

dashboardReducer.INITIAL_STATE = INITIAL_STATE;

export default dashboardReducer;
