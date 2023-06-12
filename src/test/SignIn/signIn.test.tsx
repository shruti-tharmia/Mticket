import {
  fireEvent,
  screen,
  render,
  act,
  cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SignIn from '../../components/SignIn/signIn';
import StoreProvider from '../../context/StoreContext/storeContext';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

afterEach(cleanup);

test('renders sign in', () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <SignIn />
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );

  const signInForm = screen.getByTestId('signInForm');
  const emailInput = screen.getByTestId('emailInput');
  const passwordInput = screen.getByTestId('passwordInput');
  const recaptcha = screen.getByTestId('recaptcha');
  const submitButton = screen.getByTestId('submitButton');
  const forgotPasswordButton = screen.getByTestId('forgotPasswordButton');
  const signUpButtom = screen.getByTestId('signUpButtom');

  userEvent.type(emailInput, 'abhay.zodape@gmail.com');
  userEvent.type(passwordInput, '1234567');

  expect(signInForm).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(recaptcha).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(forgotPasswordButton).toBeInTheDocument();
  expect(signUpButtom).toBeInTheDocument();
});

test('should display correct error message for password length', async () => {
  const { container } = render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <SignIn />
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );

  const emailInput = screen.getByLabelText('*Email') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('*Password') as HTMLInputElement;
  const signInForm = screen.getByTestId('signInForm');

  userEvent.type(emailInput, 'abhay.zodape@gmail.com');
  userEvent.type(passwordInput, '1236');

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(signInForm);
  });

  expect(container.textContent).toContain('Minimum length should be 6');
});

test('should display correct error message for valid email', async () => {
  const { container } = render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <SignIn />
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );

  const emailInput = screen.getByLabelText('*Email') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('*Password') as HTMLInputElement;
  const signInForm = screen.getByTestId('signInForm');

  userEvent.type(emailInput, 'abhay.zodape');
  userEvent.type(passwordInput, '123456');

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(signInForm);
  });

  expect(container.textContent).toContain('Enter a valid email address');
});
