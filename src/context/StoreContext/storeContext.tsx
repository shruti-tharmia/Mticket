import { createContext, useReducer } from 'react';
import { reducer, initialState } from '../reducers/index';
import { IStoreContext, IStoreProviderProps } from './storeContext.types';
import {
  pageNumberAction,
  searchDataAction,
} from '../actions/dashboardActions/dashboardActions';
import { searchApi } from '../../services/search/search.service';
import { ISearchData } from '../reducers/dashboardReducer/dashboardReducer.types';

export const StoreContext = createContext<IStoreContext | null>(null);

const StoreProvider = ({ children }: IStoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSearchResults = async (info: any) => {
    const { pageNumber, searchData } = state.dashboardState;
    try {
      const response: ISearchData = await searchApi(info, pageNumber);
      dispatch(
        searchDataAction({
          ...response,
          data: searchData.data.concat(response.data),
        }),
      );

      return response;
    } catch (error) {
      throw error;
    }
  };

  const resetState = () => {
    dispatch(pageNumberAction(0));
    dispatch(
      searchDataAction({
        data: [],
        nextPage: false,
        previousPage: false,
        totoalRecord: 0,
      }),
    );
  };

  return (
    <StoreContext.Provider
      value={{ state, dispatch, getSearchResults, resetState }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
