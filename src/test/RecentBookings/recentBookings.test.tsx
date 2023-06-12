import { render, screen } from '@testing-library/react';
import RecentBookings from '../../components/RecentBookings/recentBookings';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import { mockBookingsData } from '../../mock/bookingsData/bookings.data';
import MuiThemeProvider from '../../theme/themeProvider';

const elements = () => ({
  recentBookings: screen.getByTestId('recentBookings'),
  recentBookingsHeader: screen.getByTestId('recentBookingsHeader'),
  bookings: screen.getByTestId('bookings'),
});

test('render booking card correclty', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <RecentBookings data={mockBookingsData} />
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const { bookings, recentBookings, recentBookingsHeader } = elements();

  expect(bookings).toBeInTheDocument();
  expect(recentBookings).toBeInTheDocument();
  expect(recentBookingsHeader).toBeInTheDocument();
});
