import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { bookingsDetailsData } from '../../components/BookingDetails/bookingDetails.data';
import GenericTable from '../../components/GenericTable/genericTable';

import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const elements = () => ({
  tableContainer: screen.getByTestId('tableContainer'),
  table: screen.getByTestId('table'),
  tableHead: screen.getByTestId('tableHead'),
  tableBody: screen.getByTestId('tableBody'),
});

test('render generic table correctly correctly', () => {
  const headers = [
    { id: 'passengerName', displayName: 'Name' },
    { id: 'passengerGender', displayName: 'Gender' },
    { id: 'passengerAge', displayName: 'Age' },
    { id: 'passengerSeat', displayName: 'Seat No.' },
  ];
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <BrowserRouter>
          <GenericTable
            data={bookingsDetailsData.passengerDetails}
            headers={headers}
          />
        </BrowserRouter>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const { table, tableBody, tableContainer, tableHead } = elements();

  expect(tableContainer).toBeInTheDocument();
  expect(table).toBeInTheDocument();
  expect(tableBody).toBeInTheDocument();
  expect(tableHead).toBeInTheDocument();
});
