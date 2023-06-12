import {
  act,
  fireEvent,
  cleanup,
  render,
  screen,
} from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { forgotPassword } from '../../services/auth/auth.service';

import userEvent from '@testing-library/user-event';
import ForgotPassword from '../../components/ForgotPassword/forgotPassword';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';
import StoreProvider from '../../context/StoreContext/storeContext';

const renderComponents = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <ForgotPassword />
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>
  );
};

const elements = () => ({
  forgotPassword: screen.getByTestId('forgotPasswordForm'),
  email: screen.getByTestId('emailInput'),
  newPassword: screen.getByTestId('passwordInput'),
  confirmPassword: screen.getByTestId('confirmPasswordInput'),
  securityQuestion: screen.getByTestId('securityQuestion-field'),
  securityAnswer: screen.getByTestId('securityAnswerInput'),
  newPasswordByText: screen.getByLabelText(
    '*Enter New Password',
  ) as HTMLInputElement,
  confirmPasswordByText: screen.getByLabelText(
    '*Confirm New Password',
  ) as HTMLInputElement,
  submitButton: screen.getByText('Update Password') as HTMLButtonElement,
  emailByText: screen.getByLabelText('*Enter Email') as HTMLInputElement,
  password: screen.getByLabelText('*Enter New Password') as HTMLInputElement,
  securityQuestionByText: screen.getByLabelText(
    '*Select Security Question',
  ) as HTMLInputElement,
  securityAnswerByText: screen.getByLabelText(
    '*Security Question Answer',
  ) as HTMLInputElement,
});

test('Rendered Forgot Password', () => {
  render(renderComponents());

  const forgotPassword = screen.getByTestId('forgotPasswordForm');
  expect(forgotPassword).toBeInTheDocument();
});

////////////////////////////////////////////////////////////////////////////////

test('Forgot Password Fields Test', async () => {
  render(renderComponents());

  const {
    email,
    newPassword,
    confirmPassword,
    securityQuestion,
    securityAnswer,
  } = elements();

  userEvent.type(email, 'stharmia@gmail.com');
  userEvent.type(newPassword, '123456');
  userEvent.type(confirmPassword, '123456');
  userEvent.type(securityQuestion, 'What is the name of your pet?');
  userEvent.type(securityAnswer, 'manan');

  expect(email).toBeInTheDocument();
  expect(newPassword).toBeInTheDocument();
  expect(confirmPassword).toBeInTheDocument();
  expect(securityQuestion).toBeInTheDocument();
  expect(securityAnswer).toBeInTheDocument();
});

////////////////////////////////////////////////////////////////////////////////

test('Password Match Check', () => {
  render(renderComponents());

  const { newPasswordByText, confirmPasswordByText } = elements();

  userEvent.type(newPasswordByText, '123456');
  userEvent.type(confirmPasswordByText, '123456');
  expect(newPasswordByText.value).toEqual(confirmPasswordByText.value);
});

////////////////////////////////////////////////////////////////////////////////

test('Password Length Check', () => {
  render(renderComponents());

  const { newPasswordByText, confirmPasswordByText } = elements();

  userEvent.type(newPasswordByText, '123456');
  userEvent.type(confirmPasswordByText, '123456');

  expect(newPasswordByText.value).toHaveLength(6);
  expect(confirmPasswordByText.value).toHaveLength(6);
});

////////////////////////////////////////////////////////////////////////////////

const mockValue = 'Test@123';
afterEach(cleanup);

test('should watch input correctly', () => {
  render(renderComponents());

  const { newPasswordByText, confirmPasswordByText } = elements();

  fireEvent.input(newPasswordByText, {
    target: {
      value: mockValue,
    },
  });
  fireEvent.input(confirmPasswordByText, {
    target: {
      value: mockValue,
    },
  });
  expect(newPasswordByText.value).toEqual(mockValue);
  expect(confirmPasswordByText.value).toEqual(mockValue);
});

///////////////////////////////////////////////////////////////

test('Should display correct error message for password miss match', async () => {
  const { container } = render(renderComponents());

  const { newPasswordByText, confirmPasswordByText, submitButton } = elements();

  fireEvent.input(newPasswordByText, {
    target: {
      value: mockValue,
    },
  });
  fireEvent.input(confirmPasswordByText, {
    target: {
      value: `${mockValue}4`,
    },
  });
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(submitButton);
  });
  expect(container.textContent).toContain('Passwords Do Not Match');
});

////////////////////////////////////////////////////////////////
const mockPostData = {
  email: 'abhay@gmail.com',
  securityQuestion: 'what is your favourite food?',
  securityAnswer: 'abc',
  password: 'dddddd',
  confirmPassword: 'dddddd',
};
test('Should submit form successfully', async () => {
  const response = await forgotPassword(mockPostData);
  render(renderComponents());

  const {
    password,
    confirmPasswordByText,
    emailByText,
    securityQuestionByText,
    securityAnswerByText,
    submitButton,
  } = elements();

  userEvent.type(password, mockValue);
  userEvent.type(confirmPasswordByText, mockValue);
  userEvent.type(emailByText, mockPostData.email);
  userEvent.type(securityQuestionByText, mockPostData.securityQuestion);
  fireEvent.input(securityAnswerByText, mockPostData.securityAnswer);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(submitButton);
  });
  expect(response.statusCode).toEqual(200);
});

/////////////////////////////////////////
