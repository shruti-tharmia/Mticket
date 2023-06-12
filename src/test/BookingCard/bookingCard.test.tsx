import { render, screen } from '@testing-library/react';
import BookingCard from '../../components/BookingCard/bookingCard';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import { mockBookingsData } from '../../mock/bookingsData/bookings.data';
import MuiThemeProvider from '../../theme/themeProvider';

test('render booking card correclty', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <BookingCard data={mockBookingsData[0]} />
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const bookingCard = screen.getByTestId('bookingCard');
  const cardHeader = screen.getByTestId('cardHeader');
  const cities = screen.getByTestId('cities');

  expect(bookingCard).toBeInTheDocument();
  expect(cardHeader).toBeInTheDocument();
  expect(cities).toBeInTheDocument();
});
