export interface ISearchInput {
  from: string;
  to: string;
  date: Date;
}

export interface ISearchProps {
  navigateTo?: string;
}

export interface IAllStation {
  _id: string;
  stationName: string;
}
