import { IFilterInput } from '../../../components/Filter/filter.types';

export interface ISearchFormState {
  from: string;
  to: string;
  date: Date;
}

export interface ISearchData {
  data: any[];
  nextPage: boolean;
  previousPage: boolean;
  totoalRecord: number;
}

export interface IFilterDataState extends IFilterInput {
  isFiltered: boolean;
}

export interface ISortDataState {
  isSorted: boolean;
  fixedFare: string;
  ratings: string[];
  name: string;
}

export interface IDashboardState {
  searchData: ISearchData;
  searchFormData: ISearchFormState;
  filterData: IFilterDataState;
  sortData: ISortDataState;
  pageNumber: number;
}
