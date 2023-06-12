import { Dispatch } from 'react';
import { PropsWithChildren } from 'react';
import { IReducerAction } from '../reducers/index.types';
import { IInitialState } from '../state/initialState.types';

export interface IStoreProviderProps extends PropsWithChildren {}

export interface IStoreContext {
  state: IInitialState;
  dispatch: Dispatch<IReducerAction>;
  getSearchResults: (data: any) => any;
  resetState: () => void;
}
