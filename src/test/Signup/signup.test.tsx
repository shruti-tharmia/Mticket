import { BrowserRouter } from 'react-router-dom';

import { act, fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Signup from '../../components/Signup/signup';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';
import { signUp } from '../../services/auth/auth.service';
import StoreProvider from '../../context/StoreContext/storeContext';

const renderComponents = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <Signup />
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>
  );
};

const elements = () => ({
  signup: screen.getByTestId('signupForm'),
  email: screen.getByTestId('emailInput'),
  occupation: screen.getByTestId('occupationInput'),
  phone: screen.getByTestId('phoneInput'),
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
  emailByText: screen.getByLabelText('*Enter Email') as HTMLInputElement,
  name: screen.getByLabelText('*Enter Name') as HTMLInputElement,
  gender: screen.getByLabelText('*Select Gender') as HTMLInputElement,
  phoneByText: screen.getByLabelText('*Enter Phone Number') as HTMLInputElement,
  occupationByText: screen.getByLabelText(
    '*Enter Occupation',
  ) as HTMLInputElement,
  passwordByText: screen.getByLabelText(
    '*Enter New Password',
  ) as HTMLInputElement,
  securityQuestionByText: screen.getByLabelText(
    '*Select Security Question',
  ) as HTMLInputElement,
  securityAnswerByText: screen.getByLabelText(
    '*Security Question Answer',
  ) as HTMLInputElement,
  submitButton: screen.getByText('Update Password') as HTMLButtonElement,
});

test('Rendered Signup Component', () => {
  render(renderComponents());
  const signup = screen.getByTestId('signupForm');
  expect(signup).toBeInTheDocument();
});

/////////////////////////////////////////////////////////////////////

test('Signup Form Fields Test', async () => {
  render(renderComponents());

  const {
    email,
    occupation,
    phone,
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
  userEvent.type(phone, '9999999999');
  userEvent.type(occupation, 'student');

  expect(email).toBeInTheDocument();
  expect(newPassword).toBeInTheDocument();
  expect(confirmPassword).toBeInTheDocument();
  expect(securityQuestion).toBeInTheDocument();
  expect(securityAnswer).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
  expect(occupation).toBeInTheDocument();
});

//////////////////////////////////////////////////////////////////////

test('Password Match Check', () => {
  render(renderComponents());

  const { newPasswordByText, confirmPasswordByText } = elements();

  userEvent.type(newPasswordByText, '123456');
  userEvent.type(confirmPasswordByText, '123456');
  expect(newPasswordByText.value).toEqual(confirmPasswordByText.value);
});

/////////////////////////////////////////////////////////////

test('Password Length Check', () => {
  render(renderComponents());

  const { newPasswordByText, confirmPasswordByText } = elements();

  userEvent.type(newPasswordByText, '123456');
  userEvent.type(confirmPasswordByText, '123456');

  expect(newPasswordByText.value).toHaveLength(6);
  expect(confirmPasswordByText.value).toHaveLength(6);
});

///////////////////////////////////////////////////

const mockPostData = {
  name: 'sarang',
  email: 'sarang@gmail.com',
  securityQuestion: 'what is your favourite food?',
  securityAnswer: 'abc',
  password: '333333',
  confirmPassword: '333333',
  phone: '8766533201',
  occupation: 'ASE',
  gender: 'male',
};

test('Should submit form successfully', async () => {
  const response = await signUp(mockPostData);
  render(renderComponents());

  const {
    emailByText,
    name,
    gender,
    phoneByText,
    occupationByText,
    passwordByText,
    confirmPasswordByText,
    securityAnswerByText,
    securityQuestionByText,
    submitButton,
  } = elements();

  userEvent.type(name, mockPostData.name);
  userEvent.type(confirmPasswordByText, mockPostData.confirmPassword);
  userEvent.type(emailByText, mockPostData.email);
  userEvent.type(securityQuestionByText, mockPostData.securityQuestion);
  userEvent.type(gender, mockPostData.gender);
  userEvent.type(passwordByText, mockPostData.password);
  userEvent.type(occupationByText, mockPostData.occupation);
  userEvent.type(phoneByText, mockPostData.phone);
  fireEvent.input(securityAnswerByText, mockPostData.securityAnswer);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(submitButton);
  });
  expect(response.statusCode).toEqual(200);
});
