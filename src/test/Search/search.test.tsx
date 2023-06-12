import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Search from '../../components/Search/search';
import { searchFormDataAction } from '../../context/actions/dashboardActions/dashboardActions';

import { initialState } from '../../context/reducers';
import StoreProvider, {
  StoreContext,
} from '../../context/StoreContext/storeContext';

import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const elements = () => ({
  search: screen.getByTestId('search'),
  searchForm: screen.getByTestId('searchForm'),
  fromInput: screen.getByPlaceholderText('*From') as HTMLInputElement,
  toInput: screen.getByPlaceholderText('*To') as HTMLInputElement,
  dateInput: screen.getByPlaceholderText('*Date'),
  searchButton: screen.getByTestId('searchButton'),
});

const mockData = {
  from: 'mumbai',
  to: 'pune',
  date: new Date(),
};

afterEach(cleanup);

test('render search correctly', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <BrowserRouter>
            <Search />
          </BrowserRouter>
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const { dateInput, fromInput, toInput, search, searchButton, searchForm } =
    elements();

  expect(search).toBeInTheDocument();
  expect(searchForm).toBeInTheDocument();
  expect(fromInput).toBeInTheDocument();
  expect(toInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('should not be able to search if any one the input is left empty', async () => {
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
            <Search />
          </BrowserRouter>
        </StoreContext.Provider>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );
  const { searchForm, fromInput } = elements();

  userEvent.type(fromInput, 'mumbai');

  fireEvent.submit(searchForm);
  await waitFor(() => {
    expect(dispatch).not.toHaveBeenCalled();
  });
});

test('dipatch function is called with correct arguments and on valid inputs', async () => {
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
            <Search />
          </BrowserRouter>
        </StoreContext.Provider>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );
  const { searchForm, fromInput, toInput } = elements();

  userEvent.type(toInput, 'pune');
  userEvent.type(fromInput, 'mumbai');

  console.log('value', 'from:', fromInput.value, 'to:', toInput.value);

  fireEvent.submit(searchForm);

  await waitFor(() => {
    expect(dispatch).toHaveBeenCalledWith(searchFormDataAction(mockData));
  });
});
