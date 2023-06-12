import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BusResultCard from '../../components/BusResultCard/busResultCard';
import { searchResults } from '../../components/BusResults/busResults.data';
import { seatDataAction } from '../../context/actions/seatActions/seatActions';
import { initialState } from '../../context/reducers';
import StoreProvider, {
  StoreContext,
} from '../../context/StoreContext/storeContext';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const elements = () => ({
  busResultCard: screen.getByTestId('busResultCard'),
  vehicleDetails: screen.getByTestId('vehicleDetails'),
  busDetails: screen.getByTestId('busDetails'),
  vehicleAndTimeDetails: screen.getByTestId('vehicleAndTimeDetails'),
  vehicle: screen.getByTestId('vehicle'),
  timeDetails: screen.getByTestId('timeDetails'),
  fare: screen.getByTestId('fare'),
  seatsAvailability: screen.getByTestId('seatsAvailability'),
  viewSeatsButton: screen.getByTestId('viewSeatsButton'),
  amenities: screen.getByTestId('amenities'),
});

test('render bus result card correctly', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <BrowserRouter>
            <BusResultCard data={searchResults[0]} />
          </BrowserRouter>
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const {
    busResultCard,
    vehicleDetails,
    busDetails,
    vehicleAndTimeDetails,
    amenities,
    fare,
    seatsAvailability,
    timeDetails,
    vehicle,
    viewSeatsButton,
  } = elements();

  expect(busResultCard).toBeInTheDocument();
  expect(vehicleDetails).toBeInTheDocument();
  expect(busDetails).toBeInTheDocument();
  expect(vehicleAndTimeDetails).toBeInTheDocument();
  expect(amenities).toBeInTheDocument();
  expect(fare).toBeInTheDocument();
  expect(timeDetails).toBeInTheDocument();
  expect(seatsAvailability).toBeInTheDocument();
  expect(vehicle).toBeInTheDocument();
  expect(viewSeatsButton).toBeInTheDocument();
});
test('amenities are shown correctly on click', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <BrowserRouter>
            <BusResultCard data={searchResults[0]} />
          </BrowserRouter>
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const { amenities } = elements();

  fireEvent.click(amenities);

  const amenitiesContainer = screen.getByTestId('amenitiesContainer');

  expect(amenitiesContainer).toBeInTheDocument();
});

test('handleViewSeat function is called and dispatches correct action', async () => {
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
            <BusResultCard data={searchResults[0]} />
          </BrowserRouter>
        </StoreContext.Provider>
        ,
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const { viewSeatsButton } = elements();

  fireEvent.click(viewSeatsButton);

  await waitFor(() => {
    expect(dispatch).toHaveBeenCalledWith(seatDataAction(searchResults[0]));
  });
});
