import {
  FILTER_FORM_DATA,
  PAGE_NUMBER,
  SEARCH_DATA,
  SEARCH_FORM_DATA,
  SORT_DATA,
} from '../../../constants/dashboard';
import {
  IFilterDataState,
  ISearchFormState,
  ISearchData,
  ISortDataState,
} from '../../reducers/dashboardReducer/dashboardReducer.types';

export const searchDataAction = (data: ISearchData) => ({
  type: SEARCH_DATA,
  payload: data,
});
export const searchFormDataAction = (data: ISearchFormState) => ({
  type: SEARCH_FORM_DATA,
  payload: data,
});
export const filterDataAction = (data: IFilterDataState) => ({
  type: FILTER_FORM_DATA,
  payload: data,
});
export const pageNumberAction = (data: number) => ({
  type: PAGE_NUMBER,
  payload: data,
});
export const sortDataAction = (data: ISortDataState) => ({
  type: SORT_DATA,
  payload: data,
});
