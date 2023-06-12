import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import PassengerDetails from '../../components/PassengerDetails/passengerDetails';
import StoreProvider from '../../context/StoreContext/storeContext';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import { vehicleBooking } from '../../services/vehicle/vehicle.service';
import MuiThemeProvider from '../../theme/themeProvider';

const mockData = [
  {
    seatNo: 1,
    deck: 'lower',
    bookedGender: 'female',
    seatFare: 220,
    status: 'available',
  },
];

const passengerDetails = [
  {
    passengerName: 'shruti',
    passengerGender: 'female',
    passengerAge: '21',
    passengerSeat: '1',
    userId: '63a3fe92d0baec9bfc6ff115',
    email: 'shruti@gmail.com',
    phoneNumber: '8766288401',
  },
];

const renderComponents = () => {
  return (
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <PassengerDetails passengerCount={mockData} showModal />
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>
  );
};

const elements = () => ({
  passengerDetailsForm: screen.getByTestId('passengerDetailsForm'),
  details: screen.getByTestId('details'),
  inputFields: screen.getByTestId('inputFields'),
  contactContainer: screen.getByTestId('contactContainer'),
  submitButton: screen.getByTestId('submitButton'),
  email: screen.getByLabelText('*Enter Email') as HTMLInputElement,
  name: screen.getByLabelText('*Enter Name') as HTMLInputElement,
  age: screen.getByLabelText('*Enter Age') as HTMLInputElement,
  gender: screen.getByLabelText('*Select Gender') as HTMLInputElement,
  phone: screen.getByLabelText('*Enter Phone Number') as HTMLInputElement,
  emailInput: screen.getByLabelText('*Enter Email') as HTMLInputElement,
});

test('render passenger details form component correctly', () => {
  render(renderComponents());

  const {
    passengerDetailsForm,
    details,
    inputFields,
    contactContainer,
    submitButton,
  } = elements();

  expect(passengerDetailsForm).toBeInTheDocument();
  expect(details).toBeInTheDocument();
  expect(inputFields).toBeInTheDocument();
  expect(contactContainer).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

///////////////////////////

test('Should submit form successfully', async () => {
  const response = await vehicleBooking(
    passengerDetails,
    '63b54422de978c8b13c68c7f',
  );
  render(renderComponents());

  const { email, name, age, phone, gender, submitButton } = elements();

  userEvent.type(email, passengerDetails[0].email);
  userEvent.type(name, passengerDetails[0].passengerName);
  userEvent.type(age, passengerDetails[0].passengerAge);
  userEvent.type(phone, passengerDetails[0].phoneNumber);
  userEvent.type(gender, passengerDetails[0].passengerGender);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(submitButton);
  });
  expect(response.statusCode).toEqual(200);
});

///////////////////////////////

test('Should display correct error message for valid email', async () => {
  const { container } = render(renderComponents());

  const { emailInput, phone, passengerDetailsForm } = elements();

  userEvent.type(emailInput, 'shruti.tharmia');
  userEvent.type(phone, '1234567890');

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(passengerDetailsForm);
  });

  expect(container.textContent).toContain('Enter a valid email address');
});
