import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sort from '../../components/Sort/sort';
import { sortInitialState } from '../../components/Sort/sort.data';
import { sortDataAction } from '../../context/actions/dashboardActions/dashboardActions';
import { initialState } from '../../context/reducers';
import StoreProvider, {
  StoreContext,
} from '../../context/StoreContext/storeContext';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';
import { epochDate } from '../../utils/utility';

const elements = () => ({
  sort: screen.getByTestId('sort'),
  sortForm: screen.getByTestId('sortForm'),
  fixedFareInput: screen.getByTestId('fixedFareInput'),
  nameInput: screen.getByTestId('nameInput'),
  ratingsInput: screen.getByTestId('ratingsInput'),
  sortButton: screen.getByTestId('sortButton'),
});

const renderComponents = () => {
  return (
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <Sort />
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>
  );
};

test('render filter correctly', () => {
  render(renderComponents());

  const {
    fixedFareInput,
    nameInput,
    ratingsInput,
    sort,
    sortButton,
    sortForm,
  } = elements();
  expect(fixedFareInput).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(ratingsInput).toBeInTheDocument();
  expect(sort).toBeInTheDocument();
  expect(sortButton).toBeInTheDocument();
  expect(sortForm).toBeInTheDocument();
});

///////////////////////////////

test('handleSubmit function is called and dispatches correct action', async () => {
  const dispatch = jest.fn();
  const getSearchResults = jest.fn();
  const resetState = jest.fn();
  const state = initialState;
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreContext.Provider
          value={{ dispatch, state, resetState, getSearchResults }}>
          <BrowserRouter>
            <Sort />
          </BrowserRouter>
        </StoreContext.Provider>
        ,
      </MuiThemeProvider>
    </LocalisationProvider>,
  );
  const { sortForm } = elements();
  fireEvent.submit(sortForm);
  await waitFor(() => {
    expect(dispatch).toHaveBeenCalledWith(
      sortDataAction({ ...sortInitialState, isSorted: true }),
    );
  });
});

/////////////////////////////////////

test('getSearchResults function is called with correct arguments and navigates to correct route', async () => {
  const dispatch = jest.fn();
  const getSearchResults = jest.fn();
  const resetState = jest.fn();
  const state = initialState;
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreContext.Provider
          value={{ dispatch, state, resetState, getSearchResults }}>
          <BrowserRouter>
            <Sort />
          </BrowserRouter>
        </StoreContext.Provider>
        ,
      </MuiThemeProvider>
    </LocalisationProvider>,
  );
  const { sortForm } = elements();
  const {
    dashboardState: { searchFormData },
  } = state;
  const { date } = searchFormData;
  fireEvent.submit(sortForm);
  await waitFor(() => {
    expect(getSearchResults).toHaveBeenCalledWith({
      ...searchFormData,
      date: epochDate(date),
      sortBy: sortInitialState,
    });
  });
});
