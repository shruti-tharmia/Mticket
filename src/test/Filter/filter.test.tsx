import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Filter from '../../components/Filter/filter';
import { filterInitialState } from '../../components/Filter/filter.data';
import { filterDataAction } from '../../context/actions/dashboardActions/dashboardActions';
import { initialState } from '../../context/reducers';
import StoreProvider, {
  StoreContext,
} from '../../context/StoreContext/storeContext';

import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';
import { epochDate } from '../../utils/utility';

const elements = () => ({
  filter: screen.getByTestId('filter'),
  filterForm: screen.getByTestId('filterForm'),
  departureInput: screen.getByTestId('departureInput'),
  vehicleTypeInput: screen.getByTestId('vehicleTypeInput'),
  vehicleClassTypeInput: screen.getByTestId('vehicleClassTypeInput'),
  priceInput: screen.getByTestId('priceInput'),
  filterButton: screen.getByTestId('filterButton'),
});

test('render filter correctly', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <BrowserRouter>
            <Filter />
          </BrowserRouter>
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const {
    departureInput,
    filter,
    filterButton,
    filterForm,
    priceInput,
    vehicleClassTypeInput,
    vehicleTypeInput,
  } = elements();

  expect(departureInput).toBeInTheDocument();
  expect(filter).toBeInTheDocument();
  expect(filterButton).toBeInTheDocument();
  expect(filterForm).toBeInTheDocument();
  expect(priceInput).toBeInTheDocument();
  expect(vehicleClassTypeInput).toBeInTheDocument();
  expect(vehicleTypeInput).toBeInTheDocument();
});

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
            <Filter />
          </BrowserRouter>
        </StoreContext.Provider>
        ,
      </MuiThemeProvider>
    </LocalisationProvider>,
  );
  const { filterForm } = elements();

  fireEvent.submit(filterForm);
  await waitFor(() => {
    expect(dispatch).toHaveBeenCalledWith(
      filterDataAction({ ...filterInitialState, isFiltered: true }),
    );
  });
});

test('getSearchResults function is called with correct arguments', async () => {
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
            <Filter />
          </BrowserRouter>
        </StoreContext.Provider>
        ,
      </MuiThemeProvider>
    </LocalisationProvider>,
  );
  const { filterForm } = elements();

  const {
    dashboardState: { searchFormData },
  } = state;
  const { date } = searchFormData;

  fireEvent.submit(filterForm);

  await waitFor(() => {
    expect(getSearchResults).toHaveBeenCalledWith({
      ...searchFormData,
      date: epochDate(date),
      filterBy: filterInitialState,
    });
  });
});
