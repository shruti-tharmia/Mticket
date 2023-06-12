import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingDetails from '../../components/BookingDetails/bookingDetails';

import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const elements = () => ({
  bookingDetailsFare: screen.getByTestId('bookingDetailsFare'),
  bookingDetails: screen.getByTestId('bookingDetails'),
  bookingDetailsHeader: screen.getByTestId('bookingDetailsHeader'),
  bookingDetailsMain: screen.getByTestId('bookingDetailsMain'),
  dateAndBookingPersonDetails: screen.getByTestId(
    'dateAndBookingPersonDetails',
  ),
  busdetailsContainer: screen.getByTestId('busdetailsContainer'),
  passengerDetailsContainer: screen.getByTestId('passengerDetailsContainer'),
});

test('render bookingsDetails correctly', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <BrowserRouter>
          <BookingDetails />
        </BrowserRouter>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const {
    bookingDetails,
    bookingDetailsFare,
    bookingDetailsHeader,
    bookingDetailsMain,
    busdetailsContainer,
    dateAndBookingPersonDetails,
    passengerDetailsContainer,
  } = elements();

  expect(bookingDetails).toBeInTheDocument();
  expect(bookingDetailsFare).toBeInTheDocument();
  expect(bookingDetailsHeader).toBeInTheDocument();
  expect(bookingDetailsMain).toBeInTheDocument();
  expect(busdetailsContainer).toBeInTheDocument();
  expect(dateAndBookingPersonDetails).toBeInTheDocument();
  expect(passengerDetailsContainer).toBeInTheDocument();
});
